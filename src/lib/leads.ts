import type { Playbook } from "./types";
import { logEvent, saveLead } from "./db";
import { fitScore } from "./score";
import { getEnv } from "./env";
import { sendToHubspot } from "./hubspot";
import { isPersonalEmail } from "./workEmail";

export const ROLES = ["founder", "marketing", "agency", "other"] as const;

// Test runs (e.g. rui+codex-1@cavaco.ai) are stored and counted but never sent to HubSpot.
const TEST_EMAIL = /\+(codex|test)[^@]*@cavaco\.ai$/i;

export type LeadCheck = { ok: true; email: string; role: string } | { ok: false; error: "invalid_email" | "personal_email" };

export function checkLead(rawEmail: unknown, rawRole: unknown): LeadCheck {
  const email = String(rawEmail || "").trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 200) return { ok: false, error: "invalid_email" };
  if (isPersonalEmail(email)) return { ok: false, error: "personal_email" };
  const role = (ROLES as readonly string[]).includes(String(rawRole)) ? String(rawRole) : "other";
  return { ok: true, email, role };
}

/** Saves the lead, logs the funnel event and syncs it to HubSpot (and the optional webhook). */
export async function recordLead(p: Playbook, email: string, role: string, hutk: string | null | undefined, ip: string): Promise<void> {
  const score = fitScore(p, role);
  const test = TEST_EMAIL.test(email);
  await saveLead({
    playbookId: p.id,
    email,
    role,
    storeUrl: p.store.url,
    fitScore: score,
    data: { platform: p.store.platform, revenueBand: p.answers.revenueBand, adBudget: p.answers.adBudget, segment: p.segment.name, test },
  });
  await logEvent(test ? "lead_test" : "lead", ip, p.id);
  if (test) return;

  const env = await getEnv();
  const playbookUrl = `https://www.cavaco.ai/tools/marketing-playbook/p/${p.id}`;
  const hs = await sendToHubspot(env, {
    email,
    role,
    fitScore: score,
    storeUrl: p.store.url,
    platform: p.store.platform,
    emailTool: p.store.tools.email,
    revenueBand: p.answers.revenueBand,
    adBudget: p.answers.adBudget,
    segment: p.segment.name,
    playbookUrl,
    hutk,
  });
  if (hs.status) await logEvent(hs.ok ? "hubspot_ok" : "hubspot_fail", ip, p.id);
  if (env.LEAD_WEBHOOK_URL) {
    try {
      await fetch(env.LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email,
          role,
          fitScore: score,
          store: p.store.url,
          platform: p.store.platform,
          revenueBand: p.answers.revenueBand,
          adBudget: p.answers.adBudget,
          segment: p.segment.name,
          playbookUrl,
        }),
      });
    } catch {
      /* ignore */
    }
  }
}

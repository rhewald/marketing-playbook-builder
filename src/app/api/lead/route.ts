import { getPlaybook, logEvent, saveLead } from "@/lib/db";
import { fitScore } from "@/lib/score";
import { getEnv } from "@/lib/env";
import { clientIp, json } from "@/lib/http";
import { sendToHubspot } from "@/lib/hubspot";
import { isPersonalEmail } from "@/lib/workEmail";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  let body: { playbookId?: string; email?: string; role?: string; event?: string; hutk?: string } = {};
  try {
    body = await req.json();
  } catch {
    return json({ error: "bad_request" }, 400);
  }
  const ip = clientIp(req);
  const p = body.playbookId ? await getPlaybook(body.playbookId) : null;
  if (!p) return json({ error: "not_found" }, 404);

  // Lightweight intent events (e.g. "cta_click") reuse this endpoint.
  if (body.event && !body.email) {
    if (["cta_click", "print", "csv", "share"].includes(body.event)) await logEvent(body.event, ip, p.id);
    return json({ ok: true });
  }

  const email = (body.email || "").trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 200) return json({ error: "invalid_email" }, 400);
  if (isPersonalEmail(email)) return json({ error: "personal_email" }, 400);
  const role = ["founder", "marketing", "agency", "other"].includes(body.role || "") ? (body.role as string) : "other";
  const score = fitScore(p, role);
  await saveLead({
    playbookId: p.id,
    email,
    role,
    storeUrl: p.store.url,
    fitScore: score,
    data: { platform: p.store.platform, revenueBand: p.answers.revenueBand, adBudget: p.answers.adBudget, segment: p.segment.name },
  });
  await logEvent("lead", ip, p.id);

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
    hutk: body.hutk,
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
  return json({ ok: true });
}

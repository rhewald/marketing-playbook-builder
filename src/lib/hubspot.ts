import type { AppEnv } from "./env";

export interface HubspotLead {
  email: string;
  role: string;
  fitScore: number;
  storeUrl: string;
  platform: string;
  revenueBand: string;
  adBudget: string;
  segment: string;
  playbookUrl: string;
  hutk?: string | null;
}

/**
 * Sends a lead to a HubSpot form via the public Forms Submission API (no secret needed).
 * Custom fields (mpb_*) are sent only if the form accepts them; otherwise we retry with
 * the standard fields so the contact is still created.
 */
export async function sendToHubspot(env: AppEnv, lead: HubspotLead): Promise<{ ok: boolean; status: number; detail?: string }> {
  const portal = env.HUBSPOT_PORTAL_ID?.trim();
  const form = env.HUBSPOT_FORM_ID?.trim();
  if (!portal || !form) return { ok: false, status: 0, detail: "not_configured" };
  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${encodeURIComponent(portal)}/${encodeURIComponent(form)}`;
  const f = (name: string, value: string | number) => ({ objectTypeId: "0-1", name, value: String(value) });
  const base = [f("email", lead.email), f("website", lead.storeUrl)];
  const extra = [
    f("mpb_role", lead.role),
    f("mpb_fit_score", lead.fitScore),
    f("mpb_platform", lead.platform),
    f("mpb_revenue_band", lead.revenueBand),
    f("mpb_ad_budget", lead.adBudget),
    f("mpb_segment", lead.segment),
    f("mpb_playbook_url", lead.playbookUrl),
  ];
  const context: Record<string, string> = { pageUri: lead.playbookUrl, pageName: "Marketing Playbook Builder" };
  if (lead.hutk && /^[a-f0-9]{32}$/i.test(lead.hutk)) context.hutk = lead.hutk;

  let last = { ok: false, status: 0, detail: "" };
  for (const fields of [[...base, ...extra], base]) {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ fields, context }),
      });
      if (res.ok) return { ok: true, status: res.status };
      last = { ok: false, status: res.status, detail: (await res.text()).slice(0, 300) };
      if (res.status !== 400) break; // only retry when fields were rejected
    } catch (e) {
      last = { ok: false, status: 0, detail: String(e).slice(0, 200) };
      break;
    }
  }
  console.log("hubspot_error", last.status, last.detail);
  return last;
}

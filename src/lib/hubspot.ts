import type { AppEnv } from "./env";

// Cavaco's HubSpot account and the "Marketing Playbook Builder" form. These IDs are
// public (they appear in any embed code); env vars can override them.
const DEFAULT_PORTAL_ID = "47521149";
const DEFAULT_FORM_ID = "8533f135-8639-4b11-99cd-454515c7ea65";
// The account lives in HubSpot's na2 data center.
const HOSTS = ["https://api-na2.hsforms.com", "https://api.hsforms.com"];

export interface HubspotLead {
  email: string;
  role: string;
  fitScore: number;
  storeUrl: string;
  platform: string;
  emailTool: string | null;
  revenueBand: string;
  adBudget: string;
  segment: string;
  playbookUrl: string;
  hutk?: string | null;
}

const EMAIL_PLATFORMS = ["Klaviyo", "Mailchimp", "Omnisend", "Attentive"];

/**
 * Sends a lead to a HubSpot form via the public Forms Submission API (no secret needed).
 * If HubSpot rejects the extra fields (e.g. not on the form), retry with just the email
 * and store website so the contact is still created.
 */
export async function sendToHubspot(env: AppEnv, lead: HubspotLead): Promise<{ ok: boolean; status: number; detail?: string }> {
  const portal = (env.HUBSPOT_PORTAL_ID || DEFAULT_PORTAL_ID).trim();
  const form = (env.HUBSPOT_FORM_ID || DEFAULT_FORM_ID).trim();
  if (!portal || !form) return { ok: false, status: 0, detail: "not_configured" };
  const f = (name: string, value: string | number) => ({ objectTypeId: "0-1", name, value: String(value) });
  const base = [f("email", lead.email), f("store_website", lead.storeUrl)];
  const extra = [
    f("playbook_role", lead.role),
    f("playbook_fit_score", lead.fitScore),
    f("playbook_revenue_band", lead.revenueBand),
    f("playbook_ad_budget", lead.adBudget),
    f("playbook_segment", lead.segment),
    f("playbook_url", lead.playbookUrl),
  ];
  if (["shopify", "bigcommerce", "woocommerce"].includes(lead.platform)) extra.push(f("cavaco_platform", lead.platform));
  if (lead.emailTool) extra.push(f("current_email_platform", EMAIL_PLATFORMS.includes(lead.emailTool) ? lead.emailTool : "Other"));
  const context: Record<string, string> = { pageUri: lead.playbookUrl, pageName: "Marketing Playbook Builder" };
  if (lead.hutk && /^[a-f0-9]{32}$/i.test(lead.hutk)) context.hutk = lead.hutk;

  let last = { ok: false, status: 0, detail: "" };
  for (const host of HOSTS) {
    const url = `${host}/submissions/v3/integration/submit/${encodeURIComponent(portal)}/${encodeURIComponent(form)}`;
    for (const fields of [[...base, ...extra], base]) {
      try {
        const res = await fetch(url, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ fields, context }),
        });
        if (res.ok) return { ok: true, status: res.status };
        last = { ok: false, status: res.status, detail: (await res.text()).slice(0, 300) };
        if (res.status !== 400) break; // only retry with fewer fields when fields were rejected
      } catch (e) {
        last = { ok: false, status: 0, detail: String(e).slice(0, 200) };
        break;
      }
    }
    if (last.status === 400) break; // the host answered; trying another won't help
  }
  console.log("hubspot_error", last.status, last.detail);
  return last;
}

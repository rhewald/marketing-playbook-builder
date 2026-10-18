import { getPlaybook, logEvent } from "@/lib/db";
import { clientIp, json } from "@/lib/http";
import { checkLead, recordLead } from "@/lib/leads";

export const dynamic = "force-dynamic";

// Intent events (cta_click, csv, print, share). The email is now collected when
// the playbook is built (/api/playbook); posting an email here still works.
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

  if (body.event && !body.email) {
    if (["cta_click", "print", "csv", "share"].includes(body.event)) await logEvent(body.event, ip, p.id);
    return json({ ok: true });
  }

  const lead = checkLead(body.email, body.role);
  if (!lead.ok) return json({ error: lead.error }, 400);
  await recordLead(p, lead.email, lead.role, body.hutk, ip);
  return json({ ok: true });
}

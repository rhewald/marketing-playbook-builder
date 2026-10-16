import { getPlaybook } from "@/lib/db";
import { fmt } from "@/lib/calendar";

export const dynamic = "force-dynamic";

function cell(v: unknown): string {
  const s = String(v ?? "");
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

export async function GET(_req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  const p = await getPlaybook(id);
  if (!p) return new Response("Not found", { status: 404 });
  const rows: string[][] = [["Section", "Item", "Dates", "Details", "Owner"]];
  for (const q of p.year.quarters)
    rows.push(["Year: quarter", `${q.label} ${q.months}: ${q.theme}`, q.months, `${q.job}. Moments: ${q.moments.join("; ")}. Ad budget share: ${q.adShare}%`, ""]);
  for (const m of p.year.moments)
    rows.push(["Year: big moment", m.name, `${fmt(m.start)} – ${fmt(m.end)}`, `Job: ${m.job}. Offer: ${m.offer}. Creative due: ${m.creativeDue ? fmt(m.creativeDue) : ""}${m.late ? " (late)" : ""}`, ""]);
  for (const ph of p.month.phases) rows.push([`${p.month.label}: phase`, ph.name, `${fmt(ph.start)} – ${fmt(ph.end)}`, ph.summary, ""]);
  const c = p.month.campaigns;
  rows.push([`${p.month.label}: campaign`, `Main (60%): ${c.main.name}`, "", c.main.detail, ""]);
  rows.push([`${p.month.label}: campaign`, `Supporting (30%): ${c.supporting.name}`, "", c.supporting.detail, ""]);
  rows.push([`${p.month.label}: campaign`, `Always-on (10%): ${c.alwaysOn.name}`, "", c.alwaysOn.detail, ""]);
  for (const v of p.segment.values)
    rows.push([`${p.month.label}: ${p.segment.name}`, v.name, "", `Hero: ${v.heroProduct ?? "-"}. Angle: ${v.angle ?? ""}`, ""]);
  const ch = p.month.channels;
  rows.push([`${p.month.label}: channel`, "Email", "", `${ch.emailSms.emails} emails; mix ${ch.emailSms.mix.promotional}/${ch.emailSms.mix.helpful}/${ch.emailSms.mix.relational}`, ""]);
  rows.push([`${p.month.label}: channel`, "SMS", "", ch.emailSms.smsGap ? "Not set up: recommended" : `${ch.emailSms.sms} messages`, ""]);
  rows.push([`${p.month.label}: channel`, "Social", "", ch.social.perPlatform.map((x) => `${x.platform} ${x.perWeek}/wk`).join(", ") || "No platforms found", ""]);
  rows.push([`${p.month.label}: channel`, "Paid ads", "", ch.ads.gap ? "No budget: recommended to start" : `Budget ${ch.ads.budget}, reserve ${ch.ads.reserve}, ${ch.ads.creatives} creatives`, ""]);
  for (const s of ch.site.changes) rows.push([`${p.month.label}: site`, s, "", "", ""]);
  for (const cr of p.month.creative) rows.push([`${p.month.label}: creative`, cr.item, fmt(cr.due), cr.late ? "Late" : "", ""]);
  const csv = rows.map((r) => r.map(cell).join(",")).join("\n");
  return new Response(csv, {
    headers: {
      "content-type": "text/csv; charset=utf-8",
      "content-disposition": `attachment; filename="marketing-playbook-${p.store.host}.csv"`,
    },
  });
}

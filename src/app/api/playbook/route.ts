import { generatePlaybook } from "@/lib/rules";
import { getEnv } from "@/lib/env";
import { aiConfigured, playbookCopy } from "@/lib/ai";
import { logEvent, newId, overLimit, savePlaybook } from "@/lib/db";
import { clientIp, json } from "@/lib/http";
import { checkLead, recordLead } from "@/lib/leads";
import type { Answers, Provenance, ScanResult, SegmentCandidate } from "@/lib/types";

export const dynamic = "force-dynamic";

const ENUMS = {
  revenueBand: ["lt500k", "500k-1m", "1-5m", "5-30m", "30m+"],
  growthGoal: ["hold", "10-25", "25-50", "50+"],
  maxDiscount: ["none", "15", "25", "30+"],
  adBudget: ["none", "lt5k", "5-20k", "20-100k", "100k+"],
} as const;

function validAnswers(a: unknown): a is Answers {
  if (!a || typeof a !== "object") return false;
  const x = a as Record<string, unknown>;
  for (const [k, vals] of Object.entries(ENUMS)) if (!(vals as readonly string[]).includes(String(x[k]))) return false;
  if (typeof x.priorities !== "string" || x.priorities.length > 400) return false;
  if (x.monthOffer !== null && (typeof x.monthOffer !== "string" || x.monthOffer.length > 200)) return false;
  return true;
}

export async function POST(req: Request) {
  const t0 = Date.now();
  const ip = clientIp(req);
  let body: {
    scan?: ScanResult;
    answers?: unknown;
    segment?: SegmentCandidate;
    segmentProvenance?: Provenance;
    lead?: { email?: string; role?: string; hutk?: string | null };
  };
  try {
    body = await req.json();
  } catch {
    return json({ error: "bad_request" }, 400);
  }
  if (!body.scan || !body.segment || !validAnswers(body.answers)) return json({ error: "bad_request" }, 400);
  // A work email is required before we build (and spend AI time on) a playbook.
  const lead = checkLead(body.lead?.email, body.lead?.role);
  if (!lead.ok) return json({ error: lead.error }, 400);
  if (await overLimit("playbook", ip, 20)) return json({ error: "rate_limited" }, 429);

  const scan = body.scan;
  scan.products = Array.isArray(scan.products) ? scan.products.slice(0, 150) : [];
  const answers = body.answers;
  const segment: SegmentCandidate = {
    ...body.segment,
    name: String(body.segment.name || "Customer stage").slice(0, 40),
    values: (body.segment.values || []).slice(0, 6),
  };
  const prov: Provenance = body.segmentProvenance === "YOU" ? "YOU" : "AI";
  const today = new Date(Date.UTC(new Date().getUTCFullYear(), new Date().getUTCMonth(), new Date().getUTCDate()));
  const id = newId();

  // First pass with rules only, to know the quarter labels and main moment.
  const draft = generatePlaybook(id, scan, answers, segment, prov, today, null);
  let playbook = draft;
  const env = await getEnv();
  if (aiConfigured(env)) {
    const budget = Math.max(3000, 15000 - (Date.now() - t0));
    const copy = await playbookCopy(
      env,
      scan,
      answers,
      segment,
      draft.year.quarters.map((q) => `${q.label} ${q.months}: ${q.moments.join(", ")}`),
      draft.month.label,
      draft.month.mainMoment,
      budget
    );
    if (copy) playbook = generatePlaybook(id, scan, answers, segment, prov, today, copy);
  }

  await savePlaybook(playbook);
  await logEvent("playbook", ip, id);
  try {
    await recordLead(playbook, lead.email, lead.role, body.lead?.hutk, ip);
  } catch (e) {
    console.log("lead_error", String(e).slice(0, 200)); // never block the playbook on lead sync
  }
  return json({ id, aiUsed: playbook.aiUsed, ms: Date.now() - t0 });
}

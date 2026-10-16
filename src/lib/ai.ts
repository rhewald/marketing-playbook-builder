import type { AppEnv } from "./env";
import type { Answers, ScanResult, SegmentCandidate } from "./types";
import type { AiCopy } from "./rules";

/** Calls Azure OpenAI chat completions in JSON mode. Returns null on any failure or timeout. */
export async function aiJson<T>(env: AppEnv, system: string, user: string, timeoutMs: number): Promise<T | null> {
  const { AZURE_OPENAI_ENDPOINT: ep, AZURE_OPENAI_API_KEY: key, AZURE_OPENAI_DEPLOYMENT: dep } = env;
  if (!ep || !key || !dep) return null;
  const ver = env.AZURE_OPENAI_API_VERSION || "2024-10-21";
  const url = `${ep.replace(/\/+$/, "")}/openai/deployments/${encodeURIComponent(dep)}/chat/completions?api-version=${ver}`;
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);
  const messages = [
    { role: "system", content: system },
    { role: "user", content: user },
  ];
  // Classic chat models accept temperature/max_tokens; reasoning models (o-series, gpt-5)
  // reject them and need max_completion_tokens. Try the first, fall back to the second.
  const bodies = [
    { messages, response_format: { type: "json_object" }, temperature: 0.4, max_tokens: 1400 },
    { messages, response_format: { type: "json_object" }, max_completion_tokens: 6000 },
  ];
  try {
    for (const body of bodies) {
      const res = await fetch(url, {
        method: "POST",
        signal: ctrl.signal,
        headers: { "content-type": "application/json", "api-key": key },
        body: JSON.stringify(body),
      });
      if (res.status === 400) {
        const txt = await res.text();
        if (/unsupported|not supported|max_completion_tokens|temperature/i.test(txt)) continue;
        console.log("ai_error", 400, txt.slice(0, 300));
        return null;
      }
      if (!res.ok) {
        console.log("ai_error", res.status, (await res.text()).slice(0, 300));
        return null;
      }
      const data = (await res.json()) as { choices?: { message?: { content?: string } }[] };
      const content = data.choices?.[0]?.message?.content;
      if (!content) return null;
      return JSON.parse(content) as T;
    }
    return null;
  } catch (e) {
    console.log("ai_exception", String(e).slice(0, 200));
    return null;
  } finally {
    clearTimeout(t);
  }
}

export function aiConfigured(env: AppEnv): boolean {
  return !!(env.AZURE_OPENAI_ENDPOINT && env.AZURE_OPENAI_API_KEY && env.AZURE_OPENAI_DEPLOYMENT);
}

/** Ask the model to pick/name the best personalization dimension from rule-based candidates. */
export async function refineSegments(env: AppEnv, scan: ScanResult, candidates: SegmentCandidate[], timeoutMs: number) {
  const sample = scan.products.slice(0, 80).map((p) => `${p.title}${p.type ? ` [${p.type}]` : ""}${p.tags.length ? ` {${p.tags.slice(0, 6).join(", ")}}` : ""}`);
  const system =
    "You help ecommerce marketers personalize. Pick the ONE way of grouping customers that most changes what a customer wants from this store (e.g. fight discipline for combat sports, scent family for candles, skin type for skincare, pet type for pet stores). Never choose size or color. Answer in JSON only.";
  const user = JSON.stringify({
    store: scan.name,
    description: scan.description,
    categories: scan.categories,
    candidates: candidates.map((c) => ({ name: c.name, values: c.values.map((v) => `${v.name} (${v.productCount})`) })),
    sampleProducts: sample,
    instructions:
      "Return {\"best\": index of best candidate or -1 if none fit, \"name\": short dimension name, \"values\": [{\"from\": candidate value name, \"label\": clearer customer-facing label}], \"reason\": one sentence}. Only relabel values that exist in the chosen candidate. Keep 2-6 values.",
  });
  return aiJson<{ best: number; name?: string; values?: { from: string; label: string }[]; reason?: string }>(env, system, user, timeoutMs);
}

/** Ask the model for the judgment parts of the playbook. */
export async function playbookCopy(
  env: AppEnv,
  scan: ScanResult,
  answers: Answers,
  segment: SegmentCandidate,
  quarterLabels: string[],
  monthLabel: string,
  mainMoment: string | null,
  timeoutMs: number
): Promise<AiCopy | null> {
  const system =
    "You are a senior DTC marketing strategist writing a client-ready marketing playbook. Be specific to this store. Never invent discounts, prices, revenue numbers or products. Only mention products from the provided list. Keep every string short (under 90 characters). Answer in JSON only.";
  const user = JSON.stringify({
    store: { name: scan.name, description: scan.description, categories: scan.categories, newArrivals: scan.newArrivals },
    products: scan.products.slice(0, 60).map((p) => p.title),
    answers: { growthGoal: answers.growthGoal, priorities: answers.priorities, offer: answers.monthOffer ?? "not decided" },
    segment: { name: segment.name, values: segment.values.map((v) => ({ name: v.name, heroProduct: v.heroProduct })) },
    quarters: quarterLabels,
    month: monthLabel,
    mainMoment,
    return: {
      voice: "3-5 words describing the brand voice",
      quarterThemes: "array, one short evocative theme per quarter, in order",
      messages: "array of 2-3 key messages for the month (no discounts unless the offer was given)",
      supporting: "{name, detail} supporting campaign for the month",
      segmentAngles: "object mapping each segment value name to a one-line angle for the month",
      priorityProducts: "array of up to 3 product titles from the list to push this month",
      adAngles: "array of 3 short ad angles",
    },
  });
  const r = await aiJson<AiCopy>(env, system, user, timeoutMs);
  if (!r) return null;
  // Guard against invented products.
  const titles = new Set(scan.products.map((p) => p.title));
  if (r.priorityProducts) r.priorityProducts = r.priorityProducts.filter((t) => titles.has(t));
  if (r.priorityProducts && !r.priorityProducts.length) delete r.priorityProducts;
  if (r.quarterThemes && r.quarterThemes.length !== quarterLabels.length) delete r.quarterThemes;
  return r;
}

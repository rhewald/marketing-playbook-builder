"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { BASE } from "@/lib/base";
import { collectInBrowser } from "@/lib/clientScan";
import type { Answers, ScanResult, SegmentCandidate } from "@/lib/types";
import { ToolBar } from "@/components/SiteChrome";

type Phase = "scanning" | "intake" | "building" | "error";

const REV = [["lt500k", "Under $500k"], ["500k-1m", "$500k–1M"], ["1-5m", "$1–5M"], ["5-30m", "$5–30M"], ["30m+", "$30M+"]] as const;
const GROWTH = [["hold", "Hold steady"], ["10-25", "+10–25%"], ["25-50", "+25–50%"], ["50+", "50%+"]] as const;
const DISC = [["none", "No discounts"], ["15", "Up to 15%"], ["25", "Up to 25%"], ["30+", "30%+"]] as const;
const ADS = [["none", "None"], ["lt5k", "Under $5k"], ["5-20k", "$5–20k"], ["20-100k", "$20–100k"], ["100k+", "$100k+"]] as const;

function Check({ state }: { state: "done" | "active" | "wait" }) {
  if (state === "done")
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" role="img" aria-label="Done" style={{ flex: "0 0 auto" }}>
        <circle cx="12" cy="12" r="11" fill="#1F7A4D" />
        <path d="M7 12.5l3.2 3.2L17 9" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  if (state === "active")
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" role="img" aria-label="In progress" style={{ flex: "0 0 auto" }}>
        <circle cx="12" cy="12" r="10" fill="none" stroke="#C9CFD8" strokeWidth="2.5" />
        <path className="spin" d="M12 2a10 10 0 0 1 10 10" fill="none" stroke="#6CACE4" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" role="img" aria-label="Waiting" style={{ flex: "0 0 auto" }}>
      <circle cx="12" cy="12" r="10" fill="none" stroke="#C9CFD8" strokeWidth="2.5" />
    </svg>
  );
}

function Radios<T extends string>({ name, legend, options, value, onChange }: { name: string; legend: string; options: readonly (readonly [T, string])[]; value: T | ""; onChange: (v: T) => void }) {
  return (
    <fieldset>
      <legend>{legend}</legend>
      <div className="chips">
        {options.map(([v, l]) => (
          <label key={v} className="chip">
            <input type="radio" name={name} value={v} checked={value === v} onChange={() => onChange(v)} required />
            {l}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function StartFlow() {
  const params = useSearchParams();
  const router = useRouter();
  const url = params.get("url") || "";
  const [phase, setPhase] = useState<Phase>("scanning");
  const [error, setError] = useState<string>("");
  const [scan, setScan] = useState<ScanResult | null>(null);
  const [segments, setSegments] = useState<SegmentCandidate[]>([]);
  const [segIdx, setSegIdx] = useState<number>(0);
  const [customName, setCustomName] = useState("");
  const [customValues, setCustomValues] = useState("");
  const [rev, setRev] = useState<Answers["revenueBand"] | "">("");
  const [growth, setGrowth] = useState<Answers["growthGoal"] | "">("");
  const [priorities, setPriorities] = useState("");
  const [disc, setDisc] = useState<Answers["maxDiscount"] | "">("");
  const [ads, setAds] = useState<Answers["adBudget"] | "">("");
  const [offer, setOffer] = useState("");
  const [offerUndecided, setOfferUndecided] = useState(false);
  const [buildStep, setBuildStep] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    if (!url) {
      setError("Add your store's web address to get started.");
      setPhase("error");
      return;
    }
    (async () => {
      try {
        // Read the product feed from the browser first (Shopify throttles server IPs).
        const client = await collectInBrowser(url).catch(() => null);
        const res = await fetch(`${BASE}/api/scan`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ url, client }) });
        const data = await res.json();
        if (!res.ok) {
          setError(
            data.error === "invalid_url"
              ? "That doesn't look like a web address. Try something like yourstore.com."
              : data.error === "rate_limited"
                ? "You've built a lot of playbooks in the last hour. Try again a bit later."
                : "We couldn't read that store. Check the address and try again."
          );
          setPhase("error");
          return;
        }
        setScan(data.scan);
        setSegments(data.segments);
        setPhase("intake");
      } catch {
        setError("Something went wrong reading that store. Please try again.");
        setPhase("error");
      }
    })();
  }, [url]);

  const month = useMemo(() => {
    const now = new Date();
    return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 1)).toLocaleString("en-US", { month: "long", timeZone: "UTC" });
  }, []);

  const isCustom = segIdx === segments.length;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!scan || !rev || !growth || !disc || !ads) return;
    let segment: SegmentCandidate;
    let prov: "AI" | "YOU" = "AI";
    if (isCustom) {
      const vals = customValues.split(",").map((s) => s.trim()).filter(Boolean).slice(0, 6);
      if (!customName.trim() || vals.length < 2) {
        setError("Name your grouping and list at least two groups, separated by commas.");
        return;
      }
      segment = { name: customName.trim(), source: "your answer", coverage: 0, score: 0, values: vals.map((v) => ({ name: v, productCount: 0, heroProduct: null })) };
      prov = "YOU";
    } else {
      segment = segments[segIdx];
      prov = segIdx === 0 ? "AI" : "YOU";
    }
    const answers: Answers = { revenueBand: rev, growthGoal: growth, priorities: priorities.trim(), maxDiscount: disc, adBudget: ads, monthOffer: offerUndecided || !offer.trim() ? null : offer.trim() };
    setError("");
    setPhase("building");
    setBuildStep(2);
    const timer = setInterval(() => setBuildStep((s) => Math.min(s + 1, 4)), 2500);
    try {
      const res = await fetch(`${BASE}/api/playbook`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ scan, answers, segment, segmentProvenance: prov }) });
      const data = await res.json();
      clearInterval(timer);
      if (!res.ok || !data.id) {
        setError(data.error === "rate_limited" ? "You've built a lot of playbooks in the last hour. Try again a bit later." : "We couldn't build the playbook. Please try again.");
        setPhase("intake");
        return;
      }
      setBuildStep(5);
      router.push(`/p/${data.id}`);
    } catch {
      clearInterval(timer);
      setError("We couldn't build the playbook. Please try again.");
      setPhase("intake");
    }
  }

  const progress = phase === "scanning" ? 33 : phase === "intake" ? 66 : phase === "building" ? 90 : 10;

  if (phase === "error")
    return (
      <>
        <ToolBar step="Step 1 of 3" />
        <main className="wrap" style={{ padding: "48px 24px", maxWidth: 720 }}>
          <div className="card stack gap-16">
            <h1 style={{ fontSize: 28 }}>Let&apos;s try that again</h1>
            <p className="muted">{error}</p>
            <form action={`${BASE}/start`} method="get" className="row gap-8" style={{ alignItems: "flex-end" }}>
              <label className="field" style={{ flex: "1 1 260px" }}>
                Your store&apos;s web address
                <input name="url" type="text" defaultValue={url} placeholder="yourstore.com" required />
              </label>
              <button className="btn btn-primary" type="submit">Build my playbook</button>
            </form>
          </div>
        </main>
      </>
    );

  if (phase === "scanning" || phase === "building") {
    const steps =
      phase === "scanning"
        ? [
            { t: "Reading your store", d: url, s: "active" as const },
            { t: "Finding how your customers differ", d: "Looking for patterns in your products", s: "wait" as const },
          ]
        : [
            { t: "Read your store", d: `${scan?.productCount ?? 0} products · ${[scan?.tools.email, scan?.tools.sms, ...(scan?.tools.ads || [])].filter(Boolean).join(" · ") || "no marketing tools found"}`, s: "done" as const },
            { t: `Grouped customers by ${(isCustom ? customName : segments[segIdx]?.name)?.toLowerCase() || "segment"}`, d: "Each campaign gets a version per group", s: "done" as const },
            { t: "Mapping your year", d: "Big moments, quarter themes, budget split", s: buildStep >= 3 ? ("done" as const) : ("active" as const) },
            { t: `Planning ${month}`, d: "Main campaign, week by week, channel plans", s: buildStep >= 4 ? ("done" as const) : buildStep === 3 ? ("active" as const) : ("wait" as const) },
            { t: "Checklist and creative dates", d: "What to prepare, and by when", s: buildStep >= 5 ? ("done" as const) : buildStep === 4 ? ("active" as const) : ("wait" as const) },
          ];
    return (
      <>
        <ToolBar step={phase === "scanning" ? "Step 1 of 3" : "Step 3 of 3"} />
        <div className="progress" aria-hidden="true"><div style={{ width: `${progress}%` }} /></div>
        <main className="wrap" style={{ padding: "48px 24px", maxWidth: 760 }}>
          <div className="stack gap-24">
            <div className="stack gap-8">
              <h1 style={{ fontSize: 32 }}>{phase === "scanning" ? "Reading your store" : "Building your playbook"}</h1>
              <p className="muted" aria-live="polite">{phase === "scanning" ? "A few seconds. We only look at public pages." : "Under a minute. You can watch it come together."}</p>
            </div>
            <ol className="steps" aria-label="Progress">
              {steps.map((s) => (
                <li key={s.t} className={s.s === "active" ? "active" : ""}>
                  <Check state={s.s} />
                  <div className="stack gap-4">
                    <span style={{ fontWeight: 700, color: s.s === "wait" ? "var(--quiet)" : undefined }}>{s.t}</span>
                    <span className="quiet" style={{ fontSize: 14, wordBreak: "break-word" }}>{s.d}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </main>
      </>
    );
  }

  // Intake
  const s = scan!;
  const toolsLine = (label: string, v: string | null | string[]) => {
    const val = Array.isArray(v) ? v.join(", ") : v;
    return (
      <div className="row between gap-8" style={{ fontSize: 14 }}>
        <span>{label}: {val || (s.homepageRead === false ? "couldn't check" : "none found")}</span>
        <span className="tag t-AUTO">AUTO</span>
      </div>
    );
  };
  return (
    <>
      <ToolBar step="Step 2 of 3" />
      <div className="progress" aria-hidden="true"><div style={{ width: `${progress}%` }} /></div>
      <main className="wrap row gap-32" style={{ padding: "40px 24px", alignItems: "flex-start" }}>
        <aside className="card stack gap-12" style={{ flex: "1 1 300px" }} aria-labelledby="h-found">
          <h2 id="h-found" style={{ fontSize: 18 }}>We found your store</h2>
          <span className="quiet" style={{ fontSize: 14 }}>{s.name} · {s.host}</span>
          <div className="stack gap-8">
            <div className="row between gap-8" style={{ fontSize: 14 }}>
              <span>{s.platform === "shopify" ? "Shopify" : s.platform === "bigcommerce" ? "BigCommerce" : "Website"}{s.productCount ? ` · ${s.productCount}${s.productCountCapped ? "+" : ""} products` : ""}</span>
              <span className="tag t-AUTO">AUTO</span>
            </div>
            {s.categories.length ? (
              <div className="row between gap-8" style={{ fontSize: 14 }}><span>{s.categories.slice(0, 3).join(", ")}</span><span className="tag t-AUTO">AUTO</span></div>
            ) : null}
            {s.priceRange ? (
              <div className="row between gap-8" style={{ fontSize: 14 }}><span>Prices {Math.round(s.priceRange[0])}–{Math.round(s.priceRange[1])} {s.currency}</span><span className="tag t-AUTO">AUTO</span></div>
            ) : null}
            {toolsLine("Email", s.tools.email)}
            {toolsLine("SMS", s.tools.sms)}
            {toolsLine("Ads", s.tools.ads)}
            {toolsLine("Social", s.social)}
          </div>
          {s.notes.map((n) => (
            <p key={n} className="error">{n}</p>
          ))}
        </aside>

        <form onSubmit={submit} className="stack gap-24" style={{ flex: "2 1 560px" }} aria-labelledby="h-q">
          <div className="stack gap-8">
            <h1 id="h-q" style={{ fontSize: 32 }}>A few things only you know</h1>
            <p className="muted">First, confirm what we noticed. Then 6 quick questions; ranges are fine.</p>
          </div>

          <fieldset className="card accent stack gap-12">
            <legend className="k" style={{ color: "var(--blue-dark)", padding: "0 6px", fontSize: 12 }}>The most important answer</legend>
            <div className="stack gap-4">
              <span style={{ fontSize: 20, fontWeight: 700 }}>What most changes what a customer wants from you?</span>
              <span className="muted" style={{ lineHeight: 1.5 }}>
                Your playbook will make a version of each campaign for each group. A combat sports brand might pick fight discipline, a skincare brand skin type, a pet brand dog or cat.
              </span>
            </div>
            <div className="stack gap-8">
              {segments.map((c, i) => (
                <label key={c.name} className="chip block">
                  <input type="radio" name="dim" checked={segIdx === i} onChange={() => setSegIdx(i)} style={{ marginTop: 4 }} />
                  <span className="stack gap-4">
                    <span>
                      <b>{c.name}</b>{" "}
                      {i === 0 && c.coverage > 0 && c.name !== "Customer stage" ? (
                        <span className="tag t-AI">SUGGESTED · FOUND IN {Math.round(c.coverage * 100)}% OF PRODUCTS</span>
                      ) : null}
                    </span>
                    <span className="muted" style={{ fontWeight: 400, fontSize: 14 }}>
                      {c.values.map((v) => v.name).join(" · ")}
                    </span>
                  </span>
                </label>
              ))}
              <label className="chip block">
                <input type="radio" name="dim" checked={isCustom} onChange={() => setSegIdx(segments.length)} style={{ marginTop: 4 }} />
                <span className="stack gap-4" style={{ width: "100%" }}>
                  <b>Something else</b>
                  {isCustom ? (
                    <span className="stack gap-8" style={{ fontWeight: 400 }}>
                      <input type="text" aria-label="Name of the grouping" placeholder="e.g. Fight discipline" value={customName} onChange={(e) => setCustomName(e.target.value)} />
                      <input type="text" aria-label="Groups, separated by commas" placeholder="e.g. Boxing, MMA, Muay Thai, BJJ" value={customValues} onChange={(e) => setCustomValues(e.target.value)} />
                    </span>
                  ) : (
                    <span className="muted" style={{ fontWeight: 400, fontSize: 14 }}>Type your own grouping</span>
                  )}
                </span>
              </label>
            </div>
          </fieldset>

          <Radios name="rev" legend="1. Yearly revenue" options={REV} value={rev} onChange={setRev} />
          <Radios name="growth" legend="2. Growth goal for next year" options={GROWTH} value={growth} onChange={setGrowth} />
          <label className="field" style={{ fontSize: 17, fontWeight: 700 }}>
            <span>3. Products or launches to prioritise <span className="quiet" style={{ fontWeight: 400, fontSize: 15 }}>(optional)</span></span>
            <textarea rows={3} maxLength={400} placeholder="e.g. Fall collection launching in September, push gift sets" value={priorities} onChange={(e) => setPriorities(e.target.value)} style={{ fontWeight: 400 }} />
          </label>
          <Radios name="disc" legend="4. Deepest discount you'll run in a big sale" options={DISC} value={disc} onChange={setDisc} />
          <Radios name="ads" legend="5. Monthly ad budget" options={ADS} value={ads} onChange={setAds} />
          <div className="stack gap-8">
            <label className="field" style={{ fontSize: 17, fontWeight: 700 }}>
              6. Your {month} offer, if decided
              <input type="text" maxLength={200} value={offer} disabled={offerUndecided} onChange={(e) => setOffer(e.target.value)} placeholder="e.g. 15% off, 20% over $75" style={{ fontWeight: 400 }} />
            </label>
            <label className="row gap-8 center" style={{ fontSize: 14, minHeight: 44 }}>
              <input type="checkbox" checked={offerUndecided} onChange={(e) => setOfferUndecided(e.target.checked)} style={{ accentColor: "var(--blue-text)" }} />
              Not decided yet; we&apos;ll leave it open, not guess
            </label>
          </div>
          {error ? <p className="error" role="alert">{error}</p> : null}
          <div className="row gap-16 center" style={{ paddingTop: 8, borderTop: "1px solid var(--line)" }}>
            <button className="btn btn-primary" type="submit" disabled={!rev || !growth || !disc || !ads}>Build my playbook</button>
            <span className="quiet" style={{ fontSize: 14 }}>Takes under a minute</span>
          </div>
        </form>
      </main>
    </>
  );
}

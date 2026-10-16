import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPlaybook } from "@/lib/db";
import { fmt, fmtRange } from "@/lib/calendar";
import { money } from "@/lib/rules";
import { BASE } from "@/lib/base";
import { ToolBar } from "@/components/SiteChrome";
import type { Provenance } from "@/lib/types";
import { CtaButton, LeadGate, ShareButton } from "./Client";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const p = await getPlaybook(id);
  return {
    title: p ? `${p.store.name}: marketing playbook | Cavaco` : "Marketing playbook | Cavaco",
    robots: { index: false, follow: false },
  };
}

function Tag({ p, children }: { p: Provenance | "LATE"; children?: React.ReactNode }) {
  return <span className={`tag t-${p}`}>{children ?? p}</span>;
}

function Line({ label, value, prov }: { label?: string; value: React.ReactNode; prov: Provenance }) {
  return (
    <div className="row between gap-8" style={{ fontSize: 14 }}>
      <span>{label ? <>{label}: </> : null}{value}</span>
      <Tag p={prov} />
    </div>
  );
}

export default async function PlaybookPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = await getPlaybook(id);
  if (!p) notFound();
  const s = p.store;
  const m = p.month;
  const ch = m.channels;
  const isLifecycle = p.segment.name === "Customer stage";
  const none = s.homepageRead === false ? "couldn't check" : "none found";
  const platformLabel = s.platform === "shopify" ? "Shopify" : s.platform === "bigcommerce" ? "BigCommerce" : "Website";
  const ctaLabel = s.platform === "shopify" ? "Open in Cavaco (Shopify app)" : s.platform === "bigcommerce" ? "Open in Cavaco (BigCommerce app)" : "Book a Cavaco demo";

  return (
    <>
      <ToolBar>
        <div className="row gap-8 no-print">
          <a className="btn btn-light" href={`${BASE}/`}>New playbook</a>
          <ShareButton playbookId={p.id} />
          <a className="btn btn-primary" href="#save">Download</a>
        </div>
      </ToolBar>

      <main className="wrap pb stack gap-40" style={{ padding: "32px 24px" }}>
        {/* Store */}
        <section className="stack gap-16" aria-labelledby="h-store">
          <div className="row between gap-12" style={{ alignItems: "flex-end" }}>
            <div className="stack gap-4">
              <span className="k">Marketing playbook · {p.year.range}</span>
              <h1 id="h-store" style={{ fontSize: 36, letterSpacing: "-.01em" }}>{s.name}</h1>
              <span className="quiet" style={{ fontSize: 15 }}>{s.host} · built {fmt(p.createdAt.slice(0, 10))}</span>
            </div>
            <div className="legend">
              <span>How we got each detail:</span>
              <Tag p="AUTO">AUTO · from your store</Tag>
              <Tag p="AI">AI · suggested, edit it</Tag>
              <Tag p="YOU">YOU · your answer</Tag>
            </div>
          </div>
          <div className="card row gap-24">
            <div className="grow stack gap-8">
              <span className="k">Store</span>
              <Line value={`${platformLabel}${s.productCount ? ` · ${s.productCount}${s.productCountCapped ? "+" : ""} products` : ""}`} prov="AUTO" />
              {s.categories.length ? <Line value={s.categories.slice(0, 3).join(", ")} prov="AUTO" /> : null}
              {s.priceRange ? <Line value={`Prices ${Math.round(s.priceRange[0])}–${Math.round(s.priceRange[1])} ${s.currency}`} prov="AUTO" /> : null}
              {s.voice ? <Line label="Voice" value={s.voice} prov="AI" /> : null}
            </div>
            <div className="grow stack gap-8">
              <span className="k">Channels found</span>
              <Line label="Email" value={s.tools.email || none} prov="AUTO" />
              <Line label="SMS" value={s.tools.sms || none} prov="AUTO" />
              <Line label="Ads" value={s.tools.ads.join(", ") || none} prov="AUTO" />
              <Line label="Social" value={s.social.join(", ") || none} prov="AUTO" />
            </div>
            <div className="grow stack gap-8">
              <span className="k">Your answers</span>
              <Line label="Revenue" value={{ lt500k: "Under $500k", "500k-1m": "$500k–1M", "1-5m": "$1–5M", "5-30m": "$5–30M", "30m+": "$30M+" }[p.answers.revenueBand]} prov="YOU" />
              <Line label="Goal" value={{ hold: "Hold steady", "10-25": "Grow 10–25%", "25-50": "Grow 25–50%", "50+": "Grow 50%+" }[p.answers.growthGoal]} prov="YOU" />
              <Line label="Ad budget" value={{ none: "None", lt5k: "Under $5k / month", "5-20k": "$5–20k / month", "20-100k": "$20–100k / month", "100k+": "$100k+ / month" }[p.answers.adBudget]} prov="YOU" />
              <Line label="Deepest discount" value={{ none: "No discounts", "15": "Up to 15%", "25": "Up to 25%", "30+": "30%+" }[p.answers.maxDiscount]} prov="YOU" />
            </div>
          </div>
        </section>

        {/* Year */}
        <section className="stack gap-16" aria-labelledby="h-year">
          <div className="row between gap-8" style={{ alignItems: "baseline" }}>
            <h2 id="h-year">The year ahead</h2>
            <span className="quiet" style={{ fontSize: 14 }}>{p.year.quarters.length} themes · {p.year.moments.length} big moments</span>
          </div>
          <div className="row gap-16">
            {p.year.quarters.map((q) => (
              <div key={q.label + q.months} className={`card qcard${q.current ? " current" : ""}`}>
                <div className="row between center gap-8"><span className="k" style={q.current ? { color: "var(--blue-text)" } : undefined}>{q.label} · {q.months}</span><Tag p="AI" /></div>
                <h3 style={{ fontSize: 20 }}>{q.theme}</h3>
                <div className="stack gap-4" style={{ fontSize: 14, lineHeight: 1.4 }}>
                  <span><b>Moments:</b> {q.moments.length ? q.moments.join(", ") : "Always-on and brand building"}</span>
                  {q.priorityProducts.length ? <span><b>Push:</b> {q.priorityProducts.join(", ")}</span> : null}
                  <span><b>Job:</b> {q.job}</span>
                  <span><b>Share of ad budget:</b> {q.adShare}%</span>
                </div>
              </div>
            ))}
          </div>

          <div className="card stack gap-12" style={{ padding: "20px 8px 8px" }}>
            <div className="row between gap-8" style={{ padding: "0 12px" }}>
              <span className="k">Big moments of the year</span>
              <span className="quiet" style={{ fontSize: 13 }}>Creative due 45 days before major moments, 30 before others</span>
            </div>
            <div className="scroll-x">
              <table className="t">
                <thead><tr><th>Moment</th><th>Dates</th><th>Job</th><th>Offer</th><th>Creative due</th><th>Source</th></tr></thead>
                <tbody>
                  {p.year.moments.map((mo) => (
                    <tr key={mo.key + mo.start}>
                      <td><b>{mo.name}</b>{mo.major ? <span className="quiet" style={{ fontSize: 12 }}> · major</span> : null}</td>
                      <td className="mono" style={{ whiteSpace: "nowrap" }}>{fmtRange(mo.start, mo.end)}</td>
                      <td>{mo.job}</td>
                      <td>{mo.offer}</td>
                      <td className="mono" style={{ whiteSpace: "nowrap", color: mo.late ? "var(--warn)" : undefined }}>{mo.creativeDue ? fmt(mo.creativeDue) : "—"}{mo.late ? " · late" : ""}</td>
                      <td><Tag p={mo.offerProvenance} /></td>
                    </tr>
                  ))}
                  <tr><td><b>Brand anniversary</b></td><td className="mono">[Your date]</td><td>Loyalty</td><td>[Your call]</td><td className="mono">30 days before</td><td><Tag p="ADD" /></td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="row gap-16">
            <div className="card grow stack gap-12">
              <span className="k">How the effort and budget are split</span>
              <div className="row gap-24">
                <div className="stack gap-4"><span className="mono" style={{ fontSize: 22 }}>60 / 30 / 10</span><span className="quiet" style={{ fontSize: 13 }}>Main / supporting / always-on</span></div>
                <div className="stack gap-4"><span className="mono" style={{ fontSize: 22 }}>15%</span><span className="quiet" style={{ fontSize: 13 }}>Held back as contingency</span></div>
                <div className="stack gap-4"><span className="mono" style={{ fontSize: 22 }}>20%</span><span className="quiet" style={{ fontSize: 13 }}>Of the calendar left open</span></div>
              </div>
            </div>
            <div className="card grow stack gap-12">
              <span className="k">Year targets</span>
              <div className="row gap-24">
                {p.year.targets.map((t) => (
                  <div key={t.label} className="stack gap-4"><span className="mono" style={{ fontSize: 22 }}>{t.value}</span><span className="quiet" style={{ fontSize: 13 }}>{t.label} <Tag p={t.provenance} /></span></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Month */}
        <section className="stack gap-16" aria-labelledby="h-month">
          <div className="stack gap-4">
            <span className="k" style={{ color: "var(--blue-text)" }}>This month · {m.label}</span>
            <h2 id="h-month" style={{ fontSize: 28 }}>{m.title}</h2>
          </div>

          <div className="row gap-16">
            <div className="card grow stack gap-8">
              <div className="row between gap-8"><span className="k">Revenue goal</span><Tag p="ADD" /></div>
              <span style={{ fontSize: 16, fontWeight: 600 }}>[Your {m.label.split(" ")[0]} target]</span>
              <span className="quiet" style={{ fontSize: 14 }}>Work the plan backward from it</span>
            </div>
            <div className="card grow stack gap-8">
              <div className="row between gap-8"><span className="k">Offer</span><Tag p={m.offerProvenance} /></div>
              <span style={{ fontSize: 16, fontWeight: 600 }}>{m.offer ?? "Not decided yet"}</span>
              <span className="quiet" style={{ fontSize: 14 }}>{m.offer ? "Your answer" : "We left it open on purpose, not guessed"}</span>
            </div>
            <div className="card grow stack gap-8">
              <div className="row between gap-8"><span className="k">Hero products</span><Tag p="AI" /></div>
              <span style={{ fontSize: 16, fontWeight: 600 }}>{m.heroProducts.length ? m.heroProducts.join(", ") : "[Pick 2–3 hero products]"}</span>
              <span style={{ fontSize: 14, color: "var(--warn)" }}>Could any sell out? [Add stock limits]</span>
            </div>
            {m.messages.length ? (
              <div className="card grow stack gap-8">
                <div className="row between gap-8"><span className="k">Key messages</span><Tag p="AI" /></div>
                <span style={{ fontSize: 16, fontWeight: 600 }}>{m.messages.map((x) => `“${x}”`).join(" · ")}</span>
              </div>
            ) : null}
          </div>

          <div className="card stack gap-16">
            <div className="row between gap-8"><span className="k">This month&apos;s campaigns</span><Tag p="AI" /></div>
            <div className="row gap-16">
              <div className="tier main"><span className="mono" style={{ fontSize: 13, color: "var(--blue-dark)", fontWeight: 500 }}>MAIN · 60% of effort</span><span style={{ fontSize: 18, fontWeight: 700 }}>{m.campaigns.main.name}</span><span style={{ fontSize: 14, lineHeight: 1.4 }}>{m.campaigns.main.detail}</span></div>
              <div className="tier"><span className="mono quiet" style={{ fontSize: 13, fontWeight: 500 }}>SUPPORTING · 30%</span><span style={{ fontSize: 16, fontWeight: 700 }}>{m.campaigns.supporting.name}</span><span style={{ fontSize: 14, lineHeight: 1.4 }}>{m.campaigns.supporting.detail}</span></div>
              <div className="tier"><span className="mono quiet" style={{ fontSize: 13, fontWeight: 500 }}>ALWAYS-ON · 10%</span><span style={{ fontSize: 16, fontWeight: 700 }}>{m.campaigns.alwaysOn.name}</span><span style={{ fontSize: 14, lineHeight: 1.4 }}>{m.campaigns.alwaysOn.detail}</span></div>
            </div>
          </div>

          <div className="card stack gap-16">
            <div className="row between gap-8"><span className="k">Week by week</span><Tag p="AI" /></div>
            <div className="row gap-12">
              {m.phases.map((ph) => (
                <div key={ph.name} className={`phase${ph.name === "Peak" ? " peak" : ""}`}>
                  <span className="mono quiet" style={{ fontSize: 13 }}>{fmtRange(ph.start, ph.end)} · {ph.name}</span>
                  <span style={{ fontSize: 14, lineHeight: 1.4 }}>{ph.summary}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Personalization */}
          <div className="card accent stack gap-16">
            <div className="row between gap-12" style={{ alignItems: "flex-start" }}>
              <div className="stack gap-4" style={{ maxWidth: 760 }}>
                <span className="k" style={{ color: "var(--blue-dark)" }}>{isLifecycle ? "Personalized by customer stage" : `Personalized by ${p.segment.name.toLowerCase()}`}</span>
                <h3 style={{ fontSize: 22 }}>Every campaign this month has {p.segment.values.length} versions</h3>
                <span className="muted" style={{ lineHeight: 1.5 }}>
                  {isLifecycle
                    ? "New subscribers, first-time buyers, repeat buyers and VIPs each get a version that fits where they are."
                    : `Each person sees the products that match their ${p.segment.name.toLowerCase()} in emails, on your homepage and in ads. Same plan, the right product for each person.`}
                </span>
              </div>
              <Tag p={p.segment.provenance}>{p.segment.provenance === "YOU" ? "YOU CHOSE" : "SUGGESTED"}</Tag>
            </div>
            <div className="row gap-12">
              {p.segment.values.map((v) => (
                <div key={v.name} className="seg">
                  <span style={{ fontSize: 17, fontWeight: 700 }}>{v.name}</span>
                  {v.productCount ? <span className="mono quiet" style={{ fontSize: 12 }}>{v.productCount} products</span> : null}
                  {v.heroProduct ? <span style={{ fontSize: 14 }}><b>Hero:</b> {v.heroUrl ? <a href={v.heroUrl} target="_blank" rel="noopener">{v.heroProduct}</a> : v.heroProduct}</span> : null}
                  {v.angle ? <span style={{ fontSize: 14 }}><b>Angle:</b> {v.angle}</span> : null}
                </div>
              ))}
            </div>
            {!isLifecycle ? (
              <div className="row gap-12">
                <div className="tier"><span className="mono" style={{ fontSize: 12, color: "var(--blue-dark)" }}>1 · ASK</span><span style={{ fontWeight: 700 }}>Signup form asks “{p.segment.question}”</span><span className="quiet" style={{ fontSize: 13 }}>The popup can show a different product per answer</span></div>
                <div className="tier"><span className="mono" style={{ fontSize: 12, color: "var(--blue-dark)" }}>2 · INFER</span><span style={{ fontWeight: 700 }}>Everyone else is matched by what they view and buy</span><span className="quiet" style={{ fontSize: 13 }}>Your products already carry these groups, so behavior reveals the preference</span></div>
                <div className="tier"><span className="mono" style={{ fontSize: 12, color: "var(--blue-dark)" }}>3 · USE</span><span style={{ fontWeight: 700 }}>Emails, homepage, popups and ads change per person</span><span className="quiet" style={{ fontSize: 13 }}>This is the part Cavaco runs for you</span></div>
              </div>
            ) : null}
          </div>

          {/* Channels */}
          <div className="stack gap-4" style={{ marginTop: 8 }}>
            <h3 style={{ fontSize: 20 }}>Channel plans</h3>
            <span className="quiet" style={{ fontSize: 14 }}>What each channel does this month. Cavaco creates every piece listed.</span>
          </div>
          <div className="row gap-16">
            <div className="card stack gap-12" style={{ flex: "1 1 520px" }}>
              <div className="row between center gap-8"><h4 style={{ fontSize: 17 }}>Email and SMS</h4><Tag p="AI" /></div>
              <span className="mono" style={{ fontSize: 20 }}>{ch.emailSms.emails} emails{ch.emailSms.sms ? ` · ${ch.emailSms.sms} SMS` : ""}</span>
              <span style={{ fontSize: 14, color: "var(--blue-dark)", fontWeight: 600 }}>Each email in {p.segment.values.length} versions</span>
              <span style={{ fontSize: 14 }}><b>Mix:</b> {ch.emailSms.mix.promotional}% promotional, {ch.emailSms.mix.helpful}% helpful, {ch.emailSms.mix.relational}% thank-you and stories</span>
              <div className="scroll-x">
                <table className="t">
                  <thead><tr><th>Group</th><th>Who</th><th>What they get</th></tr></thead>
                  <tbody>{ch.emailSms.groups.map((g) => <tr key={g.name}><td><b>{g.name}</b></td><td>{g.who}</td><td>{g.gets}</td></tr>)}</tbody>
                </table>
              </div>
              <span style={{ fontSize: 14 }}><b>Flows:</b> {ch.emailSms.flows.join(" · ")}</span>
              {ch.emailSms.smsGap ? <span style={{ fontSize: 14, color: "var(--warn)" }}><b>Gap:</b> no SMS tool found. SMS is worth adding before your next big moment.</span> : null}
            </div>
            <div className="card stack gap-12" style={{ flex: "1 1 360px" }}>
              <div className="row between center gap-8"><h4 style={{ fontSize: 17 }}>Social</h4><Tag p="AI" /></div>
              {ch.social.gap ? (
                <span style={{ fontSize: 14, color: "var(--warn)" }}>{s.homepageRead === false ? "We couldn't check your social links." : "We didn't find social links on your site."} Add the platforms you use and we&apos;ll plan them.</span>
              ) : (
                <>
                  <span className="mono" style={{ fontSize: 20 }}>{ch.social.posts} posts</span>
                  {ch.social.perPlatform.map((x) => <span key={x.platform} style={{ fontSize: 14 }}><b>{x.platform}, {x.perWeek}/wk:</b> {x.mix}</span>)}
                  <span style={{ fontSize: 14 }}><b>Weekly rhythm:</b> {ch.social.rhythm}</span>
                </>
              )}
            </div>
            <div className="card stack gap-12" style={{ flex: "1 1 360px" }}>
              <div className="row between center gap-8"><h4 style={{ fontSize: 17 }}>Paid ads</h4><Tag p="AI" /></div>
              {ch.ads.gap ? (
                <span style={{ fontSize: 14 }}>No ad budget yet. A small retargeting budget around your main moment usually pays back first.</span>
              ) : (
                <>
                  <span className="mono" style={{ fontSize: 20 }}>{money(ch.ads.budget, s.currency)} · {ch.ads.creatives} ads · +{money(ch.ads.reserve, s.currency)} reserve</span>
                  <span className="quiet" style={{ fontSize: 13 }}>Proposed from your budget range</span>
                  {ch.ads.phases.map((ph) => <span key={ph.name} style={{ fontSize: 14 }}><b>{ph.name} ({ph.share}%, {money(ph.amount, s.currency)}):</b> {ph.focus}</span>)}
                  <span style={{ fontSize: 14 }}><b>Angles:</b> {ch.ads.angles.join(", ")}</span>
                  {ch.ads.audiences.length ? <span style={{ fontSize: 14 }}><b>Audiences:</b> {ch.ads.audiences.join(", ")}</span> : null}
                </>
              )}
            </div>
            <div className="card stack gap-12" style={{ flex: "1 1 360px" }}>
              <div className="row between center gap-8"><h4 style={{ fontSize: 17 }}>Site</h4><Tag p="AI" /></div>
              <span className="mono" style={{ fontSize: 20 }}>{ch.site.changes.length} changes</span>
              {ch.site.changes.map((c) => <span key={c} style={{ fontSize: 14 }}>{c}</span>)}
            </div>
          </div>

          <div className={`card stack gap-12${m.creativeBehind ? " warnbox" : ""}`}>
            <div className="row between gap-8"><span className="k" style={m.creativeBehind ? { color: "var(--warn)" } : undefined}>Creative you&apos;ll need{m.creativeBehind ? " · behind schedule" : ""}</span><Tag p="AI" /></div>
            {m.creativeBehind ? <span style={{ fontSize: 14 }}>Some deadlines have passed. Lean on existing photos and one quick shoot, and prioritize the items marked late.</span> : null}
            <div className="stack">
              {m.creative.map((c) => (
                <div key={c.item} className="listline"><span>{c.item}</span><span className="mono" style={{ color: c.late ? "var(--warn)" : "var(--quiet)" }}>{c.late ? "late · was " : "due "}{fmt(c.due)}</span></div>
              ))}
            </div>
          </div>

          <div className="card stack gap-16">
            <div className="row between gap-8"><span className="k">Checklist</span><Tag p="AI" /></div>
            <div className="row gap-24">
              {m.checklist.map((c) => (
                <div key={c.title} className="grow stack gap-8">
                  <span style={{ fontWeight: 700 }}>{c.title}</span>
                  {c.items.map((i) => (
                    <label key={i} className="row gap-8" style={{ fontSize: 14, alignItems: "flex-start" }}><input type="checkbox" /> <span>{i}</span></label>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="row gap-16">
            <div className="card stack gap-12" style={{ flex: "2 1 480px" }}>
              <div className="row between gap-8"><span className="k">What to watch, by phase</span><Tag p="AI" /></div>
              <div className="row gap-24" style={{ fontSize: 14, lineHeight: 1.45 }}>
                {m.metrics.map((x) => <div key={x.phase} className="grow stack gap-4" style={{ flexBasis: 160 }}><b>{x.phase}</b><span>{x.items}</span></div>)}
              </div>
            </div>
            <div className="card stack gap-12" style={{ flex: "1 1 300px" }}>
              <span className="k">Still needed from you</span>
              {m.stillNeeded.map((x) => <div key={x} className="row between gap-8 center" style={{ fontSize: 14 }}><span>{x}</span><Tag p="ADD" /></div>)}
            </div>
          </div>
        </section>

        <section className="cta-band no-print" aria-labelledby="h-cta">
          <div className="stack gap-12" style={{ flex: "1 1 520px" }}>
            <span className="k" style={{ color: "#b9c0cc" }}>Next step</span>
            <h2 id="h-cta" style={{ fontSize: 30 }}>Turn {m.label.split(" ")[0]}&apos;s playbook into {p.cta.piecesToBuild} ready-to-review pieces</h2>
            <span className="sub" style={{ lineHeight: 1.5 }}>
              Cavaco creates the {ch.emailSms.emails} emails{ch.emailSms.sms ? `, ${ch.emailSms.sms} SMS` : ""}{ch.social.posts ? `, ${ch.social.posts} posts` : ""}{ch.ads.creatives ? `, ${ch.ads.creatives} ads` : ""} and {ch.site.changes.length} site changes from this playbook, in your brand voice, with a version for each {isLifecycle ? "customer stage" : p.segment.name.toLowerCase()}. You approve before anything goes live.
            </span>
          </div>
          <div className="stack gap-8" style={{ flex: "0 1 340px" }}>
            <CtaButton playbookId={p.id} href={p.cta.url} label={ctaLabel} />
            <span style={{ fontSize: 13, color: "#b9c0cc", textAlign: "center" }}>14-day free trial</span>
          </div>
        </section>

        <section id="save" className="card no-print" aria-label="Save your playbook">
          <LeadGate playbookId={p.id} month={m.label} />
        </section>

        <p className="quiet" style={{ fontSize: 13 }}>
          Suggestions are a starting point and follow common DTC planning rules of thumb; edit anything. {p.aiUsed ? "Themes and angles were drafted with AI." : ""}
        </p>
      </main>
    </>
  );
}

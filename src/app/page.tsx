import { BASE } from "@/lib/base";

const MONTHS = ["N", "D", "J", "F", "M", "A", "M", "J", "J", "A", "S", "O"];
const DOTS: Record<number, "big" | "small"> = { 0: "big", 1: "small", 2: "small", 3: "small", 6: "big", 7: "small", 8: "small", 10: "big", 11: "small" };

function StoreForm({ id }: { id: string }) {
  return (
    <form action={`${BASE}/start`} method="get" className="row gap-8" style={{ alignItems: "flex-end" }}>
      <label className="field" htmlFor={id} style={{ flex: "1 1 280px" }}>
        Your store&apos;s web address
        <input id={id} name="url" type="text" inputMode="url" autoComplete="url" placeholder="yourstore.com" required />
      </label>
      <button className="btn btn-primary" type="submit" style={{ minHeight: 48 }}>
        Build my playbook
      </button>
    </form>
  );
}

function Preview() {
  const tile = (n: string, l: string) => (
    <div style={{ flex: "1 1 90px", border: "1px solid var(--line)", borderRadius: 10, padding: "10px 12px" }} className="stack gap-4">
      <span className="mono" style={{ fontSize: 20, fontWeight: 500 }}>{n}</span>
      <span className="quiet" style={{ fontSize: 12 }}>{l}</span>
    </div>
  );
  return (
    <figure className="preview" aria-label="Sample playbook for a fictional candle store" style={{ margin: 0, flex: "1 1 460px" }}>
      <div className="chrome">
        <span className="dots" aria-hidden="true"><span /><span /><span /></span>
        <span>Ember &amp; Oak · Nov 2026 – Oct 2027</span>
        <span className="tag t-AI" style={{ marginLeft: "auto" }}>SAMPLE</span>
      </div>
      <div className="stack gap-8" style={{ padding: "18px 18px 14px", borderBottom: "1px solid var(--line-soft)" }}>
        <span className="k">Year at a glance</span>
        <div className="grid12">
          {MONTHS.map((m, i) => (
            <span key={i} className="mono quiet" style={{ textAlign: "center", fontSize: 11 }}>{m}</span>
          ))}
        </div>
        <div className="grid12">
          <span className="band-cell strong" style={{ gridColumn: "1 / 3" }}>Gift the glow</span>
          <span className="band-cell" style={{ gridColumn: "3 / 6" }}>Reset rituals</span>
          <span className="band-cell" style={{ gridColumn: "6 / 9" }}>Open windows</span>
          <span className="band-cell" style={{ gridColumn: "9 / 13" }}>Fall, first</span>
        </div>
        <div className="grid12" aria-hidden="true">
          {MONTHS.map((_, i) => (
            <span key={i} style={{ display: "flex", justifyContent: "center", alignItems: "center", height: 14 }}>
              {DOTS[i] ? (
                <span style={{ width: DOTS[i] === "big" ? 12 : 8, height: DOTS[i] === "big" ? 12 : 8, borderRadius: 999, background: DOTS[i] === "big" ? "var(--blue)" : "#b5d5f1", display: "block" }} />
              ) : null}
            </span>
          ))}
        </div>
        <div className="stack" style={{ fontSize: 13, marginTop: 6 }}>
          <div className="listline"><span><b>Black Friday – Cyber Monday</b> · Nov 27</span><span className="tag t-LATE">CREATIVE LATE</span></div>
          <div className="listline"><span><b>Mother&apos;s Day</b> · May 9</span><span className="mono quiet" style={{ fontSize: 11 }}>creative due Mar 6</span></div>
          <div className="listline"><span><b>Fall launch</b> · Sep 8</span><span className="mono quiet" style={{ fontSize: 11 }}>creative due Jul 25</span></div>
        </div>
      </div>
      <div className="stack gap-12" style={{ padding: "14px 18px 18px" }}>
        <div className="row between gap-8" style={{ alignItems: "baseline" }}>
          <span className="k">November in detail</span>
          <span style={{ fontSize: 13, fontWeight: 600 }}>4 versions: one per scent family</span>
        </div>
        <div className="phasebar">
          <span style={{ flex: "12 1 0" }}>Launch</span>
          <span style={{ flex: "14 1 0", background: "var(--tint-2)" }}>Momentum</span>
          <span className="peak" style={{ flex: "7 1 0" }}>Peak</span>
          <span style={{ flex: "6 1 0" }}>Close</span>
        </div>
        <div className="row gap-8">{tile("12 + 4", "Emails + SMS")}{tile("36", "Social posts")}{tile("$12.5k", "Ads, 8 creatives")}{tile("4", "Site changes")}</div>
        <div className="row between center gap-8" style={{ background: "var(--navy)", color: "#fff", borderRadius: 10, padding: "10px 14px", fontSize: 13 }}>
          <span>64 pieces ready to build</span>
          <span style={{ fontWeight: 700 }}>Open in Cavaco →</span>
        </div>
      </div>
    </figure>
  );
}

export default function Landing() {
  return (
    <main>
      <section className="wrap hero row gap-40 center" aria-labelledby="h-hero">
        <div className="stack gap-16" style={{ flex: "1 1 460px" }}>
          <span className="eyebrow">MARKETING PLAYBOOK BUILDER · FREE FOR SHOPIFY AND BIGCOMMERCE</span>
          <h1 id="h-hero">Your next 12 months of marketing strategy, in 2 minutes</h1>
          <p className="lead">
            Paste your store. Answer 6 questions. Get a playbook: the strategy for your year and a detailed plan for this month across email, SMS, social, ads and your site.
          </p>
          <StoreForm id="store-top" />
          <span className="quiet" style={{ fontSize: 14 }}>Free. No card. We only read your store&apos;s public pages.</span>
        </div>
        <Preview />
      </section>

      <section className="band" aria-labelledby="h-get">
        <div className="wrap stack gap-24" style={{ padding: "56px 24px" }}>
          <h2 id="h-get" style={{ fontSize: 32 }}>What you get</h2>
          <div className="row gap-24">
            <div className="grow stack gap-8"><h3 style={{ fontSize: 20 }}>The year ahead</h3><p className="muted" style={{ lineHeight: 1.5 }}>A theme for each quarter, your biggest sales moments with creative due dates, and how to split budget across the year.</p></div>
            <div className="grow stack gap-8"><h3 style={{ fontSize: 20 }}>This month, in detail</h3><p className="muted" style={{ lineHeight: 1.5 }}>The main campaign, week-by-week timeline, and what email, SMS, social, ads and your site each do, and for which customers.</p></div>
            <div className="grow stack gap-8"><h3 style={{ fontSize: 20 }}>Personalized by what your customers love</h3><p className="muted" style={{ lineHeight: 1.5 }}>We find how your products naturally group (scent, sport, skin type…) and plan a version of each campaign for each group.</p></div>
          </div>
        </div>
      </section>

      <section className="wrap pad stack gap-24" aria-labelledby="h-how">
        <h2 id="h-how" style={{ fontSize: 32 }}>How it works</h2>
        <ol className="row gap-16" style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {[
            ["01", "Paste your store", "We read your products, prices and the tools you already use."],
            ["02", "Answer 6 questions", "Size, goals, discounts and budget. Only what a website can't tell us."],
            ["03", "Get your playbook", "Download it, share it, or have Cavaco build the work for you."],
          ].map(([n, t, d]) => (
            <li key={n} className="card grow stack gap-8">
              <span className="mono" style={{ color: "var(--blue-text)", fontWeight: 500 }}>{n}</span>
              <span style={{ fontSize: 18, fontWeight: 700 }}>{t}</span>
              <span className="muted" style={{ lineHeight: 1.45 }}>{d}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="dark" aria-labelledby="h-rules">
        <div className="wrap stack gap-24" style={{ padding: "56px 24px" }}>
          <div className="stack gap-8">
            <h2 id="h-rules" style={{ fontSize: 32 }}>Built on how agencies plan</h2>
            <p className="sub" style={{ maxWidth: 720, lineHeight: 1.5 }}>Your playbook follows the planning rules DTC agencies use, so it reads like something a strategist made, not a template.</p>
          </div>
          <div className="row gap-24">
            <div className="grow stack gap-4"><span className="big-num">60 / 30 / 10</span><span className="sub">Main campaign, supporting, always-on</span></div>
            <div className="grow stack gap-4"><span className="big-num">45 days</span><span className="sub">Creative lead time for big moments</span></div>
            <div className="grow stack gap-4"><span className="big-num">4 phases</span><span className="sub">Launch, momentum, peak, close</span></div>
          </div>
        </div>
      </section>

      <section className="wrap pad stack gap-16" aria-labelledby="h-faq" style={{ maxWidth: 880 }}>
        <h2 id="h-faq" style={{ fontSize: 32 }}>Questions</h2>
        {[
          ["Is it really free?", "Yes. The playbook is yours to keep. We ask for an email only to send the download and next month's playbook."],
          ["What do you do with my store?", "We read public pages only: products, prices and which tools are installed. We never log in or change anything."],
          ["Do I need Cavaco to use the playbook?", "No. Use it with any tools. If you want the emails, posts and ads made for you, Cavaco can build them from your playbook."],
        ].map(([q, a]) => (
          <div key={q} className="stack gap-4" style={{ paddingBottom: 16, borderBottom: "1px solid var(--line)" }}>
            <h3 style={{ fontSize: 18 }}>{q}</h3>
            <p className="muted" style={{ lineHeight: 1.5 }}>{a}</p>
          </div>
        ))}
        <div style={{ marginTop: 12 }}><StoreForm id="store-bottom" /></div>
      </section>
    </main>
  );
}

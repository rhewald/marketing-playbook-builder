import type { Metadata } from "next";
import { getStats } from "@/lib/db";
import { platformLabel } from "@/lib/platform";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Playbook Builder funnel | Cavaco", robots: { index: false, follow: false } };

const STEPS: [string, string][] = [
  ["scan", "Stores read"],
  ["playbook", "Playbooks built"],
  ["cta_click", "Clicked “Open in Cavaco”"],
  ["lead", "Gave their email"],
  ["hubspot_ok", "Synced to HubSpot"],
  ["csv", "Downloaded CSV"],
  ["print", "Saved as PDF"],
  ["share", "Copied share link"],
];

export default async function Stats({ searchParams }: { searchParams: Promise<{ days?: string }> }) {
  const sp = await searchParams;
  const days = Math.min(90, Math.max(1, Number(sp.days) || 14));
  const s = await getStats(days);
  const top = s.totals.scan || 0;
  const pct = (n: number) => (top ? `${Math.round((n / top) * 100)}%` : "—");
  return (
    <main className="wrap stack gap-24" style={{ padding: "32px 24px", maxWidth: 960 }}>
      <div className="stack gap-4">
        <span className="k">Marketing Playbook Builder · last {days} days</span>
        <h1 style={{ fontSize: 30 }}>Funnel</h1>
        <span className="quiet" style={{ fontSize: 14 }}>
          Counts only, no personal data. Change the window with <span className="mono">?days=30</span>. Failed HubSpot syncs: {s.totals.hubspot_fail || 0}.
        </span>
      </div>
      <div className="card stack gap-8">
        {STEPS.map(([key, label]) => {
          const n = s.totals[key] || 0;
          const w = top ? Math.max(2, Math.round((n / top) * 100)) : 0;
          return (
            <div key={key} className="row gap-12 center" style={{ fontSize: 15 }}>
              <span style={{ flex: "0 0 230px" }}>{label}</span>
              <div style={{ flex: "1 1 200px", background: "var(--line-soft)", borderRadius: 6, height: 22 }}>
                <div style={{ width: `${w}%`, background: "var(--blue)", height: 22, borderRadius: 6 }} />
              </div>
              <span className="mono" style={{ flex: "0 0 110px", textAlign: "right" }}>
                {n} · {pct(n)}
              </span>
            </div>
          );
        })}
      </div>
      <div className="row gap-16">
        <div className="card grow stack gap-8">
          <span className="k">Leads</span>
          <span className="mono" style={{ fontSize: 26 }}>{s.leads.total}</span>
          <span className="quiet" style={{ fontSize: 14 }}>Average fit score: {s.leads.avgFit ?? "—"} / 60</span>
          {Object.entries(s.leads.byRole).map(([r, n]) => (
            <span key={r} style={{ fontSize: 14 }}>{r}: {n}</span>
          ))}
        </div>
        <div className="card grow stack gap-8">
          <span className="k">Playbooks by platform</span>
          {Object.keys(s.platforms).length ? (
            Object.entries(s.platforms)
              .sort((a, b) => b[1] - a[1])
              .map(([p, n]) => (
                <span key={p} style={{ fontSize: 14 }}>{platformLabel(p)}: {n}</span>
              ))
          ) : (
            <span className="quiet">None yet</span>
          )}
        </div>
      </div>
      <div className="card" style={{ padding: "12px 8px" }}>
        <div className="scroll-x">
          <table className="t">
            <thead>
              <tr>
                <th>Day</th>
                {STEPS.slice(0, 5).map(([k, l]) => (
                  <th key={k}>{l}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {s.days.map((d) => (
                <tr key={d.day}>
                  <td className="mono">{d.day}</td>
                  {STEPS.slice(0, 5).map(([k]) => (
                    <td key={k} className="mono">{d.counts[k] || 0}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

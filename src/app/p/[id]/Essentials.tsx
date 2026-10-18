import type { Playbook } from "@/lib/types";
import { buildEssentials } from "@/lib/essentials";
import "./essentials.css";

// "Always-on essentials": Cavaco's library Essentials (Advertising, Drip, Scheduled, Site).
export function Essentials({ p }: { p: Playbook }) {
  const essentials = buildEssentials(p);
  const month = p.month.label.split(" ")[0];
  return (
    <>
      {/* Always-on essentials (Cavaco library names) */}
      <div className="stack gap-4" style={{ marginTop: 8 }} id="essentials">
        <h3 style={{ fontSize: 20 }}>Always-on essentials</h3>
        <span className="quiet" style={{ fontSize: 14 }}>The foundations that run every month alongside the main campaign, named as they appear in Cavaco&apos;s libraries. Status is what we could see on your site; the note is what to adjust in {month}.</span>
      </div>
      <div className="row gap-16">
        {essentials.map((g) => (
          <div key={g.key} className="card stack gap-12 ess" style={{ flex: "1 1 520px" }}>
            <div className="row between center gap-8"><h4 style={{ fontSize: 17 }}>{g.title}</h4><span className="mono quiet" style={{ fontSize: 12 }}>{g.path}</span></div>
            <span style={{ fontSize: 14 }}>{g.intro}</span>
            <div className="scroll-x">
              <table className="t">
                <thead><tr><th>Campaign</th><th>Status</th><th>This month</th></tr></thead>
                <tbody>
                  {g.items.map((it) => (
                    <tr key={it.name}>
                      <td><b>{it.name}</b>{it.channels ? <div className="mono quiet" style={{ fontSize: 12, marginTop: 2 }}>{it.channels}</div> : null}</td>
                      <td><span className={`st st-${it.status}`}>{it.statusLabel}</span></td>
                      <td>{it.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

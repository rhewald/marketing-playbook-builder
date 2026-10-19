import { ImageResponse } from "next/og";

// Link preview image (iMessage, Slack, LinkedIn, X). Shared playbook links inherit it.
export const alt = "Free marketing playbook for your store, by Cavaco";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const quarters = [
  { q: "Q4", t: "Gifting season", on: true },
  { q: "Q1", t: "Fresh start", on: false },
  { q: "Q2", t: "Spring into summer", on: false },
  { q: "Q3", t: "Summer to fall", on: false },
];

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#09102c", color: "#ffffff", padding: "64px 72px", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700, letterSpacing: 6 }}>CAVACO</div>
          <div style={{ display: "flex", fontSize: 24, color: "#09102c", background: "#d6fd70", borderRadius: 999, padding: "10px 24px" }}>Free tool</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -1 }}>Your free marketing playbook</div>
          <div style={{ display: "flex", fontSize: 32, color: "#c9cfdc", marginTop: 22, lineHeight: 1.35, maxWidth: 980 }}>
            The year&apos;s strategy and next month&apos;s plan for email, SMS, social, ads and your site. Built from your store in 2 minutes.
          </div>
        </div>
        <div style={{ display: "flex" }}>
          {quarters.map((x) => (
            <div key={x.q} style={{ display: "flex", flexDirection: "column", width: 248, marginRight: 20, padding: "18px 22px", borderRadius: 18, background: x.on ? "#56eb83" : "#16204a", color: x.on ? "#09102c" : "#ffffff" }}>
              <div style={{ display: "flex", fontSize: 20, opacity: 0.8 }}>{x.q}</div>
              <div style={{ display: "flex", fontSize: 26, fontWeight: 700, marginTop: 4 }}>{x.t}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}

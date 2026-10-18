"use client";

import { useState } from "react";
import { BASE } from "@/lib/base";

function track(playbookId: string, event: string) {
  try {
    fetch(`${BASE}/api/lead`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ playbookId, event }), keepalive: true });
  } catch {
    /* ignore */
  }
}

export function CtaButton({ playbookId, href, label }: { playbookId: string; href: string; label: string }) {
  return (
    <a className="btn btn-white" href={href} target="_blank" rel="noopener" onClick={() => track(playbookId, "cta_click")} style={{ fontSize: 17, minHeight: 52 }}>
      {label}
    </a>
  );
}

export function ShareButton({ playbookId }: { playbookId: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      className="btn btn-light"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(window.location.href);
          setCopied(true);
          track(playbookId, "share");
          setTimeout(() => setCopied(false), 2500);
        } catch {
          /* ignore */
        }
      }}
    >
      {copied ? "Link copied" : "Share link"}
    </button>
  );
}

export function Downloads({ playbookId }: { playbookId: string }) {
  return (
    <div className="row gap-24 between" style={{ alignItems: "center" }}>
      <div className="stack gap-4" style={{ flex: "1 1 360px" }}>
        <h2 style={{ fontSize: 20 }}>Download your playbook</h2>
        <p className="muted" style={{ fontSize: 15, lineHeight: 1.5 }}>
          Take it to your team or agency. Want a fresh playbook every month, with the emails, posts, ads and site changes built for you? That&apos;s what Cavaco does, starting with a 14-day free trial.
        </p>
      </div>
      <div className="row gap-8">
        <a className="btn btn-primary" href={`${BASE}/api/p/${playbookId}/csv`} onClick={() => track(playbookId, "csv")}>Download spreadsheet (CSV)</a>
        <button type="button" className="btn btn-light" onClick={() => { track(playbookId, "print"); window.print(); }}>Save as PDF</button>
      </div>
    </div>
  );
}

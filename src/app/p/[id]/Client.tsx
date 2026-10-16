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

export function LeadGate({ playbookId, month }: { playbookId: string; month: string }) {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    try {
      const res = await fetch(`${BASE}/api/lead`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ playbookId, email, role, hutk: document.cookie.match(/(?:^|; )hubspotutk=([^;]+)/)?.[1] ?? null }) });
      if (!res.ok) {
        const d = await res.json().catch(() => ({}));
        setMsg(d.error === "invalid_email" ? "Please enter a valid work email." : "Something went wrong. Please try again.");
        setState("error");
        return;
      }
      setState("done");
    } catch {
      setMsg("Something went wrong. Please try again.");
      setState("error");
    }
  }

  if (state === "done")
    return (
      <div className="stack gap-12">
        <h2 style={{ fontSize: 20 }}>Your playbook is unlocked</h2>
        <p className="muted">Download it now. We&apos;ll email your next month&apos;s playbook at the start of {month === "" ? "next month" : "the month"}.</p>
        <div className="row gap-8">
          <a className="btn btn-primary" href={`${BASE}/api/p/${playbookId}/csv`} onClick={() => track(playbookId, "csv")}>Download spreadsheet (CSV)</a>
          <button type="button" className="btn btn-light" onClick={() => { track(playbookId, "print"); window.print(); }}>Save as PDF</button>
        </div>
      </div>
    );

  return (
    <form onSubmit={submit} className="row gap-24 between" style={{ alignItems: "flex-end" }}>
      <div className="stack gap-4" style={{ flex: "1 1 320px" }}>
        <h2 style={{ fontSize: 20 }}>Get the full playbook and next month&apos;s update</h2>
        <p className="quiet" style={{ fontSize: 14 }}>Spreadsheet and PDF now; your next month&apos;s playbook by email.</p>
      </div>
      <div className="row gap-8" style={{ flex: "2 1 480px", alignItems: "flex-end" }}>
        <label className="field" style={{ flex: "2 1 220px" }}>
          Work email
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@yourstore.com" autoComplete="email" />
        </label>
        <label className="field" style={{ flex: "1 1 160px" }}>
          You are
          <select value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="" disabled>Choose…</option>
            <option value="founder">Founder / owner</option>
            <option value="marketing">In-house marketer</option>
            <option value="agency">Agency / freelancer</option>
            <option value="other">Other</option>
          </select>
        </label>
        <button className="btn btn-primary" type="submit" disabled={state === "sending"}>{state === "sending" ? "Sending…" : "Send my playbook"}</button>
      </div>
      {state === "error" ? <p className="error" role="alert" style={{ width: "100%" }}>{msg}</p> : null}
    </form>
  );
}

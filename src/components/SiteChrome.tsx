import { LOGO } from "@/lib/logo";
import { BASE, SITE } from "@/lib/base";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap bar">
        <a href={`${SITE}/`} aria-label="Cavaco home" style={{ display: "flex" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO} alt="Cavaco Outreach" width={106} height={40} style={{ display: "block" }} />
        </a>
        <nav aria-label="Main">
          <a className="hide-sm" href={`${SITE}/why-cavaco`}>Why Cavaco</a>
          <a className="hide-sm" href={`${SITE}/features`}>Features</a>
          <a className="hide-sm" href={`${SITE}/solutions`}>Solutions</a>
          <a className="hide-sm" href={`${SITE}/compare`}>Compare</a>
          <a className="hide-sm" href={`${SITE}/blog`}>Blog</a>
          <a className="cta" href={`${SITE}/book-a-demo`}>Book Live Demo</a>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap bar">
        <span>© {new Date().getFullYear()} Cavaco · 4000 Moorpark Ave, San Jose, CA</span>
        <span>
          <a href={`${SITE}/pricing`}>Pricing</a>
          <a href="https://help.cavaco.ai">Help Center</a>
          <a href={`${SITE}/privacy-policy`}>Privacy</a>
          <a href={`${SITE}/terms-of-service`}>Terms</a>
        </span>
      </div>
    </footer>
  );
}

export function ToolBar({ step, children }: { step?: string; children?: React.ReactNode }) {
  return (
    <div className="toolbar">
      <div className="wrap bar">
        <span style={{ fontWeight: 700, fontSize: 17 }}>
          Marketing Playbook Builder <span className="quiet" style={{ fontWeight: 400, fontSize: 14 }}>· free tool</span>
        </span>
        {step ? <span className="mono quiet" style={{ fontSize: 13 }}>{step}</span> : null}
        {children}
      </div>
    </div>
  );
}

import type { Metadata } from "next";
// Webflow DevLink styles, imported one by one: Next mangles the
// "@import ... layer()" lines in webflow/css/global.css.
import "webflow/css/fonts.css";
import "webflow/css/normalize.css";
import "webflow/css/defaults.css";
import "webflow/css/variables.css";
import "webflow/css/tags.css";
import "webflow/css/classes.css";
import "./globals.css";
import { DevLinkProvider } from "webflow/DevLinkProvider";
import { NavbarTransparentDrop } from "webflow/NavbarTransparentDrop";
import { FooterUpdated } from "webflow/FooterUpdated";

const TITLE = "Free Marketing Playbook for Your Store | Cavaco";
const DESCRIPTION =
  "Get your free marketing playbook: the strategy for your year and a detailed plan for next month across email, SMS, social, ads and your site. Built from your store in 2 minutes.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL("https://www.cavaco.ai"),
  openGraph: {
    title: "Your free marketing playbook",
    description: DESCRIPTION,
    siteName: "Cavaco",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Your free marketing playbook", description: DESCRIPTION },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>
        <DevLinkProvider>
          {/* The site navbar is transparent and absolutely positioned (it sits over a dark hero on cavaco.ai). */}
          <div className="wf-nav-band">
            <NavbarTransparentDrop />
          </div>
          {children}
          <div className="wf-footer">
            <FooterUpdated />
          </div>
        </DevLinkProvider>
      </body>
    </html>
  );
}

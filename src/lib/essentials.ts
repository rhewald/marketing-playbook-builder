import type { Playbook } from "./types";

// The always-on "Essentials" from Cavaco's campaign libraries (Advertising,
// Direct messaging > Drip campaigns, Direct messaging > Scheduled, Site).
// Names match the Cavaco app so the playbook maps 1:1 to what the copilot runs.
// Derived from a saved playbook at render time, so older playbooks get it too.

export type EssentialStatus = "found" | "gap" | "unknown" | "check" | "no-budget" | "start-small";

export interface EssentialItem {
  name: string;
  channels?: string;
  status: EssentialStatus;
  statusLabel: string;
  note: string;
}

export interface EssentialGroup {
  key: "ads" | "drip" | "scheduled" | "site";
  title: string;
  path: string; // where it lives in Cavaco
  intro: string;
  items: EssentialItem[];
}

export function buildEssentials(p: Playbook): EssentialGroup[] {
  const t = p.store.tools;
  const known = p.store.homepageRead !== false;
  const month = p.month.label.split(" ")[0];
  const main = p.year.moments.find((x) => x.name === p.month.mainMoment) || null;
  const moment = main?.name || `${month}'s campaign`;
  const isMajor = !!main?.major;
  const discountMonth = !!main && p.answers.maxDiscount !== "none" && /^Up to/.test(main.offer);
  const noDiscounts = p.answers.maxDiscount === "none";
  const hero = p.month.heroProducts[0] || null;
  const isLifecycle = p.segment.name === "Customer stage";
  const seg = p.segment.name.toLowerCase();
  const budget = p.answers.adBudget !== "none";
  const hasSms = !!t.sms;

  // ---- Advertising
  const meta = t.ads.includes("Meta"), google = t.ads.includes("Google");
  const adChannels = (search = false) => {
    const c: string[] = [];
    c.push(meta ? "Meta ✓" : "Meta");
    c.push(google ? "Google ✓" : "Google");
    c.push(search ? "Search" : "Display");
    return c.join(" · ");
  };
  const adStatus = (startHere: boolean): Pick<EssentialItem, "status" | "statusLabel"> =>
    budget
      ? { status: "check", statusLabel: "Run this month" }
      : startHere
        ? { status: "start-small", statusLabel: "Start small here" }
        : { status: "no-budget", statusLabel: "Later, once there's budget" };
  const ads: EssentialItem[] = [
    { name: "Get New Customers", channels: adChannels(), ...adStatus(false), note: budget ? (isMajor ? `Your main prospecting campaign. Raise spend in the two weeks before ${moment}.` : "Your main prospecting campaign. Keep spend steady and test 2–3 new creatives.") : "Your prospecting campaign once you have a budget." },
    { name: "Build Brand Awareness", channels: adChannels(), ...adStatus(false), note: budget ? `Run in the Launch phase to warm up audiences for ${moment}.` : "Video reach to warm up new audiences." },
    { name: "Convert Website Visitors", channels: adChannels(), ...adStatus(true), note: `Retarget visitors from the last 30 days with ${moment} creative.` },
    { name: "Recover Abandoned Carts", channels: adChannels(), ...adStatus(true), note: discountMonth ? "Show the sale offer during peak, then switch back to reviews." : "Show reviews and best sellers. No discount needed." },
    { name: "Re-Engage Inactive Customers", channels: adChannels(), ...adStatus(false), note: discountMonth ? "One push to past buyers at peak." : "Show past buyers what's new." },
    { name: "Drive Traffic to a Page", channels: adChannels(), ...adStatus(false), note: `Send traffic to the ${moment} landing page.` },
    { name: "Promote a Product", channels: adChannels(), ...adStatus(false), note: hero ? `Hero product this month: ${hero}.` : "Pick one hero product for the month." },
  ];

  // ---- Drip campaigns
  const emailStatus: Pick<EssentialItem, "status" | "statusLabel"> = t.email
    ? { status: "found", statusLabel: `${t.email} found, check it's on` }
    : known
      ? { status: "gap", statusLabel: "Not found, set up" }
      : { status: "unknown", statusLabel: "Couldn't check" };
  const plus = (base: string, sms: boolean) => (sms && hasSms ? `${base} · SMS` : base);
  const drip: EssentialItem[] = [
    { name: "Welcome Series", channels: plus("Email", true), ...emailStatus, note: discountMonth ? "Pause the welcome discount during peak so new subscribers don't undercut the sale." : isLifecycle ? "Tell new subscribers what you're about in 3–4 emails." : `Ask “${p.segment.question}” and send the matching hero product.` },
    { name: "Abandoned Cart", channels: plus("Email", true), ...emailStatus, note: isMajor ? "Shorten the first reminder during peak (about 1 hour)." : "First reminder within 4 hours, then one more the next day." },
    { name: "Abandoned Browse", channels: plus("Email", true), ...emailStatus, note: isLifecycle ? "Show the products they viewed, with reviews." : `Show the products they viewed, matched to their ${seg}.` },
    { name: "Order Confirmed", channels: plus("Email", true), ...emailStatus, note: `Add a small ${moment} banner.` },
    { name: "Shipment Confirmed", channels: plus("Email", true), ...emailStatus, note: isMajor ? "Add your shipping cutoff dates for the peak." : "Keep it plain: tracking link and delivery date." },
    { name: "Order Cancelled", channels: plus("Email", true), ...emailStatus, note: "Keep it plain and offer help." },
    { name: "Post-Purchase Thank-You", channels: "Email", ...emailStatus, note: "Thank them and suggest a product that goes with what they bought." },
    { name: "Product Review", channels: "Email", ...emailStatus, note: "Ask 7–10 days after delivery." },
    { name: "Reconnect – We've Missed You", channels: "Email", ...emailStatus, note: discountMonth ? "Customers quiet 90+ days. Hold until the sale starts, then send once." : "Customers quiet 90+ days. Lead with what's new." },
    { name: "Welcome Back", channels: "Email", ...emailStatus, note: "For customers who come back after a long gap." },
  ];

  // ---- Scheduled campaigns
  const schedStatus: Pick<EssentialItem, "status" | "statusLabel"> = t.email
    ? { status: "check", statusLabel: "Send this month" }
    : known
      ? { status: "gap", statusLabel: "Needs an email tool" }
      : { status: "check", statusLabel: "Send this month" };
  const scheduled: EssentialItem[] = [
    { name: "Monthly Deal", channels: plus("Email", true), ...schedStatus, note: p.month.offer ? `This month: ${p.month.offer}.` : noDiscounts ? "No discount: use a bundle, gift or early access." : "Pick this month's deal (we left it open)." },
    { name: "New Arrivals", channels: plus("Email", true), ...schedStatus, note: hero ? `Feature what's new, starting with ${hero}.` : "Feature your newest products." },
    { name: "Returning Customers Sales", channels: "Email", ...schedStatus, note: discountMonth ? `VIP early access before ${moment}.` : "First look at new products for repeat buyers." },
    { name: "Win-Back: Inactive Subscribers", channels: "Email", ...schedStatus, note: "Once this month to subscribers with no opens in 90 days. Stop mailing those who don't respond." },
  ];

  // ---- Site
  const found = (tool: string | null): Pick<EssentialItem, "status" | "statusLabel"> =>
    tool ? { status: "found", statusLabel: `${tool} found` } : known ? { status: "gap", statusLabel: "Not found, add it" } : { status: "unknown", statusLabel: "Couldn't check" };
  const site: EssentialItem[] = [
    { name: hasSms ? "Sign-Up Form: Email and SMS" : "Sign-Up Form: Email Capture", status: "check", statusLabel: "Check yours", note: isLifecycle ? "Give people a reason to join: early access or guides." : `Ask “${p.segment.question}” so every email can match their ${seg}.` },
    { name: "Product Reviews", ...found(t.reviews), note: "Star ratings on product pages and in ads." },
    { name: "Web Chat: Sales Agent", ...found(t.chat), note: `Answers product questions and covers the ${moment} offer.` },
    { name: "Consent Pages", status: "check", statusLabel: "Check yours", note: "Email and phone unsubscribe pages, required for email and SMS." },
  ];

  return [
    { key: "ads", title: "Advertising", path: "Advertising › Essentials", intro: budget ? "Foundational campaigns: new customers, retargeting and core revenue." : "No ad budget yet. Start with the two retargeting campaigns; they usually pay back first.", items: ads },
    { key: "drip", title: "Drip campaigns", path: "Direct messaging › Drip campaigns › Essentials", intro: "Automated flows that run all year. Set them once, adjust them each month.", items: drip },
    { key: "scheduled", title: "Scheduled campaigns", path: "Direct messaging › Scheduled › Essentials", intro: "Recurring sends to plan into the month, on top of the main campaign.", items: scheduled },
    { key: "site", title: "Site", path: "Site › Sign-up forms, Reviews, Web chat", intro: "What has to be on the site for the rest to work.", items: site },
  ];
}

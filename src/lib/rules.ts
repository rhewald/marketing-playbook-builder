import { addDays, d, fmt, fmtRange, iso, momentsForYear, monthName, monthShort, parse, type CalendarMoment } from "./calendar";
import type { Answers, Moment, Phase, Playbook, Provenance, QuarterPlan, ScanResult, SegmentCandidate } from "./types";

export interface AiCopy {
  voice?: string;
  quarterThemes?: string[]; // one per quarter group, in order
  messages?: string[];
  supporting?: { name: string; detail: string };
  segmentAngles?: Record<string, string>;
  priorityProducts?: string[];
  adAngles?: string[];
}

const GIFTABLE_HINTS = /candle|gift|jewel|watch|beauty|skin|fragrance|perfume|home|decor|apparel|cloth|shoe|toy|kid|baby|chocolate|coffee|tea|wine|spirit|accessor|bag|wallet|book|art/i;

export const CAVACO_LINKS = {
  shopify: "https://apps.shopify.com/cavaco-app",
  bigcommerce: "https://www.bigcommerce.com/apps/cavaco-ai/",
  demo: "https://www.cavaco.ai/book-a-demo",
};

export function adBudgetMidpoint(b: Answers["adBudget"]): number {
  return { none: 0, lt5k: 3000, "5-20k": 12500, "20-100k": 60000, "100k+": 150000 }[b];
}
function discountCap(a: Answers): number {
  return { none: 0, "15": 15, "25": 25, "30+": 30 }[a.maxDiscount];
}
function growthLabel(g: Answers["growthGoal"]) {
  return { hold: "Hold steady", "10-25": "+10–25%", "25-50": "+25–50%", "50+": "+50% or more" }[g];
}
function money(n: number, cur: string) {
  const sym = cur === "USD" || cur === "CAD" || cur === "AUD" ? "$" : cur === "EUR" ? "€" : cur === "GBP" ? "£" : "";
  if (n >= 1000) return `${sym}${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}k${sym ? "" : " " + cur}`;
  return `${sym}${Math.round(n)}${sym ? "" : " " + cur}`;
}

// Share of the ad budget per calendar quarter, and how Q4 splits by month.
const QUARTER_SHARE: Record<number, number> = { 1: 22, 2: 18, 3: 18, 4: 42 };
function monthAdWeight(m: number): number {
  if (m === 10) return QUARTER_SHARE[4] * 0.2;
  if (m === 11) return QUARTER_SHARE[4] * 0.45;
  if (m === 12) return QUARTER_SHARE[4] * 0.35;
  const q = Math.ceil(m / 3);
  return QUARTER_SHARE[q] / 3;
}

const DEFAULT_THEMES: Record<string, { theme: string; job: string }> = {
  q4: { theme: "Gifting season", job: "Win new customers, then protect margin" },
  q1: { theme: "Fresh start", job: "Turn holiday buyers into repeat buyers" },
  q2: { theme: "Spring into summer", job: "Gifting moments and new customers" },
  q3: { theme: "Summer to fall", job: "Launch what's new and build the list for Q4" },
};

function offerFor(m: CalendarMoment, a: Answers): { offer: string; prov: Provenance } {
  const cap = discountCap(a);
  if (m.kind === "sale" || m.kind === "clear") {
    if (cap === 0) return { offer: "No discount: bundles, gifts or early access", prov: "YOU" };
    if (m.kind === "clear") return { offer: `Up to ${Math.min(cap, 20)}% on selected stock`, prov: "AI" };
    return { offer: `Up to ${cap}%${a.maxDiscount === "30+" ? "+" : ""}`, prov: "YOU" };
  }
  if (m.kind === "gifting") return { offer: "Gift sets and bundles at full price", prov: "AI" };
  if (m.kind === "launch") return { offer: "VIP early access, no discount", prov: "AI" };
  return { offer: "None", prov: "AI" };
}

function phasesFor(main: CalendarMoment | null, monthStart: Date, monthEnd: Date): Phase[] {
  if (!main) {
    const a = monthStart;
    return [
      { name: "Launch", start: iso(a), end: iso(addDays(a, 6)), summary: "Kick off the month's theme across every channel" },
      { name: "Momentum", start: iso(addDays(a, 7)), end: iso(addDays(a, 17)), summary: "Helpful content, customer stories, product spotlights" },
      { name: "Peak", start: iso(addDays(a, 18)), end: iso(addDays(a, 24)), summary: "Strongest push: urgency and best sellers" },
      { name: "Close", start: iso(addDays(a, 25)), end: iso(monthEnd), summary: "Last call, thank-you, preview next month" },
    ];
  }
  const peakStart = main.start < monthStart ? monthStart : main.start;
  const momentumStart = addDays(peakStart, -14) < monthStart ? addDays(monthStart, Math.floor((peakStart.getTime() - monthStart.getTime()) / 86400000 / 2)) : addDays(peakStart, -14);
  const launchEnd = addDays(momentumStart, -1);
  const closeStart = addDays(main.end, 1);
  const phases: Phase[] = [];
  if (launchEnd >= monthStart)
    phases.push({ name: "Launch", start: iso(monthStart), end: iso(launchEnd), summary: "Tease the moment, grow the list, open an early-access waitlist" });
  phases.push({ name: "Momentum", start: iso(momentumStart), end: iso(addDays(peakStart, -1)), summary: "VIP early access, customer stories, warm up retargeting" });
  phases.push({ name: "Peak", start: iso(peakStart), end: iso(main.end), summary: `${main.name}: launch everywhere, with a fresh angle each day` });
  phases.push({ name: "Close", start: iso(closeStart), end: iso(addDays(closeStart, 5)), summary: "Last chance, then thank-you and a preview of next month" });
  return phases;
}

export function generatePlaybook(
  id: string,
  scan: ScanResult,
  answers: Answers,
  segment: SegmentCandidate,
  segmentProvenance: Provenance,
  today: Date,
  ai: AiCopy | null
): Playbook {
  const giftable = GIFTABLE_HINTS.test([scan.categories.join(" "), scan.description, scan.name].join(" ")) || scan.products.length === 0;
  const startMonth = today.getUTCMonth() + 2 > 12 ? 1 : today.getUTCMonth() + 2; // next month
  const startYear = today.getUTCMonth() + 2 > 12 ? today.getUTCFullYear() + 1 : today.getUTCFullYear();
  const windowStart = d(startYear, startMonth, 1);
  const windowEnd = addDays(d(startYear + 1, startMonth, 1), -1);

  // ---- Moments
  const cal = [...momentsForYear(startYear, giftable), ...momentsForYear(startYear + 1, giftable)].filter(
    (m) => m.end >= windowStart && m.start <= windowEnd
  );
  // Launch from user's priorities, if they mention a month.
  const pri = answers.priorities.trim();
  if (pri) {
    const mm = pri.toLowerCase().match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\b/);
    if (mm) {
      const idx = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"].indexOf(mm[1]) + 1;
      let y = startYear;
      if (d(y, idx, 1) < windowStart) y += 1;
      const s = d(y, idx, 8);
      cal.push({ key: "launch", name: `Launch: ${pri.length > 48 ? pri.slice(0, 45) + "…" : pri}`, start: s, end: addDays(s, 6), major: true, job: "Launch", kind: "launch" });
    }
  }
  cal.sort((a, b) => a.start.getTime() - b.start.getTime());
  const moments: Moment[] = cal.map((m) => {
    const due = addDays(m.start, m.major ? -45 : -30);
    const o = offerFor(m, answers);
    return {
      key: m.key,
      name: m.name,
      start: iso(m.start),
      end: iso(m.end),
      major: m.major,
      job: m.job,
      offer: o.offer,
      offerProvenance: o.prov,
      creativeDue: iso(due),
      late: due < today,
    };
  });

  // ---- Quarter groups (consecutive months with the same calendar quarter)
  const months: { y: number; m: number }[] = [];
  for (let i = 0; i < 12; i++) {
    const mm = ((startMonth - 1 + i) % 12) + 1;
    months.push({ y: startYear + Math.floor((startMonth - 1 + i) / 12), m: mm });
  }
  const groups: { q: number; months: { y: number; m: number }[] }[] = [];
  for (const mo of months) {
    const q = Math.ceil(mo.m / 3);
    const last = groups[groups.length - 1];
    if (last && last.q === q) last.months.push(mo);
    else groups.push({ q, months: [mo] });
  }
  // Fold a trailing single month into the previous group (e.g. October before the next Q4).
  if (groups.length > 4 && groups[groups.length - 1].months.length === 1) {
    const tail = groups.pop()!;
    groups[groups.length - 1].months.push(...tail.months);
  }
  const totalWeight = months.reduce((s, mo) => s + monthAdWeight(mo.m), 0);
  const quarters: QuarterPlan[] = groups.map((g, i) => {
    const first = g.months[0], lastM = g.months[g.months.length - 1];
    const gStart = d(first.y, first.m, 1), gEnd = addDays(d(lastM.y + (lastM.m === 12 ? 1 : 0), lastM.m === 12 ? 1 : lastM.m + 1, 1), -1);
    const ms = moments.filter((m) => parse(m.start) <= gEnd && parse(m.end) >= gStart);
    const share = Math.round((g.months.reduce((s, mo) => s + monthAdWeight(mo.m), 0) / totalWeight) * 100);
    const def = DEFAULT_THEMES[`q${g.q}`];
    return {
      label: `Q${g.q}`,
      months: `${monthShort(first.m)}–${monthShort(lastM.m)} ${lastM.y}`,
      theme: ai?.quarterThemes?.[i] || def.theme,
      job: def.job,
      moments: ms.map((m) => m.name),
      priorityProducts: i === 0 ? (ai?.priorityProducts?.slice(0, 3) || scan.newArrivals.slice(0, 2)) : [],
      adShare: share,
      current: i === 0,
    };
  });
  // Make shares sum to exactly 100.
  const diff = 100 - quarters.reduce((s, q) => s + q.adShare, 0);
  if (quarters.length) quarters[0].adShare += diff;

  // ---- Month plan (the first month of the window)
  const monthStart = windowStart;
  const monthEnd = addDays(d(startMonth === 12 ? startYear + 1 : startYear, startMonth === 12 ? 1 : startMonth + 1, 1), -1);
  const inMonth = cal.filter((m) => m.start <= monthEnd && m.end >= monthStart);
  const main = inMonth.find((m) => m.major) || inMonth[0] || null;
  const mainMoment = main ? moments.find((m) => m.key === main.key && m.start === iso(main.start)) || null : null;
  const phases = phasesFor(main, monthStart, monthEnd);
  const isMajor = !!main?.major;
  const cap = discountCap(answers);

  const tools = scan.tools;
  // If we couldn't read the homepage we don't know which tools/socials they use; don't claim gaps.
  const known = scan.homepageRead !== false;
  const hasSms = !!tools.sms;
  const emails = isMajor ? 12 : 9;
  const sms = hasSms ? Math.round(emails / 3) : 0;
  const discountMonth = !!main && (main.kind === "sale" || main.kind === "clear") && cap > 0;

  const platformRates: Record<string, { perWeek: number; mix: string }> = {
    Instagram: { perWeek: 4, mix: "product 40%, how-to 30%, behind the scenes 20%, customer photos 10%" },
    TikTok: { perWeek: 3, mix: "how-to 50%, trends 30%, behind the scenes 15%, product 5%" },
    Pinterest: { perWeek: 2, mix: "gift guides and product pins" },
    Facebook: { perWeek: 3, mix: "community 30%, product 30%, how-to 40%" },
    YouTube: { perWeek: 1, mix: "how-to and product deep dives" },
  };
  const socialPlatforms = scan.social.filter((s) => platformRates[s]);
  const perPlatform = socialPlatforms.map((p) => ({ platform: p, ...platformRates[p] }));
  const posts = perPlatform.reduce((s, p) => s + p.perWeek * 4, 0);

  const budget = adBudgetMidpoint(answers.adBudget);
  const reserve = Math.round(budget * 0.15);
  const creatives = budget === 0 ? 0 : budget >= 20000 ? 12 : 8;
  const adPhases = [
    { name: "Launch", share: 35, focus: "broad reach, lookalikes, video" },
    { name: "Growth", share: 45, focus: "sales campaigns, retargeting, product ads" },
    { name: "Close", share: 20, focus: "urgency, cart reminders, last chance" },
  ].map((p) => ({ ...p, amount: Math.round((budget * p.share) / 100) }));

  const segName = segment.name;
  const segValues = segment.values.map((v) => ({
    ...v,
    angle: ai?.segmentAngles?.[v.name] || (v.heroProduct ? `Lead with ${v.heroProduct}` : `Content made for ${v.name.toLowerCase()}`),
  }));
  const isLifecycle = segName === "Customer stage";
  const question = isLifecycle ? "" : `Which ${segName.toLowerCase()} is yours?`;

  const momentName = main?.name || `${monthName(startMonth)} focus`;
  const offer = answers.monthOffer && answers.monthOffer.trim() ? answers.monthOffer.trim() : null;

  const site = [
    `Homepage banner for ${momentName}${isLifecycle ? "" : `, hero product per ${segName.toLowerCase()}`}`,
    discountMonth ? "Announcement bar with a sale countdown" : "Announcement bar with this month's theme",
    `Landing or collection page for ${momentName}`,
    isLifecycle ? "Signup popup with a reason to join" : `Signup popup that asks “${question}”`,
  ];

  const pieces = emails + sms + posts + creatives + site.length;

  // Creative timeline anchored to the main moment.
  const anchor = main ? (main.start < monthStart ? monthStart : main.start) : addDays(monthStart, 14);
  const creative = [
    { item: "Product and lifestyle photos for the main campaign", due: addDays(anchor, isMajor ? -45 : -30) },
    { item: "Short videos (2–3) for social and ads", due: addDays(anchor, isMajor ? -35 : -21) },
    { item: `Landing page and banner graphics${isLifecycle ? "" : ` (one per ${segName.toLowerCase()})`}`, due: addDays(anchor, -21) },
    { item: "Email and ad creative final sign-off", due: addDays(anchor, -10) },
  ].map((c) => ({ item: c.item, due: iso(c.due), late: c.due < today }));
  const creativeBehind = creative.some((c) => c.late);

  const stillNeeded: string[] = [];
  stillNeeded.push(`${monthName(startMonth)} revenue target`);
  if (!offer) stillNeeded.push(`${monthName(startMonth)} offer (we left it open)`);
  stillNeeded.push("Products with limited stock");
  stillNeeded.push("Who approves, and an owner per channel");
  stillNeeded.push("Last year's 5 best sales periods");

  const targets: Playbook["year"]["targets"] = [
    { label: "Revenue growth goal", value: growthLabel(answers.growthGoal), provenance: "YOU" },
    { label: "Repeat purchase rate", value: "[Set]", provenance: "ADD" },
  ];
  const gaps: string[] = [];
  if (known && !tools.sms) gaps.push("SMS");
  if (known && !tools.email) gaps.push("email automation");
  if (budget === 0) gaps.push("paid ads");
  if (gaps.length) targets.push({ label: "Biggest channel gap", value: `Add ${gaps[0]}`, provenance: "AI" });

  const ctaUrl = scan.platform === "bigcommerce" ? CAVACO_LINKS.bigcommerce : scan.platform === "shopify" ? CAVACO_LINKS.shopify : CAVACO_LINKS.demo;

  return {
    id,
    createdAt: new Date().toISOString(),
    version: 1,
    aiUsed: !!ai,
    store: {
      name: scan.name,
      url: scan.origin,
      host: scan.host,
      platform: scan.platform,
      productCount: scan.productCount,
      productCountCapped: scan.productCountCapped,
      priceRange: scan.priceRange,
      currency: scan.currency,
      categories: scan.categories,
      tools: scan.tools,
      social: scan.social,
      homepageRead: known,
      voice: ai?.voice || null,
    },
    answers,
    segment: {
      name: segName,
      source: segment.source,
      coverage: segment.coverage,
      provenance: segmentProvenance,
      values: segValues,
      question,
    },
    year: {
      range: `${monthShort(startMonth)} ${startYear} – ${monthShort(((startMonth + 10) % 12) + 1)} ${startYear + 1}`,
      quarters,
      moments,
      splits: { effort: [60, 30, 10], contingency: 15, openCalendar: 20 },
      targets,
    },
    month: {
      label: `${monthName(startMonth)} ${startYear}`,
      title: main ? main.name : `${monthName(startMonth)}: ${quarters[0]?.theme ?? "focus"}`,
      mainMoment: main?.name ?? null,
      goal: null,
      offer,
      offerProvenance: offer ? "YOU" : "ADD",
      heroProducts:
        ai?.priorityProducts?.slice(0, 3) ||
        (segValues.map((v) => v.heroProduct).filter(Boolean).slice(0, 3) as string[]),
      messages: ai?.messages?.slice(0, 3) || [],
      campaigns: {
        main: {
          name: main ? `${main.name}` : `${monthName(startMonth)} campaign`,
          detail: discountMonth
            ? offer
              ? `${offer}. VIP early access first, then everyone.`
              : `Your offer (up to ${cap}%) — we left the exact terms for you. VIP early access first, then everyone.`
            : mainMoment?.offer && mainMoment.offer !== "None"
              ? `${mainMoment.offer}. Lead with the products that fit each ${segName.toLowerCase()}.`
              : "Lead with best sellers and stories, no discount needed.",
        },
        supporting: ai?.supporting || {
          name: isLifecycle ? "Customer stories series" : `${segName} guide series`,
          detail: isLifecycle ? "Reviews and customer photos as proof" : `One piece per ${segName.toLowerCase()}: “what to get if you're into …”`,
        },
        alwaysOn: {
          name: "Keep the basics running",
          detail: `Welcome series${discountMonth ? " (pause the welcome discount during the sale)" : ""}, cart reminders, review requests 7–10 days after delivery`,
        },
      },
      phases,
      channels: {
        emailSms: {
          emails,
          sms,
          smsGap: known && !hasSms,
          mix: isMajor ? { promotional: 55, helpful: 30, relational: 15 } : { promotional: 45, helpful: 35, relational: 20 },
          groups: [
            { name: "VIPs", who: "Top 20% by lifetime spend", gets: discountMonth ? "Early access before everyone else" : "First look at new products" },
            { name: "Regulars", who: "Bought in the last 90 days", gets: discountMonth ? "Launch + last chance; no discount reminders after they buy" : "Product spotlights matched to their past buys" },
            { name: "Browsers", who: "Engaged, no recent purchase", gets: "Guides, reviews and the main campaign" },
            { name: "Win-backs", who: "Quiet for 90+ days", gets: discountMonth ? "One win-back message at peak" : "One “what's new” message" },
          ],
          flows: [
            discountMonth ? "Pause the welcome discount during peak" : "Keep the welcome series as is",
            "Shorten cart reminder timing during peak",
            "Review request 7–10 days after delivery",
          ],
        },
        social: {
          posts,
          perPlatform,
          rhythm: "Mon how-to · Wed product · Fri community · Sun what's next",
          gap: perPlatform.length === 0,
        },
        ads: {
          budget,
          reserve,
          creatives,
          phases: adPhases,
          audiences: budget ? [...(isLifecycle ? [] : segValues.slice(0, 4).map((v) => `${v.name} interest`)), "Site visitors (retargeting)", "Lookalike of best customers"] : [],
          angles: ai?.adAngles?.slice(0, 3) || (main ? [`${main.name}`, "Best sellers with reviews", isLifecycle ? "New arrivals" : `Made for your ${segName.toLowerCase()}`] : ["Best sellers with reviews", "New arrivals"]),
          gap: budget === 0,
        },
        site: { changes: site },
      },
      creative,
      creativeBehind,
      checklist: [
        {
          title: `30 days before · by ${fmt(iso(addDays(anchor, -30)))}`,
          items: ["Offer and messages locked", "Creative briefs sent", "Email and SMS flows tested", "Ad campaigns set up", "Stock checked for hero products", "An owner for every channel"],
        },
        {
          title: main ? `Peak · ${fmtRange(iso(main.start < monthStart ? monthStart : main.start), iso(main.end))}` : "Peak week",
          items: ["Everything goes live on schedule", "Daily results check", "Customer service briefed on the offer", "Shift budget to what's working"],
        },
        {
          title: "7 days after",
          items: ["Results vs. goal, by channel", "Customer feedback gathered", "Lessons written down", "Next month's planning started"],
        },
      ],
      metrics: [
        { phase: "Launch", items: "Reach, email opens and clicks, site visits, list signups" },
        { phase: "Growth", items: "Conversion rate, cost per new customer, ad return, revenue per email" },
        { phase: "Close", items: "Revenue vs. goal, repeat buyers, stock sold through" },
      ],
      stillNeeded,
    },
    cta: { piecesToBuild: pieces, url: ctaUrl },
  };
}

export { money };

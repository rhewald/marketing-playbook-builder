export type Provenance = "AUTO" | "AI" | "YOU" | "ADD";

export interface Product {
  id: string;
  title: string;
  handle: string;
  type: string;
  vendor: string;
  tags: string[];
  options: { name: string; values: string[] }[];
  price: number;
  createdAt: string;
  url: string;
}

export interface ScanResult {
  url: string;
  origin: string;
  host: string;
  name: string;
  description: string;
  platform: "shopify" | "bigcommerce" | "other" | "unknown";
  reachable: boolean;
  productCount: number;
  productCountCapped: boolean;
  priceRange: [number, number] | null;
  currency: string;
  categories: string[];
  newArrivals: string[];
  tools: {
    email: string | null;
    sms: string | null;
    ads: string[];
    reviews: string | null;
    chat: string | null;
  };
  social: string[];
  products: Product[];
  collections: string[];
  notes: string[];
  ms: number;
  diag?: Record<string, string>;
}

export interface SegmentValue {
  name: string;
  productCount: number;
  heroProduct: string | null;
  heroUrl?: string | null;
  angle?: string;
}

export interface SegmentCandidate {
  name: string;
  source: string;
  coverage: number;
  score: number;
  values: SegmentValue[];
}

export type RevenueBand = "lt500k" | "500k-1m" | "1-5m" | "5-30m" | "30m+";
export type GrowthGoal = "hold" | "10-25" | "25-50" | "50+";
export type MaxDiscount = "none" | "15" | "25" | "30+";
export type AdBudget = "none" | "lt5k" | "5-20k" | "20-100k" | "100k+";

export interface Answers {
  revenueBand: RevenueBand;
  growthGoal: GrowthGoal;
  priorities: string;
  maxDiscount: MaxDiscount;
  adBudget: AdBudget;
  monthOffer: string | null; // null = not decided
}

export interface Moment {
  key: string;
  name: string;
  start: string; // ISO date
  end: string;
  major: boolean;
  job: string;
  offer: string;
  offerProvenance: Provenance;
  creativeDue: string | null;
  late: boolean;
}

export interface QuarterPlan {
  label: string;
  months: string;
  theme: string;
  job: string;
  moments: string[];
  priorityProducts: string[];
  adShare: number; // percent
  current: boolean;
}

export interface Phase {
  name: string;
  start: string;
  end: string;
  summary: string;
}

export interface Playbook {
  id: string;
  createdAt: string;
  version: number;
  aiUsed: boolean;
  store: {
    name: string;
    url: string;
    host: string;
    platform: ScanResult["platform"];
    productCount: number;
    productCountCapped: boolean;
    priceRange: [number, number] | null;
    currency: string;
    categories: string[];
    tools: ScanResult["tools"];
    social: string[];
    voice: string | null;
  };
  answers: Answers;
  segment: {
    name: string;
    source: string;
    coverage: number;
    provenance: Provenance;
    values: SegmentValue[];
    question: string;
  };
  year: {
    range: string;
    quarters: QuarterPlan[];
    moments: Moment[];
    splits: { effort: [number, number, number]; contingency: number; openCalendar: number };
    targets: { label: string; value: string; provenance: Provenance }[];
  };
  month: {
    label: string;
    title: string;
    mainMoment: string | null;
    goal: string | null;
    offer: string | null;
    offerProvenance: Provenance;
    heroProducts: string[];
    messages: string[];
    campaigns: { main: { name: string; detail: string }; supporting: { name: string; detail: string }; alwaysOn: { name: string; detail: string } };
    phases: Phase[];
    channels: {
      emailSms: {
        emails: number;
        sms: number;
        smsGap: boolean;
        mix: { promotional: number; helpful: number; relational: number };
        groups: { name: string; who: string; gets: string }[];
        flows: string[];
      };
      social: { posts: number; perPlatform: { platform: string; perWeek: number; mix: string }[]; rhythm: string; gap: boolean };
      ads: {
        budget: number;
        reserve: number;
        creatives: number;
        phases: { name: string; share: number; amount: number; focus: string }[];
        audiences: string[];
        angles: string[];
        gap: boolean;
      };
      site: { changes: string[] };
    };
    creative: { item: string; due: string; late: boolean }[];
    creativeBehind: boolean;
    checklist: { title: string; items: string[] }[];
    metrics: { phase: string; items: string }[];
    stillNeeded: string[];
  };
  cta: { piecesToBuild: number; url: string };
}

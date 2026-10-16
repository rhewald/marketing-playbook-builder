import type { Product, ScanResult, SegmentCandidate, SegmentValue } from "./types";

// Dimensions that change what a customer wants. Keywords are matched as word
// prefixes against product title, type, tags and option values.
const DICTIONARY: Record<string, Record<string, string[]>> = {
  "Fight discipline": {
    Boxing: ["boxing", "boxer"],
    MMA: ["mma", "mixed martial"],
    "Muay Thai": ["muay thai", "thai boxing"],
    "BJJ & grappling": ["bjj", "jiu jitsu", "jiu-jitsu", "jiujitsu", "grappling", "no-gi", "nogi", "rash guard", "rashguard"],
    Kickboxing: ["kickbox"],
    Wrestling: ["wrestl"],
    Karate: ["karate"],
    Taekwondo: ["taekwondo", "tkd"],
    Judo: ["judo"],
    "Krav Maga": ["krav maga", "krav"],
  },
  "Scent family": {
    "Woody & smoky": ["wood", "cedar", "sandalwood", "smok", "oud", "amber", "pine", "leather", "tobacco", "fir", "campfire"],
    "Fresh & clean": ["fresh", "linen", "clean", "citrus", "lemon", "sea salt", "ocean", "eucalyptus", "mint", "rain", "bergamot", "grapefruit"],
    Floral: ["floral", "rose", "jasmine", "lavender", "peony", "gardenia", "lilac", "magnolia", "orange blossom"],
    "Sweet & gourmand": ["vanilla", "cookie", "pumpkin", "caramel", "coffee", "chocolate", "sugar", "bourbon", "cinnamon", "honey"],
  },
  "Skin type": {
    "Dry skin": ["dry skin", "dehydrated", "hydrating"],
    "Oily & acne-prone": ["oily", "acne", "blemish", "pore"],
    Sensitive: ["sensitive", "calming", "soothing"],
    "Aging & firming": ["anti-aging", "anti aging", "retinol", "firming", "wrinkle"],
  },
  "Pet type": {
    Dog: ["dog", "puppy", "canine"],
    Cat: ["cat", "kitten", "feline"],
  },
  Activity: {
    Running: ["running", "runner", "run "],
    "Gym & training": ["training", "gym", "workout", "lifting"],
    Yoga: ["yoga"],
    "Hiking & outdoor": ["hiking", "trail", "outdoor", "camping"],
    Cycling: ["cycling", "bike", "bicycle"],
    Golf: ["golf"],
    Swim: ["swim"],
  },
  "Coffee style": {
    "Dark roast": ["dark roast"],
    "Medium roast": ["medium roast"],
    "Light roast": ["light roast"],
    Decaf: ["decaf"],
    Espresso: ["espresso"],
    "Pods & instant": ["pod", "instant", "single serve"],
  },
  Room: {
    Bedroom: ["bed", "sheet", "pillow", "duvet", "comforter", "mattress"],
    Bath: ["bath", "towel", "robe"],
    "Kitchen & dining": ["kitchen", "dining", "cookware", "table linen"],
    "Living room": ["living room", "sofa", "throw", "rug"],
    Outdoor: ["outdoor", "patio"],
  },
  "Who it's for": {
    Women: ["women", "womens", "ladies"],
    Men: ["men", "mens"],
    Kids: ["kid", "kids", "youth", "junior", "toddler", "baby"],
  },
};

// Option names that rarely say what a customer wants.
const GENERIC_OPTIONS = /^(size|sizes|color|colour|colors|title|default title|quantity|qty|pack|pack size|length|width|height|weight|fit|denomination|amount|value|style #|sku|variant|option|count|oz|ounces)$/i;
const GENERIC_TAG_KEYS = /^(size|color|colour|sale|new|badge|filter|tab|hidden|sku|yotpo|reviews?|bundle|gift ?card|vendor|price|collection|meta|tag|label|feed|sort)$/i;

function escapeRe(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function textOf(p: Product): string {
  return [p.title, p.type, p.tags.join(" "), p.options.flatMap((o) => o.values).join(" ")].join(" ").toLowerCase();
}

function heroFor(products: Product[]): Product | null {
  if (!products.length) return null;
  const priced = products.filter((p) => p.price > 0).sort((a, b) => a.price - b.price);
  if (!priced.length) return products[0];
  // Choose around the 70th percentile: a real flagship, not a bundle or accessory.
  return priced[Math.min(priced.length - 1, Math.floor(priced.length * 0.7))];
}

function finalize(name: string, source: string, groups: Map<string, Product[]>, total: number, weight: number, heroPools?: Map<string, Product[]>): SegmentCandidate | null {
  const minCount = Math.max(2, Math.ceil(total * 0.03));
  const kept = [...groups.entries()].filter(([, ps]) => ps.length >= minCount).sort((a, b) => b[1].length - a[1].length);
  if (kept.length < 2) return null;
  const top = kept.slice(0, 6);
  const covered = new Set<string>();
  for (const [, ps] of top) for (const p of ps) covered.add(p.id);
  const coverage = total ? covered.size / total : 0;
  const maxShare = top[0][1].length / Math.max(1, covered.size);
  const balance = maxShare > 0.85 ? 0.3 : 1 - Math.max(0, maxShare - 0.5);
  const n = top.length;
  const countFactor = n >= 3 && n <= 6 ? 1 : n === 2 ? 0.75 : 0.85;
  const score = coverage * balance * countFactor * weight;
  const values: SegmentValue[] = top.map(([v, ps]) => {
    const pool = heroPools?.get(v);
    const h = heroFor(pool && pool.length ? pool : ps);
    return { name: v, productCount: ps.length, heroProduct: h?.title ?? null, heroUrl: h?.url ?? null };
  });
  return { name, source, coverage, score, values };
}

function titleCase(s: string) {
  return s.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
}

export function detectSegments(scan: ScanResult): SegmentCandidate[] {
  const products = scan.products;
  const total = products.length;
  const out: SegmentCandidate[] = [];
  if (total >= 4) {
    // 1. Dictionary dimensions
    const texts = products.map((p) => ({ p, t: " " + textOf(p) + " " }));
    for (const [dim, values] of Object.entries(DICTIONARY)) {
      const groups = new Map<string, Product[]>();
      const res = Object.entries(values).map(([val, kws]) => [val, new RegExp(`(^|[^a-z])(${kws.map(escapeRe).join("|")})`, "i")] as const);
      for (const [val, re] of res) {
        const ps = texts.filter((x) => re.test(x.t)).map((x) => x.p);
        if (ps.length) groups.set(val, ps);
      }
      // Hero products: prefer ones whose title names this value and no other
      // (a "Muay Thai & Boxing" pad shouldn't be the MMA hero).
      const heroPools = new Map<string, Product[]>();
      for (const [val, re] of res) {
        const inTitle = (groups.get(val) || []).filter((p) => re.test(" " + p.title.toLowerCase() + " "));
        const only = inTitle.filter((p) => res.every(([v2, re2]) => v2 === val || !re2.test(" " + p.title.toLowerCase() + " ")));
        heroPools.set(val, only.length ? only : inTitle);
      }
      const c = finalize(dim, "product names and tags", groups, total, 1.0, heroPools);
      if (c) out.push(c);
    }

    // 2. Product options (e.g. "Scent", "Roast", "Discipline")
    const optGroups = new Map<string, Map<string, Product[]>>();
    for (const p of products) {
      for (const o of p.options) {
        const key = o.name.trim();
        if (!key || GENERIC_OPTIONS.test(key)) continue;
        if (!optGroups.has(key)) optGroups.set(key, new Map());
        const g = optGroups.get(key)!;
        for (const v of o.values) {
          const vv = v.trim();
          if (!vv) continue;
          if (!g.has(vv)) g.set(vv, []);
          g.get(vv)!.push(p);
        }
      }
    }
    for (const [key, g] of optGroups) {
      const c = finalize(titleCase(key), `product option “${key}”`, g, total, 0.9);
      if (c) out.push(c);
    }

    // 3. Structured tags like "scent:woody" or "Discipline_Boxing"
    const tagGroups = new Map<string, Map<string, Product[]>>();
    for (const p of products) {
      for (const tag of p.tags) {
        const m = tag.match(/^\s*([A-Za-z][A-Za-z \-]{1,24})\s*[:_]\s*(.{1,40})$/);
        if (!m) continue;
        const key = m[1].trim();
        if (GENERIC_TAG_KEYS.test(key)) continue;
        const k = titleCase(key);
        if (!tagGroups.has(k)) tagGroups.set(k, new Map());
        const g = tagGroups.get(k)!;
        const v = titleCase(m[2].trim());
        if (!g.has(v)) g.set(v, []);
        g.get(v)!.push(p);
      }
    }
    for (const [key, g] of tagGroups) {
      const c = finalize(key, `product tags “${key}: …”`, g, total, 0.85);
      if (c) out.push(c);
    }

    // 4. Product type (useful fallback, less personal)
    const typeGroups = new Map<string, Product[]>();
    for (const p of products) {
      if (!p.type) continue;
      if (!typeGroups.has(p.type)) typeGroups.set(p.type, []);
      typeGroups.get(p.type)!.push(p);
    }
    const tc = finalize("Product type", "product types", typeGroups, total, 0.55);
    if (tc) out.push(tc);
  }

  // De-duplicate by name, keep best
  const best = new Map<string, SegmentCandidate>();
  for (const c of out) {
    const k = c.name.toLowerCase();
    if (!best.has(k) || best.get(k)!.score < c.score) best.set(k, c);
  }
  // Drop candidates whose values mostly overlap a higher-ranked one (e.g. a
  // "Discipline" tag that mirrors the "Fight discipline" dictionary match).
  const norm = (v: string) => v.toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 4);
  const ranked: SegmentCandidate[] = [];
  for (const c of [...best.values()].sort((a, b) => b.score - a.score)) {
    const vals = new Set(c.values.map((v) => norm(v.name)));
    const dup = ranked.some((r) => {
      const shared = r.values.filter((v) => vals.has(norm(v.name))).length;
      return shared >= Math.min(vals.size, r.values.length) * 0.6;
    });
    if (!dup) ranked.push(c);
  }

  // Always offer a lifecycle-based fallback that needs no catalog structure.
  ranked.push({
    name: "Customer stage",
    source: "purchase history (works for every store)",
    coverage: 1,
    score: 0.01,
    values: [
      { name: "New subscribers", productCount: 0, heroProduct: null },
      { name: "First-time buyers", productCount: 0, heroProduct: null },
      { name: "Repeat buyers", productCount: 0, heroProduct: null },
      { name: "VIPs", productCount: 0, heroProduct: null },
    ],
  });
  return ranked.slice(0, 4);
}

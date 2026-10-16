import type { Product, ScanResult } from "./types";
import type { ClientScanData } from "./clientScan";

// A browser-like UA: Shopify's edge rejects many bot UAs coming from cloud IPs.
const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36 CavacoPlaybook/1.0";

export function normalizeUrl(input: string): URL | null {
  let s = (input || "").trim();
  if (!s) return null;
  if (!/^https?:\/\//i.test(s)) s = "https://" + s;
  try {
    const u = new URL(s);
    if (!u.hostname.includes(".")) return null;
    if (/^(localhost|127\.|10\.|192\.168\.|169\.254\.)/.test(u.hostname)) return null;
    return u;
  } catch {
    return null;
  }
}

// Per-request fetch diagnostics (path → status or error), returned with the scan for debugging.
export type FetchDiag = Record<string, string>;
let diag: FetchDiag = {};

async function fetchWithTimeout(url: string, ms: number, accept = "*/*"): Promise<Response | null> {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  const key = (() => {
    try {
      const u = new URL(url);
      return u.pathname + (u.search.includes("page=") ? u.search.replace(/.*(page=\d+).*/, "?$1") : "");
    } catch {
      return url;
    }
  })();
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      redirect: "follow",
      headers: {
        "user-agent": UA,
        accept,
        "accept-language": "en-US,en;q=0.9",
      },
    });
    diag[key] = String(res.status);
    return res;
  } catch (e) {
    diag[key] = "error: " + String(e).slice(0, 120);
    return null;
  } finally {
    clearTimeout(t);
  }
}

async function fetchText(url: string, ms: number): Promise<{ text: string; finalUrl: string } | null> {
  const res = await fetchWithTimeout(url, ms, "text/html,application/xhtml+xml");
  if (!res || !res.ok) return null;
  try {
    const text = await res.text();
    return { text: text.slice(0, 1_500_000), finalUrl: res.url || url };
  } catch {
    return null;
  }
}

async function fetchJson<T>(url: string, ms: number): Promise<T | null> {
  const res = await fetchWithTimeout(url, ms, "application/json");
  if (!res || !res.ok) return null;
  const ct = res.headers.get("content-type") || "";
  if (!ct.includes("json")) return null;
  try {
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

interface ShopifyProduct {
  id: number;
  title: string;
  handle: string;
  product_type?: string;
  vendor?: string;
  tags?: string[] | string;
  options?: { name: string; values: string[] }[];
  variants?: { price: string; available?: boolean }[];
  created_at?: string;
  published_at?: string;
}

const TOOL_SIGNATURES: { kind: keyof ScanResult["tools"]; name: string; re: RegExp }[] = [
  { kind: "email", name: "Klaviyo", re: /klaviyo/i },
  { kind: "email", name: "Omnisend", re: /omnisend/i },
  { kind: "email", name: "Mailchimp", re: /chimpstatic|mailchimp/i },
  { kind: "email", name: "Drip", re: /getdrip\.com|drip\.com\/js/i },
  { kind: "email", name: "Shopify Email", re: /shopify-email|shopifyemail/i },
  { kind: "sms", name: "Attentive", re: /attentive(mobile)?\.com|attn\.tv/i },
  { kind: "sms", name: "Postscript", re: /postscript\.io/i },
  { kind: "sms", name: "SMSBump / Yotpo SMS", re: /smsbump/i },
  { kind: "sms", name: "Recharge SMS", re: /rechargeapps.*sms/i },
  { kind: "reviews", name: "Judge.me", re: /judge\.me/i },
  { kind: "reviews", name: "Yotpo", re: /yotpo/i },
  { kind: "reviews", name: "Okendo", re: /okendo/i },
  { kind: "reviews", name: "Stamped", re: /stamped\.io/i },
  { kind: "reviews", name: "Loox", re: /loox\.io/i },
  { kind: "reviews", name: "Junip", re: /junip/i },
  { kind: "chat", name: "Gorgias", re: /gorgias/i },
  { kind: "chat", name: "Tidio", re: /tidio/i },
  { kind: "chat", name: "Zendesk", re: /zdassets|zendesk/i },
  { kind: "chat", name: "Intercom", re: /intercom/i },
];

const AD_SIGNATURES: { name: string; re: RegExp }[] = [
  { name: "Meta", re: /connect\.facebook\.net|fbq\(|facebook-pixel|"facebook_pixel/i },
  { name: "Google", re: /googletagmanager\.com|gtag\(|googleads|google_ads|AW-\d{6,}/i },
  { name: "TikTok", re: /analytics\.tiktok\.com|ttq\./i },
  { name: "Pinterest", re: /pintrk|s\.pinimg\.com\/ct/i },
  { name: "Snapchat", re: /sc-static\.net\/scevent|snaptr\(/i },
];

const SOCIAL: { name: string; re: RegExp }[] = [
  { name: "Instagram", re: /href=["'][^"']*instagram\.com\/[A-Za-z0-9_.]+/i },
  { name: "TikTok", re: /href=["'][^"']*tiktok\.com\/@/i },
  { name: "Facebook", re: /href=["'][^"']*facebook\.com\/(?!sharer|tr\b|dialog)[A-Za-z0-9_.\-]+/i },
  { name: "Pinterest", re: /href=["'][^"']*pinterest\.[a-z.]+\/(?!pin\/create)[A-Za-z0-9_]+/i },
  { name: "YouTube", re: /href=["'][^"']*youtube\.com\/(@|c\/|channel\/|user\/)/i },
];

function meta(html: string, prop: string): string {
  const re = new RegExp(
    `<meta[^>]+(?:property|name)=["']${prop}["'][^>]*content=["']([^"']*)["']|<meta[^>]+content=["']([^"']*)["'][^>]*(?:property|name)=["']${prop}["']`,
    "i"
  );
  const m = html.match(re);
  return decodeEntities((m?.[1] ?? m?.[2] ?? "").trim());
}

function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&#39;|&#x27;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");
}

function toProduct(p: ShopifyProduct, origin: string): Product {
  const prices = (p.variants || []).map((v) => parseFloat(v.price)).filter((n) => !isNaN(n) && n > 0);
  const tags = Array.isArray(p.tags)
    ? p.tags
    : typeof p.tags === "string"
      ? p.tags.split(",").map((t) => t.trim()).filter(Boolean)
      : [];
  return {
    id: String(p.id),
    title: decodeEntities(p.title || ""),
    handle: p.handle,
    // Some stores use breadcrumb types ("Discipline > Boxing > Gloves"); keep the last part.
    type: (p.product_type || "").split(">").pop()!.trim(),
    vendor: p.vendor || "",
    tags,
    options: (p.options || []).map((o) => ({ name: o.name, values: o.values || [] })),
    price: prices.length ? Math.min(...prices) : 0,
    createdAt: p.published_at || p.created_at || "",
    url: `${origin}/products/${p.handle}`,
  };
}

function pct(sorted: number[], q: number): number {
  if (!sorted.length) return 0;
  const i = Math.min(sorted.length - 1, Math.max(0, Math.round((sorted.length - 1) * q)));
  return sorted[i];
}

export async function scanStore(input: string, budgetMs = 9000, client: ClientScanData | null = null): Promise<ScanResult> {
  const t0 = Date.now();
  diag = {};
  const u = normalizeUrl(input);
  if (!u) throw new Error("invalid_url");
  let origin = `https://${u.hostname}`;
  if (client?.origin) {
    try {
      const co = new URL(client.origin);
      // Only trust the browser's origin if it is the same store (allow www/apex redirects).
      if (co.hostname.replace(/^www\./, "") === u.hostname.replace(/^www\./, "")) origin = co.origin;
    } catch {
      /* ignore */
    }
  }
  const notes: string[] = [];
  const hasClient = !!client && Array.isArray(client.products) && client.products.length > 0;

  const per = Math.min(7000, budgetMs);
  const [home, page1, cols] = await Promise.all([
    fetchText(origin + "/", per),
    hasClient ? Promise.resolve({ products: client!.products as ShopifyProduct[] }) : fetchJson<{ products: ShopifyProduct[] }>(`${origin}/products.json?limit=250&page=1`, per),
    hasClient
      ? Promise.resolve({ collections: (client!.collections || []).map((title) => ({ title: String(title) })) })
      : fetchJson<{ collections: { title: string; products_count?: number }[] }>(`${origin}/collections.json?limit=250`, per),
  ]);

  let raw: ShopifyProduct[] = (page1?.products ?? []).slice(0, 1000);
  let capped = hasClient && raw.length >= 1000;
  if (!hasClient && raw.length === 250 && Date.now() - t0 < budgetMs - 3000) {
    const more = await Promise.all(
      [2, 3, 4].map((n) =>
        fetchJson<{ products: ShopifyProduct[] }>(`${origin}/products.json?limit=250&page=${n}`, Math.max(2000, budgetMs - (Date.now() - t0) - 500))
      )
    );
    for (const m of more) if (m?.products?.length) raw = raw.concat(m.products);
    if (raw.length >= 1000) capped = true;
  } else if (!hasClient && raw.length === 250) {
    capped = true;
  }

  const html = home?.text ?? "";
  const lower = html.toLowerCase();
  let platform: ScanResult["platform"] = "unknown";
  if (page1) platform = "shopify";
  else if (/cdn\.shopify\.com|shopify\.theme|myshopify\.com/.test(lower)) platform = "shopify";
  else if (/bigcommerce|stencil-utils|cdn\d*\.bigcommerce\.com/.test(lower)) platform = "bigcommerce";
  else if (html) platform = "other";

  if (!home && !page1) notes.push("We couldn't reach this site. It may block automated visits or be password protected.");
  if (!home && page1) notes.push("We couldn't read your homepage, so marketing tools and social links may be missing.");
  if (platform === "shopify" && !page1) notes.push("This store hides its product feed, so we used the homepage only.");
  if (platform === "bigcommerce") notes.push("BigCommerce stores don't share a public product feed, so we read the homepage only.");
  if (/password|opening soon/i.test(meta(html, "og:title")) || /<form[^>]+action=["'][^"']*\/password/i.test(html))
    notes.push("This store looks password protected.");

  const products = raw.map((p) => toProduct(p, origin));
  const prices = products.map((p) => p.price).filter((n) => n > 0).sort((a, b) => a - b);
  const priceRange: [number, number] | null = prices.length ? [pct(prices, 0.05), pct(prices, 0.95)] : null;

  const tools: ScanResult["tools"] = { email: null, sms: null, ads: [], reviews: null, chat: null };
  for (const sig of TOOL_SIGNATURES) {
    if (sig.kind === "ads") continue;
    if ((tools as any)[sig.kind]) continue;
    if (sig.re.test(html)) (tools as any)[sig.kind] = sig.name;
  }
  for (const a of AD_SIGNATURES) if (a.re.test(html)) tools.ads.push(a.name);

  const social = SOCIAL.filter((s) => s.re.test(html)).map((s) => s.name);

  const typeCounts = new Map<string, number>();
  for (const p of products) if (p.type) typeCounts.set(p.type, (typeCounts.get(p.type) || 0) + 1);
  const categories = [...typeCounts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6).map(([k]) => k);

  const newArrivals = [...products]
    .filter((p) => p.createdAt)
    .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
    .slice(0, 5)
    .map((p) => p.title);

  const name =
    meta(html, "og:site_name") ||
    (client?.meta?.name ? decodeEntities(client.meta.name) : "") ||
    decodeEntities((html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1] || "").split(/[|–—-]/)[0].trim()) ||
    u.hostname.replace(/^www\./, "");

  const currency =
    html.match(/Shopify\.currency\s*=\s*\{[^}]*"active"\s*:\s*"([A-Z]{3})"/)?.[1] ||
    html.match(/"currency(?:Code)?"\s*:\s*"([A-Z]{3})"/)?.[1] ||
    meta(html, "og:price:currency") ||
    (client?.meta?.currency && /^[A-Z]{3}$/.test(client.meta.currency) ? client.meta.currency : "") ||
    "USD";

  return {
    url: input,
    origin,
    host: u.hostname.replace(/^www\./, ""),
    name,
    description: meta(html, "description") || meta(html, "og:description") || decodeEntities(client?.meta?.description || "").slice(0, 400),
    platform,
    reachable: !!(home || page1),
    homepageRead: !!home,
    productCount: products.length,
    productCountCapped: capped,
    priceRange,
    currency,
    categories,
    newArrivals,
    tools,
    social,
    products,
    collections: (cols?.collections || []).map((c) => decodeEntities(c.title)).slice(0, 200),
    notes,
    ms: Date.now() - t0,
    diag: { ...diag },
  };
}

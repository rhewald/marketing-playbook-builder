// Reads a product catalog from non-Shopify stores.
//
// Order of attempts:
//  1. WooCommerce Store API (public, no key): /wp-json/wc/store/v1/products
//  2. Any platform: sitemap(s) → product URLs → titles from URL slugs,
//     enriched with schema.org Product JSON-LD from a sample of product pages.
// Works for WooCommerce, BigCommerce, Squarespace, Wix, Magento/Adobe Commerce,
// Salesforce Commerce Cloud, Ecwid (when it publishes product URLs) and most custom stores.

export interface RawProduct {
  id: number | string;
  title: string;
  handle: string;
  url?: string;
  product_type?: string;
  vendor?: string;
  tags?: string[];
  options?: { name: string; values: string[] }[];
  variants?: { price: string }[];
  created_at?: string;
}

type Fetcher = (url: string, ms: number, accept?: string) => Promise<Response | null>;

const MAX_PRODUCTS = 600;
const SAMPLE_PAGES = 12;

function decode(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&#0?39;|&#x27;|&apos;|&#8217;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8211;/g, "–")
    .replace(/<[^>]+>/g, "")
    .trim();
}

function titleFromSlug(url: string): string {
  try {
    const u = new URL(url);
    let seg = u.pathname.split("/").filter(Boolean).pop() || "";
    seg = decodeURIComponent(seg).replace(/\.(html?|php|aspx)$/i, "");
    seg = seg.replace(/[-_]+/g, " ").replace(/\b\d{4,}\b/g, "").replace(/\s+/g, " ").trim();
    return seg.replace(/\b\w/g, (c) => c.toUpperCase());
  } catch {
    return "";
  }
}

// ---------- WooCommerce ----------

interface WooProduct {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  prices?: { price?: string; currency_minor_unit?: number };
  categories?: { name: string }[];
  tags?: { name: string }[];
  attributes?: { name: string; terms?: { name: string }[] }[];
}

async function readWoo(origin: string, get: Fetcher, deadline: number): Promise<RawProduct[]> {
  const out: RawProduct[] = [];
  for (let page = 1; page <= 3 && Date.now() < deadline - 1500; page++) {
    const res = await get(`${origin}/wp-json/wc/store/v1/products?per_page=100&page=${page}`, Math.min(5000, deadline - Date.now()), "application/json");
    if (!res || !res.ok || !(res.headers.get("content-type") || "").includes("json")) break;
    let list: WooProduct[] = [];
    try {
      list = (await res.json()) as WooProduct[];
    } catch {
      break;
    }
    if (!Array.isArray(list) || !list.length) break;
    for (const p of list) {
      const minor = p.prices?.currency_minor_unit ?? 2;
      const raw = p.prices?.price ? Number(p.prices.price) / Math.pow(10, minor) : 0;
      const cats = (p.categories || []).map((c) => decode(c.name));
      out.push({
        id: p.id,
        title: decode(p.name),
        handle: p.slug,
        url: p.permalink,
        product_type: cats[0] || "",
        tags: [...cats.slice(1), ...(p.tags || []).map((t) => decode(t.name))],
        options: (p.attributes || []).map((a) => ({ name: decode(a.name), values: (a.terms || []).map((t) => decode(t.name)) })),
        variants: raw ? [{ price: String(raw) }] : [],
      });
    }
    if (list.length < 100) break;
  }
  return out;
}

// ---------- Sitemaps ----------

function locs(xml: string): string[] {
  const out: string[] = [];
  const re = /<loc>\s*(?:<!\[CDATA\[)?\s*([^<\]\s]+)\s*(?:\]\]>)?\s*<\/loc>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(xml))) out.push(decode(m[1]));
  return out;
}

const PRODUCT_SITEMAP = /product|item|store|shop|catalog/i;
const PRODUCT_URL = /\/(products?|p|item|items|shop|store)\/[^/?#]+|\/[^/?#]+-p-?\d+|\/p\/\d+|\.html$/i;
const NOT_PRODUCT = /\/(blog|blogs|news|pages?|collections?|category|categories|tag|tags|cart|account|search|policies|about|contact|faq|help)(\/|$)/i;

async function readSitemaps(origin: string, homeHtml: string, get: Fetcher, deadline: number): Promise<string[]> {
  const candidates = new Set<string>();
  const robots = await get(`${origin}/robots.txt`, 2500, "text/plain");
  if (robots && robots.ok) {
    const txt = (await robots.text()).slice(0, 50_000);
    for (const m of txt.matchAll(/^\s*sitemap:\s*(\S+)/gim)) candidates.add(m[1]);
  }
  if (/bigcommerce|stencil/i.test(homeHtml)) candidates.add(`${origin}/xmlsitemap.php`);
  candidates.add(`${origin}/sitemap.xml`);
  candidates.add(`${origin}/sitemap_index.xml`);

  const productUrls: string[] = [];
  const otherUrls: string[] = [];
  const seen = new Set<string>();
  const queue = [...candidates].slice(0, 4);
  let fetched = 0;
  while (queue.length && fetched < 8 && Date.now() < deadline - 2000 && productUrls.length < MAX_PRODUCTS) {
    const url = queue.shift()!;
    if (seen.has(url)) continue;
    seen.add(url);
    fetched++;
    const res = await get(url, Math.min(4000, deadline - Date.now()), "application/xml,text/xml");
    if (!res || !res.ok) continue;
    const xml = (await res.text()).slice(0, 3_000_000);
    const list = locs(xml);
    if (/<sitemapindex/i.test(xml)) {
      // Prefer child sitemaps that look like product sitemaps.
      const kids = list.filter((u) => PRODUCT_SITEMAP.test(u));
      queue.unshift(...(kids.length ? kids : list.slice(0, 3)));
      continue;
    }
    const isProductMap = PRODUCT_SITEMAP.test(url) && !/categor|collection|page|post|blog/i.test(url);
    for (const u of list) {
      if (!u.startsWith("http")) continue;
      if (isProductMap || (PRODUCT_URL.test(u) && !NOT_PRODUCT.test(u))) productUrls.push(u);
      else otherUrls.push(u);
    }
  }
  const uniq = [...new Set(productUrls)];
  return uniq.slice(0, MAX_PRODUCTS);
}

// ---------- JSON-LD ----------

interface LdProduct {
  name?: string;
  category?: string;
  brand?: { name?: string } | string;
  offers?: { price?: string | number; lowPrice?: string | number; priceCurrency?: string } | { price?: string | number }[];
}

function findProducts(node: unknown, out: LdProduct[]) {
  if (!node || typeof node !== "object") return;
  if (Array.isArray(node)) {
    for (const n of node) findProducts(n, out);
    return;
  }
  const o = node as Record<string, unknown>;
  const t = o["@type"];
  if (t === "Product" || (Array.isArray(t) && t.includes("Product")) || t === "ProductGroup") out.push(o as LdProduct);
  if (o["@graph"]) findProducts(o["@graph"], out);
}

function jsonLdProduct(html: string): { name: string; price: number; category: string; brand: string; currency: string } | null {
  const blocks = html.match(/<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi) || [];
  for (const b of blocks) {
    const body = b.replace(/^<script[^>]*>/i, "").replace(/<\/script>$/i, "");
    try {
      const found: LdProduct[] = [];
      findProducts(JSON.parse(body), found);
      const p = found[0];
      if (!p?.name) continue;
      const offers = Array.isArray(p.offers) ? p.offers[0] : p.offers;
      const price = Number((offers as { price?: unknown; lowPrice?: unknown })?.price ?? (offers as { lowPrice?: unknown })?.lowPrice ?? 0) || 0;
      const brand = typeof p.brand === "string" ? p.brand : p.brand?.name || "";
      const currency = (offers as { priceCurrency?: string })?.priceCurrency || "";
      return { name: decode(String(p.name)), price, category: decode(String(p.category || "")).split(/[>/]/).pop()!.trim(), brand: decode(brand), currency };
    } catch {
      /* malformed block */
    }
  }
  const og = html.match(/<meta[^>]+property=["']og:title["'][^>]*content=["']([^"']+)["']/i)?.[1];
  const ogType = html.match(/<meta[^>]+property=["']og:type["'][^>]*content=["']([^"']+)["']/i)?.[1];
  if (og && /product/i.test(ogType || "")) {
    const price = Number(html.match(/<meta[^>]+property=["'](?:product|og):price:amount["'][^>]*content=["']([\d.]+)["']/i)?.[1] || 0);
    return { name: decode(og), price, category: "", brand: "", currency: "" };
  }
  return null;
}

async function enrich(urls: string[], products: RawProduct[], get: Fetcher, deadline: number): Promise<{ currency: string }> {
  // Spread the sample across the catalog rather than taking the first N.
  const step = Math.max(1, Math.floor(urls.length / SAMPLE_PAGES));
  const sample = urls.filter((_, i) => i % step === 0).slice(0, SAMPLE_PAGES);
  let currency = "";
  for (let i = 0; i < sample.length && Date.now() < deadline - 1500; i += 5) {
    const batch = sample.slice(i, i + 5);
    const pages = await Promise.all(batch.map((u) => get(u, Math.min(3500, deadline - Date.now()), "text/html")));
    await Promise.all(
      pages.map(async (res, j) => {
        if (!res || !res.ok) return;
        const html = (await res.text()).slice(0, 1_500_000);
        const ld = jsonLdProduct(html);
        if (!ld) return;
        const p = products.find((x) => x.url === batch[j]);
        if (!p) return;
        p.title = ld.name || p.title;
        if (ld.price) p.variants = [{ price: String(ld.price) }];
        if (ld.category) p.product_type = ld.category;
        if (ld.brand) p.vendor = ld.brand;
        if (ld.currency && !currency) currency = ld.currency;
      })
    );
  }
  return { currency };
}

export async function readCatalog(
  origin: string,
  platform: string,
  homeHtml: string,
  get: Fetcher,
  deadline: number
): Promise<{ products: RawProduct[]; source: string; currency: string }> {
  if (platform === "woocommerce" || platform === "other" || platform === "unknown") {
    const woo = await readWoo(origin, get, deadline);
    if (woo.length) return { products: woo.slice(0, MAX_PRODUCTS), source: "woocommerce", currency: "" };
  }
  const urls = await readSitemaps(origin, homeHtml, get, deadline);
  if (!urls.length) return { products: [], source: "none", currency: "" };
  const products: RawProduct[] = urls
    .map((u, i) => ({ id: `s${i}`, title: titleFromSlug(u), handle: u, url: u }))
    .filter((p) => p.title.length > 1);
  const { currency } = await enrich(urls, products, get, deadline);
  return { products, source: "sitemap", currency };
}

// Reads a Shopify store's public JSON from the visitor's browser.
// Shopify rate-limits shared cloud IPs (our server gets 429s), but these
// endpoints allow cross-origin reads, so the browser can fetch them directly.

export interface ClientProduct {
  id: number;
  title: string;
  handle: string;
  product_type?: string;
  vendor?: string;
  tags?: string[] | string;
  options?: { name: string; values: string[] }[];
  variants?: { price: string }[];
  created_at?: string;
  published_at?: string;
}

export interface ClientScanData {
  origin: string;
  products: ClientProduct[];
  collections: string[];
  meta: { name?: string; description?: string; currency?: string } | null;
}

async function getJson<T>(url: string, ms: number): Promise<{ data: T; finalUrl: string } | null> {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  try {
    const res = await fetch(url, { signal: ctrl.signal, credentials: "omit" });
    if (!res.ok) return null;
    const ct = res.headers.get("content-type") || "";
    if (!ct.includes("json")) return null;
    return { data: (await res.json()) as T, finalUrl: res.url || url };
  } catch {
    return null;
  } finally {
    clearTimeout(t);
  }
}

function slim(p: ClientProduct): ClientProduct {
  const tags = Array.isArray(p.tags) ? p.tags : typeof p.tags === "string" ? p.tags.split(",").map((t) => t.trim()) : [];
  return {
    id: p.id,
    title: p.title,
    handle: p.handle,
    product_type: p.product_type,
    vendor: p.vendor,
    tags: tags.slice(0, 15),
    options: (p.options || []).slice(0, 4).map((o) => ({ name: o.name, values: (o.values || []).slice(0, 12) })),
    variants: (p.variants || []).slice(0, 5).map((v) => ({ price: v.price })),
    created_at: p.created_at,
    published_at: p.published_at,
  };
}

export async function collectInBrowser(input: string): Promise<ClientScanData | null> {
  let s = (input || "").trim();
  if (!s) return null;
  if (!/^https?:\/\//i.test(s)) s = "https://" + s;
  let origin: string;
  try {
    origin = new URL(s).origin.replace(/^http:/, "https:");
  } catch {
    return null;
  }
  const t0 = Date.now();
  const first = await getJson<{ products: ClientProduct[] }>(`${origin}/products.json?limit=250&page=1`, 7000);
  if (!first || !Array.isArray(first.data.products)) return null;
  // Follow redirects (e.g. store.com → www.store.com) for the remaining calls.
  try {
    origin = new URL(first.finalUrl).origin;
  } catch {
    /* keep */
  }
  let products = first.data.products.map(slim);
  for (let page = 2; page <= 4 && products.length === (page - 1) * 250 && Date.now() - t0 < 9000; page++) {
    const next = await getJson<{ products: ClientProduct[] }>(`${origin}/products.json?limit=250&page=${page}`, 5000);
    if (!next?.data.products?.length) break;
    products = products.concat(next.data.products.map(slim));
  }
  const [cols, meta] = await Promise.all([
    getJson<{ collections: { title: string }[] }>(`${origin}/collections.json?limit=250`, 4000),
    getJson<{ name?: string; description?: string; currency?: string }>(`${origin}/meta.json`, 4000),
  ]);
  return {
    origin,
    products,
    collections: (cols?.data.collections || []).map((c) => c.title).slice(0, 200),
    meta: meta ? { name: meta.data.name, description: meta.data.description, currency: meta.data.currency } : null,
  };
}

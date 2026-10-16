import { scanStore } from "@/lib/scan";
import { detectSegments } from "@/lib/segments";
import { getEnv } from "@/lib/env";
import { aiConfigured, refineSegments } from "@/lib/ai";
import { logEvent, overLimit } from "@/lib/db";
import { clientIp, json } from "@/lib/http";
import type { SegmentCandidate } from "@/lib/types";
import type { ClientScanData } from "@/lib/clientScan";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const t0 = Date.now();
  const ip = clientIp(req);
  let body: { url?: string; client?: ClientScanData | null } = {};
  try {
    body = await req.json();
  } catch {
    return json({ error: "bad_request" }, 400);
  }
  if (await overLimit("scan", ip, 30)) return json({ error: "rate_limited" }, 429);
  await logEvent("scan", ip);

  let scan;
  try {
    const client = body.client && Array.isArray(body.client.products) ? { ...body.client, products: body.client.products.slice(0, 1000) } : null;
    scan = await scanStore(body.url || "", 9000, client);
  } catch (e) {
    if (String(e).includes("invalid_url")) return json({ error: "invalid_url" }, 400);
    return json({ error: "scan_failed" }, 502);
  }

  let segments: SegmentCandidate[] = detectSegments(scan);
  let segmentSource: "rules" | "ai" = "rules";
  const env = await getEnv();
  const elapsed = Date.now() - t0;
  if (aiConfigured(env) && scan.products.length >= 4 && elapsed < 9000) {
    const r = await refineSegments(env, scan, segments, Math.min(8000, 16500 - elapsed));
    if (r && typeof r.best === "number" && r.best >= 0 && r.best < segments.length) {
      const chosen = { ...segments[r.best] };
      if (r.name) chosen.name = r.name.slice(0, 40);
      if (Array.isArray(r.values) && r.values.length) {
        const labels = new Map(r.values.map((v) => [v.from, v.label]));
        chosen.values = chosen.values.map((v) => ({ ...v, name: (labels.get(v.name) || v.name).slice(0, 40) }));
      }
      segments = [chosen, ...segments.filter((_, i) => i !== r.best)];
      segmentSource = "ai";
    }
  }

  // Trim the product list for the round trip; the playbook step only needs titles.
  const slim = {
    ...scan,
    products: scan.products.slice(0, 150).map((p) => ({ ...p, tags: p.tags.slice(0, 8), options: [] })),
  };
  return json({ scan: slim, segments, segmentSource, ms: Date.now() - t0 });
}

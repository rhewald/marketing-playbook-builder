import type { Playbook } from "./types";

export function fitScore(p: Playbook, role: string): number {
  let s = 0;
  if (p.store.platform === "shopify" || p.store.platform === "bigcommerce") s += 15;
  const rb = p.answers.revenueBand;
  if (rb === "1-5m" || rb === "5-30m") s += 20;
  else if (rb === "500k-1m") s += 10;
  const t = p.store.tools;
  const toolCount = [t.email, t.sms, t.reviews, t.chat].filter(Boolean).length + t.ads.length;
  if (toolCount >= 3 || role === "agency") s += 15;
  if (role === "founder" || role === "marketing") s += 10;
  return s;
}

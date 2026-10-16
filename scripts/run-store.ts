// Usage: npx tsx scripts/run-store.ts revgear.com [more stores...]
// Runs the scan + segment detection + rules-only playbook (no AI) and prints a summary.
import { scanStore } from "../src/lib/scan";
import { detectSegments } from "../src/lib/segments";
import { generatePlaybook } from "../src/lib/rules";
import type { Answers } from "../src/lib/types";

const answers: Answers = { revenueBand: "1-5m", growthGoal: "10-25", priorities: "", maxDiscount: "25", adBudget: "5-20k", monthOffer: null };

async function run(url: string) {
  const scan = await scanStore(url, 15000);
  const segs = detectSegments(scan);
  console.log(`\n=== ${url} · ${scan.platform} · ${scan.productCount} products · ${scan.ms}ms`);
  console.log("tools", scan.tools, "social", scan.social, "notes", scan.notes);
  for (const s of segs) console.log(`  segment ${s.name} [${s.source}] score=${s.score.toFixed(2)} cov=${s.coverage.toFixed(2)} → ${s.values.map((v) => `${v.name}(${v.productCount})`).join(", ")}`);
  const pb = generatePlaybook("test12345", scan, answers, segs[0], "AUTO", new Date(), null);
  console.log("  year", pb.year.range, pb.year.quarters.map((q) => `${q.label}:${q.adShare}%`).join(" "));
  console.log("  month", pb.month.label, "|", pb.month.title, "| pieces", pb.cta.piecesToBuild);
}

(async () => {
  for (const u of process.argv.slice(2)) {
    try { await run(u); } catch (e) { console.log(u, "FAILED", e); }
  }
})();

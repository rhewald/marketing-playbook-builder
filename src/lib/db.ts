import type { Playbook } from "./types";
import { getEnv as baseEnv } from "./env";

// Create tables on first use in each isolate (idempotent), so the app works
// even if the platform did not apply migrations/0001_init.sql.
const SCHEMA = [
  "CREATE TABLE IF NOT EXISTS playbooks (id TEXT PRIMARY KEY, created_at TEXT NOT NULL, store_url TEXT NOT NULL, platform TEXT, data TEXT NOT NULL)",
  "CREATE TABLE IF NOT EXISTS leads (id TEXT PRIMARY KEY, created_at TEXT NOT NULL, playbook_id TEXT NOT NULL, email TEXT NOT NULL, role TEXT, store_url TEXT, fit_score INTEGER, data TEXT)",
  "CREATE TABLE IF NOT EXISTS events (id INTEGER PRIMARY KEY AUTOINCREMENT, created_at TEXT NOT NULL, playbook_id TEXT, name TEXT NOT NULL, ip TEXT)",
  "CREATE INDEX IF NOT EXISTS idx_events_ip_time ON events (ip, created_at)",
  "CREATE INDEX IF NOT EXISTS idx_leads_playbook ON leads (playbook_id)",
];
let schemaReady: Promise<void> | null = null;

async function getEnv() {
  const env = await baseEnv();
  if (env.DB) {
    const db = env.DB;
    schemaReady ??= (async () => {
      for (const q of SCHEMA) await db.prepare(q).bind().run();
    })().catch((e) => {
      schemaReady = null;
      throw e;
    });
    await schemaReady;
  }
  return env;
}

// D1 when deployed; in-memory fallback for local development.
const mem = {
  playbooks: new Map<string, Playbook>(),
  leads: [] as Record<string, unknown>[],
  events: [] as { at: number; ip: string; name: string }[],
};

export function newId(): string {
  const bytes = new Uint8Array(12);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (b) => b.toString(36).padStart(2, "0")).join("").slice(0, 16);
}

export async function savePlaybook(p: Playbook): Promise<void> {
  const { DB } = await getEnv();
  if (!DB) {
    mem.playbooks.set(p.id, p);
    return;
  }
  await DB.prepare("INSERT INTO playbooks (id, created_at, store_url, platform, data) VALUES (?, ?, ?, ?, ?)")
    .bind(p.id, p.createdAt, p.store.url, p.store.platform, JSON.stringify(p))
    .run();
}

export async function getPlaybook(id: string): Promise<Playbook | null> {
  if (!/^[a-z0-9]{8,24}$/.test(id)) return null;
  const { DB } = await getEnv();
  if (!DB) return mem.playbooks.get(id) ?? null;
  const row = await DB.prepare("SELECT data FROM playbooks WHERE id = ?").bind(id).first<{ data: string }>();
  return row ? (JSON.parse(row.data) as Playbook) : null;
}

export async function saveLead(lead: {
  playbookId: string;
  email: string;
  role: string;
  storeUrl: string;
  fitScore: number;
  data: Record<string, unknown>;
}): Promise<void> {
  const { DB } = await getEnv();
  const row = { id: newId(), createdAt: new Date().toISOString(), ...lead };
  if (!DB) {
    mem.leads.push(row);
    return;
  }
  await DB.prepare(
    "INSERT INTO leads (id, created_at, playbook_id, email, role, store_url, fit_score, data) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
  )
    .bind(row.id, row.createdAt, lead.playbookId, lead.email, lead.role, lead.storeUrl, lead.fitScore, JSON.stringify(lead.data))
    .run();
}

export async function logEvent(name: string, ip: string, playbookId: string | null = null): Promise<void> {
  const { DB } = await getEnv();
  if (!DB) {
    mem.events.push({ at: Date.now(), ip, name });
    return;
  }
  try {
    await DB.prepare("INSERT INTO events (created_at, playbook_id, name, ip) VALUES (?, ?, ?, ?)")
      .bind(new Date().toISOString(), playbookId, name, ip)
      .run();
  } catch {
    /* non-critical */
  }
}

/** True if this IP has done `name` more than `max` times in the last hour. */
export async function overLimit(name: string, ip: string, max: number): Promise<boolean> {
  const { DB } = await getEnv();
  const since = Date.now() - 3600_000;
  if (!DB) return mem.events.filter((e) => e.ip === ip && e.name === name && e.at > since).length >= max;
  try {
    const row = await DB.prepare("SELECT COUNT(*) AS n FROM events WHERE ip = ? AND name = ? AND created_at > ?")
      .bind(ip, name, new Date(since).toISOString())
      .first<{ n: number }>();
    return (row?.n ?? 0) >= max;
  } catch {
    return false;
  }
}

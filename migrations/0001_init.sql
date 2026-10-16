CREATE TABLE IF NOT EXISTS playbooks (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL,
  store_url TEXT NOT NULL,
  platform TEXT,
  data TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS leads (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL,
  playbook_id TEXT NOT NULL,
  email TEXT NOT NULL,
  role TEXT,
  store_url TEXT,
  fit_score INTEGER,
  data TEXT
);

CREATE TABLE IF NOT EXISTS events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at TEXT NOT NULL,
  playbook_id TEXT,
  name TEXT NOT NULL,
  ip TEXT
);

CREATE INDEX IF NOT EXISTS idx_events_ip_time ON events (ip, created_at);
CREATE INDEX IF NOT EXISTS idx_leads_playbook ON leads (playbook_id);

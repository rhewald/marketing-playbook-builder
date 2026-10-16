import { getCloudflareContext } from "@opennextjs/cloudflare";

export interface AppEnv {
  DB?: D1Like;
  AZURE_OPENAI_ENDPOINT?: string;
  AZURE_OPENAI_API_KEY?: string;
  AZURE_OPENAI_DEPLOYMENT?: string;
  AZURE_OPENAI_API_VERSION?: string;
  LEAD_WEBHOOK_URL?: string;
}

export interface D1Like {
  prepare(sql: string): {
    bind(...args: unknown[]): {
      run(): Promise<unknown>;
      first<T = Record<string, unknown>>(): Promise<T | null>;
      all<T = Record<string, unknown>>(): Promise<{ results: T[] }>;
    };
  };
}

export async function getEnv(): Promise<AppEnv> {
  let cf: Record<string, unknown> = {};
  try {
    const ctx = await getCloudflareContext({ async: true });
    cf = (ctx.env as unknown as Record<string, unknown>) || {};
  } catch {
    cf = {};
  }
  const pick = (k: string) => (cf[k] as string | undefined) ?? process.env[k];
  return {
    DB: cf.DB as D1Like | undefined,
    AZURE_OPENAI_ENDPOINT: pick("AZURE_OPENAI_ENDPOINT"),
    AZURE_OPENAI_API_KEY: pick("AZURE_OPENAI_API_KEY"),
    AZURE_OPENAI_DEPLOYMENT: pick("AZURE_OPENAI_DEPLOYMENT"),
    AZURE_OPENAI_API_VERSION: pick("AZURE_OPENAI_API_VERSION"),
    LEAD_WEBHOOK_URL: pick("LEAD_WEBHOOK_URL"),
  };
}

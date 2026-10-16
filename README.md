# Marketing Playbook Builder

Free Cavaco lead magnet at **https://www.cavaco.ai/tools/marketing-playbook**.

A merchant enters their store URL. The tool:

1. Reads the store: Shopify `products.json` and collections, plus homepage signals such as tools, social links and currency.
2. Suggests a personalization dimension, e.g. fight discipline for Revgear.
3. Asks six short questions.
4. Generates a year plan and a month plan, then gates the CSV/PDF download behind an email.

It is built with Next.js 15 and deployed as a **Webflow Cloud** app mounted on the Cavaco Webflow site. It uses Cloudflare Workers via OpenNext, with D1 for storage.

## Environment variables (set in Webflow Cloud → app → Environment)

| Name | Required | Notes |
|---|---|---|
| `AZURE_OPENAI_ENDPOINT` | optional | e.g. `https://<resource>.openai.azure.com` |
| `AZURE_OPENAI_API_KEY` | optional | mark as **secret** |
| `AZURE_OPENAI_DEPLOYMENT` | optional | chat model deployment name (e.g. gpt-4o-mini) |
| `AZURE_OPENAI_API_VERSION` | optional | defaults to `2024-10-21` |
| `LEAD_WEBHOOK_URL` | optional | each lead is POSTed here as JSON (e.g. a HubSpot/Zapier/Slack hook) |

If the Azure variables are not set, the tool runs **rules-only**: no AI themes or angles, and everything else still works.

## Data

D1 binding `DB` holds three tables, defined in `migrations/0001_init.sql`:

- `playbooks` (each generated playbook)
- `leads` (email, role, fit score)
- `events` (CTA clicks, downloads, shares)

## Local dev

```bash
npm install
npm run dev            # http://localhost:3000/tools/marketing-playbook
npx tsx scripts/run-store.ts revgear.com   # rules engine against a real store
```

Locally the DB falls back to memory. Put Azure vars in `.env.local` to test the AI path.

## Deploy

Pushes to `main` deploy automatically through Webflow Cloud.

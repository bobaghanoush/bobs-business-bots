# Bob’s Business Bots — Marketing Site

Static Astro landing page for Bob’s Business Bots: done-for-you GoHighLevel automation for emergency-service trades ($297 setup / $447/mo).

**Stack:** Astro (static) · plain CSS (cascade layers + variables) · self-hosted Geist Sans · `@astrojs/vercel` · near-zero JS.

## Local development

```bash
cp .env.example .env
# set PUBLIC_GHL_CALENDAR_URL to your live GHL booking link
npm install
npm run dev
```

Open the URL Astro prints (usually `http://localhost:4321`).

## Build

```bash
npm run build
npm run preview   # optional: serve the static output locally
```

Output lands in `dist/` (HTML/CSS/assets). The Vercel adapter also emits `.vercel/output` for platform deploys.

## Environment

| Variable | Purpose |
|----------|---------|
| `PUBLIC_GHL_CALENDAR_URL` | Primary CTA — GoHighLevel calendar booking URL |

Without it, CTAs fall back to `https://example.com/placeholder-ghl-calendar`.

## Deploy on Vercel

1. Import this GitHub repo in [Vercel](https://vercel.com/new).
2. Framework preset: **Astro** (detected automatically).
3. Build command: `npm run build` · Output: handled by `@astrojs/vercel` with `output: 'static'`.
4. Add env var `PUBLIC_GHL_CALENDAR_URL` (Production + Preview).
5. Deploy. Production tracks `main`; Preview deploys open from PRs.

No CMS. Copy lives in `src/pages/index.astro`. Design tokens in `src/styles/global.css`.

## Project layout

```
src/
  pages/index.astro      # Full landing page (hero → final CTA)
  layouts/BaseLayout.astro
  components/CtaButton.astro
  styles/global.css      # Tokens, sections, motion
public/
  fonts/                 # Subset Geist Sans woff2
  images/                # Hero AVIF/WebP/JPEG srcset
```

## Design notes

- Industrial-clean: charcoal + warm off-white + amber accent
- Brand-first hero, full-bleed atmospheric image, no cards/badges on hero
- Motion: hero entrance, offer scroll-reveal, CTA hover/press — all honor `prefers-reduced-motion`

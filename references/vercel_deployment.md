# vercel_deployment.md — Deployment & Edge Reference

**Owning agent:** website-engineer
**Last verified:** 2026-05-23
**Sources:**
- https://vercel.com/docs (verified 2026-05-23)
- https://docs.astro.build/en/guides/integrations-guide/vercel/ (Astro + Vercel adapter)

---

## When to consult this file

Configuring Vercel deployment, setting headers, enabling analytics, optimizing edge behavior, debugging preview deploys, managing environment variables.

## Authority

The Engineer owns Vercel configuration. This file defines the production deployment standard for this site.

---

## 1. Astro + Vercel adapter setup

```bash
npx astro add vercel
```

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static', // This is a static site; do NOT switch to 'server' or 'hybrid' without reason
  adapter: vercel({
    webAnalytics: { enabled: true },
    speedInsights: { enabled: true },
    imageService: true, // Enable Vercel's image optimization service
  }),
  vite: {
    plugins: [tailwindcss()],
  },
});
```

`output: 'static'` is the right choice — this is a content site with no per-request logic. Static gets best edge caching, lowest TTFB.

---

## 2. Image optimization service

When `imageService: true`, Astro's `<Image>` and `<Picture>` route through Vercel's image optimization endpoint. Benefits:
- Auto-format (AVIF when supported, WebP fallback, JPEG fallback)
- Auto-srcset based on viewport
- Cached at the edge with long TTLs

Watch the Vercel dashboard for image optimization usage — the free tier caps at 1000 optimized images/month. For this site that's plenty; if it ever becomes a bottleneck, switch back to Astro's built-in Sharp service.

---

## 3. Analytics

### Web Analytics (page views, referrers)

`webAnalytics: { enabled: true }` injects the `<Script>` at build time. Privacy-friendly: no cookies, GDPR-compliant out of the box.

### Speed Insights (Core Web Vitals RUM)

`speedInsights: { enabled: true }` collects real-user LCP, INP, CLS at the 75th percentile.

Dashboard URL: https://vercel.com/[username]/[project]/analytics

Both are free at the hobby tier.

---

## 4. Headers (security + caching)

Add a `vercel.json` at the project root:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" },
        { "key": "Strict-Transport-Security", "value": "max-age=63072000; includeSubDomains; preload" }
      ]
    },
    {
      "source": "/(.*).(css|js|woff2|webp|avif|jpg|png|svg)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

Static assets get 1-year cache (Astro fingerprints filenames, so cache-bust is automatic on build).

### Content Security Policy (CSP)

For a portfolio site, a strict CSP is reasonable. Skip it if it breaks anything; not a critical hardening for a static personal site without user input.

```json
{
  "key": "Content-Security-Policy",
  "value": "default-src 'self'; img-src 'self' data: https:; font-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self' https://va.vercel-scripts.com;"
}
```

Adjust `script-src` to include Vercel Analytics / Speed Insights domains.

---

## 5. Redirects

```json
{
  "redirects": [
    { "source": "/portfolio", "destination": "/projects", "permanent": true },
    { "source": "/blog", "destination": "/writing", "permanent": true }
  ]
}
```

Use 301 (`permanent: true`) for URL changes you want indexed; 302 (`permanent: false`) for temporary.

---

## 6. Environment variables

Project Settings → Environment Variables. Three scopes:
- Production
- Preview
- Development

Astro accesses via `import.meta.env.PUBLIC_VAR_NAME` (public) or `import.meta.env.VAR_NAME` (server-only).

For a static personal site, almost no env vars needed. If a Contentful or similar CMS is added later, API keys live here.

---

## 7. Preview deployments

Every push to a non-main branch creates a preview deploy at `https://prestons-2026-website-[hash]-[username].vercel.app`. The Auditor runs Lighthouse + axe-core against this URL, not localhost.

To skip preview deploys on certain branches (e.g., docs-only changes):

```json
{
  "git": {
    "deploymentEnabled": {
      "main": true,
      "monthly-refresh-*": true
    }
  }
}
```

---

## 8. Performance budget at the edge

Vercel's edge network places the site within ~50ms of most visitors in North America and Europe. TTFB should be sub-200ms in production.

If TTFB regresses past 800ms:
1. Check Vercel dashboard for build / cache health
2. Confirm `output: 'static'` is set (not server-rendered)
3. Check for accidental `getStaticPaths` returning huge arrays (slow build, slow first hit)

---

## 9. Sitemap + robots

Astro auto-generates a sitemap when the `@astrojs/sitemap` integration is added:

```bash
npx astro add sitemap
```

```javascript
// astro.config.mjs
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://prestonmagouirk.com',
  integrations: [sitemap()],
});
```

Generates `sitemap-index.xml` and `sitemap-0.xml`.

`public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://prestonmagouirk.com/sitemap-index.xml
```

---

## 10. Build performance

For this site (~10–15 pages, growing to ~25 with case studies + blog), Astro builds in 5–15 seconds. Vercel builds take 30–60 seconds including npm install.

If build time grows past 2 minutes, audit:
- Image conversion (large originals?)
- Content collection size
- Third-party API fetches at build time (avoid; cache in repo)

---

## Verification checklist

- [ ] `output: 'static'` in `astro.config.mjs`
- [ ] Vercel adapter installed, `webAnalytics` + `speedInsights` enabled
- [ ] `vercel.json` has security headers + asset cache
- [ ] Sitemap generated and referenced in robots.txt
- [ ] No env vars exposed to public unintentionally (audit with `console.log(import.meta.env)`)
- [ ] Production deploy returns HTTP 200 and correct headers (`curl -I https://prestonmagouirk.com/`)

---

## Common mistakes

1. Forgetting to set `site: 'https://...'` in `astro.config.mjs` — breaks sitemap absolute URLs.
2. Switching to `output: 'server'` for a static use case — adds runtime cost for nothing.
3. Building locally and pushing the `dist/` folder — let Vercel build from source.
4. Hardcoding `localhost:4321` in any link or fetch — breaks production.
5. Leaving Analytics disabled — you ship blind on real-user performance.

---

*Quarterly refresh: 2026-08-01.*

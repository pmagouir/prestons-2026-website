# core_web_vitals.md — Performance Standards Reference

**Owning agents:** website-engineer + website-auditor
**Last verified:** 2026-05-23
**Sources:**
- https://web.dev/articles/vitals (verified 2026-05-23)
- https://web.dev/articles/optimize-lcp (referenced)
- https://web.dev/articles/optimize-inp (referenced)
- https://web.dev/articles/optimize-cls (referenced)

---

## When to consult this file

Setting performance budgets, running Lighthouse, interpreting Core Web Vitals, deciding whether a change is safe to ship, choosing optimization priorities.

## Authority

These thresholds are the standard for this site. The Engineer ships against them; the Auditor verifies them. No shipping below "Good" on any metric.

---

## 1. The three Core Web Vitals (stable as of 2024)

| Metric | Measures | Good | Needs Improvement | Poor |
|--------|----------|------|--------------------|------|
| **LCP** (Largest Contentful Paint) | Loading speed — when the main content paints | **≤ 2.5s** | 2.5–4.0s | > 4.0s |
| **INP** (Interaction to Next Paint) | Interactivity — worst-case interaction lag | **≤ 200ms** | 200–500ms | > 500ms |
| **CLS** (Cumulative Layout Shift) | Visual stability — unexpected layout shifts | **≤ 0.1** | 0.1–0.25 | > 0.25 |

INP replaced FID as a Core Web Vital in March 2024. INP is stricter than FID because it captures every interaction's lag, not just the first.

### The 75th-percentile rule

A site "passes" a Core Web Vital when **75% of page loads** (across mobile + desktop) meet the "Good" threshold. Single-load Lighthouse scores are lab measurements — useful for development but not sufficient for production attestation. Production verification requires real-user monitoring (RUM).

---

## 2. LCP — Largest Contentful Paint

### What gets measured
The render time of the largest content element visible in the viewport: usually a hero image, a large headline, or a video poster. Above-the-fold only.

### Top recipes for a static personal site

1. **Hero image priority loading**
   ```astro
   <Image
     src={heroImage}
     alt="..."
     loading="eager"
     fetchpriority="high"
     format="webp"
   />
   ```
2. **Avoid lazy-loading any above-the-fold image** — `loading="lazy"` on a hero image is a 1–2s LCP regression.
3. **Preconnect to font hosts** OR **self-host fonts via Astro Fonts API** — eliminates the font-CDN handshake delay.
4. **Inline critical CSS** — Astro does this automatically for the components used in the route.
5. **Use modern image formats** — AVIF / WebP cut hero image bytes 40–60% vs. JPEG with no visual loss.

### Where LCP goes wrong
- Hero image loaded via JavaScript (don't do this on a static site)
- Hero image hosted on a slow third-party CDN
- Font swap pushing the LCP element (use `font-display: swap` with carefully tuned fallback metrics)
- Cookie banners / overlays counted as the LCP element

---

## 3. INP — Interaction to Next Paint

### What gets measured
For every user interaction (click, tap, key press), how long until the browser paints the next frame. INP reports the **worst** observed interaction over the page lifecycle (or the 98th percentile on pages with > 50 interactions).

### Why this matters for a mostly-static site
A static Astro site ships ~zero JavaScript by default. INP should be excellent (< 100ms) almost trivially.

INP regression sources on this site:
- Mobile menu toggle (the only interactive component currently) — JavaScript runs on click
- Future case-study filters, search, or interactive demos
- Third-party scripts (analytics, ad pixels) — Vercel Analytics is small, but any other addition needs to be budgeted

### Top recipes

1. **Keep JavaScript surface minimal** — Astro's zero-JS default is the strongest INP defense.
2. **Avoid long-running event handlers** — break up >50ms tasks with `requestIdleCallback` or `setTimeout(..., 0)`.
3. **Don't ship a framework when you don't need one** — no React/Vue on static pages.
4. **Defer non-critical scripts** with `<script defer>` or place them at the end of `<body>`.
5. **Audit third-party scripts ruthlessly** — every analytics pixel adds INP risk.

### Measurement
Lighthouse INP score requires a real interaction during the audit run. For automated CI, INP is harder to test than LCP/CLS — supplement with Vercel Analytics RUM.

---

## 4. CLS — Cumulative Layout Shift

### What gets measured
The sum of "unexpected" layout shifts during the page lifecycle. A shift is unexpected when the user didn't trigger it (e.g., an image loading and pushing content down).

### Top recipes

1. **Always set `width` and `height` on `<Image>`** — Astro enforces this for `<Image />`. Reserves the box before the image loads.
2. **Use `aspect-ratio` for embedded media** — videos, iframes, ad slots.
3. **Self-host fonts with matching fallback metrics** — Astro Fonts handles this if `fallbacks` is configured.
4. **Avoid late-injected DOM** — banners, cookie consents, sticky toolbars added by JS shift content; design around them or pre-allocate space.
5. **Don't animate `width`/`height`/`top`/`left`** — use `transform: translate` and `transform: scale` instead (these don't trigger layout).

---

## 5. Other meaningful metrics (not Core Web Vitals, but tracked)

| Metric | Good threshold | Notes |
|--------|----------------|-------|
| **FCP** (First Contentful Paint) | ≤ 1.8s | First text/image; precursor to LCP |
| **TTFB** (Time to First Byte) | ≤ 800ms | Server response; Vercel edge typically ~100-200ms |
| **TBT** (Total Blocking Time) | ≤ 200ms | Lighthouse proxy for INP in lab tests |
| **Speed Index** | ≤ 3.4s | Visual completeness over time |

---

## 6. Lighthouse target scores for this site

The Engineer runs Lighthouse against the production Vercel deployment (NOT dev mode — dev mode underreports performance) and targets:

| Axis | Minimum acceptable | Stretch target |
|------|---------------------|-----------------|
| Performance | 95 | 100 |
| Accessibility | 100 | 100 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |

These targets apply to every route (`/`, `/about`, `/experience`, `/projects`, `/projects/[slug]`, `/consulting`, `/writing`, `/writing/[slug]`, `/fitness`).

Sub-95 Performance on any route blocks merge unless an explicit exception is logged in `errors.md`.

---

## 7. Measurement workflow

### Lab measurement (every cycle, Auditor step)

```bash
# Against production Vercel deployment
npx lighthouse https://prestonmagouirk.com/ --output=html --output=json --output-path=./audit-lighthouse-home
npx lighthouse https://prestonmagouirk.com/about --output-path=./audit-lighthouse-about
# ... per route
```

Or via Chrome DevTools → Lighthouse panel. Run in incognito with extensions disabled.

### Real-user monitoring (continuous)

Enable Vercel Analytics in the project settings. Provides 75th-percentile RUM data for LCP, INP, CLS across actual visitors. Free tier sufficient for this traffic volume.

```javascript
// astro.config.mjs (Vercel adapter required)
import vercel from '@astrojs/vercel';

export default defineConfig({
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
```

---

## Verification checklist (Engineer + Auditor)

- [ ] Lighthouse Performance ≥ 95 on every route
- [ ] LCP ≤ 2.5s on slow 4G simulation
- [ ] INP not measurable in static-page Lighthouse — verify via Vercel Analytics RUM week-over-week
- [ ] CLS ≤ 0.1 on every route
- [ ] No `loading="lazy"` on above-the-fold images
- [ ] No raw `<img>` for local images
- [ ] All embedded media have explicit `width`/`height` or `aspect-ratio`
- [ ] Vercel Analytics RUM enabled in production

---

## Common mistakes

1. Trusting Lighthouse dev-mode scores — production scores are ~10–20 points higher.
2. Optimizing for Performance score without checking CLS — you can ship a fast page that shifts wildly.
3. Forgetting that INP requires an interaction to measure — static-page Lighthouse won't catch INP issues.
4. Ignoring the 75th-percentile rule — your laptop's score is not the user's score.
5. Optimizing one route and assuming the rest are fine — every route gets Lighthouse.

---

*Quarterly refresh: 2026-08-01. Thresholds are stable; recipes evolve as the web platform does.*

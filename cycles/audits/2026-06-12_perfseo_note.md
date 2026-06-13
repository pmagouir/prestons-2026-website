# Performance & SEO Note — 2026-06-12 cycle (restarted, tight scope)

**Author:** Performance & SEO | **Branch:** `monthly-refresh-2026-06`
**Scope:** config + structured-data + discovery surfaces. NO multi-route Lighthouse sweep (Site Lead runs CWV separately and folds in numbers). A prior attempt died on a socket close after ~35 min, almost certainly a full-route Lighthouse run — deliberately not repeated here.
**Inputs read:** `lighthouserc.json`, `astro.config.mjs`, `src/layouts/Layout.astro`, `cycles/diffs/2026-06-12_all-surfaces_v1.md`, `.learn/canonical.md § Profile URLs`, `.learn/errors.md` Pattern 9, references (core_web_vitals, vercel_deployment, schema_org_seo), built `dist/`, `.github/workflows/ci.yml`, `scripts/verify_site.sh`.
**Goes to:** Auditor, then Site Lead.

---

## 1. lighthouserc.json — CI coverage blind spot FIXED (I own this file)

**Root cause (baseline audit, 2026-06-10):** `collect` used only `staticDistDir: ./dist` with autodiscovery. LHCI's autodiscovery walks `dist/` and stops at a default cap, which silently dropped `/projects` — so the CI gate never tested it. A dropped route is invisible: the gate passes while a page goes unmeasured.

**Fix:** added an explicit `url` array alongside `staticDistDir`. When both keys are present, LHCI boots a static server rooted at `dist/` and audits **exactly** the listed URLs (host/port rewritten to the ephemeral server). Autodiscovery is bypassed entirely — no cap, no silent drops, and the `/fitness` noindex redirect stub is never audited (it would otherwise tank SEO with its `noindex`).

**BEFORE:**
```json
"collect": {
  "staticDistDir": "./dist",
  "numberOfRuns": 3
}
```

**AFTER:**
```json
"collect": {
  "staticDistDir": "./dist",
  "numberOfRuns": 3,
  "url": [
    "http://localhost/",
    "http://localhost/about/",
    "http://localhost/experience/",
    "http://localhost/projects/",
    "http://localhost/consulting/",
    "http://localhost/personal/"
  ]
}
```

- All 6 real routes now explicitly covered: `/`, `/about`, `/experience`, `/projects`, `/consulting`, `/personal`.
- `/fitness` deliberately excluded (it's a 301 redirect / noindex stub).
- Trailing slashes match Astro's emitted `dist/<route>/index.html` layout so the static server resolves each URL.
- **Assertion budgets unchanged** (7 assertions, verified): perf ≥0.9, a11y =1, best-practices ≥0.95, seo =1, LCP warn ≤2500, CLS error ≤0.1, TBT warn ≤200. `numberOfRuns: 3` kept.
- JSON validated (`node` require parse clean).

**CI wiring confirmed:** `.github/workflows/ci.yml` runs `npx --yes @lhci/cli@latest autorun` on every PR to `main`, which reads this `lighthouserc.json` at repo root. The gate would now catch a regression on any of the 6 routes — including `/projects`, which it previously could not.

Did NOT run a live LHCI collect (would invoke Chrome — the long-running step that killed the prior attempt; out of scope this run). Config correctness is deterministic; CWV numbers come from the Site Lead's separate measurement.

---

## 2. Structured data — VALID

Re-parsed all JSON-LD in built `dist/` HTML: **6 blocks, 0 invalid** (one Person block per indexed route; the noindex `/fitness` stub correctly carries none).

Person schema fields (extracted from `dist/index.html`), all trace to canonical / schema_org_seo.md §1:
- `@type`: Person
- `jobTitle`: "Chief Strategy and Analytics Officer" — traces to canonical
- `worksFor`: DC College Access Program (affiliation present)
- `alumniOf`: 3 (UVA, Vanderbilt, Tulane)
- `hasCredential`: 3 (PhD, MPP, IES Predoctoral Fellow)
- `knowsAbout`: 8 terms
- **`sameAs`: exactly `["https://www.linkedin.com/in/preston-magouirk-840aa757/", "https://orcid.org/0000-0003-1093-5312"]`** — LinkedIn + ORCID only. No Google Scholar (omitted, unverified per canonical 2026-06-12 discovery). No GitHub (excluded per canonical, Preston 2026-06-04). Matches `canonical.md § Profile URLs` exactly. ORCID re-confirmed as the canonical-locked, content-verified value (UVA PhD affiliation + the Louisiana QRIS work).

**Article + BreadcrumbList:** NOT warranted on any current route. The site is 6 flat top-level pages with no nested or dated-article routes. BreadcrumbList needs nesting (e.g. `/projects/[slug]`); Article needs a writing entry. Neither exists this cycle, and adding a `/writing` route is explicitly out of scope. No missing-schema defect. (When `/projects/[slug]` or a writing collection ships, layer BreadcrumbList + Article/CreativeWork per schema_org_seo.md §2–4 — flagged for a future cycle, not this one.)

**One genuine gap for the Engineer** (see §4): the Person schema is missing the top-level `"url"` field that schema_org_seo.md §1 specifies. Minor but real — the entity URL anchors the `sameAs` identity graph.

---

## 3. Discovery surfaces — ALL CONFIRMED

- **`site:` URL** — `astro.config.mjs` line 8: `site: 'https://prestonmagouirk.com'`. Correct. Canonical URLs and sitemap absolute URLs depend on this; verified they resolve correctly in built output.
- **Sitemap** — `dist/sitemap-index.xml` points to `dist/sitemap-0.xml`, which lists exactly 6 URLs: `/`, `/about/`, `/consulting/`, `/experience/`, `/personal/`, `/projects/`. **`/personal` included; `/fitness` excluded.** `@astrojs/sitemap` did this automatically off the route set. Correct.
- **robots.txt** — present at `public/robots.txt` → emitted to `dist/robots.txt` (identical). `User-agent: * / Allow: /` + `Sitemap: https://prestonmagouirk.com/sitemap-index.xml`. Sane.
- **OG image** — single static `public/og-image.png`, verified **1200×630** PNG (the `summary_large_image` size). Referenced on every page including `/personal` via `Layout.astro` (`new URL("/og-image.png", Astro.site)`). Built `/personal` confirmed: `og:image` absolute URL + `og:image:width 1200` + `twitter:card summary_large_image` + `twitter:image`. `/personal` gets the OG image. Correct. (Per-page generated OG is not in use; the single static OG is intentional and correctly referenced site-wide.)
- **`/fitness` → `/personal` 301** — configured in `astro.config.mjs` lines 11–13 (`redirects: { '/fitness': { status: 301, destination: '/personal' } }`). Build emits a stub at `dist/fitness/index.html`: a `0;url=/personal` meta-refresh + `<meta name="robots" content="noindex">` + `<link rel="canonical" href="https://prestonmagouirk.com/personal">`. On Vercel the static build's redirect config is honored as a real 301 (per vercel_deployment.md §5); the meta-refresh stub is the static fallback. The `noindex` + canonical means crawlers won't index `/fitness` and consolidate to `/personal`. Behaves correctly. (This stub is exactly why the lighthouserc `url` array — not autodiscovery — is the right mechanism: a noindex page must never enter the SEO=1 gate.)

---

## 4. Engineer fix list (code-level; outside my config lane)

1. **`src/layouts/Layout.astro` — add `url` to `personSchema`.** The Person block (object starting line 20) is missing the top-level entity `url`. schema_org_seo.md §1 specifies `"url": "https://prestonmagouirk.com"`. Built schema currently emits `url: undefined`.
   - **Current:** no `url` key (e.g. between `jobTitle:` line 26 and `worksFor:` line 27, or anywhere top-level in the object).
   - **Target:** add `url: "https://prestonmagouirk.com",` as a top-level Person property. (Severity: low — valid without it, but the entity URL anchors the `sameAs` graph for LLM/AI-search disambiguation, which is the whole point of the block per Pattern 9.)

No other code changes required. Sitemap, robots, OG, redirect, and `site:` are all correct as shipped; the only config change (lighthouserc) I made directly.

---

## Verification gate (Perf & SEO) — status

- [x] lighthouserc covers all 6 real routes; `/fitness` excluded; budgets unchanged; JSON valid. CI gate would catch a regression on any route (incl. `/projects`, previously dropped).
- [x] JSON-LD validates — 6/6 blocks parse; `sameAs` carries only verified URLs (LinkedIn + ORCID); GitHub excluded; Scholar omitted.
- [x] `site:` set; sitemap present (+`/personal`, −`/fitness`); robots present + sane; OG 1200×630 present + referenced site-wide incl. `/personal`; `twitter:card summary_large_image`.
- [x] `/fitness`→`/personal` 301 configured + noindex stub emitted.
- [ ] Live Lighthouse CWV numbers — DEFERRED to Site Lead's separate measurement (deliberately not run this cycle).
- [→] One Engineer fix filed: add `url` to Person schema (§4 item 1).

No `sameAs` URL invented or left dead. No budget loosened. No site copy or design touched.

# Engineer Diff Note — 2026-06-12 Cycle (correctness + polish)

**Author:** Engineer | **Branch:** `monthly-refresh-2026-06` | **Gate 1:** cleared (Preston, 2026-06-12)
**Build:** `npm run build` GREEN (6 pages + /fitness redirect). `bash scripts/verify_site.sh` PASSED (build green · 6 JSON-LD blocks, 0 invalid · forbidden-token scan clean).
**Scope:** the approved correctness + polish cycle. Did NOT build `/projects/[slug]` (deferred). No schema change (`src/content.config.ts` untouched).
**Goes to:** Performance & SEO, then the Auditor.

This note is organized by surface. Each lists files touched, before→after, and what Perf-SEO / the Auditor should check.

---

## Foundation — `src/styles/global.css` (build-order #1; was in-progress, verified complete)

The `@theme` token layer from the navigation-global spec was already present in the working tree (in-progress Engineer work) and is correct as-shipped. Verified against the spec and against the generated CSS bundle:

- **Type scale** `--text-display … --text-label` (clamp-based modular scale, §2), with per-utility line-height + letter-spacing in `@layer base`. The `.text-label` utility forces Inter regardless of HTML tag (m6 fix).
- **Color tokens** in OKLCH: `--color-primary`, `--color-secondary`, `--color-background` (§3.1), plus `--color-primary-hover` (CTA hover ground) and `--color-footer-link-hover` (the M4 fix neutral, flagged for Preston in §3.4 — shipped per Designer recommendation).
- **`:focus-visible`** global brand ring (2px primary, 2px offset) + `.on-dark:focus-visible` light ring for dark/green grounds (§4.1, m12).
- **`scroll-padding-top: 5rem`** (§4.2, m12). Reduced-motion block retained (§4.3).

**Verified in the built CSS bundle:** every custom utility resolves — `text-display/h1/h2/h3/dek/lead/label`, `bg-primary`, `hover:bg-primary-hover` → `var(--color-primary-hover)`, `.on-dark`, `border-secondary`, the focus-visible rule, and `scroll-padding-top`. No silent missing-utility failures.

---

## Navigation — `src/components/Navigation.astro` (in-progress, verified complete)

- **Fitness removed → 4 links** (About, Experience, Portfolio, Consulting). Gate 1 decision #1 applied.
- Active state now **burgundy** (`text-secondary` + `border-b-2 border-secondary pb-1`) for location, **green** hover for affordance (§5.2, M13).
- `aria-current="page"` on the active link; `aria-controls="mobile-menu"`, Escape-to-close + focus-return to toggle (m15); `aria-label="Primary"` on `<nav>`; desktop links `py-2` (m16 target size).
- Name-logo + nav links tokenized (`text-lead`, `text-sm`).

## Footer — `src/components/Footer.astro` (in-progress, verified complete)

- **M4 / Pattern 19 fix:** footer links default `neutral-400` (7.6:1 on `#0F0F0F`), hover `--color-footer-link-hover` (#F1F5F2, 17.4:1) + underline. `.on-dark` for the light focus ring.
- **`/personal` link added** to the site/social cluster (personal-page spec §4) — the only UI entry point to /personal.

## SkillsToolkit — `src/components/SkillsToolkit.astro` (in-progress, verified complete)

- **m11 curation:** dropped "Stata" (untraceable in BRAIN) and "VS Code + Cursor" (junior register).
- **M13:** killed the invisible `to-secondary/5` gradient → flat `bg-background` + one `border-t border-secondary/30` hairline.
- **m10:** chips render static (removed `hover:bg-primary/10` + `cursor-default`); card ring static (removed `hover:ring-primary/20`). H2/labels tokenized.

## Hero — `src/components/Hero.astro` (in-progress, verified complete)

- Primary CTA `bg-neutral-900` → **`bg-primary` (Hunter Green), white label, `.on-dark`** focus ring + `hover:bg-primary-hover` (M13, §3.3). Secondary CTA → green ghost (`hover:border-primary hover:text-primary`).
- Tokenized eyebrow/H1/subhead (`text-label`/`text-display`/`text-lead`), replacing inline `style=` clamps (m7). Removed `hover:scale-105` on the portrait (m10).

## ProjectGrid — `src/components/ProjectGrid.astro`

- **m18:** status badge `completed` label "Prior" → **"Completed"**.
- **M13:** mainLink CTA `bg-neutral-900` → `bg-primary` + `.on-dark` light focus ring + `hover:bg-primary-hover`.
- **m10:** removed the non-interactive card's `hover:shadow-md hover:ring-primary/20` (the card is not a link; only the inner CTA is interactive).

---

## Layout / JSON-LD — `src/layouts/Layout.astro`

- **`sameAs` discovery (Gate 1 task):** added **`https://orcid.org/0000-0003-1093-5312`** to the Person `sameAs` array. VERIFIED via the ORCID public API — name "Preston Magouirk", **UVA PhD** affiliation, and the registered work "Cross-Sector Program Selection, Quality Improvement, and System-Building in Early Childhood Education: Evidence from a Statewide Reform in Louisiana" (the Louisiana early-childhood QRIS / AERA Open study the UVA–LDOE partnership produced). URL resolves HTTP 200, public.
- **Google Scholar: OMITTED** — the author-profile search returned a CAPTCHA/anti-bot page with zero verifiable entries; no record content-verified. No dead link, no guessed `user=` ID (discovery protocol + Lesson 7).
- **GitHub:** stays excluded (canonical).
- Canonical § Profile URLs updated to lock ORCID and record the Scholar omission (2026-06-12).

**Perf-SEO:** the Person schema now carries 2 `sameAs` URLs (LinkedIn + ORCID). Verify JSON-LD structured-data validity in your step (verify_site.sh already parses all 6 blocks clean).

---

## experience.astro

- **Single `<main>` (M5):** page `<main>` → `<div>` (Layout supplies the one `<main>`). Confirmed exactly 1 `<main>` in built output.
- **Tokenized** H1/H2/role-H3 (m7); meta description "DC CAP Scholars" → "DC CAP" (m14).
- **Subhead (m1):** "amazing teams who…" → the cross-sector arc.
- **Executive Leadership (C3):** FP&A leadership (precision rule honored — NO "finance"/"head of finance"/CFO/accounting/controller), ~6 reports incl. CPO, primary-architect framing, 2050 Moonshot in DC CAP's org voice (80% completion), pivot, retention/graduation.
- **Innovation + Fundraising (C3):** primary-architect line; **CCL REMOVED** (see escalation note below); $600K, $50M.
- **Organizational Health (C4/C7):** canonical FIVE units only; 4 Standards of Practice as prose; promotions (aggregate, no names).
- **Change Management (C1/C4):** pilot past tense + framework present tense; Salesforce 3-piece architecture; compression figures; 2 agentic systems. No pilot-outcome claim.
- **UVA Published Research (Critical):** CUT "first statewide longitudinal study"; reframed per Pattern 4.
- **NEW Speaking block** after Education, Education `border-l-2` register. **UERU rendered as the bare acronym** (no invented expansion — Lesson 7 / Gate 1).
- **m13 sweep:** Education entries Ph.D./M.P.P./B.A. → PhD/MPP/BA; "M.P.P., Public Policy" redundancy removed.
- **Number-as-anchors:** load-bearing figures wrapped in `<strong>` (design spec §1.5), ~2–3 per role body.

**Auditor:** confirm FP&A precision (banned-term scan clean), the canonical five units, CCL absent, UERU bare, pilot/framework split tense.

## about.astro

- **Single `<main>` (M5):** → `<div>`. `max-w-prose` on the narrative body (readability, §6).
- **CSAO narrative (C5):** "13 access-oriented universities" → **"14 signed universities"** (portfolio frame); "DC TAG" → **"DCTAG"** (m9). Units held to canonical five (CCL absent).
- **Credentials sidebar (Edit 4):** added **"Excellence in Teaching Award, Teach For America South Louisiana (2013)"** in spec order (PhD → MPP → TFA → CF-L3). CrossFit kept as the one-line credential.
- **"Based in Washington, DC"** added under Current Role (Exec-recruiter scan; Berlin stays off).
- **m10:** removed family-photo `hover:scale-[1.02]` + load transition (static). **m6:** "How I Operate" styled `text-label` (Inter). **m17:** `aria-hidden` on checkmark SVGs + Core Focus arrows. Tokenized type.
- Family paragraph + 3-photo grid **kept on About** (Designer default; Gate 1 #3 keeps family warm-close on About).

## consulting.astro (the cycle's lift — restructured)

- **Single `<main>` (M5):** → `<div>`.
- **Four offer bands** (curated, hairline + whitespace, not a wall): **AI Governance first** (M8 — the 2026 front door), then Data & Analytics, Grant Writing, Org Change. Each: a quiet **buyer-register eyebrow** (`text-label` neutral-600) → offer name (`text-h3` Lora) → one green offer line (`text-lead` primary) → intro → 2-col What I offer / Results.
- **Results → fragments (Pattern 7 / M9)** with **numbers-as-anchors** (`<strong>` on the leading figure: $500K+, $10M+, $600K, $50M+, 85%+, 75–95%, 9 staff/3 units, 19).
- **$10M+ KEPT** (registered at Gate 1). **M11:** "saving $500K+" → "$500K+ in annual staff capacity recovered". **M14:** CUT "funded by national research grants" → verified RCT subjects. AI-gov pilot past tense, framework present, NO outcome claim.
- **Financial Scenarios Tool** referenced under Data & Analytics: names dccapinnovation.org **as plain text, NOT a hyperlink**; "53-of-53 verification suite".
- **Green CTAs** (×2, `bg-primary`, `.on-dark` light focus ring). One **burgundy** rule on "How We Work Together" (the page's single burgundy element). **m8:** "3–5 hours", "2–4 weeks" en-dashes. **m10:** engagement-model cards static (removed hover shadow — not links). "Based in Washington, D.C." kept.

**Auditor:** confirm governance-first order, fragment Results, single green CTA style, one burgundy rule, dccapinnovation.org not hyperlinked, no equity language / no banned filler.

## NEW personal.astro + retired fitness.astro

- **NEW `/personal`** (personal-page spec): opens on a "Movement" section (Designer name). Folds the retired fitness content — George photos (no hover scale, m10), the systems-thinking lead, the CrossFit record (CF-L3/CCFT, Quarterfinals), the training-philosophy paragraph, the **12-Test Fitness Gauntlet tile** (interactive, hover kept, `aria-hidden` arrow, accessible name from the title+sub-line), and the email reach-out. **m2 curation:** dropped the standalone Credentials block (only CF-L3/CCFT verified) — folded into the Movement prose per the Designer recommendation. Family stays on About (default). Single `<main>` (no duplicate-main repeat of the old fitness bug).
- **`src/pages/fitness.astro` DELETED**; **`/fitness → /personal` 301 redirect** added in `astro.config.mjs` (`redirects` config; Astro emits the redirect, Vercel honors the 301). Built output confirms `/fitness/index.html` redirects to `/personal`.

**Perf-SEO:** (1) **sitemap already correct** — `/fitness` dropped, `/personal` added automatically by `@astrojs/sitemap` (verified in `dist/sitemap-0.xml`). (2) **Add `/personal` to `lighthouserc.json`** URL list (the lighthouserc currently only sets `staticDistDir`, so it runs over all of `dist/` — confirm /personal is picked up). (3) Confirm the `/fitness` 301 behaves on the Vercel preview (the static build uses a meta-refresh fallback + Astro's redirect; Vercel applies the 301 from the redirects config). (4) Green-CTA change is CSS-only (no perf cost); favicon + OG are static assets.

## projects.astro

- **Single `<main>` (M5):** → `<div>` (this was the 5th flagged page; caught during verification). Tokenized H1/H2 (m7). **m17:** `aria-hidden` on the `↗` media glyph. Media cards keep hover (they are links).

## index.astro

- **m17:** `aria-hidden` on the "View Full Portfolio →" arrow. (The home `to-primary/5` section wash is faint-but-green and on-brand; left as-is — not a flagged defect, and index is outside the 5 surface specs. Lesson 2: no un-spec'd redesign.)

## Favicon (M12) + OG (m5)

- **`public/favicon.svg`:** stock Astro logo → **PM monogram** (Lora-family serif, Hunter Green `#1F3D2B` light / `#F1F5F2` dark, single-color per §7.1).
- **`scripts/gen_og.mjs` + `public/og-image.png`:** "Chief Strategy **&** Analytics Officer" → **"and"** (m5); OG regenerated (1200×630, editorial palette retained). Run `node scripts/gen_og.mjs` to reproduce.

---

## Escalation / deviation log (Lesson 2 — surfaced, not silently downgraded)

1. **CCL conflict (resolved toward Gate 1).** The experience content draft (Edit 3, written pre-Gate-1) kept "the career-connected learning work" as a named functional area. The Gate 1 decision is stricter: "Career-Connected Learning stays OFF the site — do not name it as a unit OR a function on any page." Gate 1 overrides the draft (per the prompt). I **removed the CCL clause** from the Innovation paragraph; the two remaining Innovation Hub artifacts (AI Governance Framework + CPIP) stand on their own. Result: zero "career-connected" references anywhere in `src/`. Flagging because it diverges from the draft's literal AFTER copy — the divergence is required by Gate 1, not a downgrade.

2. **No spec could not be built.** Every surface spec implemented as written. The only judgment calls were the two the specs explicitly delegated to the Engineer: redirect mechanism (chose Astro `redirects` config) and the personal-page Credentials block (folded per the Designer's stated recommendation since only CF-L3/CCFT verified).

3. **Out-of-scope items left untouched (correctly):** `common-app-research.md` "Founding Leader" quasi-title (M2) and its context-label em-dashes — the experience draft flagged this card as out of cycle ("flag for the card if opened"); I did not open it. The `context:` frontmatter em-dashes on the project cards are structural labels, not prose (uva draft noted these as acceptable/optional). The font-loading mechanism (Layout still uses the Google Fonts CDN `<link>`, not the Astro Font API) was left as-is — switching it is a non-trivial change outside this cycle's "families unchanged / tokenize execution" scope.

## Verification gate (Engineer) — all clear

- [x] `npm run build` GREEN (6 pages + /fitness redirect; lone WARN is the upstream `node_modules` Astro notice, not site code).
- [x] `bash scripts/verify_site.sh` PASSED (build · JSON-LD 6/6 valid · forbidden-token scan clean).
- [x] No broken internal links: nav 4 links, footer `/personal` resolves, `/fitness → /personal` 301 resolves, sitemap updated.
- [x] Every image via `astro:assets` (`<Image>`); no raw `<img>` for local images; widths/sizes/alt present.
- [x] Single `<main>` per page (M5 fixed on all five flagged pages: about, consulting, experience, projects + fitness retired; personal built clean).
- [x] ORCID verified + locked; Scholar omitted; GitHub excluded.
- [x] Voice self-scan clean (em-dash budget, no "X,not Y" family, no phantom negation, no banned filler, no equity language, FP&A precision, no Berlin leak).
- [x] Nothing pushed to main. Feature branch only.

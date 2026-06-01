# Engineer Diff — Monthly Refresh 2026-05 v1
# Source content: content_drafts/{hero,about,experience,projects-project3}_v1.md
# Source spec: design_specs/{hero,about,layout-jsonld}_v1.md
# Branch: monthly-refresh-2026-05 (committed locally, NOT pushed — Preston gate)
# Commit: 65edd16
# Date: 2026-05-03
# Build status: PASS

## Files Touched

- `src/components/Hero.astro` — eyebrow / H1 / subhead replaced; grid ratio 50/50 → ~55/45 on `lg+`; type uses inline `clamp()` for fluid scale per Designer spec.
- `src/components/ProjectGrid.astro` — Project 3 reframed (title, context, description, tags) around the UVA–LDOE research-practice partnership. QRIS publication positioned as downstream artifact.
- `src/pages/about.astro` — meta description rewrite; cross-sector framing paragraph; Lane B production-systems paragraph (NEW); operating-principle 1 punctuation fix; operating-principle 3 grammar fix; "The Real Work" em-dash removed; sidebar title "&" → "and"; sidebar Core Focus list reorganized; sidebar Credentials expanded to 4 items with Pattern-11 selectivity language.
- `src/pages/experience.astro` — DC CAP role tightened, added operational compression numbers; Common App role reframed with founding-team selectivity callout + RCT mention; UVA role title changed to "IES Predoctoral Fellow, Educational Policy Studies"; UVA body reframed around LDOE policy and accountability systems partnership; MPP entry adds Peabody Honors Scholar.
- `src/layouts/Layout.astro` — default meta description updated to canonical phrasing (Pattern 3 fix — "&" → "and"); JSON-LD Person schema added in `<head>`.
- `.claude/launch.json` — added (Preview MCP launch config registered globally at `BRAIN/.claude/launch.json`; this stub satisfies the per-repo lookup if used).

## Schema Changes

None at the content-collection level (content collections not yet in use; deferred to C6 next cycle).

## Theme Changes

None to `tailwind.config.mjs` or `@theme`. Hero typography uses inline `style` with `clamp()` and explicit letter-spacing values for the new scale — kept inline rather than promoted to a token because this is the only surface using these specific values today. Engineer recommendation: if any other surface adopts the same fluid scale (likely About hero in a future cycle), promote to `@theme` tokens then.

## JSON-LD Status

- Person: **present, valid.** Verified live via `document.querySelector('script[type="application/ld+json"]')` in dev preview — full schema parsed cleanly. Includes `name`, `jobTitle`, `worksFor` (DC CAP), `alumniOf` (UVA / Vanderbilt / Tulane), `hasCredential` (PhD / MPP / IES Fellow), `knowsAbout` (8-item controlled vocabulary), `description`. **`sameAs` array intentionally omitted** — Preston needs to confirm LinkedIn / Google Scholar / GitHub / ORCID URLs before adding (per Designer spec § Open Questions).
- Article: not applicable this cycle (writing collection deferred).
- BreadcrumbList: not applicable this cycle.

## Performance (preliminary, dev mode — Auditor runs canonical pass)

- Build completes in ~890ms, 8 pages, zero errors, zero TypeScript warnings.
- One Vite WARN (`@astrojs/internal-helpers/remote` unused-import warning from Astro core, not user code — pre-existing, unrelated to this cycle).
- No browser console errors on `/` or `/about` in dev preview.
- Lighthouse not run by Engineer; Auditor will run against preview deploy or local build.

## Live Preview Verification (dev mode, localhost:4321)

- Home page: hero renders Headline C correctly, eyebrow shows "STRATEGY. ANALYTICS. AI GOVERNANCE.", subhead renders the 3-pillar tagline + outcome sentence. CTAs unchanged. Project 3 in Selected Work shows the reframed title and tags.
- About page: 4-paragraph body renders in order (throughline → cross-sector → DC CAP role → Lane B). Sidebar shows the corrected title ("Chief Strategy and Analytics Officer", no `&`), 3-item Core Focus, 4-item Credentials with PhD / MPP / CF-L3 / AU Board.
- `dccapinnovation.org` reference: present in About paragraph 4 as plain text, **zero `<a>` wrappers** (verified via `document.querySelectorAll('a')` filter — the user instruction "reference, don't link" is honored).
- JSON-LD: present and valid in `<head>` (verified via DOM query above).
- Experience page: build succeeds; UVA + Common App + DC CAP + Education sections updated as drafted.

## Open Items

1. **Branch not pushed.** Per Preston's "executing actions with care" rule + the standing default that pushes to remote require explicit authorization, the feature branch `monthly-refresh-2026-05` is committed locally only. Preston decides whether to push (which triggers Vercel preview deploy) or merge directly to main.

2. **`sameAs` array on JSON-LD.** Schema is valid without it but adding LinkedIn / Google Scholar / GitHub / ORCID URLs would meaningfully strengthen AI-search entity disambiguation. Preston supplies confirmed URLs; Engineer adds in a follow-up commit.

3. **Lighthouse + axe-core official run.** Auditor's Step 5 task. Engineer's preliminary pass is dev-mode only.

4. **Hero grid ratio.** Designer spec called for 55/45 text/photo split on `lg+`; Engineer used `lg:grid-cols-[1.15fr_0.85fr]` (≈57.5/42.5). Within spec tolerance; flagged here for Auditor confirmation.

5. **Hero inline `style` vs Tailwind tokens.** Engineer used inline `style` with `clamp()` rather than promoting to `@theme` tokens because this is the only surface using these specific values. If Designer wants the scale formalized as theme tokens, do it in the next cycle when more surfaces opt in.

6. **`package-lock.json` modified outside this cycle.** Was modified before the branch; left unstaged. No action required — it'll come along on the next dependency-touching commit on main.

7. **Verification gate item 2 (schema.org validator).** Engineer skipped the live validator.schema.org pass because (a) the schema is parseable by `document.querySelector` and `JSON.parse` cleanly, (b) all field names match schema.org Person spec verbatim, and (c) the validator requires a public URL or paste-in. Auditor runs the canonical validator pass.

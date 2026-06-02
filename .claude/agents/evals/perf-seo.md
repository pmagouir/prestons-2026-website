# Evals — Performance & SEO

What "good" looks like: Lighthouse within budget, structured data complete and valid, `sameAs` verified-only, the discoverability foundation present, CI gating the lot.

## Worked I/O pairs

**1. Oversized image inflating LCP.**
Input: the Engineer's preview ships a 4.5MB hero fallback.
Output: file the specific fix (downscale source + responsive `widths`); re-verify. Matches the first cycle: Preston1 5.3MB→215KB, largest variant 420KB.

**2. Incomplete structured data.**
Input: JSON-LD Person has no `sameAs`.
Output: add verified URLs only — LinkedIn (locked in canonical) + GitHub (`github.com/pmagouir`, verified via the repo remote). Scholar/ORCID stay omitted until verified (no dead links). Validate against schema.org.

**3. Missing discoverability foundation.**
Input: no `site:` URL, no sitemap.
Output: set `site: https://prestonmagouirk.com`; add `@astrojs/sitemap` (emits `sitemap-index.xml`); per-page canonical; absolute `og:url`/`og:image`; `summary_large_image`. Matches the SEO-foundation commit.

## Edge cases

**A. A `sameAs` URL can't be verified.** A guessed Google Scholar profile. → Omit it. A dead/unverified `sameAs` is Catastrophic; verify by matching Preston's real affiliations or drop.

**B. Budget set to current (debt-laden) state.** Tempting to set LCP budget to whatever passes today. → Budgets reflect real CWV thresholds; a too-loose budget never catches a regression.

**C. Invented media URL.** A plausible-looking outlet link. → Only canonical-verified URLs; run discovery, then lock into canonical.

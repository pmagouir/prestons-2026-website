# Design Summary — 2026-06-12 cycle

**Author:** Designer | **For:** Site Lead → Gate 1 → Engineer.
**Cycle goal:** Move Brand & Voice 7.8 → ≥9.5 and support Performance & Accessibility 8.6 → 9.5 through craft, not redesign. The editorial system (Hunter Green `#1F3D2B`, Burgundy `#7A1E2C`, Light Neutral `#F5F5F4`, Lora + Inter) **stays**; this elevates its execution.

**Specs delivered (5 surfaces):**
- `cycles/design_specs/2026-06-12_navigation-global_v1.md` — the system foundation (type tokens, color ledger, focus, motion, nav, footer, favicon, OG, SkillsToolkit). Read first.
- `cycles/design_specs/2026-06-12_about_v1.md`
- `cycles/design_specs/2026-06-12_consulting_v1.md`
- `cycles/design_specs/2026-06-12_experience_v1.md`
- `cycles/design_specs/2026-06-12_personal-page_v1.md`

---

## 1. Net visual changes (what a reader will see differ)

1. **The palette becomes visible.** Primary CTAs change from near-black (`bg-neutral-900`) to **Hunter Green** with white labels (11.9:1). Burgundy becomes perceivable for the first time: as the **active-nav underline** and **one section rule per page**. The site stops reading as default-Tailwind-neutral and reads as the editorial identity the OG image promises. (Fixes M13 — the single largest move toward commissioned-grade.)
2. **Type becomes coherent.** A tokenized modular scale (`--text-display` through `--text-label`) replaces the ad-hoc inline `clamp()` and mismatched `lg:text-6xl/7xl` H1s. The hero stays the single largest element; page H1s standardize at 64px. Line-height and letter-spacing follow the inverse-to-size rule. (Fixes M7, m7.)
3. **Labels stop switching typefaces.** All uppercase tracked labels render in Inter regardless of HTML tag (some currently render in Lora by markup accident). (Fixes m6.)
4. **Nav drops to four links.** Fitness leaves the primary nav. (Task 1a.)
5. **A quiet `/personal` page appears,** reached from the footer; `/fitness` retires with a redirect. Personal/family/fitness content gets a cared-for home off the positioning real estate. (Tasks 1c, 1d.)
6. **CrossFit becomes one credential line** in the About sidebar, equal-weight with the academic credentials; the TFA award joins it. (Task 1b + content Edit 4.)
7. **Consulting reads as four curated offer bands,** not a wall of service cards: governance-first, one quiet buyer-register eyebrow per block, Results rendered as fragments with numbers-as-anchors, one green CTA. (Task 2.)
8. **Experience absorbs more content without crowding:** labeled-paragraph anchors, numbers-as-anchors, fixed white-space rhythm, and a quiet new Speaking block in the Education register. (Task 3.)
9. **Interactive feedback gets honest.** Hover states are removed from non-interactive images and chips (they implied clickability); every interactive element gets a visible brand `:focus-visible` ring; the footer hover that disappeared at 1.61:1 now brightens to 17.4:1. (Fixes M4, m10, m12, Pattern 19.)
10. **The stock Astro favicon is replaced** with a PM monogram (Hunter Green, light + dark variants); the OG image regenerates with "and" not "&". (Fixes M12, m5.)

No layout is torn down. Every page keeps its bones; the changes are tokens, color deployment, state discipline, and one new page.

---

## 2. Needs Preston's Gate 1 approval

### IA / structural decisions
1. **Fitness leaves the primary nav** (nav goes 5 → 4 links). *(global spec §5.1)*
2. **Create `/personal`, reached via a footer link** (not nav); fold the retired fitness content into it. *(personal spec §0)*
3. **Retire `/fitness` with a `/fitness → /personal` redirect** so no link 404s. *(personal spec §5; Engineer/Perf-SEO implements)*
4. **Family content home:** Designer recommends family paragraph + photos **stay on About**, with `/personal` as the fuller home. Alternative (relocate family fully to `/personal`) is spec'd if Preston prefers. *(about spec §0.1 / §3.3)*
5. **Consulting offer order: AI Governance first** (the 2026 front door). *(consulting spec §0)*
6. **Speaking block placement** after Education on Experience. *(experience spec §0)*

### Palette / type (the explicit "flag any change" gate)
7. **No new brand hue. No type-system change.** The palette and typefaces are unchanged. Two things to confirm:
   - **CTA color deployment:** primary CTAs move neutral-900 → Hunter Green. This is *deploying* the approved palette (M13), not a new color, but it's the most visible change — confirm.
   - **One functional neutral token** `--color-footer-link-hover` (`oklch(0.97 0.01 145)`, a near-white) for the dark-footer hover. Derived from the brand hue, no new brand color. Fallback is plain `white` if Preston wants zero new tokens. *(global spec §0, §3.4)*
   - **Type scale is a tokenization** of existing sizes; the only size that moves is page H1 (experience/projects/fitness down 8px, about up 4px) so the hero stays the single largest element. Confirm the standardization. *(global spec §2)*

### Content-dependent (flagged to Resume Consultant, surfaced here)
8. **$10M+ canonical registration** (consulting) — design carries the line; fallback copy spec'd. *(content draft, consulting spec §0.3)*
9. **SkillsToolkit / fitness-credential curation** (m11, m2) — drop "VS Code + Cursor", "Stata"; trim unverified CF-L2/L1/Nutrition/Programming. Design adapts to whatever the Consultant verifies. *(global spec §8, personal spec §3.4)*

---

## 3. Ordered craft fixes that move Brand & Voice 7.8 → ≥9.5

Ordered by impact-per-effort, per the baseline's "Brand & Voice → 9.5" path:

1. **Deploy the editorial palette (M13).** Hunter Green CTAs (white labels, 11.9:1); burgundy perceivable as active-nav underline + one section rule per page; kill the invisible `to-secondary/5` gradients. *Biggest single move from template- to commissioned-grade.* — global §3.3, consulting §5–6, about §5, experience §7, personal §7.
2. **Replace the stock favicon + fix the OG "and" (M12, m5).** Two tells that scream "template" in the browser tab and the share card. — global §7.
3. **Tokenize the type scale (M7, m7) and unify label typography (m6).** A true modular `clamp()` scale, applied uniformly; one typeface per visual role. — global §2, applied in every surface spec §2–3.
4. **State discipline:** brand `:focus-visible` on every interactive element (m12); remove hover from non-interactive images/chips (m10); fix footer hover 1.61:1 → 17.4:1 (M4/Pattern 19). — global §4, §6.1, §8.
5. **Consulting curation (M8/M9 layout):** four offer bands that read as a practice, not a menu — fragment Results with numbers-as-anchors, uniform buyer-register eyebrows, single green CTA. *Lifts the lowest lens.* — consulting §3–4.
6. **Density rhythm on Experience (Task 3):** labeled-paragraph anchors + fixed white-space scale + numbers-as-anchors keep the denser body unhurried. — experience §1, §4.
7. **Consolidation polish (Pattern 13):** CrossFit as one equal-weight credential line; family kept as the warm About close; a quiet `/personal` home; `aria-hidden` on every decorative glyph (m17). — about §3, personal §0–3.
8. **Consistency sweep (m18 badge naming, en-dashes m8, image treatment):** "Prior" → "Completed/Shipped" on project cards; en-dash ranges; consistent image rounding/shadow (shadow not border). — global §3.2 (border rule), consulting §5, m18 noted for ProjectGrid.

---

## 4. Accessibility support (8.6 → 9.5) — design-side fixes

| Issue | Fix | Spec |
|-------|-----|------|
| Footer hover 1.61:1 (M4/Pattern 19) | Default `neutral-400` (7.6:1); hover brightens to `#F1F5F2` (17.4:1) | global §6.1 |
| No brand `:focus-visible` (m12) | Global 2px primary ring, 2px offset; light ring on dark/green grounds | global §4.1 |
| No `scroll-padding-top` (m12) | `html { scroll-padding-top: 5rem }` clears sticky header | global §4.2 |
| Contrast pairs | Every pairing computed ≥7.2:1 (body uses neutral-600+; neutral-500 flagged "avoid for body") | every spec §color ledger |
| Reduced motion | Every animation has a named fallback; existing global block retained | global §4.3 + every spec §motion |
| Heading hierarchy | One H1/page; no skips; labels styled-not-promoted | every spec §accessibility |
| Glyph arrows read aloud (m17) | `aria-hidden` on decorative `→ ↗ ✓` | global §4.4 |
| Nav target size (m16) | `py-2` on desktop nav links | global §5.3 |
| Single `<main>` (M5 — code fix, confirmed in design) | All page wrappers are `<div>`/`<article>`, never a second `<main>` | global §9 + every spec |

The duplicate-`<main>` collapse (M5), Escape-to-close on the mobile menu (m15), and the `/fitness` redirect are **code tasks** noted for the Engineer; the design assumes a single `<main>` and clean redirect.

---

## 5. Notes for the Engineer / next cycle

- **Build order:** implement `navigation-global_v1.md` first (it defines the `@theme` tokens the other four specs reference). Then about, consulting, experience, personal in any order.
- **One spec risk to watch:** the type-scale standardization moves the page H1 down 8px on experience/projects/fitness. If any page's H1 feels under-scaled after build, the fix is to confirm `--text-h1` max (64px) vs the hero `--text-display` (76px) reads as a clear two-step hierarchy. Note any spec the Engineer cannot build as written for the next cycle's sharper spec (iteration cadence).
- **Perf-SEO handoffs:** `/fitness → /personal` redirect; add `/personal` to `lighthouserc.json`; drop `/fitness` from the sitemap; the green-CTA change is CSS-only (no perf cost); the favicon swap is a static asset.

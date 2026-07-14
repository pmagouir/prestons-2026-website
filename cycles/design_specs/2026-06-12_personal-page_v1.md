# Design Spec — Personal Page + Fitness Retirement (2026-06-12 cycle, v1)

**Surfaces:** NEW `src/pages/personal.astro`; RETIRE `src/pages/fitness.astro`; footer link addition (`Footer.astro`); redirect `/fitness → /personal` (Engineer/Perf-SEO).
**Cycle:** 2026-06-12 — personal-content consolidation (Pattern 13, **greenlit by Preston 2026-06-12**). Polish-and-refine.
**Author:** Designer | **Reads:** content draft `2026-06-12_about_v1.md` (CrossFit → sidebar), live `fitness.astro` (content to fold/retire), Pattern 13, canonical §Credentials (CrossFit framing), §Family, refactoring_ui.md, wcag_2.2_aa.md, exemplar_patterns.md.
**Depends on:** `2026-06-12_navigation-global_v1.md` (type tokens, color ledger, focus, motion, footer link). Tokens by name below.
**Status:** Spec — for Site Lead Gate 1, then Engineer.

This spec covers the four personal-content consolidation tasks: (1a) Fitness leaves the nav — handled in the global spec §5.1; (1b) CrossFit → About sidebar one-liner — handled in the about spec §3.1; **(1c) the quieter dedicated home for personal/family content — this spec; (1d) retire `fitness.astro`, fold keepable content, flag the redirect — this spec.**

---

## 0. THE IA RECOMMENDATION (Task 1c — the headline decision for Gate 1)

**Recommendation: a dedicated `/personal` page, reached via a quiet FOOTER link. Not a primary-nav item; not a footer-link-only with no page.**

**Why a page over a footer-link-only / no-page option:**
- Fitness content (CF-L3, CCFT, Games Quarterfinalist, the 12-Test Gauntlet tool, training philosophy) is substantive and Preston-authored. It deserves a home, not deletion. A footer link with no destination loses real content the consolidation was never meant to discard.
- A `/personal` page that the footer reaches keeps personal content **off the positioning real estate** (hero, About opening, primary nav) — the Pattern 13 intent — while preserving it one quiet click away. The executive audience (priorities 1–3) never has it pushed at them; the audience that wants it (priority 5, plus a curious recruiter) finds it via the footer.

**Why a dedicated page over folding everything into About:**
- About is already a dense narrative + sidebar. Absorbing the full fitness vertical (training philosophy, the Gauntlet tool, the credential ladder) would bloat the positioning page — the opposite of the consolidation goal.
- The split is clean: **About** carries the brief human close (family paragraph + photos) and the one-line CrossFit credential in the sidebar; **`/personal`** carries the fuller personal story (family + fitness + the Gauntlet tool). Two altitudes, no duplication.

**Why footer-reached over primary-nav:**
- A primary-nav "Personal" item would re-introduce the exact problem Pattern 13 removes (personal content competing in the 30-second scan). The footer is the correct quiet home — comprehensive but unobtrusive (exemplar_patterns: Linear "footer as sitemap"; the footer carries structure without shouting).

**One-line IA recommendation (for the final summary):** A dedicated `/personal` page reached by a quiet footer link — keeps personal/fitness content off the positioning real estate while giving it a cared-for home, the elegant option for an executive audience.

**Gate 1 needs Preston to approve:** (a) creating `/personal`, (b) reaching it via footer (not nav), (c) retiring `/fitness` with a redirect. All three are IA decisions.

---

## 1. What the Personal page contains (folding fitness.astro — Task 1d)

The current `fitness.astro` content is **kept and re-homed** here, lightly reframed from a single-vertical "Fitness" page to a broader "Personal" page. Mapping:

| Current fitness.astro element | Fate on /personal |
|-------------------------------|-------------------|
| H1 "Fitness" | → H1 "Personal" (broader frame) |
| Two George photos (`George_Carry`, `George_Backpack`) | **Keep** — family/personal images (Preston's son; permitted people-images) |
| Lead para "I bring the same systems thinking to fitness…" | **Keep** — reframed as the fitness sub-section lead |
| CrossFit-since-2018 / CF-L3 / CCFT / Games Quarterfinals para | **Keep** — the fuller version (the one-line sidebar credential on About points here implicitly) |
| Training-philosophy para (broad skills, assessments) | **Keep** |
| 12-Test Fitness Gauntlet tool tile (external link) | **Keep** — the one interactive element |
| Credentials list (CF-L3/CCFT, CF-L2, CF-L1, Nutrition 1, Programming) | **Keep, but curate** — see §3.4 (m2: CF-L2/L1/Nutrition/Programming untraceable; Resume Consultant trims) |
| "drop me a line" email CTA | **Keep** — the quiet reach-out close |
| (NEW, optional) family content if Preston relocates it from About | accommodated — see §3.1 |

**Nothing is discarded.** The fitness vertical becomes the "Movement / Fitness" section of a Personal page that opens with family. This is the "quieter dedicated home" the prompt asks for.

---

## 2. Information architecture

```
[NAV — 4 links, no "Personal" (footer-reached)]

H1: "Personal"                                ← --text-h1, Lora
intro dek: one warm sentence (Lora)           ← --text-dek

[OPTIONAL — if family relocated from About]
FAMILY
  H2: "Family"
  1 paragraph (the family sentence, expanded)
  3-photo grid (liza_preston, family_halloween, franklin)

MOVEMENT  (the re-homed fitness content)
  H2: "Movement"  (or "Fitness" — see §3.2)
  2 George photos (md:grid-cols-2)
  lead para (Lora dek) — systems-thinking-to-fitness
  para — CrossFit record (CF-L3, CCFT, Quarterfinals)
  para — training philosophy
  [12-Test Fitness Gauntlet tool tile → external]
  [Credentials sub-block — curated list]

reach-out: "drop me a line" (email)           ← --text-base

[FOOTER — now carries the "Personal" link]
```

**Single `<main>` (M5):** the new page uses Layout's one `<main>`; the page wrapper is a `<div class="mx-auto max-w-5xl …">` (matching the fitness page's current `max-w-5xl`), **not** a second `<main>` (the current `fitness.astro:9` has the duplicate-main bug; the new page must not repeat it). Sections inside are `<section>`; the Gauntlet tile is an `<a>` wrapping content (mdn_semantic_html).

---

## 3. Section specs

### 3.1 Family section (conditional — only if Preston relocates family from About)

Per the about spec §0.1 / §3.3, the **default recommendation keeps family on About.** If Preston instead relocates it here:
- H2 "Family" `--text-h2` Lora 600.
- One paragraph (`--text-body`, `neutral-700`, `max-w-prose`) — the expanded family sentence.
- 3-photo grid: `liza_preston`, `family_halloween`, `franklin`. `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`, each `h-48 w-full object-cover rounded-lg shadow-sm`, **no hover scale** (m10). Alt text carried from About.
- If family stays on About (default), this section is omitted and the page opens directly on Movement (with the George photos providing the personal/human image presence). **Both layouts spec'd; default = omit.**

### 3.2 Movement section (the re-homed fitness content)

**Section name:** Designer recommends **"Movement"** over "Fitness" — it reads broader and more in keeping with an executive personal page (and lets the section hold the training-philosophy framing, not just gym credentials). If Preston prefers "Fitness," either works; the H2 token is identical. **Flag the naming as a micro-choice (low stakes).**

- **H2** "Movement" `--text-h2` Lora 600 `neutral-900`, `mb-8`.
- **George photos:** two images `grid-cols-1 md:grid-cols-2 gap-6`, each `overflow-hidden rounded-lg shadow-md` (the current treatment), `object-cover`. **Remove the `hover:scale-105`** (m10 — non-interactive images). These are the page's primary people-images (Preston's son; permitted). Image treatment per refactoring_ui §10: real photography, consistent crop via `object-cover`, `rounded-lg`, shadow not border (§9 — pick one; shadow). Aspect ~landscape via the grid cell.
- **Lead para:** "I bring the same systems thinking to fitness…" — `--text-dek` Lora 500 `neutral-900` (the section's editorial lead line, matching the fitness page's current `font-heading text-2xl` treatment, now tokenized).
- **Body paras** (CrossFit record; training philosophy): `--text-body` Inter 400 `neutral-700` (9.5:1), `max-w-prose` (65ch — refactoring_ui §6; the current fitness page runs long lines at `max-w-5xl`), `space-y-8` between.
  - The CrossFit-record paragraph carries the canonical framing: CF-L3 + CCFT (2024, top ~1% of coaches), Games Quarterfinals (multiple years, top 5–10% Rx). Numbers/credentials may get light `<strong>` anchors ("CF-L3", "Quarterfinals") — sparingly.
  - The "Far from competitive in the sport, but…" line is Preston's approved deflation (verified clean in baseline) — keep, no design concern.

### 3.3 The 12-Test Fitness Gauntlet tool tile (the one interactive element)

- Kept as an external-link tile (`<a href="https://fitness-gauntlet-site.vercel.app/" target="_blank" rel="noopener noreferrer">`).
- **Current chrome:** `group block overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm hover:border-primary/50 hover:shadow-md`, with an inner `aspect-video bg-gradient-to-br from-primary/10 to-secondary/10`.
- **Refinements:**
  - This tile **is** interactive (a link), so a hover state is correct here (unlike the static images) — keep `hover:shadow-md` (refactoring_ui §9, elevation on hover) and `hover:border-primary/50` → strengthen to a clean `hover:border-primary` (the green border on hover signals the affordance; 10.9:1 non-text). The title's `group-hover:text-primary` stays (it's an interactive affordance).
  - **The inner gradient `from-primary/10 to-secondary/10`** is one of the few places a green→burgundy gradient is *visible and decorative-appropriate* (it's a tool "cover," not a content background). **Keep it** — it's a tasteful, contained use of both brand colors on a single tile, and it's the page's deliberate burgundy moment (the page's burgundy budget is spent here, well). Alternatively flatten to `from-primary/8 to-primary/12` if Preston wants burgundy fully reserved; Designer recommends keeping the two-color gradient on this one tile (it reads as crafted, not accidental).
  - Tile title "12-Test Fitness Gauntlet" `--text-h3` Lora 600 `neutral-900` → `group-hover:text-primary`. Sub-line "View the assessment tool" `--text-sm` `neutral-600`, with an `aria-hidden` `→`.
  - **Focus:** global `:focus-visible` — green ring on the white tile (10.9:1).
  - **Target size:** the whole tile is the click target (≫24px). Passes 2.5.8.
  - **Accessible name (wcag_2.2_aa §2.4.4):** the link's name should describe the destination — "12-Test Fitness Gauntlet — view the assessment tool" (the title + sub-line text inside the `<a>` supply this; the `→` is `aria-hidden`).

### 3.4 Credentials sub-block (curate — m2)

- Kept as the `rounded-2xl bg-neutral-50 p-8` block with a `--text-label` "Credentials" heading.
- **m2 (content):** CF-L2 (2019), CF-L1 (2017), Nutrition 1, Programming Certificate are **untraceable in canonical/BRAIN** (only CF-L3/CCFT, Quarterfinals, top 5–10% Rx, coached-since-2018, 12-test Gauntlet verify). **Resume Consultant trims** to the verified entries. Design impact: the list shortens to the verified credentials (likely 1–2 lines: "CF-L3 & CCFT (2024)"). A 1–2 item list in a `p-8` block looks sparse — **so fold the verified credential into the Movement prose instead of a standalone list block, OR keep a tight block with just the verified line(s).** Designer recommends **folding** (the CF-L3/CCFT line already lives in the CrossFit-record paragraph), and **dropping the standalone Credentials block** if it would hold only one verified line. Flag: depends on what the Consultant verifies.
- List items (if a block is kept): `--text-base` Inter 500 `neutral-700`, `space-y-2`, arrow markers `aria-hidden`.

### 3.5 Reach-out close

- "If you're into this stuff too, I'd love to connect — [drop me a line]." Kept. `--text-base` Inter 400 `neutral-600`; the email link is `primary` (10.9:1) with `underline underline-offset-2` (refactoring_ui §7, underline for links). Em-dash: the current copy uses one em-dash here; within budget for a short line, but the Consultant may restructure (content call).

---

## 4. Footer link to /personal (Task 1c — the access path)

(Coordinates with global spec §6.2.)

- The footer gains a small **site-links cluster** alongside the existing LinkedIn + Email. Add a **"Personal"** text link.
- **Treatment:** `--text-sm`, default `neutral-400` (7.6:1 on the dark footer), hover `#F1F5F2` (17.4:1) + underline — identical to the other footer links (the M4 hover fix applies). It sits quietly among the footer links, not promoted.
- **Placement:** in the footer's right-hand links group (with LinkedIn, Email) or as a small left-column link under the tagline. Designer recommends grouping it with LinkedIn + Email (one row of site/social links) so the footer reads as a tidy index (exemplar_patterns: footer as sitemap). 3.2.6 Consistent Help: it appears in the same footer location on every page.
- This is the **only** entry point to `/personal` in the UI. (Plus the `/fitness → /personal` redirect for old links.)

---

## 5. Retire fitness.astro + redirect (Task 1d — flag for Perf-SEO)

- **`src/pages/fitness.astro` is deleted** once its content is folded into `personal.astro` (§1 mapping). All keepable content is preserved on `/personal`; nothing is lost.
- **Redirect `/fitness → /personal`** so no existing link 404s. **This is an Engineer + Perf-SEO item** (not a design decision):
  - Astro static redirect (e.g., `redirects` config in `astro.config` or a `fitness.astro` that does a meta/301) — Engineer's mechanism choice.
  - **Flag for Perf-SEO:** update the sitemap (the dead `/fitness` route should drop from `sitemap-0.xml`; `/personal` should appear); confirm no internal links still point at `/fitness` (the nav drops it per global spec §5.1; check footer, body copy, JSON-LD — none currently reference `/fitness` except the nav). The baseline's M3 dead-link discipline applies: an internal route change must not leave a 404.
  - **Flag for Perf-SEO (CI):** add `/personal` to the `lighthouserc.json` URL list (per the baseline M7 fix that enumerates all routes) so the new page is gated.
- **JSON-LD:** no change needed (the Person schema doesn't reference `/fitness`). The new `/personal` page uses the standard Layout (inherits the Person schema). If Preston later wants the Gauntlet tool in `knowsAbout`/`sameAs`, that's a separate canonical decision — not this cycle.

---

## 6. Typography (this surface — tokenized scale)

| Element | Token | Font | Weight | Color | Line-height |
|---------|-------|------|--------|-------|-------------|
| Page H1 "Personal" | `--text-h1` (36→64px) | Lora | 600 | `neutral-900` (16.4:1) | 1.06 |
| Intro dek | `--text-dek` (20→26px) | Lora | 500 | `neutral-900` | 1.4 |
| Section H2 (Family / Movement) | `--text-h2` (28→40px) | Lora | 600 | `neutral-900` | 1.12 |
| Movement lead para | `--text-dek` | Lora | 500 | `neutral-900` | 1.4 |
| Body | `--text-body` (17→20px) | Inter | 400 | `neutral-700` (9.5:1) | 1.7 |
| Gauntlet tile title | `--text-h3` (22→26px) | Lora | 600 | `neutral-900` → `primary` on hover | 1.18 |
| Tile sub-line, captions | `--text-sm` (14px) | Inter | 400 | `neutral-600` (7.2:1) | 1.5 |
| Credentials label (if kept) | `--text-label` (12→13px) | Inter | 600 | `neutral-600` | 1.4 |
| Reach-out + email link | `--text-base` (16px) | Inter | 400 | `neutral-600` / `primary` link | 1.65 |

Fixes the fitness page's m7 H1 (`lg:text-7xl` → `--text-h1`) and the `font-heading text-2xl/3xl` lead (→ `--text-dek`).

---

## 7. Color (this surface — from the global ledger)

| Role | Token / OKLCH | Hex | Contrast | Use |
|------|---------------|-----|----------|-----|
| H1, H2, leads, tile title | `neutral-900` `oklch(0.21 0 0)` | `#171717` | 16.4:1 | headings, leads |
| Body | `neutral-700` `oklch(0.37 0 0)` | `#404040` | 9.5:1 | paragraphs |
| Captions, labels, reach-out | `neutral-600` `oklch(0.44 0 0)` | `#525252` | 7.2:1 | meta, labels |
| Links (email, tile hover) | `primary` `oklch(0.30 0.06 145)` | `#1F3D2B` | 10.9:1 / 11.9:1 white | links, hover affordance |
| Gauntlet tile gradient | `primary/10 → secondary/10` | — | decorative | the page's deliberate two-color moment (§3.3) |
| Tile / block surface | white / `neutral-50` | `#FFFFFF` / `#FAFAFA` | — | tile bg, credentials block |
| Footer "Personal" link | `neutral-400` → `#F1F5F2` hover | — | 7.6:1 → 17.4:1 | footer (dark ground) |

Burgundy appears once, in the Gauntlet tile gradient (decorative, contained) — the page's single deliberate burgundy use. Every text pairing ≥7.2:1.

---

## 8. Spacing & rhythm

- Container `max-w-5xl` (matches the retired fitness page; correct for a personal reading page). Page padding `px-6 py-16 lg:px-8 lg:py-24`.
- H1 `mb-8`; intro dek `mb-12`/`mb-16`.
- Section H2 `mb-8`; section-to-section `space-y-16` (mirrors the fitness page's `mb-16` rhythm).
- George photos `gap-6`; family photos (if present) `gap-4`.
- Body paras `space-y-8`, `max-w-prose`.
- Gauntlet tile `my-8`. Credentials block (if kept) `mt-16`. Reach-out `mt-12`.

---

## 9. Motion (this surface)

| Animation | Trigger | Property | Duration | Easing | reduced-motion |
|-----------|---------|----------|----------|--------|----------------|
| George / family photos | (none) | — | — | — | **hover scale REMOVED (m10)** |
| Gauntlet tile hover | hover | box-shadow + border-color | 200ms | ease-out | instant border/shadow, no tween |
| Email / link hover | hover | color | 150ms | ease-out | instant |

The tile is the only element with a hover state (it's the only interactive non-CTA element). Global reduced-motion block covers all.

---

## 10. Accessibility (this surface)

- **Headings:** one H1 ("Personal"). "Family" (if present) + "Movement" = H2. The Gauntlet tile title is inside an `<a>` — render it as a styled element, **not** a heading (it's a link label, not a document heading; making it `<h2>`/`<h3>` inside a link is awkward). If a heading is wanted for the tile, the section H2 "Movement" already covers it; the tile title can be a `<span class="text-h3">` or a `<p>`. Designer recommends `<p>`/`<span>` styled at `--text-h3`, not a heading tag, to keep the outline clean (one H2 per section).
- **Landmarks:** `<section>` per content area, inside the one `<main>`. Page wrapper `<div>` (M5 — the current fitness page's duplicate `<main>` must not be reproduced).
- **Images:** George photos + family photos (if present) have alt text (`George being carried`, `George with backpack`, etc.). Content images, non-empty alt (wcag_2.2_aa §1.1.1).
- **Gauntlet link:** external, `rel="noopener noreferrer"`, accessible name describes destination (§3.3). Arrow `aria-hidden`.
- **Focus:** global `:focus-visible` — green ring on the tile and email link (white/light grounds, 10.9:1+).
- **Contrast:** all ≥7.2:1 (§7). Passes 1.4.3 + 1.4.11.
- **Redirect (a11y/SEO):** the `/fitness → /personal` redirect must not create a focus or content trap; a clean 301/meta-refresh to the new URL (Engineer).

---

## 11. Responsive

- `< md`: George photos stack single column; family photos `sm:grid-cols-2` then single.
- `md+`: George photos two columns.
- `lg+`: `max-w-5xl` centered; body `max-w-prose`.
- 400% / 320px (§1.4.10): single column, `max-w-prose` body, the Gauntlet tile and credentials block full-width, no horizontal scroll.

---

## 12. Verification gate (this surface)

- [x] IA recommendation made and justified: dedicated `/personal`, footer-reached (§0).
- [x] All keepable fitness.astro content folded; nothing discarded (§1).
- [x] Fitness route retirement + `/fitness → /personal` redirect flagged for Engineer/Perf-SEO, incl. sitemap + CI URL list (§5).
- [x] CrossFit credential cross-reference: one-liner on About sidebar (about spec §3.1); fuller version here (§3.2).
- [x] Family photos = only people-images (plus George); no scholars (§3.1, §3.2).
- [x] Tokenized type scale; fitness page m7 H1 fixed (§6).
- [x] Every color pairing OKLCH + computed contrast, all ≥7.2:1 (§7).
- [x] Non-interactive image hover removed (m10); tile hover kept (interactive) with reduced-motion fallback (§9).
- [x] Single `<main>` (no duplicate-main repeat of fitness.astro bug) (§2, §10).
- [x] Page creation + footer access + route retirement flagged for Gate 1 (§0).

# Design Spec — Navigation + Global System (2026-06-12 cycle, v1)

**Surfaces:** `src/styles/global.css` (the `@theme` token layer), `src/components/Navigation.astro`, `src/components/Footer.astro`, `src/layouts/Layout.astro` (focus/scroll behavior only).
**Cycle:** 2026-06-12 — polish-and-refine. Editorial system (Hunter Green / Burgundy / Light Neutral, Lora + Inter) **stays**; this elevates its execution.
**Author:** Designer | **Reads:** baseline audit (M4, M12, M13 palette, m6, m7, m10, m12, m16, m17, Pattern 19), refactoring_ui.md, wcag_2.2_aa.md, tailwind4_system.md, mdn_semantic_html.md.
**Status:** Spec — for Site Lead Gate 1, then Engineer.

This file is the **system foundation**. The four surface specs (about, consulting, experience, personal) reference the tokens, the type scale, the focus rule, and the motion rule defined here. The Engineer implements this file first; the surface specs assume its tokens exist. **All contrast ratios in this spec are computed from hex luminance per the WCAG 2.1/2.2 relative-luminance formula (verified, not estimated).**

---

## 0. What needs Preston's Gate 1 approval (flag at top)

Nothing here changes the palette or the typefaces. Two items are **IA / system decisions** that need his sign-off because they alter what a reader sees in the 30-second scan:

1. **Fitness leaves the primary nav.** The nav drops from five links to four (About, Experience, Portfolio, Consulting). Personal content moves off the top bar. (Task 1a.) This is an IA decision, not a palette/type change.
2. **The color system gains documented usage rules and one new neutral token** (`--color-footer-link-hover` for the dark-ground footer hover). It is derived from the existing palette (no new hue), but Preston asked that any palette change be flagged. **Net: no new brand hue. One functional neutral added.** See §3.4. If Preston wants zero new tokens, the footer hover falls back to plain `white`, which also passes; the token just lets us use a marginally softer off-white.

No other palette or type-scale change is proposed. The H1 scale (§2) is a **tokenization** of sizes already on the site, not a new scale.

---

## 1. The problem this spec fixes (from the baseline)

The audit scored Brand & Voice 7.8 and named the system-level tells that read "template-grade rather than commissioned-grade":

- **M13 — Editorial palette underexpressed.** Every CTA is `bg-neutral-900` (near-black). Burgundy appears only at 5–10% alpha (never perceivable). Green survives only as eyebrow text and arrow glyphs. The site reads default-Tailwind-neutral.
- **M7/m7 — H1 scale untokenized.** Hero uses inline `clamp()`; about caps at 6xl; experience/projects/fitness at 7xl; consulting jumps 4xl→7xl. No shared scale.
- **m6 — Label typography splits by markup accident.** Uppercase tracked labels render in Lora when tagged `h2`, in Inter when tagged `<p>`. Same visual role, two typefaces.
- **M4 / Pattern 19 — Footer hover contrast 1.5:1.** `hover:text-primary` (Hunter Green) on the near-black footer; the link visually disappears. (Confirmed by computation: green `#1F3D2B` on `#0F0F0F` = **1.61:1**.)
- **m12 — No brand `:focus-visible`, no `scroll-padding-top`.** UA defaults pass but the node's own standard is unimplemented.
- **m10 — Hover motion on non-interactive elements** implies clickability (family photos, hero portrait, skill chips).
- **m17 — Glyph arrows are read by screen readers** as content.
- **M12 — Astro default favicon.**

The fix is a disciplined token layer plus a small set of rules applied uniformly. Editorial restraint is the house style (refactoring_ui §4); this spec adds **deliberate** color, not more color.

---

## 2. Type scale (the modular scale, tokenized)

**Decision: tokenize a true modular scale and apply it uniformly.** This is a tokenization of the sizes the site already uses, surfaced as named tokens so no page invents an arbitrary size again (fixes M7, m7). No new visual sizes are introduced; the largest H1 stays where the experience/projects pages already sit.

The scale is a **non-linear modular progression** (refactoring_ui §7: "Skip the in-between values"), roughly a 1.2 (minor third) ratio at the display end, fluid via `clamp()`. Define these in `@theme` as `--text-*` tokens (tailwind4_system §1, §2 — generates `text-*` font-size utilities).

| Token | Role | `clamp()` (min, fluid, max) | min→max px | line-height | letter-spacing |
|-------|------|------------------------------|------------|-------------|----------------|
| `--text-display` | Hero H1 only | `clamp(2.5rem, 1.5rem + 3.4vw, 4.75rem)` | 40 → 76 | 1.03 | -0.025em |
| `--text-h1` | Page H1 (about, experience, consulting, personal) | `clamp(2.25rem, 1.6rem + 2.6vw, 4rem)` | 36 → 64 | 1.06 | -0.022em |
| `--text-h2` | Section headings | `clamp(1.75rem, 1.45rem + 1.3vw, 2.5rem)` | 28 → 40 | 1.12 | -0.015em |
| `--text-h3` | Sub-section / role / card titles | `clamp(1.375rem, 1.25rem + 0.5vw, 1.625rem)` | 22 → 26 | 1.18 | -0.01em |
| `--text-dek` | Lead paragraph / subhead (Lora) | `clamp(1.25rem, 1.1rem + 0.6vw, 1.625rem)` | 20 → 26 | 1.4 | -0.005em |
| `--text-lead` | Intro body (consulting hero, etc.) | `clamp(1.0625rem, 1rem + 0.4vw, 1.375rem)` | 17 → 22 | 1.55 | 0 |
| `--text-body` | Body paragraph | `clamp(1.0625rem, 1rem + 0.3vw, 1.25rem)` | 17 → 20 | 1.7 | 0 |
| `--text-base` | Dense body (timeline bodies, lists) | `1rem` (16px, static) | 16 | 1.65 | 0 |
| `--text-sm` | Meta, captions, dates | `0.875rem` (14px) | 14 | 1.5 | 0 |
| `--text-label` | Eyebrow / uppercase label | `clamp(0.75rem, 0.72rem + 0.1vw, 0.8125rem)` | 12 → 13 | 1.4 | 0.18em |

**Rationale for each non-obvious value:**
- **Line-height inverse to size** (refactoring_ui §7): display/H1 at 1.03–1.06, body at 1.7, eyebrow at 1.4. The previous site mixed `leading-[1.05]`, `leading-[1.1]`, `leading-snug` inconsistently; this normalizes them.
- **Letter-spacing inverse to size** (refactoring_ui §7): display at -0.025em (tightens large Lora so it reads as one mass), eyebrow at 0.18em (opens the small uppercase so it reads as a label).
- **`--text-display` = the current hero value verbatim** (`clamp(2.5rem, 1.5rem + 3.4vw, 4.75rem)`). The hero keeps its exact size; it just stops being an inline style.
- **`--text-h1` max = 4rem (64px)**, slightly under display. The current experience/projects/fitness H1 sits at `lg:text-7xl` (72px); about at `lg:text-6xl` (60px); consulting at `lg:text-7xl`. **Resolution: page H1 standardizes at 64px max** (between the two), so the hero stays the single largest element on the site (it should be — refactoring_ui §5, one emphasis per scope). This is the only size that *moves*: experience/projects/fitness H1 come down 8px at the top end, about goes up 4px. Net effect is coherence; no page loses legibility.

**Heading font:** Lora 600 for `--text-display`, `--text-h1`, `--text-h2`, `--text-h3`, and `--text-dek` (Lora is already the heading family in `@layer base`). Body tokens use Inter.

**Weights (refactoring_ui §7, "bold is plenty"):** 400 body, 500 medium (sidebar items, nav), 600 semibold (headings, CTAs, strong), 700 (eyebrow labels, name-logo). No 800/900. This matches the four weights already loaded (400/500/600/700).

---

## 3. Color system (deploy the editorial palette deliberately — M13)

### 3.1 Brand tokens (unchanged hues, OKLCH, verified)

These three are already declared. tailwind4_system §3 says use OKLCH; the current `global.css` uses hex. **Convert to OKLCH** (same color, more legible accessibility math):

| Token | OKLCH | Hex (current) | Hue |
|-------|-------|---------------|-----|
| `--color-primary` | `oklch(0.30 0.06 145)` | `#1F3D2B` | Hunter Green |
| `--color-secondary` | `oklch(0.36 0.13 18)` | `#7A1E2C` | Burgundy |
| `--color-background` | `oklch(0.96 0.003 90)` | `#F5F5F4` | Light neutral |

### 3.2 Contrast ledger — every pairing this cycle uses, verified ≥ AA

All ratios **computed** from hex luminance per the WCAG relative-luminance formula (the Designer ran the computation; see the cycle verification note). Background is `#F5F5F4` unless stated. Neutral hexes are Tailwind defaults (retained per tailwind4_system §4).

| Foreground | OKLCH | Hex | Background | Contrast | WCAG 2.2 AA | Use |
|-----------|-------|-----|-----------|----------|-------------|-----|
| `neutral-900` | `oklch(0.21 0 0)` | `#171717` | `#F5F5F4` | **16.4:1** | AAA | H1, H2, H3, strong, primary body emphasis |
| `neutral-800` | `oklch(0.27 0 0)` | `#262626` | `#F5F5F4` | **13.9:1** | AAA | name-logo, sidebar credential items |
| `neutral-700` | `oklch(0.37 0 0)` | `#404040` | `#F5F5F4` | **9.5:1** | AAA | body paragraphs |
| `neutral-600` | `oklch(0.44 0 0)` | `#525252` | `#F5F5F4` | **7.2:1** | AAA | secondary body, sidebar labels, meta |
| `neutral-500` | `oklch(0.55 0 0)` | `#737373` | `#F5F5F4` | **4.35:1** | **AA large/non-text only — FAILS 4.5:1 body** | tertiary/decorative only; **never for body text** (refactoring_ui §5) |
| `primary` | `oklch(0.30 0.06 145)` | `#1F3D2B` | `#F5F5F4` | **10.9:1** | AAA | links, eyebrow, accents |
| `primary` | `#1F3D2B` | — | `white #FFFFFF` | **11.9:1** | AAA | link/eyebrow on white card surfaces |
| `secondary` | `oklch(0.36 0.13 18)` | `#7A1E2C` | `#F5F5F4` | **9.4:1** | AAA | burgundy accent text (active nav, see §3.3) |
| `secondary` | `#7A1E2C` | — | `white #FFFFFF` | **10.3:1** | AAA | burgundy on white nav bar |
| `white` | `#FFFFFF` | — | `primary #1F3D2B` | **11.9:1** | AAA | **green CTA label** (white text on Hunter Green button) |
| `white` | `#FFFFFF` | — | `secondary #7A1E2C` | **10.3:1** | AAA | white on burgundy (if used for a badge) |
| `white` | `#FFFFFF` | — | CTA hover `#264A34` | **9.95:1** | AAA | CTA label stays legible on hover ground |
| `neutral-400` | `oklch(0.63 0 0)` | `#A3A3A3` | footer `#0F0F0F` | **7.6:1** | AAA | footer body + link default (dark ground) |
| `--color-footer-link-hover` | `oklch(0.97 0.01 145)` | `#F1F5F2` | footer `#0F0F0F` | **17.4:1** | AAA | **footer link hover (M4 FIX)** |

**Non-text contrast (WCAG 1.4.11, ≥3:1):**

| Element | Foreground | Background | Contrast | Pass |
|---------|-----------|-----------|----------|------|
| Focus ring (`primary`) | `#1F3D2B` | `#F5F5F4` | 10.9:1 | ✓ |
| Focus ring (`primary`) | `#1F3D2B` | white | 11.9:1 | ✓ |
| Focus ring (light, `background`) | `#F5F5F4` | green CTA `#1F3D2B` | 10.9:1 | ✓ |
| Focus ring (light, `background`) | `#F5F5F4` | footer `#0F0F0F` | ~17:1 | ✓ |
| Timeline node dot (`primary`) | `#1F3D2B` | white border on `#F5F5F4` | 10.9:1 | ✓ |
| Active-nav burgundy underline (`secondary`) | `#7A1E2C` | white nav bar | 10.3:1 | ✓ |
| Card border `neutral-300` | `#D4D4D4` | white | ~1.3:1 | **decorative, exempt — see note** |

**Reference cross-check:** the regression bug (M4) computes to **1.61:1** (old footer hover, green on `#0F0F0F`), confirming the audit's ~1.5:1 estimate and the need for the fix. `neutral-500` at 4.35:1 sits **below the 4.5:1 body floor** — the spec bans it for body text (it passes only as large-text/non-text). All body text in every surface spec uses `neutral-600` (7.2:1) or darker.

**Card-border note (wcag_2.2_aa §1.4.11):** `border-neutral-200`/`300` on cards is **decorative**, not an actionable control boundary, so 1.4.11's 3:1 does not apply (it applies to "UI components" that convey state/action). The card's *actionability* is carried by its CTA button (which passes) and its hover shadow, not by the border. **Rule for the Engineer:** any border that is the *only* indicator of an interactive control must be `neutral-400` or stronger (≥3:1). Borders that are purely visual separation may stay light. The consulting engagement-model cards and project cards are "decorative border + actionable/labeled child," so their light borders stay.

### 3.3 Where each color is allowed to appear (the usage discipline — M13)

This is the heart of the M13 fix. The palette is deployed by **role**, with documented ratios. Restraint is the rule (refactoring_ui §8: "use color to drive attention, not decorate").

**Hunter Green (`primary`) — the workhorse accent. Earns its place at:**
1. **Primary CTAs.** Background `primary`, label `white` (**11.9:1**). This **replaces `bg-neutral-900`** on every primary button (Hero "View Selected Work", consulting "Schedule time to meet" ×2, ProjectGrid main link). Hover: `oklch(0.34 0.06 145)` (one step lighter, `#264A34`), label stays white (**9.95:1**). This is the single biggest visible change and the one that moves the site from "default-Tailwind" to "editorial." Light comes from above (refactoring_ui §9): rest `shadow-sm`, hover `shadow-md`.
2. **Text links** in body copy and footer (default state).
3. **Eyebrow / uppercase labels** (already green; kept).
4. **Active-nav indicator** — see burgundy below; green is the *hover* color on nav, burgundy is the *active* color.
5. **Icon accents** (checkmark backgrounds at `primary/10`, arrow glyphs, timeline node dots).
6. **Focus ring** (§4).

**Burgundy (`secondary`) — the deliberate, rare accent. Currently invisible (5–10% alpha). Give it three perceivable jobs and no more (refactoring_ui §8, "one emphasis per scope"):**
1. **Active navigation state.** The current page's nav link gets a **2px burgundy underline** (`border-b-2 border-secondary`, ~6px offset via `pb-1`) plus `text-secondary` and `font-semibold`. This is the one place burgundy does primary signaling work, and it distinguishes "where am I" from "what's clickable" (green hover). Burgundy on the white nav bar = **10.3:1**.
   - **Why burgundy for active, green for hover:** two interactive signals must be distinguishable. Green is the affordance color (hover/link); burgundy is the location color (you-are-here). This also finally makes burgundy perceivable, per M13.
2. **Section divider rule** where a section break is editorially significant. Used sparingly: at most one burgundy rule per page (e.g., consulting "How We Work Together" top border — **raise from `border-secondary/10` to a 1px `secondary/30` hairline** so it's perceptible). `secondary/30` over `#F5F5F4` is a faint warm rule, decorative, exempt from text contrast.
3. **Pull-quote / blockquote left border** if any surface uses a blockquote (none this cycle; reserved). Plus the one contained two-color gradient on the Personal page's Gauntlet tool tile (personal spec §3.3).

**Burgundy is NOT used for:** body text, CTA backgrounds, more than one divider per page, gradient washes you can't see. **Kill the invisible `to-secondary/5` / `from-secondary/5` gradients** on SkillsToolkit and replace with a flat surface + one perceptible rule (§8).

**Documented usage ratio (M13 asks for this):** on any given page, target **green : burgundy ≈ 6 : 1** by count of colored elements. Burgundy appears once or twice (active nav + at most one rule). Everything else colored is green; everything else is neutral. If burgundy would appear three times on one page, two of those become green or neutral.

### 3.4 New token (the one functional addition — flag for Preston)

`--color-footer-link-hover: oklch(0.97 0.01 145)` (≈ `#F1F5F2`, a near-white with a whisper of green). Used **only** for footer link hover on the dark ground (**17.4:1**). This is the M4 fix. If Preston prefers zero new tokens, fall back to `white` (≈18:1, also AAA) — the off-white is marginally softer and ties to the brand hue. **Designer recommends the token; flag as Preston's call.**

---

## 4. Focus, scroll, and motion (global rules — m12, m10, Pattern 19, reduced-motion)

### 4.1 `:focus-visible` (m12, wcag_2.2_aa §2.4.7)

Apply the node's documented brand focus style globally in `global.css`:

- **Rule:** `*:focus-visible` → `outline: 2px solid var(--color-primary); outline-offset: 2px; border-radius: 2px;`
- **On dark/green grounds** (footer, the green CTA itself): a green ring on a green CTA would be invisible. **Rule:** interactive elements with a `primary` or dark background get `outline-color: var(--color-background)` (light ring, `#F5F5F4`) instead. The Engineer keys this off an `.on-dark` utility or per-component override. Light ring on green CTA = **10.9:1**; light ring on footer `#0F0F0F` ≈ 17:1.
- Use `:focus-visible`, never `:focus` (keyboard users get the ring; mouse users don't). Never `outline: none` without this replacement.
- This **replaces** the current per-CTA `focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2` pattern with one global rule, so every interactive element (not just CTAs) gets a visible focus state. Nav links, footer links, body links, the mobile menu button, and external links all inherit it.

### 4.2 `scroll-padding-top` (m12, wcag_2.2_aa §2.4.11)

`html { scroll-padding-top: 5rem; }` so the sticky header (`top-0`, ~72px tall) never obscures a focused element scrolled into view. 5rem = 80px clears the header.

### 4.3 Motion rules (m10, refactoring_ui §"Motion", reduced-motion)

**Global reduced-motion fallback already exists** in `global.css` (lines 34–43): it zeroes animation/transition durations and forces `scroll-behavior: auto` under `prefers-reduced-motion: reduce`. **Keep it.** Every motion below is covered by it; each spec also names its specific fallback.

| Motion | Where | Property | Duration | Easing | reduced-motion fallback |
|--------|-------|----------|----------|--------|------------------------|
| CTA hover | all primary buttons | background-color + box-shadow | 150ms | ease-out | instant color change, no transition |
| Link/nav hover color | nav, footer, body links | color | 150ms | ease-out | instant color change |
| Nav active underline | nav | (static, no animation) | — | — | n/a |
| Mobile hamburger → X | nav button | transform + opacity | 300ms | ease | **disable**: icon swaps state with no tween (still functional) |
| Card hover shadow | interactive cards / tiles only | box-shadow | 200ms | ease-out | no shadow transition; resting shadow only |

**m10 — remove hover motion from non-interactive elements.** Hover *scale* implies clickability. **Rule for every surface spec:** hover transforms (scale, translate) are reserved for genuinely interactive elements (links, buttons, clickable tiles). Non-interactive images and static chips get **no hover state**. Specifically resolved in the surface specs: hero portrait (Hero.astro:54) drops `hover:scale-105`; family photos (about) drop `hover:scale-[1.02]`; skill chips (SkillsToolkit) drop `hover:bg-primary/10` + `cursor-default`; fitness images move to the personal page and drop hover scale there too. The Personal-page Gauntlet tile **keeps** its hover (it is a link).

### 4.4 Glyph arrows (m17, mdn_semantic_html ARIA rule 4)

Every decorative `→` / `↗` / checkmark used purely visually is wrapped `aria-hidden="true"` (or moved to CSS `::before`). This is a code task for the Engineer; the design intent is: **arrows are ornament, not content.** Where an arrow sits inside a link whose text already names the destination (e.g., "View Full Portfolio →"), the arrow is `aria-hidden` and the link text carries the accessible name (wcag_2.2_aa §2.4.4).

---

## 5. Navigation component spec (`Navigation.astro`)

### 5.1 Structure change (Task 1a — Fitness leaves the nav)

- **`navLinks` becomes four entries:** About, Experience, Portfolio (`/projects`), Consulting. **Remove the Fitness entry.** (Personal content is reached from the footer per the personal-page spec; it does not sit in the primary nav.)
- Name-logo ("Preston Magouirk") on the left stays as the home affordance.
- This is the IA decision flagged for Gate 1 (§0).

### 5.2 Type + color

| Element | Token | Weight | Color (default) | Color (hover) | Color (active) |
|---------|-------|--------|-----------------|---------------|----------------|
| Name-logo | `--text-lead` (≈18–20px) | 700 | `neutral-900` (16.4:1) | `primary` (11.9:1 on white) | n/a |
| Nav link | `--text-sm` (14px) | 500 default / 600 active | `neutral-700` (9.5:1 on white) | `primary` (11.9:1) | `secondary` (10.3:1) + 2px burgundy underline |

- Tracking on name-logo: keep the current `0.12em` (it reads as a wordmark). Nav links: 0 tracking.
- **Active indicator (m6 / M13):** current page link = `text-secondary font-semibold` + `border-b-2 border-secondary` with ~6px offset (`pb-1` so the underline clears the text). This makes burgundy perceivable and distinguishes location from affordance. **Add `aria-current="page"`** to the active link (mdn_semantic_html — screen readers announce "current page"; style with `[aria-current="page"]`).

### 5.3 Target size + hit area (m16, wcag_2.2_aa §2.5.8)

- Desktop nav links get **`py-2`** (adds vertical padding so the hit area is ≥24px tall unambiguously, not relying on the gap-8 spacing exception). Horizontal `gap-8` kept.
- Mobile hamburger button is already ~32px (passes 2.5.8). Keep.
- Mobile menu links already have `py-3` (≈44px rows). Keep; apply the same active/hover token rules.

### 5.4 Header surface

- `sticky top-0 z-50 bg-white shadow-sm` — **keep.** White bar, subtle shadow, sits above content. Refactoring_ui §9 (light from above): the `shadow-sm` is correct for a sticky bar at rest.
- One refinement: the shadow should be a hairline-plus-soft-shadow, not a hard line. Keep `shadow-sm`; the Engineer may pair with no hard border so the bar reads as floating, not boxed.

### 5.5 Accessibility (Navigation)

- Landmark: the `<header>` + `<nav>` structure is correct (mdn_semantic_html). One `<nav>` for the primary nav.
- Mobile menu button: `aria-label="Toggle menu"` + `aria-expanded` already present and toggled (kept). **Add `aria-controls="mobile-menu"`** (mdn_semantic_html disclosure pattern).
- **Escape-to-close + focus return (m15):** code task for the Engineer (the design assumes the disclosure closes on Escape and returns focus to the toggle). Named here so it isn't dropped; not a design decision.
- Focus order: name-logo → nav links L-to-R → (mobile: hamburger). Matches visual order (wcag_2.2_aa §2.4.3).

---

## 6. Footer component spec (`Footer.astro`)

### 6.1 The M4 fix (Pattern 19 — state-level contrast)

- **Current bug:** `hover:text-primary` (Hunter Green `#1F3D2B`) on `bg-neutral-900/95` (≈`#0F0F0F`) computes to **1.61:1** — the link disappears on hover.
- **Fix:** footer link **default** = `neutral-400` (`#A3A3A3`, **7.6:1** on `#0F0F0F` ✓ AAA). **Hover** = `--color-footer-link-hover` (`#F1F5F2`, **17.4:1**) — link *brightens* toward white on hover, the correct direction on a dark ground (wcag_2.2_aa "Footer text too light" row). Underline appears on hover for affordance clarity (refactoring_ui §7, underline for links).
- Apply to **both** footer links (LinkedIn, Email) and the new **Personal** link (personal spec §4).

### 6.2 Footer content (supports Personal-page IA — see personal spec)

The personal page is reached via the footer (the recommended IA). The footer gains a **"Personal" text link** in the existing site/social links cluster, alongside LinkedIn + Email. Exact treatment in the personal-page spec §4. The footer remains comprehensive but quiet (exemplar_patterns: "Footer carries comprehensive structure"; Linear "footer as sitemap").

- Footer surface: `bg-neutral-900/95` kept (the near-black editorial footer is correct). Body copy `neutral-400` (7.6:1).
- 3.2.6 Consistent Help (wcag_2.2_aa): LinkedIn + Email + Personal stay in the same footer location on every page. Keep.

### 6.3 Footer type

| Element | Token | Weight | Color | On |
|---------|-------|--------|-------|-----|
| Tagline + copyright | `--text-sm` | 400 | `neutral-400` (7.6:1) | `#0F0F0F` |
| Footer link (default) | `--text-sm` | 500 | `neutral-400` (7.6:1) | `#0F0F0F` |
| Footer link (hover) | `--text-sm` | 500 | `#F1F5F2` (17.4:1) + underline | `#0F0F0F` |

(No light footer section labels needed; if added later, use `neutral-400` not `neutral-500` on the dark ground.)

---

## 7. Favicon (M12) + OG image (m5) — Designer deliverables

### 7.1 Favicon spec

Replace the stock Astro favicon with a **PM monogram** mark.

- **Form:** a "P" with an embedded/overlapping "M", or a small-caps "pm" ligature, set in **Lora 600** (ties to the heading face). Single glyph, generous margin (refactoring_ui §10, don't crop tight).
- **Light variant:** Hunter Green `#1F3D2B` mark on transparent / `#F5F5F4` ground.
- **Dark variant:** `#F1F5F2` mark on `#1F3D2B` ground (for dark-mode browser tabs / pinned tabs).
- **Format:** SVG primary (`favicon.svg`), plus a 32×32 and 180×180 (apple-touch) PNG fallback.
- **No burgundy in the favicon** — at 16px, burgundy-on-green is muddy; keep it single-color for legibility.
- Engineer generates from this spec; the monogram is simple enough to render as inline SVG paths.

### 7.2 OG image (m5)

- Current OG renders "Chief Strategy **&** Analytics Officer"; canonical and site copy use "**and**." **Regenerate** via `scripts/gen_og.mjs` with "Chief Strategy and Analytics Officer."
- While regenerating: ensure the OG uses the editorial palette (Hunter Green ground or accent, Lora display type) so the share card matches the site's new commissioned-grade execution. Keep it type-led (exemplar_patterns: Anthropic restraint). Owner: Designer specifies, Engineer runs the script.

---

## 8. SkillsToolkit refinements (m10, m11, M13 — palette)

(SkillsToolkit renders on home + experience; folded here as a global component.)

- **m10:** skill chips currently `hover:bg-primary/10 hover:text-primary cursor-default`. **Remove the hover state and `cursor-default`** — chips are not interactive; a hover recolor implies they are. Chips render static: `bg-neutral-100 text-neutral-700` (7.2:1+).
- **M13 (gradient):** the section wrapper `bg-gradient-to-b from-background to-secondary/5` is an invisible burgundy wash. **Replace** with a flat `bg-background` and a single perceptible top rule — Designer recommends the page's one burgundy hairline here (`border-t border-secondary/30`) since this is a natural section break and the home page's burgundy budget allows it. (If the home hero already spends burgundy elsewhere, use `border-neutral-200`.)
- **m11 (curation):** "VS Code + Cursor" reads junior on an executive register; "Stata" is untraceable in BRAIN. **Resume Consultant + Designer call:** drop "VS Code + Cursor" and "Stata"; keep systems-level entries. (Content edit — flagged to Resume Consultant; design impact is one fewer chip in two categories, no layout change.)
- Card ring `ring-1 ring-neutral-200` at rest; **drop the `hover:ring-primary/20`** (m10 consistency — these cards are not links). Cards are static reference content.

---

## 9. Single-`<main>` assumption (Engineer note, not a design decision)

The baseline found duplicate `<main>` on five pages (M5): pages render `<main>` *inside* Layout's `<main id="main-content">`. **This spec and all four surface specs assume exactly one `<main>` per page, supplied by `Layout.astro`.** Every surface's page-level wrapper is a `<div>` or `<article>`, never a second `<main>` (mdn_semantic_html "one `<main>` per page"). The Engineer collapses the inner `<main>` to `<div>`/`<article>`. Confirmed: the layouts in all surface specs never introduce a second `<main>`.

---

## 10. Verification gate (this spec)

- [x] Every color in OKLCH with hex cross-reference (§3.1, §3.2).
- [x] Every text/bg pairing **computed** and ≥4.5:1 body / ≥3:1 large (§3.2 ledger). Lowest body pairing used: `neutral-600` at 7.2:1 (AAA). `neutral-500` (4.35:1) computed below the body floor and **banned for body text**.
- [x] Footer hover fixed: computed 1.61:1 → 17.4:1 (§6.1).
- [x] Every animation has a reduced-motion fallback (§4.3 table + existing global block).
- [x] Type scale is a true modular scale via `clamp()`, tokenized; no arbitrary sizes (§2).
- [x] Spec extends the live system (`@theme` tokens, retained neutral palette, existing reduced-motion block).
- [x] No new brand hue. One functional neutral token flagged for Preston (§0, §3.4).
- [x] Single `<main>` assumed (§9).

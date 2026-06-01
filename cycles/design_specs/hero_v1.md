# Design Spec — Hero (index.astro / Hero.astro) v1
# Source content draft: content_drafts/hero_v1.md
# Date: 2026-05-03
# Status: Spec — awaiting Engineer

## Goal

The new hero headline is ~38 words against the current ~7. Type scale and column rhythm have to flex so the headline reads as a single deliberate sentence rather than as a wall of text. The right-side photo column reduces in dominance so the headline carries the visual weight, which is correct for audiences 1–3 (recruiters, foundation officers, advisory buyers — they're here to read, not to look at a portrait).

## Information Architecture

```
[NAV — sticky, ≤72px tall, primary nav unchanged]

[HERO — single section, min-height ~85vh on desktop, content-height on mobile]

  Two-column desktop / stacked mobile. Reverse stack: text first, photo second.

  ┌───────────────────────────────┬───────────────────────┐
  │ EYEBROW (3 nouns)             │                       │
  │ Strategy. Analytics.          │                       │
  │ AI Governance.                │     [PORTRAIT]        │
  │                               │     ~50% of viewport  │
  │ H1 (Headline C)               │     on lg, full-width │
  │ Chief Strategy and            │     on mobile         │
  │ Analytics Officer. I run      │                       │
  │ strategy, build the           │                       │
  │ analytics, and write the      │                       │
  │ AI governance — for an        │                       │
  │ organization that moved       │                       │
  │ first-gen graduation from     │                       │
  │ 25% to 75%+.                  │                       │
  │                               │                       │
  │ SUBHEAD (3-pillar tagline +   │                       │
  │ outcome sentence)             │                       │
  │                               │                       │
  │ [PRIMARY CTA] [SECONDARY CTA] │                       │
  └───────────────────────────────┴───────────────────────┘

[SECTION 2 — Selected Work — kept]
[SECTION 3 — SkillsToolkit — kept]
```

Two-column ratio: 55/45 text/photo on `lg+` (was 50/50). Headline is the load-bearing element; photo is supporting.

On `< lg`: photo stacks below text. Photo height capped at ~400px on mobile so the headline + CTAs are above the fold on a 13" laptop.

## Typography

| Role | Font | Weight | Size (clamp) | Line height | Letter spacing |
|------|------|--------|--------------|-------------|----------------|
| Eyebrow | Inter | 700 | clamp(0.75rem, 0.7rem + 0.2vw, 0.875rem) | 1.4 | 0.18em |
| H1 (headline) | Lora | 600 | clamp(2rem, 1.4rem + 2.5vw, 3.5rem) | 1.1 | -0.015em |
| Subhead (3-pillar + outcome) | Inter | 400 | clamp(1.0625rem, 1rem + 0.4vw, 1.375rem) | 1.55 | 0 |
| CTA primary | Inter | 600 | clamp(0.9375rem, 0.9rem + 0.2vw, 1rem) | 1.2 | 0 |
| CTA secondary | Inter | 600 | clamp(0.9375rem, 0.9rem + 0.2vw, 1rem) | 1.2 | 0 |

Notes:
- H1 max size is reduced from the current ~6xl (~3.75rem) to 3.5rem because the headline is longer. At 3.75rem the line breaks become awkward; at 3.5rem the headline lands in 4 lines on `lg` and 6 lines on `sm`.
- Eyebrow letter-spacing 0.18em is a slight loosening from the current `tracking-widest` (~0.1em) — three short nouns benefit from more breathing room.
- Lora at 600 (semibold) for H1 — variable weight, no synthetic bold.

## Color

| Role | OKLCH | Hex (current) | Contrast vs background `#F5F5F4` | Use |
|------|-------|---------------|----------------------------------|-----|
| Primary | oklch(0.30 0.06 145) | #1F3D2B | 11.0:1 | Eyebrow color, primary CTA bg, link hover |
| Foreground (neutral-900) | oklch(0.21 0 0) | #171717 | 14.4:1 | H1 + subhead body |
| Foreground muted (neutral-700) | oklch(0.37 0 0) | #404040 | 8.5:1 | Subhead second sentence (optional softening) |
| Background | oklch(0.96 0.003 90) | #F5F5F4 | — | Page background |
| White (CTA text) | oklch(1 0 0) | #FFFFFF | 11.0:1 vs primary | Primary CTA text on green bg |

All pairs comfortably exceed WCAG 2.2 AA (4.5:1 body, 3:1 large). Actually exceed AAA (7:1) on every pair listed.

OKLCH values are the canonical reference; Engineer may keep the hex tokens in `tailwind.config.mjs` / `@theme` for now and migrate to OKLCH custom properties as a separate ticket. No visual change either way.

## Spacing & Rhythm

- Section min-height: `min-h-[85vh]` on `lg`, content-height on `sm`/`md`.
- Container max-width: `max-w-7xl` (kept).
- Padding: `px-6 py-16` on `sm`, `lg:px-8 lg:py-24` (kept).
- Internal spacing inside text column: `space-y-8` between eyebrow/H1/subhead/CTAs (slightly tighter than the current `space-y-6` to compensate for the larger headline block).
- Gap between text and photo columns: `gap-12` on `lg`.
- CTA pair: `gap-4` between buttons; align to `justify-start` (kept).

## Components

### `Hero` component
- **Purpose:** Site identity + value prop above the fold.
- **Structure:** Two-column flex/grid wrapper. Left: text stack. Right: portrait container.
- **States:** No interactive states on the component itself; CTAs carry their own states (see below).

### CTA — Primary (`/projects` link)
- **Default:** Background `primary` (Hunter Green), text white, padded `px-8 py-4`, rounded `rounded-lg`, weight 600.
- **Hover:** Background lightens slightly (`primary` at ~92% lightness, computed via OKLCH `oklch(0.34 0.06 145)` or via Tailwind opacity if simpler). Subtle shadow lift (`shadow-lg`).
- **Focus-visible:** 2px solid ring in `primary`, 2px offset against background. Never `outline:none` without a replacement ring.
- **Active:** Background returns to default; brief 80ms transform `translateY(1px)`.
- **Motion:** Hover transition 200ms `ease-out` on background-color and box-shadow.

### CTA — Secondary (`/consulting` link)
- **Default:** Transparent background, 2px border `neutral-200`, text `neutral-900`, same padding.
- **Hover:** Border becomes `neutral-900`; background becomes `neutral-900`; text becomes white. 200ms ease.
- **Focus-visible:** Same ring spec as primary.
- **Active / Motion:** Mirror of primary.

### Portrait container
- **Default:** `aspect-ratio: 4/5` on `lg+`, `aspect-ratio: 3/4` on `sm`/`md`. Object-fit cover. Rounded `rounded-2xl` (kept). Shadow `shadow-2xl` (kept).
- **Hover:** Subtle scale `scale-[1.02]` over 600ms (kept; restraint).
- **Motion gating:** Hover scale only triggers when `prefers-reduced-motion: no-preference`.

## Motion

| Animation | Trigger | Property | Duration | Easing | reduced-motion |
|-----------|---------|----------|----------|--------|----------------|
| CTA primary hover | hover | background-color, box-shadow | 200ms | ease-out | retain (subtle, semantic) |
| CTA secondary hover | hover | background-color, border-color, color | 200ms | ease-out | retain (subtle, semantic) |
| Portrait hover scale | hover | transform: scale | 600ms | ease-in-out | **disable** (use `@media (prefers-reduced-motion: no-preference)`) |
| Section reveal | none | — | — | — | — |

No scroll-jacking, no parallax, no fade-in-on-scroll. Editorial restraint.

## Accessibility

- WCAG 2.2 AA compliance: yes, all color pairs verified above (most exceed AAA).
- Focus state: 2px solid `primary` ring, 2px offset. Visible against the `#F5F5F4` background.
- Skip link: present (already in Layout.astro).
- Heading hierarchy: H1 is the headline (single H1 per page — kept).
- Alt text: `alt="Preston Magouirk"` (current; sufficient — the photo is identification, not informational).
- Eyebrow is decorative semantically — render as `<p>`, not as a heading; the H1 carries the document outline.

## Responsive

- `< sm` (mobile): single column, photo stacks below text. Photo height `~400px`, `aspect-ratio: 3/4`. Eyebrow + H1 visible above the fold on iPhone 13 / Pixel 7 reference devices.
- `sm` to `md`: still single column, photo height grows toward `~500px`.
- `lg+`: two columns, 55/45 text/photo split, photo aspect `4/5`.
- `xl+`: container caps at `max-w-7xl` (~1280px); side padding remains `px-8`.

## Open Questions for Engineer

1. **Tailwind v4 OKLCH migration.** Engineer can migrate `@theme` tokens from hex to OKLCH custom properties as a separate, no-visual-change ticket. Defer this cycle.
2. **Subhead two-sentence treatment.** The 3-pillar tagline + outcome sentence read as one paragraph; if the Resume Consultant later wants the tagline visually distinct (e.g., italic Lora for the tagline + Inter for the outcome), revisit in a future cycle.
3. **Font hosting.** Currently Google Fonts via `<link>`. If Lighthouse performance audit (Auditor step) flags CLS or FOIT, consider self-hosting via Astro Fonts or `fontsource` packages. Out of scope for this cycle unless Auditor surfaces it.

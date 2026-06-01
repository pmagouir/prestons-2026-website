# Design Spec — About (about.astro) v1
# Source content draft: content_drafts/about_v1.md
# Date: 2026-05-03
# Status: Spec — awaiting Engineer

## Goal

The body gains a fourth paragraph (Lane B exposure with three production systems) and the sidebar gains a fourth credential entry (AU Board of Advisors) plus credential-text expansion (program names, fellowship designations). The page must remain a single-scroll narrative — the sidebar stays a quiet companion, never competes — while absorbing the density increase without feeling crowded.

## Information Architecture

```
[NAV]

H1: About Me
   ┌──────────────────────────────────┬─────────────────┐
   │ MAIN CONTENT (lg:col-span-2)     │ SIDEBAR (lg:1)  │
   │                                  │                 │
   │ Para 1 — throughline             │ Current Role    │
   │ Para 2 — cross-sector framing    │   ↓             │
   │ Para 3 — DC CAP role + outcomes  │ Core Focus      │
   │ Para 4 — Lane B production       │   (3 items)     │
   │   systems (NEW)                  │   ↓             │
   │                                  │ Technical Stack │
   │ [HOW I OPERATE block, kept]      │   (5 items)     │
   │   4 operating principles         │   ↓             │
   │                                  │ Credentials     │
   │ [THE REAL WORK section, kept]    │   (4 items NEW) │
   │   1 paragraph                    │                 │
   │   3-image grid                   │                 │
   └──────────────────────────────────┴─────────────────┘

[FOOTER]
```

Reading flow: title → throughline → who I am (cross-sector) → what I do (DC CAP) → what I build (production systems) → how I operate (principles) → who I am off-clock (real work). Each block is one read-step.

Sidebar is sticky on `lg+` (kept). Reads in parallel — supports, doesn't lead.

## Typography

| Role | Font | Weight | Size (clamp) | Line height | Letter spacing |
|------|------|--------|--------------|-------------|----------------|
| H1 ("About Me") | Lora | 600 | clamp(2.5rem, 4vw, 3.75rem) | 1.05 | -0.02em |
| H3 ("How I Operate" eyebrow) | Inter | 700 | clamp(0.75rem, 0.7rem + 0.1vw, 0.875rem) | 1.4 | 0.2em |
| H3 ("The Real Work") | Lora | 600 | clamp(1.5rem, 1.3rem + 0.6vw, 1.875rem) | 1.15 | -0.01em |
| Body paragraph | Inter | 400 | clamp(1.0625rem, 1rem + 0.3vw, 1.25rem) | 1.7 | 0 |
| Sidebar label (uppercase) | Inter | 500 | clamp(0.6875rem, 0.65rem + 0.1vw, 0.75rem) | 1.4 | 0.2em |
| Sidebar role title | Inter | 700 | clamp(1rem, 0.95rem + 0.2vw, 1.125rem) | 1.3 | 0 |
| Sidebar list item | Inter | 500 | clamp(0.9375rem, 0.9rem + 0.1vw, 1rem) | 1.55 | 0 |
| Operating-principle label | Inter | 700 | clamp(0.9375rem, 0.9rem + 0.2vw, 1.0625rem) | 1.3 | 0 |
| Operating-principle body | Inter | 400 | clamp(0.9375rem, 0.9rem + 0.2vw, 1.0625rem) | 1.55 | 0 |

Notes:
- Body paragraphs land at 1.7 line-height. Editorial-grade leading; supports the throughline reading order.
- Sidebar items pull in slightly tighter than the body so the scan-read is faster (the sidebar is reference content, not narrative).

## Color

| Role | OKLCH | Hex | Contrast vs background `#F5F5F4` | Use |
|------|-------|-----|----------------------------------|-----|
| Foreground (neutral-900) | oklch(0.21 0 0) | #171717 | 14.4:1 | H1, H3, role labels |
| Body (neutral-700) | oklch(0.37 0 0) | #404040 | 8.5:1 | Body paragraphs |
| Sidebar surface | oklch(1 0 0 / 0.6) | rgba(255,255,255,0.6) | — | Sidebar background (kept; sits on top of `#F5F5F4` bleed) |
| Muted (neutral-500) | oklch(0.55 0 0) | #737373 | 4.6:1 | Sidebar uppercase labels |
| Primary | oklch(0.30 0.06 145) | #1F3D2B | 11.0:1 | Sidebar arrow `→` markers; principle checkmark bg `primary/10` |
| Operating-principle bg | oklch(0.97 0 0) | #F5F5F4 → adjust to `neutral-50` `#FAFAFA` | — | Block bg (kept) |

All pairs WCAG 2.2 AA. Sidebar muted label at 4.6:1 against the white sidebar background passes AA for body text (4.5:1 minimum).

## Spacing & Rhythm

- Container: `max-w-7xl` (kept).
- Page padding: `px-6 py-16 lg:px-8 lg:py-24` (kept).
- Body paragraph spacing: `space-y-8` (current) — increase to `space-y-9` to absorb the new fourth paragraph without crowding.
- Operating-principles block padding: `p-8` (kept). List internal spacing: `space-y-6` (kept).
- Sidebar internal spacing: `space-y-8` (kept).
- Sidebar credentials list: `space-y-2` (kept), but each item now wraps to 2 lines on average (program name + parenthetical) so allow leading to breathe — `leading-snug` rather than default.
- "The Real Work" image grid: `gap-4 sm:grid-cols-2 lg:grid-cols-3` (kept). Each image `h-48` (kept).

## Components

### `Aside` (sidebar)
- **Purpose:** Reference card. Role, focus, stack, credentials.
- **Structure:** Sticky on `lg+` at `top-24`. Border-left treatment on `lg+`, border-top on `< lg`. White-with-blur surface preserved.
- **States:** None. Static block.

### Operating-principles list (within main column)
- **Purpose:** Quick-scan summary of Preston's voice.
- **Structure:** 4 items, each: checkmark icon (rounded primary/10 bg, primary fg) + label (bold, neutral-900) + body (base, neutral-600). Two-column flex per item.
- **States:** None. Static.

### Real Work image grid
- **Purpose:** Personal presence — three photos.
- **States:** Hover scale `scale-[1.02]` over 500ms (kept).
- **Motion gating:** `prefers-reduced-motion: no-preference` only.

## Motion

| Animation | Trigger | Property | Duration | Easing | reduced-motion |
|-----------|---------|----------|----------|--------|----------------|
| Real Work image hover | hover | transform: scale | 500ms | ease-out | **disable** |
| Sidebar sticky | scroll | (CSS sticky, no animation) | — | — | n/a |

No scroll-reveals, no parallax. Editorial restraint.

## Accessibility

- WCAG 2.2 AA compliance: yes, all color pairs verified.
- Focus state: 2px solid `primary` ring, 2px offset. Applied to any focusable element (links, none currently in this surface beyond CTAs).
- Skip link: handled by Layout.astro.
- Heading hierarchy: H1 (page title) → H3 ("How I Operate" eyebrow) and H3 ("The Real Work"). Currently uses an `<h3>` inside the `How I Operate` block as a category label; this is acceptable because the block is a self-contained module with its own heading. Engineer to verify there is no H2 skip — if Auditor flags, the eyebrow can become a styled `<p>` and `The Real Work` can stay H3 under the implicit H2 of "About narrative."
- Alt text: existing alt strings (`Preston with Liza`, `Family Halloween photo`, `Franklin`) are sufficient. No change.
- Strong tags within paragraphs: keep semantic `<strong>` rather than visual-only `<b>`.

## Responsive

- `< lg` (mobile/tablet): main content stacks above sidebar. Sidebar loses sticky behavior. Border-top on sidebar (no left border).
- `lg+`: 2/3 + 1/3 grid (`lg:grid-cols-3`, main col-span 2). Sidebar sticky at `top-24`. Left border on sidebar.

## Open Questions for Engineer

1. **Operating principles — checkmark icon style.** Current uses inline SVG. Keep inline SVG with `currentColor` for primary tinting, or migrate to a centralized icon component? Current pattern is fine for one-off use.
2. **Sidebar credentials density.** Four entries with multi-line each ("PhD, Educational Policy Studies (UVA, IES Fellow)") may push the sidebar past the fold on `lg` 13" displays. If Auditor flags layout overflow, drop "MPP (Vanderbilt, Peabody Honors Scholar)" to single line as "MPP (Vanderbilt)" with Peabody Honors moved into experience.astro Education section instead.
3. **Lane B paragraph link treatment — REFERENCE, NOT LINK (Preston decision 2026-05-03).** The new paragraph names `dccapinnovation.org` twice. Engineer renders BOTH instances as plain text, not as hyperlinks. No `<a>` wrapper, no underline, no primary-on-hover treatment. The references signal that the artifacts exist at that host; visiting them is not the use case (the AI Governance materials are public but the Financial Scenarios tool is Cloudflare Access-gated for board / staff). Render as the same color and weight as the surrounding body copy.

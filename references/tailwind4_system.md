# tailwind4_system.md — Tailwind CSS v4 Reference

**Owning agents:** website-engineer + website-designer
**Last verified:** 2026-05-23
**Sources:**
- https://tailwindcss.com/docs/theme (verified 2026-05-23)
- https://tailwindcss.com/docs/upgrade-guide (referenced for v3→v4 migration)

---

## When to consult this file

Customizing the design system, declaring colors/fonts/spacing, migrating from v3 `tailwind.config.js`, choosing between OKLCH and hex, setting up container queries, or extending the default theme.

## Authority

This reference defines how the website-engineer and website-designer collaborate on the design token layer. The `@theme` block in `src/styles/global.css` is the single source of truth for tokens.

---

## 1. The `@theme` directive (CSS-native config)

Tailwind v4 replaces `tailwind.config.js` with a CSS-native `@theme { ... }` block. Define design tokens as CSS custom properties; Tailwind auto-generates corresponding utility classes.

```css
/* src/styles/global.css */
@import "tailwindcss";

@theme {
  /* Colors — OKLCH for perceptual uniformity */
  --color-primary: oklch(0.30 0.06 145);      /* Hunter Green */
  --color-secondary: oklch(0.36 0.13 18);     /* Burgundy */
  --color-background: oklch(0.96 0.003 90);   /* Light editorial neutral */

  /* Fonts — paired with Astro Font cssVariable */
  --font-heading: "Lora", Georgia, serif;
  --font-body: Inter, system-ui, sans-serif;

  /* Custom type scale */
  --text-hero: clamp(2rem, 1.4rem + 2.5vw, 3.5rem);
  --text-dek: clamp(1.0625rem, 1rem + 0.4vw, 1.375rem);

  /* Breakpoints — keep defaults, add 3xl */
  --breakpoint-3xl: 120rem;

  /* Container queries */
  --container-prose: 65ch;
}
```

This generates `bg-primary`, `text-secondary`, `font-heading`, `text-hero`, `3xl:*`, `max-w-prose`, etc.

---

## 2. Namespace reference

| Namespace | Generates utilities | Example |
|-----------|--------------------|---------|
| `--color-*` | `bg-*`, `text-*`, `border-*`, `fill-*`, `stroke-*` | `--color-primary` → `bg-primary` |
| `--font-*` | `font-*` | `--font-heading` → `font-heading` |
| `--text-*` | `text-*` (font size) | `--text-hero` → `text-hero` |
| `--font-weight-*` | `font-*` | `--font-weight-medium` → `font-medium` |
| `--tracking-*` | `tracking-*` | `--tracking-tight` → `tracking-tight` |
| `--leading-*` | `leading-*` | `--leading-snug` → `leading-snug` |
| `--spacing-*` or `--spacing` | `p-*`, `m-*`, `gap-*`, `w-*`, `h-*` | `--spacing: 4px` makes `p-4 = 16px` |
| `--radius-*` | `rounded-*` | `--radius-lg` → `rounded-lg` |
| `--shadow-*` | `shadow-*` | `--shadow-sm` → `shadow-sm` |
| `--breakpoint-*` | Responsive variants `sm:`, `md:`, etc. | `--breakpoint-3xl: 120rem` → `3xl:*` |
| `--container-*` | `max-w-*`, container query variants `@sm:` | `--container-prose: 65ch` → `max-w-prose` |
| `--animate-*` | `animate-*` | `--animate-fade-in` → `animate-fade-in` |

---

## 3. OKLCH — use it, not hex

OKLCH is the preferred color space in Tailwind v4 because:
- Perceptually uniform (same numeric distance = same perceived difference)
- Better gradients and color interpolation
- Wide-gamut display ready (P3, Rec. 2020)
- Explicit lightness control makes accessibility math easier

Format: `oklch(lightness chroma hue)`
- Lightness: 0–1 (0 = black, 1 = white)
- Chroma: 0 to ~0.4 (saturation; 0 = grayscale)
- Hue: 0–360 (degrees)

### Conversion from existing hex palette

```
#1F3D2B (Hunter Green)    → oklch(0.30 0.06 145)
#7A1E2C (Burgundy)        → oklch(0.36 0.13 18)
#F5F5F4 (Light Neutral)   → oklch(0.96 0.003 90)
```

Use any OKLCH conversion tool to verify (e.g., `oklch.com`). Contrast ratios stay identical to hex but the math is more legible.

### Contrast checks

For body text on `#F5F5F4`:
- `--color-primary` (oklch 0.30) against background: ~11.0:1 ✓ AAA
- `neutral-900` against background: ~14.4:1 ✓ AAA
- `neutral-700` against background: ~8.5:1 ✓ AAA
- `neutral-500` against background: ~4.6:1 ✓ AA (body) — borderline

Body text minimum is 4.5:1 (AA) or 7:1 (AAA). Use `neutral-600` (`oklch(0.45 0 0)`, ~6.2:1) when text-500 is too light.

---

## 4. Extending vs replacing the default theme

### Extend (most common)

```css
@theme {
  --color-primary: oklch(0.30 0.06 145);
  /* Keeps all default colors; adds --color-primary */
}
```

### Override a default

```css
@theme {
  --breakpoint-sm: 30rem; /* Change from 40rem */
}
```

### Reset a namespace

```css
@theme {
  --color-*: initial;        /* Wipe all defaults */
  --color-primary: oklch(0.30 0.06 145);
  --color-secondary: oklch(0.36 0.13 18);
  --color-background: oklch(0.96 0.003 90);
  /* Now only these three colors exist; no default red-500, blue-300, etc. */
}
```

Use namespace reset for **branded** sites where you don't want the default Tailwind palette polluting the autocomplete or build output. For Preston's site, **keep defaults** (uses neutral-900, neutral-700, etc.) and add primary/secondary/background as extensions.

### Reset everything

```css
@theme {
  --*: initial;  /* Wipe entire default theme */
}
```

Rarely correct. Almost always you want defaults + selective additions.

---

## 5. Container queries

Container queries let a component respond to its parent's width, not the viewport. Use for sidebar-aware layouts.

```html
<div class="@container">
  <div class="grid grid-cols-1 @md:grid-cols-2 @lg:grid-cols-3">
    <!-- responds to .@container's width, not viewport -->
  </div>
</div>
```

Custom container sizes via theme:
```css
@theme {
  --container-prose: 65ch;
  --container-narrow: 32rem;
}
```

`@prose:`, `@narrow:` variants now available.

---

## 6. Animation keyframes

Define both the animation utility AND its keyframes inside `@theme`:

```css
@theme {
  --animate-fade-in: fade-in 200ms ease-out;

  @keyframes fade-in {
    from { opacity: 0; transform: translateY(4px); }
    to   { opacity: 1; transform: translateY(0); }
  }
}
```

Usage: `<div class="animate-fade-in">`. Always wrap motion in `@media (prefers-reduced-motion: no-preference)` if it's purely decorative.

---

## 7. Inline `--var: var(--other)` resolution

When one theme variable references another, use `@theme inline`:

```css
@theme inline {
  --font-sans: var(--font-inter);  /* Resolves at theme-evaluation time */
}
```

Without `inline`, the `var()` resolves at runtime, which fails for properties Tailwind reads at build time.

---

## 8. Migration from v3 → v4

| v3 (JavaScript) | v4 (CSS) |
|-----------------|----------|
| `tailwind.config.js` `theme.extend.colors.primary` | `@theme { --color-primary: ... }` |
| `theme.extend.fontFamily.heading` | `@theme { --font-heading: ... }` |
| `theme.extend.screens.3xl` | `@theme { --breakpoint-3xl: 120rem; }` |
| `theme.extend.spacing[128]` | `@theme { --spacing: 4px; }` (sets base unit) + utility class `p-128` |
| `plugins: [...]` | `@plugin "..."` directives in CSS |
| `content: ['./src/**/*.{astro,ts}']` | Auto-detected from imports |

**Migration order for this site:**
1. Move colors from `tailwind.config.mjs` → `@theme` in `global.css`, convert to OKLCH
2. Move fonts → `@theme` (keep paired with Astro `<Font cssVariable>` setup)
3. Delete `tailwind.config.mjs` (Tailwind v4 doesn't need it; if any custom plugins were declared, port them to `@plugin` directives)
4. Run `npm run build` to confirm no class names broke

---

## Verification checklist

- [ ] All custom colors in OKLCH, not hex
- [ ] All contrast ratios verified ≥ 4.5:1 for body, ≥ 3:1 for large text
- [ ] `tailwind.config.mjs` deleted (Tailwind v4 reads `@theme` directly)
- [ ] Default neutral palette retained (we use it heavily)
- [ ] Container queries set up where component-level responsiveness matters
- [ ] Font tokens paired with Astro `<Font cssVariable>` declarations
- [ ] No unused tokens (cluttered `@theme` block)

---

## Common mistakes

1. Mixing hex and OKLCH in the same `@theme` — pick OKLCH, convert all.
2. Forgetting `--spacing: 4px` controls all p/m/gap/w/h utilities — changing it cascades.
3. Using `@theme { --*: initial }` for a personal site — wipes the helpful defaults.
4. Putting `@theme` inside a selector or media query — it must be top-level.
5. Treating `@theme` variables as runtime CSS variables — they're build-time tokens that ALSO generate runtime CSS vars. The distinction matters for `inline` vs default.

---

*Quarterly refresh: 2026-08-01.*

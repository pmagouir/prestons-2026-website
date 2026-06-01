# axe_core_rules.md — Accessibility Rule Library Reference

**Owning agent:** website-auditor
**Last verified:** 2026-05-23
**Sources:**
- https://dequeuniversity.com/rules/axe/ (verified 2026-05-23)
- https://github.com/dequelabs/axe-core/blob/master/doc/rule-descriptions.md (canonical rule list)

---

## When to consult this file

Running axe-core, interpreting findings, deciding severity, applying remediation.

## Authority

axe-core is the verification tool. The Auditor runs it against every changed page; any Critical or Serious finding blocks merge.

---

## How to run axe-core

### CLI (against production Vercel deployment)

```bash
npx @axe-core/cli https://prestonmagouirk.com/ --tags wcag2a,wcag2aa,wcag22aa
npx @axe-core/cli https://prestonmagouirk.com/about --tags wcag2a,wcag2aa,wcag22aa
# ... per route
```

### Browser DevTools (during development)

1. Open page in Chrome
2. DevTools → Lighthouse → Accessibility audit
3. OR install the "axe DevTools" extension and run on demand

### In CI (recommended add)

```yaml
# .github/workflows/accessibility.yml
- run: npx @axe-core/cli ${{ env.PREVIEW_URL }} --tags wcag2a,wcag2aa,wcag22aa --exit
```

`--exit` makes the workflow fail on violations.

---

## Severity hierarchy

| Level | Meaning | Action |
|-------|---------|--------|
| **Critical** | Blocks users with disabilities entirely | Fix before merge |
| **Serious** | Major barrier; significant impact | Fix before merge |
| **Moderate** | Notable barrier; affects some users | Fix in next cycle if not this one |
| **Minor** | Best practice; low impact | Log in `errors.md`; address opportunistically |

---

## Top 25 rules most likely to trigger on this site

### Critical
- **`color-contrast`** — Foreground/background contrast below 4.5:1 (or 3:1 for large text).
- **`color-contrast-enhanced`** — AAA-level (7:1) contrast check; we don't gate on this.
- **`image-alt`** — `<img>` missing `alt`. Decorative images need `alt=""`.
- **`button-name`** — `<button>` without accessible name (visible text OR `aria-label`).
- **`link-name`** — `<a>` without accessible name.
- **`label`** — Form `<input>` without paired `<label>`.

### Serious
- **`heading-order`** — Heading levels skipped (H1 → H3 without H2).
- **`landmark-one-main`** — Page must have exactly one `<main>` element.
- **`landmark-unique`** — Multiple landmarks of the same role without distinct `aria-label`.
- **`html-has-lang`** — `<html>` missing `lang` attribute.
- **`html-lang-valid`** — `lang` value isn't a valid BCP 47 code.
- **`document-title`** — Page missing `<title>` (Astro Layout enforces).
- **`meta-viewport`** — Missing or restrictive viewport meta (`user-scalable=no` is forbidden).
- **`skip-link`** — No skip-to-main mechanism for keyboard users.
- **`bypass`** — Same as skip-link; must have a way to bypass repeated content.
- **`region`** — Significant content not contained within a landmark.
- **`focus-order-semantics`** — Tab order doesn't match visual order.
- **`tabindex`** — `tabindex` > 0 (creates unpredictable focus order).
- **`autocomplete-valid`** — Form `autocomplete` attribute uses invalid value.

### Moderate
- **`empty-heading`** — `<h1>` through `<h6>` with no text content.
- **`empty-table-header`** — `<th>` with no content.
- **`duplicate-id`** — Same `id` used multiple times.
- **`duplicate-id-aria`** — Same ID referenced by `aria-labelledby` / `aria-describedby` exists twice.
- **`form-field-multiple-labels`** — Single input with multiple `<label>`s.
- **`frame-title`** — `<iframe>` without `title`.

### Minor
- **`landmark-banner-is-top-level`** — `<header>` (banner) nested inside another landmark.
- **`landmark-contentinfo-is-top-level`** — `<footer>` (contentinfo) nested inside another landmark.
- **`scope-attr-valid`** — `<th scope=...>` value invalid.

---

## Remediation patterns

### `color-contrast`

```html
<!-- Before -->
<p class="text-neutral-500">Footer copy</p>

<!-- After -->
<p class="text-neutral-600">Footer copy</p>
```

If the brand color is too light, change the brand color or use it only on backgrounds where contrast clears 4.5:1.

### `image-alt`

```html
<!-- Before -->
<img src="/portrait.jpg" />

<!-- After (informational) -->
<Image src={portrait} alt="Preston Magouirk in his Washington, DC office" />

<!-- After (decorative) -->
<Image src={pattern} alt="" />
```

### `button-name`

```html
<!-- Before -->
<button><svg>...</svg></button>

<!-- After -->
<button aria-label="Toggle menu"><svg>...</svg></button>
```

### `landmark-one-main`

```astro
<!-- Layout.astro -->
<body>
  <main id="main-content">
    <slot />
  </main>
</body>

<!-- about.astro — BEFORE -->
<Layout>
  <main>...</main>  <!-- nested! -->
</Layout>

<!-- about.astro — AFTER -->
<Layout>
  <article>...</article>  <!-- or just <div> -->
</Layout>
```

### `heading-order`

```html
<!-- Before -->
<h1>About</h1>
<h3>How I Operate</h3>  <!-- skipped H2 -->

<!-- After -->
<h1>About</h1>
<h2>How I Operate</h2>
<!-- or, if the visual treatment is eyebrow-style not a heading -->
<p class="eyebrow">How I Operate</p>
```

### `skip-link`

Already implemented in Layout.astro:
```astro
<a href="#main-content" class="sr-only focus:not-sr-only ...">Skip to content</a>
```

---

## Workflow integration

The Auditor runs axe-core after the Engineer ships to the preview branch:

1. Run axe-core CLI against every route in the changed scope.
2. For each violation:
   - Critical/Serious → file a finding, recommend block
   - Moderate → file a finding, recommend revise (or defer with rationale)
   - Minor → log in `errors.md` for opportunistic next-cycle fix
3. Cross-reference against `errors.md` patterns. If a Critical/Serious matches an existing pattern that's "fixed" — that's a regression; flag explicitly.
4. Write findings to `audits/YYYY-MM-DD_audit.md` with severity counts.

---

## Limits of axe-core

axe-core catches ~57% of WCAG issues automatically. **The Auditor must supplement with manual testing:**

- Keyboard-only navigation walkthrough (Tab/Shift+Tab/Enter/Space/Escape/Arrows)
- Screen reader spot-check (VoiceOver on macOS: Cmd+F5)
- Zoom to 200% + 400% — content still usable
- Disable images — alt text reads sensibly
- Forced colors mode (Windows High Contrast) — visible structure preserved

These manual checks are documented in `wcag_2.2_aa.md § Manual keyboard audit protocol`.

---

## Verification checklist

- [ ] axe-core run against every changed route in the cycle
- [ ] Zero Critical violations
- [ ] Zero Serious violations
- [ ] Moderate violations all logged + decision recorded
- [ ] Manual keyboard walkthrough completed
- [ ] Screen reader spot-check on at least one new surface
- [ ] No new regressions against existing `errors.md` patterns

---

## Common mistakes

1. Running axe-core only on the home page and assuming the rest are clean.
2. Treating "Best Practice" findings as Critical (they're not WCAG violations).
3. Ignoring Moderate findings indefinitely — they accumulate into a debt wall.
4. Trusting axe-core alone — it catches structure but misses semantic mismatch (e.g., a `<button>` styled to look like a link but acting like one).
5. Running axe-core on dev mode — some Astro hydration patterns differ from production.

---

*Quarterly refresh: 2026-08-01. Rule library expands modestly each year; major additions get noted in dequeuniversity.com's changelog.*

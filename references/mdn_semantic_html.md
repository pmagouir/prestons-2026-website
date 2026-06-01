# mdn_semantic_html.md — Semantic HTML & ARIA Reference

**Owning agents:** website-designer + website-engineer
**Last verified:** 2026-05-23
**Sources:**
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element (verified 2026-05-23)
- https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics (verified 2026-05-23)
- https://www.w3.org/WAI/ARIA/apg/ (ARIA Authoring Practices Guide)

---

## When to consult this file

Choosing the right HTML element, applying ARIA roles, naming controls, structuring document outline, deciding when ARIA is needed (almost never) vs. when semantic HTML suffices (almost always).

## Authority

Semantic HTML is the default. ARIA is the fallback only when HTML semantics aren't sufficient. The first rule of ARIA: don't use ARIA.

---

## The five rules of ARIA (W3C, abbreviated)

1. **If you can use a native HTML element instead of ARIA, do so.**
2. **Don't change native semantics unless you really have to.** A `<button>` with `role="link"` confuses everyone.
3. **All interactive ARIA controls must be keyboard accessible.**
4. **Don't use `role="presentation"` or `aria-hidden="true"` on focusable elements.**
5. **All interactive elements must have an accessible name.**

---

## Semantic structure for this site

### Document outline

```html
<html lang="en">
  <head>...</head>
  <body>
    <a href="#main-content" class="sr-only focus:not-sr-only">Skip to content</a>
    <header><!-- site banner --></header>
    <nav><!-- site navigation --></nav>
    <main id="main-content">
      <article><!-- or section -->
        <h1>Page heading</h1>
        <p>...</p>
        <section>
          <h2>Subsection</h2>
          ...
        </section>
      </article>
      <aside><!-- sidebar / supplementary --></aside>
    </main>
    <footer><!-- site footer --></footer>
  </body>
</html>
```

Each landmark element (`<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`) creates a navigable region for assistive technology.

### One H1 per page

Exactly one `<h1>` per page. Headings descend in order: H1 → H2 → H3. **No skipping levels.**

If a visual design calls for a small heading-like label (e.g., eyebrow text above an H1), use `<p>` with a class — not a smaller heading tag.

---

## Elements and their correct use

### Sectioning

| Element | When to use | When NOT to use |
|---------|-------------|-----------------|
| `<article>` | Self-contained content (blog post, case study, news item) | Generic container — use `<div>` |
| `<section>` | A thematic grouping with a heading | A page region without a heading — use `<div>` |
| `<aside>` | Tangentially related content (sidebar, callout, footnote) | The main content |
| `<nav>` | Major navigation | Random link list (use `<ul>`) |
| `<header>` | Introductory content for the page or a section | The site banner that appears on every page IS a `<header>` |
| `<footer>` | Footer content for the page or a section | A page's "contact me" CTA — depends on context |

### Text content

| Element | Use |
|---------|-----|
| `<p>` | Paragraph |
| `<ol>`/`<ul>`/`<li>` | Ordered/unordered lists |
| `<dl>`/`<dt>`/`<dd>` | Description lists (term/definition pairs) |
| `<blockquote>` | Quoted block |
| `<figure>`/`<figcaption>` | Self-contained content with caption (image + caption) |
| `<time datetime="2026-05-23">` | Machine-readable date |
| `<address>` | Contact information for the article's author |

### Inline semantics

| Element | Use |
|---------|-----|
| `<a href="...">` | Hyperlink |
| `<strong>` | Strong importance (not visual bold — use `<b>` for that) |
| `<em>` | Emphasis (not visual italic — use `<i>` for that) |
| `<code>` | Inline code |
| `<abbr title="...">` | Abbreviation with expansion |
| `<cite>` | Title of a work |
| `<mark>` | Highlighted (search match, etc.) |

### Interactive

| Element | Use | Notes |
|---------|-----|-------|
| `<button>` | An action that doesn't navigate | Native focus, keyboard activation |
| `<a href="...">` | Navigation to a new URL | Native focus, keyboard activation |
| `<input>` + `<label>` | Form control + paired label | `<label for="id">` or wrap input |
| `<details>` + `<summary>` | Native disclosure widget | Don't recreate with JS unless you need custom animation |

**Never** style a `<div>` to look like a button. Use `<button>`. Browsers handle focus, keyboard, screen reader, hover, active states for you.

---

## ARIA patterns we actually use

### `aria-label` (icon-only buttons)

```html
<button aria-label="Toggle menu">
  <svg aria-hidden="true">...</svg>
</button>
```

`aria-hidden="true"` on the SVG prevents the screen reader from reading the icon's path data.

### `aria-expanded` (disclosure state)

```html
<button aria-expanded="false" aria-controls="mobile-menu" id="mobile-menu-button">
  Menu
</button>
<div id="mobile-menu" hidden>...</div>
```

JavaScript toggles `aria-expanded` true/false and `hidden` attribute.

### `aria-current` (active nav item)

```html
<nav>
  <a href="/about" aria-current="page">About</a>
  <a href="/projects">Projects</a>
</nav>
```

Screen readers announce "current page." Style with `[aria-current="page"]` selector.

### `aria-describedby` (form help text)

```html
<label for="email">Email</label>
<input id="email" type="email" aria-describedby="email-help" />
<p id="email-help">We never share your email.</p>
```

Screen reader announces help text along with the label.

### `aria-live` (dynamic regions)

```html
<div aria-live="polite" id="status">Form saved.</div>
```

Screen reader announces changes to the region. `polite` waits for a pause; `assertive` interrupts. **Don't overuse** — it's noisy for users.

---

## Common mistakes

1. `<div onclick=...>` instead of `<button>` — keyboard inaccessible, no screen reader role, no focus.
2. `<a href="javascript:...">` or `<a onclick=...>` — should be a `<button>`.
3. Skipping heading levels for visual styling — change the styling, not the level.
4. Using `<table>` for layout — use grid/flex.
5. Nested `<main>` — exactly one per page, in the Layout.
6. `<img>` decorative element without `alt=""` — fails image-alt rule.
7. ARIA roles that contradict the element (`<a role="button">` — the element is wrong, change to `<button>`).
8. `aria-label` that duplicates visible text — redundant, sometimes confusing.
9. `tabindex` greater than 0 — creates unpredictable focus order.
10. Using `<i>` for icons (it's for italic text) — use `<span>` or the icon library's component.

---

## Decision tree: what element to use

```
Is it interactive?
├── Yes → Does it navigate to a new URL?
│        ├── Yes → <a href="...">
│        └── No  → <button>
└── No  → Is it a heading?
         ├── Yes → <h1>–<h6> at the correct level
         └── No  → Is it a section/region?
                  ├── Yes → <section>/<article>/<aside>/<nav>/<header>/<footer> per its role
                  └── No  → Is it a list?
                           ├── Yes → <ul>/<ol>/<dl>
                           └── No  → <p> for text, <div> for layout grouping
```

---

## Verification checklist

- [ ] One `<h1>` per page
- [ ] No skipped heading levels
- [ ] All interactive elements use `<button>` or `<a>` (not `<div>`)
- [ ] All form inputs have paired `<label>`
- [ ] Icon-only buttons have `aria-label`
- [ ] Decorative SVGs inside buttons have `aria-hidden="true"`
- [ ] One `<main>` per page (in Layout)
- [ ] Skip link in Layout
- [ ] `<html lang="en">` set
- [ ] No `tabindex > 0`
- [ ] No ARIA roles that contradict the element

---

*Quarterly refresh: 2026-08-01. HTML semantics evolve slowly; ARIA Authoring Practices Guide updates more frequently.*

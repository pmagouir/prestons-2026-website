# wcag_2.2_aa.md — Accessibility Standards Reference

**Owning agents:** website-designer + website-auditor
**Last verified:** 2026-05-23
**Sources:**
- https://www.w3.org/WAI/WCAG22/quickref/ (verified 2026-05-23)
- https://www.w3.org/TR/WCAG22/ (canonical standard)

---

## When to consult this file

Designing any new component, writing any new spec, running an accessibility audit, deciding whether a contrast/focus/target issue is a defect.

## Authority

WCAG 2.2 AA is the floor. Every shipped surface must pass. The Designer specs against it; the Auditor verifies it via axe-core plus manual keyboard testing.

---

## The 10 most relevant WCAG 2.2 AA criteria for a static portfolio

### 1.4.3 Contrast (Minimum) — Level AA

**Criterion:** Body text has a contrast ratio of at least **4.5:1**. Large text (≥ 18pt or ≥ 14pt bold) requires **3:1**.

**Test:** Use a contrast checker (Lighthouse, axe-core, or WebAIM Contrast Checker) for every foreground/background pair.

**Implementation:** Define color tokens in `@theme` and verify each pair before shipping. Our palette already exceeds AA:
- `--color-primary` (oklch 0.30) on background → ~11:1 ✓ AAA
- `neutral-900` on background → ~14.4:1 ✓ AAA
- `neutral-700` on background → ~8.5:1 ✓ AAA
- `neutral-500` on background → ~4.6:1 ✓ AA (avoid for body)
- `neutral-600` on background → ~6.2:1 ✓ AA (use instead of 500)

**Watch:** Hover states, link colors over patterned backgrounds, text over images.

---

### 1.4.11 Non-text Contrast — Level AA

**Criterion:** UI components (buttons, form fields, icons that convey information) need **3:1** contrast against adjacent colors.

**Test:** Verify focus rings, icon strokes, input borders.

**Implementation:** Default Tailwind border colors (`border-neutral-200`) at ~13% darker than background ≈ 1.5:1 — **fails**. Use `border-neutral-300` (~3:1) or stronger for actionable controls.

---

### 2.4.7 Focus Visible — Level AA

**Criterion:** Every focusable element shows a visible focus indicator when reached via keyboard.

**Test:** Tab through the entire page. Every link, button, and form control must show a clearly visible focus state. No `outline: none` without a replacement.

**Implementation:**
```css
/* In global.css */
*:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  border-radius: 2px;
}
```

Use `:focus-visible` (not `:focus`) so focus rings appear for keyboard but not mouse users.

---

### 2.4.11 Focus Not Obscured (Minimum) — Level AA *New in 2.2*

**Criterion:** When a focusable component receives focus, it isn't entirely covered by author-created content (modals, sticky headers, etc.).

**Test:** Tab through the page with sticky elements present. Focused element must not disappear behind them.

**Implementation:**
- Sticky header: ensure `scroll-padding-top` accounts for header height so focused elements scroll into view below the header.
  ```css
  html { scroll-padding-top: 5rem; } /* header height */
  ```
- Modals: trap focus inside; on close, restore focus to the trigger.

---

### 2.5.8 Target Size (Minimum) — Level AA *New in 2.2*

**Criterion:** Interactive targets are at least **24 × 24 CSS pixels**.

**Test:** Measure clickable areas via DevTools. Buttons, links in nav, link icons.

**Implementation:** Inline text links are exempt (only standalone interactive controls). For our site:
- Mobile menu button: currently ~32px ✓
- Footer links: currently inline text ✓ (exempt)
- Social icon-only buttons: if added, ensure 24px+ hit area (use padding to expand beyond visual icon)
- Nav links on desktop: visually small but clickable area extends via padding ✓

---

### 3.2.6 Consistent Help — Level A *New in 2.2*

**Criterion:** If help mechanisms (contact info, FAQ) appear on multiple pages, they're in the same relative location.

**Test:** Check footer / contact links across all pages.

**Implementation:** Footer contains LinkedIn + Email on every page ✓. Don't move them to header on some pages and footer on others.

---

### 3.3.7 Redundant Entry — Level A *New in 2.2*

**Criterion:** Information previously entered by the user is auto-filled or available for selection rather than re-requested.

**Test:** N/A for this site (no multi-step forms). Add to checklist if a contact form launches.

---

### 3.3.8 Accessible Authentication (Minimum) — Level AA *New in 2.2*

**Criterion:** Authentication doesn't require cognitive function tests (CAPTCHAs) without an alternative.

**Test:** N/A — no authentication on this site.

---

### 1.3.1 Info and Relationships — Level A

**Criterion:** Information, structure, and relationships conveyed visually must also be programmatically determinable.

**Test:** Use a screen reader (VoiceOver: Cmd+F5; NVDA on Windows). Confirm the document outline matches what's visually structured.

**Implementation:**
- Single `<h1>` per page; `<h2>` and `<h3>` in hierarchy; no skipped levels.
- `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>` semantic landmarks.
- Lists: `<ul>` for unordered, `<ol>` for ordered. Don't fake lists with `<div>`s.
- Tables (when used): `<thead>`, `<tbody>`, scoped `<th>` headers.

---

### 4.1.2 Name, Role, Value — Level A

**Criterion:** Every UI control has a programmatically determinable name, role, and (when applicable) state.

**Test:** Use DevTools' Accessibility panel; check axe-core for "accessible-name" violations.

**Implementation:**
- `<button>` not `<div onclick>`.
- Form inputs paired with `<label for=...>`.
- Icon-only buttons get `aria-label="..."`.
- Custom widgets: ARIA roles (e.g., `role="tablist"`, `role="tab"`) match WAI-ARIA Authoring Practices.

---

## Other criteria worth knowing (less central but auditable)

| Criterion | Level | Quick test |
|-----------|-------|------------|
| 1.1.1 Non-text Content | A | Every `<img>` has `alt`; decorative images use `alt=""` |
| 1.4.4 Resize Text | AA | Browser zoom to 200% — content remains readable |
| 1.4.10 Reflow | AA | At 400% zoom on 320px width, no horizontal scroll |
| 2.1.1 Keyboard | A | Every interactive element reachable via Tab |
| 2.1.4 Character Key Shortcuts | A | Avoid single-key shortcuts or make them remappable |
| 2.4.3 Focus Order | A | Tab order matches visual order |
| 2.4.4 Link Purpose (In Context) | A | "Click here" links are forbidden; link text describes destination |
| 2.5.3 Label in Name | A | Visible label is the start of the accessible name |
| 3.1.1 Language of Page | A | `<html lang="en">` |
| 3.2.3 Consistent Navigation | AA | Nav doesn't reshuffle between pages |
| 3.3.1 Error Identification | A | Form errors stated in text, not just color |

---

## Manual keyboard audit protocol

For every shipped page, the Auditor runs:

1. Reload the page.
2. Press Tab. Every focused element must show a visible ring.
3. Continue tabbing through. Confirm:
   - Order matches visual reading order
   - No focus traps (can always Shift+Tab back)
   - No elements skipped that should be reachable
   - Sticky header doesn't obscure the focused element
4. Activate the mobile menu via Enter or Space. Confirm focus moves into the menu.
5. Press Escape (if applicable) to close the menu. Confirm focus returns to the trigger.

---

## Common WCAG 2.2 AA failures (and fixes)

| Failure | Cause | Fix |
|---------|-------|-----|
| Contrast 3.8:1 on muted text | Using `text-neutral-500` for body | Switch to `text-neutral-600` |
| No focus ring | `outline: none` without replacement | Add `:focus-visible` styles in global.css |
| Heading skip (H1 → H3) | Designer used H3 for a styling effect | Change tag to H2 or use `<p>` with class |
| Icon-only button has no label | `<button><svg></svg></button>` | Add `aria-label="..."` |
| Nested `<main>` | Layout has main, page also has main | Remove inner; use `<article>` |
| Footer text too light | `text-neutral-500 ~3.5:1` | Bump to `text-neutral-400` (against dark footer) or `neutral-600` (against light) |
| Sticky header covers focus | `scroll-padding-top` not set | Set on `html` |

---

## Verification checklist (Auditor)

- [ ] axe-core run on every page: zero Critical + zero Serious violations
- [ ] Manual keyboard tab walkthrough on `/`, `/about`, `/experience`, `/projects`, `/consulting`, `/writing`, `/fitness`
- [ ] Screen reader spot-check (VoiceOver) on `/`, `/about`, one case study
- [ ] Heading hierarchy verified on every page (DevTools → Accessibility tree)
- [ ] Color contrast verified for every text/bg combination present in the changed surfaces
- [ ] Focus rings visible on dark and light backgrounds
- [ ] Sticky header doesn't obscure focused elements
- [ ] No `outline: none` without replacement focus style
- [ ] All `<img>` have `alt` (or `alt=""` for decorative)
- [ ] Form labels paired (when forms exist)
- [ ] `<html lang="en">` set in Layout

---

*Quarterly refresh: 2026-08-01. WCAG 2.2 is the current standard; WCAG 3.0 is in draft (not yet a target).*

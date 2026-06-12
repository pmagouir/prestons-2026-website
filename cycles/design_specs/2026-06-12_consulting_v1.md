# Design Spec — Consulting (consulting.astro) (2026-06-12 cycle, v1)

**Surface:** `src/pages/consulting.astro`
**Cycle:** 2026-06-12 — lift the lowest lens (Consulting Buyer 7.5 → 9.5). Polish-and-refine.
**Author:** Designer | **Reads:** content draft `2026-06-12_consulting_v1.md` (the restructure: 4 offer blocks, buyer registers, fragment Results), baseline audit (M8, M9/Pattern 7, M13 palette, m8), glossary §Funder-Type Voice, refactoring_ui.md, wcag_2.2_aa.md.
**Depends on:** `2026-06-12_navigation-global_v1.md` (type tokens, color ledger, green-CTA rule, focus rule). Tokens by name below.
**Status:** Spec — for Site Lead Gate 1, then Engineer.

The Resume Consultant restructured this page into **four offer blocks** (AI Governance, Data & Analytics, Grant Writing, Org Change), each leading with one buyer register, each with "What I offer" (noun phrases) + "Results I've delivered" (now **fragments**, Pattern 7 fix). Preston's ask: the page must read **curated and confident, NOT a wall of service options.** This spec specifies the grid rhythm, the fragment layout, the CTA hierarchy (Calendly primary, now a green CTA), and how buyer registers are distinguished **without clutter.**

---

## 0. Gate 1 flags on this surface

1. **Offer-block order.** The content draft places **AI Governance first** (the 2026 front door; matches canonical Case-Study Sequence). The Designer agrees and specifies governance-first. Confirm at Gate 1 — this is a positioning decision (the OG promises "AI that's governed"; the buyer should hit it immediately).
2. **CTA color change.** Both Calendly CTAs move from `bg-neutral-900` to the **Hunter Green CTA** (global spec §3.3). This is the M13 palette deployment, not a new hue. Flagged because it's the page's most visible change.
3. **$10M+ registration** (content C4) is a Resume Consultant / canonical item, not a design item; noted so the fallback copy doesn't surprise the layout.

---

## 1. The design problem (from the baseline, Preston's ask)

The lens scored 7.5 — the lowest. The risk in adding a 4th block is **"wall of options."** Four service blocks stacked identically reads as a menu, not a curated practice. The fixes that make four blocks read as *curation*:

- **Restraint in the block chrome.** No boxes-within-boxes. Each block is a generous horizontal band separated by whitespace and a single hairline rule, not a bordered card. Confidence reads as space (refactoring_ui §6: "generous margin signals confidence; cramped signals hobbyist").
- **One buyer in view per block, signaled quietly.** A small **register tag** (eyebrow) names the audience without a colored callout box.
- **Fragments, not sentences, in Results** (Pattern 7) — fragments scan; sentences read as filler. Two tight columns.
- **A clear visual spine:** eyebrow → offer name (Lora) → offer line (one sentence, green) → intro paragraph → two-column offer/results. Same spine every block, so the eye learns the rhythm and the four blocks feel like one system, not four ads.

---

## 2. Information architecture

```
[NAV — 4 links]

HERO
  eyebrow: "Strategic Consulting"            ← --text-label, primary
  H1: "Data, strategy, and AI for…"          ← --text-h1, Lora
  lead: one paragraph (Inter)                ← --text-lead
  support: one paragraph (Inter)             ← --text-body
  [PRIMARY CTA — green: "Schedule time to meet"]

HOW I HELP
  H2: "How I Help"                           ← --text-h2
  ── 4 OFFER BLOCKS, vertical stack, hairline-separated ──
   ┌─────────────────────────────────────────────┐
   │ register tag (eyebrow) — "For foundations…"  │ ← --text-label, neutral-600
   │ H3: "AI Governance Audits"   (Lora)          │
   │ offer line (one sentence, primary, --text-lead)│
   │ intro paragraph (--text-body)                │
   │  ┌── What I offer ──┐  ┌── Results ──┐        │ ← 2-col on lg
   │  │ noun-phrase list │  │ FRAGMENT list│        │
   │  └──────────────────┘  └──────────────┘        │
   └─────────────────────────────────────────────┘
   (×4: AI Governance → Data & Analytics → Grant Writing → Org Change)

HOW WE WORK TOGETHER
  H2 + 3 engagement-model cards (Advisory / Project / Sprint)
  [single perceptible burgundy top-rule — the page's one burgundy element]

CTA SECTION (rounded panel)
  H2: "Let's talk about what you're building."
  paragraph
  [PRIMARY CTA — green: "Schedule time to meet"]
  location line: "Based in Washington, DC. Available for remote engagements."

[FOOTER]
```

**Single `<main>` (M5):** the page `<main>` at `consulting.astro:6` → `<div>`. The four offer blocks stay `<article>` (self-contained); the engagement-models and CTA are `<section>` (mdn_semantic_html).

---

## 3. The four offer blocks (Task 2 core — curated, not a wall)

### 3.1 Block chrome — the rhythm that reads as curation

- **Each block is a band, not a card.** Top separation = a single hairline `border-t border-neutral-200` + generous `pt-12` (current `border-t border-primary/10` is nearly invisible; raise to `neutral-200` so the separation is clean, OR — Designer's preferred — make the **first block's** top rule the page's one burgundy hairline (`border-secondary/30`) to signal "the offers start here," and the subsequent three use `neutral-200`). Blocks separated vertically by `space-y-16` (kept).
- **No nested borders.** The two columns inside (offer / results) have **no card backgrounds and no borders** — they're just two text columns under sub-labels. This is the key anti-"wall" move: the block's only chrome is its top hairline and its whitespace.
- **Block internal vertical rhythm:** eyebrow (register tag) → `mb-1` → H3 offer name → `mb-2` → offer line → `mb-6` → intro paragraph → `mb-8` → two-column grid. Consistent across all four.

### 3.2 The block spine (type)

| Element | Token | Font | Weight | Color | Notes |
|---------|-------|------|--------|-------|-------|
| Register tag (eyebrow) | `--text-label` | Inter | 600 | `neutral-600` (7.2:1) | NEW — names the buyer; see §3.4 |
| Offer name (H3) | `--text-h3` | Lora | 600 | `neutral-900` (16.4:1) | e.g. "AI Governance Audits" |
| Offer line | `--text-lead` | Inter | 500 | `primary` (10.9:1) | the one green sentence per block, e.g. "AI governance for mission-driven organizations." |
| Intro paragraph | `--text-body` | Inter | 400 | `neutral-700` (9.5:1) | 2–4 sentences |
| Sub-label "What I offer" / "Results I've delivered" | `--text-label` | Inter | 600 | `neutral-600` (7.2:1) | uppercase, tracked (m6 — Inter, not Lora) |

**The offer line is the only green text in the block body** (refactoring_ui §8, §5: one emphasis per scope; color drives attention). It's the buyer-facing promise; green earns its place there.

### 3.3 "What I offer" (noun phrases) + "Results I've delivered" (fragments) — the Pattern 7 layout

Two columns on `lg+` (`grid-cols-1 lg:grid-cols-2 gap-8`), stacked on mobile. Both are `<ul>`.

- **"What I offer"** — noun phrases (already acceptable per audit). List items: `--text-base`, `neutral-700`. Leading green `→` glyph (`aria-hidden`, m17), `mt-1.5` aligned to first text line. `space-y-3`.
- **"Results I've delivered" — fragments (Pattern 7 fix).** The Consultant converted full sentences to fragments (≤8–9 words + a number). **Layout for fragments:**
  - Each fragment is one `<li>`, `--text-base`, `neutral-700`, with the leading green `→` (`aria-hidden`).
  - **Where a fragment carries a number, the number is the visual anchor.** The Engineer wraps the leading figure (e.g., "$600K", "$50M+", "85%+", "9 staff, 3 units") in `<strong>` so it renders Inter 600 `neutral-900` (16.4:1) while the rest of the fragment stays 400 `neutral-700`. This makes the proof points scannable — the reader's eye catches the numbers first (refactoring_ui §5: hierarchy via weight + color, not size). Example render:
    - → **$600K** KPMG AI Impact Initiative grant (built the winning strategy)
    - → **$50M+** in DC CAP philanthropic commitments, including MacKenzie Scott / Yield Giving
  - Fragments without a number (e.g., "Long-term relationships with large-scale funders…") render in plain `neutral-700` — no forced emphasis (refactoring_ui §5: de-emphasize by reducing contrast, don't manufacture emphasis).
  - `space-y-3`. Fragment lines should not wrap past two lines; the Consultant's ≤9-word fragments hold to one line at `--text-base` in a half-width column on `lg`.

This is the single highest-leverage layout decision for the lens: numbers-as-anchors turns the Results column from prose-bullets into a proof ledger.

### 3.4 Buyer-register distinction WITHOUT clutter (Task 2 — explicit ask)

The content draft maps each block to a buyer (glossary §Funder-Type Voice). The design signals the register **with one quiet eyebrow tag per block, no colored boxes, no badges.**

| Block | Register tag (eyebrow text — Resume Consultant supplies exact words) | Lead register |
|-------|------------------------------------------------------------------------|---------------|
| AI Governance Audits | "For mission-driven organizations adopting AI" | foundation + corporate |
| Data & Analytics | "For education and philanthropy" | foundation + education |
| Grant Writing | "For funders and the funded" | foundation/corporate |
| Org Change | "For leaders and boards in transition" | individual exec / board chair |

- **Treatment:** the eyebrow tag sits above the offer name, `--text-label`, `neutral-600` (7.2:1), uppercase, 0.18em tracking. It is the *same* visual role across all four blocks (consistency), and its *content* differentiates the register. No color-coding by buyer (refactoring_ui anti-pattern: color-coded blocks without iconography is an a11y regression and visual clutter). The differentiation is **verbal in the tag + verbal in the offer line**, visually uniform. This is how four blocks stay one system.
- **Why not colored register cards:** four colored treatments would fracture the page and read as a marketing menu (the "wall" Preston wants to avoid). One uniform eyebrow per block keeps the page calm and lets the *copy* carry register — which is where the Consultant's buyer-voice work lives.

### 3.5 Optional Financial-Tool reference line (content Edit 6 — Designer's discretion)

The content draft offers a one-line credibility tag under the Data & Analytics block intro ("The financial scenario model I built for DC CAP's board, hosted at dccapinnovation.org, runs a 53-of-53 verification suite…"). **Designer decision: INCLUDE it, as a single muted line** directly under the Data & Analytics intro paragraph, `--text-sm`, `neutral-600`, **no hyperlink** (canonical rule: referenced, not linked — dccapinnovation.org renders as plain text, same color/weight as surrounding copy, per the about_v1 2026-05-03 precedent). It adds Lane B credibility without a second link. If the page reads dense at build, drop it (the Results fragment carries the claim). Keeping it: it's one quiet line, not a block.

---

## 4. CTA hierarchy (Task 2 — Calendly primary)

Two Calendly CTAs (hero + closing). Both are the **primary action** on the page.

- **Both render as the Hunter Green primary CTA** (global spec §3.3): `bg-primary`, label `white` (11.9:1), `--text-base` Inter 600, `rounded-lg px-8 py-4`. Hover: `bg-[oklch(0.34_0.06_145)]` (`#264A34`, label white 10.9:1) + `shadow-md` (refactoring_ui §9, elevation on hover). Rest `shadow-sm`.
- **The arrow icon** inside the CTA (`→`) is `aria-hidden="true"`; the label "Schedule time to meet" is the accessible name (wcag_2.2_aa §2.4.4, mdn_semantic_html).
- **No competing CTA.** The page has exactly one CTA style (green Calendly), appearing twice. The engagement-model cards are **not** CTAs (no buttons inside them) — they're descriptive. This keeps the primary action unambiguous (refactoring_ui §5: one emphasis per scope; the green button is the page's single call to action).
- **Focus:** global `:focus-visible` with the **light ring** (`outline-color: var(--color-background)`) since the CTA ground is dark green (global spec §4.1). Light ring on green = 10.9:1.
- **Target size:** `py-4 px-8` ≫ 24×24 (wcag_2.2_aa §2.5.8). Passes with large margin.

---

## 5. Engagement-models section + CTA panel

### 5.1 "How We Work Together" (3 cards)

- Three cards: Advisory Retainer / Project-Based / Intensive Sprint. Kept as `rounded-lg border border-neutral-200 bg-white p-6` cards in `grid-cols-1 md:grid-cols-3 gap-6`.
- **Section top rule = the page's one burgundy element** (if §3.1 used neutral for block 1): `border-t border-secondary/30` (a perceptible warm hairline, decorative, exempt from text contrast). This is the deliberate burgundy accent the M13 fix calls for — used once, at a meaningful section break (refactoring_ui §8 restraint; global spec §3.3 budget 6:1 green:burgundy). If §3.1 spent the burgundy on block 1's top rule instead, this section uses `neutral-200` — **only one burgundy rule on the page.** Designer preference: burgundy here (the "how we work" break is the more meaningful divide).
- Card chrome: the cards have a light `neutral-200` border (decorative — the card isn't a control; its "actionability" is nil, it's descriptive) + `hover:shadow-sm`. **Since these cards are not interactive (no link/button inside), remove the hover shadow** (m10 — hover state implies interactivity). Render static. The "who it's for" line at the card foot stays `--text-sm`, `primary` (10.9:1 on white) — a small green accent that's earned (it's the key differentiator per card).
- Card type: H3 model name `--text-h3` capped (≈18px here, `text-lg`) Lora 600; body `--text-body`→`--text-base` Inter 400 `neutral-700`; "who" line `--text-sm` `primary`.
- **m8 (hyphen → en-dash):** "3–5 hours monthly", "2–4 weeks" (content Edit 7). Engineer applies in copy.

### 5.2 Closing CTA panel

- Kept as `rounded-2xl border border-neutral-200 bg-neutral-50 p-12 sm:p-16`, centered, `max-w-3xl`.
- H2 `--text-h2` Lora 600 `neutral-900`; paragraph `--text-lead` `neutral-700`; primary green CTA (§4); location line `--text-sm` `neutral-600` (7.2:1), canonical "Washington, DC" form.
- This is the one place centered text is acceptable (short hero-style copy, refactoring_ui §6 — never center the long-form offer blocks above).

---

## 6. Color (this surface — from the global ledger)

| Role | Token / OKLCH | Hex | Contrast | Use |
|------|---------------|-----|----------|-----|
| H1, H2, H3, number anchors | `neutral-900` `oklch(0.21 0 0)` | `#171717` | 16.4:1 / 15:1 | headings, `<strong>` figures in fragments |
| Body | `neutral-700` `oklch(0.37 0 0)` | `#404040` | 9.5:1 | intros, list items |
| Eyebrows, register tags, sub-labels, location | `neutral-600` `oklch(0.44 0 0)` | `#525252` | 7.2:1 | labels, meta |
| Offer line, "who" lines, links | `primary` `oklch(0.30 0.06 145)` | `#1F3D2B` | 10.9:1 / 11.9:1 white | green accent (one per block + per card) |
| **CTA label** | `white` | `#FFFFFF` | 11.9:1 on `#1F3D2B` | Calendly button text |
| **CTA ground** | `primary` `oklch(0.30 0.06 145)` | `#1F3D2B` | — | button bg (replaces neutral-900) |
| CTA hover ground | `oklch(0.34 0.06 145)` | `#264A34` | white 10.9:1 | button hover |
| Burgundy section rule | `secondary/30` `oklch(0.36 0.13 18 / .3)` | — | decorative, exempt | the page's one burgundy element |
| Panel surface | `neutral-50` | `#FAFAFA` | — | closing CTA panel |
| Card border | `neutral-200` | `#E5E5E5` | decorative | engagement cards (non-interactive) |

Every text pairing ≥7.2:1. The green CTA label is the only white-on-color text (11.9:1). Burgundy appears once (the section rule). Green : burgundy ≈ 9 : 1 by element count — within the global 6:1 budget.

---

## 7. Spacing & rhythm

- Container `max-w-7xl`, `px-6 py-16 lg:px-8 lg:py-24` (kept). Hero `mb-24`, sections `mb-24` (kept — the generous section gaps are doing the "confident/curated" work; refactoring_ui §6).
- Offer blocks `space-y-16` between, `pt-12` after each top rule (kept).
- Two-column offer/results `gap-8` (kept).
- **Body line length:** the intro paragraphs sit in `max-w-3xl` (kept) ≈ 65–75ch — within optimal (refactoring_ui §6). The offer/results columns are half-width on `lg`, naturally short. Good.
- Engagement cards `gap-6` (kept). Closing panel `p-12 sm:p-16` (kept).

---

## 8. Motion (this surface)

| Animation | Trigger | Property | Duration | Easing | reduced-motion |
|-----------|---------|----------|----------|--------|----------------|
| Green CTA hover | hover | background-color + box-shadow | 150ms | ease-out | instant color, no shadow tween |
| Link hover (offer-line, who-line) | hover | color | 150ms | ease-out | instant |
| Engagement cards | (none) | — | — | — | **hover shadow REMOVED (m10)** |

Global reduced-motion block (global spec §4.3) covers all. No scroll-reveal on the blocks (refactoring_ui anti-pattern; the page is dense already — animating reveals would feel late-2010s and slow the LCP).

---

## 9. Accessibility (this surface)

- **Headings:** one H1 (hero). "How I Help", "How We Work Together", and the closing H2 = H2. Each offer block name = H3 (under "How I Help" H2). Each engagement model name = H3 (under "How We Work Together" H2). No skips (mdn_semantic_html). The sub-labels "What I offer" / "Results I've delivered" are **not** headings — render as styled `<p>`/`<h4>`; if `<h4>`, they nest correctly under the block H3. Designer recommends `<p class="label">` to avoid an h4-per-block proliferation; either is valid as long as it's consistent and doesn't skip.
- **Landmarks:** offer blocks `<article>`, other sections `<section>`, all inside the one `<main>`. Page wrapper `<div>` (M5).
- **CTAs:** `<a href>` (navigation to Calendly) with `target="_blank" rel="noopener noreferrer"` (kept). Arrow `aria-hidden`. Accessible name = "Schedule time to meet".
- **Lists:** `<ul>`/`<li>` for offer + results (real lists, mdn_semantic_html — not faked with divs). Arrow glyphs `aria-hidden` (m17).
- **Focus:** global `:focus-visible`; light ring on the green CTAs (§4), green ring on body links.
- **Contrast:** all ≥7.2:1; CTA white-on-green 11.9:1 (§6). Passes 1.4.3 AA.
- **dccapinnovation.org** rendered as plain text (not a link) per canonical — so no link-purpose obligation (wcag_2.2_aa §2.4.4) attaches to it.

---

## 10. Responsive

- `< lg`: offer blocks single column (offer list then results list stack). Hero stacks. Engagement cards single → `md:grid-cols-3`.
- `lg+`: offer/results two columns; engagement cards three.
- 400% / 320px (§1.4.10): everything stacks single-column; `max-w-3xl` intros and half-width columns collapse to full-width; no horizontal scroll.

---

## 11. Verification gate (this surface)

- [x] Four-offer layout reads as curated bands (hairline + whitespace), not a wall of cards (§3.1).
- [x] Results fragments laid out with numbers-as-anchors (`<strong>` figures) — Pattern 7 served (§3.3).
- [x] Buyer registers distinguished by one uniform eyebrow tag + offer line, no colored clutter (§3.4).
- [x] CTA hierarchy: single green Calendly CTA ×2, no competing buttons (§4).
- [x] M13 palette deployed: green CTA replaces neutral-900; one perceptible burgundy rule (§5.1, §6).
- [x] Every color pairing OKLCH + computed contrast, all ≥7.2:1; CTA 11.9:1 (§6).
- [x] Every motion has reduced-motion fallback; non-interactive card hover removed (§8, m10).
- [x] Single `<main>` assumed; heading hierarchy verified (§2, §9).
- [x] Governance-first order + CTA color flagged for Gate 1 (§0).

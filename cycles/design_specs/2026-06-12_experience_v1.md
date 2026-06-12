# Design Spec — Experience (experience.astro) (2026-06-12 cycle, v1)

**Surface:** `src/pages/experience.astro`
**Cycle:** 2026-06-12 — polish-and-refine; the page gets **denser** (expanded role scope, operational-discipline record, promotions signal, new Speaking block). The job is to absorb density while **keeping rhythm and white space** (glossary: "white space is part of the rhythm").
**Author:** Designer | **Reads:** content draft `2026-06-12_experience_v1.md` (Edits 1–7), baseline audit (m1, m6, m7, m13 type), refactoring_ui.md, wcag_2.2_aa.md, mdn_semantic_html.md.
**Depends on:** `2026-06-12_navigation-global_v1.md` (type tokens, color ledger, focus, motion). Tokens by name below.
**Status:** Spec — for Site Lead Gate 1, then Engineer.

The content draft expands the DC CAP role bodies (FP&A, supervisory span, primary-architect, Standards of Practice, promotions, Salesforce architecture, agentic systems) and adds a **Speaking** block after Education. The longest role body grows to ~150 words. This spec keeps the timeline scannable and adds the Speaking block in the Education register.

---

## 0. Gate 1 flags on this surface

1. **Speaking block placement.** The content draft places "Speaking" **after Education** (`border-l-2` register matching the Education entries). Designer agrees and specifies it (§5). No new claim type; record-capture.
2. **UERU expansion** is a content/verification item (the draft flags the expansion as unverified — render the acronym alone unless Preston confirms). No design impact; noted so the Speaking block's layout doesn't assume a long expansion string.
3. No palette/type change. Type is the global tokenized scale (fixes m7's "experience at 7xl" inconsistency — H1 standardizes to `--text-h1`, see §2).

---

## 1. The density problem (Task 3 — keep rhythm + white space)

The DC CAP role currently has four labeled paragraphs (Executive Leadership / Innovation + Fundraising / Organizational Health / Change Management). The content draft expands all four; Change Management alone reaches ~150 words. Stacked without rhythm, the timeline becomes a wall of gray text — the exact "template-grade" tell to avoid.

**The rhythm devices (how density stays unhurried):**

1. **Labeled-paragraph structure stays** (`<strong>` lead-in + body). The bold lead-in ("Executive Leadership:") is a scan-anchor — the reader's eye lands on the four bold labels and chooses where to read (refactoring_ui §5: hierarchy via weight). This is *why* the dense body still scans.
2. **Short paragraphs, white space between** (glossary). Each labeled paragraph is its own `<p>` with `space-y-4` between (kept). No paragraph runs past ~150 words; the Consultant's drafts hold to 2–5 sentences each.
3. **The timeline spine** (left border + node dots) gives the eye a vertical rail, so even a tall role block reads as one unit anchored at one point in time.
4. **Generous role-to-role spacing** (`space-y-16`, kept) — the white space *between* roles is the breathing room that keeps the denser bodies from compounding into a wall.
5. **Numbers as anchors** inside the prose: where a body carries a figure (85–90%, $600K, $50M, 9 staff, 3–5 hours), the Engineer wraps the figure in `<strong>` (Inter 600 `neutral-900`) so proof points punctuate the gray and give the eye rest-stops. Applied judiciously — not every number, only the load-bearing ones (≈2–3 per role body), to avoid bold-everything (refactoring_ui §5).

---

## 2. Information architecture

```
[NAV — 4 links]

H1: "Experience"                              ← --text-h1 (was lg:text-7xl; m7 fix)
subhead (cross-sector arc, Lora dek)          ← --text-dek

PROFESSIONAL EXPERIENCE
  H2                                          ← --text-h2
  ── timeline: border-l-2 + node dots ──
   ● Chief Strategy & Analytics Officer | DC CAP   ← H3
       July 2023 – Present | Washington, DC        ← meta
       Executive Leadership: …  (denser)
       Innovation + Fundraising: …  (denser)
       Organizational Health: …  (denser, +promotions)
       Change Management: …  (denser, ~150w)
   ● Senior Manager… | Common App  (H3 + 3 paras)
   ● IES Predoctoral Fellow | UVA   (H3 + 2 paras)
   ● Associate Editor | Peabody     (H3 + 1 para)
   ● Corps Member | TFA             (H3 + 1 para)

EDUCATION                                     ← H2
  3 entries (border-l-2 register)

SPEAKING  (NEW)                               ← H2, same register as Education
  1 paragraph (3 conferences)

[SkillsToolkit component]
[FOOTER]
```

**Single `<main>` (M5):** page `<main>` at `experience.astro:7` → `<div>`. The two existing `<section>`s (Professional Experience, Education) are correct; Speaking is a new `<section>` (mdn_semantic_html).

---

## 3. Typography (apply tokenized scale — m7, m6)

| Element | Token | Font | Weight | Color | Line-height |
|---------|-------|------|--------|-------|-------------|
| Page H1 "Experience" | `--text-h1` (36→64px) | Lora | 600 | `neutral-900` (16.4:1) | 1.06 |
| Subhead (cross-sector arc) | `--text-dek` (20→26px) | Lora | 500 | `neutral-900` | 1.4 |
| Section H2 (Professional / Education / Speaking) | `--text-h2` (28→40px) | Lora | 600 | `neutral-900` | 1.12 |
| Role title (H3) | `--text-h3` (22→26px) | Lora | 600 | `neutral-900` | 1.18 |
| Role meta (dates / location) | `--text-base` (16px) | Inter | 400 | `neutral-600` (7.2:1) | 1.5 |
| Body label lead-in `<strong>` | `--text-base` | Inter | 600 | `neutral-900` (16.4:1) | 1.65 |
| Body text | `--text-base` (16px) | Inter | 400 | `neutral-700` (9.5:1) | 1.65 |
| Number anchors `<strong>` in body | `--text-base` | Inter | 600 | `neutral-900` | 1.65 |
| Education entry title `<strong>` | `--text-lead` capped (≈18px) | Inter | 600 | `neutral-900` | 1.3 |
| Education entry meta | `--text-base` | Inter | 400 | `neutral-600` | 1.5 |

- **m7 fix:** H1 was `text-5xl … lg:text-7xl` (72px); now `--text-h1` (64px max). Section H2 was `text-2xl … lg:text-4xl`; now `--text-h2` (40px max). Consistent with about/consulting.
- **m6 fix:** Experience has no uppercase tracked labels except via the timeline; no Lora/Inter label split here. The `<strong>` lead-ins are body emphasis (Inter 600), not labels — correct.
- **m1 fix (content):** the subhead rewrite (content Edit 1) replaces "amazing teams who" with the cross-sector arc. Type treatment as `--text-dek` Lora 500, the lead-paragraph register — it's the page's one editorial flourish line, set in the serif at dek size.
- **m13 fix (content):** "Ph.D./M.P.P." dotted vs "PhD/MPP" undotted — content item; the Education entries and the (separate) About sidebar should agree. Design renders whatever the Consultant settles; type slot is `--text-lead` capped for the entry title.

---

## 4. The timeline (rhythm spine — keeps dense bodies scannable)

- **Structure kept:** `space-y-16 border-l-2 border-neutral-200 pl-16 sm:pl-28`, each role a `relative` block with an absolute node dot (`-left-[11px] top-2 h-3 w-3 rounded-full border-2 border-white bg-primary`) and inner `pl-6`.
- **Node dot color:** `bg-primary` (Hunter Green) on a `border-white` ring — the green dot on the rail is an earned accent (10.9:1 vs `#F5F5F4`; 1.4.11 non-text ✓ at 10.9:1). Keep.
- **The rail (`border-l-2 border-neutral-200`):** decorative structure, not an interactive boundary — `neutral-200` is fine (exempt from 1.4.11). Keep.
- **Body internal spacing:** `mt-6 space-y-4` (kept) between the four labeled paragraphs. The `space-y-4` is the white-space rhythm that lets four denser paragraphs read as four beats, not one block (Task 3).
- **Density mitigation:** with the DC CAP body now ~4 paragraphs totaling ~450 words, the **role-to-role `space-y-16`** is what prevents the page reading as a wall. Confirm `space-y-16` (do not reduce to absorb the new Speaking block — the page is allowed to be taller; length is fine, crowding is not — refactoring_ui §6).
- **Body line length:** the timeline body sits in `max-w-5xl` minus the `pl-28` indent ≈ a comfortable measure on `lg`. The labeled paragraphs run ~70–80ch at `--text-base`; acceptable (the bold lead-ins break the line visually). No `max-w-prose` needed here — the indent + lead-ins already shape the measure.

---

## 5. Speaking block (Task 3 — new, beside Education register)

The content draft adds a Speaking section after Education with one paragraph naming three FY26 conferences. **Spec:**

### 5.1 Placement + structure

- A new `<section>` **after** the Education `<section>`, inside the `space-y-20` stack (kept — the page's section gap). So: Professional Experience → Education → Speaking, each separated by `space-y-20`.
- Heading: `<h2>` "Speaking", `--text-h2`, Lora 600 `neutral-900`, `mb-12` (matching the other section H2s exactly — Education and Professional both use `mb-12`).

### 5.2 Body treatment (matches the Education `border-l-2` register — explicit ask)

The content draft asks the Speaking body to match the Education entries' `border-l-2` treatment (`experience.astro:154–167`). The Education entries use `border-l-2 border-neutral-100 pl-6`. **Spec:**

- The Speaking paragraph renders in a single `border-l-2 border-neutral-200 pl-6` block (one entry, not a list — it's one sentence naming three conferences). Use `border-neutral-200` (slightly stronger than Education's `neutral-100`) so the single block has a perceptible rail; OR match Education's `neutral-100` exactly for register consistency. **Designer preference: match Education's `border-neutral-100`** so Speaking reads as a sibling of Education (same visual family), since both are "credentials-adjacent record" sections. Consistency over emphasis here.
- Body text: `--text-base`, Inter 400, `neutral-700` (9.5:1). Conference names render in plain body weight (no `<strong>` — they're proper nouns, not numeric proof points; over-bolding three names would clutter). `leading-relaxed` (1.65).
- **No bullet list.** One sentence, one paragraph (Pattern 7 — the Consultant deliberately wrote prose, not bullets). The `border-l-2` block holds the single paragraph.
- If Preston later adds per-conference detail, the block can become a `<ul>` of three `border-l-2` entries mirroring Education's three-entry stack. For now, one paragraph.

### 5.3 Speaking — why this register, not a card

Speaking is record-capture for audiences 1 & 4 (peers/recruiters), the lowest-priority signal on this page. It earns a **quiet** treatment: same rail as Education, no card, no color callout. Putting it in the Education visual family signals "this is part of the credentials record," which is exactly its weight (refactoring_ui §5: treatment reflects weight). A card or colored block would over-promote it.

---

## 6. Education section (kept; tokenized)

- Three entries, each `border-l-2 border-neutral-100 pl-6`: title `<strong>` (`--text-lead` capped, Inter 600 `neutral-900`) + meta `<span>` (`--text-base`, `neutral-600`). `space-y-4` between. Keep.
- m13 (content): "M.P.P., Public Policy" redundancy and dotted/undotted consistency — Consultant settles; design renders the result.

---

## 7. Color (this surface — from the global ledger)

| Role | Token / OKLCH | Hex | Contrast | Use |
|------|---------------|-----|----------|-----|
| H1, H2, H3, lead-ins, number anchors | `neutral-900` `oklch(0.21 0 0)` | `#171717` | 16.4:1 | headings, `<strong>` |
| Body | `neutral-700` `oklch(0.37 0 0)` | `#404040` | 9.5:1 | role bodies, Education, Speaking |
| Meta (dates, locations) | `neutral-600` `oklch(0.44 0 0)` | `#525252` | 7.2:1 | role meta, entry meta |
| Timeline node dot | `primary` `oklch(0.30 0.06 145)` | `#1F3D2B` | 10.9:1 (non-text) | the green dots on the rail |
| Timeline rail | `neutral-200` | `#E5E5E5` | decorative | left border |
| Education / Speaking rail | `neutral-100` | `#F5F5F5` | decorative | entry left borders |
| Any link | `primary` | `#1F3D2B` | 10.9:1 | (none in-body currently; reserved) |

No burgundy on this page (in-body budget 0; nav active is global). Green appears only as the timeline dots — a restrained, structural accent (refactoring_ui §8). Every text pairing ≥7.2:1.

---

## 8. Spacing & rhythm

- Container `max-w-5xl` (kept — narrower than home/about/consulting `7xl`; correct for a text-dense reading page). Page padding `px-6 py-16 lg:px-8 lg:py-24` (kept).
- H1 `mb-6`; subhead `mb-16` (kept). Section stack `space-y-20` (kept) — now holds three sections (Professional / Education / Speaking).
- Section H2 `mb-12` (kept, uniform).
- Timeline `space-y-16` between roles; body `mt-6 space-y-4` (kept).
- Education + Speaking entries `space-y-4` (kept).
- **The rhythm budget:** the page grows by ~300 words (DC CAP body) + the Speaking block. The fixed `space-y-20` / `space-y-16` / `space-y-4` scale absorbs it without re-tuning — the density lands inside existing rhythm slots. No spacing value changes this cycle; the scale already handles it (refactoring_ui §6: stick to the scale).

---

## 9. Motion (this surface)

| Animation | Trigger | Property | Duration | Easing | reduced-motion |
|-----------|---------|----------|----------|--------|----------------|
| Any link hover | hover | color | 150ms | ease-out | instant (global block) |
| Timeline / dots | (none — static) | — | — | — | n/a |

No scroll-reveal on the timeline (refactoring_ui anti-pattern; would slow a long page and feel dated). The page is editorial-still. Global reduced-motion block covers all. SkillsToolkit motion handled in the global spec (§8 — chips static, no hover).

---

## 10. Accessibility (this surface)

- **Headings:** one H1 ("Experience"). "Professional Experience", "Education", "Speaking" = H2. Role titles + Education entry titles = H3 under their H2. No skips (mdn_semantic_html). The `<strong>` body lead-ins are emphasis, not headings — correct (do not promote them to headings for styling).
- **Landmarks:** three `<section>`s inside the one `<main>`. Page wrapper `<div>` (M5). SkillsToolkit is a `<section>` (its own H2 "Technical Toolkit" — verify it doesn't collide with the page H2 order; it sits after `</main>`-equivalent content, a sibling section, which is fine).
- **Timeline semantics:** the timeline is a visual device over `<div>`s; the role blocks are not a `<ul>` (they're heading+content units, correctly `<div>` containers with H3s). Node dots are decorative `<div>`s (no text); no aria needed (they convey nothing a screen reader user misses — the H3 + date carry the chronology).
- **Focus:** global `:focus-visible` on any link. No interactive elements in the timeline currently.
- **Contrast:** all ≥7.2:1; node dot 10.9:1 non-text (§7). Passes 1.4.3 + 1.4.11.
- **Speaking — UERU:** if the acronym renders alone (per content flag), consider `<abbr title="…">` only if the expansion is verified; otherwise render plain text (do not guess an expansion into an `abbr title` — that would ship an unverified claim, Lesson 7). Design defers to content.

---

## 11. Responsive

- `< sm`: timeline indent reduces (`pl-16` not `sm:pl-28`); role bodies full-width. Sections stack (already vertical).
- `lg+`: `max-w-5xl` centered; timeline `pl-28`.
- 400% / 320px (§1.4.10): single column, reduced indent, no horizontal scroll. The `border-l-2` rails and `pl-6` indents hold at narrow widths.

---

## 12. Verification gate (this surface)

- [x] Denser body keeps rhythm: labeled-paragraph anchors + `space-y-4` bodies + `space-y-16` role gaps + numbers-as-anchors (§1, §4).
- [x] Speaking block spec'd in the Education `border-l-2` register, quiet treatment (§5).
- [x] Tokenized type scale applied; H1/H2 standardized (m7) (§3).
- [x] Every color pairing OKLCH + computed contrast, all ≥7.2:1; node dot 10.9:1 (§7).
- [x] Motion has reduced-motion fallback; no scroll-reveal added (§9).
- [x] Single `<main>` assumed; heading hierarchy verified (§2, §10).
- [x] Speaking placement flagged for Gate 1 (§0).

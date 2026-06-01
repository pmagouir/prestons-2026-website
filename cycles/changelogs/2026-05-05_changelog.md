# Changelog — Monthly Refresh 2026-05
# Cycle dates: 2026-05-03 (kickoff) → 2026-05-05 (close)
# Branch: monthly-refresh-2026-05 (commits 65edd16, 65b7894)
# Status: Locally committed, NOT pushed (per Preston's "audit first" decision). Ready to merge when Preston approves.

## Pages Touched

- `src/components/Hero.astro` — full rewrite (Preston-authored): eyebrow, headline, subhead, fluid clamp typography, 55/45 grid ratio.
- `src/pages/about.astro` — meta description, paragraph 2 (cross-sector + group fitness), paragraph 3 (regional partnership + goal), new paragraph 4 (relational work), revised paragraph 5 (technical), operating principles 1/2/3, "Real Work" → "My Family", sidebar (title, Core Focus, Credentials with AU Board + IES + Peabody Honors).
- `src/pages/experience.astro` — DC CAP role tighten + operational compression numbers; Common App founding-team selectivity + RCT mention; UVA reframed around UVA–LDOE policy and accountability systems partnership; MPP entry adds Peabody Honors Scholar; per-role "View..." CTAs removed.
- `src/components/ProjectGrid.astro` — Project 3 reframed (UVA–Louisiana Department of Education Partnership; tags updated).
- `src/layouts/Layout.astro` — JSON-LD Person schema added to head; default meta description updated to canonical phrasing.
- `.claude/launch.json` — Preview MCP launch config (already present at BRAIN/.claude/launch.json; this stub satisfies per-repo lookup).

## Content Changes (high level)

| Surface | Before | After |
|---|---|---|
| Hero | "Strategy and systems for work that matters" + generic subhead | Title in eyebrow, Preston's own active-voice headline, "we" framing in subhead |
| About sidebar | 3-item credential list, "Change Management / Strategy & Operations / Analytics & Research" | 4-item credentials (PhD with IES, MPP with Peabody Honors, CF-L3, AU Board), refreshed Core Focus |
| About body | 3 paragraphs (throughline / generic career / DC CAP role) | 5 paragraphs (throughline / cross-sector / DC CAP role + partnership / relational / technical), new "My Family" |
| About operating principles | "my teams" possessive in 2 + 3, grammar bug in 3, semicolon in 1 | Corrected possessives, grammar fixed, canonical punctuation |
| Experience UVA section | "Virginia Education Science Training Fellow" generic project framing | "IES Predoctoral Fellow, Educational Policy Studies" with UVA–LDOE policy and accountability systems partnership as umbrella |
| Experience Common App | Generic founding-team description | Selectivity callout: "the largest college application dataset in the United States" + RCT mention |
| Experience CTAs | 3 "View..." per-role links into /projects (false promise) | Removed; users navigate via top nav |
| Project 3 (LDOE) | "Systemwide Quality Improvement in Louisiana" / QRIS-only framing | "UVA–Louisiana Department of Education Partnership" with QRIS as downstream artifact |
| Layout head | No structured data | JSON-LD Person schema (parses, valid against schema.org) |

## Design Changes

- Hero typography: fluid clamp scale (max 3.75rem after revision; was tighter earlier in cycle).
- Hero grid: 50/50 → ~57.5/42.5 text/photo on lg+.
- About sidebar leading: tighter for credentials (`leading-snug`).

## Code Changes

- JSON-LD Person schema: `Layout.astro` `<head>` carries the canonical Person record across every page. Includes name, jobTitle, worksFor (DC CAP), alumniOf (UVA / Vanderbilt / Tulane), hasCredential (PhD / MPP / IES Fellow), knowsAbout (8-item controlled vocabulary). `sameAs` array intentionally omitted — Preston confirmed footer already carries profile links.
- Inline `style` with `clamp()` on hero typography (Tailwind v4 arbitrary value alternative considered; inline kept for now since this scale is hero-only).
- No new dependencies. No `tailwind.config.mjs` or `@theme` token changes.

## Audit Findings Carried Forward (next cycle scope)

These were caught during this cycle's audit but are pre-existing issues not introduced by the cycle. Preston scheduled all five for next cycle:

1. **Footer copyright color contrast** (axe Serious — `text-neutral-500` on background fails 4.5:1).
2. **Nested `<main>` landmarks** on about.astro and experience.astro (Layout already has `<main>`; pages should not declare their own — 2 axe Moderate findings each).
3. **Hero portrait → Astro `<Image>`** for AVIF/WebP and srcset.
4. **Self-host fonts via Astro `<Font>`** for zero CLS (currently Google Fonts via CDN).
5. **About heading hierarchy skip** — H1 → H3 with no H2 (re-tag "How I Operate" eyebrow as `<p>` and "My Family" / "How I Operate" container H3s as appropriate).

Plus the multi-cycle items already deferred:

6. **C6 — case-study layer rebuild** at `/projects/[slug]` per canonical priority sequence.
7. **C8 — consulting page** split into 3 buyer registers.

## Process Lessons Captured

- **Lesson 8 (`.learn/lessons.md`):** Pre-implementation Preston gate. PROTOCOL.md should formalize this as Step 3.5 — the Designer surfaces the plan, Preston approves scope and answers open questions, Engineer proceeds with explicit scope. Implementation is cheap to reverse but expensive to redo when the upstream framing was wrong.
- **Pattern 14 (`.learn/errors.md`):** "I" framing where "we" framing is the right register. Codified as the credit-attribution check applied on every Preston-voice claim. Watch on every page on every cycle.
- **canonical.md correction:** Scholar Matching framing rule added — "allocates scholarship offers among ~700 applicants" (not "places ~700 scholars"). Drop "Gale-Shapley" technical name from public copy; use "empirically validated matching algorithm." The Nobel Prize lineage stays in technical references, not on the public site.

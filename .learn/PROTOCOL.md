# PROTOCOL.md — Website Cycle Sequence (8-agent node)

How the team runs in sequence and what each step produces. The orchestration is owned by the **Site Lead** (`.claude/agents/site-lead.md`), which runs as the main thread (`claude --agent site-lead`) and dispatches the seven specialists. Subagents cannot spawn subagents, so every handoff routes through the Site Lead, which surfaces the two gates to Preston. Cycle artifacts live in the node's `cycles/` directory.

---

## Default cadence: monthly, plus ad-hoc triggers

**When:** first of each month (the `website-refresh` scheduled task), plus any ad-hoc trigger below. A no-change cycle is a healthy outcome — the Scout still records "no material changes" and the cycle closes.

**Sequence (each step gates the next):**

```
Site Lead (orchestrator)
  → BRAIN Scout → Content Architect → Resume Consultant → Designer
  → [GATE 1 — Preston reviews scope]
  → Engineer → Performance & SEO → Auditor
  → [GATE 2 — Preston approves merge]
  → Engineer ships to main → changelog
```

### Step 1 — BRAIN Scout (read-only detection)

Reads `.learn/` files, `strategic_brief.md`, the current site surface, and recent BRAIN activity (session_log, decisions, dev-office briefings, thought-leadership drafts, recent commits). Produces `cycles/proposals/YYYY-MM-DD_proposal.md`. Per-candidate fields: **source artifact, surface (page/section), proposed change, lane (A operator / B builder), audience priority, pattern flag, evidence link, canonical-update-needed (yes/no)**. Plus carryover, no-change surfaces, and sources-walked sections. Flags canonical-update proposals separately. Writes no content, design, schema, or code.

### Step 2 — Content Architect (schema + ingestion)

Reads the proposal. Maintains `src/content.config.ts` (Zod-typed `writing` / `projects` / `talks` / `media` / `recognition` collections) and creates the `src/content/<collection>/` directories. Maps each advancing candidate to a collection and writes stubbed entries (valid front matter, body left `TODO` for the Resume Consultant). Marks any value absent from `canonical.md` as `TODO(canonical)` and flags it. Build must validate all collections.

### Step 3 — Resume Consultant (positioning + copy)

Reads the proposal + stubbed entries. Triages advance/defer/reject. Drafts prose in Preston's voice (preloaded `preston-writing`; invokes `dc-cap-org-intelligence`, `researching-with-confidence`, `checking-communications`). Fills entry bodies and writes page drafts to `cycles/content_drafts/[surface]_vN.md`. Every number cites `canonical.md`; no `errors.md` pattern present.

### Step 4 — Designer (visual + a11y spec)

Reads the drafts + current Tailwind config + `global.css`. Produces `cycles/design_specs/[surface]_vN.md`: layout, type scale (`clamp()`), OKLCH colors with verified contrast, motion with `prefers-reduced-motion`, spacing, accessibility. Writes no code. Flags any palette/type change for Preston.

### GATE 1 — Preston reviews scope

Site Lead surfaces triage decisions, net effect (surfaces touched), and open questions. Preston approves scope and answers questions. The Engineer does not touch code before this gate clears (Lesson 8).

### Step 5 — Engineer (implementation)

Reads the spec + schema + approved scope. Implements on feature branch `monthly-refresh-YYYY-MM`: wires collections into pages, converts images through `astro:assets`, converts OKLCH to the Tailwind theme. `npm run build` green, no broken links. Writes `cycles/diffs/[surface]_vN.md`. Does not push to main.

### Step 6 — Performance & SEO (budgets + structured data)

Verifies Core Web Vitals against `lighthouserc.json`, completes structured data (Person `sameAs`, Article, BreadcrumbList; verified URLs only), confirms `site:` URL / sitemap / RSS / robots / OG image. Files off-budget fixes for the Engineer. Returns a findings note.

### Step 7 — Auditor (4-lens adversarial review)

Reads all upstream handoffs + the preview. Runs four lenses (Executive Recruiter / Consulting Buyer / Brand & Voice / Performance & Accessibility). Runs axe-core + Lighthouse, validates JSON-LD, traces every claim to `canonical.md`, scans every changed surface against every `errors.md` pattern. Produces `cycles/audits/YYYY-MM-DD_audit.md` with a merge / revise / block verdict. Final authority on voice and accessibility.

### GATE 2 — Preston approves merge

Site Lead surfaces the verdict + diff summary. On approval the Engineer merges to main; Vercel deploys. Scheduled runs commit to the feature branch but never push or merge — Preston is the gate.

### Step 8 — Engineer ships + records

Merges (on approval), then writes `cycles/changelogs/YYYY-MM-DD_changelog.md`: surfaces touched, content/design/code changes, and audit findings carried forward.

## Ad-hoc triggers

New published writing · role change or major project ship · verified media mention · speaking engagement confirmed · first major consulting engagement · a Critical audit finding mid-cycle. Ad-hoc runs use the same sequence, scoped to the trigger.

## Escalation

| Situation | Escalation |
|-----------|-----------|
| Scout surfaces a fact not yet in `canonical.md` | Flag as canonical-update; Site Lead routes to Preston before drafting |
| Resume Consultant lacks a verified number | Scout re-checks BRAIN; if absent, Preston supplies or the claim is dropped |
| Designer proposes a palette / type change | Preston approves at Gate 1 before the Engineer implements |
| Engineer hits a constraint that breaks the spec | Pause; Designer + Engineer resolve; no silent downgrade |
| Auditor returns block, or 3+ Critical findings | Cycle loops back to the named owner before merge consideration |
| Build fails on main | Engineer reverts to last green commit; root-cause; reship through the cycle |

## Verification gates

| Agent | Gate |
|-------|------|
| Site Lead | Both Preston gates cleared; `verify_site.sh` green; changelog written |
| BRAIN Scout | Every candidate has a source + evidence link + a criterion tag; sources-walked complete |
| Content Architect | `npm run build` validates all collections; every metric field carries a `sourceKey`; `TODO(canonical)` fields listed |
| Resume Consultant | Every number cites `canonical.md`; `preston-writing` + `checking-communications` passed; no `errors.md` pattern |
| Designer | Every color OKLCH; contrast ≥4.5:1 verified; motion has a reduced-motion fallback |
| Engineer | `npm run build` passes; no broken internal links; images via `astro:assets`; nothing pushed to main |
| Performance & SEO | Lighthouse within budget; JSON-LD valid; `sameAs` verified; `site:`/sitemap/RSS/robots/OG present |
| Auditor | Every changed surface checked against every `errors.md` pattern; axe + Lighthouse run; claims traced; report saved; verdict explicit |

## What this protocol is not

Not a content or design strategy — those live in `strategic_brief.md`. This is the operating sequence. If a step becomes a bottleneck rather than a quality gate, log it in `lessons.md` and let it shape the next revision.

---

*Maintained by: Auditor proposes changes based on what fails; Preston approves. Orchestration of record: `.claude/agents/site-lead.md`.*
*Updated: 2026-06-01 — rewritten from the 5-agent model to the 8-agent node.*

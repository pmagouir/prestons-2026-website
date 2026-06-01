# PROTOCOL.md — Monthly Site Refresh Cadence + Ad Hoc Triggers

How the 5-agent team runs in sequence, and what each step produces.

This is the website team's analog of the dev-office weekly briefing protocol. Same shape, monthly cadence.

---

## Default Cadence: Monthly Orchestrator

**When:** First of each month, scheduled via `mcp__scheduled-tasks__create_scheduled_task` (registration deferred until first manual run validates the protocol — see open work in `BRAIN/handoff.md`).

**Sequence (each step gates the next):**

```
Strategist  →  Resume Consultant  →  Designer  →  Engineer  →  Auditor
```

The dev-office Director-equivalent here is a thin orchestrator: it sequences the five agents, surfaces the Auditor's report to Preston, and waits for approval before the Engineer pushes to main.

### Step 1 — Strategist (read-only scan)

- Reads `.learn/` files, `strategic_brief.md`, current site state (page list + last-modified dates), recent BRAIN activity (session_log.md, decisions.md, dev-office briefings, recent proactive-writing-agent drafts, recent commits in BRAIN + prestons-2026-website).
- Produces `proposals/YYYY-MM-DD_proposal.md` — a structured candidate list:
  - For each candidate: source artifact, surface (page or section), proposed change, lane (A operator / B builder), audience priority, evidence link.
  - Plus a "carryover" section for last month's unaddressed items.
  - Plus a "no-change" section if applicable.
- Does NOT write content, design, or code.

### Step 2 — Resume Consultant (positioning + content)

- Reads `.learn/` files, `strategic_brief.md`, the Strategist's proposal, `preston.md`, the specific page(s) being modified.
- Decides which proposals to advance, defers, or rejects.
- Drafts page-level or section-level content to `content_drafts/[page]_vN.md`.
- Invokes `preston-writing` (mandatory voice check), `dc-cap-org-intelligence` (when DC CAP claims appear), `researching-with-confidence` (for any external citation), `checking-communications` (final voice/policy pass).
- Output content meets the verbatim phrasing rules in `glossary.md` and the verified-numbers rules in `canonical.md`.

### Step 3 — Designer (visual + structural spec)

- Reads `.learn/` files, current site Tailwind config + global.css, the Resume Consultant's content drafts, the page being designed.
- Produces `design_specs/[surface]_vN.md` — describes layout structure, component composition, type scale (clamp ranges), color decisions (OKLCH values), motion (with prefers-reduced-motion), spacing rhythm, accessibility specs.
- Does NOT write Astro code.
- Cites OKLCH values, not raw HEX, in spec files. Engineer converts when implementing.

### Step 4 — Engineer (implementation)

- Reads `.learn/` files, Designer's spec, Resume Consultant's content drafts, current Astro codebase.
- Edits files in `/Users/prestonmagouirk/Desktop/prestons-2026-website` on a feature branch (`monthly-refresh-YYYY-MM`).
- Updates content collections, Astro components, Tailwind theme as needed.
- Verifies build (`npm run build`) passes locally.
- Writes `diffs/[surface]_vN.md` — summary of files touched + before/after notes for the Auditor.
- Does NOT push to main. Vercel preview deploy happens automatically on the feature branch.

### Step 5 — Auditor (4-lens adversarial review)

- Reads `.learn/` files, the Resume Consultant's content drafts, the Designer's spec, the Engineer's diffs, the live preview deploy.
- Runs four lenses (Executive Recruiter / Consulting Buyer / Brand & Voice / Performance & Accessibility).
- Runs `axe-core` against the preview URL (or local dev) and notes WCAG 2.2 AA failures.
- Runs Lighthouse against the preview and reports per-axis scores.
- Cross-checks every quantitative claim in the changed pages against `canonical.md`.
- Scans every changed page against every `errors.md` pattern.
- Produces `audits/YYYY-MM-DD_audit.md` with severity-ordered findings.
- Recommends merge, revise, or block.

### Step 6 — Preston decides

- Reads the audit report.
- One of three outcomes: (a) approve and merge, (b) request specific revisions (loops back to Resume Consultant or Designer with targeted asks), (c) defer the cycle.

### Step 7 — Engineer ships (if approved)

- Merges feature branch to main.
- Vercel deploys to production.
- Records the run in `changelogs/YYYY-MM-DD_changelog.md` with: pages touched, content changes, design changes, code changes, audit findings carried forward as future work.

## Ad Hoc Triggers

The monthly cadence is a default, not a ceiling. Any of these warrants an out-of-cycle run:

- **New published writing** (Preston ships a public essay, op-ed, or board-level talk worth surfacing).
- **Role change or major project ship** (e.g., CPIP launches in October 2026 — site must update day-of).
- **Media mention secured** (new outlet adds a citation; verify URL, add to projects/media list).
- **Speaking engagement confirmed** (conference page added).
- **First major consulting engagement secured** (the Advisory layer warrants a dedicated surface).
- **Auditor finds a Critical-severity issue mid-cycle** (e.g., a stale figure went live).

Ad hoc runs use the same five-step sequence but are scoped to the trigger.

## Escalation

| Situation | Escalation |
|-----------|-----------|
| Strategist surfaces a fact the canonical doesn't yet contain | Resume Consultant routes through Preston before treating as canon |
| Resume Consultant cannot find a verified number for a claim Preston wants to make | Strategist re-checks BRAIN sources; if absent, Preston supplies or the claim is dropped |
| Designer proposes a palette or type change | Preston approves before Engineer implements |
| Engineer hits an Astro / Tailwind constraint that breaks the spec | Pause; Designer + Engineer resolve; do not silently downgrade |
| Auditor finds 3+ Critical issues in a single audit | Cycle pauses for full revision before merge consideration |
| Build fails on main | Engineer reverts to last green commit; root-cause; reships through standard cycle |

## Verification Gates (mirroring dev-office)

Each agent has a verification gate it must clear before declaring complete:

| Agent | Gate |
|-------|------|
| Strategist | Every proposal has a source artifact link (file path or URL) |
| Resume Consultant | Every numerical claim cites canonical.md; voice check passed via preston-writing |
| Designer | Every color spec'd in OKLCH; contrast verified ≥4.5:1 against background; motion respects prefers-reduced-motion |
| Engineer | `npm run build` passes; no broken internal links; JSON-LD validates against schema.org |
| Auditor | Every page in scope checked against every errors.md pattern; Lighthouse + axe-core run; report saved |

## What This Protocol Is Not

This is not a content strategy or a design strategy — those live in `strategic_brief.md`. This is the operating sequence that turns strategy into shipped changes. If the protocol becomes a bottleneck rather than a quality gate, surface that as a `lessons.md` entry and let it shape the next protocol revision.

---

*Maintained by: Auditor (proposes protocol changes based on what fails); Preston approves.*
*Last verified: 2026-05-02*

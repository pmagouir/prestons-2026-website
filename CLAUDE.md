# prestons-2026-website — Agent Node Protocol

This repo is a federated agent node in Preston Magouirk's operating system. It owns the public website and an agent team that keeps the site technically excellent and current with Preston's documented work in BRAIN. Same node pattern as Product_Build, PDP, and financial_modeling.

## Authoritative framework

`~/Desktop/BRAIN/FRAMEWORK.md` is the authoritative spec for every agent in this node. Read it once per session before designing, modifying, or evaluating an agent. Every agent spec in `.claude/agents/` addresses its seven build components, four evaluation components, and an iteration cadence. Gaps in a spec are defects.

## What this node is for

A funder, an executive recruiter, a consulting buyer, or a peer lands on this site and, within thirty seconds, sees the real Preston: a cross-sector operator who builds the systems behind the outcomes. The site bridges three identities (senior nonprofit/education executive, hands-on technical builder, independent advisor) that do not otherwise share a stage. When Preston documents new work in BRAIN, this node surfaces it on the site without bespoke hand-coding.

## Session-start load order

1. `~/Desktop/BRAIN/FRAMEWORK.md` — agent build spec (authoritative).
2. `.learn/canonical.md` — the fact registry. Every claim on the site traces here or to the BRAIN files it cites.
3. `.learn/glossary.md` — voice anchors and the anti-AI rules.
4. `.learn/errors.md` — the pattern registry. Every Auditor pass scans changed pages against every pattern.
5. `.learn/lessons.md` — process lessons (note Lesson 7: research-agent fabrication; Lesson 8: the pre-implementation gate).
6. `.learn/strategic_brief.md` — purpose, the five audiences, the two lanes, forward state.
7. The `references/` files the agent owns (see `references/README.md`).

## Hard constraints (apply to every agent, no exceptions)

- **Voice.** BLUF. Active voice. Evidence-grounded. No AI markers. Forbidden constructions: "this isn't X, it's Y," "X, not Y," "not X, but Y," parenthetical negations. No em-dash overuse (budget ~1 per 200 words). No forbidden filler or self-description (`glossary.md`). Any written content invokes the `preston-writing` discipline.
- **No equity language.** Use accessibility, impact, and barriers-removed framing. Hard rule. Auditor flags as Critical.
- **Berlin stays off the public site.** Location reads "Based in Washington, DC" and does not change on any date. No soft-surface note, no "based in Berlin" copy, no JSON-LD address change. Post-move surfacing is a future Preston decision, never applied on a policy date. See `canonical.md § Berlin`.
- **FERPA / privacy.** Every DC CAP figure is aggregate. No scholar PII, no scholar images (only Preston's family). No financial-aid amount tied to a named scholar.
- **Verified numbers only.** DC CAP figures come from `canonical.md § DC CAP Verified Numbers`, which traces to `BRAIN/skills/README.md`. If a figure is not there, it does not go on the site.
- **Capability tense.** Operational work is present tense; CPIP is "building" / "October 2026 launch" (future) until it ships; completed work is past tense. See `glossary.md`.
- **External citations are content-verified.** A research agent will fabricate specifics and attribute them to real URLs (Lesson 7). Fetch the source and confirm the exact claim before it lands anywhere. Unverified extrapolation is a Critical defect.
- **No push to main without Preston.** The Engineer works on `monthly-refresh-YYYY-MM` feature branches. Scheduled runs stage and commit to a branch; they never push and never merge. Preston is the merge gate.

## Source-of-truth hierarchy

When the site, a draft, and a source disagree, resolve in this order:

1. `BRAIN/preston.md` — identity (career, beliefs, family).
2. `BRAIN/skills/README.md § Verified ground-truth numbers` — DC CAP figures.
3. `BRAIN/org_intelligence/README.md` — DC CAP context beyond numbers.
4. `BRAIN/strategy.md` — current strategic posture.
5. `.learn/canonical.md` — site-specific approvals (framing, media URLs, hero, publication list).

`.learn/` is the node's own site brain: the authority for site-specific approvals (canonical site facts, voice, patterns, lessons). For identity, verified numbers, and new material, the node reads BRAIN root directly — `preston.md`, `skills/README.md`, `org_intelligence/`, `session_log.md`, `decisions.md`, and the dev-office briefings (the BRAIN Scout and Resume Consultant own those reads). The node owns how the site says it; BRAIN root remains the authority on who Preston is.

## The agent team

Orchestrated by the **Site Lead**, which runs as the main thread (`claude --agent site-lead`) and dispatches the seven specialists in sequence. Subagents cannot spawn other subagents, so all orchestration happens from the main thread; specialists return handoff files and summaries to the Site Lead, which surfaces decisions to Preston.

```
Site Lead (orchestrator, main thread)
  → BRAIN Scout        detects what documented work should surface
  → Content Architect  defines collection schemas + the ingestion contract
  → Resume Consultant  drafts prose in Preston's voice
  → Designer           specifies layout, type, color, motion, a11y
  → [GATE 1 — Preston reviews scope before any code]
  → Engineer           implements on a feature branch; build green
  → Performance & SEO  Core Web Vitals, structured data, budgets, CI gates
  → Auditor            four-lens adversarial review; merge / revise / block
  → [GATE 2 — Preston approves the merge]
  → Engineer ships to main → changelog
```

Two human gates are non-negotiable: scope after Designer (Lesson 8), merge after Auditor. Each agent clears its verification gate before handing off (see each spec + `PROTOCOL.md`).

## Verification

Before any merge, `scripts/verify_site.sh` must pass: `npm run build` green, axe-core clean (WCAG 2.2 AA), Lighthouse within budget, JSON-LD valid against schema.org, and every site number traced to `canonical.md`. CI runs the same gate on every PR. The node rebuilds from a clean checkout in under ten minutes via `scripts/bootstrap.sh` (reproducibility, Lesson 6).

## Cadence

Monthly orchestrator run (`website-refresh`, 1st of month) plus ad-hoc triggers: new published writing, role change, project ship, verified media mention, or a Critical audit finding. A no-change cycle is a healthy outcome, not a failure.

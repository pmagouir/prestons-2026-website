# Website Agent Suite — Build Plan (2026-06-01)

**BLUF:** Build a repo-resident agent team inside `prestons-2026-website`, orchestrated by a Site Lead, with a live bridge to the BRAIN positioning brain. The team turns "Preston documented something in BRAIN" into "the site reflects it, verified, without hand-coding." Eight agents, all specified against `BRAIN/FRAMEWORK.md`. The BRAIN brain (`canonical.md`/`glossary.md`/`errors.md`) stays upstream source of truth; the node executes and stays current.

This plan is for review. No code lands in the repo until Preston approves.

---

## 1. Decision: federated node, not a second BRAIN team

The agents live in `prestons-2026-website/.claude/`, the same federated-node pattern as Product_Build, PDP, and financial_modeling (S102).

- The work is repo work (edit Astro, run builds, gate CI, wire content collections). Agents belong next to the code they edit and the gates they run.
- Reproducibility (Lesson 6): a federated node rebuilds from a clean checkout in under 10 minutes. A cross-repo BRAIN team cannot.
- Subtraction (S102 principle): one team, one home. The 5 existing BRAIN-side website skills consolidate into the node and retire.

**What stays in BRAIN:** the positioning brain (`canonical.md`/`glossary.md`/`errors.md`/`lessons.md`). It depends on `preston.md`, the verified-numbers table, the Berlin policy, and FERPA governance, so it stays governed in BRAIN. The node carries a committed synced snapshot refreshed each cycle by the bridge, exactly like PDP/Product_Build carry synced reference manifests.

---

## 2. The roster — orchestrator + 7 specialists

Each agent is a single responsibility with a clean boundary (FRAMEWORK §1.3). Charters below; full per-agent specs (I/O pairs, failure tables, verification) are written in Phase 1.

### Site Lead (orchestrator)
- **Job:** Sequence the team on cadence and on BRAIN triggers, enforce the pre-implementation Preston gate (Lesson 8), surface the plan, hold merge control.
- **Scope:** Orchestration only. Writes no content, design, or code.
- **Tools:** Task-dispatch the seven specialists; read `.learn/` + the BRAIN bridge; git read. Forbidden: push to main, edit `src/`.
- **Gate:** Every cycle produces a plan surfaced to Preston before any code; no merge without Preston approval.
- **Handoff:** Receives the trigger; emits the ordered dispatch + the cycle plan.

### BRAIN Scout (responsiveness front door)
- **Job:** Scan BRAIN living surfaces (`session_log.md`, `decisions.md`, dev-office briefings, thought-leadership drafts, recent commits, `canonical.md` deltas) for material that should surface on the site.
- **Scope:** Detection and source-mapping only. No phrasing, no schema, no judgment on what advances.
- **Expertise/refs:** the candidate criteria + `strategic_brief.md` lanes.
- **Tools:** read BRAIN (bounded, 4-week window), read the live site surface, read last proposal. Forbidden: write `src/`, write content.
- **Gate:** Every candidate has a source link + one of the six candidate criteria; full sources-walked list.
- **Handoff:** Emits `proposals/YYYY-MM-DD_proposal.md`. (= consolidates the existing Strategist, sharpened toward ingesting documented work.)

### Content Architect (the responsiveness substrate — NEW)
- **Job:** Own the content-collection schemas and the BRAIN-to-site ingestion contract. Turn approved candidates into structured collection entries instead of bespoke pages.
- **Scope:** Schema and structure only. No prose, no visual, no positioning judgment.
- **Expertise/refs:** `astro5_framework.md` (content collections, Zod), the ingestion contract.
- **Tools:** define/maintain `src/content/config.ts` schemas; map BRAIN artifact to entry shape; write content entries (structure, with Copy filling prose). Forbidden: visual/layout, hand-coded one-off pages.
- **Gate:** Every new piece of documented work maps to a collection entry with a valid schema; zero bespoke pages for content that fits a collection.
- **Handoff:** Receives the proposal; emits collection schema + stubbed entries for Copy to fill. **This agent is the single most important fix — it is what makes the site responsive as you document.**

### Resume Consultant (positioning + copy)
- **Job:** Draft site prose in Preston's voice from `canonical.md`/`glossary.md`, applying selectivity language, capability-tense discipline, and the credit-attribution check (Pattern 14).
- **Scope:** Prose and positioning register only. No schema, no code, no design.
- **Expertise/refs:** `glossary.md`, `voice_patterns_fy2026.md`, `exemplar_patterns.md`; invokes `preston-writing` (mandatory), `dc-cap-org-intelligence`, `researching-with-confidence`, `checking-communications`.
- **Tools:** write `content_drafts/`. Forbidden: edit `src/`, design, schema.
- **Gate:** Every number cites `canonical.md`; voice check passed; no `errors.md` pattern present.
- **Handoff:** Receives stubbed entries + proposal decisions; emits filled drafts. (= existing Resume Consultant, ported.)

### Designer (visual system + a11y spec)
- **Job:** Specify layout structure, IA, OKLCH palette, fluid type scale, motion, spacing rhythm, accessibility — in spec files, not code.
- **Scope:** Specification only. Writes no Astro (Lesson 2).
- **Expertise/refs:** `refactoring_ui.md`, `tailwind4_system.md`, `wcag_2.2_aa.md`, `mdn_semantic_html.md`, `exemplar_patterns.md`.
- **Tools:** write `design_specs/`. Forbidden: edit `src/`.
- **Gate:** Every color in OKLCH; contrast ≥4.5:1 verified; motion respects `prefers-reduced-motion`.
- **Handoff:** Receives drafts; emits `design_specs/[surface]_vN.md`. (= existing Designer, ported.)

### Engineer (implementation)
- **Job:** Implement Designer specs and Content Architect schemas in Astro 5 + Tailwind 4 + TS on a feature branch. Wire content collections. Run the image pipeline (`astro:assets`). Keep the build green.
- **Scope:** Implementation only. Does not redesign while implementing; does not set perf budgets or structured-data strategy (that is Perf & SEO).
- **Expertise/refs:** `astro5_framework.md`, `tailwind4_system.md`, `vercel_deployment.md`.
- **Tools:** edit `src/`, `npm run build`, git on feature branch `monthly-refresh-YYYY-MM`. Forbidden: push to main.
- **Gate:** `npm run build` passes; no broken internal links; images optimized to the Perf budget.
- **Handoff:** Receives spec + schema + drafts; emits `diffs/[surface]_vN.md` + a preview deploy. (= existing Engineer, craft-hardened.)

### Performance & SEO Engineer (the craft ratchet — NEW)
- **Job:** Own Core Web Vitals, structured-data completeness (JSON-LD Person `sameAs`, Article, BreadcrumbList), `site:` URL config, sitemap, RSS for writing, robots, OG image generation, and the Lighthouse/axe CI budgets the whole team is gated on.
- **Scope:** Specify and verify performance and discoverability; set the budgets. Engineer implements to meet them (the spec-vs-implement split, mirroring Designer/Engineer per Lesson 2).
- **Expertise/refs:** `core_web_vitals.md`, `schema_org_seo.md`, `vercel_deployment.md`, `axe_core_rules.md`.
- **Tools:** write CI workflow + budget files + verify scripts; run Lighthouse/axe; define structured-data schemas. Forbidden: prose, visual redesign.
- **Gate:** Lighthouse budgets enforced in CI; JSON-LD validates against schema.org; `sameAs` populated from verified profile URLs only.
- **Handoff:** Receives the Engineer's preview; emits perf/SEO findings + the enforced budgets. Closes the audit's worst gap (25MB raw images, empty `sameAs`, missing `site:`/sitemap/OG).

### Auditor (adversarial review)
- **Job:** Four-lens review (Executive Recruiter, Consulting Buyer, Brand & Voice, Performance & Accessibility). Cross-check every claim against `canonical.md`, scan every changed page against every `errors.md` pattern, run axe + Lighthouse, validate JSON-LD.
- **Scope:** Review only. Flags, does not fix. Final authority on voice and a11y (Lesson 3).
- **Tools:** read drafts/specs/diffs + preview; run axe/Lighthouse. Forbidden: edit `src/`.
- **Gate:** Every in-scope page checked against every pattern; report saved; explicit merge/revise/block verdict.
- **Handoff:** Emits `audits/YYYY-MM-DD_audit.md` to the Site Lead, who surfaces it to Preston. (= existing Auditor, ported.)

---

## 3. Orchestration model

```
trigger → Site Lead
  → BRAIN Scout (what's new)
  → Content Architect (where it lands: schema + stubs)
  → Resume Consultant (what it says: prose)
  → Designer (how it looks: spec)
  → [PRESTON GATE — Lesson 8: plan reviewed before code]
  → Engineer (build it on a feature branch)
  → Performance & SEO (budgets + structured data + verify)
  → Auditor (4-lens adversarial review)
  → [PRESTON GATE — merge approval]
  → Engineer ships to main → changelog
```

Two human gates: scope (after Designer) and merge (after Auditor). Scheduled runs stage and commit to a feature branch, never push to main (your standing rule).

---

## 4. The responsiveness mechanism (BRAIN → site)

Three parts make the site live with your work:

1. **Read bridge.** The node reads BRAIN source-of-truth at absolute paths (`preston.md`, `canonical.md`, `glossary.md`, verified-numbers table, `session_log.md`, `decisions.md`, dev-office briefings). A `scripts/sync_brain.sh` pulls a committed snapshot of the positioning brain into the node each cycle, so the node stays reproducible from a clean checkout.
2. **Content architecture.** New `src/content/` collections — `writing`, `projects` (case studies), `talks`, `media`, `recognition` — each with a Zod schema. Documented work becomes a structured entry, not a hand-coded page. This is the substrate that does not exist today.
3. **Cadence.** Register the dormant `website-refresh` scheduled task (monthly, 1st) plus ad-hoc triggers (new published writing, role change, project ship, media mention, Critical audit finding). Commit-not-push; Preston merges.

---

## 5. The quality ratchet (eval before, not after)

The references already teach the craft; nothing enforces it. We add enforcement:

- `scripts/verify_site.sh` — single gate: `npm run build` + axe-core + Lighthouse budgets + JSON-LD schema validation + a canonical-claim check (every site number traces to `canonical.md`).
- `.github/workflows/ci.yml` — runs the verify gate on every PR to main.
- `lighthouse-budget.json` — performance budgets the Engineer builds to and CI enforces.
- `scripts/bootstrap.sh` — clean-checkout reproducibility (Lesson 6), added to `BRAIN/scripts/bootstrap.sh` constellation so the node travels with the OS.

This is FRAMEWORK Part 2 (eval harness) built with the agents, not bolted on after.

---

## 6. Directory layout (federated node)

```
prestons-2026-website/
  .claude/agents/          # 8 agent specs (orchestrator + 7)
  .learn/                  # synced snapshot: canonical/glossary/errors/lessons + node-local learnings
  references/              # the 11 curated craft files (ported from the BRAIN workspace)
  scripts/
    verify_site.sh         # the ratchet
    sync_brain.sh          # the read bridge
    bootstrap.sh           # clean-checkout reproducibility
  .github/workflows/ci.yml # CI gate
  src/content/             # NEW content collections (the responsiveness substrate)
  CLAUDE.md                # node session protocol, anchored to BRAIN/FRAMEWORK.md
  decisions.md             # node ADRs, bridged to BRAIN
```

---

## 7. BRAIN anchoring (so the node is governed, not orphaned)

- `CLAUDE.md` framework pointer → git-tracked `BRAIN/FRAMEWORK.md` (no ephemeral Downloads path; the S102 finance fix).
- Add the node to `BRAIN/scripts/bootstrap.sh` (PDP + financial_modeling + Product_Build + website).
- Decision bridge: site-level decisions that change positioning route back to the BRAIN canonical-update protocol (already in PROTOCOL §Escalation).
- The quarterly `refresh-website-references` cron already exists; keep it; add the monthly `website-refresh` cron.

---

## 8. What's ported vs retired (subtraction)

- **Ported into the node:** the 11 `references/` files; the `.learn/` quartet (as a synced snapshot); `strategic_brief.md` becomes the node brief; the 5 existing skill charters fold into the 8 agent specs.
- **Retired:** the 5 standalone `dccap-skills` website skills (`website-strategist/consultant/designer/engineer/auditor`), once the node agents absorb their logic. One team, not two.
- **Unchanged in BRAIN:** `canonical.md`/`glossary.md`/`errors.md` remain the upstream brain. The node never becomes the source of truth for who Preston is.

---

## 9. Phased build sequence (ready to roll)

- **Phase 0 — Scaffold.** Create `.claude/agents/`, `.learn/`, `references/`, `CLAUDE.md`, `scripts/`. Port the brain + references. No `src/` change.
- **Phase 1 — Specs.** Write all 8 agent specs to full FRAMEWORK compliance (7 build + 4 eval + cadence each) + the orchestrator.
- **Phase 2 — Ratchet.** `verify_site.sh` + CI + Lighthouse budget + `bootstrap.sh`. Eval harness live before the first cycle.
- **Phase 3 — Content architecture.** Define collections; migrate the existing essay + projects into them.
- **Phase 4 — Bridge + cadence.** `sync_brain.sh` + ingestion contract + register `website-refresh` cron (commit-not-push).
- **Phase 5 — First proving cycle.** Run the full suite end-to-end. Close the worst craft debt as the proof: optimize the 25MB images, populate JSON-LD `sameAs`, set `site:` URL, add og:image + sitemap + RSS.

---

## 10. Open decisions for Preston (recommendations attached)

1. **Roster size — keep Performance & SEO as its own agent (recommended) or fold into Engineer?** Recommend keeping it separate; it mirrors the Designer/Engineer spec-vs-implement split you ratified (Lesson 2), and perf/SEO is the worst-neglected axis in the audit. (8 agents vs 7.)
2. **Retire the 5 BRAIN-side website skills after consolidation?** Recommend yes (subtraction; one team).
3. **Implement as `.claude/agents/` subagents (recommended) or skills?** Subagents are orchestratable and Task-dispatchable, which the orchestrator needs.
4. **First-cycle scope — close craft debt only, or also surface new documented work** (FY2026 contributions, Financial Modeling Tool, the two agentic systems) in the same run? Recommend craft debt first as the clean proving run, then documented-work surfacing in cycle 2.
5. **Berlin soft-surface window opened today (2026-06-01) per `canonical.md` Phase 2.** Action the one-line About note ("From August 2026, based in Berlin") in this build, or hold? Recommend hold until the suite is live, then let the suite apply it on policy.

---

*Author: Code session, 2026-06-01. Status: awaiting Preston review. No repo changes until approved.*

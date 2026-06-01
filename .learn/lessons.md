# lessons.md — Personal Website Process Lessons

Append-only log of process / framing / methodology lessons that don't fit cleanly into `errors.md` (which is for content patterns) or `canonical.md` (which is for facts) or `glossary.md` (which is for phrasing).

Lessons here usually shape *how* the team operates rather than *what* the site says.

---

## Seed Lessons (2026-05-02)

### Lesson 1 — Strategist proposes, Resume Consultant decides

The Strategist's job is volume and source-mapping: surface every BRAIN artifact that *could* trigger a site update. The Resume Consultant's job is judgment: decide which proposals actually belong on the site, in what register, with what emphasis. Do not let the Strategist make positioning decisions; do not let the Resume Consultant skip Strategist proposals to draft directly. Sequence is order-of-operations, not bureaucracy.

**Why:** Without separation, the team produces either a site that auto-updates from any BRAIN noise (loud, undisciplined) or a site that drifts because nobody checked what's new.

### Lesson 2 — Designer proposes, Engineer implements

Symmetric to Lesson 1. The Designer specifies structure, type, color, motion, accessibility — but writes no Astro code. The Engineer writes the code but does not redesign while implementing. If the Engineer surfaces an implementation constraint that breaks the design, both meet (in the next session) and resolve before the Engineer ships partial code.

**Why:** Mixing design + code in one agent produces "design-by-implementation" — visual decisions made because the previous CSS made them easy, not because they're right.

### Lesson 3 — Auditor's authority is final on voice and accessibility

When the Auditor flags a voice violation (anti-AI patterns, equity language, em-dash overuse) or an accessibility violation (contrast, focus state, ARIA), the Engineer fixes before merge. The Auditor does not negotiate. Resume Consultant may reframe but does not override.

**Why:** Auditor exists to catch what the upstream team missed. Letting findings get re-litigated downstream defeats the purpose.

### Lesson 4 — Monthly cadence is a soft commitment, not a hard one

The team runs monthly by default (1st of the month, `website-refresh` orchestrator). Some months will have no real changes — that's fine. The Strategist still produces a proposal that says "no material changes this cycle"; the cycle closes there. Forcing fake updates monthly is worse than skipping.

**Why:** Cadence is a forcing function for review, not a content-production target. The dev-office team has weeks where the Scout finds nothing and the Director's briefing is one slide ("pipeline unchanged"). That's a healthy outcome, not a failure.

### Lesson 5 — The `prestons-2026-website` repo is the canonical site source

The website is at `/Users/prestonmagouirk/Desktop/prestons-2026-website`, deployed on Vercel from the main branch. The Engineer commits there. The site is NOT mirrored inside BRAIN. Cross-references between BRAIN content and the site must use absolute paths.

**Why:** Avoids the kind of worktree-drift gotcha logged in handoff.md S60 (financial modeling tool — edits initially landed on canonical when the worktree was the live build target).

### Lesson 6 — Reproducibility is a hard requirement

The website team must work without dependency on machine-local config (no Cursor-only paths, no hard-coded local secrets). Engineer ships build instructions reproducible from a clean checkout — same standard as `BRAIN/scripts/bootstrap.sh` for the broader OS.

**Why:** Single-machine fragility is a known systemic risk in Preston's broader OS (handoff.md S65). The website must be portable across machines and recoverable from a clean checkout in under 10 minutes.

### Lesson 7 — Agent-research claims must be content-verified before citation

When the team commissions external research (e.g., a `search-agent` sweep on senior-strategy positioning, AI governance norms, MBB conventions), the agent will reliably (a) find real sources, (b) over-extrapolate from those sources to invent specifics not actually in the text, and (c) attribute fabricated specifics to real URLs.

In the 2026-05-02 positioning research pass, this happened in three documented places:
- The agent claimed Spencer Stuart screens for "people developed because of you" / talent-multiplier evidence. **Not on the page.** Fabricated.
- The agent attributed specific phrases ("cross-functional ownership," "role-based fluency," "measurable adoption") to KPMG/INSEAD's April 2026 AI Board Governance Principles. **Not in the release.** The actual five principles are different.
- The agent cited an Inside Higher Ed October 2025 article as supporting a 25–30% national first-gen four-year completion baseline. **The article actually reports ~50% for first-gen Common App applicants** — a different population and a much higher number.

**Why:** Repeating fabricated specifics on the public site would produce embarrassing mistakes traceable to AI agents — exactly the failure mode AI governance work is meant to prevent. The site cannot ship a positioning argument grounded in misattributed sources.

**How to apply:** any external claim a research agent surfaces must be content-verified — fetch the URL, read the body, confirm the specific phrasing — before it lands in canonical.md, glossary.md, or any draft. The Auditor enforces this at the citation step. Use of unverified agent extrapolations as fact is a Critical defect.

The structural positioning playbook (3-pillar stack, headline candidates, case-study sequence, what-to-lean-into list) does NOT depend on the fabricated specifics. It rests on Preston's actual artifacts and outcomes (CPIP, Scholar Matching, dccapinnovation.org governance framework, 75-95% partner graduation), which are all in canonical.md and verifiable directly. So the playbook survives; the source attributions had to be stripped or re-verified.

---

### Lesson 8 — Pre-implementation Preston gate (2026-05-03)

The PROTOCOL puts Preston's decision at Step 6, after the Engineer has shipped to a feature branch and the Auditor has produced a report. That order is wrong for the first cycle and for any cycle with substantive scope changes. The right pause is **after the Designer's spec (Step 3) and before the Engineer touches code (Step 4)**.

The Strategist's proposal, the Resume Consultant's content drafts, and the Designer's specs are the plan. Preston reviews the plan; Engineer ships only the approved scope; Auditor still runs at Step 5; Preston still has merge approval at Step 6. The pre-implementation gate is additive, not a replacement.

**Why:** Preston's principle — "plan first is ALWAYS the move" (2026-05-03 cycle 1, in-session correction). Implementation is cheap to reverse but expensive to redo when the upstream framing was wrong. A feature-branch deploy followed by an audit followed by a revision loop is a 4-step rework whenever the framing should have been caught at the spec stage. One pre-implementation review collapses the loop.

**How to apply:** at the close of Step 3, the Designer (or whichever agent is closing the spec) surfaces a structured plan to Preston:
- Triage decisions (advance / defer / route-to-canonical / reject)
- Open questions per draft
- Net effect summary (which surfaces touched, what changes)
- Process lessons proposed for the cycle

Preston approves scope and answers open questions. Engineer proceeds with explicit scope. PROTOCOL.md should be updated to reflect this gate as a formal step (Step 3.5).

## Adding New Lessons

When a real run surfaces a process improvement:

1. Add a new `### Lesson N — short title` block.
2. State the rule.
3. Add a `**Why:**` line citing the specific incident or risk.

When 3+ lessons cluster on the same theme, roll up into PROTOCOL.md and leave a `Lesson N — rolled up to PROTOCOL.md` marker.

---

*Maintained by: any agent that surfaces a lesson; Preston approves merges.*
*Last verified: 2026-05-02*

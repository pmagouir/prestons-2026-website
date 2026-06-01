# strategic_brief.md — Personal Website Project Brief

What this site is for, who it serves, what it must do, and how the agent team operates against that brief.

This is the website's analog of `BRAIN/projects/development_office/strategic_brief.md`. Same role: a constrained context file that every agent reads at session start, replacing broader BRAIN context loading.

---

## Purpose

The website is Preston Magouirk's primary public surface across three identities that don't yet have a common stage:

1. **Senior nonprofit / education executive** (current role: CSAO, DC CAP)
2. **Hands-on technical builder** (CPIP architect, Scholar Matching algorithm, AI Governance Framework, the broader BRAIN/Cowork agent OS)
3. **Independent consulting practice** (limited engagements; expanding 2026–2027)

The site bridges these. A funder reading the about page should see the executive. An executive recruiter reading the experience page should see the operator. An advisory client reading the consulting page should see the technical credibility under the strategy. A board member or peer reading the writing page should see the analytic depth.

If the site fails any of these audiences, it is failing the brief.

## Audiences (priority order)

| Priority | Audience | What they need to find in <30 seconds |
|----------|----------|---------------------------------------|
| 1 | Executive recruiters / board chairs evaluating Preston for senior strategy or AI-leadership roles | Title, scope, three load-bearing accomplishments, scale of operation, current location |
| 2 | Foundation program officers / corporate funder execs evaluating DC CAP-adjacent work | Outcome metrics, theory of change, evidence of execution, named partners, published research |
| 3 | Advisory / consulting clients (nonprofits, philanthropy intermediaries, AI governance advisory prospects) | Service areas, engagement models, prior outcomes, Calendly CTA, contact path |
| 4 | Peer executives, researchers, journalists | Writing, public commentary, conference history, credentials |
| 5 | DC CAP staff and current scholars | About + family + fitness — the human presence behind the work |

The site must serve audiences 1–3 without alienating 4–5. Currently, it serves 4–5 well and 1–3 unevenly.

## Two Lanes

The team scores every site update against two lanes (mirror of dev-office Core / Innovation Hub structure):

- **Lane A — Executive operator + cross-sector connector.** Anchors: DC CAP turnaround, Common App founding-team work, university partnerships, board-level operating experience, IES research training.
- **Lane B — Builder of agentic, AI-governed, FERPA-compliant systems.** Anchors: CPIP, Scholar Matching, AI Governance Framework, BRAIN/Cowork agent OS, AI governance and responsible-AI advisory positioning.

Most updates serve one lane primarily. Every page should make both lanes visible at least somewhere; no page should *only* serve one.

## Competitive Position (what makes this site distinct)

Preston is not the most prolific writer, the loudest LinkedIn presence, or the deepest specialist in any single domain. The competitive edge is:

1. **Verifiable production systems.** CPIP, Scholar Matching, AI Governance — all live, all open about methodology, all cited.
2. **Cross-sector receipts.** Not a generalist claim — a specific path through TFA → Vanderbilt → UVA IES → Common App → DC CAP, with public artifacts at each stop.
3. **Operating cadence.** A board-level executive who ships code monthly. The site itself, refreshed by an agent team monthly, is part of this proof.
4. **Evidence discipline.** Every claim sources back. The dev-office pipeline, the verification gates, the audit trails — these are visible operating standards, not marketing.

The site loses its edge if it slides into AI-generic executive boilerplate (passionate / driven / on a mission). Voice discipline is not optional.

## Current State (as of 2026-05-02)

- Astro 5 + Tailwind 4 + TypeScript, deployed on Vercel.
- Source: `/Users/prestonmagouirk/Desktop/prestons-2026-website`.
- Editorial palette: Hunter Green (#1F3D2B), Burgundy (#7A1E2C), Light Neutral (#F5F5F4). Typography: Lora + Inter.
- Pages: home, about, experience, projects, consulting, writing/[posts], fitness.
- One published essay: "Five Lessons from Leading Change at a College Success Organization" (Jan 2026).
- No JSON-LD Person schema. No content collections. No MDX-driven case studies.
- No analytics beyond Vercel defaults.
- Repo last commit: 2026-02-21 (last meaningful update; minimal activity since).

## Forward State (12-month horizon)

The site should evolve along these vectors. The Strategist proposes against this map.

1. **Case-study layer in priority sequence.** Five case studies at `/projects/[slug]`, structured: client + challenge → approach → outcome → takeaway. Sequence (per `canonical.md § Case-Study Sequence`):
   1. AI Governance Framework (dccapinnovation.org) — leads
   2. CPIP — Career Pathway Intelligence Platform
   3. Scholar Matching algorithm (Gale-Shapley)
   4. Regional partnership strategic pivot
   5. Common App founding research team + UVA/LDOE research-practice partnership
   Replaces the current "project card" pattern.
2. **Writing as living archive.** `/writing` becomes a content collection driven by MDX; each post links back to relevant case studies and forward to public commentary the post generated.
3. **Consulting page differentiation.** Three buyer registers (foundation / corporate / individual exec) instead of the current undifferentiated services list. Replace generic "consulting services" with sharply-named offers: "AI governance audits for mission-driven organizations" and "Strategy + analytics builds for education and philanthropy." Generic pages signal availability; specific offers signal scarcity.
4. **AI governance advisory layer.** A dedicated `/advisory` page once operational consulting engagements support a distinct positioning (target Q4 2026 / Q1 2027). Until then, AI governance is one strand inside the consulting page, not its own surface.
5. **Structured data + AI-search visibility.** JSON-LD Person, Article, BreadcrumbList everywhere relevant. `sameAs` links to LinkedIn, ORCID, Google Scholar, GitHub.
6. **Performance baseline.** Lighthouse 100/100/100/100 by Q3 2026. WCAG 2.2 AA verified by axe-core in CI.

## Cadence

- **Monthly orchestrator run** (default 1st of month, scheduled task `website-refresh`).
- **Ad hoc:** any time a major BRAIN update warrants (new published writing, role change, major project ships, media mention secured).
- **Quarterly design review:** Designer evaluates whether the visual system still serves the brief.

## Boundaries

- The site is a personal artifact. DC CAP organizational claims appear *only* where Preston is the speaker. The site does not become a DC CAP marketing channel.
- No live FERPA / scholar PII surfaces, ever. Every figure is aggregate.
- No financial-aid amounts attributed to specific scholars.
- No images of scholars (only Preston's family in the about page).
- No client engagement details on the consulting page that would breach an NDA — outcomes phrased generically.

## Source-of-Truth Files

The team operates from these files. Do not load broader BRAIN context unless explicitly listed for a given step.

| File | When it's authoritative |
|------|------------------------|
| `BRAIN/preston.md` | Identity claims (role, beliefs, family, narrative) |
| `BRAIN/skills/README.md § Verified ground-truth numbers` | All DC CAP figures |
| `BRAIN/projects/personal_website/.learn/canonical.md` | Site-specific facts (URLs, page list, approved framing) |
| `BRAIN/projects/personal_website/.learn/glossary.md` | Voice and phrasing rules |
| `BRAIN/projects/personal_website/.learn/errors.md` | Pattern registry — every Auditor scan tests against these |
| `BRAIN/projects/personal_website/.learn/lessons.md` | Process lessons |
| `BRAIN/strategy.md` | Current strategic posture (use sparingly — only the Strategist reads this) |
| `BRAIN/session_log.md` | Recent BRAIN activity (Strategist input only) |
| `BRAIN/decisions.md` | Active strategic decisions (Strategist input only) |
| `BRAIN/projects/development_office/briefings/` | Recent dev-office activity (Strategist may surface for case-study mining) |
| `/Users/prestonmagouirk/Desktop/prestons-2026-website` | Live site source |

## Out of Scope

- Resume distribution to job boards. The site is the public surface; targeted resume work goes through Preston's separate professional inventory process.
- LinkedIn content. Handled by `proactive-writing-agent`. The site agents may consume LinkedIn drafts as input but do not own LinkedIn.
- DC CAP institutional comms. Handled by `dc-cap-*` skills.
- Personal email / calendar / outreach. Handled by `email-writer`.

---

*Read by: every website team agent at session start.*
*Maintained by: Resume Consultant proposes updates; Preston approves.*
*Last verified: 2026-05-02*

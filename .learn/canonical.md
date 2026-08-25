# canonical.md — Personal Website Single Source of Truth

Every fact the website states about Preston, his career, or his work must trace back to this file or to the BRAIN files it cites. If a number, title, or claim is not here and not in `preston.md`, it does not belong on the site.

This file is the website's analog of `BRAIN/projects/development_office/.learn/canonical.md`. Same purpose, different scope.

---

## Identity Baseline

| Field | Value | Source |
|-------|-------|--------|
| Full name | Preston Magouirk | preston.md |
| Current title | Chief Strategy and Analytics Officer | preston.md, BRAIN/context.md |
| Current org | DC CAP (DC College Access Program) | preston.md |
| Tenure in current role | July 2023 – Present | preston.md |
| Location | Washington, DC | preston.md |
| Family | Married to Liza; son George (~2yrs); rescue dog Franklin (12+ yrs) | preston.md |

## Education

| Degree | Institution | Year | Notes |
|--------|-------------|------|-------|
| PhD, Educational Policy Studies | University of Virginia | 2020 | IES Fellow |
| MPP | Vanderbilt University | 2015 | Peabody Honors Scholar |
| BA, History | Tulane University | 2011 | |

## Career Trajectory (verbatim titles)

| Period | Title | Org |
|--------|-------|-----|
| 2011–2013 | Corps Member | Teach For America, South Louisiana |
| 2013–2015 | Associate Editor | Peabody Journal of Education, Vanderbilt |
| 2015–2020 | VEST Fellow (IES) | University of Virginia |
| 2020–2023 | Senior Manager of Research & Analytics | The Common Application |
| 2023–present | Chief Strategy and Analytics Officer | DC CAP |

## Units Led at DC CAP (canonical — reconciled 2026-06-04)

Preston leads these units as CSAO; use this exact list in both the About narrative and the Experience DC CAP body: **Student Success, University Partnerships, GEAR UP, Innovation, and Data & Technology.** The prior About-page list ("Program Strategy, Student Success, Strategic Partnerships, and Data & Technology") is retired to remove the cross-page drift the 2026-06-04 audit caught. Units touch points: about.astro narrative, experience.astro DC CAP body — update both or neither.

## UVA / Louisiana Department of Education Partnership (2017–2020) — Load-Bearing

This is a load-bearing component of the UVA period and must remain visible on the site. It is *not* solely the early-childhood QRIS work that the existing projects page features.

**The work:** The UVA–Louisiana Department of Education research-practice partnership covered **policy and accountability systems research** during a multi-year statewide policy rollout. Managed direct relationships with Louisiana state policymakers and district leaders.

**Why it matters for the site:** Demonstrates Preston's experience operating inside a state education agency on policy + accountability design — a credential distinct from the academic-research framing currently dominating the UVA section. This is the period that produced the public-facing publications cited on the site.

**Approved framing language for site copy:**
- "Policy and accountability systems research with the Louisiana Department of Education (2017–2020)."
- "Multi-year UVA–LDOE research-practice partnership during statewide policy rollout."
- "Direct work with state policymakers and district leaders on accountability design."

**What NOT to do:** drop or obscure this strand in favor of the early-childhood QRIS publication alone. The accountability systems work is the broader through-line — the QRIS study is one publication that came out of it. Both belong on the site; the partnership framing is the umbrella.

**Publications evidence:** the partnership produced the Louisiana early-childhood QRIS study (AERA Open, ECRQ, policy brief — already on the site under projects.astro Project 3) and additional accountability-policy work. Resume Consultant maintains the publication list as part of canonical site state.

## Credentials & Recognitions

- IES Fellowship (UVA)
- Peabody Honors Scholar (Vanderbilt)
- TFA South Louisiana Excellence in Teaching Award (2013)
- Certified CrossFit Trainer + CF-L3 (2024) — top ~1% of CrossFit coaches
- CrossFit Games Quarterfinals qualifier (multiple years)

## Proof-of-Capability Systems (the four load-bearing artifacts)

These are the four systems referenced as evidence of the full-stack-leader claim. Use exact framing.

1. **Career Pathway Intelligence Platform (CPIP)** — research-grade recommendation engine matching DC CAP's 4,100+ students to career-connected college pathways. Synthesizes 15 federal data sources into ~400,000 ranked pathways. Solo-architected. 1,625 passing tests, 7/7 quality gates, 18 ADRs. Status: October 2026 soft launch (NOT yet live — capability-overstate risk). [Count corrected 19→15 on 2026-06-12: Product_Build canonical, `BRAIN/personal/fy2026_contributions.md` §3, and `BRAIN/decisions.md` all read 15; the "19" was an unverified internal-doc figure flagged in the 2026-06-05 Cowork verification signal.]
2. **Scholar Matching Algorithm** — empirically validated stable matching that allocates DC CAP's annual scholarship offers among ~700 applicants and 13 university partners in the 2026 cycle. 9,100 pairs tested, zero blocking pairs. **Partner count (registered 2026-06-12):** 14 partners signed; American University is the 14th (signed 2026-05-31), joins Fall 2026 recruitment, first cohort enrolls Fall 2027, and enters the matching algorithm in the 2027 cycle. So "13 partners" remains accurate for the 2026 match if framed to that cycle; "14 signed partners" is accurate for the portfolio. Do not reintroduce the scrubbed AU board-advisor reference (repo commit `01d95e2`). Currently in production (Phase 4 acceptance period as of April 2026). **Site framing rule (added 2026-05-05):** describe as "allocates scholarship offers among ~700 applicants" — never "places ~700 scholars" or similar phrasing that conflates applicants with placements. Drop the "Gale-Shapley" technical name from public copy; use "empirically validated matching algorithm" instead. The "Gale-Shapley" name and the Nobel Prize lineage stay in technical references and `BRAIN/projects/matching_2026/` documentation, not on the public site.
3. **Enterprise AI Governance Framework** — DC CAP's 60-day AI pilot for 9 staff across 3 units. 19 interactive HTML pages on dccapinnovation.org. 4D fluency model (Delegation, Description, Discernment, Diligence). **Status corrected 2026-06-12:** the 60-day pilot ran April 6 – June 5, 2026 and is **complete** (past tense on the site); the framework itself remains operational. No pilot-outcome or results claim goes on the site until a BRAIN capstone artifact exists to cite (Lesson 7 discipline).
4. **DC CAP Financial Scenarios Tool (added 2026-05-03)** — multi-scenario endowment / fundraising / spending model used in board meetings. Solo-built (Vite + React + TypeScript SPA, 88-test math audit, multi-phase audit-driven rebuild including a Brief tab redesigned for CEO use after a CEO-lens audit caught CFO-jargon failure modes). Live behind Cloudflare Access at dccapinnovation.org/financial_modeling/ (board / staff only; not public-linkable). Site treatment: **referenced, not linked.** Site copy may name dccapinnovation.org as the host but must not turn the URL into a hyperlink. Approved framing: understated capacity signal — names the artifact and its function, lets numbers carry the rest.

## DC CAP Verified Numbers (use only these)

These are the **only** DC CAP numbers permitted on the site. Pulled from `BRAIN/skills/README.md § Verified ground-truth numbers` and `BRAIN/org_intelligence/README.md`. If a candidate metric is not here, do not place it on the site.

- Endowment: $100M+
- Operating budget: $10M+ (registered 2026-06-12; `BRAIN/context.md:39`)
- Scholars served: ~800 (FY26), 1,190 (FY25)
- Scholarships disbursed: $5.4M (FY26), $7.2M (FY25)
- DCTAG: $15,000/year at public universities
- FGLI completion baseline: 20–25% nationally, 23% DC-specific
- Overall DC completion (any income): 37%
- First-year retention: 90% (class of 2023), 85% (class of 2024)
- Established partner graduation: 75–95% (established-partner band)
- Completion at active/mature partner campuses: 67–100% (Class of 2021, five-year)
- First-to-second-year retention: seven partners at 100% (AY2025–26)
- Economic mobility multiplier: 1.77x partner portfolio over national
- Earnings premium: $55,661 (BA $95,471 vs HS $39,810)
- Leverage per DC CAP dollar: $4–7 in stacked aid
- Pipeline: 1,750 low-income DC HS grads → 810 enroll → 140 DC CAP funded, 670 unfunded
- Ward 3 vs Ward 8: 89% / 27% BA attainment, $174K / $64K median household income
- Ward 7/8 persistence: BRAIN corrected this figure 2026-06-04 (commit `f17cf20`, `preston.md:142`) to **64% overall (72% within University Partnership cohorts)**; the earlier "38% → 72%" is superseded and must not be cited. (Stays OFF the public site per Preston, 2026-06-02; the registry value is kept accurate only so the offline essay and any internal use cite the corrected figure. Do not surface any Ward 7/8 framing in site copy.)
- Tenure: 25 years (DC CAP founded 2000)

### Operational Discipline Numbers (added 2026-05-23 from `BRAIN/personal/fy2026_contributions.md`)

- Application process compression: 10 staff / 20+ hours per week → 1 staff / 3–5 hours per week (FY26 vs prior baseline)
- Coach administrative burden: ~60% of time → 5–10% within a single three-month period (FY26)
- Annual staff capacity recovered through digital transformation: $500K+ (derived from the two compression figures above; locked for use in consulting page "Results I've delivered" and Experience DC CAP body)
- Philanthropic commitments contributed to since 2023: $50M+ (instrumental in; includes MacKenzie Scott / Yield Giving)
- KPMG AI Impact Initiative grant: $600K (DC CAP's largest AI investment to date; FY26)
- CPIP solo build: 15 federal data sources, ~400,000 ranked pathways, 1,625 passing tests, 7/7 quality gates, 18 ADRs (October 2026 launch — future tense) [count corrected 19→15, 2026-06-12]
- AI Governance Pilot: 9 staff × 3 units, 4 phases over 60 days, 19 interactive HTML pages on dccapinnovation.org (completed; ran April 6 – June 5, 2026) [status corrected to completed, 2026-06-12]
- Scholar Matching 2026 cycle: 140 priority matches, 70 waitlist offers, 189 Ward 7/8 free-agent placements; 9,100 pairs stability-tested, zero blocking pairs
- Financial Modeling Tool: 53/53 verification checks green; live behind Cloudflare Access at dccapinnovation.org/financial_modeling/
- H3 Agentic Workflows: 2 production systems on a shared five-agent pattern (AI Development Office + Compensation Benchmarking)
- FY2026 conferences led: UERU, CIO4Good, UVA IES Program Conference
- FY2026 funder conversations led: Strada Education Foundation, Gates Foundation, Philip L. Graham Fund
- Standards of Practice authored (FY26): 4 documents — disbursement protocols, renewal processes, programmatic FAQ, staff onboarding playbook
- Salesforce Operational Architecture (FY26): 3 pieces — retention cycle, application/award cycle, three-audience communications journey (counselors C1–C4, partners UP1–UP5, scholars S1–S14)

## 2026-06-12 Cycle — Preston-Approved Registrations (in-session)

Approved by Preston in-session 2026-06-12 for the correctness + record-capture cycle. Each traces to the cited BRAIN source. These fold into existing pages this cycle (no new case-study route — that is deferred to the next cycle).

**Role scope (per revised CSAO JD, `BRAIN/personal/jd_csao_revised_2026-05-21.md`; JD is authoritative per `preston.md:281`):**
- **Leads financial planning & analysis (FP&A)** — strategic finance, budgeting, multi-year scenario modeling. **Precision rule (Preston, 2026-06-12, verbatim intent): "lead FP&A, not finance writ large… I'm not an accountant."** Approved site phrasing: "leads financial planning and analysis," "leads the FP&A function," "owns multi-year financial modeling and scenario planning." **Banned:** "head of finance," "leads finance," "CFO-adjacent," "oversees accounting," or anything implying the controller / accounting / audit / GAAP-close seat. The load-bearing proof for this claim is the Financial Scenarios Tool (§ Proof-of-Capability #4).
- **Supervisory span:** ~6 direct reports, including direct supervision of the Chief Programs Officer. Approved for the site (recruiters reward demonstrated executive scope). Aggregate framing only; no named reports.
- **Primary-architect framing (JD language):** "primary architect of the organization's technology and AI strategy that funders are actively funding." Approved for site use. Pattern 14 discipline still applies: "I" for solo-architected artifacts, "we"/attributional for team-executed outcomes.
- **Units Led — open reconciliation (flag for Gate 1):** `§ Units Led` carries "Student Success, University Partnerships, GEAR UP, Innovation, and Data & Technology"; the JD's functional list names "Career-Connected Learning." Resume Consultant keeps the canonical five as the "units led" list and treats Career-Connected Learning as a named functional responsibility unless Preston resolves otherwise at Gate 1. **RESOLVED at Gate 1 (2026-06-12): keep the canonical five units; Career-Connected Learning stays OFF the public site this cycle — do not list it as a unit or name it as a function on any page.**

**2050 Moonshot (registered 2026-06-12):** DC CAP's "2050 Moonshot" target of **80% college completion** traces to the revised CSAO JD and `BRAIN/context.md`. Approved as an org-level ambition Preston helps lead; frame as DC CAP's goal (org voice), never as Preston's personal claim. Replaces the previously untraceable on-site occurrence at `experience.astro:39`.

**Talent-multiplier / promotions (registered 2026-06-12, from `BRAIN/personal/fy2026_contributions.md` §15):** "Three direct reports promoted across Preston's tenure at Common App and DC CAP, one of them twice." Aggregate only — no staff names on the site. Glossary rule 10 (no promotion-ceiling framing) still hard-bans the inverse framing in this content zone.

**Consulting "$10M+ organization" figure (`consulting.astro:108`) — REGISTERED at Gate 1 (2026-06-12).** Content-verified verbatim at `BRAIN/context.md:39` ("Operating budget: $10M+"); now listed in § DC CAP Verified Numbers above. Approved for the consulting page as drafted.

**"First statewide longitudinal study" (`experience.astro:101`, `uva-ldoe-partnership.md`) — UNVERIFIED, flagged for cut-or-verify.** No trace in canonical or BRAIN. Resume Consultant verifies against the AERA Open / ECRQ publications or cuts the superlative (Lesson 7 / Pattern 11 discipline). Not registered here.

## Common App Verified Claims

- Second member of founding research team
- Built analytics environment from scratch (data environment, technical stack, research agenda, data sharing policies)
- America's largest college application dataset
- Spokesperson to NYT, Bloomberg, Board
- Partnerships profiled at NBER, Brookings, AEFP, Brown's Annenberg Institute (EdWorkingPapers)
- Led RCTs on direct admissions and text-message information campaigns

## Media Mentions (verified URLs — use exactly these)

- NPR Marketplace, "Some colleges opt for direct admissions" — https://www.marketplace.org/2022/08/15/automatic-college-admissions-can-be-a-boon-to-students-and-schools-alike/
- CNBC, "College admission applications spike" — https://www.cnbc.com/2023/03/23/college-admissions-application-volume-rises-30percent-since-pre-pandemic.html
- Brookings, "Complex applications create barriers to college" — https://www.brookings.edu/articles/complex-applications-create-barriers-to-college-some-are-trying-to-change-that/
- Slate, "I Have a Simple Solution to the College Essay Problem" — https://slate.com/human-interest/2023/09/college-essay-personal-statement-narrative-common-app.html
- Inside Higher Ed, "Common App Sees Rise in Minority Applicants" — https://www.insidehighered.com/admissions/article/2022/09/26/common-app-sees-large-rise-minority-applicants (URL corrected 2026-06-13: the 2021/11/15 URL 404s; the live article — headline-exact, quotes "Preston Magouirk, data scientist at Common App," dated 2022-09-25 — is content-verified at this URL)
- The 74 / Early Learning Nation, "The Path to Quality Child Care" — https://earlylearningnation.com/2021/06/the-path-to-quality-child-care-just-became-a-little-less-elusive-new-research-shows-star-rating-systems-can-drive-improvement-at-scale/
- NOTUS, "D.C. Gives High Schoolers More College Tuition Assistance Than Ever. Is It Enough?" — https://www.notus.org/metro/dc-college-tuition-assistance (added 2026-08-25, supplied by Preston; content-verified same day: quotes Preston Magouirk as DC CAP senior executive on net price vs. sticker price and DCTAG as one component of layered aid; byline Zara Norman, published 2026-08-20)

Do not invent additional outlets. If a new media mention surfaces, the Strategist routes it through the canonical-update protocol (PROTOCOL.md § 4) before placing on site.

## Conferences (verified)

AEFP, APPAM, UERU, Common App Illuminate, AIR, CIO4Good. No others without source.

## Published Writing (verified)

- "Five Lessons from Leading Change at a College Success Organization" — January 2026

## Forward-Facing Positioning (approved framing — use exactly)

These phrases are pre-approved and can appear on the site. Variations require Resume Consultant rewrite + voice check.

- **Throughline:** "School was a source of opportunity when I needed it most. That experience shaped everything that followed."
- **Position:** Cross-sector connector — classrooms, academic research, the largest college application dataset in the country, government and policy, nonprofit leadership.
- **Differentiator:** Full-stack strategic leader. Breadth at depth across strategy, management, analytics, technology, culture-building.
- **Reputation claim:** Comes into turnaround environments, identifies problems, solidifies strategy, builds solutions that map to that strategy, builds the culture to carry it out.

## Home Hero — Canonical (locked 2026-06-03)

The live site hero is the canonical hero. Current shipped version (refreshed 2026-06-02, tightened 2026-06-03; subhead tail updated to "ready for D.C.'s workforce" on 2026-06-04 at Preston's direction):

- **Eyebrow:** Chief Strategy and Analytics Officer · DC CAP
- **H1:** I design systems, build tools, and lead teams that deliver for DC students.
- **Subhead:** At DC CAP, we help scholars graduate from our partner universities, ready for D.C.'s workforce.

This framing (Preston-authored) leads with his three verbs (design, build, lead) over concrete objects (systems, tools, teams), and the subhead carries the career-connected outcome arc (graduate from partner universities, ready for D.C.'s workforce). It replaces the prior process-framed hero ("I design governance… we execute… processes"), which Preston flagged as understating the work. Earlier candidates A/B/C/D from 2026-05-02 remain archived in `lessons.md`.

**Iteration rule (no Preston-routing):** the Strategist or Resume Consultant may propose a hero refresh by writing a `_proposed.md` sibling to this section in canonical, with: proposed new hero, evidence basis (which BRAIN artifact justifies the change), audience-fit argument, and risk mitigation. The cycle adopts the proposed hero only after the canonical entry above is updated by Preston async. The live site is never the source of truth; canonical is.

**What stays locked across any hero refresh:**
- Eyebrow names the role + org ("Chief Strategy and Analytics Officer · DC CAP")
- H1 is a verb-led claim (action or outcome, not credential-led)
- Subhead grounds in a verifiable property (process, outcome, or community)
- Em-dash density ≤ 1 in the H1
- No "passionate / driven / on a mission / believes in" register
- No PhD-led framing in the first sentence (Pattern 12)
- Pattern 14 discipline: "I" for solo-built artifacts, "we" for team / org outcomes

## Approved 3-Pillar Credibility Stack

The site's positioning rests on three pillars, each pointing to a verifiable artifact:

1. **Strategy that's tested** → the regional partnership pivot (75–95% partner graduation outcomes)
2. **Analytics that's reproducible** → CPIP and Scholar Matching (1,625 tests; Gale-Shapley with zero blocking pairs)
3. **AI that's governed** → the dccapinnovation.org governance framework (60-day pilot, 9 staff × 3 units, 4D fluency model)

Tagline form: "Strategy that's tested. Analytics that's reproducible. AI that's governed."

This is the only 3-pillar framing that walks every reader directly to a piece of evidence. Other framings tested ("Operator/Builder/Researcher"; "Strategy/Analytics/AI Governance") are weaker because they don't lock down what's rare.

## Selectivity Language (name the credentials, don't assume readers know)

Readers — including senior recruiters and program officers — under-rate non-Ivy education credentials by default. The Resume Consultant names the selectivity explicitly when the credential is invoked.

- **IES Predoctoral Fellowship at UVA** — the gold-standard signal in education policy research. Approved framing: "IES Fellow" or "IES-funded PhD" — the term itself is the credential signal for academic and research-partnership audiences. Do not pad with adjectival inflation ("highly competitive," etc.); the name carries.
- **UVA Educational Policy Studies** — top-tier program in the discipline. Approved: name the program, not just the university. "PhD, Educational Policy Studies (UVA)."
- **Common App founding research team** — second member of the founding team. Approved framing for executive audiences: "Founding member of the research function at Common App, the largest college application dataset in the United States." The "founding" + "largest" pairing is the load-bearing signal.
- **Peabody Honors Scholar (Vanderbilt MPP)** — top-of-cohort marker. Use when the academic ladder is being established; otherwise omit.

**What NOT to do:** lead with "PhD" as a self-description before the outcome or artifact lands. PhD-led framings under-perform with corporate and foundation buyers in equal measure (per positioning research, 2026-05-02).

## Case-Study Sequence (forward-facing artifact priority)

When the site presents Preston's three load-bearing systems plus the Common App and UVA/LDOE work as case studies, the order should match what a 2026 buyer most needs to believe in this sequence: outcomes are real → systems behind the outcomes are real → AI-governance lane is real.

1. **AI Governance Framework (dccapinnovation.org)** — the strongest single-artifact entry into the AI advisory lane in 2026. Public, implemented, novel conceptual contribution (4D model). Front-doors current buyer demand.
2. **CPIP — Career Pathway Intelligence Platform** — proves the engineering-and-data-systems claim with hard numbers (19 federal sources, ~400K pathways, 1,625 tests, October 2026 launch). Status: building/scheduled; tense discipline applies.
3. **Scholar Matching algorithm (Gale-Shapley)** — algorithmic-CS-meets-applied-research move (9,100 pairs tested zero blocking). Currently in production. Ties algorithm directly to the 75-95% completion outcomes.
4. **Regional partnership strategic pivot** — pure-strategy case. Drove the 38%→72% Ward 7/8 swing and 75-95% completion outcomes. Reads as the strategist's signature move.
5. **Common App founding research team + UVA/LDOE research-practice partnership** — career-arc credibility for recruiters and academic peers; spokesperson + board-communication proof. UVA section must surface the LDOE policy and accountability systems work (2017–2020), not only the QRIS publication (per `errors.md` Pattern 4).

Sequencing logic: future-buyer-relevance descending. AI governance is the front-door 2026 demand; older work is the credibility that makes the new work trustworthy.

## Approved Agent-OS / Operating-Cadence Framing (added 2026-05-03)

Preston's BRAIN/Cowork agent OS — the writing tools, audit pipelines, scheduled-task harness, and bridge contracts that run his work — is permissible on the About page as an **operating-discipline signal, not a productized claim**. The OS is internal infrastructure; it does not get its own page, its own case study, or its own service offer.

Approved phrasing pattern (use as a closing sentence in the Lane B paragraph):

> "The agent stack and audit pipelines behind all of this rebuild from a clean machine."

Why that phrasing works:
- Names the artifact (agent stack + audit pipelines) without trying to sell it
- Cites a verifiable property (clean-machine rebuild, a Phase 5 reproducibility bootstrap shipped 2026-05-01)
- Understated register matches Preston's voice rules (no "first-class," no "novel," no "rare")

What NOT to do:
- Do not call it an "operating system" or "agent OS" on the public site (productizes internal infrastructure)
- Do not claim "first-class architecture" externally until full Phase 6 (per-bridge contract testing) ships
- Do not lead with the OS in a headline or hero — it is a closing-sentence signal, not the front door

## Operating Principles (verbatim — these are Preston's words)

1. **Evidence eats Intuition.** Good intentions don't solve problems. Clean, valid data should guide problem framing, alternatives for action, and evaluation of our work.
2. **Leaders Remove Barriers.** Strategy fails without execution, and execution requires trusting relationships. Lead by removing barriers and building capacity so teams can do their best work.
3. **Talent compounds. Surround yourself accordingly.** Seek out excellent mentors, friends, and peers. Trust those on your teams to lead with their special talents.
4. **Consistency Wins.** As a professional, husband, dad, and athlete: consistency and standards drive results. Keep showing up.

## Site Source-of-Truth Hierarchy

When facts on the site conflict with sources, resolve in this order:

1. `BRAIN/preston.md` — identity claims (career, beliefs, family)
2. `BRAIN/skills/README.md § Verified ground-truth numbers` — DC CAP figures
3. `BRAIN/org_intelligence/README.md` — DC CAP context beyond numbers
4. `BRAIN/strategy.md` — current strategic posture
5. `.learn/canonical.md` (this file, in the prestons-2026-website node) — site-specific approvals (e.g., approved framing, media URLs, publication list)

## Profile URLs (for JSON-LD sameAs and footer)

Locked URLs the Engineer agent emits in JSON-LD `sameAs` and renders in the footer. If a URL isn't locked here, the Engineer runs the discovery protocol and writes a `_proposed.md` update; Preston approves async by editing this section.

- **LinkedIn:** https://www.linkedin.com/in/preston-magouirk-840aa757/ (locked 2026-05-23)
- **GitHub:** excluded from the public site per Preston (2026-06-04). Do not emit a GitHub URL in JSON-LD `sameAs` or the footer, and do not re-run discovery for it. (Direction stands until Preston says otherwise.)
- **Google Scholar:** OMITTED (2026-06-12 discovery). The author-profile search (`scholar.google.com/citations?view_op=search_authors`) returned a CAPTCHA/anti-bot page with zero verifiable profile entries; no record content-verified against affiliation or publications. Per the discovery protocol, omitted from `sameAs` (no dead link, no guessed `user=` ID — Lesson 7). Re-run discovery next cycle.
- **ORCID:** `https://orcid.org/0000-0003-1093-5312` (LOCKED 2026-06-12). Content-verified via the ORCID public API: record name "Preston Magouirk", education **University of Virginia (PhD)** (matches the canonical UVA Educational Policy Studies criterion), and the single registered work "Cross-Sector Program Selection, Quality Improvement, and System-Building in Early Childhood Education: Evidence from a Statewide Reform in Louisiana" (the Louisiana early-childhood QRIS / AERA Open study the UVA–LDOE partnership produced). URL resolves HTTP 200, visibility public. Emitted in the Person `sameAs` array.
- **Calendly:** https://calendly.com/preston-magouirk (locked 2026-05-23; CTA destination, not sameAs)
- **Email:** pmagouir@gmail.com (locked; footer + contact paths)

**Engineer discovery protocol:** any URL marked "discovery needed" gets resolved in the next monthly cycle. The Engineer agent runs the protocol, verifies, writes the locked URL into this section, and ships JSON-LD with the verified sameAs array. Unverified URLs are omitted from sameAs, not emitted as dead links.

---

## Berlin Relocation Disclosure Policy (superseded 2026-06-01)

**Directive (2026-06-01, Preston): Berlin stays off the public site. Full stop.**

Preston relocates to Berlin with family in late July 2026 (confirmed; planning files at `BRAIN/personal/relocation_plan/`). That fact does not surface on the public website. This directive supersedes the prior 2026-05-23 four-phase disclosure plan (soft-surface note, post-move "based in Berlin" copy, JSON-LD address change, ESMT-in-Berlin entry) and aligns with the standing rule in BRAIN memory ("No Berlin/EU references on site").

**What this means for the team:**
- Location copy reads "Based in Washington, DC" and does not change on any date.
- No soft-surface note, no banner, no dedicated page, no "based in Berlin" copy, no ESMT-in-Berlin Education entry.
- JSON-LD Person `address` does not change to Berlin.
- The consulting page offers remote engagements without naming a Berlin basis.

**Post-move (August 2026) is a separate decision Preston makes later.** Until he directs otherwise in writing, the site shows DC and says nothing about the move. Any change routes through Preston explicitly; no agent applies a location change on a policy date.

---

## What This File Is Not

This is not a content draft. It is a fact registry. Phrasing belongs in the page drafts produced by the Resume Consultant. Drift between this file and the live site is a defect — surfaced by the Auditor, fixed by the Engineer.

---

*Maintained by: Resume Consultant (proposes updates), Auditor (cross-checks), Engineer (applies). Preston approves every canonical change.*
*Last verified: 2026-05-02*

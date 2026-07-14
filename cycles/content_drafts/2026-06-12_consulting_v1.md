# Content Draft — consulting.astro (2026-06-12 cycle, v1)

**Surface:** `src/pages/consulting.astro`
**Cycle:** 2026-06-12 (lift lowest lens 7.5 → 9.5)
**Author:** Resume Consultant | **Voice:** preston-writing (loaded), checking-communications (final pass)
**Candidates / findings addressed:** C8 (buyer differentiation), M8 (AI governance block absent — the 2026 front door), M9 (Pattern 7 bullet-prose), M10/Pattern 6 (em-dash), C4/M19 ($10M+ verify — **KEPT, verified**), M11 ($500K "saving" → "recovered"), M14 (grant-funding clause — **CUT**), Financial Scenarios Tool tightening (referenced not linked), buyer-register voice (glossary § Funder-Type Voice Distinction).

**This is the cycle's lift.** I restructure the page so it differentiates by buyer register and adds the AI-governance offer, while fixing every flagged number and the Pattern 7 bullet-prose. Designer specifies the block treatment; I supply the copy and the structure intent. Berlin stays off (location reads "Based in Washington, D.C."). Calendly CTA preserved (both placements).

Each change shows BEFORE → AFTER with a canonical citation per claim.

---

## Verify-or-drop verdict: "$10M+ organization" (`consulting.astro:108`)

**VERDICT: KEEP (verified true).** `BRAIN/context.md:39` states verbatim "Operating budget: $10M+"; `context.md:108` reinforces "Budget framing: $10M+ org, institutionally mature, not a startup." The exact figure and the framing both confirm against the source. The site line is content-accurate.

- **Caveat (registry discipline):** per the verified-numbers hard rule, a figure must be in `canonical.md § DC CAP Verified Numbers` to ship, and "$10M+ operating budget" is not yet registered there (it lives in `context.md`, which is BRAIN-authoritative but not the site's verified-numbers registry). So this is a **canonical-registration item for Gate 1**, not a cut. I keep the line in the draft and flag the registration. If Preston declines to register it, the fallback line is supplied below.
- The figure is load-bearing for the Financial Scenarios Tool reference (it sizes the org the tool serves). Recommend registration.

---

## STRUCTURE CHANGE — the page reorganizes around buyer register

**Current structure:** hero → three service blocks (Data & Analytics, Grant Writing, Org Change), each with "What I offer" (noun phrases, fine) + "Results I've delivered" (full-sentence bullet-prose — Pattern 7) → engagement models → CTA.

**New structure (intent, for the Designer):** keep the three existing service blocks AND add a fourth (AI governance — M8). Re-cast each block's lead sentence to address its primary buyer register per `glossary.md § Funder-Type Voice Distinction`, and give each a sharply-named offer line. Convert every "Results I've delivered" list from full-sentence bullets to tight outcome fragments (≤8 words + a number where one exists), per Pattern 7 and M9. This keeps the page's bones (Designer's layout holds) while differentiating register and fixing the prose. **Not a wall of options** — four offers, each with one buyer in view.

Buyer-register mapping (which block speaks to whom):
- **AI governance audits** → foundation + corporate (mission-driven orgs adopting AI). Lead with population/mission served.
- **Strategy + analytics builds** → foundation + education/philanthropy. Lead with what the build produces.
- **Grant writing** → foundation/corporate funders. Lead with the funded outcome.
- **Org change** → individual exec / board chair leading a transition. Lead with a specific outcome.

---

## Edit 1 — Hero (light differentiation; keep the Calendly CTA)

**Lens:** Consulting buyer. The hero is solid. One tightening: the OG image and the site's positioning promise "AI that's governed," but the hero never signals the AI lane. Add a clause so a governance-shopping buyer sees a path within the first paragraph (the M8 dead-end starts at the hero).

**BEFORE** (`consulting.astro:13–20`)
> Data, strategy, and execution for mission-driven organizations.
>
> I help nonprofits and education organizations build their analytics, win the grants that fund the work, and lead the change that follows.
>
> I've led strategy at DC CAP, built the analytics and research functions at Common App, and managed relationships with partner organizations and major funders. I bring strategic depth and operational experience to a range of engagements.

**AFTER**
> Data, strategy, and AI for mission-driven organizations.
>
> I help nonprofits and education organizations build the analytics they actually use, govern AI responsibly, win the grants that fund the work, and lead the change that follows.
>
> I lead strategy and analytics at DC CAP, I helped found the research function at Common App, and I built the AI governance framework my own organization runs. I bring that mix of strategy, analytics, and hands-on building to a small number of engagements.

- **Citations:**
  - "AI for mission-driven organizations" / "govern AI responsibly" — `canonical.md § Proof-of-Capability #3` (the governance framework) + `strategic_brief.md § Forward State #4` ("AI governance is one strand inside the consulting page"). Closes the M8 dead-end at the hero.
  - "I lead strategy and analytics at DC CAP" — `canonical.md § Identity Baseline` (CSAO). **Pattern 14:** present tense, first person (his role).
  - "I helped found the research function at Common App" — `canonical.md § Common App Verified Claims` ("Second member of founding research team") + `canonical.md § Selectivity Language` (founding-member framing). Changed "built the analytics and research functions" → "helped found the research function" for accuracy (founding *member*, not sole builder — Pattern 14 + M2 discipline).
  - "I built the AI governance framework my own organization runs" — `canonical.md § Proof-of-Capability #3`. **Pattern 14:** "I built" (solo-architected) + "my own organization runs" (org operates it). Avoids "my organization's" possessive-on-people issue (it's the org, not people).
  - "a small number of engagements" — echoes the existing CTA ("a limited number of consulting engagements"); scarcity signal per `strategic_brief.md § Forward State #3`.
  - **Removed** the tricolon-risk "strategic depth and operational experience to a range of engagements" → "strategy, analytics, and hands-on building" (three concrete capabilities, each checkable — not cadence-tricolon; glossary rule 6). Em-dash count: zero.
- **Calendly CTA** (`consulting.astro:21–41`): **preserved unchanged.**

---

## Edit 2 — Service block 1: Data & Analytics Strategy (register: foundation/education; fix Results bullets, M11, $10M+ framing)

**Lens:** Foundation + education buyer. Lead with what the build produces. Sharpen the offer name. Convert the four "Results" bullets from full sentences to fragments (M9, Pattern 7).

**Offer line BEFORE** (`consulting.astro:56`): "Data your team actually uses."
**Offer line AFTER:** "Strategy and analytics builds for education and philanthropy." *(the sharply-named offer from `strategic_brief.md § Forward State #3`, verbatim intent)*

**Intro paragraph:** KEEP (`consulting.astro:58–60`, "Most organizations collect more data than they use…") — verified clean, in voice, no Pattern 15/16. One micro-trim: "leaders who call themselves 'data-driven'" stays; it's Preston's deflation, not an AI tell.

**"What I offer" list** (`consulting.astro:66–91`): KEEP — these are noun phrases (acceptable per M9). No change.

**"Results I've delivered" list — Pattern 7 fix (full sentences → fragments):**

**BEFORE** (`consulting.astro:97–114`)
> → Built the analytics environment for Common App, the largest source of college application data in the U.S.
> → Led DC CAP's Salesforce Education Cloud rollout, saving $500K+ a year and cutting administrative load by more than half
> → Built the financial modeling tools behind a $10M+ organization's multi-year strategy and budget
> → Built secure, accessible analytics pipelines that generate branded reports, dashboards, and visualizations

**AFTER**
> → Founding analytics environment, Common App (largest U.S. college application dataset)
> → DC CAP Salesforce rollout: $500K+ in annual staff capacity recovered
> → Financial scenario model for a $10M+ organization's multi-year planning
> → Secure analytics pipelines producing branded reports and dashboards

- **Citations:**
  - "Founding analytics environment, Common App (largest U.S. college application dataset)" — `canonical.md § Common App Verified Claims` ("Built analytics environment from scratch"; "America's largest college application dataset"). Fragment form, Pattern 7.
  - "DC CAP Salesforce rollout: $500K+ in annual staff capacity recovered" — **M11 fix.** `canonical.md § Operational Discipline Numbers` ("Annual staff capacity **recovered** through digital transformation: $500K+"). "saving $500K+" → "$500K+ in annual staff capacity recovered" (capacity redirected, not budget saved — the locked phrasing). Dropped "cutting administrative load by more than half" from this bullet (the compression detail lives in the Org Change block; avoids restating the same digital-transformation outcome in two bullets).
  - "Financial scenario model for a $10M+ organization's multi-year planning" — **$10M+ KEPT (verified, `context.md:39`).** Reframed "Built the financial modeling tools behind…" → "Financial scenario model for…" to (a) fragment form (Pattern 7) and (b) align to the canonical artifact name "Financial Scenarios Tool" (`canonical.md § Proof-of-Capability #4`). See Edit 5 for the fuller tool reference. **Fallback if $10M+ is not registered at Gate 1:** "Financial scenario model behind a multi-year, board-facing planning process" (drops the figure, keeps the claim).
  - "Secure analytics pipelines producing branded reports and dashboards" — fragment of the BEFORE; traces to `canonical.md § Forward-Facing Positioning` (analytics) + the dccap-brand reporting capability. Dropped "accessible" + "visualizations" for length (fragment discipline).
- **Em-dash count:** zero. Each fragment ≤8–9 words.

---

## Edit 3 — Service block 2: Grant Writing & Proposal Development (register: funders; fix Results bullets, M14 CUT)

**Lens:** Foundation/corporate funder buyer. Lead with the funded outcome.

**Offer line** (`consulting.astro:125`): "Translate your impact into funded proposals." — KEEP (verified clean, in voice).
**Intro paragraph** (`consulting.astro:127–129`): KEEP — verified clean. (One check: "Competitive grants demand more than good intentions" echoes Preston's actual register; not an AI tell.)
**"What I offer" list** (`consulting.astro:135–156`): KEEP — noun phrases.

**"Results I've delivered" list — Pattern 7 fix + M14 cut:**

**BEFORE** (`consulting.astro:162–183`)
> → Managed long-term relationships with large-scale funders across multiple organizations
> → Built the strategy that won a $600K AI innovation grant (KPMG AI Impact Initiative)
> → Contributed to $50M+ in philanthropic commitments at DC CAP, including MacKenzie Scott / Yield Giving
> → PhD training in program evaluation, causal inference, and quantitative methods
> → Led randomized controlled trials of strategic initiatives, funded by national research grants

**AFTER**
> → Long-term relationships with large-scale funders across multiple organizations
> → $600K KPMG AI Impact Initiative grant (built the winning strategy)
> → $50M+ in DC CAP philanthropic commitments, including MacKenzie Scott / Yield Giving (instrumental in)
> → PhD training in program evaluation, causal inference, and quantitative methods
> → Randomized controlled trials on direct admissions and text-message campaigns

- **Citations:**
  - "$600K KPMG AI Impact Initiative grant (built the winning strategy)" — `canonical.md § Operational Discipline Numbers` ($600K KPMG). **Pattern 14:** "built the winning strategy" is Preston's contribution; the grant is the org's. Fragment form.
  - "$50M+ in DC CAP philanthropic commitments… (instrumental in)" — `canonical.md § Operational Discipline Numbers` ("$50M+… instrumental in"). **Pattern 14:** "instrumental in" preserves the contributory framing (not "I raised $50M"). MacKenzie spelled correctly.
  - "Randomized controlled trials on direct admissions and text-message campaigns" — **M14 fix.** `canonical.md § Common App Verified Claims` ("Led RCTs on direct admissions and text-message information campaigns"). **CUT "funded by national research grants"** — no canonical or BRAIN trace for the funding attribution (M14; Lesson 7). Replaced the unverifiable funding clause with the verified RCT *subjects* (direct admissions, text campaigns), which is stronger and traces. The RCT claim now stands on its own, content-verified.
  - "PhD training in program evaluation, causal inference, and quantitative methods" — `canonical.md § Education` + `glossary.md § ATS phrasing` (program evaluation, causal inference, RCT design). KEEP (verified). This is a credential fragment, acceptable as a list item.
- **Em-dash count:** zero.

---

## Edit 4 — Service block 3: Organizational Change & Strategic Transitions (register: individual exec; fix Results bullets)

**Lens:** Individual leader / board chair buyer. Lead with a specific outcome.

**Offer line** (`consulting.astro:194`): "Make the change stick." — KEEP (in voice, concrete).
**Intro paragraph** (`consulting.astro:196–198`): KEEP, with one **Pattern 15 check** — "Change sticks when leaders pair clear frameworks with disciplined communication and real attention to how people experience the shift." This is borderline (balanced clause) but names concrete mechanisms (frameworks, communication, attention to experience) and a person as subject ("leaders pair") — passes the Agency Rule and is not an empty maxim. KEEP. The final sentence "Most organizations underinvest in execution" is Preston's deflation, KEEP.
**"What I offer" list** (`consulting.astro:204–225`): KEEP — noun phrases.

**"Results I've delivered" list — Pattern 7 fix:**

**BEFORE** (`consulting.astro:231–248`)
> → Led the integration of four teams into a unified Student Success division at DC CAP
> → Directed the shift from a national to a regional partnership model, lifting first-year retention to 85%+ and graduation to 75–95% at established partners
> → Led an enterprise-wide digital transformation that cut administrative time by more than half
> → Designed new supervision frameworks for cross-functional coaching teams

**AFTER**
> → Integrated four teams into a unified Student Success division at DC CAP
> → National-to-regional partnership pivot: 85%+ first-year retention, 75–95% graduation at established partners
> → Enterprise digital transformation that cut administrative time by more than half
> → New supervision frameworks for cross-functional coaching teams

- **Citations:**
  - "Integrated four teams into a unified Student Success division" — `BRAIN/preston.md:149` (verified clean in baseline: "integrated four teams into a unified Student Success division"). Fragment form.
  - "National-to-regional partnership pivot: 85%+ first-year retention, 75–95% graduation at established partners" — `canonical.md § DC CAP Verified Numbers` (retention; established-partner graduation) + `canonical.md § Forward-Facing Positioning` (the pivot). **Pattern 14:** the pivot is Preston's directed work (he ran the evaluation and drove it — Experience Edit 2); the outcomes are DC CAP's. Fragment keeps the attribution clean by stating the action (pivot) + the org outcomes (retention/graduation) without "I lifted retention."
  - "Enterprise digital transformation that cut administrative time by more than half" — `canonical.md § Operational Discipline Numbers` (the compression figures support "more than half"). Fragment.
  - "New supervision frameworks for cross-functional coaching teams" — `BRAIN/preston.md` (supervision frameworks; verified-clean class). Fragment.
- **Em-dash count:** zero.

---

## Edit 5 — NEW service block 4: AI Governance (M8 — the 2026 front door)

**Lens:** Foundation + corporate buyer adopting AI. This is the single highest-value fix on the page (M8): the site's strongest 2026 lane is absent from the buyer surface, and the OG image promises "AI that's governed." Lead with the mission-driven population served. This is also where the **Financial Scenarios Tool reference** is tightened (referenced, not linked) — actually, the tool belongs in block 1 (analytics) per its function; I place the tool reference in block 1's intro and keep block 4 focused on governance. See the note at the end of this edit.

**NEW BLOCK** (to sit as the first service block, before Data & Analytics — it is the front door per the case-study sequence; Designer decides order, but governance-first matches `canonical.md § Case-Study Sequence`)

> ### AI Governance Audits
> **AI governance for mission-driven organizations.**
>
> Most nonprofits adopting AI have no framework for what is safe to hand to a model and what is not. I built one for my own organization and ran the pilot that put it into practice. I help mission-driven organizations adopt AI responsibly: a data-classification standard that protects the people you serve, a fluency model that trains staff to delegate well, and governance that holds up to a board's scrutiny.
>
> **What I offer**
> → AI governance and data-classification frameworks
> → Responsible-AI readiness assessments
> → Staff AI fluency training and rollout
> → Pilot design and implementation support
>
> **Results I've delivered**
> → DC CAP enterprise AI governance framework (9 staff, 3 units, 60-day pilot)
> → Four-tier data classification exceeding FERPA and federal-grant requirements
> → 4D fluency model adapted from current research
> → 19 interactive governance pages, public at dccapinnovation.org

- **Citations:**
  - "AI governance for mission-driven organizations" — `strategic_brief.md § Forward State #3` ("AI governance audits for mission-driven organizations", verbatim intent) + `glossary.md § Funder-Type Voice Distinction` (foundation/corporate: mission-aligned, lead with population served).
  - "I built one for my own organization and ran the pilot that put it into practice" — `canonical.md § Proof-of-Capability #3`. **Pattern 14:** "I built" (solo) + "ran the pilot" (past, completed). **C1 tense discipline applied here too:** the pilot is past ("ran… put"); the framework is operational ("I built one… I help organizations adopt"). **No pilot-outcome claim** (Lesson 7).
  - "data-classification standard that protects the people you serve" — `canonical.md § Proof-of-Capability #3` (four-tier classification, FERPA) + `context.md:186–193` (the tier table). Reframed to buyer benefit ("protects the people you serve") without equity language.
  - "fluency model that trains staff to delegate well" — `canonical.md § Proof-of-Capability #3` (4D fluency model: Delegation, Description, Discernment, Diligence).
  - "governance that holds up to a board's scrutiny" — `context.md:194` (governance ownership includes board-adjacent sponsorship); reframed as buyer benefit.
  - Results fragments: "9 staff, 3 units, 60-day pilot" / "Four-tier data classification exceeding FERPA and federal-grant requirements" / "4D fluency model adapted from current research" / "19 interactive governance pages, public at dccapinnovation.org" — all from `canonical.md § Proof-of-Capability #3` and `§ Operational Discipline Numbers` ("9 staff × 3 units… 19 interactive HTML pages on dccapinnovation.org"). **dccapinnovation.org named, NOT hyperlinked** (canonical rule; the framework's "View the framework" link already exists on the project card, so the consulting page references the host without a second live link — consistent with "referenced, not linked" for the financial tool and understated for governance).
  - **Pattern 7:** all results are fragments (≤9 words), not sentences. **Pattern 11:** "current research" not "cutting-edge"/"novel" (understated). **No "robust," "comprehensive," "leverage."**
  - **Em-dash count:** zero.
- **"no framework for what is safe to hand to a model and what is not" check:** this is a "what is X and what is not" pair, NOT the banned "X, not Y" construction (glossary rule 2). It states two real categories (safe handoffs vs. unsafe), not a rhetorical negation-for-emphasis. Passes. If the Auditor reads it as borderline, fallback: "no framework for which tasks are safe to delegate to a model." Flagging the micro-choice.

---

## Edit 6 — Financial Scenarios Tool reference (tighten to canonical framing; referenced, not linked)

**Lens:** Lane B credibility, foundation/board buyer. The prompt asks to tighten the financial-tool reference to canonical framing: name dccapinnovation.org as host but NEVER hyperlink; "referenced, not linked"; 53/53 verification checks available. The tool's function (financial modeling for a $10M+ org) is the analytics-block result line (Edit 2). Here I supply the **optional fuller reference** the Designer can place as a one-line credibility tag under block 1 (Data & Analytics), if the layout has room. If not, Edit 2's fragment carries it.

**OPTIONAL reference line** (under block 1 intro, Designer's discretion)

> The financial scenario model I built for DC CAP's board, hosted at dccapinnovation.org, runs a 53-of-53 verification suite on every figure it surfaces.

- **Citations:**
  - "financial scenario model I built for DC CAP's board" — `canonical.md § Proof-of-Capability #4` (Financial Scenarios Tool, solo-built, used in board meetings). **Pattern 14:** "I built" (solo-built per canonical). **FP&A precision:** "financial scenario model," not "finance system" — stays inside the FP&A/scenario-modeling lane, no accounting/controller implication.
  - "hosted at dccapinnovation.org" — `canonical.md § Proof-of-Capability #4` ("Site copy may name dccapinnovation.org as the host but must not turn the URL into a hyperlink"). **Named, NOT hyperlinked.** No "/financial_modeling/" path (that's behind Cloudflare Access; not public-linkable — canonical).
  - "53-of-53 verification suite on every figure" — `canonical.md § Operational Discipline Numbers` ("Financial Modeling Tool: 53/53 verification checks green") + `canonical.md § Proof-of-Capability #4` ("53/53 verification checks available"). Understated capacity signal (canonical: "names the artifact and its function, lets numbers carry the rest").
  - **Em-dash count:** zero. **Pattern 15 check:** concrete (53/53 checks), not a maxim.
- **Placement note:** this is supplementary, not required. The page can ship with Edit 2's fragment alone if the Designer judges the page is getting dense. Flagged as Designer's call.

---

## Edit 7 — Engagement Models + CTA (light; keep both)

**Lens:** All buyers. The "How We Work Together" section (`consulting.astro:256–289`) and the closing CTA (`consulting.astro:292–327`) are verified clean. Two micro-fixes only:

- **m8 (hyphen → en-dash ranges):** "3-5 hours monthly" (`:264`) → "3–5 hours monthly"; "2-4 weeks" (`:282`) → "2–4 weeks". Matches the en-dash forms used elsewhere on the site. (Engineer applies; flagged for the consistency sweep.)
- **CTA copy** (`consulting.astro:298`): KEEP — "I take on a limited number of consulting engagements so each client gets focused attention…" is in voice (scarcity signal, learner-positioned close: "I'd welcome the conversation"). No change.
- **Location** (`consulting.astro:324`): "Based in Washington, D.C. Available for remote engagements." — **KEEP verbatim. Berlin stays off (canonical § Berlin, hard rule).** The "remote engagements" line offers remote work without naming a Berlin basis — compliant with the directive.
- **Calendly CTA** (both placements): **preserved unchanged.**

---

## Net effect on the Consulting Buyer lens (7.5 → target 9.5)

| Finding | Fix in this draft |
|---|---|
| M8 (AI governance absent) | Edit 5 — new governance block, governance-first order |
| C8 (undifferentiated registers) | Structure change + Edits 1–5 — each block leads with its buyer |
| M9 / Pattern 7 (bullet-prose) | Edits 2–5 — all "Results" lists converted to fragments |
| M10 / Pattern 6 (em-dash) | Every edit: em-dash count zero; page density drops well under 1/200 |
| C4 / $10M+ unregistered | Verdict KEEP (verified `context.md:39`); flagged for Gate 1 registration; fallback supplied |
| M11 ($500K "saving") | Edit 2 — "recovered $500K+ in annual staff capacity" |
| M14 (grant-funding clause) | Edit 3 — CUT; replaced with verified RCT subjects |
| Financial tool framing | Edits 2 + 6 — referenced not linked, 53/53, host named |

**Voice scan (whole page):** no equity language; no "X, not Y" / "this isn't X, it's Y" / parenthetical negation; no forbidden filler ("robust," "comprehensive," "leverage," "navigate complexity" all absent from new copy); no forbidden self-description; em-dash budget clean; Pattern 15/16 checked on each retained intro. The "what is safe… and what is not" phrase (Edit 5) flagged as a non-violation with a fallback.

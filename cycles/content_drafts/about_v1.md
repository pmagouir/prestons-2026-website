# Content Draft — About (about.astro) v1
# Source proposal: proposals/2026-05-03_proposal.md (candidates: C5, C7, C9, C10, C1, C2)
# Date: 2026-05-03 (revised same day per Preston decisions)
# Status: Approved — Engineer scope locked. Open questions resolved (see Revision Log).

## Triage Decisions
See `hero_v1.md`. This file advances C5 (selectivity), C7 (narrative opener consistency with hero), C9 (voice cleanup), C10 (number check). C3 / projects work is in separate drafts.

## Canonical Inputs Used

**Numbers and facts:**
- Title: "Chief Strategy and Analytics Officer" — full form (canonical.md line 13)
- Org: "DC CAP" preferred over "DC CAP Scholars" in body (glossary.md line 13 voice anchor)
- Cross-sector framing: TFA / UVA / Common App / government / DC CAP (canonical.md lines 122–127; glossary.md lines 43–46)
- DC CAP partner graduation: 75–95% (canonical.md line 84)
- National FGLI baseline: 20–25% (canonical.md line 81)
- IES Fellowship phrasing (canonical.md line 156)
- UVA program: Educational Policy Studies (canonical.md line 157)

**Approved phrasings:**
- Throughline (verbatim): canonical.md line 124
- Operating principles (verbatim): canonical.md lines 177–180
- Cross-sector framing structure: glossary.md lines 43–46

**Source files:** `canonical.md`, `glossary.md`, `preston.md` (identity narrative)

---

## Draft

### Meta description (replaces "Education researcher turned nonprofit strategist. PhD from UVA, MPP from Vanderbilt. Leading strategy and analytics at DC CAP Scholars.")

```
Chief Strategy and Analytics Officer at DC CAP. PhD in Educational Policy Studies (UVA, IES Fellow), MPP from Vanderbilt. Builds the systems behind 75–95% completion outcomes for first-generation, low-income college students.
```

Notes: leads with the role, not the credential (per Pattern 12 preference). Names the program and the IES Fellowship explicitly (Pattern 11). Uses canonical numbers.

---

### H1 (kept)

```
About Me
```

### Body — Paragraph 1 (kept verbatim from current site, matches canonical throughline)

```
School was a source of opportunity when I needed it most. That experience shaped everything that followed.
```

### Body — Paragraph 2 (replaces current "I've spent my career studying what actually moves the needle...")

```
My career has crossed sectors that don't usually speak to each other: classrooms (Teach For America), academic research (UVA), the largest college application dataset in the country (Common App), government and policy, and nonprofit leadership (DC CAP). The strategic position is the middle ground between all of them.
```

Notes: replaces the previous paragraph which contained a tricolon list and an under-resourced-students framing that, while accurate, didn't lead with the cross-sector argument that strategic_brief.md identifies as the competitive edge. Cross-sector framing is the canonical paragraph (close paraphrase preserving structure, per glossary.md line 47).

### Body — Paragraph 3 (replaces current "Today, I serve as...")

```
Today I serve as Chief Strategy and Analytics Officer at DC CAP, leading Program Strategy, Student Success, Strategic Partnerships, and Data & Technology. The model combines renewable scholarships, dedicated Success Coaches at partner campuses, and wraparound support. Partner graduation rates run 75–95% against a national first-generation, low-income baseline of 20–25%.
```

Notes:
- Title fully spelled (Pattern 3 fix).
- "DC CAP" not "DC CAP Scholars" (glossary voice anchor).
- "Renewable scholarships, Success Coaches, wraparound support" — all glossary-approved terms (lines 17, 19).
- Numbers verified against canonical.

### Body — Paragraph 4 (NEW — Lane B exposure, revised v1.1)

```
Some of the work is technical. A Gale-Shapley stable matching algorithm places ~700 scholars across 13 university partners every year. The AI Governance Framework I built for DC CAP runs a 60-day pilot for nine staff across three units, with materials public at dccapinnovation.org. The same site hosts a multi-scenario endowment model that gets used in board meetings: solo-built, audited, then redesigned for CEO use. The Career Pathway Intelligence Platform launches October 2026 — 19 federal data sources, ~400,000 ranked pathways, 1,625 tests, solo-architected. The agent stack and audit pipelines behind all of this rebuild from a clean machine in ten minutes.
```

Notes:
- Five sentences, five distinct artifacts. Each grounds in either a number, a public host, or a verifiable property. No "first-class," no "novel," no "rare" — understated voice per Preston's direction.
- "Some of the work is technical" replaces "On the technical side, I build production systems" — drops the leading verb claim and lets the artifacts carry the proof.
- **Reference, not link.** Both `dccapinnovation.org` strings are plain text, never hyperlinks. (Engineer instruction. Treatment matches the artifact's actual access posture: AI Governance pilot materials are public; the Financial Scenarios endowment model is gated behind Cloudflare Access for board / staff. The site reference signals existence; clicking is not the use case.)
- Financial Scenarios folded in (C1 — Preston decision 2026-05-03): pithy capacity signal, understated. "Solo-built, audited, then redesigned for CEO use" is the value-add signal — names the audit-driven rebuild without naming the embarrassing ("CFO jargon for a CEO tool") failure that prompted it.
- Agent OS folded in (C2 — Preston decision 2026-05-03): closing sentence per `canonical.md § Approved Agent-OS / Operating-Cadence Framing`. Names the artifact + the verifiable property (10-minute clean-machine rebuild, from Phase 5 bootstrap shipped 2026-05-01). No "operating system," no "first-class," no "rare."
- Capability tense: Scholar Matching = present ("places"), AI Governance = present ("runs"), Financial Scenarios = present ("gets used"), CPIP = future ("launches October 2026"), agent stack = present ("rebuild"). Pattern 1 enforced.
- Em-dash count in paragraph: 1 (CPIP sentence). Within budget.

### "How I Operate" block (current copy is close to canonical; small fixes)

Current copy is preserved with two corrections:

**Principle 1, body** — replace semicolon with period to match canonical verbatim:
> Good intentions don't solve problems. Clean, valid data should guide problem framing, alternatives for action, and evaluation of our work.

**Principle 3, body** — fix the existing grammar bug ("I trust those on my teams use their special talents"):
> I seek out excellent mentors, friends, and peers. I trust the people on my teams to lead with their special talents.

**Principles 2 and 4 — keep current first-person variants** (they read in Preston's voice without violating canonical).

### "The Real Work" section (kept; minor copy edit)

Current copy is fine. One micro-edit for em-dash density (current section has one em-dash; rewrite eliminates it):

Replace: "spent the last two years with George—the coolest kid in The District who makes me the proudest dad alive."
With: "spent the last two years with George, the coolest kid in The District. Being his dad is the best job I have."

Notes: drops one em-dash; replaces an AI-flavored "makes me the proudest" with concrete, plain language.

---

### Aside (sidebar) — replaces current sidebar content

**Current Role**
```
Chief Strategy and Analytics Officer
DC CAP
```

(Pattern 3 fix: "and" not "&" — match canonical.)

**Core Focus** — replace current ("Change Management / Strategy & Operations / Analytics & Research") with a Lane A + Lane B balanced list:
```
→ Strategy & Analytics
→ AI Governance
→ Organizational Change
```

**Technical Stack** — keep current (R, Python, Salesforce, SQL, Astro). Optionally add "TypeScript" or "Anthropic SDK" once C2 routes through.

**Credentials** — replace current 3-item list:
```
PhD, Educational Policy Studies (UVA, IES Fellow)
MPP (Vanderbilt, Peabody Honors Scholar)
Certified CrossFit Trainer (CF-L3)
Board of Advisors, AU School of Education
```

Notes:
- Names UVA Ed Policy program (Pattern 11).
- IES Fellow visible (Pattern 11).
- Peabody Honors Scholar visible — the credential signals top-of-cohort (canonical line 159).
- CF-L3 kept; Designer / Preston decide whether the fitness signal stays in the sidebar (Pattern 13 is a positioning preference, not a rule).
- Adds AU Board of Advisors — Lane A external-validation signal not currently visible anywhere on site.

---

## Sources & Citations

| Claim | Source |
|-------|--------|
| Title "Chief Strategy and Analytics Officer" | canonical.md § Identity Baseline (line 13) |
| DC CAP partner graduation 75–95% | canonical.md § DC CAP Verified Numbers (line 84) |
| FGLI national baseline 20–25% | canonical.md § DC CAP Verified Numbers (line 81) |
| "DC CAP" voice preference | glossary.md § Voice Anchors (line 13) |
| Cross-sector framing | canonical.md § Forward-Facing Positioning (lines 122–127); glossary.md § Approved Cross-Sector Framing (lines 43–46) |
| Throughline | canonical.md § Forward-Facing Positioning (line 124) |
| Operating principles verbatim | canonical.md § Operating Principles (lines 177–180) |
| Scholar Matching ~700 / 13 partners | canonical.md § Proof-of-Capability Systems (line 69) |
| AI Governance pilot 60-day / 9 staff / 3 units | canonical.md § Proof-of-Capability Systems (line 70) |
| CPIP 19 federal sources / 400,000 / 1,625 tests / Oct 2026 | canonical.md § Proof-of-Capability Systems (line 68) |
| IES Fellowship + UVA Ed Policy program naming | canonical.md § Selectivity Language (lines 156–157) |
| Peabody Honors Scholar | canonical.md § Selectivity Language (line 159) |
| AU Board of Advisors | canonical.md § Credentials & Recognitions (line 62) |

## Voice Self-Audit

- ✓ No "equity" language
- ✓ No "X, not Y" / "Not X, but Y" constructions
- ✓ Em-dash density: ~2 em-dashes across ~520 words → ~1 per 260, within budget
- ✓ No bullet-point prose (sidebar bullets are real list items)
- ✓ No forbidden filler ("genuinely," "honestly," "robust," etc.)
- ✓ No forbidden self-description ("passionate about," "driven by," "on a mission to") — every claim grounds in an artifact or a number
- ✓ Active voice throughout
- ✓ Lead with the point in every paragraph
- ✓ Capability tense applied (Scholar Matching present, AI Gov present, CPIP future)
- ✓ No elite-institution comparators
- ✓ Pattern 11 selectivity: IES, UVA Ed Policy, Common App "largest in country," Peabody Honors all named

## Open Questions for Preston

1. **AU Board of Advisors in sidebar** — adds a Lane A external-validation signal not currently visible. Worth adding, or hold?
2. **Lane B paragraph in body** — pulls AI Governance Framework forward into the About page. Aggressive enough? Or push the "I build production systems" claim to the case-study layer (C6) and keep About operator-leaning?
3. **Sidebar Core Focus** — proposed swap to "Strategy & Analytics / AI Governance / Organizational Change." This shifts the public framing toward the AI-advisory lane. Confirm the timing fits 2026 positioning.

## Revision Log

**2026-05-03 — Preston decisions (in-session, before Engineer step):**
- Q1 (Lane B paragraph): **approved with "reference, don't link" treatment** for both dccapinnovation.org mentions. Engineer renders as plain text, not hyperlinks.
- Q2 — C1 (Financial Scenarios): **fold into the Lane B paragraph as a referenced sub-artifact, not linked.** Extract capacity and value-add signals pithily; understated voice ("immense skill to do this and I want to show that in understated way"). Implemented as the third sentence of the revised Para 4.
- Q2 — C2 (Agent OS / operating cadence): **approved for About** as a closing-sentence signal. Implemented as the fifth sentence of the revised Para 4.
- Q3 — C6 (case-study rebuild): defer to next cycle. Confirmed.
- Q3 — C8 (consulting page restructure): defer to next cycle. Confirmed.
- Lesson 8 (Pre-implementation Preston gate): **approved**, written to `.learn/lessons.md`.

**Open questions 1, 2, 3 above (AU Board, Lane B aggressiveness, Sidebar Core Focus reframe) — answered by approval of the full draft.**

Sidebar AU Board of Advisors line stays in. Lane B paragraph stays in (revised per above). Core Focus swap to "Strategy & Analytics / AI Governance / Organizational Change" stays in.

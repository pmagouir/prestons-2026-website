# errors.md — Personal Website Pattern Registry

Append-only log of patterns caught in past runs. Every error here becomes a live test that future runs scan against.

This file is the website's analog of `BRAIN/projects/development_office/.learn/errors.md`. Same enforcement posture: every Auditor pass scans the current site state against every pattern below; every recurring pattern is a protocol failure.

---

## Pattern Registry

### Pattern 1 — CPIP capability overstate

**Caught:** [pre-existing risk, surfaced during 2026-05-02 design pass]
**Description:** Site or draft describes CPIP as a current operating capability. CPIP launches October 2026; until then it is "building" / "designing" / "scheduled," never "running" / "operating."
**Lesson:** Apply the capability tense check from `glossary.md § Approved Capability Tense Discipline` to every claim on the experience page, projects page, and consulting page.
**Watch on:** experience.astro, projects.astro, consulting.astro, and any new case study describing technical infrastructure.

### Pattern 2 — Equity language slip

**Caught:** [recurring across BRAIN — feedback memory `feedback_no_equity_language.md`]
**Description:** Drafts use "equity" in the standard nonprofit sense ("equity in education," "equity-focused") despite Preston's hard rule.
**Lesson:** Use accessibility / impact framing instead. Hard rule. Auditor flags as Critical regardless of context.
**Watch on:** every page, every blog post, every new draft. Fastest scan: grep `equity\|equit` against any draft before saving.

### Pattern 3 — Stale title in About sidebar

**Caught:** [structural risk — current site shows "Chief Strategy & Analytics Officer" but the long-form narrative on About also restates it; if Preston's title changes, drift between sidebar and narrative is highly likely]
**Lesson:** Title appears in three places: About sidebar, About narrative, Experience timeline. Updates touch all three or none. Resume Consultant maintains the list of "title-touch points" in the site canonical state.
**Watch on:** about.astro, experience.astro, layouts/Layout.astro (head metadata), JSON-LD Person schema.

### Pattern 4 — UVA/LDOE partnership reduced to QRIS only

**Caught:** [structural risk — the existing projects.astro Project 3 surfaces the early-childhood QRIS study but does not name the broader UVA–Louisiana Department of Education research-practice partnership on policy and accountability systems (2017–2020) that the QRIS work emerged from]
**Description:** Drafts and existing pages frame the UVA period as either generic "academic research" or as the QRIS publication alone. Both miss the load-bearing fact: Preston worked on policy and accountability systems research inside a state education agency partnership for ~3 years.
**Lesson:** Every UVA-period reference must surface (a) the LDOE partnership and (b) the policy + accountability systems framing. The QRIS publication is a downstream artifact, not the headline. See `canonical.md § UVA / Louisiana Department of Education Partnership` for approved language.
**Watch on:** experience.astro, projects.astro, about.astro, any new case study touching the UVA period.

### Pattern 5 — Number-rounding drift

**Caught:** [risk pattern — DC CAP figures shift quarterly]
**Description:** Drafts cite an outdated figure (1,100+ scholars when current is ~800 FY26) or a rounded figure that obscures audience-specific framing.
**Lesson:** All quantitative claims pull from `canonical.md § DC CAP Verified Numbers`. If the figure is not there, do not use it. If the figure is there but stale (last verified date >90 days), Resume Consultant routes through canonical-update protocol before placing on site.
**Watch on:** about.astro, projects.astro, consulting.astro "Results I've delivered" lists.

### Pattern 6 — Em-dash overuse

**Caught:** [voice risk — current site uses em-dashes liberally in current consulting/about copy]
**Description:** Em-dash density above ~1 per 200 words flags the prose as AI-styled or stylistically lazy.
**Lesson:** Trim aggressively in next refresh. Replace with periods or restructure sentences.
**Watch on:** every page during voice check.

### Pattern 7 — Bullet-point prose

**Caught:** [voice risk — consulting page "Results I've delivered" lists are pure bullet prose]
**Description:** A list of complete sentences each with a leading arrow is not list content; it's paragraph content fragmented for visual effect.
**Lesson:** Audit consulting.astro service blocks: condense bullet lists into paragraphs OR shorten bullet entries to actual list items (3–8 words each, not full sentences).
**Watch on:** consulting.astro, projects.astro descriptions.

### Pattern 8 — Forbidden self-description

**Caught:** [voice risk — AI-generic executive copy templates push these phrases]
**Description:** "Passionate about..." / "Driven by..." / "On a mission to..." / "Believes in..." appearing in any first-person voice block.
**Lesson:** See `glossary.md § Forbidden Self-Description` for the full list. Auditor scans every draft.
**Watch on:** about.astro narrative, hero subheading, consulting hero.

### Pattern 9 — Missing JSON-LD Person schema

**Caught:** [SEO / AI-discovery gap — site does not currently emit structured data]
**Description:** No JSON-LD Person schema on the site means LLM-based search (ChatGPT, Perplexity, Claude) cannot reliably parse Preston's identity, role, and `sameAs` links to LinkedIn, ORCID, Google Scholar, GitHub.
**Lesson:** Engineer ships JSON-LD Person schema in `Layout.astro` head with required fields: name, jobTitle, affiliation, alumniOf, knowsAbout, sameAs (array of profile URLs). Maintained as the canonical data layer for AI-search visibility.
**Watch on:** layouts/Layout.astro on every monthly run.

### Pattern 10 — Recruiter-tense breakdown

**Caught:** [resume risk]
**Description:** Past roles drift into present tense ("Manage..." instead of "Managed...") on the experience page when the role has ended. Or current role drops into past tense ("Led..." instead of "I lead...") in the narrative.
**Lesson:** Past roles → past tense across all bullets. Current role → present tense. Do not mix within a single role block.
**Watch on:** experience.astro on every refresh.

### Pattern 11 — Selectivity under-citing

**Caught:** [positioning research, 2026-05-02]
**Description:** Drafts invoke a credential (IES Fellow, Common App founding research team, UVA Ed Policy, Peabody Honors Scholar) without naming what makes it selective, on the assumption that recruiters and program officers will know. They mostly don't. The credential lands as biographical, not as a signal of distinction.
**Lesson:** When a credential is invoked, name the selectivity in one phrase per `canonical.md § Selectivity Language`. "Founding member of the research function at Common App, the largest college application dataset in the United States." NOT just "led research at Common App." Same for IES Fellowship — the name itself is the signal once it appears, but it has to be visible.
**Watch on:** experience.astro, about.astro, hero copy on home, every case study touching the UVA period.

### Pattern 12 — Credential-led self-description (positioning preference, not evidence-backed)

**Caught:** [positioning hypothesis from 2026-05-02 research; NOT empirically verified]
**Description:** Drafts open a hero, about-page, or consulting hero with the credential ("PhD-trained," "PhD researcher," "Doctor of...") before the outcome or artifact lands.
**Preference (not rule):** Lead with the outcome, the lane, or the artifact. Let the credential land in the second or third sentence. The approved headline candidates A/B/C/D in `canonical.md § Approved Headline Candidates` follow this preference — none open with "PhD."
**Status:** This is a positioning preference Preston has adopted, not a defect with empirical backing. The original agent claim that "PhD-led framings under-perform with corporate and foundation buyers" was not source-verified and has been stripped. Treat as a stylistic choice consistent with `glossary.md § Voice rules` (lead with the point), not as a scored failure mode.
**Watch on:** index.astro hero, about.astro opening paragraph, consulting.astro hero copy.

### Pattern 13 — Family/fitness content placement (positioning preference, not evidence-backed)

**Caught:** [positioning hypothesis from 2026-05-02 research; NOT empirically verified]
**Description:** Family content adjacent to positioning real estate (hero, About opening) competes with the AI governance + strategy lane for attention. A standalone fitness page reads as a separate content vertical rather than as one of Preston's many credibility signals.
**Preference (not rule):** Family content moves to a clearly-labeled "Personal" page or footer link. CrossFit L3 + Quarterfinals consolidates into a one-line credibility tag in the About sidebar.
**Status:** Positioning preference, not an evidence-backed defect. The original agent claim that "senior recruiters read those signals as a line, not as a page" was not source-verified and has been stripped. Treat as a layout preference consistent with the audience priority order in `strategic_brief.md § Audiences`, not as a scored failure mode.
**Watch on:** about.astro sidebar/family section, fitness.astro (proposed consolidation).

---

### Pattern 14 — "I" framing where "we" framing is the right register

**Caught:** 2026-05-03 cycle 1 audit. Preston pre-flagged in-session: "taking credit for everything instead of showcasing the we."

**Description:** Drafts attribute team / org outcomes to Preston in first person ("I built X" / "I lead Y" / "my teams") in contexts where the work is genuinely team-executed even if Preston was the architect or the owner. The DC CAP partner graduation outcome, the AI Governance Framework's running pilot, and possessive-pronoun framing of teams ("my teams") are the recurring spots.

**Lesson:** Apply the credit-attribution check on every Preston-voice claim:
- If the artifact is solo-built and currently visible (CPIP scaffolding, the matching algorithm code, the Financial Scenarios tool, the agent stack) — first-person credit is accurate.
- If the artifact is operational with a team executing — "we" or attributional active-verb framing matches the truth.
- Possessive pronouns on people ("my team," "my coaches") read as ownership; rephrase as "the teams I support" / "the coaches at our partner campuses" / canonical imperative.
- Org-level outcomes (graduation rates, retention, scholar counts) are DC CAP's, not Preston's. Frame as "DC CAP achieves..." or "At DC CAP, partner graduation runs..." rather than "I moved..."

**Watch on:** every page on every cycle. Hero, About body, About operating principles, Experience role bodies (current role), consulting.astro "Results I've delivered" once that page is touched.

## Adding New Patterns

When the Auditor catches a new failure mode in a real run:

1. Add a new `### Pattern N` block following the format above.
2. Cite the run / commit / PR in `Caught:`.
3. Write the lesson as a rule a future Auditor scan can apply.
4. Specify which file(s) to watch.

When 3+ entries cluster on the same theme, roll the rule up into `glossary.md` or the relevant SKILL.md, then leave a single `Pattern N — rolled up to [target]` entry here.

---

*Maintained by: Auditor (writes), Strategist + Resume Consultant + Engineer (read at session start).*
*Last verified: 2026-05-02*

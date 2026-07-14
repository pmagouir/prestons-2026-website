# Content Architect Schema Note — 2026-06-12 Cycle

**Cycle scope (Preston-decided, 2026-06-12):** "Correctness + polish first." This cycle does NOT build the `/projects/[slug]` case-study detail layer (deferred to next cycle). The Content Architect's job this cycle is validation + a scoping decision, not new schema construction.

**Author:** Content Architect | **Dispatched by:** Site Lead | **Branch:** `monthly-refresh-2026-06`

**Handoff to:** Resume Consultant (fact corrections to apply), Designer (static-placement targets), Engineer (applies edits), Site Lead.

---

## 1. Build result

`npm run build` is **GREEN** (exit code 0). All three existing collections — `writing`, `projects`, `media` — sync and validate against their Zod schemas. Content sync log: `[content] Syncing content` → `[content] Synced content`; 6 pages built.

One WARN appears in the build log:

```
[WARN] [vite] "matchHostname", "matchPathname", "matchPort" and "matchProtocol" are imported from
external module "@astrojs/internal-helpers/remote" but never used in
"node_modules/astro/dist/assets/utils/remotePattern.js".
```

This is an upstream Astro/Vite dependency notice inside `node_modules`. It is **not** a content-collection, schema, or site-code warning. No schema action required. No collection entry fails validation. The build is clean for the purposes of this gate.

**No schema change is made this cycle.** `src/content.config.ts` is unmodified. The corrections in §2 are content edits to existing fields; they do not touch the schema.

---

## 2. Corrected-fact location map (for the Engineer to apply cleanly)

Structural finding that governs all three: the `projects` collection stores each case study's prose in a **single `summary` frontmatter string** (line 7 of every project file). Project bodies are empty — `ProjectGrid.astro` renders `p.data.summary`, not rendered markdown body. Therefore every project-side correction below is a **frontmatter edit**, not a body edit. Two of the three facts also appear in page files (`.astro`), where they are **body/markup**, not frontmatter.

Each correction traces to the canonical source key noted; no value here is invented.

### (a) CPIP "19 federal data sources" → 15

| Surface | File:line | Field type | Current → Corrected |
|---------|-----------|-----------|---------------------|
| Project card | `src/content/projects/cpip.md:7` | **Frontmatter** (`summary` string) | "synthesizes **19** federal data sources" → "synthesizes **15** federal data sources" |

- **Only one site occurrence.** Full-tree grep confirms no other `19 federal` / `19 data` string in `src/`.
- **sourceKey:** `canonical.md § DC CAP Verified Numbers → Operational Discipline Numbers` ("CPIP solo build: 15 federal data sources … [count corrected 19→15, 2026-06-12]") and `canonical.md § Proof-of-Capability Systems #1` ("Synthesizes 15 federal data sources"). Canonical already carries the 15 correction with the 2026-06-12 registration note. **No canonical update needed — already done.**
- All other CPIP figures in the same string (~400,000 ranked pathways, October 2026 launch) are correct and stay.

### (b) AI governance pilot present-tense → completed past-tense

| Surface | File:line | Field type | Current → Corrected |
|---------|-----------|-----------|---------------------|
| Project card | `src/content/projects/ai-governance-framework.md:7` | **Frontmatter** (`summary` string) | "I designed and **run** DC CAP's enterprise AI Governance Framework: a 60-day pilot that **puts** nine staff … **through**" → past tense for the pilot ("designed and **ran**" / the pilot that **put** nine staff through), while the **framework itself remains operational** (present tense). |
| Experience page | `src/pages/experience.astro:51` | **Body/markup** (Change Management `<p>`) | "Designed the AI Governance Framework and **run** our 60-day AI pilot (nine staff, three units, April–June 2026)" → "ran our 60-day AI pilot (nine staff, three units, April–June 2026)" past tense |

- **Two site occurrences** (one frontmatter, one page body). `about.astro` references the framework, not the pilot window — proposal C1 judged it likely fine; the Resume Consultant should confirm during drafting but it is not in this corrected-fact map.
- **Tense rule (split):** the **pilot** (the 60-day window, April 6 – June 5, 2026) is **complete → past tense**; the **framework** is **operational → present tense**. Do not flatten both to one tense. The `status` frontmatter field on `ai-governance-framework.md` stays `operational` because the framework (the durable artifact) is operational; the past-tense correction applies to the pilot *window* described inside the summary prose. (This is exactly the case the future `status` enum is meant to disambiguate at the entry level; this cycle handles it in prose because the entry conflates framework + pilot in one `summary`.)
- **No results/outcome claim** is added — none exists in a BRAIN capstone artifact yet (Lesson 7 discipline; canonical §3 explicit).
- **sourceKey:** `canonical.md § Proof-of-Capability Systems #3` ("Status corrected 2026-06-12: the 60-day pilot ran April 6 – June 5, 2026 and is complete (past tense on the site); the framework itself remains operational") and `§ Operational Discipline Numbers` ("AI Governance Pilot: … completed; ran April 6 – June 5, 2026 [status corrected to completed, 2026-06-12]"). **No canonical update needed — already done.**

### (c) "13 university partners" → 14-signed / 13-in-2026-match framing

| Surface | File:line | Field type | Current → Corrected |
|---------|-----------|-----------|---------------------|
| Project card | `src/content/projects/scholar-matching.md:7` | **Frontmatter** (`summary` string) | "allocate scholarship offers among roughly 700 applicants and **13 university partners**" → frame to the **2026 match cycle** (13 partners is accurate for the 2026 match) per canonical's framing rule |
| About page | `src/pages/about.astro:30` | **Body/markup** (narrative `<p>`) | "Our model is a regional partnership: **13 access-oriented universities** where Success Coaches sit on partner campuses" → reconcile to 14-signed / 13-in-match framing |

- **Two site occurrences** (one frontmatter, one page body).
- **Framing precision (from canonical, verbatim intent):** "13 partners" remains accurate **for the 2026 match if framed to that cycle**; "14 signed partners" is accurate **for the portfolio**. American University is the 14th (signed 2026-05-31), joins Fall 2026 recruitment, first cohort enrolls Fall 2027, enters the matching algorithm in the **2027** cycle. The Resume Consultant chooses per-surface which frame fits: the `scholar-matching.md` summary is about the matching algorithm's 2026 run (13 is correct, frame to the cycle); the `about.astro` line describes the partnership portfolio (14-signed is the portfolio-accurate frame). Both are legitimate; the rule is to **frame the number to its referent**, not to globally swap 13→14.
- **HARD CONSTRAINT:** Do **not** reintroduce the scrubbed AU board-advisor reference (repo commit `01d95e2`). Grep confirms it is currently absent from `src/` (the only "Advisory" hit is the legitimate "Advisory Retainer" consulting offer). The Engineer must not add any board-advisor phrasing while touching these lines.
- **sourceKey:** `canonical.md § Proof-of-Capability Systems #2` ("Partner count (registered 2026-06-12): 14 partners signed; American University is the 14th … So '13 partners' remains accurate for the 2026 match if framed to that cycle; '14 signed partners' is accurate for the portfolio"). **No canonical update needed — already done** (the 2026-06-10 proposal flagged it; canonical now carries the registration).

---

## 3. SCOPING DECISION — talks + recognition collections (carryover C10)

### Decision: **(b) — surface conferences + recognitions as static content in existing pages this cycle; seed `talks` + `recognition` collections next cycle, alongside the case-study route.**

### Rationale

1. **The structural work this decision belongs to is already deferred.** Preston deferred the collections-heavy `/projects/[slug]` case-study layer to next cycle. Seeding two new collections now means writing schema + loaders + stub entries this cycle, then building the **rendering surface** (a credentials/talks section that queries the collection) next cycle anyway — because no page currently queries a `talks` or `recognition` collection. Splitting the schema from its renderer across two cycles is the maintainability anti-pattern, not the avoidance of one. Both belong in the same diff as the case-study route, when the IA for "structured record sections" is being built end to end.

2. **The data volume does not yet justify a collection.** `talks` would hold **3** entries (UERU, CIO4Good, UVA IES Program Conference). `recognition` would hold **4** (IES Fellowship, Peabody Honors Scholar, TFA Excellence in Teaching 2013, CF-L3/CCFT). A collection earns its complexity when entries are numerous, change independently, or are reused across surfaces. Seven static items rendered once do not clear that bar this cycle. The collection becomes worth it when the case-study layer makes "talk → case study" and "recognition → case study" cross-links real, which is next cycle's work.

3. **Half the recognitions are already static on the site and validate fine.** IES Fellow and Peabody Honors Scholar already render in `experience.astro:158/162` (Education) and `about.astro:175-176` (Credentials sidebar); CF-L3/CCFT render in `about.astro:177` and `fitness.astro`. Migrating these into a collection this cycle would *churn working content* for no reader benefit and risk drift between the migrated entry and the still-static copy. The two genuinely-absent recognitions (TFA Excellence in Teaching 2013) and all three conferences slot cleanly next to the existing static blocks.

4. **A clean, focused diff is the cycle's stated goal.** "Correctness + polish first" with "record-capture into EXISTING pages" is explicit. Static placement keeps this cycle's diff to content + page edits and zero schema change, which is the lowest-risk path to the 9.5 craft bar Preston set.

**Maintainability counter-check (why not (a)):** the only argument for (a) is "build the collection once so future talks just drop in." That argument is real but premature: it pays a schema cost now for a rendering surface that does not exist until next cycle, and it forces a migration of the four already-static recognitions. The cost lands this cycle; the benefit lands next cycle regardless. Defer the cost to where the benefit is. **(b) wins.**

### Target surfaces for static placement (so Resume Consultant + Designer know exactly where)

**CONFERENCES (the three FY26 conferences led):** Add to **`src/pages/experience.astro`**, as a new static block adjacent to the existing **Education** section (`experience.astro:147-169`). Experience is the recruiter/peer surface (audience 1, 4) and already carries the credential ladder; "Conferences" or "Speaking" reads naturally beside Education there. Designer specifies the block treatment (the Education section's `border-l-2` pattern at lines 154-167 is the house style to match). The three items: **UERU, CIO4Good, UVA IES Program Conference** (FY26).
- **sourceKey:** `canonical.md § Operational Discipline Numbers` ("FY2026 conferences led: UERU, CIO4Good, UVA IES Program Conference") and `§ Conferences` (verified list). Both already registered; no canonical update.
- **Pattern flag for the Consultant:** Pattern 11 — name the selectivity / audience where a conference invocation needs it (per-conference audience framing exists in `fy2026_contributions.md § 2` if the Consultant wants register detail; keep it understated).

**RECOGNITIONS (the genuinely-absent items):** The load-bearing gap is **TFA South Louisiana Excellence in Teaching Award (2013)** — absent from the site entirely. Add it to the **About Credentials sidebar** (`src/pages/about.astro:170-179`, the `<ul>` at 174-178), which already lists the academic + fitness credentials. That sidebar is the canonical "recognition" home and keeps all of Preston's distinctions in one verified list.
- The other three recognitions (IES Fellowship, Peabody Honors Scholar, CF-L3/CCFT) **already render** and need no new placement; the Consultant should confirm they read consistently across `experience.astro` Education and the About sidebar (Pattern 3 touch-point discipline) but not duplicate them into a new block.
- **sourceKey:** `canonical.md § Credentials & Recognitions` (lists all four; TFA award is line 63). Already registered; no canonical update.

**No `TODO(canonical)` fields arise from this decision** — every conference and recognition above already traces to a registered canonical entry.

---

## 4. Next-cycle schema queue (deferred case-study route — queued, not lost)

**This cycle:** confirmed **no schema change needed**. No `/projects/[slug]` route exists; all six project entries have empty bodies and render via `ProjectGrid.astro` from the `summary` frontmatter field. The §2 corrections are field-value edits, fully served by the current schema.

**Next cycle will need a `projects` collection body-content contract for the five case studies.** When the `/projects/[slug]` detail layer (forward-state item 1; proposal C6) is built, the `projects` schema must evolve from "card summary in one frontmatter string" to "structured case study with a rendered body." The queued schema work:

1. **Body content becomes load-bearing.** Today bodies are empty. The detail route needs each of the five canonical case studies to carry a rendered MDX/markdown body structured **challenge → approach → outcome → takeaway** (per `strategic_brief.md § Forward State #1` and `canonical.md § Case-Study Sequence`). Decide whether that structure lives in (a) typed frontmatter fields (`challenge`, `approach`, `outcome`, `takeaway` as strings — matches the spec's original `projects` schema sketch) or (b) the markdown body with section conventions. The spec's intent (`challenge`, `approach`, `outcome`, `takeaway`, `metrics`, `evidenceUrl` fields) favors typed fields; reconcile against the current `summary`-only entries so existing cards keep rendering during the migration.

2. **Add a `metrics` array with a mandatory `sourceKey` per metric.** The spec requires every metric to carry a `sourceKey` resolving to `canonical.md § DC CAP Verified Numbers`. This is the Auditor's number-tracing hook and does not exist in the current schema. The depth numbers Preston approves for public use (proposal flag 10 — e.g., CPIP 288 occupations / 712 programs / 3,484 institutions / 200 adversarial prompts; UP evaluation retention effects with the `decisions.md` citation discipline of leading with Year 2 and never using treatment-effect language) must be **registered in canonical first**, then each carries a `sourceKey` in the entry. **Do not let depth numbers into a body before they are canonical** (Lesson 7).

3. **Migrate, do not break.** The five case studies map 1:1 to existing entries (`ai-governance-framework`, `cpip`, `scholar-matching`, `regional-partnership-pivot`, `common-app-research` + `uva-ldoe-partnership` — note there are currently **six** project files; the canonical sequence pairs Common App + UVA/LDOE as one case-study slot #5, so the route design must decide whether #5 is one combined entry or two). Any schema change keeps `npm run build` green and migrates all six entries in the same change (failure-mode: "schema change that breaks existing entries without migration" is Costly).

4. **`talks` + `recognition` collections seed here too.** Per §3, seed both collections in the same next-cycle diff that builds the structured-record surfaces. Schema sketch for that cycle (spec-defined):
   - `talks`: `title`, `venue`, `date`, `audience`, `link` (optional). Seed: UERU, CIO4Good, UVA IES Program Conference.
   - `recognition`: `title`, `grantor`, `year`. Seed: IES Fellowship (UVA), Peabody Honors Scholar (Vanderbilt), TFA Excellence in Teaching (2013), CF-L3/CCFT (2024).
   - **`media` already exists** as a collection (6 entries, all matching locked canonical URLs); the spec's `media` schema (`outlet`, `title`, `url`, `date`) is satisfied. No `media` work queued.

**Candidate that did not fit a collection cleanly this cycle (iteration-cadence note):** the AI Governance entry conflates a *durable operational framework* with a *completed 60-day pilot* in one `summary` string + one `status` field. The `status` enum (`operational | building | completed`) cannot express "framework operational, pilot completed" simultaneously. When the case-study body contract is designed next cycle, consider either (a) separating framework-status from pilot-status fields, or (b) a convention where `status` describes the durable artifact and pilot windows are dated past-tense in the body. Flagged so the next schema pass resolves it rather than re-papering it in prose.

---

## Verification gate (Content Architect)

- [x] `npm run build` validates all collections — **GREEN** (exit 0); the lone WARN is an upstream `node_modules` notice, not a schema/content warning.
- [x] No schema change made this cycle; `src/content.config.ts` unmodified (correct for a correctness-only cycle).
- [x] Every corrected metric/fact in §2 carries a resolvable canonical sourceKey; all three are already registered in canonical (no canonical-update need arises from the corrections).
- [x] `TODO(canonical)` fields: **none.** Every value routed this cycle traces to a registered canonical entry.
- [x] Collections decision documented with rationale and exact target surfaces.
- [x] Next-cycle schema work queued (body-content contract + `metrics.sourceKey` + `talks`/`recognition` seed + the six-vs-five Common-App/UVA reconciliation + the framework/pilot `status` ambiguity).

*Goes to: Resume Consultant (apply §2 corrections + author the §3 static blocks in voice), Designer (§3 placement treatment), Engineer (apply edits; build stays green), Site Lead.*

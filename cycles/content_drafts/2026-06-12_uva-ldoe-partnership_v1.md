# Content Draft — uva-ldoe-partnership.md (2026-06-12 cycle, v1)

**Surface:** `src/content/projects/uva-ldoe-partnership.md` (frontmatter `summary` string, line 7)
**Cycle:** 2026-06-12 (correctness — Critical) | **Item:** verify-or-cut "first statewide longitudinal study"
**Author:** Resume Consultant | **Voice:** preston-writing (loaded), researching-with-confidence (verdict basis)
**Field type:** Frontmatter `summary` string. This is the **second of two site occurrences** of the unverified superlative (the other is `experience.astro:101`, handled in `2026-06-12_experience_v1.md` Edit 6). Both fixed in one pass.

---

## Verify-or-cut verdict: "first statewide longitudinal study" — CUT

**VERDICT: CUT (unverified; cannot content-verify).** Full grep across all of BRAIN (`grep -rni "first statewide\|statewide longitudinal\|first longitudinal"` , 2026-06-12) returned **zero hits**. Zero hits in `canonical.md`. The baseline audit (C2) independently traced it to nothing and noted the Early Learning Nation headline does not assert it. Per Lesson 7, a priority/novelty superlative must be content-verified against the source publication before it stands; I cannot verify it, so it goes. Pattern 11 discipline: the QRIS study is a downstream artifact of the partnership, not a headline novelty claim.

---

## Edit 1 — `summary`: cut the superlative; reframe per canonical § UVA/LDOE (Pattern 4)

**BEFORE** (`uva-ldoe-partnership.md:7`)
> As an IES Fellow on the UVA–Louisiana Department of Education research-practice partnership (2017–2020), I worked directly with state policymakers and district leaders on policy and accountability systems during a statewide rollout. The partnership produced the first statewide longitudinal study of early-childhood program quality under a mandatory rating system — published in AERA Open and ECRQ — alongside additional accountability-policy research.

**AFTER**
> As an IES Fellow on the UVA–Louisiana Department of Education research-practice partnership (2017–2020), I worked directly with state policymakers and district leaders on policy and accountability systems during a statewide rollout. The partnership produced a longitudinal study of early-childhood program quality under Louisiana's statewide rating system, published in AERA Open and ECRQ, alongside additional accountability-policy research.

- **Citations:**
  - **CUT:** "the first statewide longitudinal study… under a mandatory rating system" → "a longitudinal study… under Louisiana's statewide rating system." Verdict basis: grep (zero BRAIN hits) + `canonical.md § 2026-06-12 Registrations` ("First statewide longitudinal study… UNVERIFIED, flagged for cut-or-verify") + baseline audit C2. Lesson 7; Pattern 11.
  - "IES Fellow on the UVA–Louisiana Department of Education research-practice partnership (2017–2020)… policy and accountability systems during a statewide rollout" — `canonical.md § UVA/LDOE` (approved framing: "Multi-year UVA–LDOE research-practice partnership during statewide policy rollout"; "Direct work with state policymakers and district leaders on accountability design"). **Pattern 4 satisfied:** the partnership umbrella leads; the QRIS study is downstream. **Pattern 11:** "IES Fellow" is the credential signal (canonical § Selectivity Language: the name carries; no inflation). KEEP.
  - "a longitudinal study of early-childhood program quality under Louisiana's statewide rating system" — describes the QRIS publication accurately without the unverified "first." "mandatory rating system" → "Louisiana's statewide rating system" (keeps the scale signal "statewide" — which IS verified, the rollout was statewide — while dropping the unverified "first" and the "mandatory" qualifier that paired with the novelty claim).
  - AERA Open / ECRQ — verified artifacts (the `links` array on this card carries the live DOIs).
  - **No "lead researcher" framing** reintroduced (memory rule; baseline confirms absent). "I worked directly with state policymakers and district leaders" is the approved, accurate framing.
- **Em-dash fix (M10 / Pattern 6):** the BEFORE used a parenthetical em-dash pair ("— published in AERA Open and ECRQ —"). AFTER uses commas. **Em-dash count: zero** (the card had 1 of the 3 the baseline counted on this file; this edit removes 2 of them via the comma recast).

---

## Edits NOT made (flagged for the Engineer / next cycle)

- **`mainLink` + "Policy Brief: Leader Experiences" link (m4):** both resolve to the same SEELA projects page (`see-partnerships.com/seela-projects.html`); the baseline flagged the "Policy Brief" label promises a document it doesn't reach. **Not a content/voice edit** — a link-target fix. Flag for the Engineer: point the Policy Brief link at the brief itself or relabel. Out of this cycle's content scope.
- **AERA Open DOI returned 403 to automated fetch (M3):** likely a bot-block, not a dead link. The baseline says browser-verify before treating as dead. **Not touched** (Perf-SEO/Engineer item).
- **`context` line** (`uva-ldoe-partnership.md:3`, "University of Virginia / SEELA — Educational Policy Studies (2017–2020)"): carries one em-dash. Acceptable (it's a structural label, not prose), but if the Engineer is doing the em-dash sweep, an en-dash or comma would match the house forms. Minor; flagged, not required.

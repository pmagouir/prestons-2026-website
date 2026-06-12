# Content Draft — scholar-matching.md (2026-06-12 cycle, v1)

**Surface:** `src/content/projects/scholar-matching.md` (frontmatter `summary` string, line 7)
**Cycle:** 2026-06-12 (correctness) | **Candidate:** C5 (partner count — frame to the 2026 match cycle)
**Author:** Resume Consultant | **Voice:** preston-writing (loaded)
**Field type:** Frontmatter `summary` string (per schema note §2c).

---

## Edit 1 — `summary`: frame "13 university partners" to the 2026 match cycle

**Lens:** Lane B / claim-trace (C5). Per the schema note: **frame the number to its referent.** This card is about the matching algorithm's 2026 run, where 13 partners is accurate (American University, the 14th, enters the match in the 2027 cycle). So the fix is to make the 2026-cycle framing explicit, NOT to swap 13 → 14. The matching-framing rule also holds: "allocates offers among ~700 applicants," never "places ~700 scholars"; no "Gale-Shapley" in public copy.

**BEFORE** (`scholar-matching.md:7`)
> I built the empirically validated matching algorithm DC CAP runs each year to allocate scholarship offers among roughly 700 applicants and 13 university partners. An exhaustive stability audit tested 9,100 candidate pairs with zero blocking pairs, and fairness mechanisms add neighborhood priority and within-school normalization. The 2026 cycle produced 140 priority matches and 70 waitlist offers.

**AFTER**
> I built the empirically validated matching algorithm DC CAP runs each year to allocate scholarship offers among its applicants and university partners. In the 2026 cycle it weighed roughly 700 applicants against 13 partner universities. An exhaustive stability audit tested 9,100 candidate pairs with zero blocking pairs, and fairness mechanisms add neighborhood priority and within-school normalization. That cycle produced 140 priority matches and 70 waitlist offers.

- **Citations:**
  - "13 partner universities" framed to "In the 2026 cycle" — `canonical.md § Proof-of-Capability #2` ("'13 partners' remains accurate for the 2026 match if framed to that cycle"). **C5 fix:** the number is now explicitly bound to its referent (the 2026 match), per the schema note's "frame the number to its referent, not globally swap 13→14." American University (the 14th) enters the match in 2027 and is correctly absent from a 2026-cycle statement. **The scrubbed AU board-advisor reference is NOT introduced** (commit `01d95e2`; verified absent from `src/`).
  - "allocate scholarship offers among its applicants and university partners" / "weighed roughly 700 applicants" — `canonical.md § Proof-of-Capability #2` framing rule ("allocates scholarship offers among ~700 applicants"; never "places ~700 scholars"). Compliant — "allocate offers," "weighed applicants," no "places scholars."
  - "empirically validated matching algorithm" — `canonical.md § Proof-of-Capability #2` ("use 'empirically validated matching algorithm' instead" of Gale-Shapley) + `glossary.md § Voice Anchors`. **No "Gale-Shapley"** in this public copy. Compliant.
  - "9,100 candidate pairs with zero blocking pairs" — `canonical.md § Operational Discipline Numbers` ("9,100 pairs stability-tested, zero blocking pairs"). KEEP.
  - "140 priority matches and 70 waitlist offers" — `canonical.md § Operational Discipline Numbers` ("Scholar Matching 2026 cycle: 140 priority matches, 70 waitlist offers"). KEEP. (The "189 Ward 7/8 free-agent placements" figure from canonical is NOT added — Ward 7/8 framing stays off the public site per Preston, 2026-06-02; canonical § DC CAP Verified Numbers. The card already correctly omits it.)
  - "fairness mechanisms add neighborhood priority and within-school normalization" — describes the algorithm's design; "neighborhood priority" is the public-safe phrasing for the within-school/geographic fairness layer and avoids ward-level framing. KEEP. **Equity check:** "fairness mechanisms" is the term used, not "equity" (glossary rule 1 / Pattern 2). Compliant.
  - **Pattern 14:** "I built" — accurate (the algorithm code is solo-built per `canonical.md § Proof-of-Capability #2`). "DC CAP runs each year" — the org operates it. Correct split.
- **Structure note:** split the BEFORE's first sentence into two (the standing description + the 2026-cycle specifics) so the cycle-binding is clean and the number sits unambiguously inside the 2026 frame. "The 2026 cycle produced" → "That cycle produced" (backward reference, avoids repeating "2026 cycle" — Preston's "same"-style implicit transition). Em-dash count: zero.

---

## Edits NOT made

- **about.astro matching sentence** ("Each year we run an empirically validated matching algorithm that allocates the scholarship offers…"): no partner number appears in it, so C5 does not touch it. Verified compliant in `2026-06-12_about_v1.md` Edit 2 (KEEP). The two surfaces describe the algorithm at different altitudes; both compliant.
- **Partner count → 14 on this card:** deliberately NOT done. This card's referent is the 2026 match; 13 is correct for it. The 14-signed portfolio frame lives on the About page (its referent is the portfolio). This is the schema note's "frame the number to its referent" rule, applied.

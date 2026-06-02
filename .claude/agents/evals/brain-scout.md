# Evals — BRAIN Scout

What "good" looks like: a complete, link-backed candidate proposal that surfaces every BRAIN artifact belonging on the site and zero site noise. Each pair is input (a BRAIN signal) → expected output (a proposal entry or a decision to skip).

## Worked I/O pairs

**1. New published essay in BRAIN.**
Input: `session_log.md` (last 4 weeks) notes Preston published "Five Lessons from Leading Change" (Jan 2026); the site's `writing` collection already contains it.
Output: No candidate. Already on the site (criterion check fails: not a new external surface). Record under "No-Change Surfaces: /writing — current."

**2. Shipped system not yet on the site.**
Input: recent BRAIN commits + a dev-office briefing show the Financial Modeling Tool went Investment-Committee-ready.
Output: Candidate — Surface: `projects` (case study, Lane B). Proposed change: add a case-study entry. Evidence link: the BRAIN tech-strategy doc. Canonical-update needed? Yes — confirm the tool's public framing is approved (it's referenced, not linked, per canonical). Flag for Preston before drafting.

**3. Stale figure on the live site.**
Input: site shows "1,100+ scholars"; `canonical.md § DC CAP Verified Numbers` says ~800 (FY26).
Output: Candidate — Surface: wherever the figure appears. Pattern flag: errors.md Pattern 5 (number drift). Proposed change: update to the canonical figure. Evidence: canonical.md.

## Edge cases

**A. FERPA-adjacent detail in a dev-office briefing.** A briefing names a specific scholar's aid package. → Drop entirely. Never a candidate; aggregate/public only.

**B. A claim not in canonical.** BRAIN notes a new media hit not in `canonical.md § Media Mentions`. → Surface as a **canonical-update proposal** first (verify the URL via researching-with-confidence), flagged so the Resume Consultant routes it through Preston before it can be drafted.

**C. Berlin relocation surfaces in session_log.** → Not a candidate. Berlin stays off the public site (canonical.md § Berlin).

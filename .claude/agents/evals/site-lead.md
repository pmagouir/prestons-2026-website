# Evals — Site Lead (orchestrator)

What "good" looks like: the right specialists dispatched in order with state carried between them, both Preston gates enforced, a five-minute decision surfaced at Gate 1, nothing merged without Gate 2.

## Worked I/O pairs

**1. Monthly cycle, real change.**
Input: the cron fires; the Scout returns 2 candidates.
Output: dispatch Content Architect → Resume Consultant → Designer, then **Gate 1** — surface triage (advance/defer/reject) + net effect + open questions for Preston in a tight summary. On approval, dispatch Engineer → Perf & SEO → Auditor, then **Gate 2** with the verdict + diff. Merge only on approval.

**2. No-change cycle.**
Input: the Scout returns "no material changes."
Output: close the cycle; record the no-change proposal. No dispatch downstream. A quiet cycle is a healthy outcome, not a failure.

**3. Auditor returns "revise."**
Input: the Auditor blocks on a Critical voice finding.
Output: loop back to the named owner (Resume Consultant) with the specific finding, re-audit, then surface to Gate 2. Do not forward a "revise" to Preston as "ready."

## Edge cases

**A. Tempted to skip Gate 1.** A small change "obviously" fine. → Still gate; Lesson 8 exists because rework from wrong upstream framing is expensive. The gate is a five-minute ask, not a bottleneck.

**B. Dispatch without state.** Sending a specialist a cold prompt. → Always pass the upstream handoff file path; specialists start from state, not from scratch.

**C. Scheduled run wants to merge.** The cron completes a green cycle overnight. → Commit to the feature branch; never push or merge. Preston is the merge gate, every time.

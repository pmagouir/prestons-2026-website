# Evals — Auditor

What "good" looks like: every claim traced to canonical, every changed surface scanned against every errors.md pattern, axe + Lighthouse run, a clear merge/revise/block verdict — no false positives, no waved-through defects.

## Worked I/O pairs

**1. Clean change.**
Input: an image-optimization diff, no copy change.
Output: verdict **merge**. Findings: none. Records axe/Lighthouse pass. The Auditor does not invent findings to look busy.

**2. Unverified number.**
Input: a draft says "90% graduation network-wide"; canonical says graduation runs 75-95% at established partners (90% is a retention figure, not graduation).
Output: **block**, Critical. Cite the surface + the canonical mismatch (a retention/graduation conflation). Owner: Resume Consultant.

**3. Accessibility failure.**
Input: a new CTA at 3.9:1 contrast on the background.
Output: **revise**, Critical (WCAG 2.2 AA). Owner: Engineer. Authority is final on a11y — not negotiable.

## Edge cases

**A. Source has drifted (the S98 trap).** A subagent-style finding flags "SUNY Oswego exited" citing an org doc that itself contradicts current state. → Verify against current ground truth BEFORE flagging Critical; a stale-but-canonical-looking source produces confident-but-wrong findings. (BRAIN subagent-source-verification lesson.)

**B. External citation.** A draft cites a stat to a real URL. → Content-verify per Lesson 7: fetch the page, confirm the exact claim. Unverified extrapolation attributed to a real URL is a Critical defect.

**C. Pressure to pass for momentum.** Upstream says "ship it." → The verdict is the gate; never soften a block to "merge-ready." New failure modes caught become errors.md patterns (the Auditor writes them).

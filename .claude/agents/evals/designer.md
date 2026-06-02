# Evals — Designer

What "good" looks like: a spec the Engineer can build without inventing a visual decision, every color in OKLCH with verified contrast, motion with a reduced-motion fallback, editorial restraint for senior audiences.

## Worked I/O pairs

**1. New case-study section spec.**
Input: Resume Consultant drafts a case-study body (challenge → approach → outcome → takeaway).
Output: `cycles/design_specs/projects-casestudy_vN.md` — layout (single-column reading measure ~65ch), type scale as `clamp()` ranges, OKLCH colors mapped from the hunter-green/burgundy/neutral palette with contrast ratios noted, section rhythm, and the a11y spec (landmark order, heading hierarchy, focus states). Cites refactoring_ui.md for the hierarchy decision.

**2. Color decision with contrast.**
Input: a muted caption on the hunter-green background.
Output: spec the caption color in OKLCH and state the measured ratio against `#1F3D2B` (≥4.5:1 for body, ≥3:1 for large). If a chosen tone fails, pick the nearest passing tone and note it.

**3. Motion.**
Input: a hover lift on project cards.
Output: spec the transform + duration AND the `prefers-reduced-motion: reduce` fallback (no transform). Every animation carries the fallback.

## Edge cases

**A. Asked to write Astro/CSS.** → Decline; produce the spec. Implementation is the Engineer's (Lesson 2). Design-by-implementation is the failure this boundary prevents.

**B. Palette/type change.** A spec wants a new accent color. → Flag for Preston at Gate 1 before the Engineer implements; do not assume.

**C. Decoration competing with positioning.** A full-bleed animated hero graphic. → Restraint; the surface is a credibility read for recruiters/buyers, not a showcase. Subordinate decoration to the 30-second read.

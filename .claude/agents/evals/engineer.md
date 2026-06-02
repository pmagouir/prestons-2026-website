# Evals — Engineer

What "good" looks like: the surface matches the spec, content renders from a collection (not a bespoke page), images go through `astro:assets`, build is green, nothing pushed to main.

## Worked I/O pairs

**1. New essay → collection render.**
Input: a `writing` stub + a Designer spec.
Output: the essay renders via the dynamic `/writing/[...slug]` route from `getCollection`; the index lists it from the collection; no hand-coded page added. `npm run build` green.

**2. Image on a touched surface.**
Input: a section adds a photo.
Output: photo imported from `src/assets` and rendered with `astro:assets` `<Image>` (responsive `widths`/`sizes`, modern format). A raw multi-MB file in `public/` is a defect to fix, not copy — matches the first cycle (Franklin 8.1MB→81KB).

**3. OKLCH spec → Tailwind theme.**
Input: a Designer spec with OKLCH values.
Output: values mapped into the Tailwind theme; the existing system extended, not forked. Build green.

## Edge cases

**A. Spec can't be built as written.** A layout the framework can't express cleanly. → Pause, surface to the Site Lead (Designer + Engineer resolve); do not silently downgrade the design.

**B. Build error tempting to silence.** A type error in a collection query. → Fix the root cause; never `// @ts-ignore` to get green — a silenced error ships a real defect.

**C. Scope beyond Gate 1.** While implementing, an unrelated improvement looks easy. → Build only the approved scope; log the idea for the next cycle.

# Evals — Content Architect

What "good" looks like: every advancing candidate maps to a typed collection entry that validates at build time; no bespoke pages; every metric traces to a canonical key.

## Worked I/O pairs

**1. New essay candidate.**
Input: Scout proposal advances a new published essay.
Output: a stub at `src/content/writing/<slug>.md` with valid front matter (title, description, date, tags, draft:false) and a `TODO` body for the Resume Consultant. No page hand-coded.

**2. New case study candidate (Lane B system).**
Input: advance the Scholar Matching system as a case study.
Output: a `projects` entry with `lane: B`, `status: operational`, `order`, and `metrics: [{label, value, sourceKey}]` where each `sourceKey` resolves to `canonical.md § DC CAP Verified Numbers` (e.g., 9,100 pairs tested → sourceKey to the matching figure). Body `TODO` for Copy.

**3. Schema extension.**
Input: a candidate type (a podcast appearance) fits no existing collection.
Output: propose a schema decision to the Site Lead (new `media` subtype or a new collection) — do NOT hand-code a one-off page. Quarterly-cadence note logged.

## Edge cases

**A. Metric with no canonical source.** A candidate asserts "94% retention" not in canonical. → Field becomes `TODO(canonical)`; flag to the Site Lead; do not invent the value.

**B. Schema change touches existing entries.** Adding a required field to `writing`. → Migrate every existing entry in the same change; `npm run build` must stay green (a missing required field fails the build, which is correct).

**C. Prose creeps into the stub.** Tempting to write the entry body. → Stop at the stub; body prose is the Resume Consultant's. The build still validates front matter regardless of body.

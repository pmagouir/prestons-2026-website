# Design Spec — Layout JSON-LD Person Schema (Layout.astro head) v1
# Source proposal: proposals/2026-05-03_proposal.md (candidate C4)
# Date: 2026-05-03
# Status: Spec — awaiting Engineer

## Goal

Emit a single JSON-LD Person schema in the global Layout `<head>` so AI-search surfaces (ChatGPT, Perplexity, Claude, Google AI Overviews) can parse Preston's identity, role, education, and external profile links reliably. This closes errors.md Pattern 9 and forward-state vector #5.

There is no visual surface change. This spec is for the Engineer to know what data to emit and where.

## Information Architecture

The schema appears once, globally, in `Layout.astro` `<head>` directly after the existing meta tags and before the `<title>`. One canonical Person record across every page; per-page schemas (Article schemas for blog posts) layer on top in later cycles.

## Schema Fields (Person)

```yaml
@context: "https://schema.org"
@type: "Person"
name: "Preston Magouirk"
givenName: "Preston"
familyName: "Magouirk"
jobTitle: "Chief Strategy and Analytics Officer"
worksFor:
  @type: "Organization"
  name: "DC College Access Program"
  alternateName: "DC CAP"
  url: "https://www.dccap.org/"
alumniOf:
  - @type: "CollegeOrUniversity"
    name: "University of Virginia"
    sameAs: "https://www.virginia.edu/"
  - @type: "CollegeOrUniversity"
    name: "Vanderbilt University"
    sameAs: "https://www.vanderbilt.edu/"
  - @type: "CollegeOrUniversity"
    name: "Tulane University"
    sameAs: "https://www.tulane.edu/"
hasCredential:
  - @type: "EducationalOccupationalCredential"
    credentialCategory: "Doctorate"
    name: "PhD, Educational Policy Studies"
    educationalLevel: "Doctoral"
    recognizedBy:
      @type: "CollegeOrUniversity"
      name: "University of Virginia"
  - @type: "EducationalOccupationalCredential"
    credentialCategory: "Masters"
    name: "Master of Public Policy"
    recognizedBy:
      @type: "CollegeOrUniversity"
      name: "Vanderbilt University"
  - @type: "EducationalOccupationalCredential"
    credentialCategory: "Fellowship"
    name: "IES Predoctoral Fellow"
    recognizedBy:
      @type: "Organization"
      name: "Institute of Education Sciences"
knowsAbout:
  - "Education policy"
  - "AI governance"
  - "Strategic planning"
  - "Organizational change management"
  - "Causal inference"
  - "Stable matching algorithms"
  - "Higher education access"
  - "First-generation college students"
url: "https://prestonmagouirk.com"
sameAs:
  - "[Preston's LinkedIn URL — Engineer to confirm]"
  - "[Preston's Google Scholar profile URL — Engineer to confirm]"
  - "[Preston's GitHub profile URL — Engineer to confirm]"
  - "[Preston's ORCID URL if available — Engineer to confirm]"
description: "Strategy and analytics leader at DC CAP. Builds the systems behind 75–95% completion outcomes for first-generation, low-income college students."
```

Notes:
- All values pull from canonical.md.
- `description` mirrors the about page meta description — single source of truth.
- `sameAs` URLs require Preston-supplied confirmation. If a profile is private or unmaintained, omit rather than emit a dead link.

## Implementation Format

Emit as a single `<script type="application/ld+json">` block inside `<head>`. Astro's `Fragment` or direct inline JSON-LD literal both work.

The Engineer translates the YAML above into JSON. No Tailwind, no CSS implications.

## Validation

- Run the schema through Google's Rich Results Test (`https://search.google.com/test/rich-results`) before merging.
- Run through Schema.org's validator (`https://validator.schema.org/`).
- Run through `axe-core` after deployment to confirm no a11y regressions (the script tag is invisible to screen readers; expect zero new findings).

## Accessibility

JSON-LD is invisible to assistive technologies and to sighted users. No a11y implications.

## Open Questions for Engineer

1. **Site canonical URL.** Spec uses `prestonmagouirk.com`. Confirm the canonical apex matches the Vercel deployment domain.
2. **`sameAs` URL list.** Engineer or Preston populates the LinkedIn / Google Scholar / GitHub / ORCID URLs. If any are unmaintained or private, omit.
3. **Per-page schema layering.** This cycle adds Person only. Future cycles add `Article` schema for blog posts and `BreadcrumbList` for nested routes — out of scope here.
4. **Knowledge graph entity claim.** Optional future enhancement: claim Preston's Google Knowledge Graph entity (if one exists) via `sameAs` to a `kg:` URL. Out of scope this cycle.

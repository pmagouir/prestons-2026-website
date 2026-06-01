# schema_org_seo.md — Structured Data & SEO Reference

**Owning agent:** website-engineer
**Last verified:** 2026-05-23
**Sources:**
- https://schema.org/Person (verified 2026-05-23)
- https://schema.org/Article (verified 2026-05-23)
- https://schema.org/BreadcrumbList (verified 2026-05-23)
- https://developers.google.com/search/docs/appearance/structured-data (verified 2026-05-23)

---

## When to consult this file

Adding any JSON-LD schema to the site, validating structured data, deciding which schema types apply to a new content type, ensuring AI-search engines (ChatGPT, Perplexity, Claude, Google AI Overviews) can parse the site reliably.

## Authority

The Engineer ships JSON-LD per the patterns in this file. Validation via the Google Rich Results Test + schema.org validator is mandatory before merge.

---

## Why JSON-LD matters in 2026

LLM-based search (ChatGPT, Perplexity, Claude, Google AI Overviews) increasingly relies on structured data to disambiguate entities. A Person schema with `sameAs` profile links tells these systems "this is the same Preston Magouirk across LinkedIn, GitHub, ORCID, Google Scholar" — without it, the AI may fragment Preston's identity across multiple weak entities.

Microdata and RDFa are legacy formats. **JSON-LD is the only format Google recommends in 2026** and is the only format this site uses.

---

## 1. Person schema (global — Layout.astro)

Emit once, globally, in every page's `<head>`. The current Layout.astro already has this; ensure it stays canonical.

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Preston Magouirk",
  "givenName": "Preston",
  "familyName": "Magouirk",
  "jobTitle": "Chief Strategy and Analytics Officer",
  "worksFor": {
    "@type": "Organization",
    "name": "DC College Access Program",
    "alternateName": "DC CAP",
    "url": "https://www.dccap.org/"
  },
  "alumniOf": [
    { "@type": "CollegeOrUniversity", "name": "University of Virginia", "sameAs": "https://www.virginia.edu/" },
    { "@type": "CollegeOrUniversity", "name": "Vanderbilt University", "sameAs": "https://www.vanderbilt.edu/" },
    { "@type": "CollegeOrUniversity", "name": "Tulane University", "sameAs": "https://www.tulane.edu/" }
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Doctorate",
      "name": "PhD, Educational Policy Studies",
      "recognizedBy": { "@type": "CollegeOrUniversity", "name": "University of Virginia" }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Masters",
      "name": "Master of Public Policy",
      "recognizedBy": { "@type": "CollegeOrUniversity", "name": "Vanderbilt University" }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Fellowship",
      "name": "IES Predoctoral Fellow",
      "recognizedBy": { "@type": "Organization", "name": "Institute of Education Sciences" }
    }
  ],
  "knowsAbout": [
    "Education policy",
    "AI governance",
    "Strategic planning",
    "Organizational change management",
    "Causal inference",
    "Stable matching algorithms",
    "Higher education access",
    "First-generation college students"
  ],
  "url": "https://prestonmagouirk.com",
  "sameAs": [
    "https://www.linkedin.com/in/preston-magouirk-840aa757/",
    "[GitHub URL — Engineer to confirm via canonical]",
    "[Google Scholar URL — Engineer to confirm via canonical]",
    "[ORCID URL if available — Engineer to confirm via canonical]"
  ],
  "description": "Strategy and analytics leader at DC CAP. Builds the systems behind 75–95% completion outcomes for first-generation, low-income college students."
}
```

**Rule:** `sameAs` URLs come from `canonical.md`. If a profile URL isn't in canonical, the Engineer writes a `_proposed.md` canonical update — does not invent or guess URLs.

---

## 2. Article schema (per blog post)

For `/writing/[slug]`, emit Article schema layered ON TOP of the global Person schema.

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Five Lessons from Leading Change at a College Success Organization",
  "description": "DC CAP had a breakthrough year in 2025. Here's what I learned about leading organizational change.",
  "datePublished": "2026-01-12",
  "dateModified": "2026-01-12",
  "author": {
    "@type": "Person",
    "name": "Preston Magouirk",
    "url": "https://prestonmagouirk.com"
  },
  "publisher": {
    "@type": "Person",
    "name": "Preston Magouirk",
    "url": "https://prestonmagouirk.com"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://prestonmagouirk.com/writing/five-lessons-leading-change"
  },
  "image": "https://prestonmagouirk.com/og/five-lessons.png",
  "wordCount": 1450,
  "articleSection": "Strategy"
}
```

`image` is the OG image (1200×630). `wordCount` helps AI summarizers gauge length. `articleSection` is a coarse category.

For a personal-publisher site (no media outlet), `publisher` can mirror `author`. Google's Rich Results documentation allows this.

---

## 3. BreadcrumbList schema (nested routes)

For `/projects/[slug]`, `/writing/[slug]`, and any future nested route, emit BreadcrumbList so search engines render breadcrumbs in results.

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://prestonmagouirk.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Portfolio",
      "item": "https://prestonmagouirk.com/projects"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "AI Governance Framework"
    }
  ]
}
```

Last item (the current page) omits `item` per Google's documented convention.

---

## 4. CreativeWork schema (per case study)

For `/projects/[slug]` case studies, layer CreativeWork on top of Person + BreadcrumbList.

```json
{
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Enterprise AI Governance Framework",
  "description": "DC CAP's 60-day AI pilot framework: 19 interactive HTML pages, 4D fluency model, FERPA-exceeding data classification.",
  "creator": {
    "@type": "Person",
    "name": "Preston Magouirk"
  },
  "dateCreated": "2026-02-01",
  "datePublished": "2026-04-06",
  "url": "https://dccapinnovation.org/",
  "keywords": ["AI governance", "FERPA", "education", "responsible AI"],
  "about": "Enterprise AI deployment for nonprofit organizations"
}
```

For systems gated behind authentication (Financial Modeling Tool), the `url` is omitted — the schema references the artifact's existence without exposing a dead-link.

---

## 5. Organization schema (when referencing DC CAP)

Inline within Person's `worksFor` field (above) is sufficient. No separate Organization JSON-LD block needed unless Preston launches a personal consulting LLC with its own identity surface.

---

## Astro implementation pattern

```astro
---
// In Layout.astro, with optional per-page extension
interface Props {
  jsonLdExtra?: object | object[];
}
const { jsonLdExtra } = Astro.props;

const personSchema = { /* ... as above ... */ };

const jsonLdBlocks = [personSchema, ...(Array.isArray(jsonLdExtra) ? jsonLdExtra : jsonLdExtra ? [jsonLdExtra] : [])];
---
<head>
  {jsonLdBlocks.map(block => (
    <script type="application/ld+json" set:html={JSON.stringify(block)} />
  ))}
</head>
```

Per-page:
```astro
<!-- /writing/[slug].astro -->
<Layout title={...} jsonLdExtra={[articleSchema, breadcrumbSchema]}>
  ...
</Layout>
```

---

## Validation gate (mandatory before merge)

1. **Google Rich Results Test:** https://search.google.com/test/rich-results
   - Paste production URL or HTML; confirm zero errors.
2. **Schema.org Validator:** https://validator.schema.org/
   - Paste JSON-LD; confirm valid.
3. **Manual sanity check:** Open page in Chrome → DevTools → Application → "JSON-LD" — every emitted block parses.

---

## Common mistakes

1. Emitting Person schema multiple times on the same page (once per route is correct; per-component is wrong).
2. Inventing `sameAs` URLs that don't actually exist or aren't Preston's.
3. Article schema missing `mainEntityOfPage` — Google may not surface the result.
4. Mixing JSON-LD with Microdata — pick one (JSON-LD is correct).
5. Putting JSON-LD in `<body>` — must be in `<head>` for Google to reliably parse.
6. Forgetting to update `dateModified` when the article is substantively revised.

---

*Quarterly refresh: 2026-08-01. Schema.org evolves slowly; Google's documentation evolves faster — re-check Rich Results Test guidance for any new required/optional fields.*

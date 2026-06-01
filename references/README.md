# references/ — Authoritative Reference Library

Curated, version-stamped reference material for the five website agents. Each agent loads the references it owns at session start. These files are the answer to "how do I make this decision?" — the agents do not need to ask Preston for technical guidance.

**Last refreshed:** 2026-05-23 · **Next refresh:** 2026-08-01 (quarterly via scheduled task)

---

## Index

| File | Domain | Owning agents | Source authority |
|------|--------|---------------|------------------|
| `astro5_framework.md` | Content collections, Image, Fonts, View Transitions, Prefetch | Engineer | docs.astro.build |
| `tailwind4_system.md` | @theme directive, OKLCH, namespaces, container queries | Engineer + Designer | tailwindcss.com/docs |
| `core_web_vitals.md` | LCP, INP, CLS thresholds + optimization recipes | Engineer + Auditor | web.dev |
| `wcag_2.2_aa.md` | WCAG 2.2 AA success criteria most relevant to a portfolio site | Designer + Auditor | w3.org/WAI/WCAG22 |
| `schema_org_seo.md` | JSON-LD patterns: Person, Article, BreadcrumbList, CreativeWork | Engineer | schema.org + Google Rich Results |
| `axe_core_rules.md` | axe-core rule library + remediation patterns | Auditor | dequeuniversity.com |
| `mdn_semantic_html.md` | Semantic HTML elements, ARIA roles, accessible naming | Designer + Engineer | developer.mozilla.org |
| `vercel_deployment.md` | Deployment patterns, image optimization, analytics, headers | Engineer | vercel.com/docs |
| `refactoring_ui.md` | Design principles: hierarchy, spacing, color, typography | Designer | Refactoring UI (Wathan & Schoger) |
| `exemplar_patterns.md` | Distilled patterns from Lee Robinson, Brittany Chiang, et al. | Designer + Resume Consultant | live exemplar sites |
| `voice_patterns_fy2026.md` | FY2026 contribution narrative arcs ready for site copy | Resume Consultant | BRAIN/personal/fy2026_contributions.md |

---

## How agents use this library

1. At session start, the agent loads its owning references (see "Owning agents" column above).
2. The agent makes every technical or content decision in its domain against these references.
3. If a reference does not answer a decision, the agent writes a proposed update to the relevant reference file, marked as a `_proposed.md` sibling. Preston reviews proposed updates async.
4. The agent never routes a technical question to Preston during a cycle. Preston touches BRAIN files (canonical, glossary, lessons, references), not cycle-level decisions.

---

## Refresh cadence

A quarterly cron task (`refresh-website-references`) re-runs the WebFetch sweep against each source URL on the 1st of February, May, August, and November. Diffs land in `_refresh_logs/YYYY-MM-DD_refresh.md`. Material changes get incorporated; deprecated patterns get retired with a note in the relevant reference file.

The first refresh after 2026-05-23 is **2026-08-01**.

---

## Authority statement

These references define the standard for what "SOTA professional" means on Preston's personal website. The website agents apply the standards in these files without seeking Preston's approval for technical decisions. Preston's role is direction (what the site says about him professionally); the agents handle every craft decision.

---

*Maintained by: Engineer (Astro/Tailwind/Vercel), Designer (WCAG/Refactoring UI), Auditor (axe-core/Lighthouse), Resume Consultant (voice/exemplar). Quarterly refresh is a scheduled task; ad-hoc refresh happens when a major framework release ships.*

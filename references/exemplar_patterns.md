# exemplar_patterns.md — Patterns from SOTA Personal/Professional Sites

**Owning agents:** website-designer + website-resume-consultant
**Last verified:** 2026-05-23
**Sources fetched:**
- https://leerob.com (Lee Robinson — VP of Product Engineering, Vercel) (verified 2026-05-23)
- https://brittanychiang.com (Brittany Chiang — engineering portfolio) (verified 2026-05-23)
- https://linear.app (referenced for editorial-SaaS feel)
- https://anthropic.com (referenced for restraint + scientific authority)
- https://stripe.com (referenced for documentation-quality content)

---

## When to consult this file

Designing a new page, choosing hero treatment, deciding on case-study structure, evaluating whether a layout reads "professional" at the SOTA tier.

## Authority

These patterns are extracted from current best-in-class executive-technologist personal sites. The Designer and Resume Consultant use them as the floor, not the ceiling.

---

## Exemplar 1: Lee Robinson (leerob.com)

**Identity:** VP of Product Engineering at Vercel; formerly developer relations; writer + investor + advisor.

### Patterns worth stealing

1. **Name-as-hero opener.** First-person identity stated plainly. "I'm Lee Robinson, a developer and writer." No tagline architecture, no positioning theater — just clarity.
2. **Career arc in one paragraph.** Current role + previous role + duration. Establishes credibility in three sentences.
3. **Personality through specifics.** Mentions family, music, recent listens. Humanizes without compromising professional credibility.
4. **"Favorite writing" curated list.** Five hand-picked posts that show range (philosophical, technical, industry). Acts as a portfolio.
5. **Multi-format credibility.** Writing, code, video, advising, investing — all treated as equal offerings. Doesn't force a single identity.
6. **Contextual links.** Most nouns hyperlinked. Visitors can follow their curiosity without scanning a fixed nav.
7. **Closing "Reach out."** Invitation-based, not transactional. No "Hire me" CTA.

### How this maps to Preston's site

- Lead with title + outcome (per canonical Headline C); humanize via the "What He's Built" paragraphs in About
- Curate a "Selected Writing" list once the writing collection grows past 3 posts
- Hyperlink generously inside body copy (project names link to case studies, outlet names link to media coverage)
- Reach-out posture in footer + consulting page, not a hard sell

### What to NOT copy

- Lee's site is intentionally minimalist (mostly black-on-white text). Preston's editorial palette and serif headings carry a different professional register; don't strip them.

---

## Exemplar 2: Brittany Chiang (brittanychiang.com)

**Identity:** Frontend engineer, Klaviyo; formerly Upstatement (agency).

### Patterns worth stealing

1. **Single-page anchor navigation.** About, Experience, Projects, Writing, Colophon — all on one scroll. Reduces friction; visitors get the whole story without page loads. (Note: Preston's multi-page structure has reasons — case studies need depth — but the home page can adopt single-scroll feel for the upper portion.)
2. **Understated hero.** "Frontend Engineer" + one value sentence. No imagery. Confidence through restraint.
3. **Experience as reverse-chronological cards with named deliverables.** Each role lists what the work was, not what the title was. Upstatement role shows "9 clients" and shipped products.
4. **Skill badges as scannable pattern-match.** Tokenized expertise (JavaScript, React, TypeScript). Visitors with technical literacy can instantly assess fit.
5. **"View Full Archive" defers older / less-relevant work.** Hero page stays signal-rich; depth is one click away.
6. **Mentions of collaboration** ("close work with designers," "knowledge shares"). Validates leadership beyond IC work.
7. **Monochromatic palette + Inter typeface.** Modern, utilitarian, professional. Doesn't compete with content.

### How this maps to Preston's site

- Experience page already does named-deliverables (DC CAP role lists $50M+ commitments, MacKenzie Scott, the Ward 7/8 swing) — keep this pattern
- Skills toolkit already tokenizes expertise; consider adding a "Recent Wins" mini-section (latest conferences, latest case study, latest media mention) that updates quarterly
- Archive depth: as the case-study layer grows, surface only 3 case studies on home page; "View Full Portfolio →" defers the rest
- Lead with restraint in hero — title + outcome, not credential salad

### What to NOT copy

- Brittany's site is single-page. Preston's needs the multi-page architecture for case studies and writing. The home page can borrow the scrolling-narrative feel without giving up nested routes.

---

## Patterns from broader SOTA (Linear, Anthropic, Stripe, Vercel)

### Linear (linear.app)
- **Crisp editorial-SaaS aesthetic.** Geometric sans-serif, generous whitespace, restrained color (deep navy + minimal accent).
- **Headlines do the work.** No marketing fluff under each headline; the headline IS the argument.
- **Footer surfaces the entire site.** Comprehensive footer links serve as a sitemap.
- **Lesson:** Headlines that are also arguments. Footer that's also a sitemap.

### Anthropic (anthropic.com)
- **Scientific authority through restraint.** No animation theater; content does the work.
- **Long-form research as the brand differentiator.** The blog and research papers are the site, not the marketing pages.
- **Type-led design.** Editorial serif paired with crisp sans is the entire visual signature.
- **Lesson:** Long-form publishing is positioning. The writing collection is the moat.

### Stripe (stripe.com/docs)
- **Documentation as design exhibit.** The docs themselves are SOTA design.
- **Inline navigation: TOC right of content, sticky.** Long pages stay navigable.
- **Code samples first-class.** Treated as content, not as decoration.
- **Lesson:** When publishing long-form (case studies, deep blog posts), inline TOC + sticky sidebar nav. Don't make readers scroll back to top to navigate.

### Vercel (vercel.com)
- **Dense information density without clutter.** Hover states reveal additional content; resting state stays clean.
- **Type-led hero with subtle gradient ribbon underneath.** Editorial signature.
- **Lesson:** Hover states as a way to reveal optional depth without consuming resting-state real estate.

---

## Patterns to AVOID (anti-exemplars common in 2026 personal sites)

1. **AI-generated hero copy.** Generic strategist-speak like "Passionate about transforming organizations through data" — fingerprints AI writing. Preston's site avoids this; ensure it stays out.
2. **Logo-cloud of past employers.** Reads as resume-as-billboard; tacky.
3. **Self-graded "skills bars" (75% React, 90% TypeScript).** Subjective and amateur. Use named-deliverables instead.
4. **"As seen in" badges with media outlet logos.** Layout it as text + linked headlines; logo treatment is for B2B SaaS landing pages.
5. **Single-page parallax scroll with locked vertical movement.** Performance-hostile, accessibility-hostile.
6. **Auto-rotating testimonial carousel.** Carousels don't work; pick the strongest quote and ship it.
7. **Newsletter signup modal popup.** Bad UX. Inline signup form if any.
8. **Animated typing effect for the hero.** Late-2010s. Just show the headline.

---

## Operating directives for Preston's site (derived from these exemplars)

1. **Hero leads with title + outcome, not credential.** (Lee, Brittany both do this.)
2. **Body copy hyperlinks generously.** Project names → case studies; outlet names → media coverage; tool names → external sites. (Lee's pattern.)
3. **Case studies live at the depth a serious reader expects.** Not 200-word marketing blurbs; closer to long-form essays with structure. (Anthropic / Stripe pattern.)
4. **Selected Writing as a curated list.** Once writing grows past 3 posts. (Lee's pattern.)
5. **Footer carries comprehensive structure.** Email, LinkedIn, GitHub, ORCID, Calendly, current location, year. (Linear pattern.)
6. **Type-led design.** Lora + Inter doing the work. No animation theater. (Anthropic pattern.)
7. **Hover-revealed depth.** Case-study cards reveal additional artifact links on hover. (Vercel pattern.)
8. **Archive depth via "View Full →" patterns.** Home page stays signal-rich. (Brittany's pattern.)

---

## When the exemplars disagree

- Lee Robinson and Brittany Chiang both lean minimalist. Anthropic and Linear lean editorial. **Preston's site is closer to Anthropic/Linear** — editorial serif + restrained color, not minimalist sans-only.
- Lee includes personality (family, music). Brittany doesn't. **Preston includes personality** (family photos, fitness page) but compartmentalized — About page, Fitness page — not in the hero.
- Lee's career arc is in one paragraph. Brittany's is reverse-chronological cards. **Preston uses cards (Experience page)** because the career arc has more depth (TFA → UVA → Common App → DC CAP).

---

## Verification checklist

- [ ] Hero leads with title + outcome (not credential)
- [ ] Body copy hyperlinks named entities (projects, outlets, tools)
- [ ] Case studies use long-form structure (not marketing blurbs)
- [ ] No carousels, parallax, typing effects, or auto-rotating content
- [ ] No logo-clouds or "as seen in" badge treatments
- [ ] Footer comprehensive (contact, social, sitemap-ish)
- [ ] Editorial serif + restrained sans doing the design work

---

*Quarterly refresh: 2026-08-01. Re-visit each exemplar URL; note any pattern shifts. Add new exemplars as they emerge (current candidates to watch: Ben Hammersley, Maggie Appleton, Tom MacWright).*

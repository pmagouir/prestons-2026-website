# Baseline Audit — 2026-06-10

**Type:** Ad-hoc full-site baseline (Preston-requested), not a pre-merge change audit.
**Scope:** All six built routes + layouts, components, content collections, styles, config, public assets, CI gates. Source at `main` (10e8a48).
**Bar:** Preston's stated target is 9.5/10 on every lens ("elegance, taste, care; professional-grade site").
**Auditor note:** This audit establishes scored baselines and a ranked work list. Verdict semantics differ from a merge audit: nothing here blocks the live site (it is already live); the verdict applies to the *next cycle's scope*.

---

## (a) Lens Scores

| Lens | Score /10 | Justification |
|---|---|---|
| Executive Recruiter | **8.5** | The 30-second test largely passes: eyebrow carries title+org, H1 is the canonical verb-led claim, the top-3 project cards put load-bearing systems with real numbers one scroll down, and the experience page is tense-disciplined and selectivity-cited. Deductions for a stale present-tense pilot claim, a quasi-title ("Founding Leader") a recruiter could falsify against LinkedIn, no location signal outside the consulting page, and a missing writing surface. |
| Consulting Buyer | **7.5** | Offers are concrete, results lists carry verified numbers, and the Calendly CTA appears twice with an engagement-models section. But the site's strongest 2026 lane — AI governance — is absent from the consulting page entirely (the OG tagline promises "AI that's governed"; the buyer page never mentions AI), registers are undifferentiated, and two claims on the page are unregistered or untraceable. |
| Brand & Voice | **7.8** | The rendered prose is genuinely Preston: the About narrative, the hero, and the operating principles are evidence-grounded with correct deflation and mostly correct I/we discipline; the token scan is clean. Deductions for em-dash density on the project cards (registered Pattern 6, recurring), title inflation, the Astro default favicon, an underexpressed editorial palette that reads default-Tailwind, and a source-content landmine (essay) carrying a forbidden construction and banned Ward 7/8 framing. |
| Performance & Accessibility | **8.6** | Measured (real runs): Lighthouse a11y/best-practices/SEO = 1.0 on all six routes; axe-core = 0 WCAG 2.2 AA violations on all six. Deductions: home perf sits exactly at the 0.90 error floor (LCP 2722ms > 2500ms budget), /projects dips below the floor on 1 of 3 runs (LCP 2705–3097ms) *and* is invisible to the CI gate, footer links fail contrast on hover (1.5:1), and five pages ship duplicate `<main>` landmarks. |
| **Overall** | **8.1** | A structurally healthy, honestly written site with excellent tooling hygiene, held under 9.5 by claim-registry gaps (two numbers on site not in canonical), one stale time-bound claim, several craft tells that read template-grade rather than commissioned-grade, and a missing fourth surface (writing). |

---

## (b) Findings

Severity definitions: **Critical** = claim-trace or hard-rule violation (verified-numbers rule, voice hard rules, Preston directives); **Major** = registered-pattern recurrence, measured budget breach, or credibility-bearing defect; **Minor** = craft, consistency, hygiene.

### Critical (5)

**C1. Writing-collection essay is not ship-ready and contains banned Ward 7/8 framing.**
- Evidence: `src/content/writing/five-lessons-leading-change.md:12` ("In our Ward 7&8 program…"), `:30` ("Persistence rates were stuck at 38%… Persistence nearly doubled to 72%"), `:34` ("It's not about being perfect at first; it's about always getting better" — glossary hard rule 2 forbidden construction), `:14` ("Mackenzie Scott" misspelling; canonical: MacKenzie), `:12` ("Over 85%" vs canonical 85%, Pattern 5).
- Canonical: § DC CAP Verified Numbers — "Ward 7/8 persistence… Kept OFF the public site per Preston, 2026-06-02." Also `BRAIN/preston.md:149` states 38%→64% overall (72% among UP-cohort scholars), so the essay's flat "72%" overstates against the identity source.
- Status: **currently unrendered** — no `/writing` route exists, so nothing is public today. The violation is that the content sits in a loaded collection; the moment anyone adds the route (M1), this ships as-is.
- Patterns: glossary rule 2; errors.md Pattern 2-class directive violation; Pattern 5. Proposed new Pattern 17 (see § Pattern proposals).
- Fix: before any writing route ships, Preston decides: link the essay externally as-published, or host a revised version with Ward 7/8 framing removed and the forbidden construction rewritten. Do not silently edit a published piece without his call.
- Owner: **Resume Consultant** (decision memo to Preston), Engineer implements.

**C2. Untraceable superlative: "first statewide longitudinal study."**
- Evidence: `src/pages/experience.astro:101` ("The first statewide longitudinal study of early-childhood program quality improvement under a mandatory QRIS"); `src/content/projects/uva-ldoe-partnership.md:8` (same claim, "under a mandatory rating system").
- Trace: zero hits in `canonical.md` and zero hits across BRAIN (grep "first statewide"). The Early Learning Nation headline does not assert it. Lesson 7 applies: a priority/novelty claim must be content-verified against the AERA Open paper itself before it stands.
- Fix: verify the claim in the paper's abstract/text and register it in canonical, or cut to "a statewide longitudinal study…" (loses nothing load-bearing).
- Owner: **Resume Consultant** (verification + canonical registration or rewrite).

**C3. AI Governance pilot framed present-tense after the pilot window closed.**
- Evidence: `src/pages/experience.astro:51` ("…and **run** our 60-day AI pilot (nine staff, three units, April–June 2026)"); `src/content/projects/ai-governance-framework.md:7` ("I designed and **run** … a 60-day pilot that **puts** nine staff across three units through…").
- Ground truth: `BRAIN/personal/fy2026_contributions.md:63` — "launched April 6, 2026, running through June 5." Today is June 10; the pilot window has ended. Glossary § Capability Tense Discipline: completed work is past tense.
- Note: `canonical.md § Proof-of-Capability #3` itself still says "Currently running" — the registry is stale and must be updated in the same pass (pilot complete; results/Scale-Pause-Pivot framing is the natural successor copy).
- Patterns: Pattern 1-class (capability tense), Pattern 10. Proposed new Pattern 18 (time-bound claims need expiry).
- Owner: **Resume Consultant** (copy + canonical update), Engineer applies.

**C4. Number on site not in canonical registry: "$10M+ organization."**
- Evidence: `src/pages/consulting.astro:108` ("Built the financial modeling tools behind a $10M+ organization's multi-year strategy and budget").
- Trace: **not** in `canonical.md § DC CAP Verified Numbers` (the only permitted DC CAP figures). It **is** verified true in `BRAIN/context.md:39` ("Operating budget: $10M+"), so this is a registry-discipline violation, not a fabrication. The verified-numbers hard rule is bright-line: if the figure is not in canonical, it does not go on the site.
- Fix: add "Operating budget: $10M+" to canonical § DC CAP Verified Numbers (Preston approves) — or remove the figure from the bullet. Recommend registration; the claim is accurate and load-bearing for the Financial Scenarios Tool reference (which correctly stays unlinked).
- Owner: **Resume Consultant** (canonical proposal), Auditor re-checks.

**C5. Number on site not in canonical registry: "2050 Moonshot" / 80% completion.**
- Evidence: `src/pages/experience.astro:39` ("Drive the organization's '2050 Moonshot' strategy (80% college completion) across ~800 scholars").
- Trace: not in `canonical.md`. Verified true in `BRAIN/context.md:25` ("2050 Moonshot Goal: 80% six-year college completion rate for DC students") and `BRAIN/preston.md` / the CSAO JD. Same class as C4: true, unregistered.
- Fix: register the moonshot framing + 80% figure in canonical (recommended — it is the JD's strategic anchor), or strip the parenthetical figure.
- Owner: **Resume Consultant** (canonical proposal).

### Major (14)

**M1. The writing surface does not exist.** `src/pages/` has no `writing.astro` or `writing/[slug].astro`; build emits exactly 6 routes (verified in `dist/`). The writing collection (`src/content/writing/`), `src/layouts/BlogPost.astro`, and the `@astrojs/rss` dependency are all dead code; `BlogPost.astro:51` links to `/writing` (a 404 if ever rendered). Canonical § Published Writing lists the Jan 2026 essay; strategic_brief audience 4 (peers/researchers/journalists) is unserved. Fix: ship `/writing` index + slug route (Designer spec → Engineer), gated on C1 resolution. Owner: **Engineer** (route), Resume Consultant (content readiness).

**M2. Quasi-title inflation on the Common App card.** `src/content/projects/common-app-research.md:4` — `context: "The Common Application — Founding Leader, Data Analytics & Research"`. Actual title (canonical, verbatim): Senior Manager of Research & Analytics. Approved framing: "second member of the founding research team" / "founding member of the research function." "Founding Leader" is a checkable elevation — same failure class as the removed "lead researcher" framing (memory: role-title accuracy). Fix: context reads "The Common Application — Research & Analytics (2020–2023)" and let the summary's accurate founding-member sentence carry it. Owner: **Resume Consultant**.

**M3. Three canonical media URLs return 404.** Measured via curl (Mozilla UA, follow redirects): CNBC (`src/content/media/cnbc-application-spike.md`) **404**; Inside Higher Ed (`inside-higher-ed-minority-applicants.md`) **404**; Early Learning Nation (`early-learning-nation-child-care.md`) **404**. These match canonical § Media Mentions exactly — the registry's own URLs are dead. Also: AERA Open Sage link (`uva-ldoe-partnership.md`) returned **403** to automated fetch (likely bot-block; verify in a browser before treating as dead). Dead outbound links on /projects damage credibility exactly where credibility is the product. Fix: locate updated/archived URLs (Wayback or outlet search), route through the canonical-update protocol, then update content files. Owner: **Perf-SEO** (discovery) → Preston approves canonical change.

**M4. Footer links fail contrast on hover.** `src/components/Footer.astro:23,30` — `hover:text-primary` (#1F3D2B) on the near-black footer (`bg-neutral-900/95`) ≈ **1.5:1**. The link visually disappears on hover. axe passes (it tests default state only); WCAG 1.4.3 applies to all visible states. Fix: hover to white or a light tint on dark ground. Owner: **Engineer**.

**M5. Duplicate/nested `<main>` on five pages.** `src/pages/about.astro:10`, `experience.astro:7`, `projects.astro:12`, `consulting.astro:6`, `fitness.astro:9` each render `<main>` inside `Layout.astro:130`'s `<main id="main-content">`. Measured: axe best-practice run on /about → `landmark-main-is-top-level`, `landmark-no-duplicate-main`, `landmark-unique` (3 violations). Not a WCAG AA failure (hence Lighthouse a11y 1.0), but our own `references/axe_core_rules.md` lists the one-main rule as Serious, and double "main" landmarks degrade screen-reader navigation. Fix: inner `<main>` → `<div>` or `<article>` (the axe reference documents this exact remediation). Owner: **Engineer**.

**M6. LCP over budget on / and /projects; home perf at the error floor.** Measured (LHCI, 3 runs each, static dist): `/` perf median **0.90** (exactly the `minScore: 0.9` floor), LCP median **2722ms** vs 2500ms budget; `/projects` perf 0.88/0.91/0.92, LCP 2705–3097ms (LCP element: a project-card `<p>`). Root cause per Lighthouse: render-blocking `fonts.googleapis.com/css2` chain (Lora + Inter, 4 weights each) ahead of all text paint; hero image is `loading="eager"` but has no `fetchpriority="high"`/preload. Fix: self-host fonts (Fontsource or Astro fonts API), trim to used weights, add `fetchpriority="high"` + preload for the hero image. Owner: **Perf-SEO** (spec), Engineer implements.

**M7. CI Lighthouse gate never tests /projects.** LHCI `staticDistDir` autodiscovery caps at 5 URLs; the autorun audited /, /about, /consulting, /experience, /fitness — the weakest page (/projects, M6) is outside the budget gate in CI and locally. Fix: add an explicit `ci.collect.url` list covering all routes in `lighthouserc.json`. Owner: **Perf-SEO**.

**M8. AI governance is absent from the consulting page.** `src/pages/consulting.astro` offers Data & Analytics, Grant Writing, Org Change — no AI governance strand. strategic_brief § Forward State 4: until `/advisory` exists, "AI governance is one strand inside the consulting page." Canonical § Case-Study Sequence names the governance framework "the strongest single-artifact entry into the AI advisory lane in 2026," and the OG image leads with "AI that's governed." A governance-shopping buyer currently has no path. Fix: add a fourth service block (AI governance audits / responsible-AI readiness for mission-driven organizations) anchored to dccapinnovation.org evidence. Owner: **Resume Consultant** (draft), Designer (block spec).

**M9. Pattern 7 (bullet-point prose) persists on consulting.** `consulting.astro:97–114, 162–183, 231–248` — "Results I've delivered" entries are full sentences with arrow glyphs; "What I offer" items are noun phrases (acceptable). Registered pattern, explicitly watching this page, unfixed since registry creation. Fix: compress results bullets to outcome fragments (≤8 words + number) or fold into a short paragraph per service. Owner: **Resume Consultant**.

**M10. Pattern 6 (em-dash density) on /projects card copy.** Counted: 10 em-dashes across ~700 words of rendered card copy — `common-app-research.md` 3/≈185w, `uva-ldoe-partnership.md` 3/≈136w, `ai-governance-framework.md` 1/≈91w, `cpip.md` 1/≈84w, `scholar-matching.md` 1/≈85w, `regional-partnership-pivot.md` 1/≈118w. Budget is ~1/200 words. Page-level density ≈ 1/70. Fix: restructure the parenthetical pairs into separate sentences. Owner: **Resume Consultant**.

**M11. Locked-number framing drift: "saving $500K+ a year."** `consulting.astro:104`. Canonical § Operational Discipline Numbers locks the figure as "Annual staff capacity **recovered** through digital transformation: $500K+" — capacity redirected, not budget saved. "Saving" overstates the claim's nature. Fix: "recovered $500K+ in annual staff capacity." Owner: **Resume Consultant**.

**M12. Astro default favicon shipped.** `public/favicon.svg` is the stock Astro logo mark from `npm create astro`. On a commissioned-grade bar, the framework's default favicon in the browser tab is a template tell. Fix: PM monogram or a simple mark in Hunter Green/Burgundy, light+dark variants. Owner: **Designer** (spec), Engineer ships.

**M13. Editorial palette underexpressed.** `global.css:6-8` declares Hunter Green / Burgundy / Light Neutral, but: every primary CTA is `bg-neutral-900` (near-black — Hero.astro:34, consulting.astro:25/305, ProjectGrid.astro:78); Burgundy (`secondary`) appears only at 5–10% alpha (`border-secondary/10`, `to-secondary/5`) — never perceivable; green survives only as eyebrow text, hover accents, and arrow glyphs. The site reads default-Tailwind-neutral, not the editorial identity the OG image promises. Fix (Designer's call): Hunter Green primary buttons, Burgundy as a deliberate accent (active nav, blockquote rule, status badges), documented usage ratios. Owner: **Designer**.

**M14. Untraceable funding claim: "funded by national research grants."** `consulting.astro:181` ("Led randomized controlled trials of strategic initiatives, funded by national research grants"). Canonical verifies the RCTs (direct admissions, text campaigns); no source in canonical or BRAIN attributes their funding to national research grants. Fix: verify and register, or cut the clause (the RCT claim stands on its own). Owner: **Resume Consultant**.

### Minor (19)

**m1.** `experience.astro:15` — "prepared me to build amazing teams who solve real problems": "amazing" is filler-praise off the evidence-grounded register; "teams who" → "teams that." Rewrite the subhead to carry a concrete claim. Owner: Resume Consultant.
**m2.** `fitness.astro:80–83` — CF-L2 (2019), CF-L1 (2017), Nutrition 1, Programming Certificate untraceable in canonical/BRAIN (CF-L3/CCFT, Quarterfinals, top 5-10% Rx, coached-since-2018, 12-test Gauntlet all verify against `preston.md:224`). Register or trim. Owner: Resume Consultant.
**m3.** `fitness.astro:57` — Gauntlet URL (`fitness-gauntlet-site.vercel.app`, returns 200) is unregistered in canonical; lock it under Profile URLs/tools. Owner: Resume Consultant.
**m4.** `uva-ldoe-partnership.md` — "Policy Brief: Leader Experiences" link resolves to the same SEELA projects page as the mainLink; label promises a document it doesn't reach (WCAG 2.4.4 spirit + craft). Point at the brief itself or relabel. Owner: Resume Consultant/Engineer.
**m5.** `public/og-image.png` renders "Chief Strategy **&** Analytics Officer"; canonical title verbatim uses "and" (site copy + JSON-LD use "and"). Regenerate via `scripts/gen_og.mjs`. Owner: Designer.
**m6.** Label typography splits by markup accident: uppercase tracked labels render in Lora when tagged h2 (`about.astro:42` "How I Operate", `fitness.astro:77` "Credentials") and in Inter when tagged `<p>` (about sidebar, consulting eyebrow). Same visual role, two typefaces; "How I Operate" (text-sm h2) also sits visually subordinate to sibling h2 "My Family" (text-2xl). Unify the label style; keep heading semantics. Owner: Designer.
**m7.** H1 scale is untokenized and inconsistent: hero uses inline `clamp()` styles (Hero.astro:18), about caps at 6xl, experience/projects/fitness at 7xl, consulting jumps 4xl→7xl. Define a type scale in `@theme` and apply uniformly. Owner: Designer.
**m8.** Hyphen ranges where the site elsewhere uses en-dashes: `consulting.astro:264` "3-5 hours", `:282` "2-4 weeks", `fitness.astro:48` "5-10%". Owner: Resume Consultant/Engineer.
**m9.** Locale styling drift: "Washington, D.C." (`consulting.astro:324`, `about.astro:89`) vs "Washington, DC" (`experience.astro:35`, canonical); "DC TAG" (`about.astro:30`) vs canonical "DCTAG". Pick canonical forms. Owner: Resume Consultant.
**m10.** Hover motion on non-interactive elements implies clickability: family photos scale (`about.astro:93–125`), fitness images (`fitness.astro:22,33`), hero portrait (`Hero.astro:54`), skill chips recolor with `cursor-default` (`SkillsToolkit.astro:61`). Reserve hover states for interactive elements. Owner: Designer.
**m11.** `SkillsToolkit.astro:23` — "VS Code + Cursor" listed as a skill reads junior against an executive register; "Stata" (`:9`) untraceable in BRAIN (Tableau verifies via the CSAO JD). Curate the toolkit to systems-level entries. Owner: Resume Consultant + Designer.
**m12.** `global.css` lacks the node's own specified `:focus-visible` brand style and `html { scroll-padding-top }` for the sticky header (`references/wcag_2.2_aa.md` § 2.4.7 / 2.4.11). UA defaults currently pass; implement the documented standard. Owner: Engineer.
**m13.** `experience.astro:161` — "M.P.P., Public Policy" is redundant (MPP *is* Public Policy); dotted "Ph.D./M.P.P." also clashes with undotted "PhD/MPP" in the About sidebar. One style. Owner: Resume Consultant.
**m14.** `experience.astro:6` meta description names the org "DC CAP Scholars" — `preston.md` uses that variant, but glossary's voice anchor is "DC CAP"; harmonize on-site to "DC CAP." Owner: Resume Consultant.
**m15.** Mobile menu (`Navigation.astro` script) lacks Escape-to-close and focus-return; acceptable as a disclosure widget, but the node's manual-audit protocol expects Escape handling. Owner: Engineer.
**m16.** Desktop nav links (`Navigation.astro:30–41`) have no vertical padding (~20px line box); they pass WCAG 2.5.8 only via the spacing exception (gap-8). Add `py-2` to make hit areas unambiguous. Owner: Engineer.
**m17.** Glyph arrows are real content for screen readers: "→" bullets (`about.astro:151–153`, consulting/fitness lists), "↗" (`projects.astro:33`), button arrows. Wrap in `aria-hidden="true"` spans or move to CSS. Owner: Engineer.
**m18.** `ProjectGrid.astro:17` — status badge "Prior" for completed work is an odd register next to "Live"/"Building"; "Completed" or "Shipped" reads cleaner. Owner: Designer.
**m19.** Learning-file staleness the cycle should clear (registry hygiene, not site defects): canonical § Proof-of-Capability #3 "Currently running" (see C3); canonical Ward 7/8 line says 38→72 where `preston.md:149` says 38→64 overall / 72 UP-cohort; partner count 13 is current but American University joins as the 14th in FY27 (`BRAIN/projects/financial_modeling/board_memo_fy27_path_to_stability.md:76`) — the two on-site "13" locations to update in one pass when canonical changes are `about.astro:30` ("13 access-oriented universities") and `src/content/projects/scholar-matching.md:7` ("13 university partners"); canonical media outlet styling "The 74" vs site/preston.md "The 74 Million"; strategic_brief § Current State still says "No JSON-LD… No content collections" (both exist). Owner: Resume Consultant.

### Verified clean (claim-trace results worth recording)

- **Hero** matches canonical § Home Hero Canonical exactly (eyebrow, H1, subhead incl. "ready for D.C.'s workforce"). All locked properties hold.
- **Units-led list** identical on about (`about.astro:30`) and experience (`experience.astro:47`): Student Success, University Partnerships, GEAR UP, Innovation, Data & Technology. No drift.
- **DC CAP figures on rendered pages all trace**: 75–95%, 20–25% baseline, ~800 scholars, 85–90%/85%+ retention (90% c/o 2023 + 85% c/o 2024), 67–100% mature-partner completion, seven partners at 100%, $600K KPMG (largest AI investment), $50M+ (instrumental, MacKenzie Scott/Yield Giving), 10→1 staff & 20+→3–5 hrs application compression, ~60%→under 10% coach admin, 19 sources/~400K pathways, ~700 applicants, 9,100 pairs/zero blocking, 140 priority/70 waitlist. Exceptions are C4/C5 (registry gaps, BRAIN-true).
- **Claims that traced on deeper verification (false positives avoided):** "95th percentile value-added" (preston.md:145), "Primary spokesperson" (preston.md:148), "integrated four teams into a unified Student Success division" (preston.md:149), "enforce 80%+ retention and debt caps" (strategy.md:55, verbatim), "four-tier data classification… exceeds FERPA and federal-grant requirements" (preston.md:123, GEAR UP = the federal grant), "research-backed fluency model" (preston.md:123), "no outside consultant" (preston.md:123, verified fact, not phantom negation), top 5-10% Rx / coached since 2018 / 12-test Gauntlet (preston.md:224), Pillar 1 / FY26–28 (strategy.md, JD), "three new regional partners" in the essay (preston.md:149).
- **Berlin**: zero hits in src/, public/, dist/. Location reads Washington, D.C./DC only. JSON-LD has no address field. Compliant.
- **Equity language**: zero hits (src + dist). **"Gale-Shapley"**: absent from public copy. **"lead researcher"**: absent; UVA/LDOE framing uses approved partnership language and keeps the QRIS study downstream of the partnership umbrella (Pattern 4 satisfied on experience + projects).
- **GitHub**: absent from JSON-LD sameAs and footer ("Git / GitHub" skill chip is not a profile link). sameAs = LinkedIn only; Calendly used as CTA destination, not sameAs; Scholar/ORCID correctly omitted pending discovery. Matches canonical § Profile URLs.
- **CPIP tense**: "building" / "launching October 2026" everywhere it appears (about, experience, cpip card). Pattern 1 clean.
- **Ward 7/8**: absent from all rendered surfaces (present only in the unrendered essay — C1). **FERPA**: all figures aggregate; no scholar PII or images (family photos only).
- **Patterns with no findings on rendered pages**: 3 (title consistent across sidebar/narrative/timeline/JSON-LD), 8 (no forbidden self-description), 9 (JSON-LD present, valid), 11 (selectivity named: IES Fellow, founding-member + largest-dataset pairing, Peabody), 12 (no credential-led openings), 15 (no empty maxims found), 16 (no phantom negation found; "Far from competitive" and "None of this is revolutionary" are approved deflation). Pattern 14 reads correctly on rendered pages ("we help scholars," "the teams I support," "I built" only on solo artifacts) with the single exception logged in C3 ("I designed and run").

---

## (c) Path to 9.5 (ordered)

**Executive Recruiter 8.5 → 9.5**
1. C3 — pilot to past tense + results framing (one stale claim costs more trust than ten good ones earn).
2. M2 — kill "Founding Leader"; recruiters cross-check titles.
3. M1 + C1 — ship /writing with the essay resolved; audience-4 proof also serves recruiters scanning for communication range.
4. Add the location line ("Based in Washington, DC") to the About sidebar or footer so it lands inside the 30-second scan on any entry page.
5. C5 — register the moonshot so the boldest strategy claim on the experience page is registry-backed.

**Consulting Buyer 7.5 → 9.5**
1. M8 — add the AI-governance service block; it is the 2026 front door and currently a dead end.
2. M9 + M10 — convert results bullets to tight outcome fragments; trim card em-dashes (sharpens every proof point).
3. C4 + M11 + M14 — make every number on the page registry-clean ($10M+ registered, $500K reframed to capacity recovered, grant-funding clause verified or cut).
4. Differentiate buyer registers (foundation / corporate / individual exec) per glossary § Funder-Type Voice — the planned forward-state split.

**Brand & Voice 7.8 → 9.5**
1. C1 + C2 — clear the essay landmine and the unverified superlative; voice integrity is registry integrity.
2. M12 + M13 — replace the stock favicon; deploy the editorial palette deliberately (green CTAs, perceivable burgundy accents). These two changes move the site from template-grade to commissioned-grade faster than any copy edit.
3. M10 — em-dash discipline on the project cards.
4. m1, m5–m9, m11, m13, m18 — one consistency sweep: subhead rewrite, OG "and," unified label typography, tokenized H1 scale, en-dashes, locale forms, curated toolkit, badge naming.

**Performance & Accessibility 8.6 → 9.5**
1. M6 — self-host + subset fonts, fetchpriority/preload the hero: clears LCP budgets on / and /projects and lifts home off the 0.90 floor.
2. M7 — enumerate all routes in lighthouserc so the gate sees what it gates.
3. M4 — fix footer hover contrast; M5 — collapse to one `<main>` per page.
4. m12, m15–m17 — focus-visible styles, scroll-padding, menu Escape handling, padded nav targets, aria-hidden glyphs.

**Pattern proposals (Auditor → errors.md next cycle, with Site Lead/Preston sign-off):**
- **Pattern 17 — Unrendered-content landmine.** Content collections count as site copy. Anything in `src/content/` must pass the same gates as rendered pages, because a route addition publishes it without a fresh content review. (Caught: Ward 7/8 + forbidden construction in the orphaned writing collection.)
- **Pattern 18 — Time-bound status claims need an expiry check.** Any "currently running / in progress" claim carries a known end date; every cycle compares claim dates against today. (Caught: 60-day pilot still present-tense five days after the window closed; canonical itself stale.)
- **Pattern 19 — State-level contrast.** Hover/focus/active colors get the same contrast check as defaults; axe and Lighthouse only test resting state. (Caught: footer hover at 1.5:1.)

---

## (d) Tooling appendix (exact commands, real output)

| Command | Result |
|---|---|
| `bash scripts/verify_site.sh` | **VERIFY PASSED** — build green (6 pages, 634ms), JSON-LD blocks: 6, invalid: 0; forbidden-token scan: clean; lhci not installed locally (CI-primary) |
| `npx --yes @lhci/cli@latest autorun` (staticDistDir, 3 runs/URL) | Ran 5 URLs × 3 (autodiscovery cap — /projects excluded, see M7); **all assertions passed**. Medians: `/` perf 0.90 / a11y 1.0 / bp 1.0 / seo 1.0, LCP 2722ms, CLS 0, TBT 0ms · `/about` 1.0/1.0/1.0/1.0, LCP 1460ms · `/consulting` 1.0/1.0/1.0/1.0, LCP 1461ms · `/experience` 1.0/1.0/1.0/1.0, LCP 1459ms · `/fitness` 1.0/1.0/1.0/1.0, LCP 1460ms |
| `npx @lhci/cli collect --url=/projects/index.html --numberOfRuns=3` | perf 0.88 / 0.91 / 0.92; LCP 3097 / 2798 / 2705ms; a11y 1.0, bp 1.0, seo 1.0; LCP element = project-card `<p class="mb-4 text-sm…">`; render-blocking: fonts.googleapis.com css2 + site CSS. (A first cold run measured LCP 5663ms / perf 0.62 — treated as cold-cache outlier; 3-run figures are the measurement of record.) |
| `npx --yes @axe-core/cli <route> --tags wcag2a,wcag2aa,wcag22aa` on all 6 routes (served dist) | **0 violations** on /, /about/, /experience/, /projects/, /consulting/, /fitness/ (axe-core 4.11.4, chrome-headless) |
| `npx @axe-core/cli http://localhost:51234/about/ --tags best-practice` | 3 violations: `landmark-main-is-top-level`, `landmark-no-duplicate-main`, `landmark-unique` (→ M5; source inspection confirms same structure on 4 more pages) |
| `curl -s -o /dev/null -w "%{http_code}" -L` on all 20 external URLs in site content | 16 × 200; **404**: CNBC, Inside Higher Ed, Early Learning Nation (→ M3); **403**: journals.sagepub.com AERA DOI (likely bot-block — browser-verify) |
| Build-output inspection | `dist/` contains exactly 6 HTML routes; `sitemap-index.xml`/`sitemap-0.xml` list the same 6; robots.txt points at sitemap-index ✓; no /writing (→ M1) |
| CI check | `.github/workflows/ci.yml` exists and is real: PR-gated `verify_site.sh` + `npx @lhci/cli autorun` ✓ (subject to M7 URL cap) |
| **Not run in this environment** | Manual keyboard walkthrough, VoiceOver screen-reader spot-check, 200%/400% zoom reflow — these require an interactive browser session. Scores in the Performance & Accessibility lens rely on axe + Lighthouse + source analysis for these criteria; schedule the manual protocol (references/wcag_2.2_aa.md § Manual keyboard audit) for the next human-in-the-loop session. |

Contrast figures cited (M4) are computed from hex luminance per WCAG formula, not estimated.

---

## Verdict

**Revise** (scoped to the next cycle; the live site continues to serve). No finding requires emergency rollback: nothing fabricated is public, Berlin/equity/FERPA gates are clean, and every rendered number traces to canonical or BRAIN with the two registry-gap exceptions (C4, C5) that verify true upstream. The cycle that follows this baseline should clear all five Criticals and M1–M8 before any new feature work; that set alone moves every lens above 9.

*Auditor, 2026-06-10. Findings cross-checked against errors.md Patterns 1–16 by name; claim-trace run against canonical.md and BRAIN ground truth (preston.md, context.md, strategy.md, fy2026_contributions.md); axe + Lighthouse run and recorded; JSON-LD validated.*

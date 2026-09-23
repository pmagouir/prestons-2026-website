# September 2026 refresh — Gate 1 drafts

Branch `monthly-refresh-2026-09`. Reader: foundation leadership hiring a VP of Strategy, Data, or Programs. Every figure traces to `.learn/canonical.md` (rebased 2026-09-23). Existing copy is Preston-approved, so most edits swap the figure and leave his sentences alone.

## Translation cards

| Artifact | Claim | Proof figure (canonical row) | Link | Role | Tense |
|---|---|---|---|---|---|
| FY26 Impact Report | DC CAP's year, published as a public page | none added beyond the registered outcomes | impact.dccap.org | we (Preston built the structure and shipped it; Comms designed it and owns the copy) | past |
| Evidence Room | Public page on what college costs DC students and what it pays back, with sources | none quoted (the page carries its own) | dccapinnovation.org/data_insights/evidence_room.html | I | present |
| Leadership AI training | Preston designed and ran it; every leader improved | 9 of 9 improved on DC CAP's own assessment | — | I | past (cohort), present (all-staff course) |
| Completion outcomes | Scholars finish | 76% five-year, 57–100% by partner (West Chester labeled) | impact.dccap.org | we | present |
| Retention | Scholars stay | 90 / 85 / 88% over three years | — | we | present |
| College Navigator | First CPIP product ships | Oct 15, 2026; 15 sources; 6,000+ tests | — (not live) | I | future |

## Page drafts (only the changed sentences)

**Layout.astro:20, :103 and about.astro:9 (meta and JSON-LD descriptions).** This removes 75–95%. A search snippet has no room for a range, so no figure goes here.
- Before: "Builds the systems behind 75–95% completion outcomes for first-generation, low-income college students."
- After: "Builds the systems that help first-generation, low-income students from D.C. finish college."

**about.astro:28**
- Before: "Partner graduation rates run 75–95%, against a national first-generation, low-income baseline of 20–25%."
- After: "Of our Class of 2021 scholars, 76% earned a degree within five years, with partner campuses ranging from 57% to 100% (the 100% at West Chester, a former partner). For context, the national rate for first-generation, low-income students is 20–25%."

**about.astro:36 (technical paragraph).** One sentence is added after the AI governance sentence, and the CPIP sentence is rewritten.
- Added: "I teach it in-house too: all nine DC CAP leaders who finished my leadership AI training improved on our own fluency assessment, and the course is now open to every staff member. I also built the Evidence Room, a public page on what college costs D.C. students and what it pays back, with a source behind every figure."
- Before: "We are building a platform that will help students, counselors, and families compare where different college and career paths lead."
- After: "On October 15 we launch the College Navigator, the first product of a platform I built to help students, counselors, and families compare where different college and career paths lead."

**experience.astro:35**
- Before: "…DC CAP sustains 85–90% first-year retention and 75–95% graduation at its established partners."
- After: "…DC CAP retained scholars at 90%, 85%, and 88% over the past three years, and 76% of the Class of 2021 earned a degree within five years (57–100% by partner campus)."
- Added to the FP&A sentence, moved over from Consulting: "The board reasons from a financial scenario model I built, which runs a 53-of-53 verification suite on every figure it surfaces."

**experience.astro:39**
- "(launching October 2026)" → "(its first product, the College Navigator, launches October 15, 2026)"

**experience.astro:47**
- Added after the pilot sentence: "I also designed and ran the leadership AI training: all nine leaders who completed it improved on DC CAP's own fluency assessment."
- Before: "Two production agentic systems run in-house on a shared five-agent pattern, with audit trails on every output."
- After: "Our grant prospecting runs through a production agent pipeline I built in-house on a five-agent pattern, with audit trails on every output."

## Portfolio (src/content/projects)

- **regional-partnership-pivot.md:7.** Before: "…now range from 67–100%." After: "Of the Class of 2021, 76% earned a degree within five years, with partner campuses ranging from 57% to 100% (the 100% at West Chester, a former partner)." Adds the link "FY26 Impact Report" → https://impact.dccap.org/ and keeps the 2025 PDF link.
- **cpip.md:7.** "15 federal data sources" → "15 federal, state, and local data sources". "It launches in October 2026." → "Its first product, the College Navigator, launches October 15, 2026, for D.C. students applying to DC CAP, and the build runs more than 6,000 automated tests."
- **ai-governance-framework.md:7.** Added: "I also run the training in-house: all nine DC CAP leaders who completed the leadership course improved on our own AI fluency assessment, and the course is now open to all staff."
- **NEW evidence-room.md** (lane B, operational): "I built the DC Evidence Room, a public page on what college costs D.C. students, what a degree pays back, and what it takes to finish. It pairs public federal data with DC CAP's own outcomes, and every figure is re-checked against its source each time the page rebuilds." Main link: the Evidence Room.
- **NEW impact-report-fy26.md** (lane A, completed): "We published DC CAP's FY26 Impact Report as a public page. I built the report's structure from our strategy work and shipped the site; our communications team designed it and owns the copy. It reports the year's retention, five-year completion, and scholarship results, and the university partners behind them." Main link: impact.dccap.org.
- **New order:** AI governance first, then CPIP and the Evidence Room, then matching and the partnership pivot, with the Impact Report after the pivot and Common App and UVA/LDOE last.

## Consulting retirement

- Delete `src/pages/consulting.astro`. In `astro.config.mjs`, add `redirects: { '/consulting': '/experience' }`.
- Remove the Consulting entry from `Navigation.astro`. In `Hero.astro`, change the "Work With Me" button (/consulting) to "Get in Touch" (mailto, the same address as the footer).
- Frozen: `writing/five-lessons-leading-change.md` keeps 75–95%. It is a dated January 2026 essay, and past dated pieces stay as published.

## Gate 1 decisions for Preston

1. **76% wording.** The draft pairs 76% (student-level, all eight cohorts) with the 57–100% range and labels West Chester, because that is the range the 76% was computed over. The alternative is the active-partner range of 57–95%, but 76% isn't computed over those cohorts, so I'd keep 57–100%. Note that 76% rests on your attestation receipt; no per-cohort script exists yet.
2. **Aid multiplier (7x / $41.2M vs ~$44M).** Kept off.
3. **Founding year (1999 vs 2000).** Kept off. The site doesn't state it today.
4. **Oct 15 on a public page.** Confirm the date is firm enough to print.
5. **Two AI cohorts.** The 60-day pilot ran April through June with nine staff drawn from three units. The leadership pre/post cohort is a different group: nine leaders drawn from six units. The drafts keep them in separate sentences.
6. **Blog-post footer.** It still offers Calendly and "discuss how these ideas might apply to your work." I'd keep it: it reads as an invitation to talk, with no services offered.

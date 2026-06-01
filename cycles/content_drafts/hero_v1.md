# Content Draft — Hero (index.astro / Hero.astro) v1
# Source proposal: proposals/2026-05-03_proposal.md (candidates: C7, C9)
# Date: 2026-05-03
# Status: Draft — awaiting Designer + Auditor

## Triage Decisions
- **C1 (Financial Scenarios) — Route to Preston.** Canonical-update needed before site mention. Open question below.
- **C2 (agent-OS / operating cadence) — Route to Preston.** Canonical-update needed; bigger framing question. Open question below.
- **C3 (UVA/LDOE) — Advance.** Drafted in `experience_v1.md` and `projects-project3_v1.md`.
- **C4 (JSON-LD Person) — Defer to Engineer.** No copy required; Engineer ships from canonical fields.
- **C5 (Selectivity language) — Advance.** Drafted in `about_v1.md` (sidebar credentials), `experience_v1.md` (IES, Common App founding-team).
- **C6 (Case-study layer rebuild) — Defer to next cycle.** Multi-cycle effort; needs Designer spec first.
- **C7 (Hero positioning) — Advance.** This file.
- **C8 (Consulting page restructure) — Defer to next cycle.** Larger surface; better paired with C2 once canonical settles.
- **C9 (Voice / em-dash sweep) — Advance.** Baked into every draft this cycle.
- **C10 (DC CAP number refresh) — Advance.** Verified during drafting; one figure flagged in Open Questions.

## Canonical Inputs Used

**Numbers and facts:**
- DC CAP partner graduation: 75–95% (canonical.md line 84, "Established partner graduation: 75–95%")
- National FGLI completion baseline: 20–25% (canonical.md line 81)
- Title: "Chief Strategy and Analytics Officer" — full form, not "&" abbreviation (canonical.md line 13)

**Approved phrasings:**
- Headline C: "Chief Strategy and Analytics Officer. I run strategy, build the analytics, and write the AI governance — for an organization that moved first-gen graduation from 25% to 75%+." (canonical.md line 134, default home-page recommendation)
- 3-pillar tagline: "Strategy that's tested. Analytics that's reproducible. AI that's governed." (canonical.md line 148)
- Throughline (held in reserve, not used here): "School was a source of opportunity when I needed it most." (canonical.md line 124)

**Source files:** `canonical.md`, `glossary.md` (voice rules)

---

## Draft

### Eyebrow (replaces current "Data | Strategy | Change Management")

```
Strategy. Analytics. AI Governance.
```

Notes for Designer: this is structural — three nouns separated by periods, all-caps tracked to match the existing Inter eyebrow treatment. Drops "Change Management" because it's redundant with "Strategy" and lands flat against the new headline.

### Headline (replaces current "Strategy and systems for work that matters.")

```
Chief Strategy and Analytics Officer. I run strategy, build the analytics, and write the AI governance — for an organization that moved first-gen graduation from 25% to 75%+.
```

Notes:
- This is Headline C from `canonical.md § Approved Headline Candidates`. Pre-tested against the audience matrix.
- One em-dash. Within budget for the section.
- Carries the outcome inside the headline itself, which is the load-bearing move for foundation program officers and executive recruiters who skim.

### Subhead (replaces current "Currently leading strategy and analytics at DC CAP Scholars, where we've transformed retention and graduation outcomes...")

```
Strategy that's tested. Analytics that's reproducible. AI that's governed. At DC CAP, partner graduation runs 75–95% against a 20–25% national baseline for first-generation, low-income college students.
```

Notes:
- Three-pillar tagline first (one sentence, no rhetorical-tricolon violation because each clause points to a different verifiable artifact per `canonical.md § Approved 3-Pillar Credibility Stack`).
- Outcome as the second sentence. Specific numbers, both anchored to canonical. Active voice.
- Zero em-dashes.

### CTAs

Keep current pair:
- Primary: "View Selected Work" → /projects
- Secondary: "Work With Me" → /consulting

Notes: "Work With Me" reads warmer than "Hire Me" or "Engage Me" and matches Preston's voice register without slipping into AI-sales tone.

---

## Sources & Citations

| Claim | Source |
|-------|--------|
| Title "Chief Strategy and Analytics Officer" | canonical.md § Identity Baseline (line 13) |
| Headline C verbatim | canonical.md § Approved Headline Candidates (line 134) |
| 3-pillar tagline verbatim | canonical.md § Approved 3-Pillar Credibility Stack (line 148) |
| 75–95% partner graduation | canonical.md § DC CAP Verified Numbers (line 84) |
| 20–25% national FGLI baseline | canonical.md § DC CAP Verified Numbers (line 81) |
| First-generation, low-income phrasing | glossary.md § Voice Anchors (line 15) |

## Voice Self-Audit

- ✓ No "equity" language
- ✓ No "X, not Y" / "Not X, but Y" constructions
- ✓ Em-dash density: 1 across ~80 words → 1 per 80, but headline em-dash is structural; remaining body has 0. Acceptable.
- ✓ No bullet-point prose
- ✓ No forbidden filler ("genuinely," "honestly," "leverages," etc.)
- ✓ No forbidden self-description ("passionate about," "driven by")
- ✓ Active voice
- ✓ Lead with the point: title + outcome land in the headline
- ✓ Capability tense: AI governance described as ongoing ("I run / build / write"), accurate to canonical (Phase 5 SHIPPED 2026-05-01)
- ✓ No elite-institution comparators

## Open Questions for Preston

1. **C1 — Financial Scenarios surface decision.** The tool went live at dccapinnovation.org/financial_modeling/ on 2026-04-27 and was hardened through a CEO-lens audit on 2026-04-29. It is gated behind Cloudflare Access (board / staff only), so the public site cannot link directly. Two options for canonical:
   (a) Add as a 4th Proof-of-Capability system, framed as "FY27 Financial Scenarios tool — board-facing, gated for governance reasons."
   (b) Fold into the existing AI Governance Framework entry as a second public artifact under the dccapinnovation.org umbrella.
   Preference?

2. **C2 — Agent-OS framing on About page.** Phase 5 of the agentos_audit shipped 2026-05-01 (typed contracts, bridge telemetry, reproducibility bootstrap; honestly scored 5/6 first-class). The competitive-position claim "board-level executive who ships code monthly" is now provably true. Want a one-line callout on the About page, or hold for the case-study layer rebuild (C6) next cycle? Risk of mentioning now: it reads as "I built an internal OS" without grounding artifacts. Risk of holding: the strongest piece of Lane B evidence sits invisible.

3. **C10 — One DC CAP figure to verify.** The current ProjectGrid copy claims a "$500k/annual" savings from the digital transformation. This is not in canonical.md. Almost certainly correct (your S55 records the application-process compression from ~10 people / 20+ hours/week to 1 person / 3–5 hours/week, plus the coach admin reduction from 60% to 5–10% — both consistent with $500k+ in recovered staff time). Want me to leave the claim, route it through canonical for verified entry, or restate as "recovered hundreds of thousands of dollars in annual staff capacity"?

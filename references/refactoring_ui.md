# refactoring_ui.md — Design Principles Reference

**Owning agent:** website-designer
**Last verified:** 2026-05-23
**Source authority:**
- Refactoring UI by Adam Wathan & Steve Schoger (book) — https://refactoringui.com
- Practical Typography by Matthew Butterick — https://practicaltypography.com (open content)
- Stripe Design System documentation (public)

---

## When to consult this file

Designing any new surface, evaluating an existing surface, choosing colors / type scale / spacing, deciding whether a layout is "professional" or "cheap."

## Authority

Editorial restraint is the house style. The Designer applies these principles; the Auditor flags violations against them.

---

## The ten principles

### 1. Start with a feature, not a layout

Don't design a homepage in the abstract. Design the hero. Then the next section. Hero → Selected Work → Toolkit → Footer. Each section earns its place by carrying a specific job.

For Preston's site: each page is a feature. Each section within a page is a sub-feature. No "filler" sections.

---

### 2. Detail comes later

First pass: gray boxes, default type, no color. Get the structure right before the polish. If a layout works in grayscale, it works.

---

### 3. Don't design too much

Sketch low-fidelity, refine high-fidelity, ship. Iterate in code, not in mockup tools. Astro components are cheap to revise.

---

### 4. Choose a personality

Editorial-professional (this site) means:
- Serif headings (Lora) for warmth and authority
- Sans-serif body (Inter) for legibility
- Restrained palette (Hunter Green primary, Burgundy secondary, neutral background)
- Generous white space
- Editorial rhythm: dense but unhurried

What this site is NOT:
- Tech-bro neon
- Brutalist (too aggressive for an executive audience)
- Soft pastel SaaS (too marketing-y for this register)
- Bauhaus minimalism (too cold for a person)

---

### 5. Hierarchy is everything

Information has weights. Visual treatment reflects those weights.

Rules:
- **Don't rely on font size alone** — vary weight, color, spacing together
- **De-emphasize secondary information** by reducing its color contrast (not increasing primary contrast)
- **Avoid using gray for everything** — it's the easy answer; combine grays with weight changes
- **Labels are secondary to values** — the label "Current Role" is smaller and lighter than the role name itself
- **One emphasis per scope** — don't bold AND color AND italicize the same word

---

### 6. Layout and spacing

- **Don't be afraid of negative space.** Generous margin/padding signals confidence. Cramped layouts signal a hobbyist site.
- **Establish a spacing scale** in `@theme` (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px). Stick to it. No arbitrary `mt-[17px]`.
- **Group related content; separate unrelated.** Two paragraphs about the same topic stay close; new topic gets a section break.
- **Don't center long-form text.** Centered text is fine for hero copy (5–15 words). Centered paragraphs are unreadable.
- **Optimal line length: 50–75 characters.** Use `max-w-prose` (65ch) for body text.

---

### 7. Designing text

- **Use only as many font families as you need.** Two is typical (serif heading + sans body). Three is rare. Four is a mistake.
- **Establish a type scale** with non-linear progression: 12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72px. Skip the in-between values. The clamp() function gives you fluid scaling.
- **Line-height inverse to size.** Big headlines: tight (1.05–1.15). Body text: loose (1.5–1.75). The "default" 1.4–1.5 is wrong for both extremes.
- **Letter-spacing inverse to size.** Large headlines: slightly negative (-0.015em to -0.025em). Small uppercase labels: very positive (0.15em to 0.25em).
- **Don't use system fonts as a fallback to web fonts.** Match metrics carefully or you get CLS on font-swap.
- **Bold is plenty.** You almost never need 800 or 900 weights. 400 + 600 + 700 is the practical range for most body+heading combos.
- **Underline is for links only.** Don't underline for emphasis.

---

### 8. Working with color

- **Don't use gray for everything.** A "neutral" element near a colored background usually wants to be a tinted gray (warm if surrounded by warm colors, cool if cool).
- **Saturation goes UP at extremes of lightness, not down.** Very light colors and very dark colors should still feel rich. A pale shade of green with low saturation looks washed out; a pale shade with the SAME chroma as the primary looks intentional.
- **Define more shades than you think you need.** 5–10 shades per color (50, 100, 200, …, 900) gives you tools for every contrast scenario.
- **Use color to drive attention, not decorate.** The hero's primary green should appear only in places that earn it: CTAs, links, key emphasis. Everywhere else: neutrals.
- **Avoid pure black on pure white.** Too harsh. Use deep neutral on light neutral (`text-neutral-900` on `background`).

---

### 9. Creating depth

- **Light comes from above.** Shadows fall below + slightly to the side. Highlights on top edges.
- **Bigger elevation = bigger shadow + more blur.** A button at rest has a small shadow; hovering brings a medium shadow; an active modal has a large diffuse shadow.
- **Use overlap intentionally.** Cards overlapping a background ribbon implies depth. Random overlaps look broken.
- **Borders compete with shadows** — use one or the other for a given element, rarely both.

---

### 10. Designing with images

- **Use real photography, not stock or placeholders.** Preston's portrait, family photos, fitness photos. These say "this is a real person."
- **Image as content vs. image as decoration.** Decorative imagery should rarely steal attention from headlines. Editorial imagery (portrait next to a quote) earns its weight.
- **Don't crop a portrait too tightly.** A bit of negative space around the head is more flattering than face-fills-the-frame.
- **Color-match imagery to the palette.** If the site is Hunter Green editorial, don't drop in a neon-saturated stock photo.

---

## House style for Preston's site (operating standards)

### Typography
- Heading: Lora, 600 weight, clamp(2rem, 1.4rem + 2.5vw, 3.5rem) for H1; smaller scale steps for H2/H3
- Body: Inter, 400 weight, clamp(1rem, 0.95rem + 0.3vw, 1.125rem)
- Eyebrow: Inter, 700 weight, 12–14px, tracking 0.15em–0.25em, uppercase
- Line height: 1.1 for H1, 1.2 for H2, 1.3 for H3, 1.6–1.75 for body

### Color
- Primary: `oklch(0.30 0.06 145)` Hunter Green — CTAs, links, accents (sparing use)
- Secondary: `oklch(0.36 0.13 18)` Burgundy — secondary accents only (gradient overlays, section dividers, very sparingly)
- Background: `oklch(0.96 0.003 90)` Light editorial neutral
- Body text: `neutral-900` for primary, `neutral-700` for secondary, `neutral-500` for tertiary (sparingly)
- Card surfaces: `white` for elevated content, `neutral-50` for subtle differentiation

### Spacing
- Scale: 0.25rem (4px), 0.5rem (8px), 0.75rem, 1rem, 1.5rem, 2rem, 3rem, 4rem, 6rem, 8rem
- Page padding: 1.5rem mobile, 2rem desktop
- Section vertical padding: 4rem mobile, 6rem desktop
- Component internal padding: typically 1.5rem–2rem

### Shadows
- `shadow-sm` for default elevation (cards at rest)
- `shadow-md` for hover state
- `shadow-2xl` for portrait / hero / modal-like overlays
- Never use raw `box-shadow: 0 0 10px black` — always token-based

### Motion
- Hover transitions: 150–200ms ease-out
- Page transitions (View Transitions): default Astro fade ~300ms
- Scale on hover: max 1.02 (subtle); 1.05 is too much for editorial
- Always wrap motion in `prefers-reduced-motion: no-preference` if purely decorative

---

## Anti-patterns (explicitly avoid)

1. **Hero with auto-playing video background** — overwrought, slow, distracting
2. **Carousel / slider** — users don't click past the first slide; just show the first slide
3. **Tracking 0.1em on body text** — kills readability
4. **More than 2 font families** — every additional family weakens the system
5. **Drop shadows on everything** — depth becomes meaningless
6. **Gradient text on long content** — gimmick; reserve for hero accents
7. **Animated counters / scroll-triggered numbers** — feels late-2010s
8. **Color-coded buttons by action (red = delete, etc.) without supporting iconography** — accessibility regression
9. **Centered long-form prose** — unreadable past 2 lines
10. **Decorative animations on every section** — distracts from content

---

## Verification checklist

- [ ] Hierarchy clear: H1 > H2 > body > eyebrow in visual weight
- [ ] Color appears only where it earns attention
- [ ] Spacing follows the scale (no arbitrary values)
- [ ] Type scale uses clamp() for fluid sizing
- [ ] Shadow tokens used (no inline `box-shadow`)
- [ ] Motion respects prefers-reduced-motion
- [ ] No more than 2 font families
- [ ] Body line length ≤ 75 characters (max-w-prose)
- [ ] No carousel, video background, scroll-trigger, or other late-2010s patterns

---

*Quarterly refresh: 2026-08-01. Refactoring UI itself doesn't update; principles are stable. Watch Vercel design, Linear, Stripe, and Anthropic for evolving editorial standards.*

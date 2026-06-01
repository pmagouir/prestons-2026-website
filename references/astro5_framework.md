# astro5_framework.md — Astro 5 Reference

**Owning agent:** website-engineer
**Last verified:** 2026-05-23
**Sources:**
- https://docs.astro.build/en/guides/content-collections/ (verified 2026-05-23)
- https://docs.astro.build/en/guides/images/ (verified 2026-05-23)
- https://docs.astro.build/en/guides/fonts/ (verified 2026-05-23)
- https://docs.astro.build/en/guides/view-transitions/ (verified 2026-05-23)
- https://docs.astro.build/en/guides/prefetch/ (verified 2026-05-23)

---

## When to consult this file

Building a new content collection, adding an image, configuring fonts, enabling page transitions, setting up prefetch, structuring dynamic routes, or making any architectural decision in the Astro layer.

## Authority

This reference defines how the website-engineer ships Astro 5 code. Decisions follow these patterns; deviations get logged in `errors.md` for next-cycle review.

---

## 1. Content Collections

Astro 5 manages structured content via type-safe collections defined in `src/content.config.ts`.

### Three-collection setup for this site

```typescript
// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    dek: z.string(),
    lane: z.enum(['operator', 'builder', 'both']),
    sequence: z.number(), // 1-5 per canonical case-study sequence
    status: z.enum(['published', 'draft']),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()),
    artifacts: z.array(z.object({
      label: z.string(),
      url: z.string().url().optional(),
      isLinkable: z.boolean().default(true),
    })).optional(),
  })
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()),
    status: z.enum(['published', 'draft']),
  })
});

const mentions = defineCollection({
  loader: file('src/data/mentions.json'),
  schema: z.object({
    id: z.string(),
    outlet: z.string(),
    title: z.string(),
    url: z.string().url(),
    date: z.coerce.date(),
  })
});

export const collections = { caseStudies, blog, mentions };
```

### Dynamic routes

```typescript
// src/pages/projects/[slug].astro
---
import { getCollection, render } from 'astro:content';
import Layout from '../../layouts/Layout.astro';

export async function getStaticPaths() {
  const studies = await getCollection('caseStudies', ({ data }) => data.status === 'published');
  return studies.map(study => ({
    params: { slug: study.id },
    props: { study },
  }));
}

const { study } = Astro.props;
const { Content } = await render(study);
---
<Layout title={study.data.title} description={study.data.dek}>
  <article>
    <h1>{study.data.title}</h1>
    <p class="dek">{study.data.dek}</p>
    <Content />
  </article>
</Layout>
```

### Query patterns

- Filter at query time: `getCollection('caseStudies', ({ data }) => data.status === 'published')`
- Sort by frontmatter field: `studies.sort((a, b) => a.data.sequence - b.data.sequence)`
- Single entry: `getEntry('caseStudies', slug)`

---

## 2. Image Component

Two components: `<Image />` (single format, optimized) and `<Picture />` (multiple formats with `<picture>` fallback).

### Hero (above-the-fold)

```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/preston-portrait.jpg';
---
<Image
  src={heroImage}
  alt="Preston Magouirk"
  width={800}
  height={1000}
  loading="eager"
  fetchpriority="high"
  format="webp"
  quality={85}
/>
```

### Responsive case-study thumbnail (multi-format)

```astro
---
import { Picture } from 'astro:assets';
import thumb from '../assets/case-study-thumb.jpg';
---
<Picture
  src={thumb}
  formats={['avif', 'webp']}
  fallbackFormat="jpg"
  alt="AI Governance Framework — interactive site preview"
  widths={[400, 800, 1200]}
  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
  loading="lazy"
/>
```

### OG image generation

```astro
---
import { getImage } from 'astro:assets';
import template from '../assets/og-template.png';

const og = await getImage({
  src: template,
  format: 'png',
  width: 1200,
  height: 630,
});
---
<meta property="og:image" content={og.src} />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```

### Top mistakes

1. Using raw `<img>` for local images — bypasses optimization. Always import + use `<Image>`.
2. Missing `width` and `height` — causes CLS.
3. Omitting `alt` — build errors (Astro enforces).
4. Eager-loading below-the-fold images — wastes bandwidth.
5. Not authorizing remote domains in `astro.config.mjs` — falls back to unoptimized.

---

## 3. Fonts (Astro 5 fonts API)

Astro 5 ships a built-in fonts API. Use it instead of Google Fonts CDN links.

```typescript
// astro.config.mjs
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: 'Lora',
        cssVariable: '--font-heading',
        weights: [400, 500, 600, 700],
        styles: ['normal'],
        subsets: ['latin'],
        display: 'swap',
      },
      {
        provider: fontProviders.google(),
        name: 'Inter',
        cssVariable: '--font-body',
        weights: [400, 500, 600, 700],
        styles: ['normal'],
        subsets: ['latin'],
        display: 'swap',
        fallbacks: ['system-ui', 'sans-serif'],
      },
    ],
  },
});
```

```astro
---
// In Layout.astro <head>
import { Font } from 'astro:assets';
---
<Font cssVariable="--font-heading" preload />
<Font cssVariable="--font-body" preload />
```

This downloads and self-hosts fonts at build time. No third-party CDN. Zero CLS when paired with `display: swap` and good fallbacks.

---

## 4. View Transitions (ClientRouter)

Smooth cross-page animations with `ClientRouter`. Drop-in for the entire site.

```astro
---
// In Layout.astro <head>
import { ClientRouter } from 'astro:transitions';
---
<head>
  <ClientRouter />
  <!-- other head -->
</head>
```

### Persist nav and footer

```astro
<header transition:persist>
  <Navigation />
</header>
<!-- ... main content fades in/out ... -->
<footer transition:persist>
  <Footer />
</footer>
```

Nav and footer never re-render during navigation. Cleaner than full-page reload.

### Cross-page hero image

```astro
<!-- /projects (index) -->
<Image src={cpipThumb} transition:name="cpip-hero" alt="CPIP" />

<!-- /projects/cpip -->
<Image src={cpipHero} transition:name="cpip-hero" alt="CPIP hero" />
```

Browser animates the image position/scale between pages.

### Reduced motion handling

`prefers-reduced-motion: reduce` is auto-respected by Astro's router — animations swap to instant DOM replacement, persist still works.

---

## 5. Prefetch

```javascript
// astro.config.mjs
export default defineConfig({
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
});
```

Strategies:
- `hover` (default) — fires on mouse hover or keyboard focus. Best general default.
- `tap` — fires on mousedown. Use for low-priority links to save bandwidth.
- `viewport` — fires when link enters viewport. Aggressive; use for sequential reading patterns (blog index).
- `load` — fires on page load. Reserve for known critical destinations.

Per-link override: `<a href="/projects" data-astro-prefetch="viewport">`.

Saves bandwidth automatically on connections marked as Data Saver or 2G/3G.

---

## Verification checklist (Engineer runs before declaring done)

- [ ] `npm run build` passes with zero warnings
- [ ] No usage of raw `<img>` for local images
- [ ] All `<Image>` and `<Picture>` have `alt`, `width`, `height`
- [ ] Fonts via Astro `<Font>`, not Google Fonts CDN `<link>`
- [ ] `ClientRouter` in Layout `<head>`; persistent nav + footer marked
- [ ] `prefetch: { prefetchAll: true }` in config
- [ ] Content collections schemas validate (build fails if any frontmatter doesn't match Zod schema)
- [ ] Dynamic routes have `getStaticPaths` returning the full set
- [ ] No `console.log` left in source

---

## Common mistakes

1. Forgetting `getStaticPaths()` in dynamic routes — Astro errors at build but the error is verbose; check first if a `[slug].astro` build fails.
2. Mixing Astro Image components with manually-coded `<picture>` tags — pick one pattern.
3. Importing images by URL path instead of `import` statement — disables optimization.
4. Using `transition:name` on more than one matching element per page — animation breaks.
5. Putting `<ClientRouter>` in the wrong place (must be in `<head>` of every page; place it in Layout).

---

*Quarterly refresh: 2026-08-01. Source URLs above are stable; re-run WebFetch on each before merging refresh.*

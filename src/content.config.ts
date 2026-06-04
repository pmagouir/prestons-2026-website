import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// writing — essays and published pieces (populated)
const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    externalUrl: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// projects — portfolio case studies (the load-bearing systems), rendered as
// cards on /projects in the canonical case-study sequence (order field).
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    context: z.string(),
    lane: z.enum(['A', 'B', 'both']),
    order: z.number(),
    status: z.enum(['operational', 'building', 'completed']),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    links: z
      .array(z.object({ label: z.string(), url: z.string().url(), category: z.string().optional() }))
      .default([]),
    mainLink: z.object({ label: z.string(), url: z.string().url() }).optional(),
  }),
});

// media — verified press mentions (seed ONLY from canonical.md § Media Mentions)
const media = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/media' }),
  schema: z.object({
    outlet: z.string(),
    title: z.string(),
    url: z.string().url(),
    date: z.coerce.date().optional(),
  }),
});

export const collections = { writing, projects, media };

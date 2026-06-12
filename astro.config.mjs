// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://prestonmagouirk.com',
  prefetch: { prefetchAll: true },
  // /fitness retired 2026-06-12; content folded into /personal. 301 so old links don't 404.
  redirects: {
    '/fitness': { status: 301, destination: '/personal' },
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
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
    // /consulting retired 2026-09-23 (practice paused 2026-08-25); proof folded into /experience.
    '/consulting': { status: 301, destination: '/experience' },
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
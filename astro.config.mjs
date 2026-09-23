// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://prestonmagouirk.com',
  prefetch: { prefetchAll: true },
  // Retired routes (/fitness 2026-06-12, /consulting 2026-09-23) redirect in vercel.json as true 308s.
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
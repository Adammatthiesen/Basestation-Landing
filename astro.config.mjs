import { defineConfig } from 'astro/config';
import { settings } from './src/data/settings';
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: settings.site,
  integrations: [sitemap()],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  },
  output: "server",
  adapter: cloudflare()
});
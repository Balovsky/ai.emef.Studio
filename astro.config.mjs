// @ts-check
// import { defineConfig } from 'astro/config';

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://km-studio.pl',
  integrations: [tailwind(), sitemap()]
});
// https://astro.build/config
// export default defineConfig({});

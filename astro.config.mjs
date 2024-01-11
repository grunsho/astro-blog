import { defineConfig, squooshImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  image: {
    service: squooshImageService()
  },
  integrations: [tailwind(), mdx()],
  output: 'server',
  adapter: netlify()
});
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import astroExpressiveCode from 'astro-expressive-code';

/** @type {import('astro-expressive-code').AstroExpressiveCodeOptions} */
import sitemap from "@astrojs/sitemap";
const astroExpressiveCodeOptions = {
  // Example: Change the themes
  themes: ['github-dark']
};


// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: "https://gui.expert/",
  integrations: [tailwind(),
  astroExpressiveCode(astroExpressiveCodeOptions), sitemap()],
  vite: {
    ssr: {
      external: ["svgo"],
      noExternal: ['@astrojs/prism']
    }
  }
});

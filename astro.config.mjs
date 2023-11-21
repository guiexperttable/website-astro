import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import astroExpressiveCode from 'astro-expressive-code'

/** @type {import('astro-expressive-code').AstroExpressiveCodeOptions} */
const astroExpressiveCodeOptions = {
  // Example: Change the themes
  themes: ['github-dark'],
}


// https://astro.build/config
export default defineConfig({
  site: "https://astro-moon-landing.netlify.app/",
  integrations: [
    tailwind(),
    // expressiveCode(),
    astroExpressiveCode(astroExpressiveCodeOptions),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
      noExternal: ['@astrojs/prism']
    }
  }
});
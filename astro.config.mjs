import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";


// https://astro.build/config
export default defineConfig({
  site: "https://astro-moon-landing.netlify.app/",
  integrations: [
    tailwind(),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
      noExternal:['@astrojs/prism']
    },
  },
  markdown: {
    // Can be 'shiki' (default), 'prism' or false to disable highlighting
    syntaxHighlight: 'prism',
  },
});

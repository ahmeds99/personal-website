import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://github.com/ahmeds99/",
  base: "personal-website",
  integrations: [tailwind()],
});

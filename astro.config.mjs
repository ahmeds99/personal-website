import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://personal-website-rho-peach.vercel.app",
  integrations: [tailwind(), react()],
  devToolbar: {
    enabled: false,
  },
  output: "server",
  adapter: netlify(),
});

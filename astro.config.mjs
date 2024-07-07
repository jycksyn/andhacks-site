import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://andhacks.netlify.app/",
  integrations: [tailwind(), icon(), mdx()],
  image: {
    domains: ["i.imgur.com"]
  },
  output: "server",
  adapter: netlify()
});
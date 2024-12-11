// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";
import tsconfigPaths from "vite-tsconfig-paths";

// https://astro.build/config
export default defineConfig({
    site: "https://callumkloos.dev",
    integrations: [mdx(), sitemap()],
    experimental: {
        svg: true,
    },
    vite: {
        plugins: [tsconfigPaths()],
    },
});

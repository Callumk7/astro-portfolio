// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";
import tsconfigPaths from "vite-tsconfig-paths";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
    site: "https://callumkloos.dev",
    integrations: [mdx(), sitemap(), solidJs()],
    experimental: {
        svg: true,
    },
    vite: {
        plugins: [tsconfigPaths()],
    },
});
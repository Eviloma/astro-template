// @ts-check
import { defineConfig, envField } from "astro/config";

import node from "@astrojs/node";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import playformCompress from "@playform/compress";
import compressor from "astro-compressor";
import devtoolBreakpoints from "astro-devtool-breakpoints";
import favicons from "astro-favicons";
import healthcheckTs from "astro-healthcheck-ts";
import icon from "astro-icon";
import lenis from "astro-lenis";
import mailObfuscation from "astro-mail-obfuscation";
import metaTags from "astro-meta-tags";
import robotsTxt from "astro-robots-txt";
import vtbot from "astro-vtbot";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321",
  output: "server",
  adapter: node({
    mode: "standalone",
  }),

  integrations: [
    tailwind(),
    react(),
    sitemap(),
    lenis(),
    icon(),
    robotsTxt(),
    vtbot({
      loadingIndicator: false,
    }),
    mailObfuscation(),
    favicons({
      name: "Astro Boilerplate",
      short_name: "Astro",
    }),
    devtoolBreakpoints(),
    metaTags(),
    healthcheckTs(),
    playformCompress(),
    compressor(),
  ],

  env: {
    validateSecrets: true,
    schema: {
      G_ANALYTICS_TAG: envField.string({
        access: "secret",
        context: "server",
        optional: true,
      }),
      G_TAG_MANAGER: envField.string({
        access: "secret",
        context: "server",
        optional: true,
      }),
    },
  },
});

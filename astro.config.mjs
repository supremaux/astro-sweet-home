import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    // 👇 update these lines
    sanity({
      projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID ?? "9n6e5cyx",
      dataset: import.meta.env.PUBLIC_SANITY_DATASET ?? "production",
      apiVersion: "2025-01-01",
      useCdn: false,
    }),
    react(),
  ],
});

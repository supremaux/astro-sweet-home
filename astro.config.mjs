import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [// 👇 update these lines
  sanity({
    projectId: "9n6e5cyx",
    dataset: "production",
    useCdn: false, // for static builds
  }), react()],
});
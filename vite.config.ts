import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      $lib: path.resolve("./src/lib"),
      $shared: path.resolve("./src/lib/shared"),
      $entities: path.resolve("./src/lib/entities"),
      $widgets: path.resolve("./src/lib/widgets"),
      $features: path.resolve("./src/lib/features"),
    },
  },
});

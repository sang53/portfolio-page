/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: "./testconfig.ts",
    coverage: {
      provider: "v8",
      include: ["src/**"],
      reporter: ["html", "text"],
    },
  },
});

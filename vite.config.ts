/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const r = (p: string) => path.resolve(__dirname, p);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": r("./src"),
    },
    extensions: [".js", ".ts", ".jsx", ".tsx", ".mjs", ".mts", ".json"],
  },
  test: {
    environment: "node",
  },
  envPrefix: "CLIENT_",
  envDir: r("./env"),
  clearScreen: false,
  logLevel: "info",
  css: {
    devSourcemap: true,
  },
});

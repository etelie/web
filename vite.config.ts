/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import mkcert from "vite-plugin-mkcert";

const r = (p: string) => path.resolve(__dirname, p);

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: "CLIENT__",
  envDir: r("./env"),
  clearScreen: false,
  logLevel: "info",
  plugins: [react(), mkcert()],
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".mjs", ".mts", ".json"],
    alias: {
      "@": r("./src"),
    },
  },
  test: {
    environment: "node",
  },
  css: {
    devSourcemap: true,
  },
  server: {
    host: true, // needed for the Docker port mapping to work
    strictPort: true,
    port: 3000,
    https: true,
  },
  build: {
    outDir: r("./dist"),
    manifest: true,
  },
  preview: {
    strictPort: true,
    port: 3002,
    https: true,
  },
});

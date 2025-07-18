/// <reference types="vitest" />

import { defineConfig, UserConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import mkcert from 'vite-plugin-mkcert';

const r = path.resolve.bind(this, __dirname);

export default defineConfig(({ mode }) => ({
  envPrefix: 'CLIENT__',
  envDir: r('./env'),
  clearScreen: false,
  logLevel: 'info',
  plugins: [react(), mkcert()],
  appType: 'spa',
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.mjs', '.mts', '.json'],
    alias: {
      '~': r('./src'),
    },
  },
  test: {
    environment: 'node',
  },
  css: {
    devSourcemap: true,
  },
  server: {
    strictPort: true,
    port: 3000,
    https: true,
  },
  build: {
    outDir: r('./dist'),
    manifest: true,
    sourcemap: mode !== 'production',
  },
  preview: {
    strictPort: true,
    port: 3001,
    https: true,
  },
}));

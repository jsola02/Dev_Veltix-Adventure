// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/_config" as cfg;`,
      },
    },
  },
  server: {
    watch: {
      usePolling: true, // Útil en entornos como WSL o Docker
    },
  },
});
import { defineConfig } from 'vite';
import path from 'path'; // Importa el módulo path

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Alias para la carpeta src
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/_config" as cfg;`,
      },
    },
  },
});

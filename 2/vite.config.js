import { defineConfig } from 'vite';

export default defineConfig({
  // ... otras configuraciones ...
  resolve: {
    alias: {
      '@': './src',
    },
  },
});

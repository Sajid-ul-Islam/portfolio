import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: false,
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  },
  css: {
    devSourcemap: true,
  },
  server: {
    port: 3000,
    open: true,
  },
});

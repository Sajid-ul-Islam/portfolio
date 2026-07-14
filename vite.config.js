import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: false,
  plugins: [
    {
      name: 'disable-stdin-shortcuts',
      configureServer(server) {
        process.stdin.pause();
        process.stdin.on('error', (err) => {
          console.warn('[VITE] Suppressed stdin error:', err.message);
        });
      }
    }
  ],
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
    watch: {
      usePolling: true,
      interval: 500,
      ignored: [
        '**/.git/**',
        '**/node_modules/**',
        '**/.idea/**',
        '**/.vscode/**',
        '**/*.tmp',
        '**/~*'
      ]
    }
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const tailwindcss = async () => (await import('@tailwindcss/vite')).default;

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5178,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    hmr: {
      overlay: false
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
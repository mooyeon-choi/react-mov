import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: mode === 'docs' ? 'docs' : 'dist',
    rollupOptions: {
      input: mode === 'docs'
        ? path.resolve(__dirname, 'index-docs.html')
        : path.resolve(__dirname, 'index.html')
    }
  },
  base: mode === 'docs' ? '/react-mov/' : '/'
}));
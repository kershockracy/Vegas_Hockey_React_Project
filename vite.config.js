import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite and React are the same development tools used in our class starter.
// We do NOT need to create a back-end server to run this front-end website.
// base: './' also lets the built files work when hosted under a subfolder.
// Vite converts our React JSX into files browsers can understand.
// The relative base allows the site to work in a GitHub Pages folder.
export default defineConfig({
  plugins: [react()],
  base: './',

  // Place the finished website in the docs folder.
  // GitHub Pages can publish directly from this folder.
  build: {
    outDir: 'docs'
  }
});
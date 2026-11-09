import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite and React are the same development tools used in our class starter.
// We do NOT need to create a back-end server to run this front-end website.
// base: './' also lets the built files work when hosted under a subfolder.
export default defineConfig({
  plugins: [react()],
  base: './',
  // Build into docs/ so GitHub Pages can publish from main /docs.
  // Run npm run build before committing in VS Code.
  build: { outDir: 'docs' }
});

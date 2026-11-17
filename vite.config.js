import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages serves this project at https://<user>.github.io/mdb-group-website/
// so every asset and route is prefixed with the repository name.
export default defineConfig({
  base: '/mdb-group-website/',
  plugins: [react(), tailwindcss()],
});

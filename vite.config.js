import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import { cloudflare } from "@cloudflare/vite-plugin";

// base: './' keeps asset paths relative so the build works on any host
// (Vercel, Netlify, GitHub Pages subpaths, or a plain static server).
export default defineConfig({
  plugins: [react(), tailwindcss(), cloudflare()],
  base: './',
})
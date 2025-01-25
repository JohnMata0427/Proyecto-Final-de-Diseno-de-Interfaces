// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: 'server',
  adapter: vercel({ imageService: true }),
  redirects: {
    '/': '/inicio',
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['react-compiler-runtime']
    }
  },
});
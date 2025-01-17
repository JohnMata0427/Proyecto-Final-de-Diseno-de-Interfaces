// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'server',
  adapter: vercel({ imageService: true }),
  redirects: {
    '/': '/inicio',
  },
  vite: {
    optimizeDeps: {
      include: ['react-compiler-runtime']
    }
  }
});

import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

import path from 'path';

// https://astro.build/config
export default defineConfig({
    integrations: [react(), tailwind()],
    output: 'server',
    adapter: vercel({
        imageService: true,
    }),
    vite: {
        resolve: {
            alias: {
                '@': path.resolve('./src'),
            },
        },
        optimizeDeps: {
            include: ['react-compiler-runtime'],
        },
    },
});

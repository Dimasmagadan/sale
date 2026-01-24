// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://dimasmagadan.github.io',
  base: '/sale',
  image: {
    domains: ['avatars.mds.yandex.net'],
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      // Disable caching in dev to see changes immediately
      middlewares: [
        (req, res, next) => {
          res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
          next();
        }
      ]
    }
  }
});
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://franco-colucci.vercel.app',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});

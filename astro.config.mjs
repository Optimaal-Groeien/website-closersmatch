// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://closersmatch.com',
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },

  redirects: {
    '/voor-bedrijven': '/nl/voor-bedrijven',
    '/voor-closers': '/nl/voor-closers',
    '/voor-appointmentsetters': '/nl/voor-appointmentsetters',
    '/voor-sales-talent': '/nl/voor-sales-talent',
    '/over-ons': '/nl/over-ons',
    '/cases': '/nl/cases',
    '/contact': '/nl/contact',
    '/recruitment': '/nl/recruitment',
    '/werkwijze': '/nl/werkwijze',
    '/no-cure-no-pay': '/nl/no-cure-no-pay',
    '/opdracht-plaatsen': '/nl/opdracht-plaatsen',
    '/partnership': '/nl/partnership',
  },

  integrations: [sitemap()],
});
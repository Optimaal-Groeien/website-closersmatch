// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://closersmatch.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nl'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  // NOTE: '/cases', '/contact', '/recruitment', '/no-cure-no-pay' and '/partnership'
  // are intentionally NOT redirected here: those slugs are spelled identically in
  // English and Dutch, so they are real English pages (src/pages/*.astro) and must
  // not be redirected to their /nl/ counterparts.
  redirects: {
    '/voor-bedrijven': '/nl/voor-bedrijven',
    '/voor-closers': '/nl/voor-closers',
    '/voor-appointmentsetters': '/nl/voor-appointmentsetters',
    '/voor-sales-talent': '/nl/voor-sales-talent',
    '/over-ons': '/nl/over-ons',
    '/werkwijze': '/nl/werkwijze',
    '/opdracht-plaatsen': '/nl/opdracht-plaatsen',
  },

  integrations: [
    sitemap({
      // Keep noindex pages (thank-you / onboarding funnels) out of the sitemap.
      filter: (page) =>
        !/\/(thank-you-business|welcome-onboarding|bedankt-bedrijven|welkom-onboarding)\/?$/.test(page),
    }),
  ],
});
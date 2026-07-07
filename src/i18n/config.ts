export const locales = ['nl', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'nl';

/** Route keys mapped to locale-specific slugs */
export const routes = {
  home: { nl: '', en: '' },
  voorBedrijven: { nl: 'voor-bedrijven', en: 'for-businesses' },
  voorClosers: { nl: 'voor-closers', en: 'for-closers' },
  voorAppointmentsetters: { nl: 'voor-appointmentsetters', en: 'for-appointment-setters' },
  voorSalesTalent: { nl: 'voor-sales-talent', en: 'for-sales-talent' },
  overOns: { nl: 'over-ons', en: 'about-closersmatch' },
  cases: { nl: 'cases', en: 'cases' },
  contact: { nl: 'contact', en: 'contact' },
  recruitment: { nl: 'recruitment', en: 'recruitment' },
  werkwijze: { nl: 'werkwijze', en: 'workflow' },
  noCureNoPay: { nl: 'no-cure-no-pay', en: 'no-cure-no-pay' },
  opdrachtPlaatsen: { nl: 'opdracht-plaatsen', en: 'place-assignment' },
  partnership: { nl: 'partnership', en: 'partnership' },
  blog: { nl: 'blog', en: 'blog' },
  academy: { nl: 'academy', en: 'academy' },
  algemeneVoorwaarden: { nl: 'algemene-voorwaarden', en: 'general-terms-and-conditions' },
  huisregels: { nl: 'huisregels', en: 'house-rules' },
  intakeBusiness: { nl: 'intake-bedrijven', en: 'intake-business' },
} as const;

export type RouteKey = keyof typeof routes;

/** Reverse lookup: slug → route key per locale */
export function getRouteKeyFromSlug(slug: string, locale: Locale): RouteKey | null {
  for (const [key, slugs] of Object.entries(routes)) {
    if (slugs[locale] === slug) return key as RouteKey;
  }
  return slug === '' ? 'home' : null;
}

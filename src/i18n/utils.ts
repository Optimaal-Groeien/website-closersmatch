import type { Locale, RouteKey } from './config';
import { routes, defaultLocale } from './config';
import nl from './ui/nl.json';
import en from './ui/en.json';

const dictionaries = { nl, en } as const;

export function getTranslations(locale: Locale) {
  return dictionaries[locale];
}

export function getLocalizedPath(routeKey: RouteKey, locale: Locale): string {
  const slug = routes[routeKey][locale];
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}

export function getAlternatePath(routeKey: RouteKey, fromLocale: Locale): string {
  const toLocale: Locale = fromLocale === 'nl' ? 'en' : 'nl';
  return getLocalizedPath(routeKey, toLocale);
}

export function getRouteKeyFromPathname(pathname: string): RouteKey {
  const parts = pathname.replace(/^\//, '').split('/');
  const locale = parts[0] as Locale;
  const slug = parts.slice(1).join('/');

  if (!locale || !['nl', 'en'].includes(locale)) return 'home';

  for (const [key, slugs] of Object.entries(routes)) {
    if (slugs[locale] === slug) return key as RouteKey;
  }
  return 'home';
}

export { defaultLocale };

import type { Locale, RouteKey } from './config';
import { routes, defaultLocale, locales } from './config';
import nl from './ui/nl.json';
import en from './ui/en.json';

const dictionaries = { nl, en } as const;

export function getTranslations(locale: Locale) {
  return dictionaries[locale];
}

export function getLocalizedPath(routeKey: RouteKey, locale: Locale): string {
  const slug = routes[routeKey][locale];
  if (locale === defaultLocale) {
    return slug ? `/${slug}` : '/';
  }
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}

export function getAlternatePath(routeKey: RouteKey, fromLocale: Locale): string {
  const toLocale: Locale = fromLocale === 'nl' ? 'en' : 'nl';
  return getLocalizedPath(routeKey, toLocale);
}

export function getRouteKeyFromPathname(pathname: string): RouteKey {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  const parts = normalized.replace(/^\//, '').split('/').filter(Boolean);

  // Every locale except the default one is served under its own /xx/ prefix.
  let locale: Locale = defaultLocale;
  let slugParts = parts;

  if (parts[0] && parts[0] !== defaultLocale && locales.includes(parts[0] as Locale)) {
    locale = parts[0] as Locale;
    slugParts = parts.slice(1);
  }

  const slug = slugParts.join('/');
  if (!slug) return 'home';

  for (const [key, slugs] of Object.entries(routes)) {
    if (slugs[locale] === slug) return key as RouteKey;
  }

  return 'home';
}

export { defaultLocale };

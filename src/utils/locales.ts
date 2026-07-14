// Central locale configuration for the site's multilingual (Rosey) setup.
//
// URL structure: all-languages-prefixed. Every language, including the default,
// is served under its own prefix (/en/, /es/, /ar/). Regular pages are prefixed
// automatically by Rosey at build time; blog bodies use split-by-directory, with
// one content collection per locale.

export type LocaleCode = "en" | "es" | "ar";

export interface LocaleInfo {
  /** Content collection holding this locale's blog posts. */
  blogCollection: "blog" | "blog_es" | "blog_ar";
  /** Intl locale string for date formatting. */
  dateLocale: string;
  /** Short label shown in the locale picker. */
  label: string;
  /** Text direction. */
  dir: "ltr" | "rtl";
}

export const defaultLocale: LocaleCode = "en";

export const localeConfig: Record<LocaleCode, LocaleInfo> = {
  en: { blogCollection: "blog", dateLocale: "en-US", label: "EN", dir: "ltr" },
  es: { blogCollection: "blog_es", dateLocale: "es-ES", label: "ES", dir: "ltr" },
  ar: { blogCollection: "blog_ar", dateLocale: "ar", label: "AR", dir: "rtl" },
};

export const localeCodes = Object.keys(localeConfig) as LocaleCode[];

/** Non-default locales — these are the ones with their own native blog routes. */
export const nonDefaultLocaleCodes = localeCodes.filter((c) => c !== defaultLocale);

/** Prefix a site-root-relative path with a locale (all-languages-prefixed mode). */
export function localizedPath(locale: LocaleCode, path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${clean === "/" ? "/" : clean}`;
}

import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'zh'],

  // Used when no locale matches
  defaultLocale: (process.env.NEXT_PUBLIC_DEFAULT_LOCALE as 'en' | 'zh') || 'en',
})

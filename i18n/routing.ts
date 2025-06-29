import { defineRouting } from 'next-intl/routing'

const locales = ['en-us', 'es', 'fr', 'ja', 'zh-cn']

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: (process.env.NEXT_PUBLIC_IS_CN ? ['zh-cn'] : locales) as (typeof locales)[number][],

  // Used when no locale matches
  defaultLocale: (process.env.NEXT_PUBLIC_IS_CN ? 'zh-cn' : 'en-us') as (typeof locales)[number],

  localePrefix: 'as-needed',
})

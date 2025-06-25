import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: (process.env.NEXT_PUBLIC_IS_CN ? ['zh-cn'] : ['en-us', 'zh-cn']) as ('en-us' | 'zh-cn')[],

  // Used when no locale matches
  defaultLocale: (process.env.NEXT_PUBLIC_IS_CN ? 'zh-cn' : 'en-us') as 'en-us' | 'zh-cn',

  localePrefix: 'as-needed',
})

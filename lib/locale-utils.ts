const defaultLocale = process.env.NEXT_PUBLIC_IS_CN ? 'zh-cn' : 'en-us'

export function getLocaleUrlPath(locale: string) {
  return locale === defaultLocale ? '' : `/${locale}`
}

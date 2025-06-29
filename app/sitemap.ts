import { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'
import faqsEn from '@/faqs/en-us.json'
import { FaqCategory, FaqItem } from '@/faqs/types'

const baseUrl = process.env.NEXT_PUBLIC_IS_CN ? 'https://www.echosurge.cn' : 'https://www.echosurge.ai'
const staticRoutes = ['', '/about', '/faq', '/privacy', '/terms']
const defaultLocale = process.env.NEXT_PUBLIC_IS_CN ? 'zh-cn' : 'en-us'

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemap: MetadataRoute.Sitemap = []

  // Generate sitemap entries for each locale
  routing.locales.forEach((locale) => {
    const localeBaseUrl = locale === defaultLocale ? baseUrl : `${baseUrl}/${locale}`
    // Add static routes
    staticRoutes.forEach((route) => {
      const url = route === '' ? `${localeBaseUrl}` : `${localeBaseUrl}${route}`
      sitemap.push({
        url,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
      })
    })

    // Add FAQ detail pages
    faqsEn.forEach((category: FaqCategory) => {
      category.faqs.forEach((faq: FaqItem) => {
        sitemap.push({
          url: `${localeBaseUrl}/faq/${faq.id}`,
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 0.6,
        })
      })
    })
  })

  return sitemap
}

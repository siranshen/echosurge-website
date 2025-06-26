import { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_IS_CN ? 'https://www.echosurge.cn' : 'https://www.echosurge.ai'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

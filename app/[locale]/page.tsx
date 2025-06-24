import { Metadata } from 'next'
import HomePageClient from './HomePageClient'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const messages = (await import(`@/messages/${locale}.json`)).default

  return {
    title: messages.HomePage.metadataTitle!,
    description: messages.HomePage.metadataDescription!,
    keywords: messages.HomePage.metadataKeywords!,
  }
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <HomePageClient locale={locale} />
}

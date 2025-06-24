import { Metadata } from 'next'
import AboutPageClient from './AboutPageClient'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const messages = (await import(`@/messages/${locale}.json`)).default

  return {
    title: messages.AboutPage.metadataTitle!,
    description: messages.AboutPage.metadataDescription!,
    keywords: messages.AboutPage.metadataKeywords!,
  }
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <AboutPageClient locale={locale} />
} 
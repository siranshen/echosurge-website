import { Metadata } from 'next'
import PrivacyPageClient from './PrivacyPageClient'
import { getMarkdownContent } from '@/lib/markdown'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const messages = (await import(`@/messages/${locale}.json`)).default

  return {
    title: messages.Footer.privacyPolicy!,
    description: messages.AboutPage.metadataDescription!,
    keywords: messages.AboutPage.metadataKeywords!,
  }
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const content = await getMarkdownContent(locale, 'privacy')

  return <PrivacyPageClient content={content} />
}

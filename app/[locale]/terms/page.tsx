import { Metadata } from 'next'
import TermsPageClient from './TermsPageClient'
import { getMarkdownContent } from '@/lib/markdown'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const messages = (await import(`@/messages/${locale}.json`)).default

  return {
    title: messages.Footer.termsOfService!,
    description: messages.AboutPage.metadataDescription!,
    keywords: messages.AboutPage.metadataKeywords!,
  }
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const content = await getMarkdownContent(locale, 'terms')

  return <TermsPageClient content={content} />
}

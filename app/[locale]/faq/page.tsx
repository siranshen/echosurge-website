import { Metadata } from 'next'
import FaqListClient from './FaqListClient'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const messages = (await import(`@/messages/${locale}.json`)).default

  return {
    title: messages.Faq.metadataTitle!,
    description: messages.Faq.metadataDescription!,
    keywords: messages.Faq.metadataKeywords!,
  }
}

export default async function FaqListPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <FaqListClient locale={locale} />
}

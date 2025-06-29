import { Metadata } from 'next'
import FaqListClient from './FaqListClient'
import { FaqCategory } from '@/faqs/types'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const messages = (await import(`@/messages/${locale}.json`)).default

  return {
    title: messages.Faq.metadataTitle!,
    description: messages.Faq.metadataDescription!,
    keywords: messages.Faq.metadataKeywords!,
  }
}

async function getFaqCats(locale: string): Promise<FaqCategory[]> {
  const { default: faqs } = await import(`@/faqs/${locale}.json`)
  return faqs
}

export default async function FaqListPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const faqCats = await getFaqCats(locale)
  return <FaqListClient locale={locale} faqCats={faqCats} />
}

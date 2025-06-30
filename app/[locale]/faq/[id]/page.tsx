import { notFound } from 'next/navigation'
import { FaqCategory, FaqItem } from '@/faqs/types'
import FaqDetailClient from './FaqDetailClient'
import { Metadata } from 'next'

async function getFaqList(locale: string): Promise<FaqItem[]> {
  const { default: faqs } = await import(`@/faqs/${locale}.json`)
  return faqs.flatMap((cat: FaqCategory) => cat.faqs)
}

export default async function FaqDetailPage({ params }: { params: Promise<{ locale: string; id: string }> }) {
  const { locale, id } = await params
  const faqList = await getFaqList(locale)
  const faq = faqList.find((f) => f.id === id)
  if (!faq) notFound()
  return <FaqDetailClient faq={faq} />
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; id: string }> }): Promise<Metadata> {
  const { locale, id } = await params
  const faqList = await getFaqList(locale)
  const faq = faqList.find((f) => f.id === id)
  if (!faq) return {}
  return {
    title: faq.title,
    description: faq.description,
    keywords: faq.keywords,
  }
}

import { notFound } from 'next/navigation'
import faqsEn from '../../../../faqs/en-us.json'
import faqsZh from '../../../../faqs/zh-cn.json'
import FaqDetailClient from './FaqDetailClient'
import { Metadata } from 'next'

type FaqItem = {
  id: string
  question: string
  answer: string
  title: string
  description: string
  keywords: string[]
}

type FaqCategory = {
  category: string
  faqs: FaqItem[]
}

const faqs: Record<string, FaqItem[]> = {
  'en-us': (faqsEn as FaqCategory[]).flatMap((cat) => cat.faqs),
  'zh-cn': (faqsZh as FaqCategory[]).flatMap((cat) => cat.faqs),
}

export default async function FaqDetailPage({ params }: { params: Promise<{ locale: string, id: string }> }) {
  const { locale, id } = await params
  const faqList: FaqItem[] = faqs[locale] || []
  const faq = faqList.find((f) => f.id === id)
  if (!faq) notFound()
  return <FaqDetailClient faq={faq} locale={locale} />
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string, id: string }> }): Promise<Metadata> {
  const { locale, id } = await params
  const faqList: FaqItem[] = faqs[locale] || []
  const faq = faqList.find((f) => f.id === id)
  if (!faq) return {}
  return {
    title: faq.title,
    description: faq.description,
    keywords: faq.keywords,
  }
} 
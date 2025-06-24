"use client"

import { useLocale } from 'next-intl'
import Link from 'next/link'
import faqsEn from '../../../faqs/en.json'
import faqsZh from '../../../faqs/zh.json'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ChevronRight } from 'lucide-react'

const faqs = {
  en: faqsEn,
  zh: faqsZh,
}

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

export default function FaqListPage() {
  const locale = useLocale() as 'en' | 'zh'
  const categories: FaqCategory[] = faqs[locale] || []

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 page-max-width mx-auto px-6 py-16 md:py-24 text-[var(--foreground)]">
        <h1 className="text-4xl md:text-5xl font-bold mb-10">FAQs</h1>
        {categories.map((cat) => (
          <section key={cat.category} className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">{cat.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cat.faqs.map(faq => (
                <Link
                  key={faq.id}
                  href={`/${locale}/faq/${faq.id}`}
                  className="text-sm md:text-base hover:underline flex items-center gap-2"
                >
                  <ChevronRight className="h-4 w-4 text-[var(--branded-blue)]" />
                  <span className="font-medium">{faq.question}</span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  )
} 
'use client'

import Link from 'next/link'
import faqsEn from '@/faqs/en-us.json'
import faqsZh from '@/faqs/zh-cn.json'
import { FaqCategory, FaqItem } from '@/faqs/types'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ChevronRight } from 'lucide-react'

const faqs: Record<string, { category: string; faqs: FaqItem[] }[]> = {
  'en-us': faqsEn,
  'zh-cn': faqsZh,
}

export default function FaqListClient({ locale }: { locale: string }) {
  const categories: FaqCategory[] = faqs[locale] || []

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-1 max-w-3xl mx-auto px-6 py-16 md:py-24 text-[var(--foreground)]'>
        <h1 className='text-4xl md:text-5xl font-bold mb-10'>FAQs</h1>
        {categories.map((cat) => (
          <section key={cat.category} className='mb-10'>
            <h2 className='text-2xl font-semibold mb-4'>{cat.category}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {cat.faqs.map((faq) => (
                <div key={faq.id} className='flex items-start gap-2 text-sm md:text-base'>
                  <div className='w-5 h-5 md:w-6 md:h-6 flex items-center justify-center'>
                    <ChevronRight className='text-[var(--branded-blue)]' />
                  </div>
                  <Link href={`/${locale}/faq/${faq.id}`} className='hover:underline'>
                    <span className='font-medium'>{faq.question}</span>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  )
}

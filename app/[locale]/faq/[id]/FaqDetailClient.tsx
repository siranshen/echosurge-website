'use client'

import { useTranslations } from 'next-intl'
import ReactMarkdown from 'react-markdown'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Link } from '@/i18n/navigation'
import { ChevronLeft } from 'lucide-react'

// Types should match the parent page
interface FaqDetailClientProps {
  faq: {
    id: string
    question: string
    answer: string
    title: string
    description: string
    keywords: string[]
  }
}

export default function FaqDetailClient({ faq }: FaqDetailClientProps) {
  const t = useTranslations('Faq')
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-1 max-w-2xl w-full mx-auto px-6 py-16 md:py-24 text-[var(--foreground)]'>
        <Link href={`/faq`} className='text-lg text-[var(--branded-blue)] hover:underline flex items-center gap-2 mb-6'>
          <ChevronLeft className='h-4 w-4' />
          {t('backToFaqs')}
        </Link>
        <article className='prose max-w-none'>
          <h1>{faq.question}</h1>
          <ReactMarkdown>{faq.answer}</ReactMarkdown>
        </article>
      </main>
      <Footer />
    </div>
  )
}

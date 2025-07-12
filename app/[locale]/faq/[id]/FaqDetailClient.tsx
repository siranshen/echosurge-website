'use client'

import { useTranslations } from 'next-intl'
import ReactMarkdown from 'react-markdown'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BreadcrumbNav } from '@/components/Breadcrumb'
import { Link } from '@/i18n/navigation'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

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
  prevFaq: { id: string; question: string } | null
  nextFaq: { id: string; question: string } | null
  randomFaqs: Array<{ id: string; question: string; description: string }>
}

export default function FaqDetailClient({ faq, prevFaq, nextFaq, randomFaqs }: FaqDetailClientProps) {
  const t = useTranslations('Faq')
  const tFooter = useTranslations('Footer')

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-1 max-w-3xl w-full mx-auto px-6 py-16 md:py-24 text-[var(--foreground)]'>
        <BreadcrumbNav
          items={[
            { label: tFooter('faq'), href: '/faq' },
            { label: faq.question, current: true },
          ]}
        />
        <article className='prose max-w-none'>
          <h1>{faq.question}</h1>
          <ReactMarkdown>{faq.answer}</ReactMarkdown>
        </article>

        {/* Navigation buttons */}
        <div className='flex justify-between items-center mt-6 pt-6 border-t border-gray-200'>
          {prevFaq ? (
            <Link href={`/faq/${prevFaq.id}`} className='flex items-center gap-2 text-[var(--branded-blue)] hover:underline'>
              <ChevronLeft className='h-4 w-4' />
              <span>{t('previous')}</span>
            </Link>
          ) : (
            <div></div>
          )}

          {nextFaq ? (
            <Link href={`/faq/${nextFaq.id}`} className='flex items-center gap-2 text-[var(--branded-blue)] hover:underline'>
              <span>{t('next')}</span>
              <ChevronRight className='h-4 w-4' />
            </Link>
          ) : (
            <div></div>
          )}
        </div>

        {/* Keep reading section */}
        <section className='mt-16'>
          <h2 className='text-2xl font-semibold mb-8'>{t('keepReading')}</h2>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-5 items-stretch'>
            {randomFaqs.map((randomFaq) => (
              <Link href={`/faq/${randomFaq.id}`} key={randomFaq.id}>
                <Card className='flex flex-col justify-between border-slate-300 hover:border-slate-400 transition-colors h-full'>
                  <div className='flex flex-col gap-2'>
                    <CardHeader>
                      <CardTitle className='text-base'>{randomFaq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className='text-sm'>
                        <div className='overflow-hidden'>
                          <div className='line-clamp-3'>
                            <ReactMarkdown>{randomFaq.description}</ReactMarkdown>
                          </div>
                        </div>
                      </CardDescription>
                    </CardContent>
                  </div>
                  <CardFooter className='flex items-center gap-1 text-slate-500'>
                    <span className='text-sm'>{t('readNow')}</span>
                    <ArrowRight className='h-4 w-4' />
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

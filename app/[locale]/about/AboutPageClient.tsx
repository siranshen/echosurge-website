'use client'

import { Button } from '@/components/ui/button'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { useState } from 'react'
import { ContactModal } from '@/components/ContactModal'
import { useTranslations } from 'next-intl'
import ReactMarkdown from 'react-markdown'

export default function AboutPageClient({ content }: { content: string }) {
  const [isContactModalOpen, setContactModalOpen] = useState(false)
  const t = useTranslations('AboutPage')

  return (
    <main>
      <Header />
      <ContactModal open={isContactModalOpen} onClose={() => setContactModalOpen(false)} />
      <div className='relative w-full max-w-2xl mx-auto px-6 py-16 md:py-24 text-[var(--foreground)]'>
        <div className='prose max-w-none'>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
        <div className='flex justify-center mt-10'>
          <Button size='lg' onClick={() => setContactModalOpen(true)}>
            {t('contactUs')}
          </Button>
        </div>
      </div>
      <Footer />
    </main>
  )
}

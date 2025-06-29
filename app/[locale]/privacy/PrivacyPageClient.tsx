'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import ReactMarkdown from 'react-markdown'

export default function PrivacyPageClient({ content }: { content: string }) {
  return (
    <main>
      <Header />
      <div className='relative w-full max-w-2xl mx-auto px-6 py-16 md:py-24 text-[var(--foreground)]'>
        <div className='prose max-w-none'>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
      <Footer />
    </main>
  )
}

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { useTranslations } from 'next-intl'

export default function NotFoundPage() {
  const t = useTranslations('NotFound')
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-2xl w-full mx-auto px-6 py-16 md:py-24 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--branded-blue)]">{t('notFoundTitle')}</h1>
        <p className="mb-8 text-lg text-center text-[var(--foreground-secondary)]">
          {t('notFoundMessage')}
        </p>
      </main>
      <Footer />
    </div>
  )
} 
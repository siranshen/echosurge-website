import { notFound } from 'next/navigation'
import { FaqCategory, FaqItem } from '@/faqs/types'
import FaqDetailClient from './FaqDetailClient'
import { getRandomFaqImage } from '@/lib/faq-images'
import { Metadata } from 'next'

// Cache for FAQ data to avoid repeated JSON loading
const faqCache = new Map<string, FaqItem[]>()

async function getFaqWithNavigation(
  locale: string,
  id: string
): Promise<{
  faq: FaqItem
  prevFaq: { id: string; question: string } | null
  nextFaq: { id: string; question: string } | null
  randomFaqs: Array<{ id: string; question: string; description: string }>
} | null> {
  const cacheKey = `faqs-${locale}`

  // Check cache first
  let allFaqs: FaqItem[]
  if (faqCache.has(cacheKey)) {
    allFaqs = faqCache.get(cacheKey)!
  } else {
    const { default: faqs } = await import(`@/faqs/${locale}.json`)
    allFaqs = faqs.flatMap((cat: FaqCategory) => cat.faqs)
    faqCache.set(cacheKey, allFaqs)
  }

  const currentIndex = allFaqs.findIndex((f: FaqItem) => f.id === id)
  if (currentIndex === -1) return null

  const faq = allFaqs[currentIndex]
  const prevFaq =
    currentIndex > 0
      ? {
          id: allFaqs[currentIndex - 1].id,
          question: allFaqs[currentIndex - 1].question,
        }
      : null
  const nextFaq =
    currentIndex < allFaqs.length - 1
      ? {
          id: allFaqs[currentIndex + 1].id,
          question: allFaqs[currentIndex + 1].question,
        }
      : null

  // Generate 3 random FAQs (excluding current FAQ)
  const otherFaqs = allFaqs.filter((f: FaqItem) => f.id !== id)
  const randomFaqs = otherFaqs
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map((f: FaqItem) => ({
      id: f.id,
      question: f.question,
      description: f.description,
    }))

  return { faq, prevFaq, nextFaq, randomFaqs }
}

export default async function FaqDetailPage({ params }: { params: Promise<{ locale: string; id: string }> }) {
  const { locale, id } = await params
  const result = await getFaqWithNavigation(locale, id)
  if (!result) notFound()

  const randomImagePath = getRandomFaqImage()

  return (
    <FaqDetailClient
      faq={result.faq}
      imagePath={randomImagePath}
      prevFaq={result.prevFaq}
      nextFaq={result.nextFaq}
      randomFaqs={result.randomFaqs}
    />
  )
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; id: string }> }): Promise<Metadata> {
  const { locale, id } = await params
  const result = await getFaqWithNavigation(locale, id)
  if (!result) return {}

  return {
    title: result.faq.title,
    description: result.faq.description,
    keywords: result.faq.keywords,
  }
}

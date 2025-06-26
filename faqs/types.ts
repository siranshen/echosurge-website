export type FaqItem = {
  id: string
  question: string
  answer: string
  title: string
  description: string
  keywords: string[]
}

export type FaqCategory = {
  category: string
  faqs: FaqItem[]
}

import type { Metadata } from 'next'
import { Host_Grotesk, Noto_Sans_SC } from 'next/font/google'
import './globals.css'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { setRequestLocale } from 'next-intl/server'
import Script from 'next/script'

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-noto-sans-sc',
})

const hostGrotesk = Host_Grotesk({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-host-grotesk',
})

export const metadata: Metadata = {
  title: 'EchoSurge',
  description: 'Make your brand part of the answer by AI',
  icons: {
    icon: '/favicon.ico',
  },
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  const fontClassName = locale === 'zh' ? `${notoSansSC.variable} font-sans` : `${hostGrotesk.variable} font-sans`

  return (
    <html lang={locale}>
      <head>
        {/* 这里可以放 meta、title 等 */}
      </head>
      <body className={fontClassName}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <Script
          src="https://hm.baidu.com/hm.js?54385ebe505504cafad559dd840b349f"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}

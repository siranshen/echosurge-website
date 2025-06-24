'use client'

import { useLocale, useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/Header'
import { AiLogoCarousel } from '@/components/AiLogoCarousel'
import Image from 'next/image'
import { EchoMonitor } from '@/components/EchoMonitor'
import { Faq } from '@/components/Faq'
import { Footer } from '@/components/Footer'
import { useState } from 'react'
import { ContactModal } from '@/components/ContactModal'
import { SubscribeForm } from '@/components/SubscribeForm'

export default function HomePage() {
  const t = useTranslations('HomePage')
  const locale = useLocale()
  const [isContactModalOpen, setContactModalOpen] = useState(false)

  return (
    <main>
      <Header />
      <ContactModal open={isContactModalOpen} onClose={() => setContactModalOpen(false)} />

      <div
        className='absolute top-[88px] left-0 w-full min-h-[680px] md:min-h-[720px] lg:min-h-[840px]'
        style={{
          background: 'linear-gradient(180deg, #F2FBFF 0%, rgba(242, 251, 255, 0.00) 40%)',
        }}
      />

      <div className='relative page-max-width mx-auto text-center'>
        <section
          id='hero'
          className='relative flex flex-col min-h-[680px] md:min-h-[720px] lg:min-h-[840px] px-6 overflow-hidden'
        >
          <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[844px] lg:w-[1000px] -z-10'>
            <Image src='/echoes.svg' alt='Decorative Echoes' width={1100} height={400} className='w-full h-auto' />
          </div>

          <div className='relative pt-[100px]'>
            {locale === 'en' ? (
              <>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-medium leading-tight'>{t('heroTitlePart1')}</h1>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-medium leading-tight'>{t('heroTitlePart2')}</h1>
                <div className='mt-4'>
                  <AiLogoCarousel locale={locale} />
                </div>
              </>
            ) : (
              <>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-medium leading-tight'>{t('heroTitlePart1')}</h1>
                <div className='mt-4'>
                  <AiLogoCarousel locale={locale} />
                </div>
                <h1 className='mt-4 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight'>{t('heroTitlePart2')}</h1>
              </>
            )}
            <p className='mt-10 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto'>{t('heroSubtitle')}</p>
            <div className='mt-10'>
              <Button size='lg' onClick={() => setContactModalOpen(true)}>
                {t('getDemo')}
              </Button>
            </div>
          </div>
        </section>

        <section id='services' className='relative p-[60px] lg:p-[70px] px-6 overflow-hidden'>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full opacity-50 -z-10'>
            {/* Mobile - rotated image */}
            <div className='block md:hidden'>
              <Image
                src='/echo-background-rotated.svg'
                alt='Echo Background'
                width={1200}
                height={750}
                className='w-full h-auto page-max-width'
              />
            </div>
            {/* Desktop - regular image */}
            <div className='hidden md:block'>
              <Image
                src='/echo-background.svg'
                alt='Echo Background'
                width={1200}
                height={750}
                className='w-full h-auto page-max-width'
              />
            </div>
          </div>

          <div>
            <h1 className='text-xl md:text-2xl lg:text-3xl text-[var(--branded-blue)]'>{t('servicesSection')}</h1>
            <h2 className='mt-6 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight'>{t('servicesTitle')}</h2>
            <p className='mt-6 text-sm/loose md:text-base/loose lg:text-xl/loose font-light max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto'>
              {t('servicesDescription')}
            </p>
          </div>

          <div className='mt-8 lg:mt-12'>
            <EchoMonitor />
          </div>
        </section>

        <section id='early-access' className='relative'>
          <div className='mx-5 md:mx-10 rounded-md bg-gradient-primary grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 md:gap-6 max-h-[460px] md:max-h-[300px] lg:max-h-[400px] overflow-hidden'>
            <div className='rotate-10 md:order-last -mt-20 md:-mt-0 md:-mr-20 lg:mr-0'>
              <EchoMonitor />
            </div>
            <div className='flex flex-col justify-center items-center md:items-start gap-5 md:gap-8 lg:gap-12 px-4 md:pl-14 lg:pl-20'>
              <p className='text-balance text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--background-secondary)] leading-tight md:text-left'>
                {t('earlyAccessTitle')}
              </p>
              <Button size='lg' variant='secondary' onClick={() => setContactModalOpen(true)}>
                {t('earlyAccessButton')}
              </Button>
            </div>
          </div>
        </section>

        <section id='faq' className='relative py-[80px] flex flex-col items-center'>
          <h1 className='text-xl md:text-2xl lg:text-3xl text-[var(--branded-blue)]'>{t('faqSection')}</h1>
          <Faq />
        </section>

        <section id='subscribe'>
          <div className='relative mx-5 md:mx-10 rounded-md bg-[var(--background-secondary)] flex flex-col items-center justify-center h-[360px] md:h-[400px] lg:h-[480px] overflow-hidden'>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full'>
              <Image
                src='/echo-background-white.svg'
                alt='Echo Background'
                width={1000}
                height={625}
                className='w-full h-auto'
              />
            </div>

            <div className='flex flex-col items-center gap-7 w-full z-10'>
              <h1 className='gradient-text text-balance text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-[var(--branded-blue)] max-w-xl md:max-w-2xl lg:max-w-3xl px-7'>
                {t('subscribeTitle')}
              </h1>
              <p className='text-sm md:text-base lg:text-xl text-[var(--foreground-secondary)] font-base max-w-xl md:max-w-2xl lg:max-w-3xl px-8'>
                {t('subscribeSubtitle')}
              </p>
              <SubscribeForm />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}

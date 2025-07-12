import { useLocale, useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'

export function Footer() {
  const t = useTranslations('Footer')
  const locale = useLocale()

  const logoSrc = locale === 'zh-cn' ? '/logo-zh.svg' : '/logo.svg'

  return (
    <footer
      className='mt-20 flex flex-col items-center justify-center'
      style={{
        background: 'linear-gradient(180deg, #F2FBFF 0%, rgba(242, 251, 255, 0.00) 40%)',
      }}
    >
      <div className='page-max-width w-full flex flex-col gap-10 lg:gap-12 items-start justify-center p-10 lg:p-12'>
        <div className='w-full flex flex-col gap-16 md:flex-row items-start justify-between'>
          <Image src={logoSrc} alt='EchoSurge Logo' width={158} height={48} className='h-auto w-32 md:w-36 lg:w-40' />
          <div className='flex items-start gap-20 text-sm text-[var(--foreground)]'>
            <div className='flex flex-col gap-1'>
              <Link href='/about'>{t('about')}</Link>
              <Link href='mailto:hello@echosurge.ai'>{t('contact')}</Link>
              <Link href='/faq'>{t('faq')}</Link>
            </div>
            <div className='flex flex-col gap-1'>
              <Link href='/privacy'>{t('privacyPolicy')}</Link>
              <Link href='/terms'>{t('termsOfService')}</Link>
            </div>
          </div>
        </div>
        <p className='text-sm text-[var(--foreground-secondary)]'>{t('copyright')}</p>
      </div>
    </footer>
  )
}

import { useLocale, useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { AiLogoCarousel } from '@/components/AiLogoCarousel';
import Image from 'next/image';

export default function HomePage() {
  const t = useTranslations('HomePage');
  const locale = useLocale();

  return (
    <div className="relative flex flex-col min-h-[720px] md:min-h-[820px] lg:min-h-[960px] max-w-[1200px] mx-auto text-center overflow-hidden" style={{
      background: 'radial-gradient(45% 45% at 50% 55%, #F2FBFF 0%, rgba(242, 251, 255, 0.00) 80%)'
    }}>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[844px] lg:w-[1000px]">
        <Image 
            src="/echoes.svg"
            alt="Decorative Echoes"
            width={1100}
            height={400}
            className="w-full h-auto"
        />
      </div>

      <Header />

      <main className="relative pt-[100px]">
          {locale === 'en' ? (
            <>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight">
                {t('heroTitlePart1')}
              </h1>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight">
                {t('heroTitlePart2')}
              </h1>
              <div className="mt-4">
                <AiLogoCarousel locale={locale} />
              </div>
            </>
          ) : (
            <>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight">
                {t('heroTitlePart1')}
              </h1>
              <div className="mt-4 flex justify-center items-center">
                <AiLogoCarousel locale={locale} />
                <h1 className="ml-4 text-3xl md:text-5xl lg:text-6xl font-medium leading-tight text-left">
                  {t('heroTitlePart2')}
                </h1>
              </div>
            </>
          )}
        <p className="mt-10 text-lg md:text-2xl lg:text-3xl max-w-2xl mx-auto">
          {t('heroSubtitle')}
        </p>
        <div className="mt-10">
          <Button size="lg">{t('getDemo')}</Button>
        </div>
      </main>
    </div>
  );
}

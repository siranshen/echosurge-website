import { useTranslations } from 'next-intl'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Link } from '@/i18n/navigation'
import { ChevronRight } from 'lucide-react'

export function FaqAccordion() {
  const t = useTranslations('Faq')
  const faqItems = ['whatIsGEO', 'diffGEOSEO', 'platforms', 'businesses', 'results']

  return (
    <div className='w-full max-w-[820px] px-5 md:px-10 mt-4 md:mt-5 lg:mt-7 text-sm md:text-base lg:text-lg'>
      <Accordion type='single' collapsible defaultValue='whatIsGEO' className='w-full space-y-4'>
        {faqItems.map((item) => (
          <AccordionItem value={item} key={item} className=''>
            <AccordionTrigger className='bg-[var(--background-secondary)] text-left hover:no-underline'>
              {t(`${item}.question`)}
            </AccordionTrigger>
            <AccordionContent className='bg-[var(--background-secondary)]/30 text-base text-[var(--foreground-secondary)]'>
              {t(`${item}.answer`)}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className='mt-4 flex justify-center'>
        <Link href={`/faq`} className='flex items-center gap-1 text-[var(--branded-blue)] hover:underline transition'>
          {t('seeAllFaqs')}
          <ChevronRight className='h-4 w-4' />
        </Link>
      </div>
    </div>
  )
}

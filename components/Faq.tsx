import { useTranslations } from 'next-intl';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function Faq() {
  const t = useTranslations('Faq');
  const faqItems = [
    'whatIsGEO',
    'diffGEOSEO',
    'platforms',
    'businesses',
    'results'
  ];

  return (
    <div className="w-full max-w-[820px] px-5 md:px-10 mt-4 md:mt-5 lg:mt-7 text-sm md:text-base lg:text-lg">
      <Accordion type="single" collapsible defaultValue="whatIsGEO" className="w-full space-y-4">
        {faqItems.map((item) => (
          <AccordionItem value={item} key={item} className="">
            <AccordionTrigger className="bg-[var(--background-secondary)] text-left hover:no-underline">
              {t(`${item}.question`)}
            </AccordionTrigger>
            <AccordionContent className="bg-[var(--background-secondary)]/30 text-base text-[var(--foreground-secondary)]">
              {t(`${item}.answer`)}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
} 
'use client'

import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { Globe, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { ContactModal } from '@/components/ContactModal'

export function Header() {
  const t = useTranslations('Header')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const changeLocale = (newLocale: string) => {
    // Remove the current locale from the pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/'
    const newPath = `/${newLocale}${pathWithoutLocale}`
    router.replace(newPath)
  }

  const navLinks = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/about`, label: t('about') },
    { href: 'mailto:hello@echosurge.ai', label: t('contact') },
  ]

  const logoSrc = locale === 'zh' ? '/logo-zh.svg' : '/logo.svg'

  const localeSwitcher = (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon'>
          <Globe className='h-[1.2rem] w-[1.2rem]' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => changeLocale('en')}>English</DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLocale('zh')}>中文</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )

  return (
    <>
      <header className='bg-white min-h-[88px] sticky top-0 z-50 flex items-center justify-center'>
        <div className='page-max-width w-full px-6 md:px-10 lg:px-12 flex justify-between items-center'>
          <Link href={`/${locale}`}>
            <Image src={logoSrc} alt='EchoSurge Logo' width={158} height={48} className='h-auto w-24 md:w-28 lg:w-32' />
          </Link>
          <div className='flex items-center gap-3'>
            <nav className='hidden md:flex items-center space-x-3'>
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className='text-sm px-2 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors'
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className='hidden md:flex items-center'>{localeSwitcher}</div>
            <Button size='sm' className='md:ml-2' onClick={() => setIsModalOpen(true)}>
              {t('getDemo')}
            </Button>
            <div className='md:hidden'>
              <Button variant='ghost' size='icon' onClick={() => setIsMenuOpen(true)}>
                <Menu className='h-6 w-6' />
              </Button>
            </div>
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <div className='fixed inset-0 z-50 bg-white md:hidden'>
          <div className='flex justify-between items-center px-6 h-[88px]'>
            <Link href={`/${locale}`}>
              <Image
                src={logoSrc}
                alt='EchoSurge Logo'
                width={158}
                height={48}
                className='w-24 h-8 sm:w-28 sm:h-9 md:w-32 md:h-10 lg:w-40 lg:h-12'
              />
            </Link>
            <Button variant='ghost' size='icon' onClick={() => setIsMenuOpen(false)}>
              <X className='h-6 w-6' />
            </Button>
          </div>
          <nav className='flex flex-col items-center justify-center pt-4 space-y-8'>
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className='text-base' onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <div>{localeSwitcher}</div>
          </nav>
        </div>
      )}
      <ContactModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

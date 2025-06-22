'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Header() {
  const t = useTranslations('Header');
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLocale = (locale: string) => {
    const newPath = `/${locale}`;
    router.replace(newPath);
  };

  const navLinks = [
    { href: '#', label: t('home') },
    { href: '#', label: t('about') },
    { href: '#', label: t('blog') },
    { href: '#', label: t('contact') },
  ];

  const localeSwitcher = (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLocale('en')}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLocale('zh')}>
          中文
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <header className="bg-white min-h-[88px] sticky top-0 z-50 flex flex-col justify-center">
      <div className="px-6 md:px-10 lg:px-12 flex justify-between items-center">
        <Image src="/logo.svg" alt="EchoSurge Logo" width={158} height={48} />
        <div className="flex items-center space-x-3">
          <nav className="hidden md:flex items-center space-x-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm px-2 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center">{localeSwitcher}</div>
          <Button className='md:ml-2'>{t('getDemo')}</Button>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="flex justify-between items-center px-6 h-[88px]">
            <Image
              src="/logo.svg"
              alt="EchoSurge Logo"
              width={158}
              height={48}
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="flex flex-col items-center justify-center pt-16 space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-2xl"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="absolute bottom-10">{localeSwitcher}</div>
          </nav>
        </div>
      )}
    </header>
  );
} 
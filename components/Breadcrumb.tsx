'use client'

import React from 'react'
import { Link } from '@/i18n/navigation'
import { Home } from 'lucide-react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

interface BreadcrumbProps {
  items?: Array<{
    label: string
    href?: string
    current?: boolean
    icon?: React.ReactNode
  }>
}

export function BreadcrumbNav({ items = [] }: BreadcrumbProps) {
  const defaultItems = [{ label: '', href: '/', icon: <Home className='h-4 w-4' />, current: false }]

  const allItems = items.length > 0 ? [...defaultItems, ...items] : defaultItems

  return (
    <Breadcrumb className='mb-6 text-foreground/60'>
      <BreadcrumbList>
        {allItems.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              {item.current ? (
                <BreadcrumbPage className='max-w-[260px] truncate' title={item.label}>
                  {item.icon ? item.icon : item.label}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link href={item.href!}>{item.icon ? item.icon : item.label}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {index < allItems.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

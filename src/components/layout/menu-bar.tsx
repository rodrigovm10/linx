'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

import { Link as IconLink, Settings } from 'lucide-react'

export function MenuBar() {
  const pathname = usePathname()

  return (
    <section className='flex gap-x-4 border-b-2 px-6 md:px-12'>
      <Link
        href='/dashboard'
        className={cn(
          pathname === '/dashboard'
            ? 'opacity-100 border-b-2 border-b-primary'
            : 'hover:opacity-90 opacity-50',
          'flex items-center gap-x-1 transition-all pb-2'
        )}
      >
        <IconLink className='size-4' />
        <span>Dashboard</span>
      </Link>
      <Link
        href='/settings'
        className={cn(
          pathname === '/settings'
            ? 'opacity-100 border-b-2 border-b-primary'
            : 'hover:opacity-90 opacity-50',
          'flex items-center gap-x-1 transition-all group pb-2'
        )}
      >
        <Settings className='size-4 hover:group:animate-spin' />
        <span>Settings</span>
      </Link>
    </section>
  )
}

'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

import { Link as IconLink, Settings } from 'lucide-react'

export function MenuBar() {
  const pathname = usePathname()

  if (pathname === '/') return

  return (
    <nav className='fixed z-50 flex w-full items-center border-b border-neutral-200 shadow-sm backdrop-blur-md dark:border-neutral-800 '>
      <div className='container mx-auto w-full'>
        <section className='flex w-full items-center mt-0 space-x-0 text-sm font-medium rtl:space-x-reverse'>
          <div className='flex items-center gap-x-8'>
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
          </div>
        </section>
      </div>
    </nav>
  )
}

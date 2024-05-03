'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Started } from '@/components/header/started'
import { GitHubIcon } from '@/components/icons/github'
import { ThemeToggle } from '@/components/themes/theme-toggle'
import icon from '../../../public/assets/icon.png'
import { cn } from '@/lib/utils'

export function Header() {
  const pathname = usePathname()

  return (
    <header
      className={cn(
        pathname === '/' ? 'border border-b-2' : 'border-none     ',
        'pb-2 py-4 px-4 md:px-12'
      )}
    >
      <nav className='flex justify-between items-center'>
        <section className='hover:opacity-100 opacity-80 transition-all'>
          <Link
            href='/'
            className='flex gap-x-4'
          >
            <Image
              src={icon.src}
              alt='Linx icon'
              width={28}
              height={28}
            />
            <span className='self-center text-[18px] font-semibold '>linx</span>
          </Link>
        </section>
        <section className='flex items-center gap-x-2'>
          <Link href='https://github.com/rodrigovm10/linx'>
            <Button
              variant='ghost'
              size='icon'
            >
              <GitHubIcon className='size-5' />
            </Button>
          </Link>
          <ThemeToggle />
          <Started />
        </section>
      </nav>
    </header>
  )
}

import Link from 'next/link'
import { auth } from '@/auth'
import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'
import { Started } from '@/components/header/started'
import { GitHubIcon } from '@/components/icons/github'
import { IconLinx } from '@/components/icons/icon-linx'
import { UserButton } from '@/components/auth/user-button'
import { ThemeToggle } from '@/components/themes/theme-toggle'
import { ExternalLink } from '@/components/common/external-link'

export async function Header() {
  const session = await auth()

  return (
    <header
      className={cn(
        !session?.user ? 'border border-b-2' : 'border-none',
        'pb-2 py-4 px-4 md:px-12'
      )}
    >
      <nav className='flex justify-between items-center'>
        <section className='hover:opacity-100 opacity-80 transition-all'>
          <Link
            href='/'
            className='flex gap-x-4'
          >
            <IconLinx />
            <span className='self-center text-[18px] font-semibold '>linx</span>
          </Link>
        </section>
        <section className='flex items-center gap-x-2'>
          <ExternalLink href='https://github.com/rodrigovm10/linx'>
            <Button
              variant='ghost'
              size='icon'
            >
              <GitHubIcon className='size-5' />
            </Button>
          </ExternalLink>
          <ThemeToggle />
          {session?.user ? <UserButton /> : <Started />}
        </section>
      </nav>
    </header>
  )
}

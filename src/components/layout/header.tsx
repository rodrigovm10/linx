import Image from 'next/image'
import icon from '../../../public/assets/icon.png'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Started } from '@/components/header/started'
import { GitHubIcon } from '@/components/icons/github'
import { ThemeToggle } from '@/components/themes/theme-toggle'

export function Header() {
  return (
    <header className='border-b-2 pb-2 py-4 px-4 md:px-6'>
      <nav className='flex  justify-between items-center'>
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

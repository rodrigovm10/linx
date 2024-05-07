import Link from 'next/link'

import { GitHubIcon } from '@/components/icons/github'
import { ExternalLink } from '@/components/common/external-link'
import { Button, buttonVariants } from '@/components/ui/button'
import { Link as IconLink } from 'lucide-react'

export default function Home() {
  return (
    <main className='flex flex-col items-center px-6 pt-16 text-center md:pt-24 lg:pt-32 gap-y-6 md:gap-y-10'>
      <h1 className='text-5xl md:text-6xl font-bold'>A place for manage your links</h1>
      <span className='md:w-[80%] text-black/50 dark:text-gray-400/50 hover:text-black dark:hover:text-white transition-all text-lg md:text-xl text-balance'>
        Linx is a URL shortener manager that allows you to{' '}
        <span className='text-black dark:text-white'>
          create, edit, delete, and manage your links efficiently.
        </span>{' '}
        With Linx, you can customize shortened links, track click statistics.
      </span>
      <div className='flex gap-x-3'>
        <Link
          href='/dashboard'
          className={buttonVariants({ variant: 'default' })}
        >
          <IconLink className='size-4 mr-2' />
          Create a link
        </Link>
        <ExternalLink href='https://github.com/rodrigovm10/linx'>
          <Button variant='outline'>
            <GitHubIcon className='size-4 mr-2' />
            Star on github
          </Button>
        </ExternalLink>
      </div>
    </main>
  )
}

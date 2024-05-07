import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

export function Started() {
  return (
    <Link
      href='/dashboard'
      className={buttonVariants({ variant: 'outline' })}
    >
      Get Started
    </Link>
  )
}

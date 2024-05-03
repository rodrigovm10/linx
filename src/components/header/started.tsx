import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Started() {
  return (
    <Link href='/dashboard'>
      <Button variant='outline'>Get Started</Button>
    </Link>
  )
}

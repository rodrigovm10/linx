import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Started() {
  return (
    <Link href='/'>
      <Button variant='outline'>Get Started</Button>
    </Link>
  )
}

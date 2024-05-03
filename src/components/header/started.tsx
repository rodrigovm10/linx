'use client'

import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Started() {
  return (
    <Link href='/'>
      <Button
        variant='outline'
        onClick={async () => {
          const result = await signIn('github', { redirect: false })
          console.log(result)
        }}
      >
        Get Started
      </Button>
    </Link>
  )
}

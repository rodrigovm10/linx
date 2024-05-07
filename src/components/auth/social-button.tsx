'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { signIn } from 'next-auth/react'
import { DEFAULT_LOGIN_REDIRECT_URL } from '@/routes'

import { Button } from '@/components/ui/button'
import { useSearchParams } from 'next/navigation'
import { GoogleIcon } from '@/components/icons/google'
import { GitHubIcon } from '@/components/icons/github'

export function SocialButton() {
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(false)
  const callbackUrl = searchParams.get('callbackUrl')

  const handleLogin = async (provider: string) => {
    try {
      setLoading(true)
      await signIn(provider, {
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT_URL
      })
    } catch (err) {
      toast.error('An error ocurred while trying to sign in!')
    }
  }
  return (
    <section className='space-y-3'>
      <Button
        className='w-full flex gap-x-4'
        variant='outline'
        disabled={loading}
        onClick={() => {
          handleLogin('github')
        }}
      >
        <GitHubIcon className='w-4' />
        Continue with Github
      </Button>
      <Button
        className='w-full flex gap-x-4'
        variant='outline'
        disabled={loading}
        onClick={() => {
          handleLogin('google')
        }}
      >
        <GoogleIcon className='w-4' />
        Continue with Google
      </Button>
    </section>
  )
}

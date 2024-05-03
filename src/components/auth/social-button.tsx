'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { signIn } from 'next-auth/react'
import { DEFAULT_LOGIN_REDIRECT_URL } from '@/routes'

import { GitHubIcon } from '../icons/github'
import { Button } from '@/components/ui/button'
import { useSearchParams } from 'next/navigation'

export function SocialButton() {
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(false)
  const callbackUrl = searchParams.get('callbackUrl')

  const handleLogin = async () => {
    try {
      setLoading(true)
      await signIn('github', {
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT_URL
      })
    } catch (err) {
      toast.error('An error ocurred while trying to sign in!')
    }
  }
  return (
    <Button
      className='w-full flex gap-x-4'
      variant='outline'
      disabled={loading}
      onClick={handleLogin}
    >
      <GitHubIcon className='w-4' />
      Continue with Github
    </Button>
  )
}

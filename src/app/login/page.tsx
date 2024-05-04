import { IconLinx } from '@/components/icons/icon-linx'
import { SocialButton } from '@/components/auth/social-button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function LoginPage() {
  return (
    <Card>
      <CardHeader>
        <IconLinx className='mx-auto mb-4 size-8' />
        <CardTitle className='text-center'>Log in to Linx</CardTitle>
        <CardDescription>Log in with your favorite provider:</CardDescription>
      </CardHeader>
      <CardContent>
        <SocialButton />
      </CardContent>
    </Card>
  )
}

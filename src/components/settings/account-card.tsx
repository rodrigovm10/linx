import { auth } from '@/auth'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Download } from 'lucide-react'
import { Label } from '@/components/ui/label'
import { DeleteAccount } from '@/components/settings/delete-account'

export async function AccountCard() {
  const session = await auth()

  return (
    <Card className='p-0'>
      <CardHeader className='p-4'>
        <CardTitle className='font-normal'>Account</CardTitle>
        <CardDescription>Update your account information:</CardDescription>
      </CardHeader>
      <CardContent className='p-4 space-y-6'>
        <div className='flex flex-col gap-y-2'>
          <Label>Export links</Label>
          <Button
            variant='outline'
            className='w-[250px] flex gap-x-2 justify-center'
          >
            <Download className='size-4' />
            Export links
          </Button>
        </div>
        <div className='flex flex-col gap-y-2'>
          <Label>Delete Account</Label>
          <DeleteAccount session={session} />
        </div>
      </CardContent>
    </Card>
  )
}

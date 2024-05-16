import { auth } from '@/auth'

import { ExportLinks } from '@/components/settings/export-links'
import { DeleteAccount } from '@/components/settings/delete-account'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'

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
          <ExportLinks />
        </div>
        <div className='flex flex-col gap-y-2'>
          <Label>Delete Account</Label>
          <DeleteAccount session={session} />
        </div>
      </CardContent>
    </Card>
  )
}

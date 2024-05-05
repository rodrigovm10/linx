import { auth } from '@/auth'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Download, HeartCrack } from 'lucide-react'
import { GeneralCard } from '@/components/settings/general-card'

export default async function SettingsPage() {
  const session = await auth()

  return (
    <div className='w-full flex flex-col gap-y-4'>
      <section>
        <GeneralCard session={session} />
      </section>
      <section>
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
              <Button className='w-[250px] flex gap-x-2 bg-destructive hover:bg-destructive/80 dark:text-white'>
                <HeartCrack className='size-4' />
                Delete Account
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

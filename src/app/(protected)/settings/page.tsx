import { auth } from '@/auth'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { TriangleAlert, Save, Download, HeartCrack } from 'lucide-react'

export default async function SettingsPage() {
  const session = await auth()

  return (
    <div className='w-full flex flex-col gap-y-4'>
      <section>
        <Card className='p-0'>
          <CardHeader className='p-4'>
            <CardTitle className='font-normal'>General</CardTitle>
            <CardDescription>Update your personal information:</CardDescription>
          </CardHeader>
          <CardContent className='p-4 space-y-4'>
            <div className='space-y-2'>
              <Label>Your name:</Label>
              <Input defaultValue={session?.user?.name ?? ''} />
            </div>
            <div className='space-y-2'>
              <Label>Your email:</Label>
              <Input
                defaultValue={session?.user?.email ?? ''}
                disabled
              />
              <div className='flex gap-x-2 items-center w-full'>
                <TriangleAlert className='text-muted-foreground size-4' />
                <span className=' text-xs text-muted-foreground '>
                  Email address is managed by OAuth provider.
                </span>
              </div>
            </div>
          </CardContent>
          <CardFooter className='justify-end'>
            <Button className='flex gap-x-2 items-center'>
              <Save className='size-4' />
              Save
            </Button>
          </CardFooter>
        </Card>
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
              <Button className='w-[250px] flex gap-x-2'>
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

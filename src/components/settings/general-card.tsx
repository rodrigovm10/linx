'use client'

import { type User } from '@prisma/client'
import { useUpdateName } from '@/hooks/useUpdateName'

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
import { Button } from '@/components/ui/button'
import { TriangleAlert, Save, Loader } from 'lucide-react'

export function GeneralCard({ user }: { user?: User | null }) {
  const { isLoading, isSaveDisabled, handleChangeName, handleSaveData } = useUpdateName({ user })

  return (
    <Card className='p-0'>
      <CardHeader className='p-4'>
        <CardTitle className='font-normal'>General</CardTitle>
        <CardDescription>Update your personal information:</CardDescription>
      </CardHeader>
      <CardContent className='p-4 space-y-4'>
        <div className='space-y-2'>
          <Label>Your name:</Label>
          <Input
            defaultValue={user?.name ?? ''}
            onChange={handleChangeName}
          />
        </div>
        <div className='space-y-2'>
          <Label>Your email:</Label>
          <Input
            defaultValue={user?.email ?? ''}
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
        <Button
          className='flex gap-x-2 items-center'
          disabled={isSaveDisabled}
          onClick={handleSaveData}
        >
          {isLoading && <Loader className='size-4 animate-spin mr-2' />}
          {!isLoading && <Save className='size-4' />}
          {isLoading ? 'Saving...' : 'Save'}
        </Button>
      </CardFooter>
    </Card>
  )
}

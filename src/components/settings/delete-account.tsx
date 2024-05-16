'use client'

import { cn } from '@/lib/utils'
import { type Session } from 'next-auth'
import { deleteAccount } from '@/server/actions/user'
import { handleSignOut } from '@/server/actions/sign-out'

import { toast } from 'sonner'
import { useState } from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
  DialogHeader
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { HeartCrack, Loader } from 'lucide-react'

export function DeleteAccount({ session }: { session?: Session | null }) {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isDeleteButtonDisabled, setIsDeleteButtonDisabled] = useState(true)

  const handleDeleteLink = async () => {
    try {
      setIsLoading(true)
      const result = await deleteAccount({ userId: session?.user.id })
      const { error, success } = result

      if (error) {
        toast.error(error)
        return
      }

      toast.success(success)

      setOpen(false)
      await handleSignOut()
    } catch (err) {
      toast.error('An unexpected error has ocurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChangeValidateEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value

    if (!value) {
      setIsDeleteButtonDisabled(true)
    }

    if (value === session?.user.email) {
      setIsDeleteButtonDisabled(false)
    } else {
      setIsDeleteButtonDisabled(true)
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <Button className='w-[250px] flex gap-x-2 bg-destructive hover:bg-destructive/80 dark:text-white'>
          <HeartCrack className='size-4' />
          Delete Account
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Account</DialogTitle>
          <DialogDescription className=''>
            <span className='text-red-500'>This action cannot be undone. </span> This will
            permanently delete your account and remove all links from our servers.
          </DialogDescription>
        </DialogHeader>
        <p className='-mb-5'>To confirm, type your email address: </p>
        <p>{session?.user.email}</p>
        <Input onChange={handleChangeValidateEmail} />
        <DialogFooter>
          <DialogClose>
            <Button
              disabled={isLoading}
              variant={'ghost'}
              type='button'
            >
              Cancel
            </Button>
          </DialogClose>
          <Button
            className={cn('bg-destructive text-white hover:bg-destructive/70')}
            disabled={isDeleteButtonDisabled}
            onClick={handleDeleteLink}
          >
            {isLoading && <Loader className='size-4 animate-spin mr-2' />}
            {isLoading && 'Deleting...'} {!isLoading && 'Delete account'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

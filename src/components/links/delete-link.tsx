'use client'

import { toast } from 'sonner'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { type Links } from '@prisma/client'

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
import { Loader, Trash } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { deleteLink } from '@/server/actions/links'

export function DeleteLink({ link }: { link: Links }) {
  const [isLoading, setIsLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [isDeleteButtonDisabled, setIsDeleteButtonDisabled] = useState(true)

  const handleDeleteLink = async () => {
    try {
      setIsLoading(true)
      const result = await deleteLink(link.id)
      const { error, shortLink } = result

      if (error) {
        toast.error(error)
        return
      }

      toast.success('Link deleted successfully.', {
        description: `The link /${shortLink} has been deleted.`,
        duration: 3000
      })

      setOpen(false)
    } catch (err) {
      toast.error('An unexpected error has ocurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChangeValidateShortLink = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value

    if (value === link.shortLink) {
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
        <Trash className='size-4 hover:opacity-70 cursor-pointer' />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete /{link.shortLink}</DialogTitle>
          <DialogDescription className='text-red-500'>
            The link will be permanently removed. This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <p>Type {link.shortLink}:</p>
        <Input onChange={handleChangeValidateShortLink} />
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
            onClick={handleDeleteLink}
            className={cn(
              isDeleteButtonDisabled && 'cursor-not-allowed',
              'bg-destructive text-white hover:bg-destructive/70'
            )}
            disabled={isDeleteButtonDisabled}
          >
            {isLoading && <Loader className='size-4 animate-spin mr-2' />}
            {!isLoading && <Trash className='size-4 mr-2 ' />}
            {isLoading && 'Deleting...'} {!isLoading && 'Delete link'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

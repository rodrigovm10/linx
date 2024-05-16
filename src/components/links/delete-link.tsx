'use client'

import { cn } from '@/lib/utils'
import { type Links } from '@/types/link.type'

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
import { useDeleteLink } from '@/hooks/useDeleteLink'

export function DeleteLink({ link }: { link: Links }) {
  const {
    open,
    isLoading,
    isDeleteButtonDisabled,
    setOpen,
    handleChangeValidateShortLink,
    handleDeleteLink
  } = useDeleteLink({ link })

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

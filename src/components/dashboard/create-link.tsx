'use client'

import { generateRandomLink } from '@/lib/utils'
import { useCreateLink } from '@/hooks/useCreateLink'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Loader, Plus, Link } from 'lucide-react'

export function CreateLink() {
  const { isLoading, open, form, setOpen, onSubmit } = useCreateLink()

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <Button>
          <Plus className='size-4' /> <span>Create link</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new link</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-5'
          >
            <FormField
              control={form.control}
              name='link'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Link</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder='https://'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='text-red-700' />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='shortLink'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Short Link</FormLabel>
                  <FormControl>
                    <div className='flex gap-x-4'>
                      <Input
                        disabled={isLoading}
                        placeholder='myShortLink'
                        {...field}
                      />
                      <Button
                        onClick={event => {
                          generateRandomLink({ form, event })
                        }}
                      >
                        Generate random
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage className='text-red-700' />
                </FormItem>
              )}
            />
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
              <Button type='submit'>
                {isLoading && <Loader className='size-4 animate-spin mr-2' />}
                {!isLoading && <Link className='size-4 mr-2 ' />}
                Create Link
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

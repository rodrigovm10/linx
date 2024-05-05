'use client'

import { type z } from 'zod'
import { toast } from 'sonner'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { generateRandomLink } from '@/lib/utils'
import { createLink } from '@/server/actions/links'
import { zodResolver } from '@hookform/resolvers/zod'
import { createLinkSchema } from '@/server/schemas/create-link'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function CreateLink() {
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const form = useForm<z.infer<typeof createLinkSchema>>({
    resolver: zodResolver(createLinkSchema),
    defaultValues: {
      link: '',
      shortLink: ''
    }
  })

  const onSubmit = async (values: z.infer<typeof createLinkSchema>) => {
    if (values.shortLink === values.link) {
      setLoading(false)
      return
    }

    try {
      setLoading(true)
      const result = await createLink(values)
      const { error, limit } = result

      if (error && limit) {
        toast.error(error)
      }

      toast.success('Link created successfully', {
        description: `Url: https://${process.env.NEXT_URL_DEV}/${values.shortLink}`,
        duration: 10000,
        closeButton: true
      })

      form.reset()
      setOpen(false)
    } catch (err) {
      toast.error('An unexpected error has ocurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }
  return (
    <AlertDialog
      open={open}
      onOpenChange={setOpen}
    >
      <AlertDialogTrigger>
        <Button>
          <Plus /> <span>Create link</span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Create a new link</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
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
                      disabled={loading}
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
                        disabled={loading}
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
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <Button type='submit'>Create Link</Button>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  )
}

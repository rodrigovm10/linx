'use client'

import { type z } from 'zod'
import { toast } from 'sonner'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { createLink } from '@/server/actions/links'
import { zodResolver } from '@hookform/resolvers/zod'
import { createLinkSchema } from '@/server/schemas/create-link'

export function useCreateLink() {
  const [isLoading, setIsLoading] = useState(false)
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
      setIsLoading(false)
      return
    }

    try {
      setIsLoading(true)
      const result = await createLink(values)
      const { error, limit } = result

      if (error && limit) {
        toast.error(error)
      }

      toast.success('Link created successfully', {
        description: `Url: https://${process.env.NEXT_URL}/${values.shortLink}`,
        duration: 10000,
        closeButton: true
      })

      form.reset()
      setOpen(false)
    } catch (err) {
      toast.error('An unexpected error has ocurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, open, form, setOpen, onSubmit }
}

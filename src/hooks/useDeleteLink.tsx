'use client'

import { toast } from 'sonner'
import { useState } from 'react'
import { type Links } from '@prisma/client'

import { deleteLink } from '@/server/actions/links'

export function useDeleteLink({ link }: { link: Links }) {
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

  return {
    isLoading,
    isDeleteButtonDisabled,
    open,
    setOpen,
    handleDeleteLink,
    handleChangeValidateShortLink
  }
}

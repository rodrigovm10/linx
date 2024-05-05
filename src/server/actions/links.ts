'use server'

import type z from 'zod'
import { auth } from '@/auth'
import { db } from '@/server/db/db'
import { type createLinkSchema } from '@/server/schemas/create-link'
import { revalidatePath } from 'next/cache'

export const createLink = async (values: z.infer<typeof createLinkSchema>) => {
  const currentUser = await auth()

  if (!currentUser) {
    return { error: 'Not authenticated. Please log in first.' }
  }

  const countLinks = await db.links.count({
    where: {
      userId: currentUser.user?.id
    }
  })

  console.log(countLinks)
  const limitLinks = currentUser.user.limitLinks

  if (countLinks >= limitLinks) {
    return {
      limit: true,
      error: `You have reached the limit of ${limitLinks} links.`
    }
  }

  const newLink = await db.links.create({
    data: {
      url: values.link,
      shortLink: values.shortLink,
      userId: currentUser.user.id
    }
  })

  revalidatePath('/')
  revalidatePath('/dashboard')

  return { limit: false, linkId: newLink.id }
}
'use server'

import { revalidatePath } from 'next/cache'

import type z from 'zod'
import { auth } from '@/auth'
import { db } from '@/server/db/db'
import { type createLinkSchema } from '@/server/schemas/create-link'

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

export const deleteLink = async (linkId: string) => {
  const currentUser = await auth()

  if (!currentUser) {
    return { error: 'Not authenticated. Please log in first.' }
  }

  const result = await db.links.delete({
    where: {
      id: linkId
    }
  })

  if (!result) {
    return { error: 'Link not deleted. Please try again.' }
  }

  revalidatePath('/')
  revalidatePath('/dashboard')

  return { shortLink: result.shortLink }
}

export const downloadLinks = async () => {
  const currentUser = await auth()

  if (!currentUser) {
    return { error: 'Not authenticated. Please log in first.' }
  }

  const links = await db.links.findMany({
    where: {
      userId: currentUser.user.id
    }
  })

  return links.map(link => {
    const { url, shortLink, createAt } = link
    const linkShortened = `https://linx-lac-six.vercel.app/${shortLink}`

    return { url, shortLink, createAt, linkShortened } satisfies {
      url: string
      shortLink: string
      linkShortened: string
      createAt: Date
    }
  })
}

import { db } from '@/server/db/db'
import { auth } from '@/auth'
import { type Links } from '@prisma/client'

/**
 * Get all the links by the user id.
 * Authentication required.
 * @type {string}
 */

interface GetAllLinksReturnProps {
  links?: Links[]
  error?: string
}
export const getAllLinks = async ({
  id
}: {
  id?: string
}): Promise<GetAllLinksReturnProps | null> => {
  const currentUser = await auth()

  if (!currentUser) {
    return null
  }

  try {
    const links = await db.links.findMany({
      where: {
        userId: id
      }
    })

    if (links.length === 0) return { error: 'The user has not links created ' }

    return { links }
  } catch (error) {
    console.error('Error while fetching links', error)
    throw error
  }
}

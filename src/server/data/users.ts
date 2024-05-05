import { db } from '@/server/db/db'

export const getUserById = async ({ id }: { id?: string }) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id
      }
    })

    if (!user) return null

    return user
  } catch (err) {}
}

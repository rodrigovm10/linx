'use server'

import { auth } from '@/auth'
import { db } from '@/server/db/db'
import { revalidatePath } from 'next/cache'

interface UpdateUserNameProps {
  userId?: string
  newName: string
}
export const updateUserName = async ({ userId, newName }: UpdateUserNameProps) => {
  const currentUser = await auth()

  if (!currentUser) {
    return { error: 'Not authenticated. Please log in first.' }
  }

  if (!newName) {
    return { error: 'New name must be obligatory.' }
  }

  const result = await db.user.update({
    where: {
      id: userId
    },
    data: {
      name: newName
    }
  })

  if (!result) {
    return { error: 'User not updated. Please try again.' }
  }

  revalidatePath('/')
  revalidatePath('/dashboard')
  return { newName: result.name }
}

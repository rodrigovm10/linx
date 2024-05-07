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
    return { error: 'User name cannot not be updated. Please try again.' }
  }

  revalidatePath('/')
  revalidatePath('/dashboard')
  return { newName: result.name }
}

export const deleteAccount = async ({ userId }: { userId?: string }) => {
  const currentUser = await auth()

  if (!currentUser) {
    return { error: 'Not authenticated. Please log in first.' }
  }

  if (!userId) {
    return { error: 'User id must be obligatory.' }
  }

  const result = await db.user.delete({
    where: {
      id: userId
    }
  })

  if (!result) {
    return { error: 'User cannot be deleted. Please try again.' }
  }

  revalidatePath('/')
  return { success: 'Your account was deleted.' }
}

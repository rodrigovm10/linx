'use client'

import { LogOut as IconLogOut } from 'lucide-react'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { toast } from 'sonner'
import { handleSignOut } from '@/server/actions/sign-out'

export function LogOut() {
  const handleLogOut = async () => {
    toast.promise(handleSignOut, {
      loading: 'Signing out...',
      error: 'Failed to sign out. Please try again'
    })
  }
  return (
    <DropdownMenuItem
      onClick={handleLogOut}
      className='space-x-2'
    >
      <IconLogOut className='size-4' />
      <span>Log out</span>
    </DropdownMenuItem>
  )
}

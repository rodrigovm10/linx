import Link from 'next/link'
import { auth } from '@/auth'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { LogOut } from '@/components/auth/log-out'
import { Home, LayoutDashboard, Settings } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const USER_OPTIONS = [
  {
    id: 1,
    text: 'Home',
    icon: <Home className='size-4' />,
    href: '/'
  },
  {
    id: 2,
    text: 'Dashboard',
    icon: <LayoutDashboard className='size-4' />,
    href: '/dashboard'
  },
  {
    id: 3,
    text: 'Settings',
    icon: <Settings className='size-4' />,
    href: '/settings'
  }
]

export async function UserButton() {
  const session = await auth()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage
            src={session?.user?.image ?? ''}
            alt={`${session?.user?.name} github account image`}
          />
          <AvatarFallback>{session?.user?.name?.toUpperCase().charAt(0)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <span className='block font-normal'>{session?.user?.name}</span>
          <span className='text-xs opacity-80 font-normal'>{session?.user?.email}</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {USER_OPTIONS.map(option => (
          <Link
            href={option.href}
            key={option.id}
          >
            <DropdownMenuItem className='flex gap-x-2'>
              {option.icon}
              <span>{option.text}</span>
            </DropdownMenuItem>
          </Link>
        ))}
        <LogOut />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

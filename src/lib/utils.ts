import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface GenerateRandomLinkProps {
  form: any
  event: any
}

export const generateRandomLink = ({ form, event }: GenerateRandomLinkProps) => {
  event.preventDefault()
  const characteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let result = ''
  for (let i = 0; i < 5; i++) {
    const index = Math.floor(Math.random() * characteres.length)
    result += characteres.charAt(index)
  }
  form.setValue('shortLink', result.toLocaleLowerCase())
}

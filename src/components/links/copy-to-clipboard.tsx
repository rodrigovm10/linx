'use client'

import { type Links } from '@prisma/client'

import { toast } from 'sonner'
import { Copy } from 'lucide-react'

export function CopyToClipboard({ link }: { link: Links }) {
  const handleCopyToClipboard = () => {
    if (!navigator.clipboard) {
      return { error: 'Clipboard is not supported' }
    }

    try {
      toast.success('Link copy to clipboard!', {
        description: `https://linx-lac-six.vercel.app/${link.shortLink}`
      })
      navigator.clipboard.writeText(`https://linx-lac-six.vercel.app/${link.shortLink}`)
    } catch (err) {
      toast.success('Failed to copy')
    }
  }

  return (
    <button onClick={handleCopyToClipboard}>
      <Copy className='size-4 hover:opacity-70' />
    </button>
  )
}

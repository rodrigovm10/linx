'use client'

import { type Links } from '@prisma/client'

import { toast } from 'sonner'
import { Copy } from 'lucide-react'

export function CopyToClipboard({ link }: { link: Links }) {
  const URL = `${process.env.NEXT_URL}`
  const handleCopyToClipboard = () => {
    if (!navigator.clipboard) {
      return { error: 'Clipboard is not supported' }
    }

    try {
      toast.success('Link copy to clipboard!', {
        description: `${URL}${link.shortLink}`
      })
      navigator.clipboard.writeText(`${URL}${link.shortLink}`)
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

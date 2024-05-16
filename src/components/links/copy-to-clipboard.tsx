'use client'

import QRCode from 'react-qr-code'
import { type Links } from '@prisma/client'

import { toast } from 'sonner'
import { Copy } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
  DialogHeader
} from '@/components/ui/dialog'
import { Button } from '../ui/button'

export function CopyToClipboard({ link }: { link: Links }) {
  const LINK_TO_COPY = `https://linx-lac-six.vercel.app/${link.shortLink}`

  const handleCopyToClipboard = () => {
    if (!navigator.clipboard) {
      return { error: 'Clipboard is not supported' }
    }
    try {
      toast.success('Link copy to clipboard!', {
        description: LINK_TO_COPY
      })
      navigator.clipboard.writeText(LINK_TO_COPY)
    } catch (err) {
      toast.success('Failed to copy')
    }
  }

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Copy className='size-4 hover:opacity-70' />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={handleCopyToClipboard}>Copy to clipboard</DropdownMenuItem>
            <DropdownMenuItem>
              <DialogTrigger>Generate QR Code</DialogTrigger>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </DropdownMenu>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Copy QR Code</DialogTitle>
          <DialogDescription className='flex justify-center'>
            <div className='rounded-lg border border-neutral-100 p-2 shadow-md dark:border-neutral-800'>
              <QRCode
                id='qr-code'
                size={128}
                style={{ height: 'auto' }}
                value={LINK_TO_COPY}
                viewBox={'0 0 128 128'}
              />
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>
            <Button
              variant={'outline'}
              type='button'
            >
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

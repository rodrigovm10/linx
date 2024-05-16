'use client'

import { Download } from 'lucide-react'
import { Button } from '../ui/button'
import { downloadLinks } from '@/server/actions/links'
import { useState } from 'react'
import { toast } from 'sonner'

export function ExportLinks() {
  const [isLoading, setIsLoading] = useState(false)

  const handleClickDownloadLinks = async () => {
    setIsLoading(true)
    const links = await downloadLinks()
    console.log(links)
    try {
      const blob = new Blob([JSON.stringify(links)], {
        type: 'application/json'
      })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'linx.json'
      a.click()
      URL.revokeObjectURL(url)
      toast.success('Links exported succesfully.')
    } catch (error) {
      toast.success('Failed to download links.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      disabled={isLoading}
      onClick={handleClickDownloadLinks}
      variant='outline'
      className='w-[250px] flex gap-x-2 justify-center'
    >
      <Download className='size-4' />
      Export links
    </Button>
  )
}

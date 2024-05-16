import { type Links } from '@/types/link.type'

import { BarChart } from 'lucide-react'
import { DeleteLink } from '@/components/links/delete-link'
import { CopyToClipboard } from '@/components/links/copy-to-clipboard'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export function CardLink({ link }: { link: Links }) {
  return (
    <Card>
      <CardHeader>
        <div className='flex flex-row justify-between'>
          <CardTitle className='inline-block'>/{link.shortLink}</CardTitle>
          <div className='flex gap-x-2 items-center'>
            <p className='text-xs flex items-center'>
              <BarChart className='size-4' />
              {link.clicks} clicks
            </p>
            <CopyToClipboard link={link} />
            <DeleteLink link={link} />
          </div>
        </div>
        <CardDescription>{link.url}</CardDescription>
      </CardHeader>
      <CardFooter className='text-muted-foreground text-xs'>
        {link.createAt.toISOString().split('T')[0]}
      </CardFooter>
    </Card>
  )
}

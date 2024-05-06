import { auth } from '@/auth'
import { cn } from '@/lib/utils'
import { getAllLinks } from '@/server/data/links'

import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { buttonVariants } from '@/components/ui/button'
import { CreateLink } from '@/components/dashboard/create-link'
import { TooltipWrapper } from '@/components/common/tooltip-wrapper'

import { CardLink } from '@/components/dashboard/card-link'

export default async function DashboardPage() {
  const user = await auth()
  const links = await getAllLinks({ id: user?.user.id })

  return (
    <section className='w-full'>
      <section className='mb-3 flex w-full items-center space-x-2 justify-between'>
        <div className='relative'>
          <Search className='absolute left-2 top-1/2 -translate-y-1/2 size-4 text-muted-foreground' />
          <Input
            placeholder='Search Links'
            className='pl-8'
          />
        </div>
        <div className='flex gap-x-2'>
          <TooltipWrapper tooltipText='You have created 00 of 30 links.'>
            <span
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'text-muted-foreground font-normal cursor-auto'
              )}
            >
              00/30
            </span>
          </TooltipWrapper>
          <CreateLink />
        </div>
      </section>
      <section className='grid gap-3 lg:grid-cols-2'>
        {links?.links?.map(link => (
          <CardLink
            link={link}
            key={link.id}
          />
        ))}
      </section>
    </section>
  )
}

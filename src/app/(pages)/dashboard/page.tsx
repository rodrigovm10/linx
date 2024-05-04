import { TooltipWrapper } from '@/components/common/tooltip-wrapper'
import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { Search, Plus } from 'lucide-react'

export default async function DashboardPage() {
  return (
    <section className='w-full '>
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
          <Button>
            <Plus /> <span>Create link</span>
          </Button>
        </div>
      </section>
    </section>
  )
}

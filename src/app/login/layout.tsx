import { cn } from '@/lib/utils'

interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <main className={cn('mt-20 flex w-full flex-col items-center justify-center space-y-8')}>
        <div className='flex flex-col items-center justify-center'>{children}</div>
      </main>
    </>
  )
}

import { LoaderIcon } from 'lucide-react'

export default function Loading() {
  return (
    <div className='flex justify-center w-full opacity-80'>
      <div className='flex gap-x-4'>
        <LoaderIcon className='animate-spin' />
        <p>Loading...</p>
      </div>
    </div>
  )
}

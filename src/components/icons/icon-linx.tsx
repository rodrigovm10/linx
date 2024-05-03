import Image from 'next/image'

import icon from '../../../public/assets/icon.png'

export function IconLinx({ className }: { className?: string }) {
  return (
    <Image
      src={icon.src}
      alt='Linx icon'
      width={28}
      height={28}
      className={className}
    />
  )
}

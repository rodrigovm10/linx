import type { Metadata } from 'next'

import { MenuBar } from '@/components/layout/menu-bar'

export const metadata: Metadata = {
  title: 'Linx - Dashboard',
  description: 'Dashboard to manage URL user',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/assets/icon.png'
    }
  ]
}

export default function PagesLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className=''>
      <MenuBar />
      {children}
    </main>
  )
}

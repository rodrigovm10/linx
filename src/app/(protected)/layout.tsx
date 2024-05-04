import { MenuBar } from '@/components/layout/menu-bar'

export default function ProtectedLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <MenuBar />
      <main className='container my-[68px] flex w-full items-center'>{children}</main>
    </>
  )
}

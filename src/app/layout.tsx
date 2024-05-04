import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import { Toaster } from 'sonner'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ThemeProvider } from '@/components/themes/theme-provider'
const font = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Linx',
  description: 'An URL shortener open-source',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/assets/icon.png'
    }
  ]
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          disableTransitionOnChange
        >
          <Header />
          <main className='container my-[68px] flex w-full items-center'>{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

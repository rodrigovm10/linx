import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
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
      <link
        rel='icon'
        href='/favicon.ico'
        sizes='any'
      />
      <body className={font.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

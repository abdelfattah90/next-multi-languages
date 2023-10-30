import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import { ThemeProvider } from '@/context/ThemeContext'
import { LanguageProvider } from '@/context/LanguageContext'
import './globals.css'

const cairo = Cairo({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Multi languages',
  description: 'next-multi-languages-app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={cairo.className}>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import { Providers } from './providers'
import { Header } from './header'
import './globals.css'

const notoSansKr = Noto_Sans_KR({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio under construction',
  description: "freeislet's Portfolio under construction",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={`flex flex-col min-h-screen ${notoSansKr.className}`}>
        <Providers>
          <Header />
          <main className="flex-grow flex flex-col items-center">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}

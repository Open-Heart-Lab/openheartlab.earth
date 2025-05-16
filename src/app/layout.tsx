import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Header } from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Open Heart Lab',
  description: 'Opening hearts to extraordinary love.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full`}>
        <div className="min-h-screen flex flex-col">
          {/* HEADER */}
          <Header />

          {/* MAIN CONTENT */}
          <main className="flex-grow">{children}</main>

          {/* FOOTER */}
          <footer className="text-sm py-6 border-t">
            <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
              <span>&copy; {new Date().getFullYear()} Open Heart Lab LLC</span>
              <div className="flex gap-4">
                <Link href="/terms" className="hover:text-pink-600">Terms</Link>
                <Link href="/privacy" className="hover:text-pink-600">Privacy</Link>
                <Link href="/refund" className="hover:text-pink-600">Refund</Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
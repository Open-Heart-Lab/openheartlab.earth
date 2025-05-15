import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

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
          <header className="bg-white border-b shadow-sm">
            <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
              <Link href="/" className="text-xl font-bold text-pink-700 hover:text-pink-600">
                Open Heart Lab
              </Link>
              <nav className="flex gap-6 text-sm text-gray-700">
                <Link href="/contact" className="hover:text-pink-600">Contact</Link>
                <Link href="/terms" className="hover:text-pink-600">Terms</Link>
                <Link href="/privacy" className="hover:text-pink-600">Privacy</Link>
                <Link href="/refund" className="hover:text-pink-600">Refund</Link>
              </nav>
            </div>
          </header>

          {/* MAIN CONTENT */}
          <main className="flex-grow">{children}</main>

          {/* FOOTER */}
          <footer className="bg-pink-50 text-sm text-gray-600 py-6 border-t">
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
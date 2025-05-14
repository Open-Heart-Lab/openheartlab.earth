import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

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
          <main className="flex-grow">{children}</main>
          <footer className="bg-pink-50 text-sm text-gray-600 py-6 border-t">
            <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
              <span>&copy; {new Date().getFullYear()} Open Heart Lab LLC</span>
              <div className="flex gap-4">
                <a href="/terms" className="hover:text-pink-600">Terms</a>
                <a href="/privacy" className="hover:text-pink-600">Privacy</a>
                <a href="/refund" className="hover:text-pink-600">Refund Policy</a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
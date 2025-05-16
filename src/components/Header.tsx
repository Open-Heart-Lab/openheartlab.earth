'use client'

import Link from 'next/link'
import { useScrollSpy } from '@/hooks/useScrollSpy'

export function Header() {
  const sectionIds = ['about', 'offerings', 'contact']
  const activeId = useScrollSpy(sectionIds)

  return (
    <header className="sticky top-0 z-50 border-b shadow-sm backdrop-blur bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-pink-700 hover:text-pink-600">
          Open Heart Lab
        </Link>
        <nav className="flex gap-6 text-sm">
          <Link
            href="/#about"
            className={`hover:text-pink-600 ${activeId === 'about' ? 'text-pink-600 font-semibold' : ''}`}
          >
            About
          </Link>
          <Link
            href="/#offerings"
            className={`hover:text-pink-600 ${activeId === 'offerings' ? 'text-pink-600 font-semibold' : ''}`}
          >
            Offerings
          </Link>
          <Link href="/contact" className="hover:text-pink-600">Contact</Link>
          <Link href="/terms" className="hover:text-pink-600">Terms</Link>
          <Link href="/privacy" className="hover:text-pink-600">Privacy</Link>
          <Link href="/refund" className="hover:text-pink-600">Refund</Link>
        </nav>
      </div>
    </header>
  )
}
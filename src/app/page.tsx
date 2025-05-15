'use client'

import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="bg-white text-gray-800">
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-pink-700 mb-4 leading-tight">
          Opening hearts to <br className="hidden md:block" /> extraordinary love
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-6">
          Personal transformation and conscious relationships through practical thoughtware and heartware upgrades
        </p>
      </section>
    </main>
  )
}
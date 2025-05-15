'use client'

import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="bg-white text-gray-800">

      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-pink-700 mb-4 leading-tight">
          Opening hearts to <br className="hidden md:block" /> extraordinary love
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-6">
          Personal transformation and conscious relationships through practical thoughtware and heartware upgrades
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-28 min-h-[100vh] pt-12 px-6 py-20 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-pink-700 mb-4">What is Open Heart Lab?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Open Heart Lab is a space of emotional alchemy, relational transformation, and radical self-awareness.
            It exists to support humans in experiencing <em>extraordinary love</em> — with themselves, with others, and with life itself.
          </p>
          <p className="text-base text-gray-600">
            The Lab weaves together frameworks and practices from thoughtware upgrades and heartware development —
            blending mental clarity with emotional depth, and intentional relating with inner sovereignty.
          </p>
        </div>
      </section>

      {/* Offerings Section */}
      <section id="offerings" className="scroll-mt-28 min-h-[100vh] pt-12 px-6 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-pink-700 mb-6">Offerings</h2>
          <p className="text-gray-600 text-lg">
            Coming soon: Workshops, immersive sessions, and tools to deepen your connection to self, others, and life.
          </p>
        </div>
      </section>

    </main>
  )
}
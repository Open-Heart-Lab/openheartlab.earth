'use client'

import Script from 'next/script'

export default function ContactPage() {
  return (
    <>
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined' && 'Tally' in window) {
            // Use a typed approach without "any"
            (window as unknown as { Tally: { loadEmbeds: () => void } }).Tally.loadEmbeds()
          }
        }}
      />

      <main className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-pink-700 mb-6">Contact Us</h1>
        <p className="text-gray-700 mb-8">
          Have questions or want to connect? Use the form below and we’ll get back to you soon.
        </p>

        <div className="relative overflow-hidden rounded-xl shadow min-h-[300px]">
          <iframe
            data-tally-src="https://tally.so/embed/w4dXjd?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Contact Form"
          ></iframe>
        </div>
      </main>
    </>
  )
}
'use client'

import { useEffect } from 'react'

export default function ContactPage() {
  useEffect(() => {
    const scriptId = 'tally-widget'
    if (!document.getElementById(scriptId)) {
      const s = document.createElement('script')
      s.id = scriptId
      s.src = 'https://tally.so/widgets/embed.js'
      s.onload = () => {
        if (window.Tally) window.Tally.loadEmbeds()
      }
      document.body.appendChild(s)
    } else {
      if (window.Tally) window.Tally.loadEmbeds()
    }
  }, [])

  return (
    <main className="min-h-screen px-6 py-20 text-center">
      <h1 className="text-3xl font-bold text-pink-700 mb-6">Contact Us</h1>
      <p className="text-gray-700 mb-8">
        Have questions or want to connect? Use the form below and we’ll get back to you soon.
      </p>
      <iframe
        data-tally-src="https://tally.so/embed/w4dXjd?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="228"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Contact form"
        className="w-full max-w-xl mx-auto"
      ></iframe>
    </main>
  )
}
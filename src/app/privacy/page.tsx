export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-4xl font-bold text-pink-700 mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Effective Date: May 11, 2025</p>

      <p className="mb-6">
        At Open Heart Lab LLC, your privacy is important to us. This policy explains how we collect, use, and protect your personal information when you interact with our website or services.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We may collect your name, email address, and any other information you provide when you fill out a contact form, sign up for an event, or make a purchase.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>To provide and improve our services</li>
        <li>To respond to your inquiries</li>
        <li>To process transactions via Stripe or other platforms</li>
        <li>To send you updates and offers (only if you opt in)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Sharing Your Information</h2>
      <p className="mb-4">
        We do not sell your personal information. We may share data with trusted third-party services (e.g., Stripe, Tally, email platforms) as needed to run our business.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Cookies</h2>
      <p className="mb-4">
        This site may use cookies or similar technologies to improve your browsing experience. You can disable cookies through your browser settings.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Data Security</h2>
      <p className="mb-4">
        We implement appropriate technical and organizational measures to protect your data, but we cannot guarantee absolute security.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Your Rights</h2>
      <p className="mb-4">
        You may request access to, correction of, or deletion of your personal information at any time by contacting us through our{' '}
        <a href="/contact" className="text-pink-600 hover:underline">contact form</a>.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this policy occasionally. The latest version will always be available on this page.
      </p>
    </main>
  )
}
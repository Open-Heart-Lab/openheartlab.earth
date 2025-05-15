export default function RefundPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-4xl font-bold text-pink-700 mb-6">Refund and Cancellation Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Effective Date: May 11, 2025</p>

      <p className="mb-6">
        We believe in the value of the work we offer and are committed to creating supportive, respectful experiences for our clients and community. This page outlines our policies regarding refunds and cancellations.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Coaching Sessions and Workshops</h2>
      <p className="mb-4">
        Cancellations made at least 24 hours in advance are eligible for a full refund or may be rescheduled. No-shows or cancellations made less than 24 hours before the scheduled session are not eligible for refunds.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. Digital Products or Events</h2>
      <p className="mb-4">
        Due to the nature of digital products and downloadable content, all sales are final once access has been granted or content delivered.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Exceptional Circumstances</h2>
      <p className="mb-4">
        If you experience a medical emergency or a serious issue that prevents you from attending or accessing a service, please reach out through our{' '}
        <a href="/contact" className="text-pink-600 hover:underline">contact form</a>. We will review requests on a case-by-case basis.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. How to Request a Refund</h2>
      <p className="mb-4">
        To request a refund, please submit a message through our{' '}
        <a href="/contact" className="text-pink-600 hover:underline">contact form</a>. Include your full name, the date of your session or purchase, and a brief reason for the request. We aim to respond within 5 business days.
      </p>
    </main>
  )
}
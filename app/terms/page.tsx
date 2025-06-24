import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="bg-orange-50 min-h-screen py-12 px-2 flex items-center justify-center">
      <section className="max-w-2xl w-full bg-white rounded-2xl shadow p-8 mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Terms of Service</h1>
        <div className="space-y-6 text-gray-700 text-base">
          <p>Welcome! Please read these terms to understand how you can use our apps. We keep things simple and human.</p>
          <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">1. Acceptance</h2>
          <p>By using our apps, you agree to these terms. If you don&apos;t agree, please don&apos;t use our services.</p>
          <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">2. Use of Our Apps</h2>
          <p>Our apps are for your personal, non-commercial use. Please use them kindly and respectfully.</p>
          <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">3. Subscriptions</h2>
          <p>Some features may require a subscription, managed securely through RevenueCat. You can manage or cancel anytime.</p>
          <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">4. Data & Privacy</h2>
          <p>We care about your privacy. Please see our <a href="/privacy" className="text-orange-600 underline">Privacy Policy</a> for details on how we handle your data.</p>
          <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">5. Limitations</h2>
          <p>Our apps are not intended for diagnosis or medical use. Please consult a professional for health advice.</p>
          <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">6. Contact</h2>
          <p>Questions or feedback? Email us at <a href="mailto:tangerinlabs@gmail.com" className="text-orange-600 underline">tangerinlabs@gmail.com</a>. We&apos;re here to help.</p>
        </div>
        <div className="flex flex-wrap gap-4 mt-10 text-sm">
          <Link href="/" className="text-white bg-orange-500 hover:bg-orange-600 rounded px-4 py-2 transition-colors">Home</Link>
          <a href="/privacy" className="text-orange-600 underline hover:text-orange-700">Privacy Policy</a>
        </div>
      </section>
    </div>
  );
} 
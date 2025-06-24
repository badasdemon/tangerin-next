export default function PrivacyPage() {
  return (
    <div className="bg-orange-50 min-h-screen py-12 px-2 flex items-center justify-center">
      <section className="max-w-2xl w-full bg-white rounded-2xl shadow p-8 mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Privacy Policy</h1>
        <div className="space-y-6 text-gray-700 text-base">
          <p>Welcome! We care deeply about your privacy and want you to feel safe using our apps. Here's how we handle your data, in plain language.</p>
          <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">1. Introduction</h2>
          <p>We're Tangerin Labs, a small team building soft, emotional tools. This policy explains what we collect and how we use it.</p>
          <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">2. What We Collect</h2>
          <p>We only collect what's needed to make our apps work and improve your experience. This may include your email, usage data, and preferences.</p>
          <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">3. How We Use It</h2>
          <p>Your data helps us personalize your experience, keep things running smoothly, and make our apps better. We never sell your data.</p>
          <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">4. Third-Party Services</h2>
          <p>We use trusted partners like Supabase (for backend), Google (for analytics), and RevenueCat (for subscriptions). They help us deliver features, but only access what's necessary.</p>
          <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">5. Your Rights</h2>
          <p>You can ask to see, update, or delete your data anytime. Just email us and we'll help.</p>
          <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">6. Contact</h2>
          <p>Questions or concerns? Email us at <a href="mailto:tangerinlabs@gmail.com" className="text-orange-600 underline">tangerinlabs@gmail.com</a>. We're here to help.</p>
        </div>
        <div className="flex flex-wrap gap-4 mt-10 text-sm">
          <a href="/" className="text-white bg-orange-500 hover:bg-orange-600 rounded px-4 py-2 transition-colors">Home</a>
          <a href="/terms" className="text-orange-600 underline hover:text-orange-700">Terms of Service</a>
        </div>
      </section>
    </div>
  );
} 
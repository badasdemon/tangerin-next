"use client";
import Link from "next/link";
import { Lusitana } from 'next/font/google';

const lusitana = Lusitana({ subsets: ['latin'], weight: ['700'] });

export default function IdolchatPrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="py-8 px-4 bg-white shadow-sm">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/apps/idolchat" className="text-purple-600 hover:text-purple-700 font-medium">
              ← Back to Idolchat
            </Link>
            <h1 className={`text-2xl font-bold text-gray-800 ${lusitana.className}`}>
              Idolchat Privacy Policy
            </h1>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 italic mb-8">Last updated: October 1, 2024</p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Information We Collect</h2>
            <p className="text-gray-700 mb-4">Idolchat collects the following information:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Account Information:</strong> Email address, display name, and profile picture when you sign up</li>
              <li><strong>Chat Data:</strong> Messages and conversations with AI characters</li>
              <li><strong>Usage Data:</strong> App usage statistics and preferences</li>
              <li><strong>Device Information:</strong> Device type, operating system, and app version</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Provide and improve our chat service</li>
              <li>Personalize your experience with AI characters</li>
              <li>Process subscription payments</li>
              <li>Send important service updates</li>
              <li>Analyze app performance and usage</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Storage and Security</h2>
            <p className="text-gray-700 mb-6">
              Your data is stored securely using industry-standard encryption. We use Supabase for data storage and RevenueCat for subscription management.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Third-Party Services</h2>
            <p className="text-gray-700 mb-4">We use the following third-party services:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Supabase:</strong> Database and authentication</li>
              <li><strong>RevenueCat:</strong> Subscription management</li>
              <li><strong>Apple:</strong> App Store and payment processing</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Delete your account and data</li>
              <li>Export your chat history</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">If you have questions about this Privacy Policy, please contact us at:</p>
            <p className="text-gray-700 mb-6">Email: tangerinlabs@gmail.com</p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm">© 2025 Tangerin Labs</p>
              <p className="text-sm text-gray-400">tangerinlabs@gmail.com</p>
              <p className="text-sm text-gray-400 mt-1">Kudus, Central Java,<br/>Indonesia. 59382</p>
            </div>
            <div className="flex space-x-6">
              <Link
                href="/apps/idolchat/terms"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms
              </Link>
              <Link
                href="/apps/idolchat"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                Back to Idolchat
              </Link>
              <Link
                href="/"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                Homepage
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";
import Link from "next/link";
import { Lusitana } from 'next/font/google';

const lusitana = Lusitana({ subsets: ['latin'], weight: ['700'] });

export default function IdolchatTermsPage() {
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
              Idolchat Terms of Use
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

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-700 mb-6">
              By downloading, installing, or using Idolchat, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our app.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Description of Service</h2>
            <p className="text-gray-700 mb-6">
              Idolchat is a mobile application that allows users to chat with AI-powered characters. The service includes both free and premium subscription features.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Subscription Terms</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Auto-Renewable Subscriptions</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li><strong>Weekly Subscription:</strong> $2.99 per week</li>
              <li><strong>Monthly Subscription:</strong> $9.99 per month</li>
              <li><strong>Annual Subscription:</strong> $49.99 per year</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Subscription Management</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of the current period</li>
              <li>Your account will be charged for renewal within 24 hours prior to the end of the current period</li>
              <li>You can manage subscriptions and turn off auto-renewal in your Account Settings after purchase</li>
              <li>Any unused portion of a free trial period will be forfeited when you purchase a subscription</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">User Conduct</h2>
            <p className="text-gray-700 mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Use the service for any illegal or unauthorized purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the service</li>
              <li>Create inappropriate or offensive content</li>
              <li>Share your account with others</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Intellectual Property</h2>
            <p className="text-gray-700 mb-6">
              All content, features, and functionality of Idolchat are owned by us and are protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Privacy</h2>
            <p className="text-gray-700 mb-6">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 mb-6">
              To the maximum extent permitted by law, Idolchat shall not be liable for any indirect, incidental, special, consequential, or punitive damages.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Termination</h2>
            <p className="text-gray-700 mb-6">
              We may terminate or suspend your account at any time for violation of these terms or for any other reason at our discretion.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to Terms</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to modify these terms at any time. We will notify users of any material changes through the app or by email.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-4">If you have questions about these Terms of Use, please contact us at:</p>
            <p className="text-gray-700 mb-6">Email: tangerinlabs@gmail.com</p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Governing Law</h2>
            <p className="text-gray-700 mb-6">
              These terms are governed by and construed in accordance with the laws of Indonesia, without regard to conflict of law principles.
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
                href="/apps/idolchat/privacy"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy
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

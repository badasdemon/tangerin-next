"use client";
import Link from 'next/link';
import Image from 'next/image';

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Hero Section */}
      <section className="px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <Image
              src="/bloomieicon.webp"
              alt="Bloomie App Icon"
              width={80}
              height={80}
              className="mx-auto rounded-2xl shadow-lg"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Delete Your Bloomie Account
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We're sorry to see you go. Please note that deleting your account will permanently remove all your data, including photos, memories, and settings. This action cannot be undone.
          </p>
          
          {/* Warning Card */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-center mb-3">
              <div className="text-2xl mr-2">⚠️</div>
              <h3 className="text-lg font-semibold text-red-800">Important Warning</h3>
            </div>
            <p className="text-red-700 text-sm">
              All your photos, memories, and account data will be permanently deleted and cannot be recovered.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              className="px-8 py-4 bg-red-600 text-white font-semibold rounded-2xl shadow-lg hover:bg-red-700 transition-all duration-200 text-base w-full max-w-xs"
              onClick={() => {
                // TODO: Implement account deletion logic
                console.log('Delete account clicked');
              }}
            >
              Delete My Account
            </button>
            <Link
              href="/apps/bloomie"
              className="px-8 py-4 bg-gray-200 text-gray-800 font-semibold rounded-2xl shadow-lg hover:bg-gray-300 transition-all duration-200 text-base w-full max-w-xs text-center"
            >
              Cancel & Go Back
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 mb-4">
              Need help? Contact our support team before deleting your account.
            </p>
            <Link
              href="/apps/bloomie"
              className="text-purple-600 hover:text-purple-800 font-medium transition-colors duration-200"
            >
              ← Back to Bloomie Homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function BloomiePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Modal for full image view */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold p-2 rounded hover:bg-black/40 focus:outline-none"
            onClick={() => setModalOpen(false)}
            aria-label="Close"
          >
            &times;
          </button>
          <div className="max-w-full max-h-full flex items-center justify-center">
            {modalImg && (
              <Image
                src={modalImg}
                alt="Full screenshot"
                width={800}
                height={600}
                className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl border-4 border-white object-contain"
              />
            )}
          </div>
        </div>
      )}
      {/* Hero Section */}
      <section className="px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <Image
              src="/bloomieicon.webp"
              alt="Bloomie App Icon"
              width={120}
              height={120}
              className="mx-auto rounded-3xl shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Bloomie
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            They grow too fast. Capture a lovely moment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            <a
              href="https://play.google.com/store/apps/details?id=com.bloomie.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-semibold rounded-2xl shadow-lg hover:bg-gray-900 transition-all duration-200 text-base w-full max-w-xs"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Get it on Google Play
            </a>
            <a
              href="https://apps.apple.com/id/app/bloomie-journal-parenting-ai/id6747935168"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-semibold rounded-2xl shadow-lg hover:bg-gray-900 transition-all duration-200 text-base w-full max-w-xs"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download on the App Store
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why You&apos;ll Love Bloomie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Daily photo log
              </h3>
              <p className="text-gray-600">
                Capture precious moments every day with our gentle photo logging system
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50">
              <div className="text-4xl mb-4">🌈</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Mood & activity tagging
              </h3>
              <p className="text-gray-600">
                Tag moods and activities to create meaningful memories
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-teal-50">
              <div className="text-4xl mb-4">🧸</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Private & gentle
              </h3>
              <p className="text-gray-600">
                Your family&apos;s privacy is our priority with gentle, secure design
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-yellow-50 to-orange-50">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Cloud backup (Premium)
              </h3>
              <p className="text-gray-600">
                Never lose precious memories with secure cloud backup
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="px-4 py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Take a peek inside
          </h2>
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {[1,2,3,4,5].map((num) => (
              <button
                key={num}
                className="flex-shrink-0 w-56 md:w-80 h-96 bg-white rounded-2xl shadow-lg flex items-center justify-center overflow-hidden focus:outline-none"
                onClick={() => {
                  setModalImg(`/screenshot/ss${num}.jpg`);
                  setModalOpen(true);
                }}
                aria-label={`View screenshot ${num} full size`}
              >
                <Image
                  src={`/screenshot/ss${num}.jpg`}
                  alt={`Bloomie screenshot ${num}`}
                  width={320}
                  height={384}
                  className="object-contain w-full h-full"
                  priority={num === 1}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-xl md:text-2xl text-gray-700 italic leading-relaxed">
            &quot;Every time I open Bloomie, I remember why I started journaling — it feels soft, human, and real.&quot;
          </blockquote>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-4 py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Start capturing your baby&apos;s growth today.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            <a
              href="https://play.google.com/store/apps/details?id=com.bloomie.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-semibold rounded-2xl shadow-lg hover:bg-gray-900 transition-all duration-200 text-base w-full max-w-xs"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Get it on Google Play
            </a>
            <a
              href="https://apps.apple.com/id/app/bloomie-journal-parenting-ai/id6747935168"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-semibold rounded-2xl shadow-lg hover:bg-gray-900 transition-all duration-200 text-base w-full max-w-xs"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download on the App Store
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="px-4 py-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 Tangerin Labs. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
} 
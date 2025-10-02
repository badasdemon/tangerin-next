"use client";
import Image from "next/image";
import Link from "next/link";
import { Lusitana } from 'next/font/google';
import { useRef, useState, useEffect } from "react";

const lusitana = Lusitana({ subsets: ['latin'], weight: ['700'] });

export default function IdolchatPage() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const screenshots = [1,2,3,4,5,6,7,8];

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const onScroll = () => {
      const cardWidth = el.firstElementChild?.clientWidth || 1;
      const scrollLeft = el.scrollLeft;
      const idx = Math.round(scrollLeft / (cardWidth + 16)); // 16px gap
      setActiveIdx(Math.max(0, Math.min(screenshots.length - 1, idx)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [screenshots.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-16 px-4 min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-purple-200 via-pink-100 to-blue-100 overflow-hidden">
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-200/30 via-pink-100/20 to-blue-200/30" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
          {/* App Icon */}
          <div className="w-24 h-24 md:w-32 md:h-32 bg-white/80 rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-lg border-4 border-white/60">
            <Image
              src="/idolchaticon.png"
              alt="Idolchat App Icon"
              width={128}
              height={128}
              className="rounded-2xl"
              priority
            />
          </div>
          
          {/* Title and Subtitle */}
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-800 mb-6 leading-tight ${lusitana.className}`}>
            Idolchat
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Chat with your favorite AI characters. Create meaningful connections and explore endless conversations.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.idolchat.app"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-base w-full max-w-xs"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Get it on Google Play
            </a>
            <a
              href="https://apps.apple.com/id/app/idolchat-ai-characters/id6747960149"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-base w-full max-w-xs"
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
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-16">
            Why You&apos;ll Love Idolchat
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">AI-Powered Conversations</h3>
              <p className="text-gray-600 leading-relaxed">Chat with intelligent AI characters that understand and respond naturally.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Diverse Characters</h3>
              <p className="text-gray-600 leading-relaxed">Meet a variety of unique AI personalities and build meaningful connections.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🎭</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Immersive Experience</h3>
              <p className="text-gray-600 leading-relaxed">Enjoy rich, contextual conversations with characters that remember your interactions.</p>
            </div>
            
            {/* Feature 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Private & Secure</h3>
              <p className="text-gray-600 leading-relaxed">Your conversations are private and secure, with premium features for enhanced experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-16">
            Take a peek inside
          </h2>
          {/* Carousel for mobile, grid for md+ */}
          <div>
            <div
              ref={carouselRef}
              className="flex md:grid md:grid-cols-4 gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:mx-0 md:px-0 scrollbar-hide"
            >
              {screenshots.map((num) => (
                <div
                  key={num}
                  className="min-w-[90vw] max-w-xs md:min-w-0 md:max-w-none flex-shrink-0 snap-center flex justify-center"
                >
                  <div className="bg-white rounded-3xl shadow-xl p-4 transform hover:scale-105 transition-transform duration-300">
                    <Image
                      src={`/screenshotidolchat/idolchat${num}.webp`}
                      alt={`Idolchat App Screenshot ${num}`}
                      width={300}
                      height={600}
                      className="rounded-2xl object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* Dot indicator for mobile */}
            <div className="flex justify-center mt-6 gap-2 md:hidden">
              {screenshots.map((_, i) => (
                <span
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${i === activeIdx ? 'bg-purple-500 scale-110' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-12 md:p-16">
            <div className="text-6xl mb-6">💜</div>
            <blockquote className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed mb-6">
              &quot;Idolchat feels like having real conversations. The AI characters are so engaging and remember everything we talk about.&quot;
            </blockquote>
            <p className="text-gray-600 font-medium">— A happy Idolchat user</p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Ready to start chatting?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.idolchat.app"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-base w-full max-w-xs"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Get it on Google Play
            </a>
            <a
              href="https://apps.apple.com/id/app/idolchat-ai-characters/id6747960149"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-base w-full max-w-xs"
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
                href="/apps/idolchat/terms"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms
              </Link>
              <Link
                href="/"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

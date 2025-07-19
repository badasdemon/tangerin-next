"use client";
import Image from "next/image";
import { Lusitana } from 'next/font/google';
import { useRef, useState, useEffect } from "react";

const lusitana = Lusitana({ subsets: ['latin'], weight: ['700'] });

export default function VibramePage() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const screenshots = [1,2,3,4];

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
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative py-16 px-4 min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-pink-200 via-orange-100 to-yellow-100 overflow-hidden">
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-200/30 via-orange-100/20 to-yellow-200/30" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
          {/* App Icon */}
          <div className="w-24 h-24 md:w-32 md:h-32 bg-white/80 rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-lg border-4 border-white/60">
            <Image
              src="/vibrameicon.webp"
              alt="Vibrame App Icon"
              width={128}
              height={128}
              className="rounded-2xl"
              priority
            />
          </div>
          {/* Title and Subtitle */}
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-800 mb-6 leading-tight ${lusitana.className}`}>
            Vibrame
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Feel the rhythm of your emotions. Track your mood, reflect, and grow with Vibrame.
          </p>
          {/* CTA Button */}
          <div className="flex justify-center items-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.vibrame.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-base w-full max-w-xs"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Get it on Google Play
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why You’ll Love Vibrame
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-orange-50">
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Mood Tracking
              </h3>
              <p className="text-gray-600">
                Easily log your daily emotions and see your mood patterns over time.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-yellow-50 to-pink-50">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Insightful Analytics
              </h3>
              <p className="text-gray-600">
                Visualize your emotional journey with beautiful, easy-to-read charts.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-yellow-50">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Personal Reflections
              </h3>
              <p className="text-gray-600">
                Add notes and reflections to each day to deepen your self-awareness.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-yellow-50">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Private & Secure
              </h3>
              <p className="text-gray-600">
                Your emotional data is yours alone—kept safe and private.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-pink-50 to-orange-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Take a peek inside
          </h2>
          <div>
            <div
              ref={carouselRef}
              className="flex md:grid md:grid-cols-2 gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:mx-0 md:px-0 scrollbar-hide"
            >
              {screenshots.map((num) => (
                <div
                  key={num}
                  className="min-w-[90vw] max-w-xs md:min-w-0 md:max-w-none flex-shrink-0 snap-center flex justify-center"
                >
                  <div className="bg-white rounded-3xl shadow-xl p-4 transform hover:scale-105 transition-transform duration-300">
                    <Image
                      src={`/screenshotvibrame/vibrame${num}.jpeg`}
                      alt={`Vibrame App Screenshot ${num}`}
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
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${i === activeIdx ? 'bg-orange-500 scale-110' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-pink-100 to-orange-100 rounded-3xl p-12 md:p-16">
            <div className="text-6xl mb-6">💖</div>
            <blockquote className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed mb-6">
              &quot;Vibrame helps me understand my feelings and see my growth. It feels soft, human, and real.&quot;
            </blockquote>
            <p className="text-gray-600 font-medium">— A Vibrame user</p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-100 to-pink-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Ready to feel your emotions?
          </h2>
          <div className="flex justify-center items-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.vibrame.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-base w-full max-w-xs"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Get it on Google Play
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 
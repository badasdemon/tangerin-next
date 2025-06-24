"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Lusitana } from 'next/font/google';

const lusitana = Lusitana({ subsets: ['latin'], weight: ['700'] });

const appCards = [
  {
    icon: "/bloomieicon.webp",
    title: "Bloomie",
    desc: "See the magic when your baby growth",
    href: "/apps/bloomie",
    btn: "Learn More",
    border: "fuchsia-400",
    btnColor: "bg-fuchsia-400 hover:bg-fuchsia-500"
  },
  {
    icon: "/cantikicon.webp",
    title: "Cantik",
    desc: "Discover your beauty progress",
    href: "/apps/cantik",
    btn: "Learn More",
    border: "purple-400",
    btnColor: "bg-purple-400 hover:bg-purple-500"
  },
  {
    icon: "/vibrameicon.webp",
    title: "Vibrame",
    desc: "Feel the rhythm of your emotions",
    href: "/apps/vibrame",
    btn: "Learn More",
    border: "pink-400",
    btnColor: "bg-pink-400 hover:bg-pink-500"
  }
];

export default function Home() {
  // Carousel state for mobile
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  // Update activeIdx on scroll (mobile only)
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const onScroll = () => {
      const cardWidth = el.firstElementChild?.clientWidth || 1;
      const scrollLeft = el.scrollLeft;
      const idx = Math.round(scrollLeft / (cardWidth + 16)); // 16px gap
      setActiveIdx(Math.max(0, Math.min(appCards.length - 1, idx)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-10 px-4 min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-[#FFD580] via-[#FFB347] to-[#FF914D] animate-gradient-move overflow-hidden">
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[[#FCC3AC] via-[#FF8D54] to-[#FF793B] opacity-80 animate-gradient-move" style={{zIndex:0}} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center md:items-center justify-between gap-8 md:gap-12">
          {/* Logo and Brand */}
          <div className="flex flex-col items-center md:items-start flex-shrink-0 md:mr-8 -mb-10 md:-mb-16 z-20">
            <div className="w-20 h-20 md:w-32 md:h-32 bg-white/30 rounded-2xl flex items-center justify-center mb-2 shadow-lg drop-shadow-xl border-4 border-white/40">
              <Image
                src="/tangerislogo.jpg"
                alt="Tangerin Labs Logo"
                width={128}
                height={128}
                className="rounded-2xl"
                priority
              />
            </div>
            <span className="inline-block bg-white/80 text-orange-500 text-xs md:text-sm font-bold px-3 py-1 rounded-full shadow mb-2 mt-1 tracking-wide">Tangerin Labs</span>
            <h2 className="text-xl md:text-2xl font-extrabold text-white mb-0.5 tracking-tight drop-shadow-lg"></h2>
          </div>
          {/* Main Content */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className={`text-2xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 leading-tight max-w-2xl drop-shadow-[0_4px_24px_rgba(255,140,0,0.25)] ${lusitana.className}`}>
              Playful ideas crafted into <br className="hidden md:inline" /> meaningful apps
            </h1>
            <p className="text-base md:text-lg text-white/90 mb-0 max-w-xl font-medium">
              We bring soft, emotional tools to life — one app at a time.
            </p>
          </div>
        </div>
      </section>

      {/* App Showcase Section */}
      <section id="apps" className="py-10 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          {/* Carousel on mobile, grid on sm+ */}
          <div
            ref={carouselRef}
            className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:mx-0 sm:px-0"
          >
            {appCards.map((card) => (
              <div
                key={card.title}
                className={`min-w-[90vw] max-w-xs sm:min-w-0 sm:max-w-none flex-shrink-0 snap-center bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center transition-all duration-200 border border-transparent hover:shadow-xl hover:scale-[1.03] hover:border-${card.border} mx-auto sm:mx-0`}
              >
                <Image
                  src={card.icon}
                  alt={`${card.title} icon`}
                  width={100}
                  height={100}
                  className="mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600 mb-6 text-base">{card.desc}</p>
                <a
                  href={card.href}
                  className={`w-full ${card.btnColor} text-white font-semibold py-3 rounded-lg transition-colors duration-200 text-base shadow`}
                >
                  {card.btn}
                </a>
              </div>
            ))}
          </div>
          {/* Dot indicator for mobile */}
          <div className="flex justify-center mt-6 gap-2 sm:hidden">
            {appCards.map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${i === activeIdx ? 'bg-orange-500 scale-110' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Apps Feel Different Section */}
      <section className="py-12 px-4 bg-orange-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-10">
            Why Our Apps Feel Different
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-14 h-14 flex items-center justify-center rounded-full mb-4 bg-pink-100">
                <span className="text-2xl">🌸</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-base md:text-lg mb-1">Designed for Emotion</h3>
              <p className="text-xs md:text-sm text-gray-500">Every app is soft, sensory, and soul-first.</p>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-14 h-14 flex items-center justify-center rounded-full mb-4 bg-blue-100">
                <span className="text-2xl">🧩</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-base md:text-lg mb-1">Simple & Intentional</h3>
              <p className="text-xs md:text-sm text-gray-500">No clutter. Just what you need — and nothing more.</p>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-14 h-14 flex items-center justify-center rounded-full mb-4 bg-purple-100">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-base md:text-lg mb-1">Beautifully Personal</h3>
              <p className="text-xs md:text-sm text-gray-500">From the interface to experience, it&apos;s all about you.</p>
            </div>
            {/* Card 4 */}
            <div className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-14 h-14 flex items-center justify-center rounded-full mb-4 bg-teal-100">
                <span className="text-2xl">🦋</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-base md:text-lg mb-1">Created with Love</h3>
              <p className="text-xs md:text-sm text-gray-500">Built by humans, real feelings. Honest and caring.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-12 px-4 bg-orange-100">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            Get in Touch!
          </p>
          <a
            href="mailto:tangerinlabs@gmail.com"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-lg transition-colors duration-200 text-xl shadow-lg animate-bounce-slow"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7.79M21 12.79l-9-5.29-9 5.29M21 12.79V19a2 2 0 0 1-2 2h-7.79" />
            </svg>
            Let&apos;s Talk
          </a>
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
              <a
                href="/privacy"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy
              </a>
              <a
                href="/terms"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

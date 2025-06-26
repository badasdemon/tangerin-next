'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface AppData {
  emoji: string;
  name: string;
  subtitle: string;
  android: string;
  ios: string;
  desktop: string;
}

const apps: AppData[] = [
  {
    emoji: '🌸',
    name: 'Bloomie',
    subtitle: 'Private baby journal app',
    android: 'https://play.google.com/store/apps/details?id=bloomie.app',
    ios: 'https://apps.apple.com/app/id1234567890',
    desktop: '/apps/bloomie'
  },
  {
    emoji: '💖',
    name: 'Cantik',
    subtitle: 'Beauty & glow-up companion',
    android: 'https://play.google.com/store/apps/details?id=cantik.app',
    ios: 'https://apps.apple.com/app/id1234567891',
    desktop: '/apps/cantik'
  },
  {
    emoji: '🌿',
    name: 'Vibrame',
    subtitle: 'Self-love tool with body connection',
    android: 'https://play.google.com/store/apps/details?id=vibrame.app',
    ios: 'https://apps.apple.com/app/id1234567892',
    desktop: '/apps/vibrame'
  }
];

export default function LinksPage() {
  const [platform, setPlatform] = useState<'android' | 'ios' | 'desktop'>('desktop');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userAgent = navigator.userAgent.toLowerCase();
      if (/android/.test(userAgent)) {
        setPlatform('android');
      } else if (/iphone|ipad|ipod/.test(userAgent)) {
        setPlatform('ios');
      } else {
        setPlatform('desktop');
      }
    }
  }, []);

  const getAppLink = (app: AppData) => {
    switch (platform) {
      case 'android':
        return app.android;
      case 'ios':
        return app.ios;
      case 'desktop':
        return app.desktop;
      default:
        return app.desktop;
    }
  };

  const handleAppClick = (app: AppData) => {
    const link = getAppLink(app);
    if (platform === 'desktop') {
      // Use Next.js Link for internal navigation
      window.location.href = link;
    } else {
      // Open external store links in new tab
      window.open(link, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex flex-col">
      {/* Header */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="max-w-md w-full space-y-6">
          {/* Profile Section */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center text-2xl overflow-hidden">
              <Image
                src="/tangerislogo.jpg"
                alt="Tangerin Labs Logo"
                width={80}
                height={80}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Tangerin Labs</h1>
            <p className="text-gray-600">Building apps that make life better</p>
          </div>

          {/* App Links */}
          <div className="space-y-4">
            {apps.map((app, index) => (
              <button
                key={index}
                onClick={() => handleAppClick(app)}
                className="w-full bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:scale-[1.02] transition-all duration-200 flex items-center space-x-4 group"
              >
                <div className="text-3xl">{app.emoji}</div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                    {app.name}
                  </h3>
                  <p className="text-sm text-gray-500">{app.subtitle}</p>
                </div>
                <div className="text-gray-400 group-hover:text-purple-400 transition-colors">
                  {platform === 'desktop' ? '→' : '↗'}
                </div>
              </button>
            ))}
          </div>

          {/* Work With Us Button */}
          <div className="pt-4">
            <a
              href="mailto:tangerinlabs@gmail.com"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl p-4 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-200 flex items-center justify-center space-x-2 group"
            >
              <span className="text-xl">✍️</span>
              <span className="font-semibold">Work With Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 px-4 text-center">
        <div className="max-w-md mx-auto">
          <div className="flex justify-center space-x-6 text-sm text-gray-500 mb-2">
            <Link href="/privacy" className="hover:text-purple-600 transition-colors">
              Privacy
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-purple-600 transition-colors">
              Terms
            </Link>
          </div>
          <p className="text-xs text-gray-400">© 2025 Tangerin Labs</p>
        </div>
      </footer>
    </div>
  );
} 
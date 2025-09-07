'use client';

import { useTheme } from './ThemeContext';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
  const { isDarkMode } = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`header sticky top-0 z-50 transition-transform duration-300 bg-white border-b border-gray-200 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-black">
              <span className="gold-gradient">DJReklesz</span> IPTV
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-6">
              <button 
                onClick={() => router.push('/')}
                className={`nav-link text-gray-700 hover:text-[#D4A017] ${pathname === '/' ? 'text-[#D4A017] after:w-full' : ''}`}
              >
                Home
              </button>
              <button 
                onClick={() => router.push('/about')}
                className={`nav-link text-gray-700 hover:text-[#D4A017] ${pathname === '/about' ? 'text-[#D4A017] after:w-full' : ''}`}
              >
                About US
              </button>
              <button 
                onClick={() => router.push('/pricing')}
                className={`nav-link text-gray-700 hover:text-[#D4A017] ${pathname === '/pricing' ? 'text-[#D4A017] after:w-full' : ''}`}
              >
                Pricing
              </button>
              <button 
                onClick={() => router.push('/services')}
                className={`nav-link text-gray-700 hover:text-[#D4A017] ${pathname === '/services' ? 'text-[#D4A017] after:w-full' : ''}`}
              >
                Services
              </button>
              <button 
                onClick={() => router.push('/features')}
                className={`nav-link text-gray-700 hover:text-[#D4A017] ${pathname === '/features' ? 'text-[#D4A017] after:w-full' : ''}`}
              >
                Features
              </button>
              <button 
                onClick={() => router.push('/all')}
                className={`nav-link text-gray-700 hover:text-[#D4A017] ${pathname === '/all' ? 'text-[#D4A017] after:w-full' : ''}`}
              >
                All
              </button>
              <button 
                onClick={() => router.push('/apps')}
                className={`nav-link text-gray-700 hover:text-[#D4A017] ${pathname === '/apps' ? 'text-[#D4A017] after:w-full' : ''}`}
              >
                Apps
              </button>
              <button 
                onClick={() => router.push('/contact')}
                className={`nav-link text-gray-700 hover:text-[#D4A017] ${pathname === '/contact' ? 'text-[#D4A017] after:w-full' : ''}`}
              >
                Contact
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

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
  const [currentHash, setCurrentHash] = useState('');

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

  // Handle hash navigation and update current hash
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      setCurrentHash(hash);
      
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    }
  }, [pathname]);

  // Update hash on scroll for sections
  useEffect(() => {
    const handleScroll = () => {
      if (pathname === '/') {
        const sections = ['about', 'pricing', 'contact'];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetBottom = offsetTop + element.offsetHeight;

            if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
              setCurrentHash(`#${section}`);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <header className={`header sticky top-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">
              <span className="gold-gradient">DJReklesz</span> IPTV
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-6">
              <button 
                onClick={() => router.push('/')}
                className={`nav-link ${pathname === '/' && !currentHash ? 'text-[#D4A017] after:w-full' : ''}`}
              >
                Home
              </button>
              <button 
                onClick={() => {
                  if (pathname === '/') {
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    router.push('/#about');
                  }
                }}
                className={`nav-link ${pathname === '/' && currentHash === '#about' ? 'text-[#D4A017] after:w-full' : ''}`}
              >
                About US
              </button>
              <button 
                onClick={() => {
                  if (pathname === '/') {
                    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    router.push('/#pricing');
                  }
                }}
                className={`nav-link ${pathname === '/' && currentHash === '#pricing' ? 'text-[#D4A017] after:w-full' : ''}`}
              >
                Pricing
              </button>
              <button 
                onClick={() => router.push('/apps')}
                className={`nav-link ${pathname === '/apps' ? 'text-[#D4A017] after:w-full' : ''}`}
              >
                Apps
              </button>
              <button 
                onClick={() => {
                  if (pathname === '/') {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    router.push('/#contact');
                  }
                }}
                className={`nav-link ${pathname === '/' && currentHash === '#contact' ? 'text-[#D4A017] after:w-full' : ''}`}
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

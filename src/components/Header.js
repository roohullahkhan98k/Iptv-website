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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (path) => {
    router.push(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header sticky top-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`} style={{
      background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 25%, #000000 50%, #1a1a1a 75%, #000000 100%)',
      borderBottom: '2px solid #D4A017',
      boxShadow: '0 4px 20px rgba(212, 160, 23, 0.3), 0 0 40px rgba(212, 160, 23, 0.1)'
    }}>
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        background: 'linear-gradient(45deg, transparent 30%, rgba(212, 160, 23, 0.1) 50%, transparent 70%)',
        backgroundSize: '200% 200%',
        animation: 'shine 3s ease-in-out infinite'
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-white" style={{color: '#ffffff'}}>
              <span className="gold-gradient">DJReklesz</span> <span className="text-white" style={{color: '#ffffff'}}>IPTV</span>
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <button 
                onClick={() => router.push('/')}
                className={`nav-link text-white hover:text-[#D4A017] transition-all duration-300 px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-[#D4A017]/10 hover:to-[#B8860B]/10 ${pathname === '/' ? 'text-[#D4A017] bg-gradient-to-r from-[#D4A017]/20 to-[#B8860B]/20' : ''}`}
                style={{color: pathname === '/' ? '#D4A017' : '#ffffff'}}
              >
                Home
              </button>
              <button 
                onClick={() => router.push('/pricing')}
                className={`nav-link text-white hover:text-[#D4A017] transition-all duration-300 px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-[#D4A017]/10 hover:to-[#B8860B]/10 ${pathname === '/pricing' ? 'text-[#D4A017] bg-gradient-to-r from-[#D4A017]/20 to-[#B8860B]/20' : ''}`}
                style={{color: pathname === '/pricing' ? '#D4A017' : '#ffffff'}}
              >
                Pricing
              </button>
              <button 
                onClick={() => router.push('/services')}
                className={`nav-link text-white hover:text-[#D4A017] transition-all duration-300 px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-[#D4A017]/10 hover:to-[#B8860B]/10 ${pathname === '/services' ? 'text-[#D4A017] bg-gradient-to-r from-[#D4A017]/20 to-[#B8860B]/20' : ''}`}
                style={{color: pathname === '/services' ? '#D4A017' : '#ffffff'}}
              >
                Services
              </button>
              <button 
                onClick={() => router.push('/features')}
                className={`nav-link text-white hover:text-[#D4A017] transition-all duration-300 px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-[#D4A017]/10 hover:to-[#B8860B]/10 ${pathname === '/features' ? 'text-[#D4A017] bg-gradient-to-r from-[#D4A017]/20 to-[#B8860B]/20' : ''}`}
                style={{color: pathname === '/features' ? '#D4A017' : '#ffffff'}}
              >
                Features
              </button>
              <button 
                onClick={() => router.push('/apps')}
                className={`nav-link text-white hover:text-[#D4A017] transition-all duration-300 px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-[#D4A017]/10 hover:to-[#B8860B]/10 ${pathname === '/apps' ? 'text-[#D4A017] bg-gradient-to-r from-[#D4A017]/20 to-[#B8860B]/20' : ''}`}
                style={{color: pathname === '/apps' ? '#D4A017' : '#ffffff'}}
              >
                Apps
              </button>
              <button 
                onClick={() => router.push('/contact')}
                className={`nav-link text-white hover:text-[#D4A017] transition-all duration-300 px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-[#D4A017]/10 hover:to-[#B8860B]/10 ${pathname === '/contact' ? 'text-[#D4A017] bg-gradient-to-r from-[#D4A017]/20 to-[#B8860B]/20' : ''}`}
                style={{color: pathname === '/contact' ? '#D4A017' : '#ffffff'}}
              >
                Contact
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 p-2"
              aria-label="Toggle mobile menu"
            >
              <span className={`block w-7 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-7 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-7 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - Overlay */}
      <div className={`md:hidden fixed top-16 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <nav className="py-4" style={{
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 25%, #000000 50%, #1a1a1a 75%, #000000 100%)',
          borderTop: '2px solid #D4A017',
          boxShadow: '0 10px 30px rgba(212, 160, 23, 0.3), 0 0 50px rgba(212, 160, 23, 0.1)'
        }}>
          {/* Animated gradient overlay for mobile menu */}
          <div className="absolute inset-0 opacity-20" style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(212, 160, 23, 0.1) 50%, transparent 70%)',
            backgroundSize: '200% 200%',
            animation: 'shine 3s ease-in-out infinite'
          }}></div>
          
          <div className="flex flex-col space-y-4 px-4 relative z-10">
              <button 
                onClick={() => handleNavClick('/')}
                className={`text-left text-white hover:text-[#D4A017] transition-all duration-300 py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-[#D4A017]/10 hover:to-[#B8860B]/10 ${pathname === '/' ? 'text-[#D4A017] bg-gradient-to-r from-[#D4A017]/20 to-[#B8860B]/20' : ''}`}
                style={{color: pathname === '/' ? '#D4A017' : '#ffffff'}}
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('/pricing')}
                className={`text-left text-white hover:text-[#D4A017] transition-all duration-300 py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-[#D4A017]/10 hover:to-[#B8860B]/10 ${pathname === '/pricing' ? 'text-[#D4A017] bg-gradient-to-r from-[#D4A017]/20 to-[#B8860B]/20' : ''}`}
                style={{color: pathname === '/pricing' ? '#D4A017' : '#ffffff'}}
              >
                Pricing
              </button>
              <button 
                onClick={() => handleNavClick('/services')}
                className={`text-left text-white hover:text-[#D4A017] transition-all duration-300 py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-[#D4A017]/10 hover:to-[#B8860B]/10 ${pathname === '/services' ? 'text-[#D4A017] bg-gradient-to-r from-[#D4A017]/20 to-[#B8860B]/20' : ''}`}
                style={{color: pathname === '/services' ? '#D4A017' : '#ffffff'}}
              >
                Services
              </button>
              <button 
                onClick={() => handleNavClick('/features')}
                className={`text-left text-white hover:text-[#D4A017] transition-all duration-300 py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-[#D4A017]/10 hover:to-[#B8860B]/10 ${pathname === '/features' ? 'text-[#D4A017] bg-gradient-to-r from-[#D4A017]/20 to-[#B8860B]/20' : ''}`}
                style={{color: pathname === '/features' ? '#D4A017' : '#ffffff'}}
              >
                Features
              </button>
              <button 
                onClick={() => handleNavClick('/apps')}
                className={`text-left text-white hover:text-[#D4A017] transition-all duration-300 py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-[#D4A017]/10 hover:to-[#B8860B]/10 ${pathname === '/apps' ? 'text-[#D4A017] bg-gradient-to-r from-[#D4A017]/20 to-[#B8860B]/20' : ''}`}
                style={{color: pathname === '/apps' ? '#D4A017' : '#ffffff'}}
              >
                Apps
              </button>
              <button 
                onClick={() => handleNavClick('/contact')}
                className={`text-left text-white hover:text-[#D4A017] transition-all duration-300 py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-[#D4A017]/10 hover:to-[#B8860B]/10 ${pathname === '/contact' ? 'text-[#D4A017] bg-gradient-to-r from-[#D4A017]/20 to-[#B8860B]/20' : ''}`}
                style={{color: pathname === '/contact' ? '#D4A017' : '#ffffff'}}
              >
                Contact
              </button>
            </div>
          </nav>
        </div>
    </header>
  );
}

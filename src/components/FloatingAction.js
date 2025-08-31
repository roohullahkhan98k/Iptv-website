'use client';

import { MessageCircle, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function FloatingAction() {
  const [isHovered, setIsHovered] = useState(false);
  
  const phoneNumber = '+1 860-601-3469';
  const message = 'Hello! I\'m interested in your IPTV services. Can you provide more information?';
  
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\s+/g, '')}?text=${encodeURIComponent(message)}`;
  
  return (
    <div className="fixed bottom-30 right-30 z-50">
      {/* Main Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-action"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Contact us on WhatsApp"
        title="Contact us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        
        {/* Sparkle effects */}
        {isHovered && (
          <>
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
            <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-yellow-300 rounded-full animate-ping opacity-75" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-200 rounded-full animate-ping opacity-75" style={{animationDelay: '1s'}}></div>
          </>
        )}
      </a>
      
      {/* Floating text indicator */}
      {isHovered && (
        <div className="absolute bottom-20 right-0 bg-black/80 text-white px-4 py-2 rounded-lg text-sm font-medium animate-fade-in">
          <Sparkles className="w-4 h-4 inline mr-2 text-yellow-400" />
          Get Support Now
        </div>
      )}
    </div>
  );
}

import { Play, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden particle-bg interactive-bg bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4A017]/10 to-transparent opacity-20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 floating-element">
        <div className="w-20 h-20 bg-gradient-to-r from-[#D4A017] to-[#B8860B] rounded-full opacity-20"></div>
      </div>
      <div className="absolute top-40 right-20 floating-element">
        <div className="w-16 h-16 bg-gradient-to-r from-[#B8860B] to-[#D4A017] rounded-full opacity-15"></div>
      </div>
      <div className="absolute bottom-40 left-20 floating-element">
        <div className="w-24 h-24 bg-gradient-to-r from-[#D4A017] to-[#B8860B] rounded-full opacity-10"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="gold-gradient gold-glow">The Best IPTV</span>
          <br />
          <span className="text-black">Provider</span>
        </h1>
        
        <p className="text-2xl md:text-3xl mb-8 font-light text-gray-700">
          All-in-One IPTV Subscription, Channels, Movies, Series
        </p>
        
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-600">
          Experience the ultimate IPTV service with crystal-clear quality, 
          lightning-fast streaming, and an unparalleled content library.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a 
            href="/pricing"
            className="accent-button text-lg px-8 py-4 inline-flex items-center justify-center magnetic-hover"
          >
            <Play className="w-5 h-5 mr-2" />
            Subscribe Now
          </a>
          <a 
            href="https://wa.me/18606013469?text=Hello! I'd like to see your channel list. Can you send me the available channels?"
            target="_blank"
            rel="noopener noreferrer"
            className="button text-lg px-8 py-4 inline-flex items-center justify-center magnetic-hover"
          >
            <Globe className="w-5 h-5 mr-2" />
            View Channels
          </a>
        </div>
      </div>
    </section>
  );
}

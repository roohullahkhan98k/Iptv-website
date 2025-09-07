import { Tv, Film, Zap, MessageCircle, Clock, Rocket } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 border-t border-gray-200 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 text-white">
              <span className="gold-gradient">DJReklesz</span> IPTV
            </h3>
            <p className="text-white text-lg mb-6">
              Premium streaming experience for the modern viewer. Access thousands of channels and movies in stunning quality.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#D4A017] to-[#FFD700] flex items-center justify-center">
                <Tv className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#D4A017] to-[#FFD700] flex items-center justify-center">
                <Film className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#D4A017] to-[#FFD700] flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-white hover:text-[#D4A017] transition-colors duration-300">Home</a></li>
              <li><a href="/pricing" className="text-white hover:text-[#D4A017] transition-colors duration-300">Pricing</a></li>
              <li><a href="/services" className="text-white hover:text-[#D4A017] transition-colors duration-300">Services</a></li>
              <li><a href="/features" className="text-white hover:text-[#D4A017] transition-colors duration-300">Features</a></li>
              <li><a href="/contact" className="text-white hover:text-[#D4A017] transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MessageCircle className="w-5 h-5 text-white mr-3" />
                <span className="text-white">WhatsApp Support</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-white mr-3" />
                <span className="text-white">24/7 Available</span>
              </div>
              <div className="flex items-center">
                <Rocket className="w-5 h-5 text-white mr-3" />
                <span className="text-white">Instant Activation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white mb-4 md:mb-0">
              © 2024 DJReklesz IPTV. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <span className="text-white">Privacy Policy</span>
              <span className="text-white">Terms of Service</span>
              <span className="text-white">Support</span>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-white text-sm">
              Exclusive Deals: Get 20% OFF for Premium Entertainment, Expert Support, and More. Elevate Your Streaming Experience Today!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

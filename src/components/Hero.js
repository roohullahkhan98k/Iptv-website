import { Rocket, Sparkles, Shield, Zap, Clock, User } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold shadow-xl mb-8 animate-pulse">
          <Rocket className="w-4 h-4 mr-2" />
          <span className="w-2 h-2 bg-white rounded-full mr-2 animate-ping"></span>
          Coming Soon - Premium IPTV Platform
        </div>
        
        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
          DJReklesz IPTV
        </h1>
        
        <p className="text-2xl md:text-3xl mb-8 font-light">
          The Future of Premium Streaming
        </p>
        
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto">
          Experience the next generation of IPTV with crystal-clear quality, 
          lightning-fast streaming, and an unparalleled content library.
        </p>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="card rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 hover:shadow-2xl">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Premium Content</h3>
            <p>Access to thousands of channels and on-demand content</p>
          </div>
          
          <div className="card rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 hover:shadow-2xl">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
            <p>Ultra-fast streaming with zero buffering</p>
          </div>
          
          <div className="card rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 hover:shadow-2xl">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Secure & Reliable</h3>
            <p>Enterprise-grade security and 99.9% uptime</p>
          </div>
        </div>
        
        {/* Development Status */}
        <div className="card rounded-3xl p-10 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-6">
              <Clock className="w-10 h-10 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-3">Under Development</h2>
              <p className="text-xl">We're crafting something extraordinary</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 text-left">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center text-green-600">
                <span className="w-6 h-6 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </span>
                What's Ready
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Advanced streaming infrastructure
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Multi-device compatibility
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Premium content partnerships
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Security & encryption
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center text-blue-600">
                <span className="w-6 h-6 bg-blue-500 rounded-full mr-3 flex items-center justify-center">
                  <Zap className="w-3 h-3 text-white" />
                </span>
                Coming Soon
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  User dashboard & accounts
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Mobile app launch
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Live TV integration
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Premium features
                </li>
              </ul>
            </div>
          </div>
          
                      <div className="mt-10 pt-8 border-t border-gray-200 text-center">
            <p className="text-lg">
              Created with ❤️ by <span className="font-bold text-blue-600">DJReklesz</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

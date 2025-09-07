
import { Zap, Shield, Clock, Globe, Star, Users, Award, TrendingUp } from 'lucide-react';


export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-black">
            Why Choose <span className="gold-gradient">DJReklesz</span> IPTV?
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-12">
            Experience the ultimate streaming revolution with unmatched quality, reliability, and premium content
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <span className="bg-[#D4A017] text-white px-6 py-3 rounded-full font-semibold">13,000+ Channels</span>
            <span className="bg-[#D4A017] text-white px-6 py-3 rounded-full font-semibold">30,000+ Movies</span>
            <span className="bg-[#D4A017] text-white px-6 py-3 rounded-full font-semibold">24/7 Support</span>
            <span className="bg-[#D4A017] text-white px-6 py-3 rounded-full font-semibold">4K Quality</span>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              The <span className="gold-gradient">Ultimate</span> Streaming Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes us the #1 choice for premium IPTV services worldwide
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-[#D4A017] to-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Lightning Fast</h3>
              <p className="text-gray-600">Ultra-fast streaming with zero buffering. Experience seamless entertainment like never before.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-[#D4A017] to-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">100% Secure</h3>
              <p className="text-gray-600">Bank-level encryption and privacy protection. Your data and viewing habits are completely secure.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-[#D4A017] to-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support. Our experts are always ready to help you anytime, anywhere.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-[#D4A017] to-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Global Content</h3>
              <p className="text-gray-600">Access content from every corner of the world. From Hollywood blockbusters to international sports.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#D4A017] to-[#FFD700]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Trusted by <span className="text-black">Millions</span> Worldwide
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Join the streaming revolution that's changing how the world watches entertainment
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-5xl font-bold text-white mb-2">2,000+</div>
              <div className="text-white/90">Happy Customers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-5xl font-bold text-white mb-2">99.9%</div>
              <div className="text-white/90">Uptime Guarantee</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-5xl font-bold text-white mb-2">150+</div>
              <div className="text-white/90">Countries Served</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/90">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Why <span className="gold-gradient">DJReklesz</span> Stands Out
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another IPTV service - we're the premium choice for discerning viewers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#D4A017] to-[#FFD700] rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-black">Premium Quality Content</h3>
                  <p className="text-gray-600">Crystal clear 4K, UHD, and HD streaming with the latest movies, TV shows, and live sports.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#D4A017] to-[#FFD700] rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-black">Multi-Device Support</h3>
                  <p className="text-gray-600">Watch on any device - Smart TV, Phone, Tablet, Laptop, or Gaming Console. Seamless experience everywhere.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#D4A017] to-[#FFD700] rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-black">Award-Winning Service</h3>
                  <p className="text-gray-600">Recognized as the best IPTV service provider with industry-leading customer satisfaction ratings.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#D4A017] to-[#FFD700] rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-black">Always Evolving</h3>
                  <p className="text-gray-600">Regular updates, new features, and expanding content library. We never stop improving your experience.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 text-center">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-3xl font-bold mb-4 text-black">Ready to Experience Excellence?</h3>
              <p className="text-xl text-gray-600 mb-8">Join millions of satisfied customers and transform your entertainment experience today.</p>
              <a 
                href="https://wa.me/18606013469?text=Hello! I want to experience the best IPTV service. Can you help me get started?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-[#D4A017] to-[#FFD700] text-white text-xl font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300"
              >
                Get Started Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

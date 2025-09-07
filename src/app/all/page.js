import Hero from '../../components/Hero';
import { Shield, Wifi, Clock, Award, Tv, Film, Headphones, CheckCircle } from 'lucide-react';

export default function AllPage() {
  return (
    <div className="min-h-screen bg-white">
 
      <Hero />
      
      {/* Stats Section */}
      <section id="stats" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              TAKE ENTERTAINMENT <span className="animated-gradient">FURTHER TODAY</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stream all the TV shows you love
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="feature-showcase card rounded-2xl p-8 interactive-card bg-white shadow-lg border border-gray-200">
              <div className="relative z-10">
                <div className="text-4xl font-bold gold-accent mb-2 stats-counter">2K+</div>
                <p className="text-gray-600">Active Users</p>
              </div>
            </div>
            
            <div className="feature-showcase card rounded-2xl p-8 interactive-card bg-white shadow-lg border border-gray-200">
              <div className="relative z-10">
                <div className="text-4xl font-bold gold-accent mb-2  stats-counter">2,000+</div>
                <p className="text-gray-600">Sport Channels</p>
              </div>
            </div>
            
            <div className="feature-showcase card rounded-2xl p-8 interactive-card bg-white shadow-lg border border-gray-200">
              <div className="relative z-10">
                <div className="text-4xl font-bold gold-accent mb-2 stats-counter">13K+</div>
                <p className="text-gray-600">Channels</p>
              </div>
            </div>
            
            <div className="feature-showcase card rounded-2xl p-8 interactive-card bg-white shadow-lg border border-gray-200">
              <div className="relative z-10">
                <div className="text-4xl font-bold gold-accent mb-2  stats-counter">30K+</div>
                <p className="text-gray-600">Movies & TV Shows (VOD)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              All-in-One <span className="animated-gradient">IPTV Subscription</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for the ultimate streaming experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card card rounded-2xl p-6 text-center bg-gray-50 shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-r from-[#D4A017] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-4">
                <Tv className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">13000 channels</h3>
            </div>
            
            <div className="feature-card card rounded-2xl p-6 text-center bg-gray-50 shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-r from-[#D4A017] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-4">
                <Film className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">30000 movies VOD</h3>
            </div>
            
            <div className="feature-card card rounded-2xl p-6 text-center bg-gray-50 shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-r from-[#D4A017] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">4K, FHD, SD & HD Quality</h3>
            </div>
            
            <div className="feature-card card rounded-2xl p-6 text-center bg-gray-50 shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-r from-[#D4A017] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">Support 24/7​</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              What We <span className="gold-gradient">Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium content for every viewer
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="feature-card card rounded-2xl p-8 text-center bg-white shadow-lg border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-r from-[#D4A017] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-6">
                <Tv className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">TV Shows & Sports</h3>
              <p className="text-gray-600">Premium selection of TV Shows and comprehensive sports channels from around the globe.</p>
            </div>
            
            <div className="feature-card card rounded-2xl p-8 text-center bg-white shadow-lg border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-r from-[#D4A017] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-6">
                <Film className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Movies & Series</h3>
              <p className="text-gray-600">Vast collection of movies and series in multiple languages, ready for your entertainment.</p>
            </div>
            
            <div className="feature-card card rounded-2xl p-8 text-center bg-white shadow-lg border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-r from-[#D4A017] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-6">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Documentaries</h3>
              <p className="text-gray-600">Engaging documentaries and cultural programs from every corner of the world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              WHY CHOOSE <span className="gold-gradient">US</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium service with guaranteed satisfaction
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card card rounded-2xl p-8 text-center bg-gray-50 shadow-lg border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-r from-[#D4A017] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">7-Day Money-Back</h3>
              <p className="text-gray-600">Your satisfaction is our top priority with a 7-day money back guarantee</p>
            </div>
            
            <div className="feature-card card rounded-2xl p-8 text-center bg-gray-50 shadow-lg border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-r from-[#D4A017] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-6">
                <Wifi className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">No Buffering</h3>
              <p className="text-gray-600">Smooth streaming with no buffering interruptions</p>
            </div>
            
            <div className="feature-card card rounded-2xl p-8 text-center bg-gray-50 shadow-lg border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-r from-[#D4A017] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support for all your needs</p>
            </div>
            
            <div className="feature-card card rounded-2xl p-8 text-center bg-gray-50 shadow-lg border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-r from-[#D4A017] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">4K & FHD Quality</h3>
              <p className="text-gray-600">Ultra-high-definition streaming with 4K and FHD quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Choose Your <span className="animated-gradient">Plan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the plan that suits your requirements.
            </p>
          </div>
          
          {/* 1 Connection Plans */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 gold-accent">1 CONNECTION</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="pricing-showcase card rounded-2xl p-8 text-center card-3d bg-white shadow-lg border border-gray-200">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-black">1 Month</h3>
                  <div className="text-4xl font-bold gold-accent mb-2">8£</div>
                  <div className="text-sm text-gray-500 mb-4 font-medium">Instant Activation!</div>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                    13000 channels
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                    30000 movies VOD
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                    Free update (TVs and VODs)
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                    Fast & Stable
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                    Always Uptime Server
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                    4K, UHD, FHD, HD, Channels
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                    Support All Device
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                    24/7 Live Chat Support
                  </li>
                </ul>
              </div>
              
              <div className="pricing-showcase card rounded-2xl p-8 text-center card-3d bg-white shadow-lg border border-gray-200">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-black">3 Month</h3>
                  <div className="text-4xl font-bold gold-accent mb-2">16£</div>
                  <div className="text-sm text-gray-500 mb-4 font-medium">Instant Activation!</div>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                    13000 channels
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                    30000 movies VOD
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                    Free update (TVs and VODs)
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                    Fast & Stable
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                    Always Uptime Server
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                    4K, UHD, FHD, HD, Channels
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                    Support All Device
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                    24/7 Live Chat Support
                  </li>
                </ul>
              </div>
              
              <div className="pricing-showcase card rounded-2xl p-8 text-center card-3d bg-white shadow-lg border border-gray-200">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-black">6 Months</h3>
                  <div className="text-4xl font-bold gold-accent mb-2">24£</div>
                  <div className="text-sm text-gray-500 mb-4 font-medium">Instant Activation!</div>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                    13000 channels
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                    30000 movies VOD
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                    Free update (TVs and VODs)
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                    Fast & Stable
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                    Always Uptime Server
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                    4K, UHD, FHD, HD, Channels
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                    Support All Device
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                    24/7 Live Chat Support
                  </li>
                </ul>
              </div>
              
              <div className="pricing-showcase card rounded-2xl p-8 text-center card-3d bg-white shadow-lg border border-gray-200">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-black">12 Months</h3>
                  <div className="text-4xl font-bold gold-accent mb-2">£40</div>
                  <div className="text-sm text-gray-500 mb-4 font-medium">Instant Activation!</div>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                    13000 channels
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                    30000 movies VOD
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                    Free update (TVs and VODs)
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                    Fast & Stable
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                    Always Uptime Server
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                    4K, UHD, FHD, HD, Channels
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                    Support All Device
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                    24/7 Live Chat Support
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Multiple Connection Plans */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="pricing-card card rounded-2xl p-8 text-center bg-white shadow-lg border border-gray-200">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-black">2 CONNECTIONS</h3>
                <div className="text-4xl font-bold gold-accent mb-2">£109.90</div>
                <div className="text-lg text-gray-500 mb-2 line-through">70£</div>
                <div className="text-sm text-gray-500 mb-4 font-medium">Instant Activation!</div>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                  13000 channels
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                  30000 movies VOD
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                  Free update (TVs and VODs)
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                  Fast & Stable
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                  Always Uptime Server
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                  4K, UHD, FHD, HD, Channels
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                  Support All Device
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                  24/7 Live Chat Support
                </li>
              </ul>
              <a 
                href="https://wa.me/18606013469?text=Hello! I'm interested in the 2 CONNECTIONS plan (£109.90). Can you provide more information?"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-button w-full inline-block text-center"
              >
                Get Started
              </a>
            </div>
            
            <div className="pricing-card popular card rounded-2xl p-8 text-center bg-white shadow-lg border border-gray-200">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="deal-badge">Most popular</span>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-black">3 CONNECTIONS</h3>
                <div className="text-4xl font-bold gold-accent mb-2">£144.90</div>
                <div className="text-lg text-gray-500 mb-2 line-through">95£</div>
                <div className="text-sm text-gray-500 mb-4 font-medium">Instant Activation!</div>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                  13000 channels
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                  30000 movies VOD
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                  Free update (TVs and VODs)
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                  Fast & Stable
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                  Always Uptime Server
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                  4K, UHD, FHD, HD, Channels
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                  Support All Device
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                  24/7 Live Chat Support
                </li>
              </ul>
              <a 
                href="https://wa.me/18606013469?text=Hello! I'm interested in the 3 CONNECTIONS plan (£144.90). Can you provide more information?"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-button w-full inline-block text-center"
              >
                Get Started
              </a>
            </div>
            
            <div className="pricing-card card rounded-2xl p-8 text-center bg-white shadow-lg border border-gray-200">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-black">4 CONNECTIONS</h3>
                <div className="text-4xl font-bold gold-accent mb-2">£219.90</div>
                <div className="text-lg text-gray-500 mb-2 line-through">130£</div>
                <div className="text-sm text-gray-500 mb-4 font-medium">Instant Activation!</div>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                  13000 channels
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                  30000 movies VOD
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                  Free update (TVs and VODs)
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                  Fast & Stable
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                  Always Uptime Server
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                  4K, UHD, FHD, HD, Channels
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                  Support All Device
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                  24/7 Live Chat Support
                </li>
              </ul>
              <a 
                href="https://wa.me/18606013469?text=Hello! I'm interested in the 4 CONNECTIONS plan (£219.90). Can you provide more information?"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-button w-full inline-block text-center"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Interested in an assistant that fits your <span className="gold-gradient">specific needs</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our Support work 24/24 and 7/7, to receive your inquiries and assist you with any issues or questions you may have
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/18606013469?text=Hello! I'm interested in your IPTV services. Can you provide more information?"
              target="_blank"
              rel="noopener noreferrer"
              className="accent-button text-lg px-8 py-4 inline-flex items-center justify-center"
            >
              Contact us
            </a>
          </div>
        </div>
      </section>
      
    
    </div>
  );
}

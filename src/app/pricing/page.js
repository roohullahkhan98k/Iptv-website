import Footer from '../../components/Footer';
import { CheckCircle } from 'lucide-react';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      
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
      

    </div>
  );
}

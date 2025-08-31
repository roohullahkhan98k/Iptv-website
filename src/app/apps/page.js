import { Smartphone, Tv, Download, Star, Shield, Zap, Globe, Users, Award, CheckCircle, Monitor, Wifi } from 'lucide-react';
import Header from '../../components/Header';
import FloatingAction from '../../components/FloatingAction';

export default function AppsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <FloatingAction />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4A017]/10 to-transparent opacity-20"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gold-gradient gold-glow">Our Custom Apps</span>
          </h1>
          
          <p className="text-2xl md:text-3xl mb-8 font-light text-gray-300">
            Coming Soon - Premium IPTV Mobile & TV Applications
          </p>
          
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-400">
            Experience the ultimate IPTV service on all your devices with our custom-built applications. 
            We're developing native apps for Android, iOS, and Smart TVs to provide you with the best streaming experience.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a 
              href="#features"
              className="accent-button text-lg px-8 py-4 inline-flex items-center justify-center"
            >
              <Download className="w-5 h-5 mr-2" />
              View Features
            </a>
            <a 
              href="https://wa.me/18606013469?text=Hello! I'm interested in your custom IPTV apps. When will they be available?"
              target="_blank"
              rel="noopener noreferrer"
              className="button text-lg px-8 py-4 inline-flex items-center justify-center"
            >
              <Globe className="w-5 h-5 mr-2" />
              Get Notified
            </a>
          </div>
        </div>
      </section>

      {/* Apps Overview Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Available on <span className="gold-gradient">All Platforms</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our custom IPTV applications will be available across all major platforms
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="feature-card card rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#D4A017] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Android App</h3>
              <p className="text-gray-400 mb-6">
                Native Android application optimized for all Android devices. 
                Smooth performance and intuitive interface designed for mobile streaming.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                  Android 7.0+
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                  Optimized for all screen sizes
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                  Background playback support
                </div>
              </div>
            </div>
            
            <div className="feature-card card rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#D4A017] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">iOS App</h3>
              <p className="text-gray-400 mb-6">
                Native iOS application built for iPhone and iPad. 
                Seamless integration with iOS ecosystem and Apple TV support.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                  iOS 13.0+
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                  iPhone & iPad optimized
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                  Apple TV compatibility
                </div>
              </div>
            </div>
            
            <div className="feature-card card rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#D4A017] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-6">
                <Tv className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Smart TV App</h3>
              <p className="text-gray-400 mb-6">
                Dedicated Smart TV application for the ultimate big screen experience. 
                Optimized for all major TV platforms and streaming devices.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                  Android TV & Fire TV
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                  Samsung & LG Smart TVs
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-[#D4A017] mr-2" />
                  4K & HDR support
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              App <span className="gold-gradient">Features</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover what makes our custom IPTV applications the best choice for streaming
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card card rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#D4A017] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-gray-400">Optimized for speed with instant channel switching and minimal buffering</p>
            </div>
            
            <div className="feature-card card rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#D4A017] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">4K & HDR Support</h3>
              <p className="text-gray-400">Enjoy crystal clear 4K resolution and HDR content on supported devices</p>
            </div>
            
            <div className="feature-card card rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#D4A017] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure & Private</h3>
              <p className="text-gray-400">Built with security in mind, protecting your privacy and data</p>
            </div>
            
            <div className="feature-card card rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#D4A017] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Multi-User Support</h3>
              <p className="text-gray-400">Create multiple user profiles for family members with personalized settings</p>
            </div>
            
            <div className="feature-card card rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#D4A017] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-6">
                <Wifi className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Offline Mode</h3>
              <p className="text-gray-400">Download your favorite content for offline viewing when you're on the go</p>
            </div>
            
            <div className="feature-card card rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#D4A017] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-6">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cross-Platform Sync</h3>
              <p className="text-gray-400">Sync your favorites and watch history across all your devices seamlessly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technical <span className="gold-gradient">Specifications</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built with the latest technologies for optimal performance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="feature-card card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 gold-accent">Mobile Apps (Android & iOS)</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#D4A017] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Native Development:</span>
                    <p className="text-gray-400">Built with native SDKs for optimal performance</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#D4A017] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Video Codecs:</span>
                    <p className="text-gray-400">H.264, H.265 (HEVC), VP9 support</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#D4A017] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Audio Support:</span>
                    <p className="text-gray-400">AAC, MP3, AC3, DTS audio formats</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#D4A017] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Streaming Protocols:</span>
                    <p className="text-gray-400">HLS, DASH, RTMP, M3U8 support</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="feature-card card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 gold-accent">Smart TV Applications</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#D4A017] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Platform Support:</span>
                    <p className="text-gray-400">Android TV, Fire TV, Samsung Tizen, LG webOS</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#D4A017] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Resolution Support:</span>
                    <p className="text-gray-400">Up to 4K Ultra HD with HDR10/HLG</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#D4A017] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Remote Control:</span>
                    <p className="text-gray-400">Optimized for TV remote navigation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#D4A017] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Multi-Audio:</span>
                    <p className="text-gray-400">Support for multiple audio tracks and subtitles</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 bg-gradient-to-r from-[#D4A017] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-8">
            <Download className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Coming <span className="gold-gradient">Soon</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Our custom IPTV applications are currently in development. 
            Be the first to know when they're ready for download!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/18606013469?text=Hello! I'm interested in your custom IPTV apps. When will they be available for download?"
              target="_blank"
              rel="noopener noreferrer"
              className="accent-button text-lg px-8 py-4 inline-flex items-center justify-center"
            >
              Get Early Access
            </a>
            <a 
              href="/"
              className="button text-lg px-8 py-4 inline-flex items-center justify-center"
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              <span className="gold-gradient">DJReklesz</span> IPTV
            </h3>
            <p className="text-gray-400">
              Premium streaming experience with custom applications
            </p>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500">
              © 2024 DJReklesz IPTV. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

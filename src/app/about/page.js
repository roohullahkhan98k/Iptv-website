import Footer from '../../components/Footer';
import { Shield, Wifi, Clock, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      
      <section id="about" className="py-20 bg-gray-50">
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
            <div className="feature-card card rounded-2xl p-8 text-center bg-white shadow-lg border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-r from-[#D4A017] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">7-Day Money-Back</h3>
              <p className="text-gray-600">Your satisfaction is our top priority with a 7-day money back guarantee</p>
            </div>
            
            <div className="feature-card card rounded-2xl p-8 text-center bg-white shadow-lg border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-r from-[#D4A017] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-6">
                <Wifi className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">No Buffering</h3>
              <p className="text-gray-600">Smooth streaming with no buffering interruptions</p>
            </div>
            
            <div className="feature-card card rounded-2xl p-8 text-center bg-white shadow-lg border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-r from-[#D4A017] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support for all your needs</p>
            </div>
            
            <div className="feature-card card rounded-2xl p-8 text-center bg-white shadow-lg border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-r from-[#D4A017] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">4K & FHD Quality</h3>
              <p className="text-gray-600">Ultra-high-definition streaming with 4K and FHD quality</p>
            </div>
          </div>
        </div>
      </section>
      
   
    </div>
  );
}

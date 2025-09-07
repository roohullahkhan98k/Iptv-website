import Footer from '../../components/Footer';
import { Tv, Film, Award, Clock } from 'lucide-react';

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      
      <section id="features" className="py-20 bg-gray-50">
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
            <div className="feature-card card rounded-2xl p-6 text-center bg-white shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-r from-[#D4A017] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-4">
                <Tv className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">13000 channels</h3>
            </div>
            
            <div className="feature-card card rounded-2xl p-6 text-center bg-white shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-r from-[#D4A017] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-4">
                <Film className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">30000 movies VOD</h3>
            </div>
            
            <div className="feature-card card rounded-2xl p-6 text-center bg-white shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-r from-[#D4A017] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">4K, FHD, SD & HD Quality</h3>
            </div>
            
            <div className="feature-card card rounded-2xl p-6 text-center bg-white shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-r from-[#D4A017] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">Support 24/7​</h3>
            </div>
          </div>
        </div>
      </section>
      

    </div>
  );
}

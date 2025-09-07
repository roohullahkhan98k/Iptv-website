import Hero from '../components/Hero';
import Footer from '../components/Footer';
import FloatingAction from '../components/FloatingAction';

export default function Home() {
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
                <div className="w-6 h-6 bg-white rounded"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">13000 channels</h3>
            </div>
            
            <div className="feature-card card rounded-2xl p-6 text-center bg-gray-50 shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-r from-[#D4A017] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-white rounded"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">30000 movies VOD</h3>
            </div>
            
            <div className="feature-card card rounded-2xl p-6 text-center bg-gray-50 shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-r from-[#D4A017] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-white rounded"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">4K, FHD, SD & HD Quality</h3>
            </div>
            
            <div className="feature-card card rounded-2xl p-6 text-center bg-gray-50 shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-r from-[#D4A017] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-white rounded"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">Support 24/7​</h3>
            </div>
          </div>
        </div>
      </section>

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
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">TV Shows & Sports</h3>
              <p className="text-gray-600">Premium selection of TV Shows and comprehensive sports channels from around the globe.</p>
            </div>
            
            <div className="feature-card card rounded-2xl p-8 text-center bg-white shadow-lg border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-r from-[#D4A017] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Movies & Series</h3>
              <p className="text-gray-600">Vast collection of movies and series in multiple languages, ready for your entertainment.</p>
            </div>
            
            <div className="feature-card card rounded-2xl p-8 text-center bg-white shadow-lg border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-r from-[#D4A017] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Documentaries</h3>
              <p className="text-gray-600">Engaging documentaries and cultural programs from every corner of the world.</p>
            </div>
          </div>
        </div>
      </section>
      
      <FloatingAction />

    </div>
  );
}

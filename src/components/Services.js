import { Tv, Film, Headphones } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What We <span className="gold-gradient">Offer</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Premium content for every viewer
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="feature-card card rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-[#D4A017] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-6">
              <Tv className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">TV Shows & Sports</h3>
            <p className="text-gray-400">Premium selection of TV Shows and comprehensive sports channels from around the globe.</p>
          </div>
          
          <div className="feature-card card rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-[#D4A017] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-6">
              <Film className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Movies & Series</h3>
            <p className="text-gray-400">Vast collection of movies and series in multiple languages, ready for your entertainment.</p>
          </div>
          
          <div className="feature-card card rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-[#D4A017] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-6">
              <Headphones className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Documentaries</h3>
            <p className="text-gray-400">Engaging documentaries and cultural programs from every corner of the world.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            TAKE ENTERTAINMENT <span className="animated-gradient">FURTHER TODAY</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stream all the TV shows you love
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="feature-showcase card rounded-2xl p-8 interactive-card">
            <div className="relative z-10">
              <div className="text-4xl font-bold gold-accent mb-2 stats-counter">2K+</div>
              <p className="text-gray-400">Active Users</p>
            </div>
          </div>
          
          <div className="feature-showcase card rounded-2xl p-8 interactive-card">
            <div className="relative z-10">
              <div className="text-4xl font-bold gold-accent mb-2  stats-counter">2,000+</div>
              <p className="text-gray-400">Sport Channels</p>
            </div>
          </div>
          
          <div className="feature-showcase card rounded-2xl p-8 interactive-card">
            <div className="relative z-10">
              <div className="text-4xl font-bold gold-accent mb-2 stats-counter">13K+</div>
              <p className="text-gray-400">Channels</p>
            </div>
          </div>
          
          <div className="feature-showcase card rounded-2xl p-8 interactive-card">
            <div className="relative z-10">
              <div className="text-4xl font-bold gold-accent mb-2  stats-counter">30K+</div>
              <p className="text-gray-400">Movies & TV Shows (VOD)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

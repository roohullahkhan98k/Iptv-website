import Hero from '../components/Hero';
import Footer from '../components/Footer';
import FloatingAction from '../components/FloatingAction';
import About from '../components/About';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen" style={{backgroundColor: 'var(--bg-color)'}}>
      <Hero />
      
      {/* Stats Section */}
      <section id="stats" className="py-20" style={{backgroundColor: 'var(--bg-color)'}}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: 'var(--text-color)'}}>
              TAKE ENTERTAINMENT <span className="animated-gradient">FURTHER TODAY</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{color: 'var(--text-color)'}}>
              Stream all the TV shows you love
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="feature-showcase card rounded-2xl p-8 interactive-card shadow-lg" style={{backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', border: '1px solid'}}>
              <div className="relative z-10">
                <div className="text-4xl font-bold gold-accent mb-2 stats-counter">2K+</div>
                <p style={{color: 'var(--text-color)'}}>Active Users</p>
              </div>
            </div>
            
            <div className="feature-showcase card rounded-2xl p-8 interactive-card shadow-lg" style={{backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', border: '1px solid'}}>
              <div className="relative z-10">
                <div className="text-4xl font-bold gold-accent mb-2  stats-counter">2,000+</div>
                <p style={{color: 'var(--text-color)'}}>Sport Channels</p>
              </div>
            </div>
            
            <div className="feature-showcase card rounded-2xl p-8 interactive-card shadow-lg" style={{backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', border: '1px solid'}}>
              <div className="relative z-10">
                <div className="text-4xl font-bold gold-accent mb-2 stats-counter">13K+</div>
                <p style={{color: 'var(--text-color)'}}>Channels</p>
              </div>
            </div>
            
            <div className="feature-showcase card rounded-2xl p-8 interactive-card shadow-lg" style={{backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', border: '1px solid'}}>
              <div className="relative z-10">
                <div className="text-4xl font-bold gold-accent mb-2  stats-counter">30K+</div>
                <p style={{color: 'var(--text-color)'}}>Movies & TV Shows (VOD)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20" style={{backgroundColor: 'var(--bg-color)'}}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: 'var(--text-color)'}}>
              All-in-One <span className="animated-gradient">IPTV Subscription</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{color: 'var(--text-color)'}}>
              Everything you need for the ultimate streaming experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card card rounded-2xl p-6 text-center shadow-lg" style={{backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', border: '1px solid'}}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: 'var(--gradient-start)'}}>
                <div className="w-6 h-6 rounded" style={{backgroundColor: 'var(--bg-color)'}}></div>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{color: 'var(--text-color)'}}>13000 channels</h3>
            </div>
            
            <div className="feature-card card rounded-2xl p-6 text-center shadow-lg" style={{backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', border: '1px solid'}}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: 'var(--gradient-start)'}}>
                <div className="w-6 h-6 rounded" style={{backgroundColor: 'var(--bg-color)'}}></div>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{color: 'var(--text-color)'}}>30000 movies VOD</h3>
            </div>
            
            <div className="feature-card card rounded-2xl p-6 text-center shadow-lg" style={{backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', border: '1px solid'}}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: 'var(--gradient-start)'}}>
                <div className="w-6 h-6 rounded" style={{backgroundColor: 'var(--bg-color)'}}></div>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{color: 'var(--text-color)'}}>4K, FHD, SD & HD Quality</h3>
            </div>
            
            <div className="feature-card card rounded-2xl p-6 text-center shadow-lg" style={{backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', border: '1px solid'}}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: 'var(--gradient-start)'}}>
                <div className="w-6 h-6 rounded" style={{backgroundColor: 'var(--bg-color)'}}></div>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{color: 'var(--text-color)'}}>Support 24/7​</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20" style={{backgroundColor: 'var(--bg-color)'}}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: 'var(--text-color)'}}>
              What We <span className="gold-gradient">Offer</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{color: 'var(--text-color)'}}>
              Premium content for every viewer
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="feature-card card rounded-2xl p-8 text-center shadow-lg" style={{backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', border: '1px solid'}}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{background: 'var(--gradient-start)'}}>
                <div className="w-8 h-8 rounded" style={{backgroundColor: 'var(--bg-color)'}}></div>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{color: 'var(--text-color)'}}>TV Shows & Sports</h3>
              <p style={{color: 'var(--text-color)'}}>Premium selection of TV Shows and comprehensive sports channels from around the globe.</p>
            </div>
            
            <div className="feature-card card rounded-2xl p-8 text-center shadow-lg" style={{backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', border: '1px solid'}}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{background: 'var(--gradient-start)'}}>
                <div className="w-8 h-8 rounded" style={{backgroundColor: 'var(--bg-color)'}}></div>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{color: 'var(--text-color)'}}>Movies & Series</h3>
              <p style={{color: 'var(--text-color)'}}>Vast collection of movies and series in multiple languages, ready for your entertainment.</p>
            </div>
            
            <div className="feature-card card rounded-2xl p-8 text-center shadow-lg" style={{backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', border: '1px solid'}}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{background: 'var(--gradient-start)'}}>
                <div className="w-8 h-8 rounded" style={{backgroundColor: 'var(--bg-color)'}}></div>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{color: 'var(--text-color)'}}>Documentaries</h3>
              <p style={{color: 'var(--text-color)'}}>Engaging documentaries and cultural programs from every corner of the world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Pricing Section */}
      <Pricing />

      {/* Contact Section */}
      <Contact />
      
      <FloatingAction />

    </div>
  );
}
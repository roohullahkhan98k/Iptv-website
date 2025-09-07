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
 



      {/* About Section */}
  

      {/* Pricing Section */}
      <Pricing />

      {/* Contact Section */}
      <Contact />
      
      <FloatingAction />

    </div>
  );
}
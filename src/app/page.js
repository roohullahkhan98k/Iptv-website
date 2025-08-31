import Header from '../components/Header';
import Hero from '../components/Hero';
import FloatingAction from '../components/FloatingAction';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FloatingAction />
    </div>
  );
}

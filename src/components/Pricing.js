import PricingCard from './PricingCard';

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Choose Your <span className="animated-gradient">Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the plan that suits your requirements.
          </p>
        </div>
        
        {/* All Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          <PricingCard 
            image="/assets/1.jpg"
            planName="BASIC PLAN"
            price="£109.90"
            color="blue"
          />
          
          <PricingCard 
            image="/assets/2.jpg"
            planName="PREMIUM PLAN"
            price="£144.90"
            color="purple"
            badge="Most popular"
          />
          
          <PricingCard 
            image="/assets/3.jpg"
            planName="ULTIMATE PLAN"
            price="£219.90"
            color="red"
          />
          
          <PricingCard 
            image="/assets/4.jpg"
            planName="STARTER PLAN"
            price="£79.90"
            color="pink"
          />
          
          <PricingCard 
            image="/assets/5.jpg"
            planName="PROFESSIONAL PLAN"
            price="£179.90"
            color="grey"
            badge="Best Value"
          />
          
          <PricingCard 
            image="/assets/6.jpg"
            planName="ENTERPRISE PLAN"
            price="£299.90"
            color="green"
          />
        </div>
      </div>
    </section>
  );
}

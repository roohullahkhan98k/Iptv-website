'use client'
import { useState } from 'react';

export default function PricingCard({ 
  image, 
  planName, 
  price, 
  color = 'blue',
  badge = null 
}) {
  const [isHovered, setIsHovered] = useState(false);

  const colorClasses = {
    blue: 'bg-blue-500',
    purple: 'bg-purple-500', 
    red: 'bg-red-500',
    pink: 'bg-pink-500',
    grey: 'bg-gray-500',
    green: 'bg-green-500'
  };

  return (
    <div className="text-center mb-2">
      <div 
        className="pricing-card rounded-lg relative overflow-hidden mx-auto cursor-pointer transition-all duration-300 border-2 border-gray-400 shadow-sm"
        style={{
          backgroundImage: `url(${image})`, 
          backgroundSize: 'contain', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat',
          width: '350px', 
          height: '350px'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >

         {/* Hover Overlay */}
         {isHovered && (
           <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center z-10">
             <div className="text-center">
               <button 
                 className={`px-8 py-3 rounded-lg font-bold text-white transition-all duration-300 ${colorClasses[color]} hover:opacity-90`}
                 onClick={() => window.open(`https://wa.me/18606013469?text=Hello! I'm interested in the ${planName} (${price}). Can you provide more information?`, '_blank')}
               >
                 Buy
               </button>
             </div>
           </div>
         )}
      </div>
      
      {/* Name and Price below card */}
      <div className="mt-2 text-center">
        <h3 className="text-lg font-bold mb-1 text-black">{planName}</h3>
        <div className="text-lg font-bold gold-accent">{price}</div>
      </div>
    </div>
  );
}

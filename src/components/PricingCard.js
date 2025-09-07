'use client'
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

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
        className="pricing-card rounded-lg relative overflow-hidden mx-auto cursor-pointer border border-transparent shadow-sm"
        style={{
          width: '370px', 
          height: '480px'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image area - full 370px width */}
        <div className="w-full relative" style={{height: '350px'}}>
          <Image
            src={image}
            alt={planName}
            fill
            className="object-contain"
            sizes="370px"
            priority
          />
        </div>

        {/* Name and Price partition - more space */}
        <motion.div 
          className="p-6 text-center"
          animate={{
            y: isHovered ? -32 : 16
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut"
          }}
        >
          <h3 className="text-lg mb-2 text-black">{planName}</h3>
          <div className="text-lg text-black">{price}</div>
        </motion.div>

        {/* Full width button appears on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              className="absolute bottom-0 left-0 right-0"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut"
              }}
            >
              <button 
                className="w-full py-2 font-bold text-white accent-button rounded-none"
                style={{borderRadius: '0 0 8px 8px'}}
                onClick={() => window.open(`https://wa.me/18606013469?text=Hello! I'm interested in the ${planName} (${price}). Can you provide more information?`, '_blank')}
              >
                Select
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

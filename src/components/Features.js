'use client'
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  Globe, 
  Smartphone, 
  Tv, 
  Headphones, 
  Wifi, 
  Star,
  Play,
  Download,
  Settings,
  Award,
  Clock,
  Users,
  TrendingUp
} from 'lucide-react';

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Streaming",
      description: "Experience ultra-fast streaming with zero buffering. Our advanced servers ensure seamless entertainment.",
      stats: "99.9% Uptime",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Shield,
      title: "Military-Grade Security",
      description: "Bank-level encryption and privacy protection. Your data and viewing habits are completely secure.",
      stats: "256-bit SSL",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Globe,
      title: "Global Content Library",
      description: "Access content from every corner of the world. From Hollywood blockbusters to international sports.",
      stats: "150+ Countries",
      color: "from-green-400 to-blue-500"
    },
    {
      icon: Smartphone,
      title: "Multi-Device Support",
      description: "Watch on any device - Smart TV, Phone, Tablet, Laptop, or Gaming Console. Seamless experience everywhere.",
      stats: "10+ Devices",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: Tv,
      title: "4K Ultra HD Quality",
      description: "Crystal clear 4K, UHD, and HD streaming with the latest movies, TV shows, and live sports.",
      stats: "4K Resolution",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Headphones,
      title: "24/7 Premium Support",
      description: "Round-the-clock customer support. Our experts are always ready to help you anytime, anywhere.",
      stats: "24/7 Available",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white/50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#D4A017]/10 to-[#FFD700]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-black">
            Powerful <span className="gold-gradient">Features</span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-12">
            Discover the cutting-edge technology that makes DJReklesz IPTV the ultimate streaming experience
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.span 
              className="bg-gradient-to-r from-[#D4A017] to-[#FFD700] text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              🚀 Next-Gen Technology
            </motion.span>
            <motion.span 
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              ⚡ Lightning Fast
            </motion.span>
            <motion.span 
              className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              🛡️ Ultra Secure
            </motion.span>
          </div>
        </motion.div>

        {/* Interactive Feature Showcase */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-500 ${
                    activeFeature === index 
                      ? 'bg-gradient-to-r from-[#D4A017] to-[#FFD700] text-white shadow-2xl scale-105' 
                      : 'bg-white text-gray-700 shadow-lg hover:shadow-xl'
                  }`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      className={`w-16 h-16 rounded-full flex items-center justify-center ${
                        activeFeature === index 
                          ? 'bg-white/20' 
                          : `bg-gradient-to-r ${feature.color}`
                      }`}
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      <IconComponent className={`w-8 h-8 ${
                        activeFeature === index ? 'text-white' : 'text-white'
                      }`} />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-2 ${
                        activeFeature === index ? 'text-white' : 'text-black'
                      }`}>
                        {feature.title}
                      </h3>
                      <p className={`text-sm ${
                        activeFeature === index ? 'text-white/90' : 'text-gray-600'
                      }`}>
                        {feature.description}
                      </p>
                    </div>
                    <div className={`text-right ${
                      activeFeature === index ? 'text-white' : 'text-[#D4A017]'
                    }`}>
                      <div className="text-lg font-bold">{feature.stats}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Feature Visualization */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-12 text-center relative overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4A017]/20 to-[#FFD700]/20 animate-pulse"></div>
              
              <motion.div 
                className="relative z-10"
                key={activeFeature}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-[#D4A017] to-[#FFD700] flex items-center justify-center shadow-2xl"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {React.createElement(features[activeFeature].icon, {
                    className: "w-16 h-16 text-white"
                  })}
                </motion.div>
                
                <h3 className="text-3xl font-bold mb-4 text-black">
                  {features[activeFeature].title}
                </h3>
                <p className="text-xl text-gray-600 mb-8">
                  {features[activeFeature].description}
                </p>
                
                <motion.div 
                  className="bg-gradient-to-r from-[#D4A017] to-[#FFD700] text-white px-8 py-4 rounded-full text-lg font-bold inline-block"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {features[activeFeature].stats}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid md:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {[
            { icon: Users, number: "2,000+", label: "Happy Customers", color: "from-blue-500 to-purple-600" },
            { icon: Clock, number: "24/7", label: "Support Available", color: "from-green-500 to-teal-600" },
            { icon: Award, number: "99.9%", label: "Uptime Guarantee", color: "from-yellow-500 to-orange-500" },
            { icon: TrendingUp, number: "150+", label: "Countries Served", color: "from-pink-500 to-red-500" }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                className="text-center group"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <IconComponent className="w-10 h-10 text-white" />
                </motion.div>
                <div className="text-4xl font-bold text-black mb-2">{stat.number}</div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-[#D4A017] to-[#FFD700] rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of satisfied customers and transform your entertainment experience today
              </p>
              <motion.a
                href="https://wa.me/18606013469?text=Hello! I want to experience the amazing features of DJReklesz IPTV. Can you help me get started?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#D4A017] text-xl font-bold px-12 py-4 rounded-full shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Now 
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
'use client'
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Smartphone, 
  Tv, 
  Monitor, 
  Tablet, 
  Gamepad2, 
  Laptop,
  Download,
  Play,
  Wifi,
  Shield,
  Zap,
  Star,
  CheckCircle,
  ArrowRight,
  Apple,
  Android
} from 'lucide-react';

export default function Apps() {
  const [activeApp, setActiveApp] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const apps = [
    {
      name: "Smart TV App",
      icon: Tv,
      description: "Watch on your Smart TV with our dedicated app. Crystal clear 4K streaming with intuitive interface.",
      features: ["4K Ultra HD", "Easy Navigation", "Parental Controls", "Multi-Language"],
      color: "from-blue-500 to-purple-600",
      devices: ["Samsung", "LG", "Sony", "TCL", "Hisense"]
    },
    {
      name: "Mobile App",
      icon: Smartphone,
      description: "Take your entertainment anywhere with our mobile app. Stream on the go with offline downloads.",
      features: ["Offline Downloads", "HD Streaming", "Chromecast Support", "Background Play"],
      color: "from-green-500 to-teal-600",
      devices: ["iOS", "Android", "Tablet"]
    },
    {
      name: "Desktop App",
      icon: Monitor,
      description: "Full-featured desktop application with advanced controls and multi-window support.",
      features: ["Multi-Window", "Advanced Controls", "Keyboard Shortcuts", "Picture-in-Picture"],
      color: "from-purple-500 to-pink-500",
      devices: ["Windows", "macOS", "Linux"]
    },
    {
      name: "Gaming Console",
      icon: Gamepad2,
      description: "Optimized for gaming consoles with low latency and high performance streaming.",
      features: ["Low Latency", "High Performance", "Gaming Mode", "Controller Support"],
      color: "from-orange-500 to-red-500",
      devices: ["PlayStation", "Xbox", "Nintendo Switch"]
    }
  ];

  const supportedDevices = [
    { name: "Smart TVs", icon: Tv, count: "50+ Models" },
    { name: "Mobile Devices", icon: Smartphone, count: "iOS & Android" },
    { name: "Computers", icon: Laptop, count: "All Platforms" },
    { name: "Gaming Consoles", icon: Gamepad2, count: "4 Major Brands" },
    { name: "Tablets", icon: Tablet, count: "All Sizes" },
    { name: "Streaming Devices", icon: Wifi, count: "10+ Devices" }
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

  return (
    <section id="apps" className="py-20 bg-white relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white/50"></div>
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-[#D4A017]/10 to-[#FFD700]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-black">
            Apps for <span className="gold-gradient">Every Device</span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-12">
            Download our apps and enjoy premium IPTV streaming on any device, anywhere, anytime
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.span 
              className="bg-gradient-to-r from-[#D4A017] to-[#FFD700] text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
             Mobile Apps
            </motion.span>
            <motion.span 
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
             Smart TV Apps
            </motion.span>
            <motion.span 
              className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
               Desktop Apps
            </motion.span>
          </div>
        </motion.div>

        {/* App Showcase */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* App Cards */}
          <div className="space-y-6">
            {apps.map((app, index) => {
              const IconComponent = app.icon;
              return (
                <motion.div
                  key={index}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-500 ${
                    activeApp === index 
                      ? 'bg-gradient-to-r from-[#D4A017] to-[#FFD700] text-white shadow-2xl scale-105' 
                      : 'bg-white text-gray-700 shadow-lg hover:shadow-xl'
                  }`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => setActiveApp(index)}
                >
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      className={`w-16 h-16 rounded-full flex items-center justify-center ${
                        activeApp === index 
                          ? 'bg-white/20' 
                          : `bg-gradient-to-r ${app.color}`
                      }`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-2 ${
                        activeApp === index ? 'text-white' : 'text-black'
                      }`}>
                        {app.name}
                      </h3>
                      <p className={`text-sm ${
                        activeApp === index ? 'text-white/90' : 'text-gray-600'
                      }`}>
                        {app.description}
                      </p>
                    </div>
                    <motion.div 
                      className={`text-right ${
                        activeApp === index ? 'text-white' : 'text-[#D4A017]'
                      }`}
                      whileHover={{ x: 5 }}
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* App Details */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4A017]/20 to-[#FFD700]/20 animate-pulse"></div>
              
              <motion.div 
                className="relative z-10"
                key={activeApp}
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
                  {React.createElement(apps[activeApp].icon, {
                    className: "w-16 h-16 text-white"
                  })}
                </motion.div>
                
                <h3 className="text-3xl font-bold mb-4 text-black">
                  {apps[activeApp].name}
                </h3>
                <p className="text-xl text-gray-600 mb-8">
                  {apps[activeApp].description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {apps[activeApp].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-[#D4A017]" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  className="bg-gradient-to-r from-[#D4A017] to-[#FFD700] text-white px-8 py-4 rounded-full text-lg font-bold inline-block"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Now
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Supported Devices */}
        <motion.div 
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6 text-black">
              Compatible with <span className="gold-gradient">All Devices</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our apps work seamlessly across all major platforms and devices
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            {supportedDevices.map((device, index) => {
              const IconComponent = device.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center group"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-r from-[#D4A017] to-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </motion.div>
                  <div className="text-lg font-bold text-black mb-2">{device.name}</div>
                  <div className="text-gray-600 text-sm">{device.count}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Download Section */}
        <motion.div 
          className="text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-[#D4A017] to-[#FFD700] rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-6">Ready to Download?</h3>
              <p className="text-xl mb-8 opacity-90">
                Get started with our apps and enjoy premium streaming on any device
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <motion.a
                  href="https://wa.me/18606013469?text=Hello! I want to download the DJReklesz IPTV apps. Can you help me get started?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-white text-[#D4A017] text-xl font-bold px-8 py-4 rounded-full shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-6 h-6" />
                  <span>Download Apps</span>
                </motion.a>
                <motion.a
                  href="https://wa.me/18606013469?text=Hello! I need help setting up the DJReklesz IPTV apps on my device."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-white/20 text-white text-xl font-bold px-8 py-4 rounded-full border-2 border-white/30"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-6 h-6" />
                  <span>Setup Guide</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

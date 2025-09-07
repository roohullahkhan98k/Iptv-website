'use client'
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  MapPin,
  Send,
  CheckCircle,
  Zap,
  Shield,
  Headphones
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Hello! My name is ${formData.name}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/18606013469?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp Chat",
      description: "Instant support via WhatsApp",
      action: "Chat Now",
      color: "from-green-500 to-green-600",
      href: "https://wa.me/18606013469?text=Hello! I need support with DJReklesz IPTV services."
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us for immediate assistance",
      action: "Call Now",
      color: "from-blue-500 to-blue-600",
      href: "tel:+18606013469"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      action: "Email Us",
      color: "from-purple-500 to-purple-600",
      href: "mailto:support@djreklesz.com"
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance"
    },
    {
      icon: Zap,
      title: "Instant Response",
      description: "Quick replies within minutes"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your data is always protected"
    },
    {
      icon: Headphones,
      title: "Expert Team",
      description: "Professional IPTV specialists"
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

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden" ref={ref}>
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
            Get in <span className="gold-gradient">Touch</span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-12">
            Ready to experience premium IPTV? Our expert team is here to help you get started
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <motion.a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 text-center">
                  <motion.div 
                    className={`w-20 h-20 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-black">{method.title}</h3>
                  <p className="text-gray-600 mb-6">{method.description}</p>
                  <motion.div 
                    className={`inline-block bg-gradient-to-r ${method.color} text-white px-6 py-3 rounded-full font-bold`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {method.action}
                  </motion.div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Main Content Grid */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-start"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
              <h3 className="text-3xl font-bold mb-8 text-black">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A017] focus:border-transparent transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A017] focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A017] focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your IPTV needs..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#D4A017] to-[#FFD700] text-white py-4 rounded-lg font-bold text-lg flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-6 h-6" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Support Features */}
          <motion.div variants={itemVariants}>
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-black">Why Choose Our Support?</h3>
                <p className="text-lg text-gray-600 mb-8">
                  We're committed to providing the best IPTV experience with world-class customer support
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-r from-[#D4A017] to-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </motion.div>
                      <h4 className="text-lg font-bold text-black mb-2">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </motion.div>
                  );
                })}
              </div>
              
              <div className="bg-gradient-to-r from-[#D4A017] to-[#FFD700] rounded-2xl p-8 text-white text-center">
                <h4 className="text-2xl font-bold mb-4">Need Immediate Help?</h4>
                <p className="text-lg mb-6 opacity-90">
                  Our support team responds within minutes during business hours
                </p>
                <motion.a
                  href="https://wa.me/18606013469?text=Hello! I need immediate support with DJReklesz IPTV services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-[#D4A017] px-8 py-4 rounded-full font-bold text-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Instant Support
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

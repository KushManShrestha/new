import React from 'react';
import { ArrowDown, Mail, Phone, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-64 h-64 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-24 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Kush Man
              <span className="block text-teal-300">Shrestha</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-6"
            >
              <h2 className="text-2xl lg:text-3xl font-semibold mb-2">QA Engineer</h2>
              <p className="text-xl text-blue-100 max-w-lg">
                Ensuring software excellence through comprehensive testing strategies, 
                automation frameworks, and meticulous quality assurance practices.
              </p>
            </motion.div>

            {/* Contact Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a
                href="mailto:sthakush@gmail.com"
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 group"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">sthakush@gmail.com</span>
              </a>
              <a
                href="tel:9849527999"
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 group"
              >
                <Phone size={18} className="group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">9849527999</span>
              </a>
              <a
                href="https://linkedin.com/in/kush-man-shrestha-794a53133"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 group"
              >
                <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </motion.div>

            <motion.button
              onClick={scrollToAbout}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Explore My Work</span>
              <ArrowDown size={20} />
            </motion.button>
          </motion.div>

          {/* Right Content - Professional Photo Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl"
              >
                <div className="w-72 h-72 lg:w-88 lg:h-88 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <div className="text-6xl lg:text-8xl text-white font-bold">KMS</div>
                </div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-orange-400 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
              >
                QA
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-4 -left-4 bg-green-400 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg"
              >
                TEST
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
        onClick={scrollToAbout}
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
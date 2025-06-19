import React from 'react';
import { Award, Calendar, MapPin, User } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { icon: Calendar, label: 'Years Experience', value: '5+' },
    { icon: Award, label: 'Projects Completed', value: '50+' },
    { icon: User, label: 'Teams Collaborated', value: '15+' },
    { icon: MapPin, label: 'Location', value: 'Nepal' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate QA Engineer with extensive experience in quality assurance, 
            test automation, and software testing methodologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Dedicated to Software Excellence
            </h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                As a dedicated QA Engineer with over 5 years of experience, I specialize in 
                creating comprehensive testing strategies that ensure software reliability, 
                performance, and user satisfaction. My expertise spans across manual testing, 
                automated testing frameworks, and quality assurance best practices.
              </p>
              
              <p>
                I have successfully worked on diverse projects ranging from educational platforms 
                to complex web applications, consistently delivering high-quality solutions that 
                meet both functional and non-functional requirements. My approach combines 
                meticulous attention to detail with innovative testing methodologies.
              </p>
              
              <p>
                Currently working at InnovateTech, I lead quality assurance initiatives and 
                collaborate with cross-functional teams to implement robust testing processes 
                that reduce defects and improve overall product quality.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Core Competencies</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Manual Testing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Test Automation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">API Testing</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Performance Testing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Security Testing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Mobile Testing</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4 group-hover:bg-blue-200 transition-colors">
                  <stat.icon size={24} className="text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
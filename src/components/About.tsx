import React from 'react';
import { Award, Calendar, MapPin, User } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { icon: Calendar, label: 'Years Experience', value: '6+' },
    { icon: Award, label: 'Projects Worked On', value: '20+' },
    { icon: User, label: 'Cross-Functional Teams', value: '12+' },
    { icon: MapPin, label: 'Location', value: 'Nepal' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">

        {/* Header */}
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
            project management, and software testing methodologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Description */}
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
                As a dedicated QA Engineer with around 4 years of experience, I specialize in
                creating comprehensive testing strategies that ensure software reliability,
                performance, and user satisfaction.
              </p>
              <p>
                I have successfully worked on diverse projects ranging from educational platforms
                to complex web applications. My approach combines detail-oriented testing with
                innovative methodologies.
              </p>
              <p>
                At InnovateTech, I lead quality assurance efforts and manage projects. I collaborate
                with cross-functional teams to ensure timely, high-quality product delivery using
                robust testing processes.
              </p>
            </div>

            {/* Core Competencies */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Core Competencies
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  {['Manual Testing', 'Test Automation', 'API Testing'].map((skill) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {['Performance Testing', 'Security Testing', 'Mobile Testing'].map((skill) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
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
                    <Icon size={24} className="text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;

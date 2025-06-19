import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Testing Methodologies',
      skills: [
        { name: 'Manual Testing', level: 95 },
        { name: 'Automated Testing', level: 88 },
        { name: 'API Testing', level: 90 },
        { name: 'Performance Testing', level: 85 },
      ]
    },
    {
      title: 'Tools & Frameworks',
      skills: [
        { name: 'Selenium WebDriver', level: 90 },
        { name: 'Postman/REST APIs', level: 92 },
        { name: 'JMeter', level: 80 },
        { name: 'Cypress', level: 85 },
      ]
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', level: 85 },
        { name: 'Python', level: 82 },
        { name: 'JavaScript', level: 88 },
        { name: 'SQL', level: 90 },
      ]
    },
    {
      title: 'Platforms & Databases',
      skills: [
        { name: 'Web Applications', level: 95 },
        { name: 'Mobile Testing', level: 80 },
        { name: 'MySQL/PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 75 },
      ]
    }
  ];

  const certifications = [
    'ISTQB Foundation Level',
    'Agile Testing Certification',
    'Selenium WebDriver Certification',
    'API Testing with Postman',
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive skill set in quality assurance, testing methodologies, 
            and modern QA tools and frameworks.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05), duration: 1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-600 to-teal-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Professional Certifications
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-blue-50 to-teal-50 p-4 rounded-lg border border-blue-100 text-center group"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-700 transition-colors">
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
                <p className="text-gray-700 font-medium text-sm">{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
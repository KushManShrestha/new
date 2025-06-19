import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor in Information Technology',
      institution: 'Islington College',
      location: 'Kathmandu, Nepal',
      period: '2018 - 2022',
      website: 'https://islington.edu.np/',
      description: 'Comprehensive study of software development, database management, and quality assurance practices.',
      achievements: [
        'Graduated with Distinction',
        'Specialized in Software Testing and Quality Assurance',
        'Completed capstone project on automated testing frameworks'
      ]
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Herald College',
      location: 'Kathmandu, Nepal',
      period: '2016 - 2018',
      website: 'https://heraldcollege.edu.np/',
      description: 'Foundation studies in Science and Mathematics with focus on computer science fundamentals.',
      achievements: [
        'Science Stream with Computer Science',
        'Academic Excellence Award',
        'Active member of Computer Club'
      ]
    },
    {
      degree: 'Secondary Education',
      institution: 'KTM Model College',
      location: 'Kathmandu, Nepal',
      period: '2014 - 2016',
      website: 'https://ktmmodelcollege.edu.np/',
      description: 'Secondary level education with strong foundation in mathematics and science subjects.',
      achievements: [
        'First Division with Honors',
        'Outstanding Performance in Mathematics',
        'School Representative in Science Fair'
      ]
    }
  ];

  const certifications = [
    {
      name: 'ISTQB Foundation Level',
      issuer: 'International Software Testing Qualifications Board',
      year: '2023',
      description: 'Certified in fundamental testing principles and practices'
    },
    {
      name: 'Agile Testing Certification',
      issuer: 'Agile Alliance',
      year: '2022',
      description: 'Specialized certification in agile testing methodologies'
    },
    {
      name: 'Selenium WebDriver Certification',
      issuer: 'Test Automation University',
      year: '2022',
      description: 'Advanced certification in Selenium test automation'
    },
    {
      name: 'API Testing with Postman',
      issuer: 'Postman Academy',
      year: '2021',
      description: 'Comprehensive certification in API testing and validation'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Education & Certifications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Continuous learning and professional development through formal education 
            and industry-recognized certifications.
          </p>
        </motion.div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Academic Background</h3>
          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="relative mb-8 last:mb-0"
              >
                {/* Timeline Line */}
                {index < education.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-full bg-blue-200 hidden md:block"></div>
                )}
                
                {/* Timeline Dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                
                {/* Content Card */}
                <div className="md:ml-16 bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {edu.degree}
                      </h4>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 mb-4">
                        <div className="flex items-center space-x-2">
                          <GraduationCap size={18} className="text-blue-600" />
                          <a 
                            href={edu.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold hover:text-blue-600 transition-colors"
                          >
                            {edu.institution}
                          </a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin size={18} className="text-teal-600" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar size={18} className="text-orange-600" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{edu.description}</p>

                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-3">Achievements</h5>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Award size={16} className="text-yellow-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-blue-600 font-medium text-sm mb-2">
                      {cert.issuer} • {cert.year}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
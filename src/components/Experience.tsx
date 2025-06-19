import React from 'react';
import { Calendar, MapPin, Briefcase, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'QA Engineer',
      company: 'InnovateTech',
      location: 'Nepal',
      period: '2023 - Present',
      website: 'https://www.innovatetech.io/',
      responsibilities: [
        'Lead quality assurance initiatives for web and mobile applications',
        'Develop and execute comprehensive test plans and test cases',
        'Implement automated testing frameworks using Selenium and Cypress',
        'Collaborate with development teams to ensure quality deliverables',
        'Mentor junior QA team members and establish testing best practices'
      ],
      achievements: [
        'Reduced critical bugs in production by 40%',
        'Implemented CI/CD testing pipeline',
        'Established QA standards and documentation'
      ]
    },
    {
      title: 'Senior QA Tester',
      company: 'InfoDev',
      location: 'Nepal',
      period: '2021 - 2023',
      website: 'https://infodev.com.np/',
      responsibilities: [
        'Performed manual and automated testing for educational platforms',
        'Created detailed test documentation and bug reports',
        'Coordinated with cross-functional teams for release management',
        'Conducted performance and security testing',
        'Trained team members on testing methodologies'
      ],
      achievements: [
        'Improved test coverage by 60%',
        'Reduced testing cycle time by 35%',
        'Successfully led testing for 3 major product releases'
      ]
    },
    {
      title: 'QA Tester',
      company: 'Islington College',
      location: 'Nepal',
      period: '2020 - 2021',
      website: 'https://islington.edu.np/',
      responsibilities: [
        'Executed test cases for educational management systems',
        'Performed API testing using Postman',
        'Conducted user acceptance testing sessions',
        'Maintained test environments and test data',
        'Collaborated with developers on bug resolution'
      ],
      achievements: [
        'Identified and resolved 200+ critical issues',
        'Established automated testing processes',
        'Improved system reliability by 45%'
      ]
    },
    {
      title: 'Junior QA Analyst',
      company: 'Herald College',
      location: 'Nepal',
      period: '2019 - 2020',
      website: 'https://heraldcollege.edu.np/',
      responsibilities: [
        'Performed functional testing on web applications',
        'Created and maintained test cases and test scripts',
        'Participated in regression testing cycles',
        'Documented defects and tracked resolution progress',
        'Assisted in test planning and estimation activities'
      ],
      achievements: [
        'Completed training on advanced testing techniques',
        'Contributed to successful launch of student portal',
        'Maintained 95% test execution accuracy'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven track record of delivering high-quality software solutions through 
            comprehensive testing strategies and quality assurance practices.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-full bg-blue-200 hidden md:block"></div>
              )}
              
              {/* Timeline Dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
              
              {/* Content Card */}
              <div className="md:ml-16 bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 mb-4">
                      <div className="flex items-center space-x-2">
                        <Briefcase size={18} className="text-blue-600" />
                        <a 
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold hover:text-blue-600 transition-colors"
                        >
                          {exp.company}
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={18} className="text-teal-600" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar size={18} className="text-orange-600" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-700">
                          <CheckCircle size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                          <span className="text-sm">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-700">
                          <CheckCircle size={16} className="text-teal-600 mt-1 flex-shrink-0" />
                          <span className="text-sm font-medium">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
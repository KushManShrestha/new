import React from 'react';
import { ExternalLink, Github, Calendar, Users, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'MySecondTeacher Platform',
      description: 'Comprehensive testing of educational platform serving thousands of students with interactive learning modules, assessment tools, and progress tracking.',
      duration: '6 months',
      role: 'Lead QA Engineer',
      team: '8 members',
      website: 'https://mysecondteacher.com/',
      technologies: [
        'Selenium WebDriver', 
        'Postman API Testing', 
        'JMeter Performance Testing',
        'Manual Testing',
        'Cross-browser Testing',
        'Mobile Testing'
      ],
      achievements: [
        'Designed and executed 500+ test cases covering all user scenarios',
        'Implemented automated regression test suite reducing testing time by 60%',
        'Identified and resolved critical security vulnerabilities',
        'Ensured platform scalability for 10,000+ concurrent users'
      ],
      challenges: [
        'Complex user role management system testing',
        'Integration testing with multiple third-party services',
        'Performance optimization for large-scale data processing'
      ],
      type: 'Educational Platform'
    },
    {
      title: 'KungFu Quiz Application',
      description: 'End-to-end testing of gamified learning application with real-time multiplayer functionality, leaderboards, and adaptive difficulty algorithms.',
      duration: '4 months',
      role: 'Senior QA Tester',
      team: '5 members',
      website: 'https://www.kungfuquiz.com/',
      technologies: [
        'Cypress Test Automation',
        'API Testing with Newman',
        'Load Testing with JMeter',
        'Mobile App Testing',
        'Database Testing',
        'WebSocket Testing'
      ],
      achievements: [
        'Developed comprehensive test automation framework',
        'Reduced critical bugs in production by 45%',
        'Established continuous integration testing pipeline',
        'Successfully tested real-time multiplayer functionality'
      ],
      challenges: [
        'Testing real-time synchronization between multiple users',
        'Complex algorithm testing for adaptive difficulty',
        'Cross-platform compatibility testing'
      ],
      type: 'Gaming Application'
    },
    {
      title: 'Ivy Learning Management System',
      description: 'Quality assurance for advanced LMS platform with AI-powered content recommendations, virtual classroom integration, and comprehensive analytics dashboard.',
      duration: '8 months',
      role: 'QA Team Lead',
      team: '12 members',
      website: 'https://ivy.advancedpedagogy.com/',
      technologies: [
        'TestNG Framework',
        'REST API Testing',
        'Selenium Grid',
        'Performance Testing',
        'Security Testing',
        'Accessibility Testing'
      ],
      achievements: [
        'Led QA team for successful platform launch',
        'Implemented test-driven development practices',
        'Achieved 95% test coverage across all modules',
        'Established quality gates and release criteria'
      ],
      challenges: [
        'AI algorithm testing and validation',
        'Complex integration with video conferencing tools',
        'Ensuring GDPR compliance and data security'
      ],
      type: 'Learning Management System'
    },
    {
      title: 'Educational Institution Management System',
      description: 'Complete testing lifecycle for multi-institutional management platform handling student records, faculty management, and administrative workflows.',
      duration: '10 months',
      role: 'QA Engineer',
      team: '15 members',
      technologies: [
        'Manual Testing',
        'Database Testing',
        'API Testing',
        'User Acceptance Testing',
        'Regression Testing',
        'Integration Testing'
      ],
      achievements: [
        'Managed testing for 5+ educational institutions',
        'Reduced system downtime by 50% through thorough testing',
        'Implemented automated daily health checks',
        'Successfully migrated legacy data with zero data loss'
      ],
      challenges: [
        'Testing complex business logic across multiple institutions',
        'Legacy system integration and data migration',
        'Ensuring system performance during peak admission periods'
      ],
      type: 'Management System'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing significant QA projects where I've applied comprehensive testing 
            strategies to ensure software quality and reliability.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                      {project.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                </div>
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 ml-4 p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              </div>

              {/* Project Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-white rounded-lg">
                <div className="text-center">
                  <Calendar size={20} className="text-blue-600 mx-auto mb-1" />
                  <div className="text-sm font-medium text-gray-900">{project.duration}</div>
                  <div className="text-xs text-gray-500">Duration</div>
                </div>
                <div className="text-center">
                  <Users size={20} className="text-teal-600 mx-auto mb-1" />
                  <div className="text-sm font-medium text-gray-900">{project.team}</div>
                  <div className="text-xs text-gray-500">Team Size</div>
                </div>
                <div className="text-center">
                  <CheckCircle size={20} className="text-green-600 mx-auto mb-1" />
                  <div className="text-sm font-medium text-gray-900">{project.role}</div>
                  <div className="text-xs text-gray-500">My Role</div>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {project.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start space-x-2">
                      <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Challenges Overcome</h4>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, chalIndex) => (
                    <li key={chalIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
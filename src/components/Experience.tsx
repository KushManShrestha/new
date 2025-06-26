import React from 'react';
import { Calendar, MapPin, Briefcase, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Project Manager',
    company: 'Innovate Tech',
    location: 'Baneshwor, Kathmandu, Nepal',
    period: '2025 – Present',
    website: 'https://www.innovatetech.io/',
    responsibilities: [
      'Managed the full project lifecycle of the KFQ platform, delivering new features and improvements on time and within scope.',
      'Led sprint planning, stand-ups, backlog grooming, and milestone tracking using GitLab Kanban boards and Excel-based trackers.',
      'Coordinated across cross-functional teams to ensure alignment of project goals, deadlines, and deliverables.',
      'Collaborated with stakeholders to gather and document business and technical requirements.',
      'Oversaw User Acceptance Testing (UAT) phases for release readiness.',
      'Maintained comprehensive project documentation including test plans, release notes, and project logs.',
      'Contributed to product strategy with innovative feature proposals like AI-driven question generation.'
    ],
    achievements: [
      'Successfully led launch of AI-enhanced features and dashboards.',
      'Improved project tracking and release cycle transparency.',
      'Maintained on-time delivery for all feature releases in 2024–2025.'
    ]
  },
  {
    title: 'Software QA Engineer',
    company: 'Innovate Tech',
    location: 'Baneshwor, Kathmandu, Nepal',
    period: '2022 – 2024',
    website: 'https://www.innovatetech.io/',
    responsibilities: [
      'Led QA processes including planning, execution, and reporting for web applications.',
      'Mentored junior QA team members across active projects.',
      'Collaborated with PMs and UI/UX to define clear acceptance criteria and improve user experience.',
      'Oversaw UAT with stakeholders to ensure deployment-readiness.',
      'Conducted security testing using Burp Suite and performance testing using JMeter.'
    ],
    achievements: [
      'Reduced critical bugs by enhancing test coverage.',
      'Improved load performance and response time by 30%.',
      'Helped maintain high release quality across 10+ web projects.'
    ]
  },
  {
    title: 'Associate Software QA Engineer',
    company: 'Innovate Tech',
    location: 'Baneshwor, Kathmandu, Nepal',
    period: '2021 – 2022',
    website: 'https://www.innovatetech.io/',
    responsibilities: [
      'Created and maintained detailed test plans and scripts for regression and integration testing.',
      'Performed manual testing across multiple web-based platforms.',
      'Collaborated with developers and designers to resolve bugs and align quality goals.',
      'Participated in sprint ceremonies and project meetings.',
      'Contributed to team documentation and streamlined test processes.'
    ],
    achievements: [
      'Established baseline testing process documentation.',
      'Contributed to consistent sprint-based testing delivery.',
      'Improved test case reuse and organization.'
    ]
  },
  {
    title: 'Project Business Analyst (Trainee)',
    company: 'InfoDevelopers Pvt. Ltd.',
    location: 'Kathmandu, Nepal',
    period: 'Jul 2021 – Dec 2021',
    website: 'https://infodev.com.np/',
    responsibilities: [
      'Assisted in gathering and documenting business requirements and user stories.',
      'Created SRS documents, process flow diagrams, and user flows.',
      'Collaborated with project managers to manage requirement updates and track changes.'
    ],
    achievements: [
      'Delivered complete documentation for 3 client projects.',
      'Supported alignment between dev and QA teams through well-structured specs.'
    ]
  },
  {
    title: 'Customer Service Representative',
    company: 'Innovate Tech',
    location: 'Nepal',
    period: 'Dec 2020 – May 2021',
    website: 'https://www.innovatetech.io/',
    responsibilities: [
      'Provided technical assistance and user support via calls and chat.',
      'Conducted user onboarding and documented usability feedback.',
      'Communicated user issues to development for resolution.'
    ],
    achievements: [
      'Improved onboarding experience based on collected feedback.',
      'Helped identify 10+ usability issues in early versions of the product.'
    ]
  },
  {
    title: 'Marketing Executive & IT Support',
    company: 'Webbook Nepal',
    location: 'Nepal',
    period: 'Jan 2015 – Mar 2016',
    website: '#',
    responsibilities: [
      'Delivered on-site technical support to hotel clients across multiple regions.',
      'Provided training on booking systems, POS, and IT tools.',
      'Troubleshot hardware/software issues during and after deployments.',
      'Maintained service logs and client communication records.'
    ],
    achievements: [
      'Successfully trained over 20 hospitality clients.',
      'Resolved critical issues during high-stress deployments.',
      'Built and maintained strong customer satisfaction during support cycles.'
    ]
  }
];

const Experience = () => {
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
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start space-x-2 text-gray-700">
                          <CheckCircle size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="flex items-start space-x-2 text-gray-700">
                          <CheckCircle size={16} className="text-teal-600 mt-1 flex-shrink-0" />
                          <span className="text-sm font-medium">{item}</span>
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

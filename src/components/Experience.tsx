import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, FileText } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: "Security Automation Intern",
      company: "MGCV Tech Pvt Ltd",
      location: "Hyderabad, India",
      period: "Nov 2025 - Present",
      description:
        "Contributing to security-oriented automation workflows for operational monitoring in Linux-based environments. Building Python scripts for structured and unstructured data processing, anomaly-oriented analysis, and reliability improvements across monitoring pipelines.",
      icon: Briefcase,
      skills: [
        'Python Automation',
        'Operational Monitoring',
        'Workflow Analysis',
        'Linux Environments',
        'Security-Oriented Data Processing',
        'Anomaly-Oriented Analysis',
        'Operational Reliability'
      ]
    },
    {
      title: "AI Intern",
      company: "Warrous Pvt Ltd",
      location: "Hyderabad, India",
      period: "May 2025 - July 2025",
      description:
        "Developed spam detection and email filtering workflows using NLP-based text classification, with security-relevant analysis for malicious email patterns and phishing-like indicators in high-volume message datasets.",
      icon: Briefcase,
      skills: [
        'Spam Detection',
        'Email Filtering',
        'NLP Classification',
        'Phishing-Relevant Analysis',
        'Security-Oriented Data Processing'
      ],
      certificate: "https://drive.google.com/file/d/1pNYJ27tp28mEx5dOs3Nd5SEP1JqkeAW-/view?usp=sharing"
    }
  ];

  return (
    <section className="py-20 px-6" id="experience">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-gray-400 text-lg">
            Internship experience aligned with SOC operations, security automation, and incident-focused analysis
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              {/* Timeline node */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.3 + 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-gray-900 z-10"
              />

              {/* Content card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`w-5/12 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
              >
                <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-500/20 rounded-full mr-4">
                      <exp.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-blue-400">{exp.company}</p>
                    </div>
                  </div>
                  
                  <p className="text-purple-300 text-sm mb-1">{exp.period}</p>
                  <p className="text-gray-400 text-sm mb-3">{exp.location}</p>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  
                  {exp.certificate && (
                    <a
                      href={exp.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 mb-4 transition-colors"
                    >
                      <FileText size={16} />
                      <span className="text-sm">View Internship Certificate</span>
                    </a>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-400/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
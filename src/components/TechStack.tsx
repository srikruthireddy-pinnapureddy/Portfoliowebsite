import React from 'react';
import { motion } from 'framer-motion';

export function TechStack() {
  const techCategories = [
    {
      category: 'Cybersecurity',
      skills: [
        { name: 'SOC Monitoring', level: 88, icon: '🛡️' },
        { name: 'SIEM', level: 84, icon: '📡' },
        { name: 'Threat Detection', level: 90, icon: '🚨' },
        { name: 'Incident Response', level: 85, icon: '🧭' },
        { name: 'IOC Analysis', level: 86, icon: '🔎' },
        { name: 'MITRE ATT&CK', level: 82, icon: '🗂️' },
        { name: 'Threat Intelligence', level: 86, icon: '🌐' },
        { name: 'Phishing Analysis', level: 88, icon: '✉️' },
        { name: 'User Behavior Analytics', level: 84, icon: '👤' },
        { name: 'Security Monitoring', level: 90, icon: '📊' },
        { name: 'Alert Triage', level: 85, icon: '⚠️' },
        { name: 'Log Analysis', level: 90, icon: '📜' }
      ]
    },
    {
      category: 'Security Concepts',
      skills: [
        { name: 'SSH Security', level: 88, icon: '🔐' },
        { name: 'Authentication Logs', level: 90, icon: '🧾' },
        { name: 'Privilege Escalation', level: 82, icon: '⬆️' },
        { name: 'Brute Force Detection', level: 86, icon: '🔨' },
        { name: 'Security Event Correlation', level: 84, icon: '🧩' },
        { name: 'Incident Reporting', level: 88, icon: '📘' },
        { name: 'Detection Engineering', level: 82, icon: '⚙️' },
        { name: 'Threat Hunting Fundamentals', level: 80, icon: '🎯' }
      ]
    },
    {
      category: 'Programming',
      skills: [
        { name: 'Python', level: 92, icon: '🐍' },
        { name: 'SQL', level: 84, icon: '🗃️' },
        { name: 'C', level: 82, icon: '💻' },
        { name: 'Java', level: 78, icon: '☕' }
      ]
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Linux', level: 90, icon: '🐧' },
        { name: 'Git', level: 88, icon: '🌱' },
        { name: 'Docker', level: 78, icon: '🐳' },
        { name: 'Wireshark', level: 75, icon: '🦈' },
        { name: 'Streamlit', level: 90, icon: '📺' },
        { name: 'VirusTotal API', level: 86, icon: '🔗' },
        { name: 'AbuseIPDB API', level: 85, icon: '🧠' }
      ]
    },
    {
      category: 'Machine Learning for Security',
      skills: [
        { name: 'Scikit-learn', level: 88, icon: '📉' },
        { name: 'Isolation Forest', level: 84, icon: '🌲' },
        { name: 'Pandas', level: 90, icon: '🐼' },
        { name: 'NumPy', level: 88, icon: '🔢' },
        { name: 'Behavioral Analytics', level: 86, icon: '🧬' },
        { name: 'Anomaly Detection', level: 88, icon: '📍' }
      ]
    }
  ];

  return (
    <section className="py-20 px-6" id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-lg">
            SOC and Cybersecurity Analyst skill matrix covering SIEM, threat detection, incident response,
            security monitoring, IOC analysis, and AI/ML for security analytics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.3, rotate: 15 }}
                      className="text-2xl"
                    >
                      {skill.icon}
                    </motion.div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-purple-400 text-sm">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + index * 0.1 + 0.5 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
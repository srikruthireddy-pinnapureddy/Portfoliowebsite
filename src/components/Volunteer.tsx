import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Calendar } from 'lucide-react';

export function Volunteer() {
  const experiences = [
    {
      title: "Documentation & Reporting Head",
      organization: "Literary & Extramural Club",
      institution: "Kakatiya Institute of Technology & Science",
      period: "August 2025 - Present",
      description: [
        "Lead documentation strategies for all club activities, creating comprehensive reports and records.",
        "Design and manage visual documentation materials, ensuring accurate and engaging event records.",
        "Collaborate with club leadership to maintain organized documentation systems."
      ],
      icon: BookOpen,
      gradient: "from-indigo-400 to-purple-500"
    },
    {
      title: "Event Head – Swami Vivekananda Birthday Celebrations",
      organization: "Kakatiya Institute of Technology & Science",
      period: "March 2025",
      description: [
        "Organized and coordinated the celebration event, managing scheduling, logistics, and communication with faculty.",
        "Supervised a team of volunteers to ensure smooth execution of cultural and educational activities."
      ],
      icon: Calendar,
      gradient: "from-pink-400 to-red-500"
    },
    {
      title: "Executive Member",
      organization: "Literary & Extramural Club",
      institution: "Kakatiya Institute of Technology & Science",
      period: "Aug 2024 - May 2025",
      description: [
        "Assisted in planning and conducting literary competitions, debates, and extracurricular programs.",
        "Supported event publicity, registration drives, and overall club operations to improve student participation."
      ],
      icon: Users,
      gradient: "from-blue-400 to-cyan-500"
    }
  ];

  const achievements = [
    {
      title: "Kalakar Book of World Records",
      description: "Holder of the prestigious Kalakar Book of World Records in Kuchipudi dance, showcasing excellence in traditional Indian classical dance.",
      icon: "🏆"
    },
    {
      title: "Natya Mayuri Award & Government Certification",
      description: "Government-certified Kuchipudi dancer with multiple stage performances, cultural representations, and recipient of the prestigious Natya Mayuri Award.",
      icon: "🎭"
    }
  ];

  return (
    <section className="py-20 px-6" id="volunteer">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Leadership & Achievements
          </h2>
          <p className="text-gray-400 text-lg">
            Volunteer work, leadership roles, and extracurricular accomplishments
          </p>
        </motion.div>

        {/* Volunteer Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Volunteer & Leadership Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900 border border-purple-500/30 rounded-xl p-6 shadow-lg shadow-purple-500/10"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 hover:opacity-5 transition-opacity duration-300 rounded-lg`} />
                
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`p-3 rounded-full bg-gradient-to-r ${exp.gradient} bg-opacity-20 flex-shrink-0`}
                  >
                    <exp.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <div className="flex-grow">
                    <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                    <p className="text-purple-400 mb-1">{exp.organization}</p>
                    {exp.institution && (
                      <p className="text-gray-400 text-sm mb-2">{exp.institution}</p>
                    )}
                    <p className="text-purple-300 text-sm mb-4">{exp.period}</p>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Extracurricular Achievements */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Extracurricular Achievements</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/30 rounded-lg p-6 hover:border-purple-400/60 transition-all duration-300"
              >
                <div className="text-5xl mb-4 text-center">{achievement.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3 text-center">{achievement.title}</h4>
                <p className="text-gray-300 text-center">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

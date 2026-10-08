import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar } from 'lucide-react';

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
      icon: BookOpen
    },
    {
      title: "Event Head – Swami Vivekananda Birthday Celebrations",
      organization: "Kakatiya Institute of Technology & Science",
      period: "March 2025",
      description: [
        "Organized and coordinated the celebration event, managing scheduling, logistics, and communication with faculty.",
        "Supervised a team of volunteers to ensure smooth execution of cultural and educational activities."
      ],
      icon: Calendar
    },
    {
      title: "Kuchipudi Dancer",
      organization: "Cultural Performer",
      description: [
        "Government-certified Kuchipudi dancer with multiple stage performances, cultural representations, and recipient of the prestigious Natya Mayuri Award."
      ],
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
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{
              backgroundImage: 'linear-gradient(to right, #6ee7b7, #22d3ee)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
            }}
          >
            Leadership & Achievements
          </h2>
          <p className="text-gray-400 text-lg">
            Volunteer work, leadership roles, and extracurricular accomplishments
          </p>
        </motion.div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Volunteer & Leadership Experience
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="h-full bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300">
                  {/* Header: circled icon + title + blue organization */}
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-500/20 rounded-full mr-4 border border-blue-400/50 flex-shrink-0">
                      {typeof exp.icon === 'string' ? (
                        <span className="w-6 h-6 flex items-center justify-center text-xl leading-none">
                          {exp.icon}
                        </span>
                      ) : (
                        <exp.icon className="w-6 h-6 text-blue-400" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                      <p className="text-blue-400">{exp.organization}</p>
                    </div>
                  </div>

                  {exp.period && (
                    <p className="text-purple-300 text-sm mb-1">{exp.period}</p>
                  )}
                  {exp.institution && (
                    <p className="text-gray-400 text-sm mb-3">{exp.institution}</p>
                  )}

                  <ul className="space-y-2 mt-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start">
                        <span className="text-blue-400 mr-3">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { motion } from 'framer-motion';

export function TechStack() {
  const techCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Java', level: 85, icon: '☕' },
        { name: 'Python', level: 90, icon: '🐍' },
        { name: 'SQL', level: 88, icon: '🗄️' },
        { name: 'C', level: 80, icon: '💻' }
      ]
    },
    {
      category: 'Backend Development',
      skills: [
        { name: 'FastAPI', level: 90, icon: '⚡' },
        { name: 'Flask', level: 88, icon: '🌶️' },
        { name: 'REST APIs', level: 90, icon: '🔌' },
        { name: 'API Integration', level: 88, icon: '🔗' },
        { name: 'WebSockets', level: 82, icon: '🌐' },
        { name: 'JWT Authentication', level: 80, icon: '🔐' }
      ]
    },
    {
      category: 'Frontend Development',
      skills: [
        { name: 'React', level: 85, icon: '⚛️' },
        { name: 'Next.js', level: 82, icon: '▲' },
        { name: 'TypeScript', level: 80, icon: '🔷' },
        { name: 'Tailwind CSS', level: 88, icon: '🎨' }
      ]
    },
    {
      category: 'Database Systems',
      skills: [
        { name: 'PostgreSQL', level: 86, icon: '🐘' },
        { name: 'SQLite', level: 90, icon: '📊' },
        { name: 'Redis', level: 80, icon: '⚡' },
        { name: 'Database Design', level: 84, icon: '🧱' },
        { name: 'SQL Optimization', level: 80, icon: '🚀' }
      ]
    },
    {
      category: 'Core Computer Science',
      skills: [
        { name: 'Data Structures', level: 88, icon: '🌲' },
        { name: 'Algorithms', level: 86, icon: '📐' },
        { name: 'OOP', level: 90, icon: '📦' },
        { name: 'DBMS', level: 90, icon: '🗃️' },
        { name: 'Operating Systems', level: 82, icon: '💻' },
        { name: 'Computer Networks', level: 80, icon: '🌐' }
      ]
    },
    {
      category: 'AI & Cloud Technologies',
      skills: [
        { name: 'Google Gemini', level: 85, icon: '🤖' },
        { name: 'OpenAI Whisper', level: 82, icon: '🎤' },
        { name: 'TensorFlow', level: 84, icon: '🧠' },
        { name: 'YOLOv9', level: 82, icon: '🔥' },
        { name: 'AWS', level: 75, icon: '☁️' },
        { name: 'Git & GitHub', level: 90, icon: '🌱' }
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
            Technical skill portfolio spanning software engineering, backend development, full-stack applications, cloud technologies, databases, and AI-powered systems. Focused on building scalable applications, REST APIs, modern web platforms, and production-ready software solutions.
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
              className="bg-gray-900 border border-purple-500/30 rounded-xl p-6 shadow-lg shadow-purple-500/10"
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
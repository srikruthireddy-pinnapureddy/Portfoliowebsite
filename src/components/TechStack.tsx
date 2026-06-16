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
        { name: 'Node.js', level: 85, icon: '⚙️' },
        { name: 'NestJS', level: 82, icon: '🏗️' }
      ]
    },
    {
      category: 'Frontend Development',
      skills: [
        { name: 'React', level: 87, icon: '⚛️' },
        { name: 'TypeScript', level: 85, icon: '🔷' },
        { name: 'Tailwind CSS', level: 88, icon: '🎨' },
        { name: 'Framer Motion', level: 85, icon: '✨' }
      ]
    },
    {
      category: 'Database Technologies',
      skills: [
        { name: 'PostgreSQL', level: 86, icon: '🐘' },
        { name: 'MySQL', level: 84, icon: '🐬' },
        { name: 'MongoDB', level: 80, icon: '🍃' },
        { name: 'SQLite', level: 85, icon: '📦' },
        { name: 'Redis', level: 82, icon: '⚡' }
      ]
    },
    {
      category: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', level: 82, icon: '☁️' },
        { name: 'Docker', level: 85, icon: '🐳' },
        { name: 'Git', level: 88, icon: '🔀' },
        { name: 'Netlify', level: 86, icon: '🚀' },
        { name: 'Vercel', level: 84, icon: '▲' }
      ]
    },
    {
      category: 'Artificial Intelligence & ML',
      skills: [
        { name: 'Machine Learning', level: 85, icon: '🧠' },
        { name: 'Deep Learning', level: 82, icon: '🤖' },
        { name: 'TensorFlow', level: 84, icon: '📘' },
        { name: 'Scikit-learn', level: 85, icon: '📊' },
        { name: 'NLP', level: 84, icon: '🗣️' },
        { name: 'LLMs', level: 85, icon: '📝' }
      ]
    }
  ];

  return (
    <section className="py-20 px-6" id="tech-stack">
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
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-purple-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + index * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
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

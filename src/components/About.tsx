import React from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  FlaskConical,
  GraduationCap,
  Network,
  BookOpen,
} from 'lucide-react';

export function About() {
  const focusAreas = [
    'AI/ML Engineering',
    'Generative AI',
    'Scientific AI',
    'AI Backend Systems',
  ];

  const capabilities = [
    {
      icon: Activity,
      title: 'Production APIs',
      text: 'Reliable backend services and AI-powered APIs',
    },
    {
      icon: FlaskConical,
      title: 'Scientific Workflows',
      text: 'AI and computational workflows for scientific problems',
    },
    {
      icon: Network,
      title: 'Model Integration',
      text: 'Connecting models, data pipelines, and applications',
    },
  ];

  return (
    <section className="py-20 px-6" id="about">
      <div className="max-w-6xl mx-auto">

        {/* ABOUT ME */}
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
            About Me
          </h2>
        </motion.div>

        {/* PROFESSIONAL SUMMARY */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-blue-400/70" />
            <h3 className="text-2xl font-bold text-white">Professional Summary</h3>
          </div>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-4xl">
            I am interested in the engineering boundary between models and
            dependable products: retrieval and agent workflows, computer
            vision systems, molecular modeling, and Python services that make
            AI usable in production.
          </p>
        </motion.div>

        {/* FOCUS AREAS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mt-10"
        >
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Focus Areas</p>

          <div className="flex flex-wrap gap-2">
            {focusAreas.map((item) => (
              <span
                key={item}
                className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-400/30"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* EDUCATION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mt-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-blue-400/70" />
            <h3 className="text-2xl font-bold text-white">Education</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* DEGREE CARD */}
            <motion.div whileHover={{ scale: 1.03 }}>
              <div className="h-full bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-full mr-4 border border-blue-400/50">
                    <GraduationCap className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Bachelor of Technology</h4>
                    <p className="text-blue-400">Computer Science and Engineering</p>
                  </div>
                </div>

                <p className="text-purple-300 text-sm mb-1">Degree</p>
                <p className="text-gray-300">Artificial Intelligence &amp; Machine Learning</p>
              </div>
            </motion.div>

            {/* INSTITUTION CARD */}
            <motion.div whileHover={{ scale: 1.03 }}>
              <div className="h-full bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-full mr-4 border border-blue-400/50">
                    <BookOpen className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Kakatiya Institute of Technology &amp; Science</h4>
                    <p className="text-blue-400">Institution</p>
                  </div>
                </div>

                <p className="text-purple-300 text-sm mb-1">October 2022 – May 2026</p>
                <p className="text-gray-300 font-semibold">CGPA: 8.18 / 10</p>
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* CAPABILITY CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16">
          {capabilities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="h-full bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-full mr-4 border border-blue-400/50">
                    <item.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white">{item.title}</h4>
                </div>

                <p className="text-gray-300">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
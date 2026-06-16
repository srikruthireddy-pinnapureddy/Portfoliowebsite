import image_c47cc8122e433f909085ba8a960e3b0b0cd876d9 from 'figma:asset/c47cc8122e433f909085ba8a960e3b0b0cd876d9.png';
import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Code2, Database, GraduationCap, Layers3, ShieldCheck } from 'lucide-react';

export function About() {
  const focusAreas = [
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Database Management Systems',
    'Operating Systems',
    'Computer Networks',
    'Backend Development',
    'REST API Development',
    'System Design Fundamentals',
    'Software Engineering',
    'Database Design',
    'Debugging & Testing',
    'Full Stack Development',
    'Cloud Computing',
    'Problem Solving'
  ];

  const roles = [
    'Software Engineer',
    'Backend Engineer',
    'Full Stack Developer',
    'Application Developer',
    'AI-Powered Systems Developer'
  ];

  return (
    <section className="py-20 px-6" id="about">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-400">
            Software Engineer with experience building full-stack applications,
            backend services, REST APIs, and AI-powered systems. Passionate about
            solving complex problems through scalable software design, efficient
            algorithms, and clean engineering practices. Experienced in developing
            production-oriented applications using Python, FastAPI, React,
            TypeScript, SQL, and modern development tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="rounded-2xl border-2 border-cyan-400/30 overflow-hidden bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-1">
                <img
                  src={image_c47cc8122e433f909085ba8a960e3b0b0cd876d9}
                  alt="Profile"
                  className="w-full rounded-xl aspect-square object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Professional Summary
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed">
               I enjoy designing and building software systems that are reliable, scalable, and easy to maintain. My experience spans backend development, API design, full-stack web applications, database management, and AI-powered solutions. Through internships and projects, I have worked on conversational AI systems, computer vision applications, and web platforms while strengthening my foundations in data structures, algorithms, object-oriented programming, databases, operating systems, and software engineering principles.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mt-6">
              {roles.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-cyan-400/20 bg-cyan-500/10 px-3 py-2 text-sm text-cyan-100"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mt-6">
              {focusAreas.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-blue-400/20 bg-blue-500/10 px-3 py-2 text-sm text-blue-100"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="space-y-4 mt-8">
              <h3 className="text-xl font-bold text-white">Education</h3>
              
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-4 rounded-lg border border-cyan-400/20">
                <div className="flex items-start space-x-3">
                  <GraduationCap className="text-cyan-400 mt-1" size={24} />
                  <div>
                    <h4 className="text-white font-semibold">Kakatiya Institute of Technology & Science</h4>
                    <p className="text-gray-300 text-sm">Bachelor of Technology – Computer Science and Engineering (AI & ML)</p>
                    <p className="text-cyan-300 text-sm">October 2022 - May 2026 • CGPA: 8.18/10</p>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-3">
                <div className="bg-gray-900/40 border border-gray-700/50 rounded-lg p-3 text-center">
                  <Code2 className="mx-auto text-cyan-400 mb-2" size={20} />
                  <p className="text-sm text-gray-300">Data Structures & Algorithms</p>
                </div>
                <div className="bg-gray-900/40 border border-gray-700/50 rounded-lg p-3 text-center">
                  <Database className="mx-auto text-blue-400 mb-2" size={20} />
                  <p className="text-sm text-gray-300">Backend Engineering</p>
                </div>
                <div className="bg-gray-900/40 border border-gray-700/50 rounded-lg p-3 text-center">
                  <ShieldCheck className="mx-auto text-purple-400 mb-2" size={20} />
                  <p className="text-sm text-gray-300">Problem Solving</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-3">
                <div className="bg-gray-900/40 border border-gray-700/50 rounded-lg p-3 text-center">
                  <Layers3 className="mx-auto text-cyan-400 mb-2" size={20} />
                  <p className="text-sm text-gray-300">System Design</p>
                </div>
                <div className="bg-gray-900/40 border border-gray-700/50 rounded-lg p-3 text-center">
                  <Activity className="mx-auto text-blue-400 mb-2" size={20} />
                  <p className="text-sm text-gray-300">API Development</p>
                </div>
                <div className="bg-gray-900/40 border border-gray-700/50 rounded-lg p-3 text-center">
                  <ShieldCheck className="mx-auto text-purple-400 mb-2" size={20} />
                  <p className="text-sm text-gray-300">Software Engineering</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

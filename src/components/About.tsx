import image_c47cc8122e433f909085ba8a960e3b0b0cd876d9 from 'figma:asset/c47cc8122e433f909085ba8a960e3b0b0cd876d9.png';
import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Code2, Database, GraduationCap, Layers3, ShieldCheck } from 'lucide-react';

export function About() {
  const focusAreas = [
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'DBMS',
    'Operating Systems',
    'Computer Networks',
    'Backend Development',
    'REST APIs',
    'Cloud Computing',
    'Software Engineering',
    'SDLC',
    'Debugging',
    'Testing',
    'Database Design',
    'Distributed Systems'
  ];

  const roles = [
    'Software Engineer',
    'Backend Developer',
    'AI Engineer',
    'Application Developer',
    'Systems Developer'
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
            Software engineer with a strong AI and systems foundation, focused on backend engineering,
            reliable software delivery, clean APIs, and practical problem solving for production environments.
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
              <div className="mx-auto flex h-80 w-80 items-center justify-center overflow-hidden rounded-full border-2 border-cyan-400/25 bg-gradient-to-br from-cyan-500/15 to-blue-500/15 p-4 shadow-2xl shadow-cyan-950/20">
                <img 
                  src={image_c47cc8122e433f909085ba8a960e3b0b0cd876d9} 
                  alt="Srikruthi Reddy Pinnapureddy" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-cyan-400/20 rounded-full"
              />
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
              I design and build dependable software systems with an emphasis on backend development,
              API integration, database design, debugging, testing, and documentation. My AI/ML background
              adds depth to data-driven problem solving, but my career focus is software engineering that is
              maintainable, scalable, and recruiter-ready for enterprise environments.
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
                    <p className="text-cyan-300 text-sm">October 2022 - Present • GPA: 8.06/10</p>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-3">
                <div className="bg-gray-900/40 border border-gray-700/50 rounded-lg p-3 text-center">
                  <Code2 className="mx-auto text-cyan-400 mb-2" size={20} />
                  <p className="text-sm text-gray-300">Clean Backend Logic</p>
                </div>
                <div className="bg-gray-900/40 border border-gray-700/50 rounded-lg p-3 text-center">
                  <Database className="mx-auto text-blue-400 mb-2" size={20} />
                  <p className="text-sm text-gray-300">Database-First Thinking</p>
                </div>
                <div className="bg-gray-900/40 border border-gray-700/50 rounded-lg p-3 text-center">
                  <ShieldCheck className="mx-auto text-purple-400 mb-2" size={20} />
                  <p className="text-sm text-gray-300">Reliable Delivery Mindset</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-3">
                <div className="bg-gray-900/40 border border-gray-700/50 rounded-lg p-3 text-center">
                  <Layers3 className="mx-auto text-cyan-400 mb-2" size={20} />
                  <p className="text-sm text-gray-300">Systems Thinking</p>
                </div>
                <div className="bg-gray-900/40 border border-gray-700/50 rounded-lg p-3 text-center">
                  <Activity className="mx-auto text-blue-400 mb-2" size={20} />
                  <p className="text-sm text-gray-300">Execution Focus</p>
                </div>
                <div className="bg-gray-900/40 border border-gray-700/50 rounded-lg p-3 text-center">
                  <ShieldCheck className="mx-auto text-purple-400 mb-2" size={20} />
                  <p className="text-sm text-gray-300">Quality and Testing</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
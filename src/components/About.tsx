import React from 'react';
import { motion } from 'framer-motion';
import { Activity, BrainCircuit, Database, FlaskConical, GraduationCap, Network } from 'lucide-react';

export function About() {
  const focusAreas = ['AI/ML Engineering', 'Generative AI', 'Scientific AI', 'AI Backend Systems'];

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
            I build production-oriented AI systems across Generative AI, scientific AI,
            computer vision, and backend engineering. My work combines model integration,
            agentic workflows, and reliable APIs to turn research and product ideas into
            useful applications.
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
                <div className="aspect-square rounded-xl bg-[#071525] p-8 flex flex-col justify-between" aria-label="AI and scientific computing profile panel">
                  <div className="flex items-center justify-between text-cyan-300"><BrainCircuit size={34} /><span className="font-mono text-xs">AI_SYSTEMS</span></div>
                  <div><p className="font-mono text-sm text-cyan-300">/ about.srikruthi</p><p className="mt-3 text-3xl font-bold text-white">Models to<br />meaningful systems.</p></div>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs text-gray-400"><span className="border border-cyan-400/20 p-2">GENAI</span><span className="border border-cyan-400/20 p-2">SCI-AI</span><span className="border border-cyan-400/20 p-2">VISION</span></div>
                </div>
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
              I am interested in the engineering boundary between models and dependable products: retrieval and agent workflows, computer vision systems, molecular modeling, and Python services that make AI usable in production.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mt-6">
              {focusAreas.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-cyan-400/20 bg-cyan-500/10 px-3 py-2 text-sm text-cyan-100"
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
                  <Activity className="mx-auto text-blue-400 mb-2" size={20} />
                  <p className="text-sm text-gray-300">Production APIs</p>
                </div>
                <div className="bg-gray-900/40 border border-gray-700/50 rounded-lg p-3 text-center"><FlaskConical className="mx-auto text-cyan-400 mb-2" size={20} /><p className="text-sm text-gray-300">Scientific Workflows</p></div>
                <div className="bg-gray-900/40 border border-gray-700/50 rounded-lg p-3 text-center"><Network className="mx-auto text-blue-400 mb-2" size={20} /><p className="text-sm text-gray-300">Model Integration</p></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

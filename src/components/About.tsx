import image_c47cc8122e433f909085ba8a960e3b0b0cd876d9 from 'figma:asset/c47cc8122e433f909085ba8a960e3b0b0cd876d9.png';
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Shield, Search, Activity } from 'lucide-react';

export function About() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-400/30 p-4 flex items-center justify-center overflow-hidden">
                <img 
                  src={image_c47cc8122e433f909085ba8a960e3b0b0cd876d9} 
                  alt="Srikruthi Reddy Pinnapureddy" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-blue-400/20 rounded-full"
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
            <h3 className="text-2xl font-bold text-white mb-6">
              About and Career Path
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Aspiring Cybersecurity Analyst focused on Blue Team operations and SOC Analyst L1 responsibilities.
              My work centers on threat detection, incident investigation, log analysis, IOC analysis, and
              threat intelligence enrichment. I build Python-based security automation tools that map to
              MITRE ATT&CK, improve alert triage, and strengthen incident reporting workflows.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mt-6">
              {[
                'SOC Analyst Career Path',
                'SIEM Monitoring and Alert Triage',
                'Threat Detection and Incident Investigation',
                'Log Analysis and IOC Analysis',
                'Threat Intelligence and MITRE ATT&CK',
                'Security Automation with Python',
                'AI/ML for Cybersecurity',
                'Behavioral Analytics'
              ].map((item) => (
                <div
                  key={item}
                  className="px-3 py-2 bg-blue-500/10 border border-blue-400/20 rounded-lg text-blue-200 text-sm"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="space-y-4 mt-8">
              <h3 className="text-xl font-bold text-white">Education</h3>
              
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 rounded-lg border border-blue-400/20">
                <div className="flex items-start space-x-3">
                  <GraduationCap className="text-blue-400 mt-1" size={24} />
                  <div>
                    <h4 className="text-white font-semibold">Kakatiya Institute of Technology & Science</h4>
                    <p className="text-gray-300 text-sm">Bachelor of Technology – Computer Science and Engineering (AI & ML)</p>
                    <p className="text-purple-300 text-sm">October 2022 - Present • GPA: 8.06/10</p>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-3">
                <div className="bg-gray-900/40 border border-gray-700/50 rounded-lg p-3 text-center">
                  <Shield className="mx-auto text-cyan-400 mb-2" size={20} />
                  <p className="text-sm text-gray-300">Blue Team Mindset</p>
                </div>
                <div className="bg-gray-900/40 border border-gray-700/50 rounded-lg p-3 text-center">
                  <Search className="mx-auto text-blue-400 mb-2" size={20} />
                  <p className="text-sm text-gray-300">Investigation Focus</p>
                </div>
                <div className="bg-gray-900/40 border border-gray-700/50 rounded-lg p-3 text-center">
                  <Activity className="mx-auto text-purple-400 mb-2" size={20} />
                  <p className="text-sm text-gray-300">Security Monitoring</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
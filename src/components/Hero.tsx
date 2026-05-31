import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Radar, Workflow, Download, Github, Linkedin } from 'lucide-react';

export function Hero() {
  const fullName = "SRIKRUTHI REDDY PINNAPUREDDY";
  const [displayedName, setDisplayedName] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const highlights = [
    'SOC Monitoring',
    'SIEM Concepts',
    'Threat Detection',
    'Incident Response',
    'Threat Intelligence',
    'Security Automation',
    'Python Security Tooling',
    'Linux'
  ];

  useEffect(() => {
    if (currentIndex < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayedName(prev => prev + fullName[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100); // Typing speed: 100ms per character
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gray-300">
              {displayedName}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block ml-1"
              >
                |
              </motion.span>
            </span>
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-3xl font-bold text-white mb-6"
          >
            Aspiring SOC Analyst | SIEM & Threat Detection | Security Automation | Incident Response | Python | AI/ML for Cybersecurity
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-4xl mx-auto"
        >
          Aspiring Cybersecurity Analyst with a strong foundation in SOC operations, SIEM monitoring,
          threat detection, incident response, phishing analysis, and security automation. Experienced
          in building Python-based cybersecurity solutions for log analysis, threat intelligence enrichment,
          phishing investigation, and behavioral anomaly detection using machine learning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {highlights.map((highlight) => (
            <span
              key={highlight}
              className="px-4 py-2 bg-blue-500/15 border border-blue-400/30 text-blue-200 rounded-full text-sm"
            >
              {highlight}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex justify-center space-x-8 mb-12"
        >
          {[ShieldCheck, Radar, Workflow].map((Icon, index) => (
            <motion.div
              key={index}
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, delay: index * 0.3 }
              }}
              className="p-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30"
            >
              <Icon size={40} className="text-blue-400" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col md:flex-row justify-center gap-4 mb-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg transition-all duration-300"
          >
            View Security Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-400/10 rounded-lg transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.8 }}
          className="flex flex-col md:flex-row justify-center gap-4"
        >
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 bg-transparent border border-cyan-400 text-cyan-300 hover:bg-cyan-500/10 rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            <Download size={18} />
            Resume Download
          </a>
          <a
            href="https://github.com/srikruthireddy-pinnapureddy"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-transparent border border-gray-400 text-gray-200 hover:bg-gray-500/10 rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            <Github size={18} />
            GitHub Profile
          </a>
          <a
            href="https://linkedin.com/in/srikruthi-reddy-pinnapureddy"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-transparent border border-blue-400 text-blue-300 hover:bg-blue-500/10 rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
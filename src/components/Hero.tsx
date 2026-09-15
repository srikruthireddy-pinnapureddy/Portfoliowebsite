import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, FlaskConical, Network, ScanSearch } from 'lucide-react';

export function Hero() {
  const fullName = 'SRIKRUTHI REDDY PINNAPUREDDY';
  const [displayedName, setDisplayedName] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const highlights = [
    'Python', 'PyTorch', 'TensorFlow', 'LLMs', 'RAG', 'LangChain', 'LangGraph',
    'FastAPI', 'Computer Vision', 'Scientific AI'
  ];

  useEffect(() => {
    if (currentIndex < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayedName((prev) => prev + fullName[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100); // Typing speed: 100ms per character
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullName]);

  return (
    <section className="hero-section min-h-screen flex items-start justify-center px-6 pb-12 relative md:items-center">
      <div className="text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200 mb-6">
            <Network size={16} />
            AI/ML Engineer
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight text-white">
            {displayedName}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.9, repeat: Infinity }}
              className="inline-block ml-1 text-cyan-300"
            >
              |
            </motion.span>
          </h1>
          <div className="text-xl md:text-3xl font-semibold text-cyan-100 mb-6">
            AI/ML Engineer | Generative AI | Scientific AI
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed"
        >
          B.Tech Computer Science graduate specializing in Artificial Intelligence and Machine Learning, with hands-on experience building Generative AI applications, AI agents, computer vision systems, scientific AI workflows, and production-ready backend APIs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {highlights.map((highlight) => (
            <span
              key={highlight}
              className="rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-sm text-blue-100"
            >
              {highlight}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex justify-center gap-6 mb-12"
        >
          {[Network, FlaskConical, ScanSearch].map((Icon, index) => (
            <motion.div
              key={index}
              animate={{
                rotate: 360,
                scale: [1, 1.08, 1]
              }}
              transition={{
                rotate: { duration: 12, repeat: Infinity, ease: 'linear' },
                scale: { duration: 2.4, repeat: Infinity, delay: index * 0.25 }
              }}
              className="rounded-full border border-cyan-400/25 bg-gradient-to-br from-cyan-500/15 to-blue-500/15 p-4"
            >
              <Icon size={36} className="text-cyan-300" />
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
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 text-white transition-all duration-300 hover:from-cyan-400 hover:to-blue-400"
          >
            View Projects
            <ArrowRight size={18} />
          </a>
          <a
            href="#research"
            className="rounded-lg border border-blue-400/60 px-8 py-3 text-blue-200 transition-all duration-300 hover:bg-blue-500/10"
          >
            Research
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.8 }}
          className="flex flex-col md:flex-row justify-center gap-4"
        >
          <a
            href="https://drive.google.com/file/d/14gTeOMJIH_NOz9aM_xTHuX4PI9KHLaed/view?usp=sharing"
            download
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-cyan-400/70 px-6 py-3 text-cyan-200 transition-all duration-300 hover:bg-cyan-500/10"
          >
            <Download size={18} />
            Resume Download
          </a>
          <a
            href="https://github.com/srikruthireddy-pinnapureddy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-400/60 px-6 py-3 text-gray-200 transition-all duration-300 hover:bg-gray-500/10"
          >
            <Github size={18} />
            GitHub Profile
          </a>
          <a
            href="https://linkedin.com/in/srikruthi-reddy-pinnapureddy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-400/60 px-6 py-3 text-blue-200 transition-all duration-300 hover:bg-blue-500/10"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}

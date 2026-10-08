import React from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Sparkles,
  FlaskConical,
  Server,
  Database,
  Layout,
  Cloud,
  ShieldCheck,
  Code2,
} from 'lucide-react';

const groups = [
  {
    title: 'AI / Machine Learning',
    icon: Brain,
    skills: ['Python', 'PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn', 'Deep Learning', 'Computer Vision', 'NLP', 'Transformers'],
  },
  {
    title: 'Generative AI',
    icon: Sparkles,
    skills: ['LLMs', 'RAG', 'LangChain', 'LangGraph', 'AI Agents', 'Prompt Engineering', 'Vector Databases'],
  },
  {
    title: 'Scientific AI',
    icon: FlaskConical,
    skills: ['RDKit', 'DeepChem', 'Molecular Graphs', 'SMILES', 'Drug Discovery', 'Molecular Generation', 'Flow Matching', 'Diffusion Models'],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['FastAPI', 'Flask', 'Node.js', 'NestJS', 'REST APIs', 'WebSockets'],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['PostgreSQL', 'MySQL', 'SQLite', 'Redis'],
  },
  {
    title: 'Frontend',
    icon: Layout,
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['AWS', 'Docker', 'Git', 'GitHub', 'Vercel', 'Railway'],
  },
  {
    title: 'Cybersecurity',
    icon: ShieldCheck,
    skills: ['SIEM', 'Linux Authentication Logs', 'MITRE ATT&CK', 'AbuseIPDB', 'VirusTotal'],
  },
  {
    title: 'Additional',
    icon: Code2,
    skills: ['C', 'Java', 'SAP ABAP'],
  },
];

export function TechStack() {
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
            Technical Skills
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A practical toolkit for building AI products, scientific workflows, backend services, and the interfaces around them.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="h-full bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-full mr-4 border border-blue-400/50">
                    <group.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{group.title}</h3>
                    <p className="text-blue-400">{group.skills.length} skills</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-400/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { motion } from 'framer-motion';

const groups = [
  ['AI / Machine Learning', 'Python', 'PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn', 'Deep Learning', 'Computer Vision', 'NLP', 'Transformers'],
  ['Generative AI', 'LLMs', 'RAG', 'LangChain', 'LangGraph', 'AI Agents', 'Prompt Engineering', 'Vector Databases'],
  ['Scientific AI', 'RDKit', 'DeepChem', 'Molecular Graphs', 'SMILES', 'Drug Discovery', 'Molecular Generation', 'Flow Matching', 'Diffusion Models'],
  ['Backend', 'FastAPI', 'Flask', 'Node.js', 'NestJS', 'REST APIs', 'WebSockets'],
  ['Databases', 'PostgreSQL', 'MySQL', 'SQLite', 'Redis'],
  ['Frontend', 'React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  ['Cloud & DevOps', 'AWS', 'Docker', 'Git', 'GitHub', 'Vercel', 'Railway'],
  ['Cybersecurity', 'SIEM', 'Linux Authentication Logs', 'MITRE ATT&CK', 'AbuseIPDB', 'VirusTotal'],
  ['Additional', 'C', 'Java', 'SAP ABAP']
];

export function TechStack() {
  return <section className="px-6 py-20" id="skills"><div className="mx-auto max-w-6xl"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center"><h2 className="mb-5 bg-gradient-to-r from-pink-300 to-cyan-300 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">Technical Skills</h2><p className="mx-auto max-w-3xl text-lg text-gray-400">A practical toolkit for building AI products, scientific workflows, backend services, and the interfaces around them.</p></motion.div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{groups.map((group, index) => <motion.div key={group[0]} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }} className="rounded-xl border border-cyan-400/15 bg-gray-900/75 p-5"><h3 className="mb-4 text-lg font-semibold text-white">{group[0]}</h3><div className="flex flex-wrap gap-2">{group.slice(1).map((skill) => <span key={skill} className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-2 text-sm text-cyan-100">{skill}</span>)}</div></motion.div>)}</div></div></section>;
}

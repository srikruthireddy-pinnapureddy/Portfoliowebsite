import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Beaker, GitBranch } from 'lucide-react';

const areas = [
  'Molecular Generation',
  'Scaffold-based Molecular Generation',
  'Scaffold Hopping',
  'Molecular Graph Learning',
  'Binding Affinity Prediction',
  'CYP Inhibition Prediction',
  'ADMET Modeling',
];

const methods = ['Flow Matching', 'Diffusion Models', 'RDKit', 'DeepChem'];

export function Research() {
  return (
    <section className="py-20 px-6" id="research">
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
    Scientific AI &amp; Research
  </h2>

  <p className="text-lg text-gray-400 max-w-3xl mx-auto">
    I work on AI applications for drug discovery and molecular modeling, exploring how generative and predictive methods can support scientific workflows.
  </p>
</motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* RESEARCH INTERESTS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="h-full bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-500/20 rounded-full mr-4 border border-blue-400/50">
                  <Atom className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Research Interests</h3>
                  <p className="text-blue-400">{areas.length} focus areas</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {areas.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-400/30"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CURRENT WORK */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="h-full bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-500/20 rounded-full mr-4 border border-blue-400/50">
                  <Beaker className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Current Work</h3>
                  <p className="text-blue-400">Scientific AI</p>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                Building practical foundations for molecular generation, binding affinity prediction, CYP modeling, and ADMET-oriented experimentation.
              </p>

              <p className="text-purple-300 text-sm mb-1 flex items-center gap-2">
                <GitBranch size={16} />
                research_status: exploratory and implementation-focused
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {methods.map((method) => (
                  <span
                    key={method}
                    className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-400/30"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
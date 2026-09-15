import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Beaker, Dna, GitBranch } from 'lucide-react';

const areas = ['Molecular Generation', 'Scaffold-based Molecular Generation', 'Scaffold Hopping', 'Molecular Graph Learning', 'Binding Affinity Prediction', 'CYP Inhibition Prediction', 'ADMET Modeling'];
const methods = ['Flow Matching', 'Diffusion Models', 'RDKit', 'DeepChem'];

export function Research() {
  return (
    <section className="relative overflow-hidden border-y border-emerald-400/15 bg-emerald-950/10 px-6 py-20" id="research">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-12 max-w-3xl">
          <p className="mb-3 font-mono text-sm uppercase tracking-[0.25em] text-emerald-300">Scientific AI / Research</p>
          <h2 className="mb-5 text-4xl font-bold text-white md:text-5xl">Scientific AI &amp; Research</h2>
          <p className="text-lg leading-relaxed text-gray-300">I work on AI applications for drug discovery and molecular modeling, exploring how generative and predictive methods can support scientific workflows.</p>
        </motion.div>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-emerald-400/20 bg-[#071b1c]/80 p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3"><Atom className="text-emerald-300" /><h3 className="text-2xl font-semibold text-white">Research Interests</h3></div>
            <div className="grid gap-3 sm:grid-cols-2">{areas.map((area) => <div key={area} className="flex items-center gap-3 border-b border-emerald-400/10 py-3 text-sm text-emerald-50"><Dna size={16} className="shrink-0 text-emerald-300" />{area}</div>)}</div>
          </div>
          <div className="rounded-2xl border border-cyan-400/20 bg-[#071525]/80 p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3"><Beaker className="text-cyan-300" /><h3 className="text-2xl font-semibold text-white">Current Work</h3></div>
            <p className="mb-6 leading-relaxed text-gray-300">Building practical foundations for molecular generation, binding affinity prediction, CYP modeling, and ADMET-oriented experimentation.</p>
            <div className="flex flex-wrap gap-2">{methods.map((method) => <span key={method} className="rounded-full border border-cyan-300/25 bg-cyan-400/10 px-3 py-2 text-sm text-cyan-100">{method}</span>)}</div>
            <div className="mt-8 flex items-center gap-3 border-t border-cyan-400/10 pt-5 font-mono text-xs text-gray-400"><GitBranch size={15} className="text-cyan-300" />research_status: exploratory and implementation-focused</div>
          </div>
        </div>
      </div>
    </section>
  );
}

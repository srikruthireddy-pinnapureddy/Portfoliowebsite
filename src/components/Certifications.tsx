import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  ['Oracle Cloud Infrastructure 2025 Certified Generative AI Professional', 'Oracle', 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=F98E5E2EB49427FA357952499B346194927775F762C1ECE0D85018DA5B153D1F'],
  ['Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate', 'Oracle', 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=E4EF7109B834FBDE0793AA2A906F73C8A5F0449A58D0CF7011783592C1BBB923'],
  ['Azure Databricks – Build Data Engineering and AI/ML Pipeline', 'Udemy', 'https://www.udemy.com/certificate/UC-7e1c2007-e26e-4636-92c8-db65d833ede2/'],
  ['AWS Educate Introduction to Cloud 101', 'AWS Educate', 'https://www.credly.com/badges/790e722b-b3f5-4bb4-9822-2d5c53fc370d/public_url']
];

export function Certifications() {
  return <section className="px-6 py-20" id="certifications"><div className="mx-auto max-w-6xl"><div className="mb-12 text-center"><h2 className="mb-5 bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">Certifications</h2><p className="text-lg text-gray-400">Verified credentials in Generative AI, AI foundations, data engineering, and cloud.</p></div><div className="grid gap-5 md:grid-cols-2">{certifications.map(([title, issuer, link], index) => <motion.article key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="flex items-start justify-between gap-4 rounded-xl border border-yellow-400/15 bg-gray-900/75 p-5"><div className="flex gap-4"><Award className="mt-1 shrink-0 text-yellow-300" size={22} /><div><h3 className="font-semibold text-white">{title}</h3><p className="mt-2 text-sm text-gray-400">Issuer: {issuer}</p></div></div><a href={link} target="_blank" rel="noopener noreferrer" aria-label={`View ${title}`} className="shrink-0 rounded-lg border border-yellow-400/30 p-2 text-yellow-200 hover:bg-yellow-400/10"><ExternalLink size={17} /></a></motion.article>)}</div></div></section>;
}

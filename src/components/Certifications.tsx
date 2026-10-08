import React from 'react';
import { motion } from 'framer-motion';
import { Award, FileText } from 'lucide-react';

const certifications = [
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
    issuer: 'Oracle',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=F98E5E2EB49427FA357952499B346194927775F762C1ECE0D85018DA5B153D1F',
  },
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issuer: 'Oracle',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=E4EF7109B834FBDE0793AA2A906F73C8A5F0449A58D0CF7011783592C1BBB923',
  },
  {
    title: 'Azure Databricks – Build Data Engineering and AI/ML Pipeline',
    issuer: 'Udemy',
    link: 'https://www.udemy.com/certificate/UC-7e1c2007-e26e-4636-92c8-db65d833ede2/',
  },
  {
    title: 'Python Essentials 1',
    issuer: 'Cisco',
    link: 'https://www.credly.com/badges/f815bf31-9dff-418b-80c8-e27c80d6c2c4/linked_in_profile',
  },
  {
    title: 'Getting Started with Databases',
    issuer: 'AWS Educate',
    link: 'https://www.credly.com/badges/03e6ba33-69c3-450f-8a28-cc0707f1a831/public_url',
  },
  {
    title: 'Introduction to Cloud 101',
    issuer: 'AWS Educate',
    link: 'https://www.credly.com/badges/790e722b-b3f5-4bb4-9822-2d5c53fc370d/public_url',
  },
];

export function Certifications() {
  return (
    <section className="py-20 px-6" id="certifications">
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
            Certifications
          </h2>
          <p className="text-lg text-gray-400">
            Verified credentials in Generative AI, AI foundations, data engineering, and cloud.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="h-full bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-full mr-4 border border-blue-400/50">
                    <Award className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                    <p className="text-blue-400">{cert.issuer}</p>
                  </div>
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${cert.title}`}
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <FileText size={16} />
                  <span className="text-sm">View Certificate</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
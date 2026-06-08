import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export function Certifications() {
  const certifications: Array<{
    title: string;
    link?: string;
    description?: string;
    issued?: string;
    expires?: string;
    badges?: Array<{ name: string; link: string }>;
    gradient: string;
  }> = [
    {
      title: "Insert First Certificate Name",
      link: "https://www.credly.com/badges/f815bf31-9dff-418b-80c8-e27c80d6c2c4/linked_in_profile",
      gradient: "from-red-500 to-orange-500"
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=F98E5E2EB49427FA357952499B346194927775F762C1ECE0D85018DA5B153D1F",
      gradient: "from-red-500 to-orange-500"
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=E4EF7109B834FBDE0793AA2A906F73C8A5F0449A58D0CF7011783592C1BBB923",
      gradient: "from-red-500 to-orange-500"
    },
    {
      title: "Azure Databricks – Build Data Engineering and AI/ML Pipeline",
      link: "https://www.udemy.com/certificate/UC-7e1c2007-e26e-4636-92c8-db65d833ede2/",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "AWS Educate Introduction to Cloud 101",
      link: "https://www.credly.com/badges/790e722b-b3f5-4bb4-9822-2d5c53fc370d/public_url",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "AWS Educate Getting Started with Databases",
      link: "https://www.credly.com/badges/03e6ba33-69c3-450f-8a28-cc0707f1a831/public_url",
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-gray-400 text-lg">
            Recent credentials supporting software engineering, cloud, and AI/ML learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="bg-gray-900 border border-purple-500/30 rounded-xl p-6 shadow-lg shadow-purple-500/10">
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 hover:opacity-5 transition-opacity duration-300`} />
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`p-3 rounded-full bg-gradient-to-r ${cert.gradient} bg-opacity-20`}
                    >
                      <Award className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                  <CardTitle className="text-white hover:text-yellow-400 transition-colors duration-300 text-lg">
                    {cert.title}
                  </CardTitle>
                  {cert.description && (
                    <CardDescription className="text-gray-400">
                      {cert.description}
                    </CardDescription>
                  )}
                  {cert.issued && (
                    <div className="text-purple-300 text-sm mt-2">
                      <p>{cert.issued}</p>
                      <p>{cert.expires}</p>
                    </div>
                  )}
                </CardHeader>
                
                <CardContent className="relative flex-grow flex flex-col justify-end">
                  {cert.badges ? (
                    <div className="space-y-2">
                      {cert.badges.map((badge, badgeIndex) => (
                        <a
                          key={badgeIndex}
                          href={badge.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-2 bg-yellow-500/10 hover:bg-yellow-500/20 rounded border border-yellow-400/30 transition-all duration-300 group"
                        >
                          <span className="text-gray-300 text-sm group-hover:text-white">{badge.name}</span>
                          <ExternalLink className="w-4 h-4 text-yellow-400" />
                        </a>
                      ))}
                    </div>
                  ) : cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-2 px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded border border-yellow-400/30 hover:bg-yellow-500/30 transition-all duration-300"
                    >
                      <span className="text-sm">View Certificate</span>
                      <ExternalLink size={16} />
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

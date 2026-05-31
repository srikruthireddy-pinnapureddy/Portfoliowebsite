import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, DollarSign, Flame, HeartPulse } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export function Projects() {
  const projects = [
    {
      title: "ExpenX – A Money Splitting App",
      description: "Mobile-first expense management application with smart expense splitting, QR & link-based member onboarding, in-app chat, and seamless settlement workflows",
      icon: DollarSign,
      tech: ["React Native", "React.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "Redis", "WebSockets", "OCR", "Stripe", "AWS", "Docker"],
      gradient: "from-green-400 to-blue-500",
      demo: "https://money-notes-app-seven.vercel.app",
      github: "https://money-notes-app-seven.vercel.app",
      period: "Oct 2025 – Dec 2025"
    },
    {
      title: "Fire and Smoke Detection System",
      description: "Real-time fire and smoke detection system leveraging YOLOv9 and GELAN-C architectures with engineered end-to-end data pipeline processing 2,000 images",
      icon: Flame,
      tech: ["Python", "OpenCV", "YOLOv9", "GELAN-C", "Streamlit", "Roboflow", "GPU"],
      gradient: "from-orange-400 to-red-500",
      demo: "#",
      github: "https://github.com/srikruthireddy-pinnapureddy/fire-and-smoke-detection-system-using-YOLOv9",
      period: "July 2025 – Present"
    },
    {
      title: "Skin Cancer Detection",
      description: "Flask web application integrating Graph Convolutional Networks (GCN) and CNN for automated skin lesion classification, achieving 88% recall on HAM10000 dataset",
      icon: HeartPulse,
      tech: ["Python", "TensorFlow", "Flask", "OpenCV", "NumPy", "Pandas", "scikit-learn", "GPU"],
      gradient: "from-pink-400 to-purple-500",
      demo: "#",
      github: "https://github.com/srikruthireddy-pinnapureddy/Skin-Cancer-Detection-using-GCN-CNN-Hybrid-Models",
      period: "December 2024 – May 2025"
    }
  ];

  return (
    <section className="py-20 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Innovative AI/ML projects bridging theoretical concepts with practical applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-gray-900/50 border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 overflow-hidden relative h-full flex flex-col">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`p-3 rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-20`}
                    >
                      <project.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex space-x-2">
                      {project.demo !== "#" && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="ghost" className="text-gray-400 hover:text-blue-400">
                            <ExternalLink size={16} />
                          </Button>
                        </a>
                      )}
                      {project.github !== "#" && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="ghost" className="text-gray-400 hover:text-blue-400">
                            <Github size={16} />
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <p className="text-purple-300 text-sm mb-2">{project.period}</p>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 6 && (
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30">
                        +{project.tech.length - 6} more
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
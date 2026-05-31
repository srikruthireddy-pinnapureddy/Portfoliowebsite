import React from 'react';
import { motion } from 'framer-motion';
import { Github, ShieldAlert, MailWarning, UserRoundSearch } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export function Projects() {
  const projects = [
    // Original AI / ML projects (restored)
    {
      title: 'ExpenX — Expense Insights & Forecasting',
      description:
        'Full-stack expense tracking web app with ML-powered categorization and forecasting. Provides analytics, recurring expense detection, and visualizations to help users optimize spending.',
      icon: Github,
      tech: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Chart.js', 'Scikit-learn'],
      features: ['Automated Categorization', 'Forecasting', 'Interactive Charts', 'Recurring Expense Detection', 'Export/Import'],
      gradient: 'from-green-400 to-emerald-500',
      github: 'https://github.com/srikruthireddy-pinnapureddy/ExpenX',
      period: '2024'
    },
    {
      title: 'Fire & Smoke Detection System',
      description:
        'Edge ML solution using a Raspberry Pi and camera with a lightweight object detector to identify fire and smoke in real-time, plus alerting and dashboard visualization.',
      icon: UserRoundSearch,
      tech: ['Raspberry Pi', 'Python', 'TensorFlow', 'YOLOv5', 'OpenCV', 'MQTT'],
      features: ['Real-time Detection', 'Edge Inference', 'Alerting', 'Dashboard', 'Low-power Optimizations'],
      gradient: 'from-red-400 to-orange-500',
      github: 'https://github.com/srikruthireddy-pinnapureddy/fire-smoke-detection',
      period: '2023'
    },
    {
      title: 'Skin Cancer (Melanoma) Classifier',
      description:
        'Transfer-learning based image classifier trained on dermoscopic images to help identify melanoma vs benign lesions; includes explainability overlays and a simple UI for review.',
      icon: MailWarning,
      tech: ['Python', 'TensorFlow', 'Keras', 'MobileNet', 'Flask', 'Docker'],
      features: ['Transfer Learning', 'Model Explainability', 'Web UI', 'Dockerized'],
      gradient: 'from-pink-400 to-purple-500',
      github: 'https://github.com/srikruthireddy-pinnapureddy/skin-cancer-classifier',
      period: '2022'
    },

    // New cybersecurity projects (appended)
    {
      title: 'SIEM Log Analyzer for SSH Threat Detection',
      description:
        'Built a SOC-style SSH log analysis pipeline in Python to detect brute-force attacks, off-hours logins, privilege escalation attempts, unknown users, and correlated account compromise incidents.',
      icon: ShieldAlert,
      tech: ['Python', 'Regex', 'Linux Auth Logs', 'Streamlit', 'JSON', 'MITRE ATT&CK', 'AbuseIPDB API', 'VirusTotal API'],
      features: [
        'MITRE ATT&CK Mapping',
        'Severity Scoring',
        'IOC Extraction',
        'AbuseIPDB Integration',
        'VirusTotal Integration',
        'Incident Reporting',
        'Streamlit Dashboard',
        'Threat Intelligence Enrichment',
        'Security Event Correlation'
      ],
      gradient: 'from-cyan-400 to-blue-500',
      github: 'https://github.com/srikruthireddy-pinnapureddy/-SIEM-Log-Analyzer-for-SSH-Threat-Detection-',
      period: '2025'
    },
    {
      title: 'Phishing Email Header Analyzer',
      description:
        'Developed a phishing investigation and email header analysis system to detect spoofed senders, suspicious domains, malicious IPs, and phishing indicators using automated IOC extraction and threat intelligence enrichment.',
      icon: MailWarning,
      tech: ['Python', 'Flask', 'Regex', 'Email Parser', 'VirusTotal API', 'AbuseIPDB API', 'DNS Lookup', 'Streamlit', 'JSON'],
      features: [
        'SPF Validation',
        'DKIM Validation',
        'DMARC Validation',
        'IOC Extraction',
        'Threat Intelligence',
        'Reputation Analysis',
        'Incident Reporting',
        'Streamlit Dashboard'
      ],
      gradient: 'from-orange-400 to-red-500',
      github: 'https://github.com/srikruthireddy-pinnapureddy/phishing-email-header-analyzer',
      period: '2025'
    },
    {
      title: 'Insider Threat Detection using User Behavior Analytics',
      description:
        'Developed a machine learning-based User Behavior Analytics system to detect anomalous login activity, abnormal access patterns, and potential insider threats from simulated enterprise user logs.',
      icon: UserRoundSearch,
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Isolation Forest', 'Streamlit', 'Matplotlib', 'Behavioral Analytics'],
      features: [
        'Isolation Forest',
        'Behavioral Analytics',
        'Risk Scoring',
        'Alert Prioritization',
        'Insider Threat Detection',
        'Security Monitoring',
        'Streamlit Dashboard'
      ],
      gradient: 'from-purple-400 to-pink-500',
      github: 'https://github.com/srikruthireddy-pinnapureddy/insider-threat-uba',
      period: '2025'
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
            SOC-focused cybersecurity projects centered on SIEM, threat detection, incident response,
            phishing analysis, threat intelligence, detection engineering, and security automation.
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

                  <div className="mt-4 grid sm:grid-cols-2 gap-2">
                    {project.features.slice(0, 6).map((feature) => (
                      <div
                        key={feature}
                        className="text-xs px-2 py-1 rounded border border-purple-400/30 bg-purple-500/10 text-purple-200"
                      >
                        {feature}
                      </div>
                    ))}
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
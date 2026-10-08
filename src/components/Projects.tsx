import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Filter, Github, Search, Sparkles } from 'lucide-react';

type Category = 'Generative AI' | 'Scientific AI' | 'Computer Vision' | 'AI Engineering' | 'Cybersecurity' | 'Full Stack';
type Project = {
  title: string;
  problem: string;
  approach: string;
  category: Category;
  stack: string[];
  features: string[];
  github?: string;
  demo?: string;
  research?: string;
};

const categories: Array<'All' | Category> = ['All', 'Generative AI', 'Scientific AI', 'Computer Vision', 'AI Engineering', 'Cybersecurity', 'Full Stack'];

const projects: Project[] = [
  { title: 'AI Interviewer Platform', problem: 'Streamline interview practice and assessment with an AI-led conversational experience.', approach: 'Python backend services, conversational AI, model integration, and structured interview workflows.', category: 'Generative AI', stack: ['Python', 'FastAPI', 'LLMs', 'Conversational AI'], features: ['Voice-oriented workflow', 'Interview orchestration', 'Backend APIs'] },
  { title: 'Scientific AI / Molecular Generation', problem: 'Explore generative approaches for creating and reasoning about molecular structures.', approach: 'Molecular representations and generative modeling concepts for drug-discovery workflows.', category: 'Scientific AI', stack: ['Python', 'RDKit', 'DeepChem', 'Diffusion Models'], features: ['Molecular generation', 'Scaffold conditioning', 'Scientific workflow'] },
  { title: 'CYP Binding Affinity / CYP Modeling', problem: 'Support computational analysis of CYP-related molecular behavior.', approach: 'Machine learning workflows for molecular features, prediction, and model integration.', category: 'Scientific AI', stack: ['Python', 'RDKit', 'DeepChem', 'Molecular Graphs'], features: ['CYP inhibition prediction', 'Binding affinity modeling', 'ADMET context'] },
  { title: 'SIEM Log Analyzer for SSH Threat Detection', problem: 'Surface suspicious activity in Linux authentication logs.', approach: 'Log analysis and security intelligence workflows for identifying SSH threat patterns.', category: 'Cybersecurity', stack: ['Python', 'SIEM', 'Linux Logs', 'MITRE ATT&CK'], features: ['Authentication log analysis', 'Threat indicators', 'AbuseIPDB and VirusTotal context'] },
  { title: 'Fire & Smoke Detection using YOLOv9', problem: 'Detect fire and smoke in visual inputs for safety-oriented monitoring.', approach: 'Object-detection workflow using the YOLOv9 family for computer vision inference.', category: 'Computer Vision', stack: ['Python', 'YOLOv9', 'Computer Vision'], features: ['Visual detection', 'Inference workflow', 'Safety monitoring'] },
  { title: 'AI Healthcare Voice Assistant', problem: 'Provide a voice-driven interface for healthcare-oriented interactions.', approach: 'Conversational AI, speech workflows, and backend integration for guided user experiences.', category: 'Generative AI', stack: ['Python', 'NLP', 'Speech Processing', 'Flask'], features: ['Voice workflow', 'Conversational responses', 'API integration'] },
  { title: 'EXPENX', problem: 'Coordinate shared expenses with a real-time collaborative platform.', approach: 'Full-stack service with real-time synchronization, receipt capture, and payment workflows.', category: 'Full Stack', stack: ['Node.js', 'NestJS', 'PostgreSQL', 'Redis', 'WebSockets'], features: ['Expense splitting', 'OCR receipt capture', 'Real-time synchronization'], github: 'https://github.com/srikruthireddy-pinnapureddy/ExpenX', demo: 'https://expenx-money-notes.lovable.app/' },
  { title: 'Team Task Manager', problem: 'Manage users, roles, and task lifecycles through a focused backend service.', approach: 'REST APIs, authentication, database design, and service-layer testing.', category: 'AI Engineering', stack: ['Node.js', 'NestJS', 'PostgreSQL', 'REST APIs'], features: ['User management', 'Task workflows', 'Role-based access'], github: 'https://github.com/srikruthireddy-pinnapureddy/team_task_manager_backend' },
];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | Category>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const visibleProjects = useMemo(
    () =>
      projects.filter((project) => {
        const text = `${project.title} ${project.problem} ${project.approach} ${project.category} ${project.stack.join(' ')} ${project.features.join(' ')}`.toLowerCase();
        return (
          (selectedCategory === 'All' || project.category === selectedCategory) &&
          text.includes(searchQuery.toLowerCase())
        );
      }),
    [searchQuery, selectedCategory]
  );

  return (
    <section className="py-20 px-6" id="projects">
      <div className="max-w-7xl mx-auto">
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
            Projects
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            AI systems, scientific workflows, computer vision, security automation, and the backend services that connect them to real users.
          </p>
        </motion.div>

        {/* SEARCH + FILTER */}
        <div className="mb-10 grid gap-4 rounded-lg border border-gray-700/50 bg-gray-900/80 backdrop-blur-sm p-4 lg:grid-cols-[1fr_auto]">
          <label className="flex items-center gap-3 rounded-lg border border-gray-700/50 bg-gray-950/40 px-4 py-3">
            <Search className="text-blue-400" size={18} />
            <span className="sr-only">Search projects</span>
            <input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search projects, tools, or domains"
              className="w-full bg-transparent text-white outline-none placeholder:text-gray-500"
            />
          </label>

          <label className="flex items-center gap-2 text-gray-400">
            <Filter size={18} />
            <span className="sr-only">Filter projects</span>
            <select
              value={selectedCategory}
              onChange={(event) => setSelectedCategory(event.target.value as 'All' | Category)}
              className="rounded-lg border border-gray-700/50 bg-gray-950/60 px-3 py-2 text-gray-300"
            >
              {categories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </label>
        </div>

        {/* PROJECT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      className="h-full"
    >
      <div className="h-full flex flex-col bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300">
        {/* Header: circled icon + title + blue category */}
        <div className="flex items-center mb-4">
          <div className="p-2 bg-blue-500/20 rounded-full mr-4 border border-blue-400/50">
            <Sparkles className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <p className="text-blue-400">{project.category}</p>
          </div>
        </div>

        {/* Problem + approach */}
        <p className="text-gray-300 mb-3">{project.problem}</p>
        <p className="text-gray-400 text-sm mb-4">
          <span className="text-purple-300">Approach: </span>
          {project.approach}
        </p>

        {/* Features */}
        <ul className="mb-4 space-y-1 text-sm text-gray-400">
          {project.features.map((feature) => (
            <li key={feature} className="flex gap-2">
              <span className="text-blue-400">+</span>
              {feature}
            </li>
          ))}
        </ul>

        {/* Links */}
        {(project.demo || project.github || project.research) && (
          <div className="flex flex-wrap gap-4 mb-4">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <ExternalLink size={16} />
                <span className="text-sm">Live Demo</span>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Github size={16} />
                <span className="text-sm">GitHub</span>
              </a>
            )}
            {project.research && (
              <a
                href={project.research}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <ExternalLink size={16} />
                <span className="text-sm">Research</span>
              </a>
            )}
          </div>
        )}

        {/* Stack pills pinned to the bottom so cards line up */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.stack.map((item) => (
            <span
              key={item}
              className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-400/30"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
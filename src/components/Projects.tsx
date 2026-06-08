import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, ExternalLink, Filter, Github, LayoutGrid, Search, ServerCog, ShieldCheck, Sparkles, Workflow } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';

type ProjectCategory =
  | 'Featured Software Engineering Projects'
  | 'Backend & Cloud Projects'
  | 'Data Engineering Projects'
  | 'Artificial Intelligence Projects'
  | 'Web Applications';

type Project = {
  title: string;
  description: string;
  category: ProjectCategory;
  techStack: string[];
  technologiesUsed: string[];
  keyFeatures: string[];
  demoLink?: string;
  githubLink?: string;
  period: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  featured?: boolean;
};

const categoryOrder: ProjectCategory[] = [
  'Featured Software Engineering Projects',
  'Backend & Cloud Projects',
  'Data Engineering Projects',
  'Artificial Intelligence Projects',
  'Web Applications'
];

const categoryMeta: Record<ProjectCategory, { label: string; icon: React.ComponentType<{ className?: string }> }> = {
  'Featured Software Engineering Projects': { label: 'Featured Software Engineering Projects', icon: Sparkles },
  'Backend & Cloud Projects': { label: 'Backend & Cloud Projects', icon: ServerCog },
  'Data Engineering Projects': { label: 'Data Engineering Projects', icon: Database },
  'Artificial Intelligence Projects': { label: 'Artificial Intelligence Projects', icon: Code2 },
  'Web Applications': { label: 'Web Applications', icon: Workflow }
};

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const projects: Project[] = [
    {
      title: 'EXPENX – Real Time Expense Splitting Platform',
      description:
        'A production-style expense splitting platform with real-time synchronization, OCR-based receipt capture, payment handling, and cloud deployment patterns for collaborative finance workflows.',
      category: 'Featured Software Engineering Projects',
      techStack: ['Node.js', 'NestJS', 'PostgreSQL', 'Redis', 'WebSockets'],
      technologiesUsed: ['AWS', 'Docker', 'OCR Processing', 'Razorpay', 'TypeScript'],
      keyFeatures: ['Real-time Synchronization', 'Expense Splitting', 'OCR Receipt Capture', 'Razorpay Integration', 'Cloud-ready Deployment'],
      demoLink: 'https://expenx-splitting-app.vercel.app/',
      githubLink: 'https://github.com/srikruthireddy-pinnapureddy/ExpenX',
      period: '2025',
      icon: ServerCog,
      gradient: 'from-cyan-400 to-blue-500',
      featured: true
    },
    {
      title: 'Team Task Manager Backend',
      description:
        'Backend-first task management system built around REST APIs, user lifecycle handling, task workflows, and database design with debugging and testing practices applied across the service layer.',
      category: 'Featured Software Engineering Projects',
      techStack: ['REST APIs', 'Node.js', 'NestJS', 'PostgreSQL'],
      technologiesUsed: ['Testing', 'Debugging', 'Database Design', 'JWT Auth', 'Postman'],
      keyFeatures: ['User Management', 'Task Lifecycle Management', 'Role-based Access', 'Service-layer Testing', 'Schema Design'],
      githubLink: 'https://github.com/srikruthireddy-pinnapureddy/team_task_manager_backend',
      period: '2025',
      icon: Workflow,
      gradient: 'from-blue-400 to-indigo-500',
      featured: true
    },
    {
      title: 'Intelligent Data Quality ETL Pipeline using PySpark',
      description:
        'Scalable ETL pipeline focused on data quality checks, validation, and batch processing. Designed for large-scale data handling with SQL-based checks and PySpark transformations.',
      category: 'Featured Software Engineering Projects',
      techStack: ['PySpark', 'Python', 'SQL', 'Apache Spark'],
      technologiesUsed: ['ETL Pipelines', 'Data Validation', 'Data Quality Monitoring', 'Large Scale Processing', 'Structured Logging'],
      keyFeatures: ['Quality Rule Enforcement', 'Data Validation', 'Monitoring Metrics', 'Scalable Processing', 'SQL Checks'],
      githubLink: 'https://github.com/srikruthireddy-pinnapureddy/Intelligent-Data-Quality-ETL-Pipeline-using-PySpark',
      period: '2025',
      icon: Database,
      gradient: 'from-emerald-400 to-teal-500',
      featured: true
    },
    {
      title: 'Money Notes App',
      description:
        'Full-stack expense tracking application with analytics, recurring expense detection, and forecasting support. Designed to help users understand and optimize spending behavior.',
      category: 'Backend & Cloud Projects',
      techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
      technologiesUsed: ['Chart.js', 'Scikit-learn', 'Export/Import', 'REST APIs', 'Feature-rich UI'],
      keyFeatures: ['Automated Categorization', 'Forecasting', 'Interactive Charts', 'Recurring Expense Detection', 'Export/Import'],
      githubLink: 'https://github.com/srikruthireddy-pinnapureddy/money-notes-app-1bd93cf2',
      period: '2024',
      icon: LayoutGrid,
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      title: 'Fire & Smoke Detection using YOLOv9',
      description:
        'Edge AI solution using computer vision to identify fire and smoke in real time with alerting and dashboard visualization for faster safety response.',
      category: 'Artificial Intelligence Projects',
      techStack: ['Python', 'YOLOv9', 'OpenCV', 'TensorFlow'],
      technologiesUsed: ['Raspberry Pi', 'MQTT', 'Edge Inference', 'Alerting', 'Visualization'],
      keyFeatures: ['Real-time Detection', 'Edge Inference', 'Alerting', 'Dashboard', 'Low-power Optimization'],
      githubLink: 'https://github.com/srikruthireddy-pinnapureddy/fire-and-smoke-detection-system-using-YOLOv9',
      period: '2023',
      icon: ShieldCheck,
      gradient: 'from-red-400 to-orange-500'
    },
    {
      title: 'Skin Cancer Detection using GCN-CNN Hybrid Models',
      description:
        'Hybrid deep learning classifier trained on dermoscopic images to support melanoma screening with explainability-oriented review workflows.',
      category: 'Artificial Intelligence Projects',
      techStack: ['Python', 'TensorFlow', 'Keras', 'CNN'],
      technologiesUsed: ['GCN', 'MobileNet', 'Flask', 'Docker', 'Explainability'],
      keyFeatures: ['Transfer Learning', 'Model Explainability', 'Web UI', 'Dockerized Workflow', 'Clinical-style Review'],
      githubLink: 'https://github.com/srikruthireddy-pinnapureddy/Skin-Cancer-Detection-using-GCN-CNN-Hybrid-Models',
      period: '2022',
      icon: Code2,
      gradient: 'from-pink-400 to-purple-500'
    },
    {
      title: 'AI Health Care Voice Assistant',
      description:
        'Voice-enabled assistant for healthcare-oriented interactions, combining conversational AI, speech workflows, and backend integration to support guided user experiences.',
      category: 'Artificial Intelligence Projects',
      techStack: ['Python', 'NLP', 'Speech Processing', 'Flask'],
      technologiesUsed: ['Voice UI', 'API Integration', 'Automation', 'Conversation Design', 'Application Layer'],
      keyFeatures: ['Voice-driven Workflow', 'Healthcare Context', 'Conversational Responses', 'API Integration', 'User Guidance'],
      githubLink: 'https://github.com/srikruthireddy-pinnapureddy',
      period: '2025',
      icon: Sparkles,
      gradient: 'from-violet-400 to-fuchsia-500'
    },
    {
      title: 'Multi Agent System',
      description:
        'A collaborative agentic workflow exploring orchestration, task delegation, and coordinated reasoning patterns for AI-driven automation.',
      category: 'Artificial Intelligence Projects',
      techStack: ['Python', 'Agent Orchestration', 'LLM Workflows'],
      technologiesUsed: ['Automation', 'Planning', 'Coordination', 'Prompting', 'Experimental AI'],
      keyFeatures: ['Task Decomposition', 'Agent Coordination', 'Workflow Automation', 'Reasoning Chains', 'Modular Design'],
      githubLink: 'https://github.com/srikruthireddy-pinnapureddy',
      period: '2025',
      icon: Workflow,
      gradient: 'from-fuchsia-400 to-rose-500'
    },
    {
      title: 'Portfolio Website',
      description:
        'Personal portfolio built to present software engineering, backend, AI, and cybersecurity projects with a recruiter-focused layout and responsive design.',
      category: 'Web Applications',
      techStack: ['React', 'TypeScript', 'Vite'],
      technologiesUsed: ['Framer Motion', 'Tailwind CSS', 'Responsive UI', 'SEO', 'Dark Mode'],
      keyFeatures: ['Project Showcase', 'Resume Access', 'Responsive Layout', 'Enterprise-style Presentation', 'SEO Optimization'],
      githubLink: 'https://github.com/srikruthireddy-pinnapureddy/Portfoliowebsite',
      period: '2026',
      icon: Workflow,
      gradient: 'from-slate-400 to-cyan-500'
    },
    {
      title: 'Cyber Pixel Vista',
      description:
        'Creative web application project focused on visual presentation, smooth interactions, and front-end craftsmanship with a polished user experience.',
      category: 'Web Applications',
      techStack: ['React', 'JavaScript', 'CSS'],
      technologiesUsed: ['Motion Design', 'UI Composition', 'Component Reuse', 'Responsive Design', 'Modern Styling'],
      keyFeatures: ['Interactive UI', 'Visual Polish', 'Responsive Behavior', 'Fast Loading', 'Component-based Structure'],
      githubLink: 'https://github.com/srikruthireddy-pinnapureddy',
      period: '2025',
      icon: Sparkles,
      gradient: 'from-indigo-400 to-violet-500'
    }
  ];

  const visibleProjects = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const searchableText = [
        project.title,
        project.description,
        project.category,
        ...project.techStack,
        ...project.technologiesUsed,
        ...project.keyFeatures
      ]
        .join(' ')
        .toLowerCase();

      return matchesCategory && (!normalizedQuery || searchableText.includes(normalizedQuery));
    });
  }, [projects, searchQuery, selectedCategory]);

  const featuredProjects = visibleProjects.filter((project) => project.featured);
  const gridProjects = selectedCategory === 'All' ? visibleProjects.filter((project) => !project.featured) : visibleProjects;

  return (
    <section className="py-20 px-6" id="projects">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Projects
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-400">
            Filter by category or search by technology to review backend systems, AI work, cybersecurity tooling,
            and recruiter-relevant software engineering projects.
          </p>
        </motion.div>

        <div className="mb-8 grid gap-4 rounded-2xl border border-gray-700/60 bg-gray-900/45 p-4 backdrop-blur-sm lg:grid-cols-[1.4fr_0.8fr]">
          <div className="flex items-center gap-3 rounded-xl border border-gray-700/50 bg-gray-950/40 px-4 py-3">
            <Search className="text-cyan-300" size={18} />
            <Input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search by project, tech stack, feature, or domain"
              className="border-0 bg-transparent p-0 text-white placeholder:text-gray-500 focus-visible:ring-0"
            />
          </div>

          <div className="flex items-center justify-between gap-3 rounded-xl border border-gray-700/50 bg-gray-950/40 px-4 py-3 text-sm text-gray-300">
            <span className="inline-flex items-center gap-2">
              <Filter size={16} className="text-blue-300" />
              {visibleProjects.length} projects visible
            </span>
            <span className="inline-flex items-center gap-2 text-gray-400">
              <LayoutGrid size={16} />
              Enterprise portfolio view
            </span>
          </div>
        </div>

        <div className="mb-10 flex flex-wrap gap-3">
          {(['All', ...categoryOrder] as const).map((category) => {
            const active = selectedCategory === category;
            const label = category === 'All' ? 'All Projects' : categoryMeta[category].label;
            const Icon = category === 'All' ? LayoutGrid : categoryMeta[category].icon;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                  active
                    ? 'border-cyan-400/60 bg-cyan-500/15 text-cyan-100 shadow-lg shadow-cyan-950/20'
                    : 'border-gray-700/60 bg-gray-900/50 text-gray-300 hover:border-cyan-400/30 hover:text-white'
                }`}
              >
                <Icon size={14} />
                {label}
              </button>
            );
          })}
        </div>

        {selectedCategory === 'All' && featuredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-6"
          >
            <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-100">
                  <Sparkles size={14} />
                  Featured Software Engineering Projects
                </div>
                <h3 className="mt-3 text-2xl font-bold text-white">Most relevant projects for Honeywell Software Engineer I roles</h3>
              </div>
              <p className="max-w-2xl text-sm text-gray-300">
                These projects emphasize backend architecture, scalable data handling, and production-style execution.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </motion.div>
        )}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {gridProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <Card className="relative flex h-full flex-col overflow-hidden border-gray-700/60 bg-gray-900/65 transition-all duration-300 hover:border-cyan-400/40">
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5`} />
      <CardHeader className="relative">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div className={`rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-20 p-3`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <span className="rounded-full border border-gray-700/60 bg-gray-950/70 px-3 py-1 text-xs text-gray-300">
            {project.category}
          </span>
        </div>

        <CardTitle className="text-xl text-white transition-colors duration-300 group-hover:text-cyan-300">
          {project.title}
        </CardTitle>
        <p className="text-sm text-cyan-200/80">{project.period}</p>
        <CardDescription className="mt-2 text-gray-400">{project.description}</CardDescription>
      </CardHeader>

      <CardContent className="relative flex flex-1 flex-col gap-5">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-300">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((item) => (
              <span key={item} className="rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-100">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-300">Technologies Used</p>
          <div className="flex flex-wrap gap-2">
            {project.technologiesUsed.map((item) => (
              <span key={item} className="rounded-full border border-blue-400/25 bg-blue-500/10 px-3 py-1 text-sm text-blue-100">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-300">Key Features</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {project.keyFeatures.map((feature) => (
              <div key={feature} className="rounded-lg border border-purple-400/25 bg-purple-500/10 px-3 py-2 text-xs text-purple-100">
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-2">
          {project.demoLink ? (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/60 px-4 py-2 text-sm text-cyan-100 transition-all duration-300 hover:bg-cyan-500/10"
            >
              Live Demo
              <ExternalLink size={14} />
            </a>
          ) : null}

          {project.githubLink ? (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-400/60 px-4 py-2 text-sm text-gray-200 transition-all duration-300 hover:bg-gray-500/10"
            >
              GitHub Repo
              <Github size={14} />
            </a>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}
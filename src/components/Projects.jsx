import { motion } from 'framer-motion'
import { ExternalLink, ArrowUpRight, Code2 } from 'lucide-react'
import { GithubIcon } from './icons'
import { useTilt } from './MotionEffects'

const projects = [
  {
    title: 'AI Study Companion',
    subtitle: 'Intelligent Learning Platform',
    description: 'An AI-powered study platform that generates personalized quizzes, summarizes documents, and provides conversational tutoring using RAG pipelines and vector search.',
    problem: 'Students waste hours on passive studying with no personalized feedback loop.',
    solution: 'Built a RAG-based system that ingests course materials, generates context-aware quizzes, and provides conversational AI tutoring — all personalized per user.',
    technologies: ['Next.js', 'OpenAI', 'LangChain', 'Pinecone', 'MongoDB', 'Tailwind'],
    metrics: { users: '2.4K+', rating: '4.9/5', uptime: '99.9%' },
    accent: 'text-accent',
    bg: 'bg-accent/5',
  },
  {
    title: 'TaskFlow Pro',
    subtitle: 'Project Management Suite',
    description: 'A collaborative project management tool with real-time updates, Kanban boards, team analytics, and AI-powered task prioritization.',
    problem: 'Existing project tools are either too complex or lack intelligent workflow automation.',
    solution: 'Engineered a full-stack Kanban platform with real-time WebSocket sync, drag-and-drop boards, and an AI engine that suggests task priorities based on deadlines and dependencies.',
    technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Redis', 'Docker'],
    metrics: { teams: '180+', tasks: '45K+', latency: '<50ms' },
    accent: 'text-accent-secondary',
    bg: 'bg-accent-secondary/5',
  },
  {
    title: 'CodePulse',
    subtitle: 'Developer Analytics Dashboard',
    description: 'A GitHub analytics dashboard that visualizes coding patterns, tracks contribution metrics, and generates AI-driven developer insights.',
    problem: 'Developers lack visibility into their coding habits and productivity patterns.',
    solution: 'Created a dashboard that pulls GitHub data, visualizes commit patterns, language distribution, and uses ML to provide personalized productivity insights.',
    technologies: ['React', 'Express.js', 'GitHub API', 'Chart.js', 'MongoDB', 'Tailwind'],
    metrics: { repos: '3.2K+', devs: '890+', insights: 'Daily' },
    accent: 'text-accent',
    bg: 'bg-accent/5',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="section-header mb-16"
        >
          <span className="section-label">Projects</span>
          <h2 className="section-title">Featured work.</h2>
          <p className="section-desc">Each project is a case study in solving real problems with thoughtful engineering.</p>
        </motion.div>

        <div className="grid-3 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`card gradient-border h-full flex flex-col overflow-hidden group ${i === 0 ? 'project-featured lg:col-span-2' : ''}`}
            >
              {/* Image area */}
              <div className="project-media relative aspect-[4/3] -mx-6 -my-6 mx-6 my-6 mb-6 rounded-xl bg-bg border border-border overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20" />
                <div className="project-shine absolute inset-0 z-10 pointer-events-none" />
                <div className="absolute top-3 left-3 flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-border-light" />
                  <div className="w-2.5 h-2.5 rounded-full bg-border-light" />
                  <div className="w-2.5 h-2.5 rounded-full bg-border-light" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative z-10 text-center">
                    <motion.div
                      animate={{ rotate: [0, 2, -2, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      className="text-border-light/30"
                    >
                      <Code2 size={48} className="mb-2" />
                    </motion.div>
                    <span className="text-xs text-text-muted/50 font-medium">{project.subtitle}</span>
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-2 rounded-lg glass text-text-muted hover:text-text hover:bg-white/5 transition-colors" aria-label="View demo">
                    <ExternalLink size={14} />
                  </button>
                  <button className="p-2 rounded-lg glass text-text-muted hover:text-text hover:bg-white/5 transition-colors" aria-label="View source">
                    <GithubIcon size={14} />
                  </button>
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`w-2 h-2 rounded-full ${project.accent.replace('text-', 'bg-')}`} />
                  <span className="text-xs font-mono text-text-muted tracking-wider uppercase">{project.subtitle}</span>
                </div>

                <h3 className="text-xl font-bold text-text mb-3 tracking-tight">{project.title}</h3>

                <p className="text-text-muted leading-relaxed text-sm mb-5 flex-1">{project.description}</p>

                <div className="grid grid-cols-2 gap-2 mb-5">
                  {Object.entries(project.metrics).map(([key, val]) => (
                    <div key={key} className="p-3 rounded-xl bg-bg border border-border text-center">
                      <p className="text-xl font-bold text-text">{val}</p>
                      <p className="text-[10px] font-mono text-text-muted uppercase tracking-wider">{key}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 text-xs font-mono font-medium text-text-muted bg-bg rounded-lg border border-border">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-border">
                  <motion.a
                    href={project.liveUrl || '#'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-accent text-bg font-bold rounded-lg text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(110,231,183,0.15)]"
                  >
                    <ArrowUpRight size={14} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl || '#'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 glass text-text-muted font-bold rounded-lg text-sm hover:text-text hover:border-white/10 transition-all duration-300"
                  >
                    <GithubIcon size={14} />
                    Source
                  </motion.a>
                </div>
              </div>
            </ProjectCard>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ children, ...props }) {
  const tiltRef = useTilt()
  return <motion.div ref={tiltRef} {...props}>{children}</motion.div>
}
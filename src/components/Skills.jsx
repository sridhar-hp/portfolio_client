import { motion } from 'framer-motion'
import { Code2, Server, Database, Wrench, Brain, Globe } from 'lucide-react'

const categories = [
  { title: 'Frontend', icon: Code2, skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux', 'Vite'], accent: 'text-accent', bg: 'bg-accent/10' },
  { title: 'Backend', icon: Server, skills: ['Node.js', 'Express.js', 'Python', 'FastAPI', 'REST APIs', 'GraphQL', 'JWT Auth'], accent: 'text-accent-secondary', bg: 'bg-accent-secondary/10' },
  { title: 'Databases', icon: Database, skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Mongoose', 'Prisma', 'Firebase'], accent: 'text-accent', bg: 'bg-accent/10' },
  { title: 'DevOps & Tools', icon: Wrench, skills: ['Git & GitHub', 'Docker', 'AWS', 'Vercel', 'CI/CD', 'Postman', 'Linux'], accent: 'text-accent-secondary', bg: 'bg-accent-secondary/10' },
  { title: 'AI & ML', icon: Brain, skills: ['OpenAI API', 'LangChain', 'Hugging Face', 'RAG Systems', 'Vector DBs', 'Prompt Engineering'], accent: 'text-accent', bg: 'bg-accent/10' },
  { title: 'Architecture', icon: Globe, skills: ['System Design', 'Microservices', 'Event-Driven', 'Caching', 'Message Queues', 'Observability'], accent: 'text-accent-secondary', bg: 'bg-accent-secondary/10' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(110,231,183,0.03)_0%,transparent_70%)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="section-header mb-16"
        >
          <span className="section-label">Skills</span>
          <h2 className="section-title">Technical expertise.</h2>
          <p className="section-desc">A curated stack spanning the full development lifecycle — from concept to production.</p>
        </motion.div>

        <div className="grid-3 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="card gradient-border h-full"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`p-3 rounded-xl bg-bg ${cat.accent} ${cat.bg} transition-transform duration-400 group-hover:scale-110`}>
                  <cat.icon size={20} strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-lg font-bold text-text mb-5 tracking-tight">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 text-sm font-medium text-text-muted bg-bg rounded-lg border border-border hover:border-border-light hover:text-text transition-all duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
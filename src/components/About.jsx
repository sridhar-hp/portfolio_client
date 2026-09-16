import { motion } from 'framer-motion'
import { User, Target, Code2, BookOpen } from 'lucide-react'

const cards = [
  {
    icon: User,
    title: 'Who I Am',
    content:
      'A developer driven by curiosity and craft. I thrive at the intersection of design and engineering, building products that are as beautiful as they are functional.',
    accent: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: Target,
    title: 'Career Goal',
    content:
      'To engineer AI-powered products that solve real problems at scale. I aim to join a forward-thinking team where I can contribute to meaningful, world-class software.',
    accent: 'text-accent-secondary',
    bg: 'bg-accent-secondary/10',
  },
  {
    icon: Code2,
    title: 'Development Philosophy',
    content:
      'Write less, build better. I believe in clean architecture, thoughtful abstractions, and delivering software that stands the test of time — not just compiles.',
    accent: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: BookOpen,
    title: 'Learning Journey',
    content:
      'I treat every project as a classroom. From deploying ML models to mastering system design, I continuously push beyond my comfort zone to grow as an engineer.',
    accent: 'text-accent-secondary',
    bg: 'bg-accent-secondary/10',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="section-header mb-16"
        >
          <span className="section-label">About</span>
          <h2 className="section-title">More than just code.</h2>
          <p className="section-desc">Every line I write serves a purpose. Here's what drives me as a builder and a human.</p>
        </motion.div>

        <div className="grid-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="card gradient-border group h-full flex flex-col"
            >
              <div className={`inline-flex p-3 rounded-xl bg-bg ${card.accent} ${card.bg} mb-5 transition-transform duration-400 group-hover:scale-110`}>
                <card.icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-text mb-3 tracking-tight">{card.title}</h3>
              <p className="text-text-muted leading-relaxed text-sm flex-1">{card.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
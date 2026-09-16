import { motion } from 'framer-motion'
import { Camera, Film, Lightbulb, Coffee, Headphones, Plane } from 'lucide-react'

const interests = [
  { title: 'Photography', desc: 'Composition, lighting, and timing converge to tell stories. Sharpens my eye for detail in UI design.', stat: 'Creative Eye', icon: Camera, accent: 'text-accent', bg: 'bg-accent/10' },
  { title: 'Cinema & Storytelling', desc: 'Narrative structure and pacing inform how I build user experiences. Every product tells a story.', stat: 'Narrative Thinker', icon: Film, accent: 'text-accent-secondary', bg: 'bg-accent-secondary/10' },
  { title: 'Continuous Learning', desc: 'Exploring new frameworks, research papers, and industry trends to stay ahead of the curve.', stat: 'Always Growing', icon: Lightbulb, accent: 'text-accent', bg: 'bg-accent/10' },
  { title: 'Coffee Culture', desc: 'Specialty coffee as a ritual — precision, consistency, and appreciation for craft.', stat: 'Precision', icon: Coffee, accent: 'text-accent-secondary', bg: 'bg-accent-secondary/10' },
  { title: 'Sound Design', desc: 'Audio engineering and music production — frequency, dynamics, and spatial awareness.', stat: 'Attention to Detail', icon: Headphones, accent: 'text-accent', bg: 'bg-accent/10' },
  { title: 'Travel & Perspective', desc: 'New environments challenge assumptions and inspire fresh approaches to problem-solving.', stat: 'Global Mindset', icon: Plane, accent: 'text-accent-secondary', bg: 'bg-accent-secondary/10' },
]

export default function BeyondCode() {
  return (
    <section className="py-24 lg:py-32 bg-[radial-gradient(ellipse_60%_60%_at_100%_0%,rgba(125,211,252,0.03)_0%,transparent_70%)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="section-header mb-16"
        >
          <span className="section-label">Beyond The Code</span>
          <h2 className="section-title">What shapes me.</h2>
          <p className="section-desc">The things I do outside of code that make me a better builder.</p>
        </motion.div>

        <div className="grid-3 lg:grid-cols-3">
          {interests.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="card gradient-border group h-full flex flex-col"
            >
              <div className={`inline-flex p-3 rounded-xl bg-bg ${item.accent} ${item.bg} mb-5 transition-transform duration-400 group-hover:scale-110`}>
                <item.icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-text mb-3 tracking-tight">{item.title}</h3>
              <p className="text-text-muted leading-relaxed text-sm flex-1 mb-5">{item.desc}</p>
              <div className="pt-4 border-t border-border">
                <span className="text-xs font-mono text-accent tracking-wider uppercase font-semibold">{item.stat}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Award, Trophy, GraduationCap, Star, Zap, TrendingUp } from 'lucide-react'

const achievements = [
  { year: '2025', title: 'AI Integration Mastery', desc: 'Advanced specialization in production-grade AI systems with RAG pipelines and LLM orchestration.', icon: Zap, accent: 'text-accent', bg: 'bg-accent/10' },
  { year: '2025', title: 'Open Source Contributor', desc: 'Active contributor to AI and full-stack projects with merged PRs in popular repositories.', icon: Star, accent: 'text-accent-secondary', bg: 'bg-accent-secondary/10' },
  { year: '2024', title: 'Full-Stack Certification', desc: 'Professional certification covering React, Node.js, databases, and cloud deployment.', icon: GraduationCap, accent: 'text-accent', bg: 'bg-accent/10' },
  { year: '2024', title: 'Hackathon Winner (1st Place)', desc: 'Built an AI-powered mental health companion app in 48 hours at university hackathon.', icon: Trophy, accent: 'text-accent-secondary', bg: 'bg-accent-secondary/10' },
  { year: '2023', title: 'First Production Deployment', desc: 'Deployed and scaled first full-stack application serving 500+ active users.', icon: Award, accent: 'text-accent', bg: 'bg-accent/10' },
  { year: '2023', title: 'Technical Mentorship', desc: 'Mentored 20+ junior developers through code reviews and architecture guidance.', icon: TrendingUp, accent: 'text-accent-secondary', bg: 'bg-accent-secondary/10' },
]

export default function Achievements() {
  const timelineRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ['start 75%', 'end 55%'] })
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="achievements" className="py-24 lg:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="section-header mb-16"
        >
          <span className="section-label">Achievements</span>
          <h2 className="section-title">Milestones & recognition.</h2>
          <p className="section-desc">Key moments that define my journey as a developer.</p>
        </motion.div>

        <div ref={timelineRef} className="relative">
          <div className="absolute left-5 lg:left-1/2 lg:-translate-x-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-border to-transparent" />
          <motion.div style={{ scaleY: progressScale }} className="timeline-progress absolute left-5 lg:left-1/2 lg:-translate-x-[1px] top-0 bottom-0 w-[2px] origin-top bg-gradient-to-b from-accent via-accent-secondary to-transparent" />

          <div className="space-y-10 lg:space-y-12">
            {achievements.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex gap-6 ${i % 2 === 0 ? '' : 'flex-row-reverse'}`}
              >
                <div className="hidden lg:block lg:w-1/2 lg:flex lg:items-center lg:justify-end lg:pr-10" />
                <div className="hidden lg:block lg:w-1/2 lg:flex lg:items-center lg:pl-10" />

                <div className="absolute left-5 lg:left-1/2 -translate-x-1/2 w-10 h-10 -translate-y-1/2 rounded-full bg-bg border-2 border-border flex items-center justify-center z-10">
                  <div className={`w-3 h-3 rounded-full ${item.accent.replace('text-', 'bg-')}`} />
                </div>

                <motion.div
                  whileHover={{ x: i % 2 === 0 ? 4 : -4, transition: { duration: 0.25 } }}
                  className={`w-full lg:w-1/2 p-6 rounded-2xl bg-surface border border-border gradient-border card group ${i % 2 === 0 ? '' : ''}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2.5 rounded-xl bg-bg ${item.accent} ${item.bg} transition-transform duration-400 group-hover:scale-110`}>
                      <item.icon size={16} strokeWidth={1.5} />
                    </div>
                    <span className="text-xs font-mono text-accent tracking-wider">{item.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-text mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
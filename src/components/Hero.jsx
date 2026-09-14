import { motion } from 'framer-motion'
import { ArrowRight, Mail, Download, Code2, Terminal, Zap, Database, Award, Users } from 'lucide-react'

const floatingCards = [
  {
    icon: Zap,
    label: 'AI Systems',
    value: 'Production',
    delay: 0.2,
    position: { top: '12%', right: '-14%' },
    accent: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: Database,
    label: 'Databases',
    value: 'Scalable',
    delay: 0.4,
    position: { bottom: '28%', right: '-16%' },
    accent: 'text-accent-secondary',
    bg: 'bg-accent-secondary/10',
  },
  {
    icon: Award,
    label: 'Experience',
    value: '3+ Years',
    delay: 0.6,
    position: { bottom: '8%', left: '-14%' },
    accent: 'text-accent',
    bg: 'bg-accent/10',
  },
]

const techPills = ['React', 'Node.js', 'TypeScript', 'AI/ML', 'PostgreSQL', 'Docker']

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-18 lg:pt-20">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(110,231,183,0.06)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_100%_100%,rgba(125,211,252,0.04)_0%,transparent_70%)]" />

      <div className="container relative py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-mono text-accent mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-accent opacity-60 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Open to opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.02em] leading-[1.02] mb-6"
            >
              <span className="text-text">I build</span>
              <br />
              <span className="text-gradient">intelligent</span>
              <br />
              <span className="text-text">software</span>
              <br />
              <span className="text-text-muted/60">that matters.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="text-lg lg:text-xl text-text-muted max-w-xl mb-10 leading-relaxed"
            >
              AI Full-Stack Developer crafting end-to-end products that merge
              cutting-edge AI with elegant, production-grade engineering.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(110,231,183,0.2)' }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-accent text-bg font-bold rounded-xl transition-all duration-300"
              >
                View Projects
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 glass text-text font-bold rounded-xl transition-all duration-300 hover:border-white/10"
              >
                <Mail size={17} />
                Contact Me
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 glass text-text-muted font-bold rounded-xl transition-all duration-300 hover:text-text hover:border-white/10"
              >
                <Download size={17} />
                Resume
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="flex flex-wrap gap-2.5"
            >
              {techPills.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.55 + i * 0.05, duration: 0.3 }}
                  className="px-3 py-1.5 text-xs font-mono text-text-muted/60 border border-border rounded-lg hover:border-accent/20 hover:text-accent transition-all duration-300 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Profile Image + Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Profile Image Container */}
            <div className="relative aspect-[4/5] max-w-lg mx-auto">
              {/* Glow rings */}
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.05, 0.15] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-3xl border-2 border-accent/30 blur-xl"
              />
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.03, 0.1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute inset-0 rounded-3xl border-2 border-accent-secondary/20 blur-xl"
              />

              {/* Image placeholder with gradient */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-surface via-surface-light to-surface">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(110,231,183,0.05)_0%,transparent_50%),linear-gradient(225deg,rgba(125,211,252,0.05)_0%,transparent_50%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="text-border-light/30"
                  >
                    <Code2 size={80} />
                    <Terminal size={80} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50" />
                  </motion.div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-6 left-6 w-20 h-20 border-t-2 border-l-2 border-accent/30 rounded-tl-2xl" />
                <div className="absolute bottom-6 right-6 w-20 h-20 border-b-2 border-r-2 border-accent-secondary/30 rounded-br-2xl" />
              </div>

              {/* Floating info cards */}
              {floatingCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  style={card.position}
                  initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.6 + card.delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.25 } }}
                  className="absolute glass p-4 lg:p-5 rounded-2xl border border-border min-w-[180px] shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl ${card.bg} ${card.accent}`}>
                      <card.icon size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-text-muted uppercase tracking-wider">{card.label}</p>
                      <p className="text-sm font-bold text-text">{card.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Pulse rings at bottom */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
                    className="w-2 h-2 rounded-full bg-accent"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2.5"
      >
        <span className="text-[10px] font-mono text-text-muted/40 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-border-light flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-accent/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
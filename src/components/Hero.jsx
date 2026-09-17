import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Check, Download } from 'lucide-react'
import { MagneticButton, useCountUp } from './MotionEffects'

const techPills = ['React', 'Node.js', 'TypeScript', 'AI / ML', 'PostgreSQL']
const orbitTech = [
  { label: 'React', mark: 'R', className: 'hero-tech-react' },
  { label: 'Node.js', mark: 'JS', className: 'hero-tech-node' },
  { label: 'MongoDB', mark: 'DB', className: 'hero-tech-mongo' },
  { label: 'GitHub', mark: 'GH', className: 'hero-tech-github' },
  { label: 'Express.js', mark: 'EX', className: 'hero-tech-express' },
]

const codeSnippets = ['const app = express()', 'useState()', 'mongoose.connect()']
const heatmap = Array.from({ length: 48 }, (_, index) => (index * 7 + 3) % 5)

const contentVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const { scrollY } = useScroll()
  const imageY = useTransform(scrollY, [0, 700], [0, 70])
  const projectsShipped = useCountUp(5)
  const certifications = useCountUp(3)
  const reduceMotion = useReducedMotion()
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const smoothX = useSpring(pointerX, { stiffness: 120, damping: 22, mass: 0.35 })
  const smoothY = useSpring(pointerY, { stiffness: 120, damping: 22, mass: 0.35 })
  const visualX = useTransform(smoothX, [-1, 1], [-12, 12])
  const visualY = useTransform(smoothY, [-1, 1], [-10, 10])
  const rotateX = useTransform(smoothY, [-1, 1], [4, -4])
  const rotateY = useTransform(smoothX, [-1, 1], [-5, 5])

  const handleVisualPointerMove = (event) => {
    if (reduceMotion) return
    const bounds = event.currentTarget.getBoundingClientRect()
    pointerX.set((event.clientX - bounds.left) / bounds.width * 2 - 1)
    pointerY.set((event.clientY - bounds.top) / bounds.height * 2 - 1)
  }

  const resetVisualPointer = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <section className="hero-section relative overflow-hidden pt-24 lg:pt-28">
      <div className="container relative grid min-h-[calc(100vh-5rem)] items-center gap-14 py-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:py-20">
        <motion.div variants={contentVariants} initial="hidden" animate="visible" className="relative z-10 max-w-2xl">
          <motion.div variants={itemVariants} className="mb-7 inline-flex items-center gap-2 border border-border bg-surface/70 px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Open to opportunities
          </motion.div>
          <motion.p variants={itemVariants} className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-text-muted">AI + Full-Stack Developer</motion.p>
          <motion.h1 variants={itemVariants} className="max-w-3xl text-5xl font-bold leading-[0.98] tracking-[-0.055em] text-text sm:text-6xl lg:text-[5.5rem]">
            Turning ideas into <span className="text-gradient">real products.</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="mt-7 max-w-xl text-base leading-7 text-text-muted sm:text-lg">
            I build intelligent, dependable software for teams that care about clarity, speed, and the details users feel.
          </motion.p>
          <motion.div variants={itemVariants} className="mt-9 flex flex-wrap gap-3">
            <MagneticButton href="#projects" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }} className="group inline-flex items-center gap-2 bg-accent px-5 py-3 text-sm font-bold text-bg transition-transform">
              View selected work <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </MagneticButton>
            <motion.a href="#" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center gap-2 border border-border bg-surface px-5 py-3 text-sm font-semibold text-text transition-transform hover:border-border-light">
              <Download size={16} /> Download resume
            </motion.a>
          </motion.div>
          <motion.div variants={itemVariants} className="mt-12 grid max-w-lg grid-cols-3 border-y border-border py-4">
            <div><strong className="block text-xl text-text">{String(projectsShipped).padStart(2, '0')}+</strong><span className="text-xs text-text-muted">Projects shipped</span></div>
            <div><strong className="block text-xl text-text">{String(certifications).padStart(2, '0')}</strong><span className="text-xs text-text-muted">Certifications</span></div>
            <div><strong className="block text-xl text-text">∞</strong><span className="text-xs text-text-muted">Always learning</span></div>
          </motion.div>
          <motion.div variants={itemVariants} className="mt-6 flex flex-wrap gap-2">
            {techPills.map((tech) => <span key={tech} className="border border-border px-2.5 py-1.5 font-mono text-[0.68rem] text-text-muted">{tech}</span>)}
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 34 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.28, duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto w-full max-w-136 lg:mr-0">
          <motion.div style={{ y: imageY }} className="relative aspect-[0.92] overflow-visible border border-border bg-surface p-3 sm:p-5">
            <motion.div
              className="hero-workspace relative flex h-full items-center justify-center overflow-hidden border border-border-light bg-bg"
              onPointerMove={handleVisualPointerMove}
              onPointerLeave={resetVisualPointer}
              style={{ x: visualX, y: visualY, rotateX, rotateY, transformPerspective: 900 }}
            >
              <div className="hero-workspace-grid" />
              <motion.div className="hero-ai-core" animate={reduceMotion ? undefined : { scale: [1, 1.04, 1] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
                <span className="hero-core-halo" />
                <span className="hero-core-ring hero-core-ring-one" />
                <span className="hero-core-ring hero-core-ring-two" />
                <span className="hero-core-label">AI<br /><small>CORE</small></span>
              </motion.div>

              <motion.div className="hero-orbit hero-orbit-one" animate={reduceMotion ? undefined : { rotate: 360 }} transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}>
                {orbitTech.slice(0, 3).map((tech) => <TechNode key={tech.label} tech={tech} />)}
              </motion.div>
              <motion.div className="hero-orbit hero-orbit-two" animate={reduceMotion ? undefined : { rotate: -360 }} transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}>
                {orbitTech.slice(3).map((tech) => <TechNode key={tech.label} tech={tech} />)}
              </motion.div>

              <div className="hero-code hero-code-one"><code>{codeSnippets[0]}</code></div>
              <div className="hero-code hero-code-two"><code>{codeSnippets[1]}</code></div>
              <div className="hero-code hero-code-three"><code>{codeSnippets[2]}</code></div>
              <div className="hero-heatmap" aria-label="GitHub contribution activity">
                <span className="hero-heatmap-label">GITHUB / ACTIVITY</span>
                <div className="hero-heatmap-grid">{heatmap.map((level, index) => <i key={index} className={`heat-${level}`} />)}</div>
              </div>
              {!reduceMotion && Array.from({ length: 8 }, (_, index) => (
                <motion.span
                  key={index}
                  className="hero-particle"
                  style={{ '--particle-index': index }}
                  animate={{ y: [0, index % 2 ? -12 : 10, 0], opacity: [0.25, 0.75, 0.25] }}
                  transition={{ duration: 4 + index * 0.45, delay: index * 0.18, repeat: Infinity, ease: 'easeInOut' }}
                />
              ))}
              <div className="absolute left-5 top-5 h-10 w-10 border-l border-t border-accent/60" />
              <div className="absolute bottom-5 right-5 h-10 w-10 border-b border-r border-accent-secondary/50" />
            </motion.div>
          </motion.div>
          <motion.div className="hero-identity-card hero-identity-one" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.72, duration: 0.5 }}>AI Full Stack Developer</motion.div>
          <motion.div className="hero-identity-card hero-identity-two" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.84, duration: 0.5 }}>Building Real Products</motion.div>
          <motion.div className="hero-identity-card hero-identity-three" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.96, duration: 0.5 }}><Check size={14} /> Open To Opportunities</motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function TechNode({ tech }) {
  return <div className={`hero-tech-node ${tech.className}`}><span>{tech.mark}</span><small>{tech.label}</small></div>
}

import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { MagneticButton, useCountUp } from './MotionEffects'

const techPills = ['React', 'Node.js', 'TypeScript', 'AI / ML', 'PostgreSQL']
const codeLines = ['const app = express()', 'app.listen(3000)', 'const data = await db.find()']
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
          <motion.div style={{ y: imageY }} className="relative aspect-[0.92] overflow-visible">
            <motion.div
              className="hero-workspace relative flex h-full items-center justify-center"
              onPointerMove={handleVisualPointerMove}
              onPointerLeave={resetVisualPointer}
              style={{ x: visualX, y: visualY, rotateX, rotateY, transformPerspective: 900 }}
            >
              <motion.div className="hero-scene" animate={reduceMotion ? undefined : { y: [0, -4, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}>
                <div className="hero-monitor-glow" />
                <div className="hero-monitor">
                  <div className="hero-monitor-topbar"><span /><span /><span /><small>workspace / api-server.js</small></div>
                  <div className="hero-code-editor"><div className="hero-code-gutter">01<br />02<br />03<br />04<br />05</div><div className="hero-code-lines">{codeLines.map((line, index) => <motion.code key={line} initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: '100%' }} transition={{ delay: 1 + index * .35, duration: .7 }}><em>{index + 1}</em>{line}<i className={index === 2 ? 'hero-cursor' : ''} /></motion.code>)}</div></div>
                  <div className="hero-monitor-status"><span className="hero-status-dot" /> API online <span>main / 99.9%</span></div>
                </div>
                <div className="hero-monitor-stand" />
                <div className="hero-desk"><div className="hero-keyboard"><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /></div><div className="hero-mouse" /><div className="hero-mug" /><div className="hero-plant"><i /><i /><i /></div></div>
                <div className="hero-cpu"><span /><span /><span /></div>
                <div className="hero-developer"><div className="hero-developer-head"><span className="hero-developer-hair" /></div><div className="hero-developer-body"><span className="hero-developer-arm" /><span className="hero-developer-arm hero-developer-arm-two" /></div><div className="hero-developer-chair" /></div>
              </motion.div>
              <div className="hero-connection hero-connection-react" /><div className="hero-connection hero-connection-node" /><div className="hero-connection hero-connection-mongo" /><div className="hero-connection hero-connection-github" /><div className="hero-connection hero-connection-typescript" />
              <WorkspacePanel className="hero-panel-github" title="GitHub activity"><div className="hero-panel-metric">+24 <small>commits this week</small></div><div className="hero-heatmap-grid">{heatmap.map((level, index) => <i key={index} className={`heat-${level}`} />)}</div></WorkspacePanel>
              <WorkspacePanel className="hero-panel-react" title="React.js"><span className="hero-panel-symbol">R</span><small>components / state</small></WorkspacePanel>
              <WorkspacePanel className="hero-panel-node" title="Node.js"><span className="hero-panel-pulse" /><small>api / express</small></WorkspacePanel>
              <WorkspacePanel className="hero-panel-mongo" title="MongoDB"><span className="hero-panel-database">DB</span><small>user_profiles</small></WorkspacePanel>
              <WorkspacePanel className="hero-panel-typescript" title="TypeScript"><span className="hero-panel-symbol">TS</span><small>typed interfaces</small></WorkspacePanel>
              <div className="hero-build-note">BUILD<br />LEARN<br />IMPROVE<br />REPEAT</div>
              {!reduceMotion && Array.from({ length: 8 }, (_, index) => (
                <motion.span
                  key={index}
                  className="hero-particle"
                  style={{ '--particle-index': index }}
                  animate={{ y: [0, index % 2 ? -12 : 10, 0], opacity: [0.25, 0.75, 0.25] }}
                  transition={{ duration: 4 + index * 0.45, delay: index * 0.18, repeat: Infinity, ease: 'easeInOut' }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function WorkspacePanel({ className, title, children }) {
  return <motion.div className={`hero-workspace-panel ${className}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .8, duration: .55 }}>{title && <span className="hero-panel-title">{title}</span>}{children}</motion.div>
}

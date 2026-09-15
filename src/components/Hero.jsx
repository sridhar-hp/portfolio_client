import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Check, Download, MapPin, Sparkles } from 'lucide-react'
import heroMark from '../assets/hero.png'

const floatingCards = [
  { label: 'Current focus', value: 'AI product systems', icon: Sparkles, className: 'hero-card-top' },
  { label: 'Based in', value: 'Chennai, India', icon: MapPin, className: 'hero-card-side' },
  { label: 'Available for', value: 'Full-time roles', icon: Check, className: 'hero-card-bottom' },
]

const techPills = ['React', 'Node.js', 'TypeScript', 'AI / ML', 'PostgreSQL']

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
            <motion.a href="#projects" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }} className="group inline-flex items-center gap-2 bg-accent px-5 py-3 text-sm font-bold text-bg transition-transform">
              View selected work <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a href="#" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center gap-2 border border-border bg-surface px-5 py-3 text-sm font-semibold text-text transition-transform hover:border-border-light">
              <Download size={16} /> Download resume
            </motion.a>
          </motion.div>
          <motion.div variants={itemVariants} className="mt-12 grid max-w-lg grid-cols-3 border-y border-border py-4">
            <div><strong className="block text-xl text-text">05+</strong><span className="text-xs text-text-muted">Projects shipped</span></div>
            <div><strong className="block text-xl text-text">03</strong><span className="text-xs text-text-muted">Certifications</span></div>
            <div><strong className="block text-xl text-text">∞</strong><span className="text-xs text-text-muted">Always learning</span></div>
          </motion.div>
          <motion.div variants={itemVariants} className="mt-6 flex flex-wrap gap-2">
            {techPills.map((tech) => <span key={tech} className="border border-border px-2.5 py-1.5 font-mono text-[0.68rem] text-text-muted">{tech}</span>)}
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 34 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.28, duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto w-full max-w-136 lg:mr-0">
          <motion.div style={{ y: imageY }} className="relative aspect-[0.92] overflow-visible border border-border bg-surface p-3 sm:p-5">
            <div className="relative flex h-full items-center justify-center overflow-hidden border border-border-light bg-bg">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(110,231,183,0.08),transparent_35%,rgba(125,211,252,0.04))]" />
              <img src={heroMark} alt="Sridhar profile mark" className="relative z-10 w-[58%] max-w-[18rem] object-contain opacity-90" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between border-t border-border pt-4">
                <div><p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-accent">Sridhar</p><p className="mt-1 text-sm text-text-muted">Building for what is next</p></div>
                <span className="font-mono text-xs text-text-muted">01 / 04</span>
              </div>
              <div className="absolute left-5 top-5 h-10 w-10 border-l border-t border-accent/60" />
              <div className="absolute bottom-5 right-5 h-10 w-10 border-b border-r border-accent-secondary/50" />
            </div>
          </motion.div>
          {floatingCards.map((card, index) => (
            <motion.div key={card.label} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.72 + index * 0.12, duration: 0.5 }} whileHover={{ y: -6 }} className={`hero-floating-card absolute z-20 border border-border bg-surface/95 p-3 shadow-2xl backdrop-blur-md ${card.className}`}>
              <div className="flex items-center gap-3"><card.icon size={17} className="text-accent" strokeWidth={1.7} /><div><p className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-text-muted">{card.label}</p><p className="mt-0.5 text-sm font-semibold text-text">{card.value}</p></div></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

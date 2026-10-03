import { motion } from 'framer-motion'
import { Mail, MapPin, FileText, ArrowUpRight, Download } from 'lucide-react'
import { LinkedinIcon, GithubIcon } from './icons'

const contactCards = [
  {
    id: 'email',
    icon: Mail,
    title: 'Email Me',
    value: 'sridhark3773@gmail.com',
    href: 'mailto:sridhark3773@gmail.com',
    external: false,
    accent: 'text-cyan-400',
    bg: 'bg-cyan-500/10 border-cyan-500/20',
    hoverGlow: 'hover:shadow-[0_0_30px_rgba(0,242,254,0.15)] hover:border-cyan-500/40',
  },
  {
    id: 'linkedin',
    icon: LinkedinIcon,
    title: 'LinkedIn',
    value: 'linkedin.com/in/sridhark3773',
    href: 'https://www.linkedin.com/in/sridhark3773',
    external: true,
    accent: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
    hoverGlow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-blue-500/40',
  },
  {
    id: 'github',
    icon: GithubIcon,
    title: 'GitHub',
    value: 'github.com/sridhar-hp',
    href: 'https://github.com/sridhar-hp',
    external: true,
    accent: 'text-slate-200',
    bg: 'bg-white/10 border-white/20',
    hoverGlow: 'hover:shadow-[0_0_30px_rgba(255,255,255,0.12)] hover:border-white/40',
  },
  {
    id: 'location',
    icon: MapPin,
    title: 'Location',
    value: 'Trichy, Tamil Nadu, India',
    href: null,
    external: false,
    accent: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
    hoverGlow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:border-emerald-500/40',
  },
  {
    id: 'resume',
    icon: FileText,
    title: 'Resume',
    value: 'Download Resume',
    href: '/resume.pdf',
    download: 'Sridhar_Resume.pdf',
    external: false,
    accent: 'text-teal-300',
    bg: 'bg-teal-500/10 border-teal-500/20',
    hoverGlow: 'hover:shadow-[0_0_30px_rgba(20,184,166,0.15)] hover:border-teal-500/40',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Contact() {
  return (
    <section id="contact" className="contact-section relative overflow-hidden py-24 lg:py-32">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[30rem] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center max-w-6xl mx-auto"
        >
          {/* LEFT COLUMN: Content & CTA Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400 shadow-[0_0_8px_#00f2fe]" />
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-cyan-300 font-semibold">
                Get In Touch
              </span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl leading-[1.1]">
              Let&apos;s Build Something{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,242,254,0.3)]">
                Together
              </span>
            </motion.h2>

            <motion.p variants={itemVariants} className="mt-5 text-base leading-relaxed text-text-muted sm:text-lg">
              I&apos;m currently open to internships, full-stack developer opportunities, AI-focused projects, and collaborative software development work.
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-4 items-center">
              <motion.a
                href="mailto:sridhark3773@gmail.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_25px_rgba(0,242,254,0.35)] transition-all hover:shadow-[0_0_35px_rgba(0,242,254,0.55)]"
              >
                <Mail size={18} />
                <span>Email Me</span>
              </motion.a>

              <motion.a
                href="/resume.pdf"
                download="Sridhar_Resume.pdf"
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-text backdrop-blur-md transition-all hover:border-cyan-500/40 hover:text-cyan-300"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Professional Glassmorphism Contact Cards */}
          <div className="lg:col-span-7 space-y-3.5">
            {contactCards.map((card) => {
              const IconComponent = card.icon
              const isLink = !!card.href

              const CardWrapper = isLink ? motion.a : motion.div

              return (
                <CardWrapper
                  key={card.id}
                  href={card.href || undefined}
                  download={card.download || undefined}
                  target={card.external ? '_blank' : undefined}
                  rel={card.external ? 'noopener noreferrer' : undefined}
                  variants={itemVariants}
                  whileHover={{ y: -3, scale: 1.008 }}
                  transition={{ duration: 0.25 }}
                  className={`group relative flex items-center justify-between p-4.5 sm:p-5 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl transition-all duration-300 ${card.hoverGlow} ${isLink ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center border shrink-0 transition-transform duration-300 group-hover:scale-110 ${card.bg} ${card.accent}`}>
                      <IconComponent size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-mono text-text-muted uppercase tracking-wider mb-0.5">
                        {card.title}
                      </div>
                      <div className="text-sm sm:text-base font-semibold text-text truncate group-hover:text-cyan-300 transition-colors">
                        {card.value}
                      </div>
                    </div>
                  </div>

                  {isLink && (
                    <div className="ml-3 shrink-0 text-text-muted group-hover:text-cyan-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      {card.download ? <Download size={18} /> : <ArrowUpRight size={18} />}
                    </div>
                  )}
                </CardWrapper>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
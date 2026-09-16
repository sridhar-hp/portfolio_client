import { motion } from 'framer-motion'
import { Mail, FileText, ArrowUpRight, Send } from 'lucide-react'
import { LinkedinIcon, GithubIcon } from './icons'

const contactLinks = [
  { icon: Mail, label: 'Email', value: 'sridhar@example.com', href: 'mailto:sridhar@example.com', primary: true, accent: 'text-accent', bg: 'bg-accent/10' },
  { icon: LinkedinIcon, label: 'LinkedIn', value: 'linkedin.com/in/sridhar', href: '#', primary: false, accent: 'text-blue-400', bg: 'bg-blue-500/10' },
  { icon: GithubIcon, label: 'GitHub', value: 'github.com/sridhar', href: '#', primary: false, accent: 'text-text', bg: 'bg-white/5' },
  { icon: Send, label: 'WhatsApp', value: 'Send a message', href: '#', primary: false, accent: 'text-green-400', bg: 'bg-green-500/10' },
  { icon: FileText, label: 'Resume', value: 'Download PDF', href: '#', primary: false, accent: 'text-text-muted', bg: 'bg-white/5' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="section-header text-center mx-auto max-w-3xl mb-16"
        >
          <span className="section-label">Contact</span>
          <h2 className="section-title">
            Let&apos;s build something{' '}
            <span className="text-gradient">great together.</span>
          </h2>
          <p className="section-desc">I&apos;m open to discussing new projects, creative ideas, or opportunities to be part of something exceptional.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto"
        >
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 + i * 0.05, duration: 0.45 }}
              whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.25 } }}
              className={`group relative p-6 rounded-2xl border transition-all duration-400 text-left gradient-border card ${
                link.primary ? 'sm:col-span-2 lg:col-span-3' : ''
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl transition-all duration-300 group-hover:scale-110 ${link.bg} ${link.accent}`}>
                  <link.icon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-mono text-text-muted uppercase tracking-widest mb-1">{link.label}</div>
                  <div className={`text-sm font-semibold truncate ${link.primary ? 'text-accent' : 'text-text'}`}>{link.value}</div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-border-light group-hover:text-text-muted transition-all duration-300 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
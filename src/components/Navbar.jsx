import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { document.body.style.overflow = mobileOpen ? 'hidden' : '' }, [mobileOpen])

  useEffect(() => {
    const sections = navLinks.map(({ href }) => document.querySelector(href)).filter(Boolean)
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActiveSection(`#${visible.target.id}`)
    }, { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.2, 0.5, 1] })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass shadow-[0_1px_0_rgba(255,255,255,0.04)]' : 'bg-transparent'
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-18 lg:h-20">
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative z-10 text-xl font-bold tracking-tight"
            >
              <span className="text-gradient">Sridhar</span>
              <span className="text-accent">.</span>
            </motion.a>

            <div className="hidden md:flex items-center gap-8 relative z-10">
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ y: -1 }}
                  className={`group relative px-4 py-2.5 text-sm font-medium transition-colors duration-300 rounded-lg ${activeSection === link.href ? 'text-text' : 'text-text-muted hover:text-text'}`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-accent transition-all duration-300 ${activeSection === link.href ? 'w-3/4' : 'w-0 group-hover:w-3/4'}`} />
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(110,231,183,0.2)' }}
                whileTap={{ scale: 0.98 }}
                className="ml-3 px-6 py-2.5 text-sm font-semibold text-bg bg-accent rounded-lg transition-all duration-300"
              >
                Hire Me
              </motion.a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-text-muted hover:text-text transition-colors relative z-10"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg/98 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.35 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-3xl font-semibold text-text-muted hover:text-accent transition-colors py-4"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.35 }}
                onClick={() => setMobileOpen(false)}
                className="mt-6 px-8 py-3 bg-accent text-bg font-semibold rounded-xl text-lg"
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
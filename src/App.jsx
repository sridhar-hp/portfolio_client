import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import BeyondCode from './components/BeyondCode'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { AmbientBackground, CursorGlow, usePointerGlow, useSectionObserver } from './components/MotionEffects'

export default function App() {
  useSectionObserver()
  usePointerGlow()

  return (
    <div className="min-h-screen bg-bg relative">
      <AmbientBackground />
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <BeyondCode />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

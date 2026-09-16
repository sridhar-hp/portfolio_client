/* eslint-disable react-refresh/only-export-components */
import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export function useSectionObserver() {
  useEffect(() => {
    const elements = document.querySelectorAll('section, .card')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible')
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])
}

export function usePointerGlow() {
  useEffect(() => {
    const root = document.documentElement
    let frame = 0
    let x = 0
    let y = 0

    const onPointerMove = (event) => {
      x = event.clientX
      y = event.clientY
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        root.style.setProperty('--pointer-x', `${x}px`)
        root.style.setProperty('--pointer-y', `${y}px`)
      })
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      cancelAnimationFrame(frame)
    }
  }, [])
}

export function useCountUp(target, duration = 900) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const start = performance.now()
    let frame = 0
    const update = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      setValue(Math.round(target * (1 - Math.pow(1 - progress, 3))))
      if (progress < 1) frame = requestAnimationFrame(update)
    }
    frame = requestAnimationFrame(update)
    return () => cancelAnimationFrame(frame)
  }, [duration, target])

  return value
}

export function useTilt() {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const element = ref.current
    if (!element || reduceMotion) return undefined

    let frame = 0
    const onMove = (event) => {
      const rect = element.getBoundingClientRect()
      const rotateX = ((event.clientY - rect.top) / rect.height - 0.5) * -5
      const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 5
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        element.style.setProperty('--tilt-x', `${rotateX}deg`)
        element.style.setProperty('--tilt-y', `${rotateY}deg`)
        element.classList.add('is-tilting')
      })
    }
    const onLeave = () => {
      cancelAnimationFrame(frame)
      element.style.setProperty('--tilt-x', '0deg')
      element.style.setProperty('--tilt-y', '0deg')
      element.classList.remove('is-tilting')
    }

    element.addEventListener('pointermove', onMove, { passive: true })
    element.addEventListener('pointerleave', onLeave)
    return () => {
      element.removeEventListener('pointermove', onMove)
      element.removeEventListener('pointerleave', onLeave)
      cancelAnimationFrame(frame)
    }
  }, [reduceMotion])

  return ref
}

export function CursorGlow() {
  const reduceMotion = useReducedMotion()
  const [enabled] = useState(() => !reduceMotion && window.matchMedia('(hover: hover) and (pointer: fine)').matches)
  const ref = useRef(null)

  useEffect(() => {
    if (reduceMotion) return undefined
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!canHover) return undefined

    let frame = 0
    const onMove = (event) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`
        }
      })
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(frame)
    }
  }, [reduceMotion])

  if (!enabled) return null
  return <span ref={ref} aria-hidden="true" className="cursor-glow" />
}

export function AmbientBackground() {
  const reduceMotion = useReducedMotion()
  const particles = Array.from({ length: 12 }, (_, index) => index)

  return (
    <div aria-hidden="true" className="ambient-background">
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <div className="ambient-grid" />
      {!reduceMotion && particles.map((particle) => (
        <span key={particle} className="particle" style={{ '--particle-index': particle }} />
      ))}
    </div>
  )
}

export function MagneticButton({ children, className = '', ...props }) {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const element = ref.current
    if (!element || reduceMotion) return undefined
    let frame = 0
    const onMove = (event) => {
      const rect = element.getBoundingClientRect()
      const x = (event.clientX - rect.left - rect.width / 2) * 0.12
      const y = (event.clientY - rect.top - rect.height / 2) * 0.12
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => { element.style.transform = `translate3d(${x}px, ${y}px, 0)` })
    }
    const onLeave = () => {
      cancelAnimationFrame(frame)
      element.style.transform = ''
    }
    element.addEventListener('pointermove', onMove, { passive: true })
    element.addEventListener('pointerleave', onLeave)
    return () => {
      element.removeEventListener('pointermove', onMove)
      element.removeEventListener('pointerleave', onLeave)
      cancelAnimationFrame(frame)
    }
  }, [reduceMotion])

  return <motion.a ref={ref} className={className} {...props}>{children}</motion.a>
}

import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <span className="font-bold text-gradient">Sridhar</span>
            <span className="text-border-light">|</span>
            <span>AI Full-Stack Developer</span>
          </div>

          <div className="flex items-center gap-1.5 text-sm text-text-muted">
            <span>Built with</span>
            <Heart size={14} className="text-accent fill-accent" />
            <span>and modern technologies</span>
          </div>

          <div className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} Sridhar. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
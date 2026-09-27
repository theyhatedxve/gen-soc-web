import { useEffect, useMemo, useState } from 'react'
import { SECTIONS } from '../data/sections.js'
import { useActiveSection } from '../hooks/useActiveSection.js'
import SectionNavigator from './SectionNavigator.jsx'
import './Navbar.css'

const ACCENT_VARS = {
  gold: 'var(--color-gold)',
  burgundy: 'var(--color-burgundy)',
  charcoal: 'var(--color-charcoal)',
  dustyrose: 'var(--color-dustyrose)',
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [hoveredId, setHoveredId] = useState(null)

  const sectionIds = useMemo(() => SECTIONS.map((s) => s.id), [])
  const activeId = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const hoveredSection = SECTIONS.find((s) => s.id === hoveredId)
  const tintVar = hoveredSection ? ACCENT_VARS[hoveredSection.accent] : null

  return (
    <header
      className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
      style={tintVar ? { '--navbar-tint': tintVar } : undefined}
    >
      <div className="navbar__inner wrapper">
        <a className="navbar__brand" href="#home">
          Gender Roles
          <span className="navbar__brand-sub">Tradition to Contemporary PH</span>
        </a>

        <button
          className="navbar__toggle"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="visually-hidden">Toggle navigation</span>
          <span className={`navbar__toggle-bar ${isOpen ? 'is-open' : ''}`} />
        </button>

        <div className="navbar__desktop-nav">
          <SectionNavigator
            layout="desktop"
            activeId={activeId}
            hoveredId={hoveredId}
            onHover={setHoveredId}
            onLeave={() => setHoveredId(null)}
          />
        </div>

        <div
          id="primary-navigation"
          className={`navbar__mobile-nav ${isOpen ? 'is-open' : ''}`}
        >
          <SectionNavigator
            layout="mobile"
            activeId={activeId}
            hoveredId={hoveredId}
            onHover={setHoveredId}
            onLeave={() => setHoveredId(null)}
            onNavigate={() => setIsOpen(false)}
          />
        </div>
      </div>
    </header>
  )
}

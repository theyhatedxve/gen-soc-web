import { useEffect, useState } from 'react'
import { SECTIONS } from '../data/sections.js'
import './Navbar.css'

/**
 * Foundation-level navbar: fixed header, wordmark, and links to each
 * top-level section. The richer hover-driven "section navigator" described
 * in the plan (numbered cards, background swaps) is a Phase 2 concern —
 * this component only establishes structure, scroll behavior, and the
 * mobile toggle it will later be built on top of.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
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

        <nav
          id="primary-navigation"
          className={`navbar__nav ${isOpen ? 'is-open' : ''}`}
          aria-label="Section navigation"
        >
          <ul>
            {SECTIONS.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} onClick={() => setIsOpen(false)}>
                  <span className="navbar__index">{section.index}</span>
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

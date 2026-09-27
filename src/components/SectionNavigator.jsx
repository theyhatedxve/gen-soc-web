import { SECTIONS } from '../data/sections.js'
import './SectionNavigator.css'

const ACCENT_VARS = {
  gold: 'var(--color-gold)',
  burgundy: 'var(--color-burgundy)',
  charcoal: 'var(--color-charcoal)',
  dustyrose: 'var(--color-dustyrose)',
}

/**
 * Replaces a conventional link list with the "interactive section
 * navigator" described in the plan: on hover or keyboard focus, the
 * index number enlarges, the title takes the section's accent color, and
 * a one-line description appears. The navbar itself tints toward that
 * accent at low opacity — a color-based stand-in for the "background
 * image changes" behavior, until real imagery is added in a later phase.
 *
 * Used by Navbar in two layouts: an inline row on desktop, a stacked
 * full-screen list on mobile (where "hover" becomes tap/focus).
 */
export default function SectionNavigator({
  activeId,
  hoveredId,
  onHover,
  onLeave,
  onNavigate,
  layout = 'desktop',
}) {
  const current = SECTIONS.find((s) => s.id === hoveredId)

  return (
    <nav
      className={`navigator navigator--${layout}`}
      aria-label="Section navigation"
    >
      <ul className="navigator__list">
        {SECTIONS.map((section) => {
          const isHovered = hoveredId === section.id
          const isActive = activeId === section.id

          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`navigator__item ${isActive ? 'is-active' : ''}`}
                style={{ '--item-accent': ACCENT_VARS[section.accent] }}
                onMouseEnter={() => onHover(section.id)}
                onMouseLeave={onLeave}
                onFocus={() => onHover(section.id)}
                onBlur={onLeave}
                onClick={onNavigate}
                aria-current={isActive ? 'true' : undefined}
              >
                <span className={`navigator__index ${isHovered ? 'is-hovered' : ''}`}>
                  {section.index}
                </span>
                <span className="navigator__label">{section.label}</span>
              </a>
            </li>
          )
        })}
      </ul>

      <p className={`navigator__description ${current ? 'is-visible' : ''}`} aria-live="polite">
        {current ? current.description : ''}
      </p>
    </nav>
  )
}

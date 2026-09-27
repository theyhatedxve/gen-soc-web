import './Hero.css'

const PERIODS = [
  'Pre-colonial Philippines',
  'Spanish Colonial Period',
  'American Period',
  'Post-war Philippines',
]

/**
 * Full hero build: split composition (historical progression on one side,
 * "Contemporary Philippines" as the resolved endpoint on the other), a
 * page-load entrance animation, and the CTA that starts the scroll story.
 *
 * The connecting line and period markers are drawn in SVG rather than
 * historical photography — no imagery has been supplied yet (that lands
 * with real assets in Phase 4+), and a drawn line keeps the entrance
 * animation (plan section 22: "timeline line draws itself") meaningful
 * without standing in for content that isn't ready.
 */
export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="wrapper hero__inner">
        <div className="hero__intro">
          <p className="eyebrow hero__eyebrow">Gender Roles</p>
          <h1 className="hero__title">Tradition to Contemporary Philippines</h1>
          <p className="hero__sub">
            Understanding how gender roles develop, change, and influence our everyday lives.
          </p>
          <a className="hero__cta" href="#understanding">
            <span>Explore the story</span>
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
              <path d="M0 6H17M17 6L12 1M17 6L12 11" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </a>
        </div>

        <div className="hero__timeline" aria-hidden="true">
          <svg className="hero__timeline-svg" viewBox="0 0 200 420" preserveAspectRatio="none">
            <line x1="8" y1="10" x2="8" y2="410" className="hero__timeline-line" />
          </svg>

          <ul className="hero__timeline-list">
            {PERIODS.map((period, i) => (
              <li
                key={period}
                className="hero__timeline-node"
                style={{ '--stagger': i }}
              >
                <span className="hero__timeline-dot" />
                {period}
              </li>
            ))}
            <li className="hero__timeline-node hero__timeline-node--current" style={{ '--stagger': PERIODS.length }}>
              <span className="hero__timeline-dot hero__timeline-dot--current" />
              Contemporary Philippines
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

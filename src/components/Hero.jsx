import './Hero.css'

/**
 * Structural placeholder only. The split historical-to-modern composition,
 * entrance animation, and "Explore the story" interaction are built in
 * Phase 2 — this establishes the hero's position, height, and type scale
 * so the rest of the page can be laid out against it.
 */
export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="wrapper hero__inner">
        <p className="eyebrow">Gender Roles</p>
        <h1>Tradition to Contemporary Philippines</h1>
        <p className="hero__sub">
          Understanding how gender roles develop, change, and influence our everyday lives.
        </p>
      </div>
    </section>
  )
}

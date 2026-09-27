import { useInView } from '../hooks/useInView.js'
import './SectionShell.css'

/**
 * Structural wrapper shared by every section stub built in this phase.
 * Later phases replace each section's inner content; the id, spacing,
 * and eyebrow/heading pattern stay consistent so the page reads as one
 * system rather than assembled fragments.
 *
 * Also owns the page's one scroll transition: each section rises and
 * fades in as it enters the viewport, once, the first time — a single
 * consistent transition rather than per-element scatter, and skipped
 * entirely under prefers-reduced-motion (see useInView).
 */
export default function SectionShell({
  id,
  index,
  eyebrow,
  title,
  tone = 'default', // 'default' | 'inverse' | 'historical'
  children,
}) {
  const toneClass =
    tone === 'inverse' ? 'section--inverse' : tone === 'historical' ? 'section--historical' : ''
  const [ref, inView] = useInView()

  return (
    <section
      id={id}
      ref={ref}
      className={`section ${toneClass} section-shell ${inView ? 'is-visible' : ''}`}
    >
      <div className="wrapper">
        <p className="eyebrow section-shell__eyebrow">
          {index ? <span>{index}</span> : null}
          {eyebrow}
        </p>
        <h2 className="section-shell__title">{title}</h2>
        <div className="section-shell__body">{children}</div>
      </div>
    </section>
  )
}

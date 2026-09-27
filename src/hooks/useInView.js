import { useEffect, useRef, useState } from 'react'

/**
 * Returns a ref to attach and a boolean that flips to true once the element
 * has entered the viewport. Used for both the hero's mount animation and
 * the section reveal-on-scroll transition.
 *
 * If the visitor prefers reduced motion, `inView` starts true immediately
 * and no observer is attached — content renders in its final state with no
 * motion, rather than a stripped-down animation.
 */
export function useInView({ threshold = 0.2, rootMargin = '0px 0px -10% 0px' } = {}) {
  const ref = useRef(null)
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [inView, setInView] = useState(prefersReducedMotion)

  useEffect(() => {
    if (prefersReducedMotion || !ref.current) return

    const node = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(node)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [ref, inView]
}

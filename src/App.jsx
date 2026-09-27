import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import Understanding from './sections/Understanding.jsx'
import History from './sections/History.jsx'
import Contemporary from './sections/Contemporary.jsx'
import Issues from './sections/Issues.jsx'
import Data from './sections/Data.jsx'
import Multimedia from './sections/Multimedia.jsx'
import ReflectionSection from './sections/ReflectionSection.jsx'
import References from './sections/References.jsx'

/**
 * Page skeleton for Phase 1. Every section below the hero is a structural
 * stub (see src/sections/*) — this file exists so the full scroll order
 * from the plan is real and testable before any section gets its content
 * pass in later phases.
 */
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Understanding />
        <History />
        <Contemporary />
        <Issues />
        <Data />
        <Multimedia />
        <ReflectionSection />
        <References />
      </main>
      <Footer />
    </>
  )
}

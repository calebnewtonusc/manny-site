import type { Metadata } from 'next'
import GrainOverlay from '@/components/GrainOverlay'
import Hero from '@/components/Hero'
import PersonalityTicker from '@/components/PersonalityTicker'
import Gallery from '@/components/Gallery'
import BeachSection from '@/components/BeachSection'
import FactsSection from '@/components/FactsSection'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Emmanuel Nwalozie — Athlete. Poet. Trojan.',
  description:
    'Personal site for Emmanuel Nwalozie, USC Defensive End, Track & Field sprinter, Student Government member, poet, and cinephile based in Los Angeles, CA.',
}

export default function Home() {
  return (
    <main>
      <GrainOverlay />
      <Hero />
      <PersonalityTicker />
      <Gallery />
      <BeachSection />
      <FactsSection />
      <Footer />
    </main>
  )
}

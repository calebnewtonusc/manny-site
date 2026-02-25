import GrainOverlay from '@/components/GrainOverlay'
import Hero from '@/components/Hero'
import PersonalityTicker from '@/components/PersonalityTicker'
import Gallery from '@/components/Gallery'
import BeachSection from '@/components/BeachSection'
import FactsSection from '@/components/FactsSection'
import Footer from '@/components/Footer'

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

'use client'

import { LazyMotion, m, domAnimation } from 'framer-motion'
import GranimBg from '@/components/GranimBg'
import TypedHero from '@/components/TypedHero'

export default function Hero() {
  return (
    <LazyMotion features={domAnimation}>
      <section
        id="hero"
        aria-label="Introduction"
        className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-[#080808]"
      >
        {/* ── Granim gradient canvas ── */}
        <GranimBg />

        {/* ── Hero video — drop hero.mp4 into /public/videos/ to activate ── */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          aria-hidden="true"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* ── Warm ambient background (visible while no video loaded) ── */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 42%, #1e1408 0%, #0f0b05 45%, #080808 72%)',
          }}
          aria-hidden="true"
        />

        {/* ── Pulsing warm orb ── */}
        <m.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 800,
            height: 800,
            background: 'radial-gradient(circle, rgba(201,164,106,0.08) 0%, transparent 68%)',
            filter: 'blur(8px)',
            top: '50%',
            left: '50%',
            x: '-50%',
            y: '-50%',
          }}
          animate={{
            scale: [1, 1.2, 0.93, 1.12, 1],
            opacity: [0.55, 0.8, 0.45, 0.85, 0.55],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />

        {/* ── Vignettes ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(8,8,8,0.5) 0%, transparent 30%, transparent 70%, rgba(8,8,8,1) 100%)',
          }}
          aria-hidden="true"
        />

        {/* ── Content ── */}
        <div className="relative z-10 text-center px-6 select-none">

          {/* Eyebrow: location context */}
          <m.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="section-label mb-8 block"
          >
            USC · Los Angeles
          </m.p>

          {/* First name — clips up from below */}
          <div className="overflow-hidden">
            <m.h1
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold text-white leading-[0.9] tracking-tight"
              style={{ fontSize: 'clamp(2.8rem, 10vw, 7.5rem)' }}
            >
              Emmanuel
            </m.h1>
          </div>

          {/* Last name — clips up slightly behind first name */}
          <div className="overflow-hidden">
            <m.h1
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.58, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold leading-[0.9] tracking-tight"
              style={{
                fontSize: 'clamp(2.8rem, 10vw, 7.5rem)',
                color: 'rgba(255,255,255,0.68)',
                WebkitTextStroke: '1px rgba(201,164,106,0.3)',
              }}
            >
              Nwalozie
            </m.h1>
          </div>

          {/* Tagline — typed rotating phrases */}
          <m.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 min-h-[1.4em]"
          >
            <TypedHero />
          </m.p>
        </div>

        {/* ── Scroll indicator ── */}
        <m.div
          className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1, duration: 1.4 }}
          aria-hidden="true"
        >
          <m.div
            animate={{ scaleY: [1, 1.5, 1] }}
            transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-10 bg-gradient-to-b from-[#C9A46A]/40 to-transparent origin-top"
          />
        </m.div>
      </section>
    </LazyMotion>
  )
}

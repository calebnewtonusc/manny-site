'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

/* Full-width image with subtle parallax scroll */
function ParallaxImage({
  src,
  alt,
  heightClass,
  objectPosition = 'center',
}: {
  src: string
  alt: string
  heightClass: string
  objectPosition?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-7%', '7%'])

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-2xl glass ${heightClass}`}
    >
      <motion.div
        className="absolute inset-0 scale-[1.16]"
        style={{ y, willChange: 'transform' }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          style={{ objectPosition }}
          sizes="(max-width: 768px) 100vw, 80vw"
        />
      </motion.div>
      {/* Vignette inset */}
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{ boxShadow: 'inset 0 0 70px rgba(0,0,0,0.3)' }}
        aria-hidden="true"
      />
    </div>
  )
}

/* Portrait card with stagger reveal */
function PortraitCard({
  src,
  alt,
  index,
}: {
  src: string
  alt: string
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.06 })

  return (
    <motion.div
      ref={ref}
      className="relative h-72 md:h-[480px] overflow-hidden rounded-2xl group glass hover-glow"
      initial={{ opacity: 0, y: 48, scale: 0.94 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 1.0,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ scale: 1.016 }}
      style={{ willChange: 'transform, opacity' }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 25vw"
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(201,164,106,0.1) 0%, transparent 50%)',
        }}
        aria-hidden="true"
      />
    </motion.div>
  )
}

export default function BeachSection() {
  const headerRef = useRef<HTMLDivElement>(null)
  const isHeaderInView = useInView(headerRef, { once: true })

  const portraits = [
    { src: '/images/img-5963.jpeg', alt: 'Handstand at the beach, birds flying overhead' },
    { src: '/images/img-5962.jpeg', alt: 'Setting up a handstand in the sand' },
    { src: '/images/img-5964.jpeg', alt: 'Handstand silhouette against the ocean sky' },
    { src: '/images/img-5965.jpeg', alt: 'Handstand on the beach, arms straight' },
  ]

  return (
    <section aria-label="Beach photos" className="px-6 md:px-12 py-24 max-w-6xl mx-auto">

      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 22 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10"
      >
        <p className="section-label">Open Skies</p>
        <h2 className="mt-2 font-display font-bold text-white/90 text-3xl md:text-4xl tracking-tight">
          Hands on sand.
        </h2>
      </motion.div>

      {/* Full-width opener — arms wide at beach */}
      <div className="mb-4">
        <ParallaxImage
          src="/images/img-5946.jpeg"
          alt="Emmanuel standing at the beach with arms spread wide, facing the ocean"
          heightClass="h-[340px] md:h-[520px]"
          objectPosition="center 40%"
        />
      </div>

      {/* 4 portrait handstands in a grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-4">
        {portraits.map((p, i) => (
          <PortraitCard key={p.src} src={p.src} alt={p.alt} index={i} />
        ))}
      </div>

      {/* Full-width closer — group sunset at pier */}
      <ParallaxImage
        src="/images/img-9584.jpeg"
        alt="Emmanuel and three friends at the beach during golden hour sunset by the pier"
        heightClass="h-[340px] md:h-[520px]"
        objectPosition="center 35%"
      />
    </section>
  )
}

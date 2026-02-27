'use client'

import { useRef } from 'react'
import { LazyMotion, m, domAnimation, useInView } from 'framer-motion'
import Image from 'next/image'

interface PhotoCardProps {
  src: string
  alt: string
  colClass: string
  heightClass: string
  index: number
  objectPosition?: string
  priority?: boolean
}

function PhotoCard({
  src,
  alt,
  colClass,
  heightClass,
  index,
  objectPosition = 'center',
  priority = false,
}: PhotoCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.06 })

  return (
    <m.div
      ref={ref}
      className={`relative overflow-hidden rounded-2xl group cursor-pointer hover-glow glass ${colClass} ${heightClass}`}
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.95,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ scale: 1.018 }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.055]"
        style={{ objectPosition }}
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
      />

      {/* Warm shimmer on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, rgba(201,164,106,0.08) 0%, transparent 55%)',
        }}
        aria-hidden="true"
      />
    </m.div>
  )
}

export default function Gallery() {
  const headerRef = useRef<HTMLDivElement>(null)
  const isHeaderInView = useInView(headerRef, { once: true })

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="main"
        aria-label="Photo gallery"
        className="px-6 md:px-12 py-24 max-w-6xl mx-auto"
      >
      {/* Header */}
      <m.div
        ref={headerRef}
        initial={{ opacity: 0, y: 22 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10"
      >
        <p className="section-label">The Archive</p>
        <h2 className="mt-2 font-display font-bold text-white/90 text-3xl md:text-4xl tracking-tight">
          Off the feed.
        </h2>
      </m.div>

      {/*
        Grid layout:
        Mobile  (< 640px)  → 1 column, all full-width
        Tablet  (640–767px)→ 2 columns, equal width
        Desktop (≥ 768px)  → 3 columns with 2+1 row layout
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">

        {/* Row 1: B&W wide + friend narrow */}
        <PhotoCard
          src="/images/img-8645.jpeg"
          alt="Black and white portrait of someone lost in thought"
          colClass="md:col-span-2"
          heightClass="h-72 md:h-[400px]"
          objectPosition="center 20%"
          index={0}
          priority
        />
        <PhotoCard
          src="/images/img-6297.jpg"
          alt="Two friends, foreheads together in a quiet moment"
          colClass="md:col-span-1"
          heightClass="h-72 md:h-[400px]"
          objectPosition="center top"
          index={1}
        />

        {/* Row 2: Rihanna narrow + puppy wide */}
        <PhotoCard
          src="/images/img-1600.jpeg"
          alt="Four-panel Rihanna photo collage"
          colClass="md:col-span-1"
          heightClass="h-72 md:h-[400px]"
          objectPosition="center top"
          index={2}
        />
        <PhotoCard
          src="/images/img-3030.jpeg"
          alt="Emmanuel on the couch with a small puppy"
          colClass="md:col-span-2"
          heightClass="h-72 md:h-[400px]"
          objectPosition="center 30%"
          index={3}
        />
      </div>
    </section>
    </LazyMotion>
  )
}

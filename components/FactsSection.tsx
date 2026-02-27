'use client'

import { useRef } from 'react'
import { LazyMotion, m, domAnimation, useInView } from 'framer-motion'

const facts = [
  { label: 'on the field',    value: 'Defensive End · Sprinter' },
  { label: 'on campus',       value: 'USC Student Government' },
  { label: 'in the margins',  value: 'Poetry — reading and writing it' },
  { label: 'in the thrift',   value: 'Every fit is a found object' },
  { label: 'by Taper Hall',   value: 'Feeding the squirrels, not studying' },
  { label: 'on screen',       value: 'Back to back. Every genre.' },
]

function FactLine({
  label,
  value,
  index,
}: {
  label: string
  value: string
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <m.div
      ref={ref}
      className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between py-5 border-b border-white/[0.07] last:border-0 gap-1 sm:gap-4"
      initial={{ opacity: 0, x: -26 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.85,
        delay: index * 0.09,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <span
        className="text-[10px] tracking-[0.34em] uppercase shrink-0"
        style={{ color: 'rgba(201,164,106,0.52)' }}
      >
        {label}
      </span>
      <span className="text-white/60 text-sm md:text-[15px] sm:text-right font-body leading-snug">
        {value}
      </span>
    </m.div>
  )
}

export default function FactsSection() {
  const headerRef = useRef<HTMLDivElement>(null)
  const isHeaderInView = useInView(headerRef, { once: true })

  return (
    <LazyMotion features={domAnimation}>
      <section aria-label="About Emmanuel" className="px-6 md:px-12 py-24 max-w-3xl mx-auto">

        <m.div
          ref={headerRef}
          initial={{ opacity: 0, y: 22 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <p className="section-label">Below the surface</p>
          <h2 className="mt-2 font-display font-bold text-white/90 text-3xl md:text-4xl tracking-tight">
            What I keep.
          </h2>
        </m.div>

        <div>
          {facts.map((fact, i) => (
            <FactLine key={fact.label} {...fact} index={i} />
          ))}
        </div>
      </section>
    </LazyMotion>
  )
}

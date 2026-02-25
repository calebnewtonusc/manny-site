'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Footer() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1.4, ease: 'easeOut' }}
      className="border-t border-white/[0.05] py-14 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Name */}
        <p className="font-display font-bold text-white/70 text-xl tracking-tight">
          Emmanuel Nwalozie
        </p>

        {/* Right side */}
        <div className="flex items-center gap-6">
          {/* Subtle location */}
          <span
            className="text-[10px] tracking-[0.32em] uppercase"
            style={{ color: 'rgba(201,164,106,0.35)' }}
          >
            Los Angeles, CA
          </span>

          <span className="w-px h-3 bg-white/[0.1]" aria-hidden="true" />

          <span
            className="text-[10px] tracking-[0.32em] uppercase"
            style={{ color: 'rgba(255,255,255,0.18)' }}
          >
            © 2026
          </span>
        </div>
      </div>
    </motion.footer>
  )
}

'use client'

// ─────────────────────────────────────────────────────────────
// MARQUEE STRIP — src/components/Marquee.jsx
// Subtle infinite scrolling text strip
// ─────────────────────────────────────────────────────────────

import { motion } from 'framer-motion'

const items = [
  'SaaS Motion Design',
  'UI Animation',
  'Product Explainers',
  'Launch Videos',
  'Motion Systems',
  'After Effects',
  'Cinematic Quality',
]

const doubled = [...items, ...items]

export default function Marquee() {
  return (
    <div className="relative overflow-hidden py-5 border-y border-gray-200 bg-[#F8F8F8]">
      {/* Edge fades */}
      <div className="absolute inset-y-0 left-0 w-20 z-10
                      bg-gradient-to-r from-[#F8F8F8] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 z-10
                      bg-gradient-to-l from-[#F8F8F8] to-transparent pointer-events-none" />

      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 text-[0.72rem] font-display
                       font-600 text-gray-400 tracking-[0.1em] uppercase"
          >
            {item}
            <span className="w-1 h-1 rounded-full bg-gray-900 inline-block" />
          </span>
        ))}
      </motion.div>
    </div>
  )
}

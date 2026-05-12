'use client'

// ─────────────────────────────────────────────────────────────
// MARQUEE STRIP — src/components/Marquee.jsx
// Subtle infinite scrolling text strip - Dark theme
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
    <div 
      className="relative overflow-hidden py-5"
      style={{
        background: '#061012',
        borderTop: '1px solid rgba(136, 243, 231, 0.08)',
        borderBottom: '1px solid rgba(136, 243, 231, 0.08)',
      }}
    >
      {/* Edge fades */}
      <div className="absolute inset-y-0 left-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #061012, transparent)' }}
      />
      <div className="absolute inset-y-0 right-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #061012, transparent)' }}
      />

      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 text-[0.72rem] font-display
                       font-semibold tracking-[0.1em] uppercase"
            style={{ color: '#6ba8a3' }}
          >
            {item}
            <span 
              className="w-1 h-1 rounded-full inline-block" 
              style={{ background: '#88f3e7' }}
            />
          </span>
        ))}
      </motion.div>
    </div>
  )
}

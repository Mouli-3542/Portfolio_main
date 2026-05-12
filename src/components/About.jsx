'use client'

// ─────────────────────────────────────────────────────────────
// ABOUT SECTION — src/components/About.jsx
// Clean about section without stats (no client work yet)
// ─────────────────────────────────────────────────────────────

import { motion } from 'framer-motion'
import { links } from '../data/links'

const capabilities = [
  'SaaS Explainer Videos',
  'Product Launch Videos',
  'UI Animation & Micro-interactions',
  'Motion System Design',
  'After Effects / Premiere Pro',
  'Lottie & Web Animation',
]

const tools = [
  'After Effects',
  'Premiere Pro',
  'Figma',
  'Framer',
  'Lottie',
]

export default function About() {
  return (
    <section id="about" className="section-py relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-accent-blue text-sm font-display font-600 tracking-[0.1em] uppercase mb-3"
        >
          About
        </motion.p>

        {/* Headline + Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">

          {/* Left — Headline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display font-800 text-[clamp(1.8rem,3.5vw,3rem)]
                           leading-[1.1] tracking-tight text-ink-primary">
              Motion made for{' '}
              <span className="text-gradient-blue">products</span>{' '}
              that mean business.
            </h2>
          </motion.div>

          {/* Right — Bio */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="space-y-4 text-ink-muted leading-relaxed text-[0.92rem]">
              <p>
                Hey, I&apos;m the creator behind{' '}
                <span className="text-ink-primary font-medium">Cinova Visuals</span>
                . I craft motion design for SaaS products, startups, and
                anyone who wants their product to truly move.
              </p>
              <p>
                I turn complex ideas into compelling visual stories through
                explainer videos, product launches, and smooth UI animations.
              </p>
            </div>

            <a
              href={links.bookCall}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost self-start"
            >
              Book a Discovery Call
            </a>
          </motion.div>
        </div>

        {/* Capabilities + Tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-xl border border-thin bg-bg-card"
          >
            <h3 className="font-display font-700 text-[0.95rem] text-ink-primary mb-4">
              What I Do
            </h3>
            <ul className="space-y-2.5">
              {capabilities.map((cap) => (
                <li key={cap} className="flex items-center gap-3 text-[0.85rem] text-ink-muted">
                  <span className="w-1 h-1 rounded-full bg-accent-blue flex-shrink-0" />
                  {cap}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-xl border border-thin bg-bg-card"
          >
            <h3 className="font-display font-700 text-[0.95rem] text-ink-primary mb-4">
              Tool Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 rounded-lg text-[0.8rem] font-medium
                             bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)]
                             text-ink-muted"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

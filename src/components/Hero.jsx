'use client'

// ─────────────────────────────────────────────────────────────
// HERO SECTION — src/components/Hero.jsx
// Clean, minimal hero matching the simo.design reference
// ─────────────────────────────────────────────────────────────

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { links } from '../data/links'
import Image from 'next/image'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#F8F8F8]"
      style={{ paddingTop: '7rem', paddingBottom: '5rem' }}
    >
      {/* Background Elements */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        style={{ y }}
        className="relative z-10 max-w-7xl mx-auto px-6 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            {/* Availability Badge */}
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm text-sm font-medium text-gray-700">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Available for Q1
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display leading-[0.95] tracking-tight mb-8"
            >
              <span className="block text-[clamp(2.5rem,6vw,4.5rem)] text-gray-400 font-medium italic">
                Motion that
              </span>
              <span className="block text-[clamp(2.5rem,6vw,4.5rem)] text-gray-900 font-bold">
                drives growth.
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="font-body text-[clamp(1rem,1.2vw,1.1rem)]
                         leading-relaxed max-w-lg mb-10"
            >
              <span className="text-gray-900 font-semibold">
                I design strategic animations that capture attention and drive sales.
              </span>{' '}
              <span className="text-gray-500">
                Purpose-driven motion to turn your viewers into loyal customers.
              </span>
            </motion.p>

            {/* CTA Button - Dark Pill Style */}
            <motion.div variants={itemVariants}>
              <a
                href={links.bookCall}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors shadow-lg"
              >
                <span className="w-8 h-8 rounded-full border-2 border-gray-600 overflow-hidden flex items-center justify-center bg-gray-800">
                  <Image
                    src="/images/cinova-logo.png"
                    alt="Cinova"
                    width={24}
                    height={24}
                    className="object-cover"
                  />
                </span>
                Book a call with me
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[500px]">
              {/* Background Card - Black with green gradient */}
              <motion.div
                animate={{ rotate: [8, 10, 8], y: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-0 right-0 w-[380px] h-[280px] rounded-2xl bg-gradient-to-br from-green-600 to-gray-900"
              />
              
              {/* Middle Card - Dark with chart */}
              <motion.div
                animate={{ rotate: [-3, -5, -3], y: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-10 right-10 w-[380px] h-[280px] rounded-2xl bg-gray-900 shadow-2xl overflow-hidden"
              >
                <div className="p-4 h-full flex flex-col justify-end">
                  {/* Mock chart lines */}
                  <svg viewBox="0 0 100 40" className="w-full h-20">
                    <path d="M0 35 L20 30 L40 25 L60 15 L80 20 L100 5" stroke="#22c55e" strokeWidth="2" fill="none"/>
                    <path d="M0 38 L20 35 L40 32 L60 28 L80 30 L100 25" stroke="#ef4444" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
              </motion.div>

              {/* Front Card - White document */}
              <motion.div
                animate={{ rotate: [-2, 0, -2], y: [0, -8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-20 right-20 w-[380px] h-[280px] rounded-2xl bg-white shadow-2xl border border-gray-200 p-6"
              >
                {/* Browser dots */}
                <div className="flex gap-1.5 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400"/>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"/>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400"/>
                </div>
                
                <h3 className="font-bold text-gray-900 text-lg mb-2">Project plan: Q1 strategy</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  The primary strategic objective for the first quarter of the fiscal year is to significantly scale our operational efficiency...
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{"📊"}</span>
                    <span className="text-sm font-medium text-gray-700">Q1 Key Deliverables</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="w-2 h-2 rounded-full bg-blue-500"/>
                    Market Analysis Research
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          className="w-6 h-6 rounded-full bg-gray-900"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}

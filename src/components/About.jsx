'use client'

// ─────────────────────────────────────────────────────────────
// ABOUT SECTION — src/components/About.jsx
// Redesigned with tool stack icons matching the reference design
// ─────────────────────────────────────────────────────────────

import { motion } from 'framer-motion'
import { links } from '../data/links'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M7 20h10M12 18v2"/>
      </svg>
    ),
    label: 'App & Web Explainers',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M12 2l2 7h7l-6 4 2 7-6-4-6 4 2-7-6-4h7z"/>
      </svg>
    ),
    label: 'UI/UX Motion Design',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M3 17l6-6 4 4 8-8"/>
        <path d="M17 7h4v4"/>
      </svg>
    ),
    label: 'Marketing Ads for SaaS',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
        <circle cx="12" cy="11" r="2"/>
      </svg>
    ),
    label: 'Onboarding & Tutorial Videos',
  },
]

const tools = [
  {
    name: 'After Effects',
    icon: (
      <div className="w-10 h-10 bg-[#1E1E3F] rounded-xl flex items-center justify-center">
        <span className="text-[#9999FF] font-bold text-sm">Ae</span>
      </div>
    ),
  },
  {
    name: 'Premiere Pro',
    icon: (
      <div className="w-10 h-10 bg-[#1E1E3F] rounded-xl flex items-center justify-center">
        <span className="text-[#9999FF] font-bold text-sm">Pr</span>
      </div>
    ),
  },
  {
    name: 'Illustrator',
    icon: (
      <div className="w-10 h-10 bg-[#1E1E3F] rounded-xl flex items-center justify-center">
        <span className="text-[#FF9A00] font-bold text-sm">Ai</span>
      </div>
    ),
  },
  {
    name: 'Figma',
    icon: (
      <div className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M5 5.5A3.5 3.5 0 018.5 2H12v7H8.5A3.5 3.5 0 015 5.5z" fill="#F24E1E"/>
          <path d="M12 2h3.5a3.5 3.5 0 110 7H12V2z" fill="#FF7262"/>
          <path d="M12 12.5a3.5 3.5 0 117 0 3.5 3.5 0 11-7 0z" fill="#1ABCFE"/>
          <path d="M5 19.5A3.5 3.5 0 018.5 16H12v3.5a3.5 3.5 0 11-7 0z" fill="#0ACF83"/>
          <path d="M5 12.5A3.5 3.5 0 018.5 9H12v7H8.5A3.5 3.5 0 015 12.5z" fill="#A259FF"/>
        </svg>
      </div>
    ),
  },
  {
    name: 'Spark',
    icon: (
      <div className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-900">
          <path d="M12 2L9 9l-7 3 7 3 3 7 3-7 7-3-7-3-3-7z"/>
        </svg>
      </div>
    ),
  },
  {
    name: 'OpenAI',
    icon: (
      <div className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-900">
          <path d="M22.28 9.38c.5-1.21.35-2.56-.39-3.63a3.76 3.76 0 00-4.03-1.6 3.75 3.75 0 00-2.84-1.27c-1.34 0-2.56.7-3.24 1.84a3.75 3.75 0 00-2.52.95 3.77 3.77 0 00-1.26 2.4 3.75 3.75 0 00-2.52 1.82c-.67 1.17-.68 2.6-.03 3.78a3.76 3.76 0 00.39 3.63 3.76 3.76 0 004.03 1.6 3.75 3.75 0 002.84 1.27c1.34 0 2.56-.7 3.24-1.84a3.75 3.75 0 002.52-.95 3.77 3.77 0 001.26-2.4 3.75 3.75 0 002.52-1.82c.67-1.17.68-2.6.03-3.78z"/>
        </svg>
      </div>
    ),
  },
  {
    name: 'Notion',
    icon: (
      <div className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-900">
          <path d="M4 4.5A2.5 2.5 0 016.5 2h9.793a1.5 1.5 0 011.06.44l2.207 2.207A1.5 1.5 0 0120 5.707V19.5a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 014 19.5v-15zM6.5 4a.5.5 0 00-.5.5v15a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V6h-1.5a1.5 1.5 0 01-1.5-1.5V3H6.5z"/>
        </svg>
      </div>
    ),
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — Headline + Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-tight text-gray-400 mb-4">
              Specialized in
            </h2>
            <h3 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-tight text-gray-900 mb-2">
              digital product
            </h3>
            <div className="flex items-end gap-2 mb-12">
              <h3 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-tight text-gray-900">
                motion.
              </h3>
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-3 h-3 rounded-full bg-gray-900 mb-4"
              />
            </div>

            {/* Tool Stack */}
            <div>
              <p className="text-gray-600 text-sm font-medium mb-4">My tech stack</p>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <motion.div
                    key={tool.name}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    title={tool.name}
                  >
                    {tool.icon}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-5"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-white flex-shrink-0">
                  {service.icon}
                </div>
                <span className="text-gray-900 font-semibold text-lg">
                  {service.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <h2 className="font-display text-[clamp(1.8rem,4vw,3.5rem)] leading-[1.1] tracking-tight mb-6">
            <span className="text-gray-400 font-medium italic">Want similar</span>
            <br />
            <span className="text-gray-900 font-bold">Motion design for your</span>
            <br />
            <span className="text-gray-900 font-bold">brand?</span>
          </h2>

          <div className="max-w-lg mx-auto mb-8">
            <p className="text-gray-900 font-semibold text-lg">
              Get a dedicated motion partner{' '}
              <span className="text-gray-400 font-normal">
                without the overhead of a full-time hire.
              </span>
            </p>
          </div>

          <motion.a
            href={links.bookCall}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full text-base font-medium shadow-lg hover:bg-gray-800 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              <rect x="3" y="4" width="18" height="16" rx="2"/>
              <path d="M8 2v4M16 2v4M3 10h18"/>
            </svg>
            See plans & pricing
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

// ─────────────────────────────────────────────────────────────
// NAVBAR — src/components/Navbar.jsx
// Minimal navbar with shrink-on-scroll and typing dots animation
// ─────────────────────────────────────────────────────────────

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { links } from '../data/links'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { label: 'Work',     href: '/#projects' },
  { label: 'Services', href: '/#about'    },
  { label: 'Pricing',  href: '/#contact'  },
]

// Typing dots animation component
function TypingDots() {
  return (
    <div className="flex items-center gap-1 ml-2">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-ink-muted"
          animate={{
            y: [0, -4, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.15,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    if (href.startsWith('/#')) {
      e.preventDefault()
      setMobileOpen(false)
      const target = href.replace('/#', '#')
      const el = document.querySelector(target)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
      >
        <motion.div
          animate={{
            paddingLeft: scrolled ? '12px' : '16px',
            paddingRight: scrolled ? '12px' : '16px',
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white/95 backdrop-blur-xl rounded-full border border-gray-200/50 shadow-lg shadow-black/5"
        >
          <motion.div
            animate={{
              paddingTop: scrolled ? '8px' : '12px',
              paddingBottom: scrolled ? '8px' : '12px',
              gap: scrolled ? '8px' : '32px',
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center"
          >
            {/* Logo with circular border */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <motion.div
                animate={{
                  width: scrolled ? 36 : 40,
                  height: scrolled ? 36 : 40,
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-full border-2 border-gray-200 overflow-hidden flex items-center justify-center bg-gray-50"
              >
                <Image
                  src="/images/cinova-logo.png"
                  alt="Cinova Visuals"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </motion.div>
              <motion.span
                animate={{
                  fontSize: scrolled ? '0.9rem' : '1rem',
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-semibold tracking-tight text-gray-900 group-hover:text-gray-700 transition-colors"
              >
                cinova.design
              </motion.span>
            </Link>

            {/* Typing dots - shown when scrolled */}
            <AnimatePresence>
              {scrolled && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <TypingDots />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Desktop Links - hidden when scrolled */}
            <AnimatePresence>
              {!scrolled && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:flex items-center gap-6 overflow-hidden"
                >
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium whitespace-nowrap"
                    >
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Desktop CTA - hidden when scrolled */}
            <AnimatePresence>
              {!scrolled && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:flex items-center overflow-hidden"
                >
                  <Link
                    href="/#contact"
                    onClick={(e) => handleNavClick(e, '/#contact')}
                    className="px-5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap"
                  >
                    Contact
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="block w-5 h-[1.5px] bg-gray-900 rounded-full"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="block w-5 h-[1.5px] bg-gray-900 rounded-full"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="block w-5 h-[1.5px] bg-gray-900 rounded-full"
              />
            </button>
          </motion.div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 p-6
                       bg-white rounded-2xl shadow-xl border border-gray-200"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-lg font-display font-semibold text-gray-900 py-3
                               border-b border-gray-100
                               flex items-center justify-between"
                  >
                    {link.label}
                    <span className="text-gray-400 text-sm">0{i + 1}</span>
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/projects"
                onClick={() => setMobileOpen(false)}
                className="text-lg font-display font-semibold text-gray-900 py-3
                           border-b border-gray-100
                           flex items-center justify-between"
              >
                All Projects
                <span className="text-gray-400 text-sm">04</span>
              </Link>
              <a
                href={links.bookCall}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 py-3 px-6 bg-gray-900 text-white rounded-full text-center font-medium"
              >
                Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

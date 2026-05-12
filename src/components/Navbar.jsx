'use client'

// ─────────────────────────────────────────────────────────────
// NAVBAR — src/components/Navbar.jsx
// Clean minimal navigation with Cinova logo
// ─────────────────────────────────────────────────────────────

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { links } from '../data/links'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { label: 'Work',    href: '/#projects' },
  { label: 'About',   href: '/#about'    },
  { label: 'Contact', href: '/#contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[rgba(10,10,10,0.9)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.06)]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/images/cinova-logo.png"
              alt="Cinova Visuals"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-display font-700 text-[0.95rem] tracking-tight text-ink-primary group-hover:text-white transition-colors">
              Cinova Visuals
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-ink-muted hover:text-ink-primary transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/projects"
              className="text-ink-muted hover:text-ink-primary transition-colors duration-200 text-sm font-medium"
            >
              All Projects
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={links.bookCall}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2.5 px-5"
            >
              Book a Call
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-[1.5px] bg-ink-primary rounded-full"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-[1.5px] bg-ink-primary rounded-full"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-[1.5px] bg-ink-primary rounded-full"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 right-0 z-40 pt-20 pb-8 px-6
                       bg-[rgba(10,10,10,0.98)] backdrop-blur-2xl
                       border-b border-[rgba(255,255,255,0.06)]"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-xl font-display font-600 text-ink-primary py-3
                               border-b border-[rgba(255,255,255,0.05)]
                               flex items-center justify-between"
                  >
                    {link.label}
                    <span className="text-ink-subtle text-sm">0{i + 1}</span>
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/projects"
                onClick={() => setMobileOpen(false)}
                className="text-xl font-display font-600 text-ink-primary py-3
                           border-b border-[rgba(255,255,255,0.05)]
                           flex items-center justify-between"
              >
                All Projects
                <span className="text-ink-subtle text-sm">04</span>
              </Link>
              <a
                href={links.bookCall}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-5 justify-center"
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

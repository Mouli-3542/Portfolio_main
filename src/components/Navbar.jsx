'use client'

// ─────────────────────────────────────────────────────────────
// NAVBAR — src/components/Navbar.jsx
// Transparent glass navbar with edge glow, centered layout
// Shrinks on scroll down, expands on any scroll up
// ─────────────────────────────────────────────────────────────

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { links } from '../data/links'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { label: 'Work',     href: '/#projects' },
  { label: 'Services', href: '/#about'    },
  { label: 'Pricing',  href: '/#contact'  },
]

// Typing dots with stop-frame animation style
function TypingDots({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div 
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 'auto' }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-1.5 ml-3 overflow-hidden"
        >
          <span className="w-2 h-2 rounded-full bg-[#88f3e7] typing-dot-1" />
          <span className="w-2 h-2 rounded-full bg-[#88f3e7] typing-dot-2" />
          <span className="w-2 h-2 rounded-full bg-[#6ba8a3] typing-dot-3" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Navbar() {
  const [isMinimized, setIsMinimized] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // If scrolling up even slightly, expand navbar
      if (currentScrollY < lastScrollY.current) {
        setIsMinimized(false)
      } 
      // If scrolling down past threshold, minimize navbar
      else if (currentScrollY > 100) {
        setIsMinimized(true)
      }
      
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
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
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
      >
        <motion.div
          layout
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="navbar-glass rounded-full"
          style={{
            background: 'rgba(6, 16, 18, 0.75)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            boxShadow: `
              0 0 0 1px rgba(136, 243, 231, 0.1),
              0 0 20px rgba(136, 243, 231, 0.08),
              0 4px 30px rgba(0, 0, 0, 0.3),
              inset 0 0 20px rgba(136, 243, 231, 0.03)
            `,
          }}
        >
          <motion.div
            layout
            animate={{
              paddingLeft: isMinimized ? 16 : 24,
              paddingRight: isMinimized ? 16 : 24,
              paddingTop: isMinimized ? 10 : 14,
              paddingBottom: isMinimized ? 10 : 14,
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center"
          >
            {/* Logo with circular border */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <motion.div
                layout
                animate={{
                  width: isMinimized ? 32 : 40,
                  height: isMinimized ? 32 : 40,
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-full overflow-hidden flex items-center justify-center flex-shrink-0"
                style={{
                  border: '2px solid rgba(136, 243, 231, 0.3)',
                  background: 'rgba(136, 243, 231, 0.05)',
                }}
              >
                <Image
                  src="/images/cinova-logo.png"
                  alt="Cinova Visuals"
                  width={28}
                  height={28}
                  className="object-cover"
                />
              </motion.div>
              <motion.span
                layout
                animate={{
                  fontSize: isMinimized ? '0.9rem' : '1rem',
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-semibold tracking-tight text-[#dffcfa] group-hover:text-[#88f3e7] transition-colors whitespace-nowrap"
              >
                cinova.design
              </motion.span>
            </Link>

            {/* Typing dots - shown when minimized */}
            <TypingDots visible={isMinimized} />

            {/* Desktop Links - hidden when minimized */}
            <AnimatePresence mode="wait">
              {!isMinimized && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="hidden md:flex items-center gap-8 ml-10 overflow-hidden"
                >
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-[#b8e8e4] hover:text-[#88f3e7] transition-colors duration-200 text-sm font-medium whitespace-nowrap"
                    >
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Desktop CTA - hidden when minimized */}
            <AnimatePresence mode="wait">
              {!isMinimized && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="hidden md:flex items-center ml-8 overflow-hidden"
                >
                  <Link
                    href="/#contact"
                    onClick={(e) => handleNavClick(e, '/#contact')}
                    className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap"
                    style={{
                      background: 'rgba(136, 243, 231, 0.1)',
                      border: '1px solid rgba(136, 243, 231, 0.2)',
                      color: '#88f3e7',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(136, 243, 231, 0.15)'
                      e.currentTarget.style.borderColor = 'rgba(136, 243, 231, 0.4)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(136, 243, 231, 0.1)'
                      e.currentTarget.style.borderColor = 'rgba(136, 243, 231, 0.2)'
                    }}
                  >
                    Contact
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 ml-4"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="block w-5 h-[1.5px] bg-[#88f3e7] rounded-full"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="block w-5 h-[1.5px] bg-[#88f3e7] rounded-full"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="block w-5 h-[1.5px] bg-[#88f3e7] rounded-full"
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
            className="fixed top-20 left-4 right-4 z-40 p-6 rounded-2xl"
            style={{
              background: 'rgba(6, 16, 18, 0.95)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(136, 243, 231, 0.1)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
            }}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-lg font-display font-semibold text-[#dffcfa] py-3
                               border-b border-[rgba(136,243,231,0.1)]
                               flex items-center justify-between"
                  >
                    {link.label}
                    <span className="text-[#6ba8a3] text-sm">0{i + 1}</span>
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/projects"
                onClick={() => setMobileOpen(false)}
                className="text-lg font-display font-semibold text-[#dffcfa] py-3
                           border-b border-[rgba(136,243,231,0.1)]
                           flex items-center justify-between"
              >
                All Projects
                <span className="text-[#6ba8a3] text-sm">04</span>
              </Link>
              <a
                href={links.bookCall}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 py-3 px-6 bg-[#88f3e7] text-[#061012] rounded-full text-center font-medium"
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

'use client'

// ─────────────────────────────────────────────────────────────
// HERO SECTION — src/components/Hero.jsx
// Dark theme with floating project cards that animate on scroll
// ─────────────────────────────────────────────────────────────

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { links } from '../data/links'
import { featuredProjects } from '../data/projects'
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

// Floating Project Card Component
function FloatingProjectCard({ project, index, scrollProgress }) {
  // Each card has different animation parameters
  const cardConfigs = [
    { initialRotate: -5, initialX: 0, initialY: 0, scale: 1 },
    { initialRotate: 3, initialX: 30, initialY: 20, scale: 0.95 },
    { initialRotate: 8, initialX: 60, initialY: 40, scale: 0.9 },
  ]
  
  const config = cardConfigs[index] || cardConfigs[0]
  
  // Animate cards spreading out as user scrolls
  const y = useTransform(scrollProgress, [0, 0.5], [0, 200 + index * 250])
  const x = useTransform(scrollProgress, [0, 0.5], [config.initialX, -300 + index * 350])
  const rotate = useTransform(scrollProgress, [0, 0.5], [config.initialRotate, 0])
  const scale = useTransform(scrollProgress, [0, 0.5], [config.scale, 1])
  const opacity = useTransform(scrollProgress, [0.4, 0.6], [1, 0])

  return (
    <motion.div
      style={{
        y,
        x,
        rotate,
        scale,
        opacity,
        zIndex: 3 - index,
      }}
      className="absolute w-[320px] h-[220px] rounded-2xl overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 + index * 0.15 }}
    >
      {/* Card glow effect */}
      <div 
        className="absolute inset-0 rounded-2xl"
        style={{
          background: index === 0 
            ? 'linear-gradient(135deg, rgba(136, 243, 231, 0.1) 0%, transparent 50%)'
            : index === 1 
            ? 'linear-gradient(135deg, rgba(81, 2, 246, 0.1) 0%, transparent 50%)'
            : 'linear-gradient(135deg, rgba(40, 40, 129, 0.2) 0%, transparent 50%)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), inset 0 0 30px rgba(136, 243, 231, 0.05)',
          border: '1px solid rgba(136, 243, 231, 0.1)',
        }}
      />
      
      {/* Card content */}
      <div className="relative h-full p-5 flex flex-col justify-between bg-[#0d1a1c]/90 backdrop-blur-sm">
        {/* Browser dots */}
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"/>
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"/>
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]"/>
        </div>
        
        <div>
          <p className="text-[#6ba8a3] text-xs mb-1">{project.category}</p>
          <h3 className="font-display font-bold text-[#dffcfa] text-lg mb-2">{project.title}</h3>
          <p className="text-[#6ba8a3] text-sm line-clamp-2">{project.description}</p>
        </div>
        
        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          {project.tags.slice(0, 2).map((tag) => (
            <span 
              key={tag} 
              className="text-[0.65rem] px-2 py-0.5 rounded-full bg-[rgba(136,243,231,0.1)] text-[#88f3e7] border border-[rgba(136,243,231,0.2)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ 
    target: ref, 
    offset: ['start start', 'end start'] 
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-[120vh] flex flex-col justify-center overflow-hidden"
      style={{ 
        paddingTop: '7rem', 
        paddingBottom: '5rem',
        background: 'linear-gradient(180deg, #061012 0%, #0a1416 50%, #061012 100%)',
      }}
    >
      {/* Background Elements */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(136, 243, 231, 0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(136, 243, 231, 0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Radial glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px]"
          style={{
            background: 'radial-gradient(ellipse, rgba(136, 243, 231, 0.03) 0%, transparent 60%)',
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
              <span 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  background: 'rgba(136, 243, 231, 0.08)',
                  border: '1px solid rgba(136, 243, 231, 0.2)',
                  color: '#88f3e7',
                }}
              >
                <span className="w-2 h-2 rounded-full bg-[#88f3e7] animate-pulse" />
                Available for Q1
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display leading-[0.95] tracking-tight mb-8"
            >
              <span className="block text-[clamp(2.5rem,6vw,4.5rem)] text-[#6ba8a3] font-medium italic">
                Motion that
              </span>
              <span className="block text-[clamp(2.5rem,6vw,4.5rem)] text-[#dffcfa] font-bold">
                drives growth.
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="font-body text-[clamp(1rem,1.2vw,1.1rem)]
                         leading-relaxed max-w-lg mb-10"
            >
              <span className="text-[#dffcfa] font-semibold">
                I design strategic animations that capture attention and drive sales.
              </span>{' '}
              <span className="text-[#6ba8a3]">
                Purpose-driven motion to turn your viewers into loyal customers.
              </span>
            </motion.p>

            {/* CTA Button - Dark Pill Style */}
            <motion.div variants={itemVariants}>
              <a
                href={links.bookCall}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full font-medium transition-all duration-300"
                style={{
                  background: '#0d1a1c',
                  border: '1px solid rgba(136, 243, 231, 0.2)',
                  color: '#dffcfa',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(136, 243, 231, 0.4)'
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(136, 243, 231, 0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(136, 243, 231, 0.2)'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)'
                }}
              >
                <span 
                  className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center"
                  style={{
                    border: '2px solid rgba(136, 243, 231, 0.3)',
                    background: 'rgba(136, 243, 231, 0.05)',
                  }}
                >
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

          {/* Right Content - Floating Project Cards */}
          <div className="relative hidden lg:block h-[500px]">
            <div className="relative w-full h-full">
              {featuredProjects.slice(0, 3).map((project, index) => (
                <FloatingProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  scrollProgress={scrollYProgress}
                />
              ))}
            </div>
          </div>
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
          className="w-6 h-6 rounded-full"
          style={{ background: '#88f3e7' }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}

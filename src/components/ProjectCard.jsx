'use client'

// ─────────────────────────────────────────────────────────────
// PROJECT CARD — src/components/ProjectCard.jsx
// Displays project thumbnail with enhanced edge glow on hover
// ─────────────────────────────────────────────────────────────

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)
  const [imageError, setImageError] = useState(false)

  const hasThumbnail = project.thumbnailUrl && !imageError

  return (
    <Link href={`/projects/${project.id}`}>
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="relative rounded-2xl overflow-hidden border border-thin
                   bg-bg-card group cursor-pointer h-full"
        style={{
          boxShadow: hovered
            ? '0 0 30px rgba(59, 130, 246, 0.4), 0 0 60px rgba(59, 130, 246, 0.2), 0 20px 60px rgba(0,0,0,0.4)'
            : '0 4px 20px rgba(0,0,0,0.2)',
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Enhanced edge glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none z-20"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            boxShadow: 'inset 0 0 30px rgba(59, 130, 246, 0.3), inset 0 0 60px rgba(59, 130, 246, 0.1)',
          }}
        />

        {/* Outer glow border */}
        <motion.div
          className="absolute -inset-[1px] rounded-2xl pointer-events-none z-10"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.5), rgba(147, 51, 234, 0.3), rgba(59, 130, 246, 0.5))',
            padding: '2px',
          }}
        />

        {/* Background glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none z-0"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: 'radial-gradient(ellipse at top left, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(ellipse at bottom right, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
          }}
        />

        <div className="relative z-10">
          {/* Thumbnail Section */}
          <div className="relative aspect-video overflow-hidden bg-bg-secondary">
            {hasThumbnail ? (
              <Image
                src={project.thumbnailUrl}
                alt={`${project.title} thumbnail`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                onError={() => setImageError(true)}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              // Placeholder when no thumbnail
              <div className="absolute inset-0 bg-gradient-to-br from-bg-elevated to-bg-card flex items-center justify-center">
                <div className="text-center">
                  <svg 
                    width="40" 
                    height="40" 
                    viewBox="0 0 24 24" 
                    className="text-ink-subtle/50 mx-auto mb-2"
                  >
                    <path d="M8 5v14l11-7z" fill="currentColor"/>
                  </svg>
                  <span className="text-ink-subtle/40 text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
            )}
            
            {/* Play icon overlay on hover */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm 
                              flex items-center justify-center border border-white/20
                              transform scale-90 group-hover:scale-100 transition-transform duration-200">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>

            {/* Category badge */}
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[0.68rem] font-medium bg-accent-blue/20 border border-accent-blue/30 text-accent-blue-soft">
                {project.category}
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-5">
            {/* Title */}
            <h3 className="font-display text-lg font-700 text-ink-primary mb-2 tracking-tight
                           group-hover:text-white transition-colors flex items-center justify-between">
              {project.title}
              <motion.div
                animate={{ x: hovered ? 4 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-ink-subtle"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" 
                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </h3>

            {/* Description */}
            <p className="text-ink-muted text-[0.85rem] leading-relaxed line-clamp-2 mb-4">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-[0.68rem] px-3 py-1 rounded-full font-medium
                             bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)]
                             text-ink-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  )
}

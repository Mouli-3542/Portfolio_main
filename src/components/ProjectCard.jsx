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
        className="relative rounded-2xl overflow-hidden group cursor-pointer h-full"
        style={{
          background: '#0d1a1c',
          border: hovered 
            ? '1px solid rgba(136, 243, 231, 0.4)' 
            : '1px solid rgba(136, 243, 231, 0.1)',
          boxShadow: hovered
            ? `0 0 40px rgba(136, 243, 231, 0.3), 
               0 0 80px rgba(136, 243, 231, 0.15), 
               0 0 120px rgba(81, 2, 246, 0.1),
               0 20px 60px rgba(0,0,0,0.5),
               inset 0 0 40px rgba(136, 243, 231, 0.05)`
            : '0 4px 20px rgba(0,0,0,0.3)',
          transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
          transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        {/* Enhanced edge glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none z-20"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          style={{
            boxShadow: 'inset 0 0 40px rgba(136, 243, 231, 0.2), inset 0 0 80px rgba(136, 243, 231, 0.08)',
          }}
        />

        {/* Outer glow border */}
        <motion.div
          className="absolute -inset-[2px] rounded-2xl pointer-events-none z-10"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          style={{
            background: 'linear-gradient(135deg, rgba(136, 243, 231, 0.5), rgba(81, 2, 246, 0.3), rgba(136, 243, 231, 0.5))',
            padding: '2px',
            borderRadius: '1rem',
          }}
        />

        {/* Background glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none z-0"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          style={{
            background: `radial-gradient(ellipse at top left, rgba(136, 243, 231, 0.12) 0%, transparent 50%), 
                        radial-gradient(ellipse at bottom right, rgba(81, 2, 246, 0.1) 0%, transparent 50%)`,
          }}
        />

        <div className="relative z-10">
          {/* Thumbnail Section */}
          <div className="relative aspect-video overflow-hidden" style={{ background: '#0a1416' }}>
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
              <div 
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #0d1a1c 0%, #112224 100%)',
                }}
              >
                <div className="text-center">
                  <svg 
                    width="40" 
                    height="40" 
                    viewBox="0 0 24 24" 
                    className="mx-auto mb-2"
                    style={{ color: 'rgba(136, 243, 231, 0.3)' }}
                  >
                    <path d="M8 5v14l11-7z" fill="currentColor"/>
                  </svg>
                  <span style={{ color: 'rgba(136, 243, 231, 0.4)' }} className="text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
            )}
            
            {/* Play icon overlay on hover */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div 
                className="w-14 h-14 rounded-full backdrop-blur-sm 
                          flex items-center justify-center
                          transform scale-90 group-hover:scale-100 transition-transform duration-200"
                style={{
                  background: 'rgba(136, 243, 231, 0.1)',
                  border: '1px solid rgba(136, 243, 231, 0.3)',
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#88f3e7">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>

            {/* Category badge */}
            <div className="absolute top-3 left-3">
              <span 
                className="inline-flex items-center px-3 py-1 rounded-full text-[0.68rem] font-medium"
                style={{
                  background: 'rgba(136, 243, 231, 0.1)',
                  border: '1px solid rgba(136, 243, 231, 0.2)',
                  color: '#88f3e7',
                }}
              >
                {project.category}
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-5">
            {/* Title */}
            <h3 className="font-display text-lg font-bold text-[#dffcfa] mb-2 tracking-tight
                           group-hover:text-[#88f3e7] transition-colors flex items-center justify-between">
              {project.title}
              <motion.div
                animate={{ x: hovered ? 4 : 0 }}
                transition={{ duration: 0.2 }}
                style={{ color: '#6ba8a3' }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" 
                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </h3>

            {/* Description */}
            <p className="text-[#6ba8a3] text-[0.85rem] leading-relaxed line-clamp-2 mb-4">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-[0.68rem] px-3 py-1 rounded-full font-medium"
                  style={{
                    background: 'rgba(136, 243, 231, 0.05)',
                    border: '1px solid rgba(136, 243, 231, 0.1)',
                    color: '#6ba8a3',
                  }}
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

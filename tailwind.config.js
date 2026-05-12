/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ─────────────────────────────────────────────
      // COLORS — User specified palette
      // ─────────────────────────────────────────────
      colors: {
        bg: {
          primary:   '#061012',
          secondary: '#0a1416',
          card:      '#0d1a1c',
          elevated:  '#112224',
        },
        accent: {
          primary:   '#88f3e7',
          secondary: '#282881',
          purple:    '#5102f6',
          glow:      'rgba(136, 243, 231, 0.15)',
        },
        brand: {
          DEFAULT: '#88f3e7',
        },
        ink: {
          primary:   '#dffcfa',
          secondary: '#b8e8e4',
          muted:     '#6ba8a3',
          subtle:    '#3d6663',
        },
      },
      // ─────────────────────────────────────────────
      // FONTS — Geist + SF Pro Display
      // ─────────────────────────────────────────────
      fontFamily: {
        display: ['var(--font-sf-pro)', 'system-ui', 'sans-serif'],
        body:    ['var(--font-geist)', 'system-ui', 'sans-serif'],
      },
      // ─────────────────────────────────────────────
      // SPACING & SIZING
      // ─────────────────────────────────────────────
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      fontSize: {
        '10xl': ['10rem',  { lineHeight: '1' }],
        '9xl':  ['8rem',   { lineHeight: '1' }],
        '8xl':  ['6.5rem', { lineHeight: '1' }],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'typing-dot': 'typing-dot 1.4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        'typing-dot': {
          '0%, 60%, 100%': { transform: 'translateY(0)', opacity: '0.3' },
          '30%': { transform: 'translateY(-4px)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

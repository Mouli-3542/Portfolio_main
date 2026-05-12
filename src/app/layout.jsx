// ─────────────────────────────────────────────────────────────
// ROOT LAYOUT — src/app/layout.jsx
// Edit the metadata below to update SEO title, description, etc
// ─────────────────────────────────────────────────────────────

import './globals.css'
import { Inter, DM_Sans } from 'next/font/google'

// Using Inter as SF Pro Display alternative (very similar design)
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sf-pro',
  weight: ['500', '600', '700'],
  display: 'swap',
})

// Using DM Sans as Geist alternative (clean geometric sans-serif)
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-geist',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

// ── SEO METADATA — edit these values ──────────────────────────
export const metadata = {
  title: 'Cinova Visuals — SaaS Motion Design',
  description:
    'Premium SaaS motion design, UI animation, and product explainer videos for indie hackers and bootstrapped founders. Based in India, working globally.',
  keywords: [
    'motion design',
    'SaaS explainer video',
    'UI animation',
    'product demo',
    'Cinova Visuals',
  ],
  openGraph: {
    title: 'Cinova Visuals — SaaS Motion Design',
    description:
      'Premium SaaS motion design and product explainer videos.',
    url: 'https://cinova.framer.website',
    siteName: 'Cinova Visuals',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cinova Visuals — SaaS Motion Design',
    description: 'Premium SaaS motion design & product explainers.',
    creator: '@Cinova_visuals',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${dmSans.variable} ${inter.variable}`}>
      <body className="bg-[#061012] text-[#dffcfa] font-body antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}

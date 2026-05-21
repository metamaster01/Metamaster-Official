'use client'

// app/our-work/OurWorksClient.tsx
// Replaces your static OurWorksPage — data comes in as props from server component

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CallToAction from '@/components/calltoaction'
import Newsletter from '@/components/newsletter'
import Testimonial from '@/components/testimonal'
import Advertise from '@/components/advertisement'
import type { WorkCard } from '@/lib/works'

type Props = {
  works: WorkCard[]
}

export default function OurWorksClient({ works }: Props) {
  // Split into rows of 3 for the divider layout
  const rows: WorkCard[][] = []
  for (let i = 0; i < works.length; i += 3) {
    rows.push(works.slice(i, i + 3))
  }

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen bg-gradient-to-r from-[#12001f] via-[#0e001a] to-[#12001f] text-white overflow-hidden">

        {/* Ambient glow */}
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-purple-600/20 blur-3xl"
        />

        {/* Header */}
        <section className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl font-bold"
          >
            Our Projects
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4 h-[2px] w-16 origin-left bg-purple-500"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 max-w-2xl text-sm text-white/70"
          >
            From branding and digital marketing to full-scale event execution,
            explore how MetaMaster transforms ideas into impactful experiences.
          </motion.p>
        </section>

        {/* Works grid */}
        <section className="relative z-10 mx-auto max-w-7xl px-6 pb-28 space-y-24">
          {works.length === 0 ? (
            <p className="text-white/40 text-lg">
              Projects coming soon. Check back shortly.
            </p>
          ) : (
            rows.map((row, rowIndex) => (
              <motion.div
                key={rowIndex}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-16"
              >
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {row.map((work, index) => (
                    <WorkCard key={work.id} work={work} index={index} />
                  ))}
                </div>

                {rowIndex !== rows.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="h-px w-full origin-left bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                )}
              </motion.div>
            ))
          )}
        </section>
      </main>

      <Advertise />
      <CallToAction />
      <Testimonial />
      <Newsletter />
      <Footer />
    </>
  )
}

// ── Work Card ─────────────────────────────────────────────────────────────────

function WorkCard({ work, index }: { work: WorkCard; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/our-work/${work.slug}`}
        className="group block relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-purple-500/40 hover:-translate-y-1"
      >
        {/* Thumbnail */}
        <div className="relative aspect-[4/3] overflow-hidden bg-purple-950/30">
          {work.cover_image_url ? (
            <Image
              src={work.cover_image_url}
              alt={work.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              unoptimized
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-pink-900/20" />
          )}

          {/* Category pill */}
          {work.category && (
            <span className="absolute top-3 left-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 px-3 py-1 text-[11px] font-medium text-white/80">
              {work.category}
            </span>
          )}

          {/* Featured badge */}
          {work.is_featured && (
            <span className="absolute top-3 right-3 rounded-full bg-purple-600/80 backdrop-blur-sm px-3 py-1 text-[11px] font-semibold text-white">
              Featured
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-base font-semibold text-white group-hover:text-purple-300 transition-colors leading-snug">
            {work.title}
          </h3>

          {work.tagline && (
            <p className="mt-2 text-sm text-white/60 leading-relaxed">
              {work.tagline}
            </p>
          )}

          {/* Tags */}
          {work.tags && work.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {work.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-purple-700/30 bg-purple-900/20 px-2.5 py-0.5 text-[10px] text-purple-300"
                >
                  {tag}
                </span>
              ))}
              {work.tags.length > 3 && (
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] text-white/40">
                  +{work.tags.length - 3}
                </span>
              )}
            </div>
          )}

          {/* CTA */}
          <div className="mt-5 flex items-center gap-2 text-sm font-medium text-pink-500 group-hover:text-pink-400 transition-colors">
            View Case Study
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

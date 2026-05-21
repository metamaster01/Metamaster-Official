'use client'

// app/our-works/[slug]/CaseStudyClient.tsx
// Full case study detail page — dynamic version of your CaseClient
// Replaces hardcoded data props with typed WorkDetail from Supabase

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Quote, CheckCircle, ArrowLeft } from 'lucide-react'
import {
  LineChart, Line, XAxis, YAxis,
  Tooltip, ResponsiveContainer,
} from 'recharts'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import type { WorkDetail } from '@/lib/works'

type Props = { data: WorkDetail }

export default function CaseStudyClient({ data }: Props) {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-gradient-to-r from-[#12001f] via-[#0e001a] to-[#12001f] text-white">

        {/* ── BACKGROUND ── */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
        </div>
        <div className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-purple-600/20 blur-[160px]" />
        <div className="pointer-events-none absolute bottom-0 -left-40 h-[520px] w-[520px] rounded-full bg-indigo-600/10 blur-[160px]" />

        {/* ── BACK LINK ── */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28">
          <Link
            href="/our-work"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-sm hover:border-purple-400/40 hover:text-white transition-all"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All Projects
          </Link>
        </div>

        {/* ── HERO ── */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-32 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6 rounded-full bg-purple-700/20 px-4 py-1 text-xs tracking-widest text-purple-300 uppercase"
          >
            Case Study
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="text-[clamp(2.2rem,5vw,4.2rem)] font-semibold tracking-tight"
          >
            {data.title}
          </motion.h1>

          {data.subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/65"
            >
              {data.subtitle}
            </motion.p>
          )}

          {/* Tags */}
          {data.tags && data.tags.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-6 flex flex-wrap justify-center gap-2"
            >
              {data.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs text-purple-300"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          )}

          <div className="mx-auto mt-10 h-[2px] w-16 bg-purple-500/70" />
        </section>

        {/* ── ABOUT BRAND ── */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 pb-36 grid gap-24 lg:grid-cols-2 items-start">

          {/* Left: hero image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="mb-8 text-sm font-semibold tracking-widest text-white/70 uppercase">
              About the Brand
            </h2>
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src={data.hero_image_url ?? data.cover_image_url ?? 'https://placehold.co/520x440/12001f/a855f7?text=Project'}
                alt={data.title}
                width={520}
                height={440}
                className="h-[440px] w-full object-cover rounded-3xl transition-transform duration-700 hover:scale-[1.03]"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </motion.div>

          {/* Right: logo + about + tags */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {data.brand_logo_url && (
              <div className="mb-10 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-10 flex justify-center">
                <Image
                  src={data.brand_logo_url}
                  alt={`${data.title} logo`}
                  width={280}
                  height={120}
                  className="object-contain opacity-90"
                  unoptimized
                />
              </div>
            )}

            {data.about && (
              <p className="max-w-xl text-sm leading-relaxed text-white/80">
                {data.about}
              </p>
            )}
          </motion.div>
        </section>

        {/* ── PROJECT OBJECTIVES ── */}
        {data.objectives && data.objectives.length > 0 && (
          <section className="relative z-10 py-24 text-white">
            <div className="max-w-6xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-center mb-14"
              >
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  {data.objectives_title || 'Project Objectives'}
                </h2>
                <p className="mt-4 text-white/70 max-w-2xl mx-auto text-sm md:text-base">
                  {data.objectives_intro || 'Clear strategic goals defined to drive measurable digital growth.'}
                </p>
              </motion.div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {data.objectives.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle
                        size={20}
                        className="text-purple-400 mt-0.5 shrink-0 group-hover:scale-110 transition"
                      />
                      <p className="text-sm text-white/80 leading-relaxed">{item}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── KEY OUTCOMES STAT CARDS ── */}
        {data.key_outcomes && data.key_outcomes.length > 0 && (
          <section className="relative z-10 max-w-7xl mx-auto px-6 pb-36">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-14 text-center"
            >
              <h2 className="text-3xl sm:text-4xl font-semibold">Key Outcomes</h2>
              <p className="mt-3 text-sm text-white/60">
                Measurable results achieved through strategy, creativity, and performance.
              </p>
              <div className="mx-auto mt-4 h-[2px] w-16 bg-purple-500" />
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {data.key_outcomes.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative rounded-2xl bg-white/[0.04] border border-white/10 p-8 text-center backdrop-blur-md shadow-[0_20px_60px_-20px_rgba(168,85,247,0.25)]"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                    <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(400px_circle_at_50%_0%,rgba(168,85,247,0.25),transparent_60%)]" />
                  </div>
                  <p className="text-3xl sm:text-4xl font-bold text-purple-400">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm text-white/70">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* ── KEY OUTCOMES GRAPH ── */}
        {data.outcome_graph && (
          <section className="relative z-10 max-w-7xl mx-auto px-6 pb-36">
            <div className="grid md:grid-cols-2 gap-16 items-center">

              {/* Left: metric grid */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
                  Growth Over Time
                </h2>
                <p className="text-sm text-white/70 leading-relaxed mb-8">
                  Through strategic marketing, creative execution, and continuous optimisation,
                  we achieved measurable business growth for the brand.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {data.key_outcomes.slice(0, 4).map((item, i) => (
                    <div
                      key={i}
                      className="rounded-xl bg-white/5 p-4 border border-white/10"
                    >
                      <p className="text-xs text-white/50">{item.label}</p>
                      <p className="text-xl font-semibold text-purple-400">{item.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right: line chart */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="h-[340px] rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl p-6 border border-white/10 shadow-[0_0_60px_-20px_rgba(168,85,247,0.4)]"
              >
                <p className="text-xs text-white/50 mb-4 font-medium">
                  {data.outcome_graph.metric}
                </p>
                <ResponsiveContainer width="100%" height="90%">
                  <LineChart
                    data={data.outcome_graph.labels.map((label, i) => ({
                      name: label,
                      value: data.outcome_graph!.values[i],
                    }))}
                  >
                    <defs>
                      <linearGradient id="purpleGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey="name"
                      stroke="#aaa"
                      tick={{ fill: '#aaa', fontSize: 12 }}
                      axisLine={false}
                    />
                    <YAxis
                      stroke="#aaa"
                      tick={{ fill: '#aaa', fontSize: 12 }}
                      axisLine={false}
                    />
                    <Tooltip
                      contentStyle={{
                        background: '#1a012d',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '8px',
                        color: '#fff',
                      }}
                    />
                    <Line
                      type="natural"
                      dataKey="value"
                      stroke="url(#purpleGradient)"
                      strokeWidth={4}
                      dot={{ r: 6, stroke: '#fff', strokeWidth: 2 }}
                      activeDot={{ r: 9 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </motion.div>
            </div>
          </section>
        )}

        {/* ── CHALLENGE ── */}
        {data.challenge && data.challenge.length > 0 && (
          <TwoColumnSection
            title="The Challenge"
            description={data.challenge_intro ?? undefined}
            items={data.challenge}
          />
        )}

        {/* ── RESULTS ── */}
        {data.results && data.results.length > 0 && (
          <TwoColumnSection
            title="The Results"
            description={data.results_intro ?? undefined}
            items={data.results}
          />
        )}

        {/* ── CLIENT TESTIMONIAL ── */}
        {data.client_testimonial && (
          <section className="relative z-10 py-14 text-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-14 items-center">

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative w-full h-[350px] md:h-[420px] rounded-2xl overflow-hidden border border-white/10"
                >
                  <Image
                    src={data.hero_image_url ?? data.cover_image_url ?? 'https://placehold.co/520x420/12001f/a855f7?text=Client'}
                    alt="Client"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </motion.div>

                {/* Quote */}
                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-10"
                >
                  <Quote size={32} className="text-purple-400 mb-6" />
                  <p className="text-lg md:text-xl leading-relaxed text-white/85">
                    {data.client_testimonial.text}
                  </p>
                  <div className="mt-8">
                    <p className="font-semibold text-white text-base">
                      {data.client_testimonial.author}
                    </p>
                    <p className="text-sm text-white/60 mt-1">
                      {data.client_testimonial.role}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        )}

        {/* Bottom padding */}
        <div className="h-24" />
      </main>

      <Footer />
    </>
  )
}

// ── Reusable Two-Column Section (Challenge / Results) ─────────────────────────

function TwoColumnSection({
  title,
  description,
  items,
}: {
  title: string
  description?: string
  items: string[]
}) {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid gap-16 md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-4 text-3xl font-semibold">{title}</h2>
        {description && (
          <p className="max-w-md text-sm leading-relaxed text-white/65">
            {description}
          </p>
        )}
      </motion.div>

      <ul className="space-y-6">
        {items.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="border-b border-white/10 pb-4 text-sm text-white/80 leading-relaxed"
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

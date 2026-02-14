"use client"

import Image from "next/image"
import {
  motion,
  useScroll,
  useSpring,
  useTransform
} from "framer-motion"
import { useRef, useState, useEffect } from "react"


export default function SeoVsSemPage() {

  const ref = useRef(null)
  const { scrollYProgress, scrollY } = useScroll()
  const scaleX = useSpring(scrollYProgress)

  const heroScale = useTransform(scrollY, [0, 600], [1, 1.1])

  // Spotlight
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const handleMouseMove = (e: any) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  // Magnetic Cursor
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", moveCursor)
    return () => window.removeEventListener("mousemove", moveCursor)
  }, [])

  const sectionVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  }

  const rowVariant = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative bg-gradient-to-br from-[#020003] via-[#070012] to-[#020003] text-white overflow-hidden cursor-none"
    >

      {/* Spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(168,85,247,0.15), transparent 80%)`
        }}
      />

      {/* Cursor Core */}
      <motion.div
        animate={{
          x: cursor.x - 6,
          y: cursor.y - 6,
          scale: hovering ? 2 : 1
        }}
        transition={{ type: "spring", stiffness: 600, damping: 35 }}
        className="fixed top-0 left-0 w-3 h-3 bg-purple-400 rounded-full pointer-events-none z-[9999]"
      />

      {/* Cursor Ring */}
      <motion.div
        animate={{
          x: cursor.x - 20,
          y: cursor.y - 20,
          scale: hovering ? 1.6 : 1
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="fixed top-0 left-0 w-10 h-10 border border-purple-400 rounded-full pointer-events-none z-[9998]"
      />

      {/* Reading Progress */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 origin-left z-50"
      />

      {/* HERO */}
      <section className="relative h-[600px] flex items-center justify-center text-center overflow-hidden">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0">
          <Image
            src="/SEOSEM.png"
            alt="SEO vs SEM"
            fill
            priority
            className="object-cover opacity-50"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-[#020003]" />

        <div className="relative z-10 max-w-4xl px-6">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setHovering(true)}
            onHoverEnd={() => setHovering(false)}
            className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            SEO vs SEM: Key Differences & Which Strategy Wins?
          </motion.h1>

          <p className="mt-6 text-lg text-purple-200/80">
            A complete guide to understanding organic growth, paid advertising,
            and how smart businesses combine both for maximum dominance.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <article className="relative z-10 max-w-5xl mx-auto px-6 py-24 space-y-24">

        {/* INTRO */}
        <motion.section
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-purple-200/80 leading-8 text-lg">
            When businesses need to grow online, two strategies dominate:
            Search Engine Optimization (SEO) and Search Engine Marketing (SEM).
            Many beginners assume they are the same — but they are fundamentally different.
            Understanding the difference helps you align your marketing approach
            with your budget, timeline, competition, and growth goals.
          </p>

          <p className="text-purple-200/80 leading-8 mt-6">
            Whether you are a startup, service business, local brand, or
            enterprise-level company, choosing correctly can determine your
            long-term digital success.
          </p>
        </motion.section>

        {/* WHAT IS SEO */}
        <motion.section variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.8 }} className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2 whileHover={{ scale: 1.05 }} onHoverStart={() => setHovering(true)} onHoverEnd={() => setHovering(false)} className="text-3xl font-semibold text-purple-300 mb-6">
              What Is SEO?
            </motion.h2>
            <p className="text-purple-200/80 leading-8">
              SEO (Search Engine Optimization) is the process of optimizing your
              website to rank organically (without paying for ads) on search engines.
              It focuses on improving content quality, site structure,
              authority signals, and technical performance.
            </p>
            <div className="mt-8 space-y-4 text-purple-200/80">
              <p>✔ Keyword Research</p>
              <p>✔ On-page Optimization</p>
              <p>✔ Technical SEO (speed, mobile, indexing)</p>
              <p>✔ Link Building</p>
              <p>✔ Local SEO</p>
              <p>✔ High-quality content creation</p>
            </div>
            <p className="mt-6 text-purple-200/80">
              SEO is a long-term strategy that builds sustainable traffic.
              Once rankings are achieved, traffic compounds over time.
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} className="relative h-[350px]">
            <Image src="/se01.png" alt="SEO Growth Illustration" fill className="object-contain" />
          </motion.div>
        </motion.section>

        {/* WHAT IS SEM */}
        <motion.section variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.8 }} className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[350px] order-2 md:order-1">
            <Image src="/sem1.png" alt="SEM Ads Illustration" fill className="object-contain" />
          </div>
          <div className="order-1 md:order-2">
            <motion.h2 whileHover={{ scale: 1.05 }} onHoverStart={() => setHovering(true)} onHoverEnd={() => setHovering(false)} className="text-3xl font-semibold text-pink-300 mb-6">
              What Is SEM?
            </motion.h2>
            <p className="text-purple-200/80 leading-8">
              SEM (Search Engine Marketing) refers to paid advertising on search engines.
              Businesses bid on keywords and appear instantly at the top
              of results marked as “Ad” or “Sponsored.”
            </p>
            <p className="mt-6 text-purple-200/80">
              SEM is ideal for immediate visibility, product launches,
              high-competition keywords, and fast lead generation.
            </p>
          </div>
        </motion.section>

        {/* COMPARISON TABLE */}
        <motion.section variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl font-semibold mb-8">SEO vs SEM: Core Differences</h2>
          <div className="overflow-x-auto rounded-2xl border border-purple-900/30">
            <table className="w-full text-left">
              <thead className="bg-[#0a0015] text-purple-300">
                <tr>
                  <th className="p-4">Factor</th>
                  <th className="p-4">SEO</th>
                  <th className="p-4">SEM</th>
                </tr>
              </thead>
              <tbody className="text-purple-200/80">
                {[
                  ["Cost","Free traffic (long-term investment)","Paid per click"],
                  ["Speed","Slow but sustainable","Instant results"],
                  ["Duration","Long-term growth","Stops when ads stop"],
                  ["Trust","Higher credibility","Marked as ads"],
                  ["ROI","Compounding","Immediate but recurring cost"]
                ].map((row, i) => (
                  <motion.tr key={i} variants={rowVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="border-t border-purple-900/20">
                    <td className="p-4">{row[0]}</td>
                    <td className="p-4">{row[1]}</td>
                    <td className="p-4">{row[2]}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* BENEFITS SEO */}
        <motion.section variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-semibold text-purple-300 mb-6">Benefits of SEO</h2>
          <ul className="space-y-4 text-purple-200/80">
            <li>• Sustainable organic traffic</li>
            <li>• Builds long-term authority</li>
            <li>• Lower acquisition cost over time</li>
            <li>• Long-lasting rankings</li>
            <li>• Strong compounding ROI</li>
          </ul>
        </motion.section>

        {/* BENEFITS SEM */}
        <motion.section variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-semibold text-pink-300 mb-6">Benefits of SEM</h2>
          <ul className="space-y-4 text-purple-200/80">
            <li>• Instant traffic</li>
            <li>• Immediate leads</li>
            <li>• Targeted audience control</li>
            <li>• Budget flexibility</li>
            <li>• Measurable ROI</li>
          </ul>
        </motion.section>

        {/* SMART STRATEGY */}
        <motion.section variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-12 rounded-3xl bg-gradient-to-r from-purple-900/40 to-pink-900/30 border border-purple-800/40 text-center">
          <h2 className="text-3xl font-semibold mb-6">The Smart Strategy: SEO + SEM</h2>
          <p className="text-purple-200/80 leading-8 text-lg">
            The best-performing businesses combine both.
            SEM drives instant traffic.
            SEO builds sustainable authority.
            Together they maximize long-term profitability.
          </p>
        </motion.section>

      </article>
    </div>
  )
}

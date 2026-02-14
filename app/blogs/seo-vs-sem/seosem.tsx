"use client"

import Image from "next/image"
import { motion, useScroll, useSpring } from "framer-motion"
import { useRef, useEffect, useState } from "react"

export default function SeoVsSemPage() {

  const ref = useRef(null)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress)

  /* ================= MAGNETIC CURSOR ================= */
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)
  const [scrollGlow, setScrollGlow] = useState(0)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY })
      document.documentElement.style.setProperty("--mx", `${e.clientX}px`)
      document.documentElement.style.setProperty("--my", `${e.clientY}px`)
    }

    const onScroll = () => {
      setScrollGlow(Math.min(window.scrollY / 300, 1))
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("scroll", onScroll)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#020003] via-[#070012] to-[#020003] text-white cursor-none"
    >

      {/* ================= MAGNETIC CURSOR ================= */}
      <motion.div
        animate={{
          x: cursor.x - 6,
          y: cursor.y - 6,
          scale: hovering ? 2 : 1,
        }}
        transition={{ type: "spring", stiffness: 600, damping: 35 }}
        className="fixed top-0 left-0 w-3 h-3 bg-purple-400 rounded-full pointer-events-none z-[9999]"
      />

      <motion.div
        animate={{
          x: cursor.x - 20,
          y: cursor.y - 20,
          scale: hovering ? 1.6 : 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="fixed top-0 left-0 w-10 h-10 border border-purple-400 rounded-full pointer-events-none z-[9998]"
      />

      {/* ================= BACKGROUND GLOW ================= */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: scrollGlow,
          background:
            "radial-gradient(circle at 70% 30%, rgba(160,90,255,0.25), transparent 65%)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx) var(--my), rgba(140,70,255,0.12), transparent 40%)",
        }}
      />

      {/* ================= READING PROGRESS ================= */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 origin-left z-50"
      />

      {/* ================= HERO ================= */}
      <section className="relative h-[600px] flex items-center justify-center text-center">

        <Image
          src="/SEOSEM.png"
          alt="SEO vs SEM"
          fill
          priority
          className="object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-[#020003]" />

        <div className="relative z-10 max-w-4xl px-6">
          <h1
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            SEO vs SEM: Key Differences & Which Strategy Wins?
          </h1>

          <p className="mt-6 text-lg text-purple-200/80">
            A complete guide to understanding organic growth, paid advertising,
            and how smart businesses combine both for maximum dominance.
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <article className="relative z-10 max-w-5xl mx-auto px-6 py-24 space-y-20">

        {/* INTRODUCTION */}
        <section>
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
        </section>

        {/* WHAT IS SEO */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              className="text-3xl font-semibold text-purple-300 mb-6"
            >
              What Is SEO?
            </h2>

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

          <div className="relative h-[350px]">
            <Image
              src="/se01.png"
              alt="SEO Growth Illustration"
              fill
              className="object-contain"
            />
          </div>
        </section>

        {/* WHAT IS SEM */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[350px] order-2 md:order-1">
            <Image
              src="/sem1.png"
              alt="SEM Ads Illustration"
              fill
              className="object-contain"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              className="text-3xl font-semibold text-pink-300 mb-6"
            >
              What Is SEM?
            </h2>

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
        </section>

         {/* COMPARISON TABLE */}
        <section>
          <h2 className="text-3xl font-semibold mb-8">
            SEO vs SEM: Core Differences
          </h2>

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
                <tr className="border-t border-purple-900/20">
                  <td className="p-4">Cost</td>
                  <td className="p-4">Free traffic (long-term investment)</td>
                  <td className="p-4">Paid per click</td>
                </tr>
                <tr className="border-t border-purple-900/20">
                  <td className="p-4">Speed</td>
                  <td className="p-4">Slow but sustainable</td>
                  <td className="p-4">Instant results</td>
                </tr>
                <tr className="border-t border-purple-900/20">
                  <td className="p-4">Duration</td>
                  <td className="p-4">Long-term growth</td>
                  <td className="p-4">Stops when ads stop</td>
                </tr>
                <tr className="border-t border-purple-900/20">
                  <td className="p-4">Trust</td>
                  <td className="p-4">Higher credibility</td>
                  <td className="p-4">Marked as ads</td>
                </tr>
                <tr className="border-t border-purple-900/20">
                  <td className="p-4">ROI</td>
                  <td className="p-4">Compounding</td>
                  <td className="p-4">Immediate but recurring cost</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* BENEFITS SEO */}
        <section>
          <h2 className="text-3xl font-semibold text-purple-300 mb-6">
            Benefits of SEO
          </h2>

          <ul className="space-y-4 text-purple-200/80">
            <li>• Sustainable organic traffic</li>
            <li>• Builds long-term authority</li>
            <li>• Lower acquisition cost over time</li>
            <li>• Long-lasting rankings</li>
            <li>• Strong compounding ROI</li>
          </ul>
        </section>

        {/* BENEFITS SEM */}
        <section>
          <h2 className="text-3xl font-semibold text-pink-300 mb-6">
            Benefits of SEM
          </h2>

          <ul className="space-y-4 text-purple-200/80">
            <li>• Instant traffic</li>
            <li>• Immediate leads</li>
            <li>• Targeted audience control</li>
            <li>• Budget flexibility</li>
            <li>• Measurable ROI</li>
          </ul>
        </section>

        {/* WHEN TO CHOOSE */}
        <section>
          <h2 className="text-3xl font-semibold mb-8">
            When Should You Choose SEO?
          </h2>

          <ul className="space-y-3 text-purple-200/80">
            <li>• Long-term growth goals</li>
            <li>• Brand authority building</li>
            <li>• Reducing future ad dependency</li>
          </ul>

          <h2 className="text-3xl font-semibold mt-12 mb-8">
            When Should You Choose SEM?
          </h2>

          <ul className="space-y-3 text-purple-200/80">
            <li>• Instant leads needed</li>
            <li>• Product launch</li>
            <li>• Short-term campaigns</li>
          </ul>
        </section>

        {/* SMART STRATEGY */}
        <section className="p-12 rounded-3xl bg-gradient-to-r from-purple-900/40 to-pink-900/30 border border-purple-800/40 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            The Smart Strategy: SEO + SEM
          </h2>

          <p className="text-purple-200/80 leading-8 text-lg">
            The best-performing businesses combine both.
            SEM drives instant traffic.
            SEO builds sustainable authority.
            Together they maximize long-term profitability.
          </p>
        </section>

        {/* COMMON MISTAKES */}
        <section>
          <h2 className="text-3xl font-semibold mb-8">
            Common Mistakes Businesses Make
          </h2>

          <ul className="space-y-3 text-purple-200/80">
            <li>• Expecting SEO results overnight</li>
            <li>• Running ads without conversion tracking</li>
            <li>• Ignoring website speed and UX</li>
            <li>• Targeting wrong keywords</li>
            <li>• No clear strategy</li>
          </ul>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-semibold mb-10">FAQs</h2>

          <div className="space-y-6 text-purple-200/80">
            <div>
              <h3 className="text-white font-semibold">Is SEO better than SEM?</h3>
              <p>SEO is better for long-term growth. SEM is better for immediate results.</p>
            </div>

            <div>
              <h3 className="text-white font-semibold">How long does SEO take?</h3>
              <p>Typically 3–6 months depending on industry competition.</p>
            </div>

            <div>
              <h3 className="text-white font-semibold">Is SEM expensive?</h3>
              <p>Cost depends on keyword competition and campaign optimization.</p>
            </div>
          </div>
        </section>

        
      </article>
    </div>
  )
}

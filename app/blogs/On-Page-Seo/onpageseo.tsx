"use client"

import Image from "next/image"
import { motion, useScroll, useSpring } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export default function OnPageSeoChecklist2026() {

  const pageRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const progressScale = useSpring(scrollYProgress)

  /* ================= CUSTOM CURSOR ================= */
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [scrollGlowOpacity, setScrollGlowOpacity] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
      document.documentElement.style.setProperty("--mx", `${e.clientX}px`)
      document.documentElement.style.setProperty("--my", `${e.clientY}px`)
    }

    const handleScroll = () => {
      setScrollGlowOpacity(Math.min(window.scrollY / 300, 1))
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      ref={pageRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#020003] via-[#070012] to-[#020003] text-white cursor-none"
    >

      {/* ================= CURSOR UI ================= */}
      <motion.div
        animate={{
          x: cursorPos.x - 6,
          y: cursorPos.y - 6,
          scale: isHovering ? 2 : 1,
        }}
        transition={{ type: "spring", stiffness: 600, damping: 35 }}
        className="fixed top-0 left-0 w-3 h-3 bg-purple-400 rounded-full pointer-events-none z-[9999]"
      />

      <motion.div
        animate={{
          x: cursorPos.x - 20,
          y: cursorPos.y - 20,
          scale: isHovering ? 1.6 : 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="fixed top-0 left-0 w-10 h-10 border border-purple-400 rounded-full pointer-events-none z-[9998]"
      />

      {/* ================= BACKGROUND EFFECTS ================= */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: scrollGlowOpacity,
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

      {/* ================= READING PROGRESS BAR ================= */}
      <motion.div
        style={{ scaleX: progressScale }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 origin-left z-50"
      />

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[600px] flex items-center justify-center text-center">

        <Image
          src="/onpageseo.png"
          alt="On Page SEO Checklist 2026"
          fill
          priority
          className="object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-[#020003]" />

        <div className="relative z-10 max-w-4xl px-6">
          <h1
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Complete On-Page SEO Checklist for 2026
          </h1>

          <p className="mt-6 text-lg text-purple-200/80">
            A systematic step-by-step guide to ranking higher with structured optimization,
            intent alignment, and modern search engine best practices.
          </p>
        </div>
      </section>

      {/* ================= BLOG CONTENT ================= */}
      <article className="relative z-10 max-w-5xl mx-auto px-6 py-24 space-y-20">

        <section>
          <p className="text-purple-200/80 leading-8 text-lg">
            Ranking in 2026 requires more than keywords. Search engines reward clarity,
            structure, intent alignment, and genuine value. This checklist breaks down
            every essential on-page optimization factor into practical, actionable steps.
          </p>
        </section>

        {[
          "Intent-Based Keyword Research",
          "Meta Title Optimization",
          "High-CTR Meta Description",
          "Heading Structure",
          "URL Optimization",
          "Content Optimization",
          "Smart Keyword Placement",
          "Internal Linking Strategy",
          "Image Optimization",
          "Mobile-First Optimization",
          "Core Web Vitals & Speed",
          "Schema Markup",
          "Content Freshness",
          "User Experience Signals",
        ].map((step, index) => (
          <section key={index}>
            <h2
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="text-3xl font-semibold text-purple-300 mb-6"
            >
              Step {index + 1}: {step}
            </h2>

            <ul className="space-y-3 text-purple-200/80 leading-8">
              <li>• Define clear intent and user purpose</li>
              <li>• Align structure with search expectations</li>
              <li>• Optimize naturally without overuse</li>
              <li>• Improve clarity and readability</li>
              <li>• Ensure technical precision</li>
            </ul>
          </section>
        ))}

        {/* COMMON MISTAKES */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">
            Common On-Page SEO Mistakes
          </h2>

          <ul className="space-y-3 text-purple-200/80">
            <li>❌ Keyword stuffing</li>
            <li>❌ Thin or duplicate content</li>
            <li>❌ Poor mobile experience</li>
            <li>❌ Slow loading pages</li>
            <li>❌ Missing schema markup</li>
            <li>❌ Weak internal linking</li>
          </ul>
        </section>

        {/* CONCLUSION */}
        <section className="p-12 rounded-3xl bg-gradient-to-r from-purple-900/40 to-pink-900/30 border border-purple-800/40 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Final Thoughts
          </h2>

          <p className="text-purple-200/80 leading-8 text-lg">
            Strong rankings are not accidental. They come from structured execution,
            technical clarity, user-first content, and consistent optimization.
            Follow this checklist for every page to build a foundation
            that search engines trust.
          </p>
        </section>

      </article>
    </div>
  )
}

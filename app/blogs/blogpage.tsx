'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function BlogsPage() {
  const [scrollGlow, setScrollGlow] = useState(0)
  const sectionsRef = useRef<HTMLElement[]>([])

  /* ================= MAGNETIC CURSOR ================= */
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY })
      document.documentElement.style.setProperty('--mx', `${e.clientX}px`)
      document.documentElement.style.setProperty('--my', `${e.clientY}px`)
    }

    const onScroll = () => {
      setScrollGlow(Math.min(window.scrollY / 300, 1))
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  /* ================= SCROLL REVEAL ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8')
          }
        })
      },
      { threshold: 0.15 }
    )

    sectionsRef.current.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  /* ================= BLOG DATA ================= */

  const featuredBlog = {
    id: 0,
    slug: 'seo-vs-sem',
    title:
      'SEO vs SEM: Which Is Better? | Digital Marketing Agency in India',
    description:
      "SEO vs SEM explained for beginners. Learn key differences and choose the right strategy.",
    image: '/SEOSEM.png',
    author: 'Yasmeen',
    readTime: '6 min read',
    date: 'Feb 2026',
  }

  const blogs = [
    {
      id: 1,
      slug: 'branding-strategy',
      title: 'High-Impact Branding Strategy',
      description: 'Design and messaging choices that actually convert users.',
      image: '/blog1.png',
      tag: 'Branding',
      meta: '5 min · Jan 2026',
    },
    {
      id: 2,
      slug: 'performance-marketing-guide',
      title: 'Performance Marketing Guide 2026',
      description: 'How to scale ads profitably using data-backed systems.',
      image: '/blog2.png',
      tag: 'Marketing',
      meta: '6 min · Feb 2026',
    },
    {
      id: 3,
      slug: 'social-media-growth',
      title: 'Social Media Growth Framework',
      description: 'Build authority and grow organically on modern platforms.',
      image: '/blog1.png',
      tag: 'Growth',
      meta: '4 min · Feb 2026',
    },
    {
      id: 4,
      slug: 'conversion-optimization',
      title: 'Conversion Rate Optimization Blueprint',
      description: 'Turn website visitors into paying customers.',
      image: '/blog2.png',
      tag: 'CRO',
      meta: '7 min · Mar 2026',
    },
    {
      id: 5,
      slug: 'content-marketing-strategy',
      title: 'Content Marketing Strategy That Works',
      description: 'Build trust and authority using strategic content.',
      image: '/blog1.png',
      tag: 'Content',
      meta: '5 min · Mar 2026',
    },
    {
      id: 6,
      slug: 'seo-ranking-system',
      title: 'SEO Ranking System for 2026',
      description: 'Step-by-step structure to rank faster on Google.',
      image: '/blog2.png',
      tag: 'SEO',
      meta: '8 min · Apr 2026',
    },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020003] text-white cursor-none">

      {/* ================= MAGNETIC CURSOR ================= */}
      <motion.div
        animate={{
          x: cursor.x - 6,
          y: cursor.y - 6,
          scale: hovering ? 2 : 1,
        }}
        transition={{ type: 'spring', stiffness: 600, damping: 35 }}
        className="fixed top-0 left-0 w-3 h-3 bg-purple-400 rounded-full pointer-events-none z-[9999]"
      />

      <motion.div
        animate={{
          x: cursor.x - 20,
          y: cursor.y - 20,
          scale: hovering ? 1.6 : 1,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="fixed top-0 left-0 w-10 h-10 border border-purple-400 rounded-full pointer-events-none z-[9998]"
      />

      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#020003] via-[#07000f] to-[#12001f]" />

      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: scrollGlow,
          background:
            'radial-gradient(circle at 70% 30%, rgba(160,90,255,0.25), transparent 65%)',
        }}
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(600px circle at var(--mx) var(--my), rgba(140,70,255,0.12), transparent 40%)',
        }}
      />

      {/* ================= HERO ================= */}
      <section
        ref={(el) => el && sectionsRef.current.push(el)}
        className="relative px-6 pt-20 pb-20 text-center md:px-12 lg:px-20 opacity-0 translate-y-8 transition-all duration-700"
      >
        <p className="mb-6 inline-block rounded-full bg-purple-900/30 px-4 py-2 text-sm font-medium text-purple-300">
          Blogs
        </p>

        <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
          Insights, Tips & Trends from Meta
          <span className="block">Master</span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-purple-200/70">
          Stay updated with the latest in marketing, design, and digital growth
        </p>
      </section>

      {/* ================= FEATURED BLOG ================= */}
      <section
        ref={(el) => el && sectionsRef.current.push(el)}
        className="relative px-6 pb-16 md:px-12 lg:px-20 opacity-0 translate-y-8 transition-all duration-700"
      >
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl border border-purple-900/40">
            <span className="absolute left-4 top-4 z-10 rounded-full bg-purple-700/80 px-3 py-1 text-xs font-semibold">
              FEATURED
            </span>

            <div className="relative aspect-[16/9] bg-black">
              <Image
                src={featuredBlog.image}
                alt={featuredBlog.title}
                fill
                priority
                className="object-cover transition-transform duration-500 hover:scale-[1.04]"
              />
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-bold">
              {featuredBlog.title}
            </h2>

            <p className="mb-4 text-purple-200/70">
              {featuredBlog.description}
            </p>

            <p className="mb-6 text-sm text-purple-400/60">
              {featuredBlog.readTime} · {featuredBlog.date}
            </p>

            <Link
              href={`/blogs/${featuredBlog.slug}`}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              className="flex items-center gap-2 font-semibold text-pink-500 hover:text-pink-400"
            >
              Read Blog <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= LATEST BLOGS ================= */}
      <section
        ref={(el) => el && sectionsRef.current.push(el)}
        className="relative px-6 pb-28 md:px-12 lg:px-20 opacity-0 translate-y-8 transition-all duration-700"
      >
        <h2 className="mb-12 text-3xl font-bold">Latest Blogs</h2>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group relative overflow-hidden rounded-2xl border border-purple-900/30 bg-[#07000f] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/9] bg-black">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
              </div>

              <div className="px-6 py-7">
                <span className="mb-3 inline-block rounded-full bg-purple-900/40 px-3 py-1 text-xs text-purple-300">
                  {blog.tag}
                </span>

                <h3 className="mb-3 text-lg font-semibold">
                  {blog.title}
                </h3>

                <p className="mb-4 text-sm text-purple-200/70">
                  {blog.description}
                </p>

                <p className="mb-5 text-xs text-purple-400/60">
                  {blog.meta}
                </p>

                <Link
                  href={`/blogs/${blog.slug}`}
                  onMouseEnter={() => setHovering(true)}
                  onMouseLeave={() => setHovering(false)}
                  className="flex items-center gap-2 text-sm font-medium text-pink-500 hover:text-pink-400"
                >
                  Read More <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

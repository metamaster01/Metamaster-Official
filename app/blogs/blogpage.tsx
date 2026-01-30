'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

export default function BlogsPage() {
  const [scrollGlow, setScrollGlow] = useState(0)
  const sectionsRef = useRef<HTMLDivElement[]>([])

  /* ================= SCROLL + MOUSE EFFECTS ================= */
  useEffect(() => {
    const onScroll = () => {
      setScrollGlow(Math.min(window.scrollY / 300, 1))
    }

    const onMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mx', `${e.clientX}px`)
      document.documentElement.style.setProperty('--my', `${e.clientY}px`)
    }

    window.addEventListener('scroll', onScroll)
    window.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMouseMove)
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

    sectionsRef.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const featuredBlog = {
    title: 'Boost Your Brand with Meta Marketing',
    description:
      "Discover 5 proven strategies to skyrocket your brand's online presence.",
    image: '/blog1.png',
    author: 'Arman Lutner',
    readTime: '4 min read',
    date: 'Jan 2026',
  }

  const blogs = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: 'High-Impact Branding Strategy',
    description:
      'Design and messaging choices that actually convert users.',
    image: i % 2 === 0 ? '/blog1.png' : '/blog2.png',
    tag: i % 2 === 0 ? 'Branding' : 'Marketing',
    meta: '5 min · Jan 2026',
  }))

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020003] text-white">
      {/* ================= BACKGROUND LAYERS ================= */}
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
          {/* IMAGE */}
          <div className="relative overflow-hidden rounded-2xl border border-purple-900/40">
            <span className="absolute left-4 top-4 z-10 rounded-full bg-purple-700/80 px-3 py-1 text-xs font-semibold">
              FEATURED
            </span>

            <div className="relative aspect-[16/9] bg-black">
              <Image
                src={featuredBlog.image}
                alt={featuredBlog.title}
                fill
                className="object-contain transition-transform duration-500 hover:scale-[1.04]"
                priority
              />
            </div>
          </div>

          {/* CONTENT */}
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

            <button className="flex items-center gap-2 font-semibold text-pink-500 hover:text-pink-400">
              Read Blog <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ================= DIVIDER ================= */}
      <div className="my-24 h-px w-full bg-gradient-to-r from-transparent via-purple-900/40 to-transparent" />

      {/* ================= LATEST BLOGS ================= */}
      <section
        ref={(el) => el && sectionsRef.current.push(el)}
        className="relative px-6 pb-28 md:px-12 lg:px-20 opacity-0 translate-y-8 transition-all duration-700"
      >
        <h2 className="mb-12 text-3xl font-bold">
          Latest Blogs
        </h2>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group relative overflow-hidden rounded-2xl border border-purple-900/30 bg-[#07000f] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Animated gradient border */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[linear-gradient(120deg,transparent,rgba(160,90,255,0.4),transparent)]" />

              {/* IMAGE */}
              <div className="relative aspect-[16/9] bg-black">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.05]"
                />
              </div>

              {/* CONTENT */}
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

                <button className="flex items-center gap-2 text-sm font-medium text-pink-500 hover:text-pink-400">
                  Read More <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

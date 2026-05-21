'use client'

// app/blogs/BlogsClient.tsx
// Client shell — handles cursor, scroll glow, hover states
// Data comes in as props from the server component (page.tsx)

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Clock, User } from 'lucide-react'
import { motion } from 'framer-motion'
import type { BlogCard } from '@/lib/blogs'

type Props = {
  featured: BlogCard | null
  blogs: BlogCard[]
}

function formatDate(iso: string | null): string {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('en-IN', {
    month: 'short',
    year: 'numeric',
  })
}

export default function BlogsClient({ featured, blogs }: Props) {
  const [scrollGlow, setScrollGlow] = useState(0)
  const sectionsRef = useRef<HTMLElement[]>([])
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY })
      document.documentElement.style.setProperty('--mx', `${e.clientX}px`)
      document.documentElement.style.setProperty('--my', `${e.clientY}px`)
    }
    const onScroll = () => setScrollGlow(Math.min(window.scrollY / 300, 1))

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

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

  const addSection = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) sectionsRef.current.push(el)
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020003] text-white cursor-none">

      {/* ── MAGNETIC CURSOR ── */}
      <motion.div
        animate={{ x: cursor.x - 6, y: cursor.y - 6, scale: hovering ? 2 : 1 }}
        transition={{ type: 'spring', stiffness: 600, damping: 35 }}
        className="fixed top-0 left-0 w-3 h-3 bg-purple-400 rounded-full pointer-events-none z-[9999]"
      />
      <motion.div
        animate={{ x: cursor.x - 20, y: cursor.y - 20, scale: hovering ? 1.6 : 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="fixed top-0 left-0 w-10 h-10 border border-purple-400 rounded-full pointer-events-none z-[9998]"
      />

      {/* ── BACKGROUND ── */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#020003] via-[#07000f] to-[#12001f]" />
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: scrollGlow,
          background: 'radial-gradient(circle at 70% 30%, rgba(160,90,255,0.25), transparent 65%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(600px circle at var(--mx) var(--my), rgba(140,70,255,0.12), transparent 40%)',
        }}
      />

      {/* ── HERO ── */}
      <section
        ref={addSection}
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

      {/* ── FEATURED BLOG ── */}
      {featured ? (
        <section
          ref={addSection}
          className="relative px-6 pb-16 md:px-12 lg:px-20 opacity-0 translate-y-8 transition-all duration-700"
        >
          <div className="grid items-center gap-14 md:grid-cols-2">
            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl border border-purple-900/40">
              <span className="absolute left-4 top-4 z-10 rounded-full bg-purple-700/80 px-3 py-1 text-xs font-semibold">
                FEATURED
              </span>
              <div className="relative aspect-[16/9] bg-black">
                {featured.cover_image_url ? (
                  <Image
                    src={featured.cover_image_url}
                    alt={featured.title}
                    fill
                    priority
                    unoptimized
                    className="object-cover transition-transform duration-500 hover:scale-[1.04]"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 to-pink-900/30" />
                )}
              </div>
            </div>

            {/* Content */}
            <div>
              {/* Tags */}
              {featured.tags.length > 0 && (
                <div className="mb-4 flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className="rounded-full bg-purple-900/40 px-3 py-1 text-xs text-purple-300"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              )}

              <h2 className="mb-4 text-3xl font-bold">{featured.title}</h2>

              {featured.description && (
                <p className="mb-4 text-purple-200/70">{featured.description}</p>
              )}

              {/* Meta */}
              <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-purple-400/60">
                {featured.author?.full_name && (
                  <span className="flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5" />
                    {featured.author.full_name}
                  </span>
                )}
                {featured.read_time_minutes && (
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {featured.read_time_minutes} min read
                  </span>
                )}
                {featured.published_at && (
                  <span>{formatDate(featured.published_at)}</span>
                )}
              </div>

              <Link
                href={`/blogs/${featured.slug}`}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                className="flex items-center gap-2 font-semibold text-pink-500 hover:text-pink-400 transition-colors"
              >
                Read Blog <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      {/* ── LATEST BLOGS ── */}
      <section
        ref={addSection}
        className="relative px-6 pb-28 md:px-12 lg:px-20 opacity-0 translate-y-8 transition-all duration-700"
      >
        <h2 className="mb-12 text-3xl font-bold">Latest Blogs</h2>

        {blogs.length === 0 ? (
          <p className="text-purple-200/50 text-lg">
            No blogs published yet. Check back soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                onHover={setHovering}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

// ── Blog Card Component ────────────────────────────────────────────────────────

function BlogCard({
  blog,
  onHover,
}: {
  blog: BlogCard
  onHover: (v: boolean) => void
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-purple-900/30 bg-[#07000f] transition-all duration-300 hover:-translate-y-1">
      {/* Cover image */}
      <div className="relative aspect-[16/9] bg-black">
        {blog.cover_image_url ? (
          <Image
            src={blog.cover_image_url}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-pink-900/20" />
        )}
      </div>

      <div className="px-6 py-7">
        {/* Tags */}
        {blog.tags.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {blog.tags.map((tag) => (
              <span
                key={tag.id}
                className="rounded-full bg-purple-900/40 px-3 py-1 text-xs text-purple-300"
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}

        <h3 className="mb-3 text-lg font-semibold leading-snug">{blog.title}</h3>

        {blog.description && (
          <p className="mb-4 text-sm text-purple-200/70 line-clamp-2">
            {blog.description}
          </p>
        )}

        {/* Meta row */}
        <div className="mb-5 flex flex-wrap items-center gap-3 text-xs text-purple-400/60">
          {blog.author?.full_name && (
            <span className="flex items-center gap-1">
              <User className="h-3 w-3" />
              {blog.author.full_name}
            </span>
          )}
          {blog.read_time_minutes && (
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {blog.read_time_minutes} min
            </span>
          )}
          {blog.published_at && <span>{formatDate(blog.published_at)}</span>}
        </div>

        <Link
          href={`/blogs/${blog.slug}`}
          onMouseEnter={() => onHover(true)}
          onMouseLeave={() => onHover(false)}
          className="flex items-center gap-2 text-sm font-medium text-pink-500 hover:text-pink-400 transition-colors"
        >
          Read More <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

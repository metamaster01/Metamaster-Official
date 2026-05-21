'use client'

// app/blogs/[slug]/BlogDetailClient.tsx
// The full blog detail page — your aesthetic vision:
// hero cover → title + meta → sticky TOC (20% sidebar) → alternating body sections → related blogs

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Clock, User, ArrowLeft, ChevronUp } from 'lucide-react'
import { motion, useScroll, useSpring } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import type { BlogDetail, BlogCard, BlogSection } from '@/lib//blogs'

type Props = {
  blog: BlogDetail
  relatedBlogs: BlogCard[]
}

function formatDate(iso: string | null): string {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

// ── TOC: extract headings from sections ───────────────────────────────────────
function buildTOC(sections: BlogSection[]) {
  return sections
    .filter((s) => s.heading)
    .map((s) => ({
      id: `section-${s.section_order}`,
      label: s.heading!,
    }))
}

export default function BlogDetailClient({ blog, relatedBlogs }: Props) {

  // ── Cursor ──────────────────────────────────────────────────────────────────
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)
  const [scrollGlow, setScrollGlow] = useState(0)
  const [activeSection, setActiveSection] = useState<string>('')
  const [showScrollTop, setShowScrollTop] = useState(false)

  // ── Reading progress ────────────────────────────────────────────────────────
  const { scrollYProgress } = useScroll()
  const progressScale = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })

  const toc = buildTOC(blog.sections)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY })
      document.documentElement.style.setProperty('--mx', `${e.clientX}px`)
      document.documentElement.style.setProperty('--my', `${e.clientY}px`)
    }
    const scroll = () => {
      setScrollGlow(Math.min(window.scrollY / 300, 1))
      setShowScrollTop(window.scrollY > 600)
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('scroll', scroll)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('scroll', scroll)
    }
  }, [])

  // ── IntersectionObserver for active TOC item ─────────────────────────────
  useEffect(() => {
    if (toc.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-20% 0% -60% 0%' }
    )
    toc.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [toc])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="relative min-h-screen overflow-hidden bg-purple-600 text-white cursor-none">

      <div className="py-24">

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

      {/* ── READING PROGRESS BAR ── */}
      <motion.div
        style={{ scaleX: progressScale }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 origin-left z-50"
      />

      {/* ── BACKGROUND ── */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#07000f] via-[#020003] to-[#020003]" />
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: scrollGlow,
          background: 'radial-gradient(circle at 70% 20%, rgba(160,90,255,0.2), transparent 60%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(500px circle at var(--mx) var(--my), rgba(140,70,255,0.09), transparent 40%)',
        }}
      />

      {/* ── HERO IMAGE ── */}
      <div className="relative h-[60vh] min-h-[600px] w-full py-16">
        {blog.cover_image_url ? (
          <Image
            src={blog.cover_image_url}
            alt={blog.title}
            fill
            priority
            className="object-cover"
            unoptimized
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950 to-pink-950/30" />
        )}
        {/* Gradient fade into page bg */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-[#020003]" />

        {/* Back link — overlaid on hero */}
        <div className="absolute top-6 left-6 z-10">
          <Link
            href="/blogs"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-sm text-white/80 backdrop-blur-sm hover:border-purple-400/50 hover:text-white transition-all"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All Blogs
          </Link>
        </div>
      </div>

      {/* ── TITLE + META BLOCK ── */}
      <div className="relative z-10 -mt-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl">

          {/* Tags */}
          {blog.tags.length > 0 && (
            <div className="mb-5 flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag.id}
                  className="rounded-full border border-purple-700/40 bg-purple-900/30 px-3 py-1 text-xs font-medium text-purple-300"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          )}

          <h1 className="mb-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            {blog.title}
          </h1>

          {blog.description && (
            <p className="mb-8 max-w-2xl text-lg text-purple-200/70 leading-relaxed">
              {blog.description}
            </p>
          )}

          {/* Author + meta row */}
          <div className="mb-10 flex flex-wrap items-center gap-6 border-b border-purple-900/30 pb-8">
            {blog.author && (
              <div className="flex items-center gap-3">
                {blog.author.avatar_url ? (
                  <Image
                    src={blog.author.avatar_url}
                    alt={blog.author.full_name ?? 'Author'}
                    width={40}
                    height={40}
                    className="rounded-full object-cover ring-2 ring-purple-700/40"
                    unoptimized
                  />
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-900/50 ring-2 ring-purple-700/40">
                    <User className="h-5 w-5 text-purple-300" />
                  </div>
                )}
                <div>
                  <p className="text-sm font-medium text-white">
                    {blog.author.full_name ?? 'MetaMaster Team'}
                  </p>
                  {blog.author.bio && (
                    <p className="text-xs text-purple-400/60 line-clamp-1">
                      {blog.author.bio}
                    </p>
                  )}
                </div>
              </div>
            )}

            <div className="flex items-center gap-5 text-sm text-purple-400/60">
              {blog.published_at && (
                <span>{formatDate(blog.published_at)}</span>
              )}
              {blog.read_time_minutes && (
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {blog.read_time_minutes} min read
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── CONTENT + TOC LAYOUT ── */}
      <div className="relative z-10 px-6 pb-24 md:px-12 lg:px-20">
        <div className="flex gap-16 lg:gap-20">

          {/* ── MAIN CONTENT (80%) ── */}
          <article className="min-w-0 flex-1">
            {blog.sections.length === 0 ? (
              <p className="text-purple-200/50">Content coming soon.</p>
            ) : (
              <div className="space-y-16">
                {blog.sections.map((section) => (
                  <BlogSectionBlock
                    key={section.id}
                    section={section}
                    onHover={setHovering}
                  />
                ))}
              </div>
            )}
          </article>

          {/* ── STICKY SIDEBAR (20%) ── */}
          {(toc.length > 0 || relatedBlogs.length > 0) && (
            <aside className="hidden lg:block w-[260px] shrink-0">
              <div className="sticky top-8 space-y-10">

                {/* Table of Contents */}
                {toc.length > 0 && (
                  <div>
                    <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-purple-400/60">
                      Contents
                    </p>
                    <nav className="space-y-1">
                      {toc.map(({ id, label }) => (
                        <a
                          key={id}
                          href={`#${id}`}
                          onMouseEnter={() => setHovering(true)}
                          onMouseLeave={() => setHovering(false)}
                          className={`block rounded-lg px-3 py-2 text-sm transition-all duration-200 ${
                            activeSection === id
                              ? 'bg-purple-900/40 text-purple-200'
                              : 'text-purple-400/60 hover:text-purple-300 hover:bg-purple-900/20'
                          }`}
                        >
                          {label}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}

                {/* Divider */}
                {toc.length > 0 && relatedBlogs.length > 0 && (
                  <div className="border-t border-purple-900/30" />
                )}

                {/* Other blogs to read */}
                {relatedBlogs.length > 0 && (
                  <div>
                    <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-purple-400/60">
                      Also Read
                    </p>
                    <div className="space-y-4">
                      {relatedBlogs.map((rb) => (
                        <Link
                          key={rb.id}
                          href={`/blogs/${rb.slug}`}
                          onMouseEnter={() => setHovering(true)}
                          onMouseLeave={() => setHovering(false)}
                          className="group block rounded-xl border border-purple-900/20 bg-[#07000f] p-3 transition-all hover:border-purple-700/40"
                        >
                          {rb.cover_image_url && (
                            <div className="relative mb-2.5 aspect-[16/9] overflow-hidden rounded-lg">
                              <Image
                                src={rb.cover_image_url}
                                alt={rb.title}
                                fill
                                unoptimized
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                            </div>
                          )}
                          <p className="text-xs font-medium text-purple-200/80 leading-snug line-clamp-2 group-hover:text-white transition-colors">
                            {rb.title}
                          </p>
                          {rb.read_time_minutes && (
                            <p className="mt-1 text-[10px] text-purple-400/50">
                              {rb.read_time_minutes} min read
                            </p>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          )}
        </div>
      </div>

      {/* ── RELATED BLOGS (mobile / full-width below content) ── */}
      {relatedBlogs.length > 0 && (
        <section className="relative z-10 border-t border-purple-900/20 px-6 py-20 md:px-12 lg:px-20">
          <h2 className="mb-10 text-2xl font-bold">More to Read</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {relatedBlogs.map((rb) => (
              <Link
                key={rb.id}
                href={`/blogs/${rb.slug}`}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                className="group overflow-hidden rounded-2xl border border-purple-900/30 bg-[#07000f] transition-all hover:-translate-y-1"
              >
                <div className="relative aspect-[16/9] bg-black">
                  {rb.cover_image_url ? (
                    <Image
                      src={rb.cover_image_url}
                      alt={rb.title}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-900/10" />
                  )}
                </div>
                <div className="p-5">
                  {rb.tags.length > 0 && (
                    <span className="mb-2 inline-block rounded-full bg-purple-900/40 px-2.5 py-0.5 text-[10px] text-purple-300">
                      {rb.tags[0].name}
                    </span>
                  )}
                  <h3 className="text-sm font-semibold leading-snug text-white/90 line-clamp-2 group-hover:text-white">
                    {rb.title}
                  </h3>
                  <p className="mt-3 flex items-center gap-1 text-xs font-medium text-pink-500">
                    Read More <ChevronRight className="h-3 w-3" />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── SCROLL TO TOP ── */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={scrollToTop}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          className="fixed bottom-8 right-8 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-purple-700/50 bg-purple-900/60 text-purple-300 backdrop-blur-sm hover:bg-purple-800/80 transition-all"
        >
          <ChevronUp className="h-4 w-4" />
        </motion.button>
      )}
    </div>
    </div>
  )
}

// ── Blog Section Renderer ──────────────────────────────────────────────────────

function BlogSectionBlock({
  section,
  onHover,
}: {
  section: BlogSection
  onHover: (v: boolean) => void
}) {
  const { type, heading, body, image_url, image_caption, image_alt, section_order } = section
  const sectionId = `section-${section_order}`

  return (
    <div id={sectionId} className="scroll-mt-8">
      {/* Heading */}
      {heading && (
        <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">
          {heading}
        </h2>
      )}

      {/* Text-only */}
      {type === 'text' && body && (
        <MarkdownBody body={body} />
      )}

      {/* Image-only */}
      {type === 'image' && image_url && (
        <BlogImage
          url={image_url}
          alt={image_alt ?? heading ?? ''}
          caption={image_caption}
          
        />
      )}

      {/* Text + Image alternating */}
      {type === 'text_image' && (
        <div
          className={`flex flex-col gap-8 lg:flex-row ${
            section_order % 2 === 0 ? '' : 'lg:flex-row-reverse'
          }`}
        >
          {body && (
            <div className="flex-1 min-w-0">
              <MarkdownBody body={body} />
            </div>
          )}
          {image_url && (
            <div className="w-full lg:w-[45%] shrink-0">
              <BlogImage
                url={image_url}
                alt={image_alt ?? heading ?? ''}
                caption={image_caption}
                
              />
            </div>
          )}
        </div>
      )}

      {/* Quote */}
      {type === 'quote' && body && (
        <blockquote className="relative border-l-2 border-pink-500 pl-6 py-2">
          <div className="absolute -left-1 top-0 h-full w-[2px] bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
          <p className="text-xl italic text-purple-200/90 leading-relaxed">
            {body}
          </p>
          {heading && (
            <cite className="mt-3 block text-sm text-purple-400/60 not-italic">
              — {heading}
            </cite>
          )}
        </blockquote>
      )}

      {/* Callout */}
      {type === 'callout' && (
        <div className="rounded-2xl border border-purple-700/30 bg-gradient-to-r from-purple-900/30 to-pink-900/20 p-8">
          {heading && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-purple-400">
              {heading}
            </p>
          )}
          {body && <MarkdownBody body={body} />}
        </div>
      )}
    </div>
  )
}

// ── Markdown renderer ──────────────────────────────────────────────────────────

function MarkdownBody({ body }: { body: string }) {
  return (
    <div className="prose prose-invert prose-purple max-w-none
      prose-p:text-purple-200/80 prose-p:leading-8
      prose-h3:text-white prose-h3:font-semibold
      prose-strong:text-purple-200
      prose-li:text-purple-200/80
      prose-a:text-pink-400 prose-a:no-underline hover:prose-a:text-pink-300
      prose-code:text-purple-300 prose-code:bg-purple-900/30 prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm
      prose-blockquote:border-purple-700 prose-blockquote:text-purple-300/80
    ">
      <ReactMarkdown>{body}</ReactMarkdown>
    </div>
  )
}

// ── Image block ────────────────────────────────────────────────────────────────

function BlogImage({
  url,
  alt,
  caption,
}: {
  url: string
  alt: string
  caption: string | null
}) {
  return (
    <figure className="overflow-hidden rounded-2xl">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
        <Image
          src={url}
          alt={alt}
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-xs text-purple-400/60">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

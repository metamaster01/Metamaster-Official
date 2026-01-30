'use client'

import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

export default function BlogsPage() {
  const featuredBlog = {
    title: 'Boost Your Brand with Meta Marketing',
    description:
      "Discover 5 proven strategies to skyrocket your brand's online presence.",
    image: '/blog1.png',
    author: 'Arman Lutner',
    readTime: '4-minute read',
  }

  const blogs = [
    {
      id: 1,
      title: 'Branded Merchandise: How to Balance Budget, Quality, and...',
      description:
        'Creating the biggest impact with your branded merch means balancing budget, quality, and quantity.',
      image: '/blog1.png',
    },
    {
      id: 2,
      title: 'How Design Impacts Brand Trust',
      description:
        'Strong visual identity builds credibility and long-term trust with customers.',
      image: '/blog2.png',
    },
    {
      id: 3,
      title: 'Marketing Funnels That Convert',
      description:
        'Learn how to build funnels that turn visitors into loyal customers.',
      image: '/blog1.png',
    },
    {
      id: 4,
      title: 'Social Media Growth Strategies',
      description:
        'Proven techniques to grow engagement organically across platforms.',
      image: '/blog2.png',
    },
    {
      id: 5,
      title: 'Brand Consistency Across Channels',
      description:
        'Why consistent branding increases recall and conversions.',
      image: '/blog1.png',
    },
    {
      id: 6,
      title: 'Content That Actually Sells',
      description:
        'Create content that connects emotionally and drives action.',
      image: '/blog2.png',
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* ================= HERO ================= */}
      <div className="px-6 pt-20 pb-20 text-center md:px-12 lg:px-20">
        <p className="mb-6 inline-block rounded-full bg-purple-900/40 px-4 py-2 text-sm font-medium text-purple-400">
          Blogs
        </p>

        <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Insights, Tips & Trends from Meta Master
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-gray-400">
          Stay updated with the latest in marketing, design, and digital growth
        </p>
      </div>

      {/* ================= FEATURED BLOG ================= */}
      {/* ⛔ NO TOP GAP HERE */}
      <div className="px-6 pt-0 pb-12 md:px-12 lg:px-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* IMAGE */}
          <div className="overflow-hidden rounded-2xl">
            <div className="relative aspect-[16/9]">
              <Image
                src={featuredBlog.image}
                alt={featuredBlog.title}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <h2 className="mb-4 text-3xl font-bold text-white">
              {featuredBlog.title}
            </h2>

            <p className="mb-4 text-[#B5B5B5]">
              {featuredBlog.description}
            </p>

            <p className="mb-6 text-sm text-gray-400">
              By {featuredBlog.author} • {featuredBlog.readTime}
            </p>

            <button className="flex items-center gap-2 font-semibold text-pink-500 hover:text-pink-400">
              Read Blog <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ================= LATEST BLOGS ================= */}
      {/* ⛔ NO TOP GAP HERE */}
      <div className="px-6 pt-0 pb-20 md:px-12 lg:px-20">
        <h2 className="mb-10 text-3xl font-bold text-white">
          Latest Blogs
        </h2>

        {/* 2 columns × 3 rows */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0f] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
            >
              {/* IMAGE — NO GAP, PERFECT FIT */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* CONTENT */}
              <div className="px-6 py-6">
                <h3 className="mb-4 text-lg font-semibold text-white">
                  {blog.title}
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-[#B5B5B5]">
                  {blog.description}
                </p>

                <button className="flex items-center gap-2 text-sm font-medium text-pink-500 hover:text-pink-400">
                  Read More <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


'use client'

import { ChevronRight } from 'lucide-react'

export default function BlogsPage() {
  const featuredBlog = {
    title: 'Boost Your Brand with Meta Marketing',
    description:
      "Discover 5 proven strategies to skyrocket your brand's online presence.",
    author: 'Arman Lutner',
    readTime: '4-minute read',
  }

  const blogs = [
    {
      id: 1,
      title: 'Branded Merchandise: How to Balance Budget, Quality, and...',
      description:
        'Creating the biggest impact with your branded merch means balancing budget, quality, and quantity',
    },
    {
      id: 2,
      title: 'Branded Merchandise: How to Balance Budget, Quality, and...',
      description:
        'Creating the biggest impact with your branded merch means balancing budget, quality, and quantity',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950">
      {/* ================= HERO ================= */}
      <div className="px-6 py-20 text-center md:px-12 lg:px-20">
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
      <div className="px-6 py-12 md:px-12 lg:px-20">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-500">
          <div className="flex flex-col items-center gap-10 p-8 md:flex-row">
            {/* Illustration */}
            <div className="w-full md:w-1/2">
              <div className="h-72 rounded-xl bg-yellow-500 p-6">
                <svg
                  viewBox="0 0 300 250"
                  className="h-full w-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="30" y="40" width="140" height="170" rx="12" fill="white" stroke="black" strokeWidth="2" />
                  <ellipse cx="100" cy="100" rx="40" ry="35" fill="#FFD700" stroke="black" strokeWidth="2" />
                  <rect x="75" y="145" width="30" height="25" rx="3" fill="#FF1493" stroke="black" strokeWidth="2" />

                  <rect x="150" y="40" width="120" height="170" rx="12" fill="white" stroke="black" strokeWidth="2" />
                  <line x1="165" y1="60" x2="220" y2="60" stroke="black" strokeWidth="2" />
                  <line x1="165" y1="80" x2="220" y2="80" stroke="black" strokeWidth="2" />
                  <line x1="165" y1="100" x2="220" y2="100" stroke="black" strokeWidth="2" />

                  <path d="M140 120 Q150 110 160 120" stroke="#00CED1" strokeWidth="3" fill="none" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 md:text-3xl">
                {featuredBlog.title}
              </h2>

              <p className="mb-6 text-base text-gray-700">
                {featuredBlog.description}
              </p>

              <p className="mb-4 text-sm text-gray-600">
                By {featuredBlog.author} • {featuredBlog.readTime}
              </p>

              <button className="flex items-center gap-2 font-semibold text-purple-700 hover:text-purple-800">
                Read Blog
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= LATEST BLOGS ================= */}
      <div className="px-6 py-20 md:px-12 lg:px-20">
        <h2 className="mb-12 text-3xl font-bold text-white">
          Latest Blogs
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group overflow-hidden rounded-xl bg-slate-900/60 backdrop-blur transition hover:bg-slate-900/80"
            >
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900 text-gray-300">
                Blog Visual
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-lg font-semibold text-white group-hover:text-purple-300">
                  {blog.title}
                </h3>

                <p className="mb-4 text-sm text-gray-400">
                  {blog.description}
                </p>

                <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300">
                  Read More
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

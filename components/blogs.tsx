"use client";

import React, { useEffect, useRef, useState } from "react";

type Blog = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const blogs: Blog[] = [
  {
    id: 1,
    title: "Branded Merchandise: How to Balance Budget, Quality, and...",
    description:
      "Creating the biggest impact with your branded merch means balancing budget, quality, and quantity.",
    image: "/blog1.png",
  },
  {
    id: 2,
    title: "Branded Merchandise: How to Balance Budget, Quality, and...",
    description:
      "Creating the biggest impact with your branded merch means balancing budget, quality, and quantity.",
    image: "/blog2.png",
  },
];

export default function Blogs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  /* ===== SCROLL OBSERVER ===== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );
    sectionRef.current && observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      onMouseMove={(e) =>
        setMouse({
          x: e.clientX / window.innerWidth - 0.5,
          y: e.clientY / window.innerHeight - 0.5,
        })
      }
      className="relative overflow-hidden px-6 py-36 text-white
      bg-gradient-to-r from-[#12001f] via-[#0e001a] to-[#12001f]"
    >
      {/* ===== AURA ===== */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700"
        style={{
          background: `radial-gradient(
            700px at ${(mouse.x + 0.5) * 100}% ${(mouse.y + 0.5) * 100}%,
            rgba(168, 85, 247, 0.22),
            transparent 60%
          )`,
          opacity: visible ? 1 : 0,
        }}
      />

      {/* ===== HEADER ===== */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <h2
          className={`text-6xl font-extrabold leading-none
          transition-all duration-1000 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"}`}
        >
          Blogs
        </h2>

        {/* LEFT ALIGNED CONTENT */}
        <div
          className={`flex flex-col items-start text-gray-300
          transition-all duration-1000 delay-200
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"}`}
        >
          <p className="max-w-md mb-8 text-lg leading-relaxed">
            One blog, many voices. A look behind the scenes. We give you a glimpse
            into our creative process and how our projects come to life.
          </p>

          {/* LEFT ALIGNED MAGNETIC BUTTON */}
          <button
            style={{
              transform: `translate(${mouse.x * 10}px, ${mouse.y * 10}px)`,
            }}
            className="relative rounded-full px-9 py-3 bg-white text-black font-medium
            transition-transform duration-200 ease-out"
          >
            All blogs
          </button>
        </div>
      </div>

      {/* ===== BLOG CARDS ===== */}
      <div className="relative max-w-7xl mx-auto mt-28 grid grid-cols-1 md:grid-cols-2 gap-16 perspective-[1400px]">
        {blogs.map((blog, i) => (
          <div
            key={blog.id}
            style={{
              transitionDelay: `${400 + i * 200}ms`,
              transform: `
                rotateX(${mouse.y * -10}deg)
                rotateY(${mouse.x * 10}deg)
              `,
            }}
            className={`group relative rounded-3xl overflow-hidden
            bg-white/5 backdrop-blur-2xl border border-white/10
            transition-all duration-[1200ms] ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-32"}`}
          >
            {/* LIGHT */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">
              <div className="absolute -inset-32 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20 rotate-12" />
            </div>

            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className={`w-full h-64 object-cover transition-all duration-1000
                ${visible ? "scale-100" : "scale-125"}
                group-hover:scale-110`}
              />
            </div>

            {/* CONTENT */}
            <div className="relative p-9">
              <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-400 transition">
                {blog.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {blog.description}
              </p>
              <div className="mt-7 text-sm tracking-widest text-white/70 group-hover:text-white transition">
                READ ARTICLE →
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* NOISE */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/noise.png')]" />
    </section>
  );
}

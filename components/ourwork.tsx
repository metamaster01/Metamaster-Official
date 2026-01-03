"use client";

import React from "react";
import { motion } from "framer-motion";

type WorkItem = {
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  alt: string;
};

const works: WorkItem[] = [
  {
    title: "Zaina Collection",
    subtitle: "Fashion eCommerce",
    desc: "A digital store that feels like luxury.",
    image:
      "https://images.unsplash.com/photo-1520975958225-35f45c8a2d8c?auto=format&fit=crop&w=1600&q=80",
    alt: "Fashion portrait in warm tones",
  },
  {
    title: "Xplore events",
    subtitle: "Event management",
    desc: "a digital experience that celebrates every moment.",
    image:
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1600&q=80",
    alt: "Concert scene with warm lighting",
  },
  {
    title: "Chakra Crystals",
    subtitle: "Wellness",
    desc: "Real creators, real growth.",
    image:
      "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?auto=format&fit=crop&w=1600&q=80",
    alt: "Wellness scene with incense",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function OurWorksSection() {
  return (
    <section className="relative w-full bg-[#0B0C0F] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 pb-14 pt-14 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between"
        >
          <motion.h2
            variants={item}
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Our Works
          </motion.h2>

          <motion.div variants={item} className="max-w-xl md:pt-1 md:text-right">
            <p className="text-sm leading-6 text-white/70 sm:text-[15px]">
              We don’t just deliver services — we deliver results. From startups
              to established brands, Meta Master has partnered with 50+
              businesses across industries to transform their digital presence.
            </p>

            <div className="mt-6 md:flex md:justify-end">
              <motion.a
                href="#"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black shadow-sm ring-1 ring-white/10 transition hover:bg-white/95"
              >
                See more
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {works.map((w) => (
            <motion.article
              key={w.title}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="group relative rounded-2xl bg-white/[0.04] ring-1 ring-white/10 backdrop-blur-md"
            >
              <div className="relative overflow-hidden rounded-2xl p-4">
                <div className="relative overflow-hidden rounded-xl">
                  <motion.img
                    src={w.image}
                    alt={w.alt}
                    className="h-44 w-full rounded-xl object-cover sm:h-48"
                    initial={false}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-black/35 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <div className="mt-4 space-y-2">
                  <div className="text-base font-medium tracking-tight">
                    {w.title} –{" "}
                    <span className="font-normal text-white/85">
                      {w.subtitle}
                    </span>
                  </div>
                  <p className="text-sm leading-6 text-white/65">{w.desc}</p>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(1200px_circle_at_50%_0%,rgba(255,255,255,0.08),transparent_55%)]" />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

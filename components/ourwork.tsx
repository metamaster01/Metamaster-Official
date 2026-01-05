"use client";

import React from "react";
import Image from "next/image";
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
    image: "/work1.png",
    alt: "Fashion portrait",
  },
  {
    title: "Xplore Events",
    subtitle: "Event management",
    desc: "A digital experience that celebrates every moment.",
    image: "/work2.png",
    alt: "Event crowd",
  },
  {
    title: "Chakra Crystals",
    subtitle: "Wellness",
    desc: "Real creators, real growth.",
    image: "/work3.png",
    alt: "Wellness crystals",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const MotionImage = motion(Image);

export default function OurWorksSection() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#12001f] via-[#0e001a] to-[#12001f] text-white overflow-hidden">
      {/* Top fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/50 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between"
        >
          <motion.h2
            variants={item}
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Our Works
          </motion.h2>

          <motion.div variants={item} className="max-w-xl md:text-right">
            <p className="text-sm leading-6 text-white/70 sm:text-[15px]">
              We don’t just deliver services — we deliver results. From startups
              to established brands, we help businesses build strong digital
              identities.
            </p>

            <div className="mt-6 md:flex md:justify-end">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black shadow-lg transition"
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
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {works.map((w) => (
            <motion.article
              key={w.title}
              variants={item}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 240, damping: 20 }}
              className="group relative rounded-2xl bg-white/[0.05] ring-1 ring-white/10 backdrop-blur-xl"
            >
              <div className="relative overflow-hidden rounded-2xl p-4">
                <div className="relative overflow-hidden rounded-xl">
                  <MotionImage
                    src={w.image}
                    alt={w.alt}
                    width={1600}
                    height={900}
                    className="h-48 w-full rounded-xl object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>

                <div className="mt-4 space-y-2">
                  <h3 className="text-base font-medium tracking-tight">
                    {w.title}{" "}
                    <span className="font-normal text-white/70">
                      – {w.subtitle}
                    </span>
                  </h3>
                  <p className="text-sm text-white/60">{w.desc}</p>
                </div>
              </div>

              {/* Glow hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_50%_0%,rgba(255,255,255,0.12),transparent_55%)]" />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

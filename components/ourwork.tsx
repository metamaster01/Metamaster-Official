"use client";

import React from "react";
import Image from "next/image";
import { easeInOut, motion } from "framer-motion";
import Link from "next/link"

const MotionLink = motion(Link);

type WorkItem = {
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  alt: string;
  slug: string; 
};

const works: WorkItem[] = [
  {
    title: "Zaina Collection",
    subtitle: "Fashion eCommerce",
    desc: "A digital store that feels like luxury.",
    image: "/projects/zaina-collection.png",
    alt: "Fashion portrait",
    slug: "zaina-collection",
  },
  {
    title: "Xplore Events",
    subtitle: "Event Management",
    desc: "A digital experience that celebrates every moment.",
    image: "/projects/xplore-events.png",
    alt: "Event crowd",
    slug: "xplore-events",
  },
  {
    title: "Chakra Crystals",
    subtitle: "Wellness",
    desc: "Real creators, real growth.",
    image: "/projects/chakra-crystals.png",
    alt: "Wellness crystals",
    slug: "chakra-crystals",
  },
  {
    title: "Bliss Events",
    subtitle: "Event Management & Wedding Planning",
    desc: "360° digital marketing, social media management & Meta Ads lead generation for a premium event brand.",
    image: "/projects/bliss-events.png",
    alt: "Wedding event planning",
    slug: "bliss-events",
  },
  {
    title: "Trupti Warjurkar",
    subtitle: "Personal Brand / Coach",
    desc: "Complete digital ecosystem including branding, Meta Ads, website development with LMS & content systems.",
    image: "/projects/trupti-warjurkar.png",
    alt: "Personal coach branding",
    slug: "trupti-warjurkar",
  },
  {
    title: "Coach Neelu Taneja",
    subtitle: "Personal Brand / YouTube Growth",
    desc: "Instagram & YouTube growth strategy with structured content systems and personal brand positioning.",
    image: "/projects/coach-neelu-taneja.png",
    alt: "YouTube coaching brand",
    slug: "coach-neelu-taneja",
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
    transition: { duration: 0.6, ease: easeInOut },
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
  <MotionLink
    href="/our-work"          // ✅ absolute path
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black shadow-lg transition"
  >
    See more
  </MotionLink>
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
  <Link
    key={w.slug}
    href={`/our-work/${w.slug}`}
    className="block"
  >
    <motion.article
      variants={item}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 240, damping: 20 }}
      className="group relative cursor-pointer rounded-2xl bg-white/[0.05] ring-1 ring-white/10 backdrop-blur-xl"
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
  </Link>
))}

        </motion.div>
      </div>
    </section>
  );
}

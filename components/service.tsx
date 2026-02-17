"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

type Service = {
  title: string;
  description: string;
  href?: string;
  gif: string;
};

const services: Service[] = [
  {
    title: "Social Media Marketing",
    description:
      "Engaging content calendars, reels, influencer campaigns, and ads that build your online community and boost conversions.",
    href: "/services/social-media-marketing",
    gif: "/Social-media-marketing1.gif",
  },
  {
    title: "Website, SEO & Funnel Building",
    description:
      "Responsive websites, SEO strategies, and high-converting funnels designed to rank higher and sell smarter.",
    href: "/services/website-seo-funnel-building",
    gif: "/Website,-SEO-and-Funnel-Building.gif",
  },
  {
    title: "Paid Ads & Lead Generation",
    description:
      "ROI-driven Google & Meta Ads, retargeting, and funnel campaigns that turn clicks into loyal customers.",
    href: "/services/paid-ads-lead-generation",
    gif: "/Paid-ads-and-lead-generation.gif",
  },
  {
    title: "Branding & Design",
    description:
      "Impactful logos and visual identity systems crafted to strengthen your brand presence.",
    href: "/services/branding-design",
    gif: "/Branding-and-design.gif",
  },
  {
    title: "Influencer Marketing & UGC",
    description:
      "Strategic collaborations and influencer campaigns that amplify your reach and build trust.",
    href: "/services/influencer-marketing-ugc",
    gif: "/Influencer-marketing-and-UCG.gif",
  },
  {
    title: "Content & Video Production",
    description:
      "High-retention reels and storytelling videos that engage and convert.",
    href: "/services/content-video-production",
    gif: "/Content-and-video-production.gif",
  },
];

type CardProps = {
  item: Service;
  index: number;
};

function ServiceCard({ item, index }: CardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 18 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 18 });

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-4, 4]);

  const lightX = useTransform(smoothX, (v: number) => 50 + v * 100);
  const lightY = useTransform(smoothY, (v: number) => 50 + v * 100);

  const spotlight = useMotionTemplate`
    radial-gradient(
      circle at ${lightX}% ${lightY}%,
      rgba(255,255,255,0.10),
      transparent 65%
    )
  `;

  function handleMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function reset() {
    mouseX.set(0);
    mouseY.set(0);
  }

  const Wrapper = item.href ? motion(Link) : motion.div;

  return (
    <Wrapper
      {...(item.href ? { href: item.href } : {})}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="
          relative rounded-2xl
          border border-white/10
          bg-[#0b0b0f]
          p-7
          shadow-[0_1px_2px_rgba(0,0,0,0.4),0_8px_24px_rgba(0,0,0,0.35)]
          group-hover:shadow-[0_2px_6px_rgba(0,0,0,0.5),0_16px_40px_rgba(0,0,0,0.45)]
          transition-shadow duration-500
        "
      >
        {/* Spotlight */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"
          style={{ background: spotlight }}
        />

        {/* Image */}
        <motion.div
          className="relative aspect-square rounded-xl overflow-hidden bg-[#111]"
          style={{ translateZ: 25 }}
        >
          <motion.img
            src={item.gif}
            alt={item.title}
            className="h-full w-full object-contain"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>

        {/* Title */}
        <motion.h3
          className="mt-6 text-lg font-semibold text-white tracking-tight"
          style={{ translateZ: 35 }}
        >
          {item.title}
        </motion.h3>

        {/* Description */}
        <motion.p
          className="mt-3 text-sm text-white/55 leading-relaxed"
          style={{ translateZ: 30 }}
        >
          {item.description}
        </motion.p>

        {/* Arrow */}
        <motion.div
          className="mt-7"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 220 }}
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-sm">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </motion.div>
      </motion.div>
    </Wrapper>
  );
}

export default function Services() {
  return (
    <section className="relative bg-[#050008] px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20">
          <p className="text-xs uppercase tracking-widest text-white/35">
            What we do
          </p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl tracking-tight">
            Our Services
          </h2>
          <p className="mt-6 max-w-xl text-sm text-white/55 leading-relaxed">
            We provide end-to-end digital systems engineered for clarity,
            measurable growth, and long-term performance.
          </p>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3 perspective-[900px]">
          {services.map((service, i) => (
            <ServiceCard key={service.title} item={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

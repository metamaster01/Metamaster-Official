"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  useReducedMotion,
} from "framer-motion";

export default function CallToAction() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* ===== Card motion ===== */
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.96]);
  const opacity = useTransform(scrollYProgress, [0, 0.12, 0.85, 1], [0, 1, 1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [140, -160]);
  const blur = useTransform(scrollYProgress, [0, 0.25], ["14px", "0px"]);

  /* ===== Background breathing ===== */
  const bgX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  /* ===== Glow color synced to scroll ===== */
  const glowColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "rgba(168,85,247,0.45)",
      "rgba(139,92,246,0.5)",
      "rgba(236,72,153,0.45)",
    ]
  );

  /* ===== Pattern parallax ===== */
  const patternY = useTransform(scrollYProgress, [0, 1], ["-10%", "12%"]);

  /* ===== Cursor aura ===== */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smoothX = useSpring(mx, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(my, { stiffness: 120, damping: 20 });

  function handleMouseMove(e: React.MouseEvent) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden px-4 py-44"
    >
      {/* ===== BACKGROUND GRADIENT ===== */}
      <motion.div
        className="absolute inset-0"
        animate={reduce ? {} : { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        style={{
          background: "linear-gradient(90deg,#12001f,#0e001a,#12001f)",
          backgroundSize: "240% 240%",
          backgroundPositionX: bgX,
        }}
      />

    
      <motion.div
        onMouseMove={handleMouseMove}
        style={{ scale, opacity, y, filter: `blur(${blur})` }}
        className="relative mx-auto max-w-6xl"
      >
        {/* ===== CINEMATIC REVEAL ===== */}
        <motion.div
          initial={{ clipPath: "inset(24% 0 76% 0 round 36px)" }}
          whileInView={{ clipPath: "inset(0% 0 0% 0 round 36px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[36px] bg-[#f4f3f1]
          px-10 py-16 md:px-24 md:py-24
          shadow-[0_90px_260px_rgba(0,0,0,0.7)]"
        >
          {/* ===== LIQUID GLASS ===== */}
          <motion.div
            className="pointer-events-none absolute inset-0"
            animate={reduce ? {} : { opacity: [0.35, 0.5, 0.35] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            style={{
              backdropFilter: "blur(10px)",
              background:
                "linear-gradient(120deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04),rgba(255,255,255,0.18))",
            }}
          />

          {/* ===== INTERNAL TEXTURE ===== */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.18]">
            <Image
              src="/purple-pattern.png"
              alt="Luxury texture"
              fill
              className="object-cover mix-blend-multiply"
            />
            <div className="absolute inset-0 bg-white/80" />
          </div>

          {/* ===== FLOATING ACCENT ===== */}
          <motion.div
            className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 opacity-40"
            animate={reduce ? {} : { y: [0, 28, 0], rotate: [0, 7, 0] }}
            transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/card-accent.png"
              alt="Luxury accent"
              fill
              className="object-contain"
            />
          </motion.div>

          {/* ===== CURSOR GLOW ===== */}
          <motion.div
            className="pointer-events-none absolute inset-0"
            style={{
              background: useTransform(
                [smoothX, smoothY, glowColor],
                ([x, y, c]) =>
                  `radial-gradient(760px at ${x}px ${y}px, ${c}, transparent 70%)`
              ),
            }}
          />

          {/* ===== BORDER ===== */}
          <div className="pointer-events-none absolute inset-0 rounded-[36px]">
            <div
              className="absolute inset-[-2px] rounded-[40px]
              bg-[conic-gradient(from_180deg,rgba(168,85,247,0),rgba(168,85,247,0.38),rgba(255,255,255,0.22),rgba(168,85,247,0))]
              opacity-75 animate-[spin_18s_linear_infinite]"
            />
          </div>

          {/* ===== RIGHT PATTERN ===== */}
          <motion.div
            style={{ y: patternY }}
            className="pointer-events-none absolute right-0 top-0 hidden h-full w-[48%] md:block"
          >
            <Image
              src="/purple-pattern.png"
              alt="Luxury abstract pattern"
              fill
              className="object-cover opacity-95"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#f4f3f1]/75 to-[#f4f3f1]" />
            <div className="absolute inset-0 backdrop-blur-[3px]" />
          </motion.div>

          {/* ===== CONTENT ===== */}
          <div className="relative z-10 max-w-xl">
            {/* ===== LUXURY TEXT REVEAL ===== */}
            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.035 } },
              }}
              className="relative text-4xl font-semibold tracking-tight text-black md:text-5xl"
            >
              {"Ready to work with us?".split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { y: 24, opacity: 0 },
                    show: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}

              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-3 left-0 h-[2px] w-24 origin-left rounded-full
                bg-gradient-to-r from-purple-500 via-fuchsia-400 to-transparent"
              />
            </motion.h2>

            <p className="mt-6 text-lg leading-relaxed text-black/65">
              We design brands that feel timeless,
              <br className="hidden sm:block" />
              scale fearlessly, and perform flawlessly.
            </p>

            <MagneticButton />
          </div>

          {/* ===== FILM GRAIN ===== */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay
            [background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22180%22 height=%22180%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/></svg>')]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ===== MAGNETIC BUTTON ===== */
function MagneticButton() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 18 });
  const sy = useSpring(y, { stiffness: 260, damping: 18 });

  function move(e: React.MouseEvent) {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.45);
    y.set((e.clientY - r.top - r.height / 2) * 0.45);
  }

  return (
    <motion.div
      onMouseMove={move}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: sx, y: sy }}
      className="mt-12 inline-block"
    >
      <Link
        href="/contact"
        className="group relative inline-flex items-center gap-5
        rounded-full bg-black px-9 py-4 text-sm font-medium text-white"
      >
        let’s talk
        <span className="flex h-9 w-9 items-center justify-center rounded-full
        bg-white/10 transition group-hover:bg-white/20">
          <ArrowRight className="h-4 w-4" />
        </span>

        <span
          className="pointer-events-none absolute inset-0 rounded-full
          opacity-0 blur-xl transition group-hover:opacity-70
          bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.75),transparent_65%)]"
        />
      </Link>
    </motion.div>
  );
}

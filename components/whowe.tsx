"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  Variants,
} from "framer-motion";
import { useRef, useEffect } from "react";

/* =====================================================
   🔥 NEW 0. CINEMATIC PAGE INTRO (NON-DESTRUCTIVE)
===================================================== */

function PageIntro() {
  return (
    <motion.div
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
      className="fixed inset-0 origin-top bg-black z-[9999]"
    />
  );
}

/* =====================================================
   🔥 NEW 0.5 GLOBAL MAGNETIC CURSOR (SEPARATE)
===================================================== */

function MagneticCursor() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 500, damping: 40 });
  const springY = useSpring(y, { stiffness: 500, damping: 40 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 6);
      y.set(e.clientY - 6);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className="
        fixed top-0 left-0 w-3 h-3
        rounded-full bg-white/80
        mix-blend-difference
        pointer-events-none
        z-[10000]
      "
    />
  );
}

/* =====================================================
   1. CHARACTER SPLIT (YOUR CODE — UNTOUCHED)
===================================================== */

function SplitChars({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  const chars = text.split("");

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.025,
        delayChildren: delay,
      },
    },
  };

  const char: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
      rotateX: 90,
      filter: "blur(8px)",
    },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.p
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`leading-relaxed ${className}`}
    >
      {chars.map((c, i) => (
        <motion.span
          key={i}
          variants={char}
          className="inline-block whitespace-pre"
        >
          {c}
        </motion.span>
      ))}
    </motion.p>
  );
}

/* =====================================================
   2. MAGNETIC TEXT (YOUR CODE — UNTOUCHED)
===================================================== */

function MagneticText({
  children,
  strength = 0.25,
  className = "",
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);

    x.set(dx * strength);
    y.set(dy * strength);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* =====================================================
   3. INTERACTIVE CARD + PARALLAX (YOUR CODE — UNTOUCHED)
===================================================== */

function InteractiveCard({
  src,
  alt,
  title,
}: {
  src: string;
  alt: string;
  title: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      initial={{ opacity: 0, scale: 0.88 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.05 }}
      className="relative group rounded-3xl overflow-hidden bg-[#050008] border border-white/10"
    >
      <Image
        src={src}
        alt={alt}
        width={800}
        height={500}
        className="w-full h-full object-cover opacity-90"
      />

      <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition">
        <h3 className="text-5xl font-extrabold text-white">{title}</h3>
      </div>
    </motion.div>
  );
}

/* =====================================================
   4. NOISE / GRAIN OVERLAY (YOUR CODE — UNTOUCHED)
===================================================== */

function GrainOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[999]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
        mixBlendMode: "overlay",
      }}
    />
  );
}

/* =====================================================
   5. MAIN SECTION — YOUR STRUCTURE PRESERVED
===================================================== */

export default function WhoWe() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-[#080010] to-[#020005] text-white px-6 md:px-20 py-32">
      {/* 🔥 NEW LAYERS */}
      <PageIntro />
      <MagneticCursor />
      <GrainOverlay />

      <div className="max-w-7xl mx-auto space-y-48">

        {/* WHO WE ARE */}
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <InteractiveCard src="/whowe.png" alt="Who we are" title="Who We Are" />

          <div>
            <MagneticText>
              <h2 className="text-5xl md:text-6xl font-extrabold mb-10">
                Who we are?
              </h2>
            </MagneticText>

            <SplitChars
              delay={0.2}
              className="text-gray-300 max-w-xl text-lg"
              text="Founded by Aman Kumar, Meta Master is driven by innovation and measurable impact. With 5+ years of experience and 100+ successful projects, we empower brands to scale with confidence."
            />
          </div>
        </div>

        {/* MISSION */}
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <MagneticText>
              <h2 className="text-5xl md:text-6xl font-extrabold mb-10">
                Our Mission
              </h2>
            </MagneticText>

            <SplitChars
              className="text-gray-300 max-w-xl text-lg"
              text="To empower Indian startups with affordable, effective, and scalable digital marketing solutions. We strive to be a catalyst for growth, helping emerging brands build strong online presences and achieve their business goals."
            />
          </div>

          <InteractiveCard src="/ourmission.png" alt="Our mission" title="Our Mission" />
        </div>

        {/* VISION */}
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <InteractiveCard src="/our-vision.png" alt="Our vision" title="Our Vision" />

          <div>
            <MagneticText>
              <h2 className="text-5xl md:text-6xl font-extrabold mb-10">
                Our Vision
              </h2>
            </MagneticText>

            <SplitChars
              className="text-gray-300 max-w-xl text-lg"
              text="Our vision is to make digital marketing simple, affordable, and accessible for every startup in India, regardless of budget size. We aim to be the go-to partner for emerging brands seeking to leverage digital channels for growth and success."
            />
          </div>
        </div>

      </div>
    </section>
  );
}

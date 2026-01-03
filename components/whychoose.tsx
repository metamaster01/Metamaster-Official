"use client";

import React from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  useReducedMotion,
  type Variants,
} from "framer-motion";

type Item = { title: string; body: string };

const ITEMS: Item[] = [
  { title: "360° Solutions", body: "Everything from brand ideation to execution under one roof" },
  { title: "Custom Strategy", body: "We tailor a plan around your goals, audience, and growth milestones—no templates." },
  { title: "Result-Oriented", body: "Clear KPIs, measurable outcomes, and transparent reporting so you see real progress." },
  { title: "Creative Edge", body: "High-impact creative that feels premium and performs across platforms and formats." },
  { title: "Timely Delivery", body: "Reliable timelines, proactive updates, and fast turnarounds without compromising quality." },
  { title: "Client-Centric Approach", body: "A collaborative workflow with direct communication and decisions driven by your needs." },
];

const containerV: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
};

const rowV: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(12px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } },
};

/** ====== Neon + Glitch util ====== */
function GlitchTitle({
  children,
  active,
}: {
  children: React.ReactNode;
  active: boolean;
}) {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{children}</span>

      {/* layer A */}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        initial={false}
        animate={{
          opacity: active ? 0.75 : 0,
          x: active ? [0, -1, 1, 0] : 0,
          y: active ? [0, 1, -1, 0] : 0,
        }}
        transition={{
          duration: 0.35,
          repeat: active ? Infinity : 0,
          repeatDelay: 0.45,
          ease: "easeInOut",
        }}
        style={{
          color: "rgba(255,255,255,0.35)",
          textShadow:
            "0 0 22px rgba(255,255,255,0.18), 1px 0 rgba(255,255,255,0.22), -1px 0 rgba(255,255,255,0.12)",
          maskImage: "linear-gradient(transparent 0%, black 18%, black 82%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(transparent 0%, black 18%, black 82%, transparent 100%)",
        }}
      >
        {children}
      </motion.span>

      {/* layer B (thin slice glitch) */}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        initial={false}
        animate={{
          opacity: active ? 0.5 : 0,
          x: active ? [0, 2, -2, 0] : 0,
        }}
        transition={{
          duration: 0.28,
          repeat: active ? Infinity : 0,
          repeatDelay: 0.6,
          ease: "easeInOut",
          delay: 0.12,
        }}
        style={{
          color: "rgba(255,255,255,0.20)",
          textShadow: "0 0 30px rgba(255,255,255,0.16)",
          clipPath: "polygon(0 46%, 100% 46%, 100% 62%, 0 62%)",
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <motion.span
      aria-hidden="true"
      className="relative inline-flex h-10 w-10 items-center justify-center"
      animate={{ rotate: open ? 180 : 0, scale: open ? 1.03 : 1 }}
      transition={{ type: "spring", stiffness: 800, damping: 40 }}
    >
      <motion.span
        className="absolute inset-0 rounded-full ring-1 ring-white/12"
        animate={{
          boxShadow: open
            ? "0 0 0 1px rgba(255,255,255,0.14), 0 0 30px rgba(255,255,255,0.14)"
            : "0 0 0 1px rgba(255,255,255,0.10), 0 0 0 rgba(255,255,255,0)",
        }}
        transition={{ duration: 0.25 }}
      />
      <svg width="18" height="18" viewBox="0 0 24 24" className="relative text-white/85">
        <path
          fill="currentColor"
          d="M12 14.5a1 1 0 0 1-.7-.29l-5-5a1 1 0 1 1 1.4-1.42L12 11.1l4.3-4.31a1 1 0 1 1 1.4 1.42l-5 5a1 1 0 0 1-.7.29Z"
        />
      </svg>
    </motion.span>
  );
}

/** heading lux glitch */
function GlitchText({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.22]"
        style={{
          transform: "translate3d(0,0,0)",
          textShadow: "1px 0 rgba(255,255,255,0.35), -1px 0 rgba(255,255,255,0.18)",
          maskImage: "linear-gradient(transparent 0%, black 20%, black 80%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(transparent 0%, black 20%, black 80%, transparent 100%)",
        }}
      >
        {children}
      </span>
    </span>
  );
}

/** floating particles */
function ParticleField() {
  const dots = React.useMemo(() => Array.from({ length: 18 }, (_, i) => i), []);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((i) => (
        <motion.span
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-white/20"
          style={{
            left: `${(i * 7 + 9) % 100}%`,
            top: `${(i * 11 + 13) % 100}%`,
          }}
          animate={{
            y: [0, -22, 0],
            opacity: [0.1, 0.35, 0.1],
            scale: [1, 1.45, 1],
          }}
          transition={{
            duration: 5.5 + (i % 6),
            repeat: Infinity,
            ease: "easeInOut",
            delay: (i % 8) * 0.22,
          }}
        />
      ))}
    </div>
  );
}

function AccordionRow({
  item,
  open,
  onToggle,
  reduced,
}: {
  item: Item;
  open: boolean;
  onToggle: () => void;
  reduced: boolean;
}) {
  const [hover, setHover] = React.useState(false);

  return (
    <motion.div
      variants={rowV}
      className="relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* neon pulse border line (row) */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10"
        animate={{
          opacity: open || hover ? 1 : 0.75,
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] opacity-0"
        animate={{
          opacity: open || hover ? 1 : 0,
        }}
        transition={{ duration: 0.25 }}
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.45), rgba(255,255,255,0))",
          filter: "blur(0.2px)",
        }}
      />

      {/* premium hover sweep */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0"
        animate={{ opacity: hover ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.07) 45%, rgba(255,255,255,0) 100%)",
        }}
      />

      {/* micro “pop” spark */}
      {!reduced && (
        <AnimatePresence>
          {hover && (
            <motion.span
              className="pointer-events-none absolute left-3 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white/35"
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: [0.6, 1.4, 0.9] }}
              exit={{ opacity: 0, scale: 0.3 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              style={{
                boxShadow: "0 0 26px rgba(255,255,255,0.25)",
              }}
            />
          )}
        </AnimatePresence>
      )}

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className={[
          "group relative flex w-full items-center justify-between gap-4",
          "py-5 sm:py-6",
          "text-left",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/25",
        ].join(" ")}
      >
        <div className="flex min-w-0 items-center gap-3">
          {/* left signal bar */}
          <motion.span
            className="relative h-6 w-[10px] shrink-0"
            animate={{ opacity: open ? 1 : 0.6, scaleY: open ? 1 : 0.85 }}
            transition={{ type: "spring", stiffness: 650, damping: 36 }}
          >
            <span className="absolute inset-0 rounded-full bg-white/10" />
            <motion.span
              className="absolute inset-[2px] rounded-full"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.08))",
              }}
              animate={{
                opacity: open ? 1 : 0.35,
                y: open && !reduced ? [0, -1.8, 0] : 0,
              }}
              transition={{
                duration: 1.05,
                repeat: open && !reduced ? Infinity : 0,
                ease: "easeInOut",
              }}
            />
          </motion.span>

          {/* ✅ glitch hover title */}
          <motion.span
            className="truncate text-[15px] font-semibold tracking-wide text-white/90 sm:text-[16px]"
            whileHover={{ x: 2 }}
            transition={{ type: "spring", stiffness: 850, damping: 44 }}
          >
            <GlitchTitle active={hover || open}>{item.title}</GlitchTitle>
          </motion.span>
        </div>

        <Chevron open={open} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.36, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <motion.p
              initial={{ y: -12, opacity: 0, filter: "blur(8px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: -12, opacity: 0, filter: "blur(8px)" }}
              transition={{ duration: 0.26, ease: "easeOut" }}
              className="pb-6 pr-2 text-[13px] leading-relaxed text-white/60 sm:pr-10 sm:text-[13.5px]"
            >
              {item.body}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function WhyChooseMetamaster() {
  const [openIndex, setOpenIndex] = React.useState<number>(0);
  const reduced = useReducedMotion();

  /** cursor spotlight + 3D tilt */
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xs = useSpring(x, { stiffness: 220, damping: 28 });
  const ys = useSpring(y, { stiffness: 220, damping: 28 });

  const glowX = useTransform(xs, (v) => `${v}px`);
  const glowY = useTransform(ys, (v) => `${v}px`);

  // 3D tilt (whole section)
  const tiltX = useTransform(ys, [0, 600], [6, -6]); // responsive-ish
  const tiltY = useTransform(xs, [0, 900], [-6, 6]);

  // scroll-driven parallax
  const ref = React.useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgRotate = useTransform(scrollYProgress, [0, 1], [0, 4]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.1]);
  const headerY = useTransform(scrollYProgress, [0, 1], [18, -16]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.35, 1], [0.75, 1, 1]);

  return (
    <section
      ref={ref as any}
      className="relative w-full overflow-hidden bg-[#141516]"
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);
      }}
    >
      {/* 3D tilt wrapper */}
      <motion.div
        className="relative"
        style={{
          rotateX: reduced ? 0 : tiltX,
          rotateY: reduced ? 0 : tiltY,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", stiffness: 140, damping: 20 }}
      >
        {/* ===== background layers ===== */}
        <div className="pointer-events-none absolute inset-0">
          {/* neon edge pulse around whole section */}
          <motion.div
            className="absolute inset-4 rounded-[28px] ring-1 ring-white/10"
            animate={
              reduced
                ? {}
                : {
                    boxShadow: [
                      "0 0 0 1px rgba(255,255,255,0.10), 0 0 0 rgba(255,255,255,0)",
                      "0 0 0 1px rgba(255,255,255,0.14), 0 0 34px rgba(255,255,255,0.12)",
                      "0 0 0 1px rgba(255,255,255,0.10), 0 0 0 rgba(255,255,255,0)",
                    ],
                  }
            }
            transition={{ duration: 3.2, repeat: reduced ? 0 : Infinity, ease: "easeInOut" }}
            style={{
              maskImage: "radial-gradient(70% 60% at 50% 30%, black 55%, transparent 85%)",
              WebkitMaskImage:
                "radial-gradient(70% 60% at 50% 30%, black 55%, transparent 85%)",
            }}
          />

          {/* deep gradients */}
          <motion.div
            className="absolute -inset-40 opacity-60"
            style={{
              scale: bgScale,
              rotate: bgRotate,
              background:
                "radial-gradient(760px circle at 25% 20%, rgba(255,255,255,0.11), transparent 55%), radial-gradient(860px circle at 85% 30%, rgba(255,255,255,0.08), transparent 60%), radial-gradient(760px circle at 60% 80%, rgba(255,255,255,0.07), transparent 60%)",
            }}
          />

          {/* grid */}
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "46px 46px",
              maskImage: "radial-gradient(60% 60% at 52% 35%, black 35%, transparent 72%)",
              WebkitMaskImage:
                "radial-gradient(60% 60% at 52% 35%, black 35%, transparent 72%)",
            }}
          />

          {/* cursor spotlight */}
          <motion.div
            className="absolute inset-0 opacity-85"
            style={{
              background: useTransform(
                [glowX, glowY],
                ([gx, gy]) =>
                  `radial-gradient(620px circle at ${gx} ${gy}, rgba(255,255,255,0.13), transparent 60%)`
              ),
            }}
          />

          {/* scanlines */}
          <motion.div
            className="absolute inset-0 opacity-[0.10]"
            style={{
              background:
                "repeating-linear-gradient(180deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, rgba(255,255,255,0) 6px, rgba(255,255,255,0) 10px)",
              maskImage: "radial-gradient(65% 55% at 50% 35%, black 35%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(65% 55% at 50% 35%, black 35%, transparent 75%)",
            }}
            animate={{ y: reduced ? 0 : [0, 10, 0] }}
            transition={{ duration: 6, repeat: reduced ? 0 : Infinity, ease: "easeInOut" }}
          />

          {/* noise */}
          <div
            className="absolute inset-0 opacity-[0.07] mix-blend-overlay"
            style={{
              backgroundImage:
                "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"140\" height=\"140\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"2\" stitchTiles=\"stitch\"/></filter><rect width=\"140\" height=\"140\" filter=\"url(%23n)\" opacity=\"0.55\"/></svg>')",
            }}
          />

          <ParticleField />
        </div>

        {/* ===== content ===== */}
        <div className="relative mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            {/* Left */}
            <motion.div style={{ y: headerY, opacity: headerOpacity }} className="lg:col-span-5">
              <motion.h2
                initial={{ opacity: 0, y: 14, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.65 }}
                transition={{ duration: 0.62, ease: "easeOut" }}
                className="text-[34px] font-semibold leading-[1.08] tracking-tight text-white sm:text-[40px]"
              >
                <GlitchText>
                  Why choose <br />
                  metamaster?
                </GlitchText>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: 0.06, ease: "easeOut" }}
                className="mt-4 max-w-md text-sm leading-relaxed text-white/55"
              >
                Everything you need to know about metamaster
                <br className="hidden sm:block" /> before getting started.
              </motion.p>

              {/* luxe CTA */}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: 0.12, ease: "easeOut" }}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.98 }}
                className={[
                  "relative mt-7 inline-flex items-center justify-center overflow-hidden",
                  "rounded-full bg-white px-6 py-3",
                  "text-[13px] font-semibold text-black",
                  "shadow-[0_14px_40px_rgba(0,0,0,0.35)]",
                  "ring-1 ring-black/10",
                ].join(" ")}
              >
                <span className="relative z-10">Contact us</span>
                {!reduced && (
                  <motion.span
                    aria-hidden="true"
                    className="absolute inset-y-0 left-[-30%] w-[40%] rotate-12 bg-white/60 blur-md"
                    animate={{ x: ["0%", "320%"] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    style={{ opacity: 0.35 }}
                  />
                )}
              </motion.a>
            </motion.div>

            {/* Right */}
            <div className="lg:col-span-7">
              <motion.div
                variants={containerV}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="relative"
              >
                <div className="mb-2 h-px w-full bg-white/10" />

                {ITEMS.map((item, idx) => (
                  <AccordionRow
                    key={item.title}
                    item={item}
                    open={openIndex === idx}
                    reduced={reduced}
                    onToggle={() => setOpenIndex((cur) => (cur === idx ? -1 : idx))}
                  />
                ))}

                <motion.div
                  className="mt-3 h-px w-full"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.25), rgba(255,255,255,0))",
                  }}
                  animate={{ opacity: [0.25, 0.85, 0.25] }}
                  transition={{ duration: 2.0, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
          </div>

          <div className="pointer-events-none mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}

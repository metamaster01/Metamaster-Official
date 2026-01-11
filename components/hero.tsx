// "use client";

// import dynamic from "next/dynamic";
// import { useEffect, useState } from "react";
// import HeroFallback from "./HeroFallback";

// const HeroWebGL = dynamic(() => import("./HeroWebGL"), {
//   ssr: false,
// });


// export default function Hero() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     setIsMobile(window.innerWidth < 768);
//   }, []);

//   return (
//     <section className="relative h-screen w-full overflow-hidden text-white">
//       {/* 🌊 WebGL or Fallback */}
//       <div className="absolute inset-0">
//         {isMobile ? <HeroFallback /> : <HeroWebGL />}
//       </div>

//       {/* 🎨 Overlay */}
//       <div className="absolute inset-0 bg-black/20" />

//       {/* 🔥 HERO CONTENT (YOUR ORIGINAL CONTENT) */}
//       <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
//         <h1 className="text-[clamp(3rem,6vw,7rem)] font-semibold leading-tight tracking-tight">
//           <span className="block">Transform Your Mind.</span>
//           <span className="block font-bold">Elevate Your Impact.</span>
//         </h1>

//         <p className="mt-10 max-w-3xl text-base sm:text-lg md:text-xl text-white/90">
//           At Meta Master, we help you rewrite limiting beliefs, strengthen
//           emotional intelligence, and master the inner game of success — so you
//           can lead, communicate, and create with unshakable confidence.
//         </p>

//         <div className="mt-14 flex flex-wrap justify-center gap-8">
//           <button className="rounded-full bg-white px-10 py-4 text-sm font-semibold text-[#2B0046] transition hover:scale-110">
//             Schedule Call
//           </button>
//           <button className="text-sm font-medium text-white/80 hover:text-white">
//             View Case Study
//           </button>
//         </div>
//       </div>

//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-white/70 animate-bounce">
//         ↓ Scroll
//       </div>
//     </section>
//   );
// }






//upadtes hero

// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { useRef } from "react";

// export default function Hero() {
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   // Parallax
//   const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);
//   const fade = useTransform(scrollYProgress, [0, 0.3], [1, 0.6]);

//   return (
//     <section
//       ref={ref}
//       className="relative h-screen w-full overflow-hidden text-white"
//     >
//       {/* 🎥 Background Video */}
//       <video
//         className="absolute inset-0 h-full w-full object-cover"
//         src="/hero-bg.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/45" />

//       {/* Grain */}
//       <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-[0.08] mix-blend-overlay" />

//       {/* Content */}
//       <motion.div
//         style={{ y: textY, opacity: fade }}
//         className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
//       >
//         {/* Line 1 */}
//         <div className="overflow-hidden">
//           <motion.h2
//             initial={{ y: 60, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.9 }}
//             className="text-sm sm:text-base tracking-widest text-white/140 uppercase"
//           >
//             Transform Your Mind.
//           </motion.h2>
//         </div>

//         {/* Main Bold Line */}
//         <div className="overflow-hidden">
//           <motion.h1
//             initial={{ y: 80, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.15, duration: 1 }}
//             className="mt-4 text-[clamp(3rem,6vw,5.5rem)] font-bold leading-tight"
//           >
//             Elevate Your Impact.
//           </motion.h1>
//         </div>

//         {/* Description */}
//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 0.9 }}
//           className="mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-white/85"
//         >
//           At Meta Master, we help you rewire limiting beliefs, strengthen emotional intelligence, and master the inner game of success — so you can lead, communicate, and create with unshakable confidence.
//         </motion.p>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.9, duration: 0.6 }}
//           className="mt-10 flex flex-wrap items-center justify-center gap-6"
//         >
//           <button className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#2B0046] transition hover:scale-105">
//             Schedule Call <ArrowRight size={16} />
//           </button>

//           <button className="text-sm font-medium text-white/80 hover:text-white">
//             View Case Study
//           </button>
//         </motion.div>
//       </motion.div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/70">
//         Scroll down <span className="ml-1 animate-bounce">↓</span>
//       </div>
//     </section>
//   );
// }




"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* 🔥 Loader ke baad hero start delay */
const HERO_START_DELAY = 3.4;

/* ---------- WORD REVEAL (NO variants) ---------- */
function RevealWords({
  text,
  delay,
  start,
}: {
  text: string;
  delay: number;
  start: boolean;
}) {
  return (
    <span className="inline-flex flex-wrap justify-center gap-x-2 overflow-hidden">
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          initial={{ y: "120%", opacity: 0 }}
          animate={start ? { y: 0, opacity: 1 } : {}}
          transition={{
            delay: delay + i * 0.08,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [startAnim, setStartAnim] = useState(false);

  /* 🔥 Start ONLY after loader */
  useEffect(() => {
    if (localStorage.getItem("loaderDone") === "true") {
      setStartAnim(true);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const fade = useTransform(scrollYProgress, [0, 0.3], [1, 0.6]);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden text-white"
    >
      {/* 🎥 Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Grain */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-[0.08] mix-blend-overlay" />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity: fade }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center"
      >
        {/* Line 1 */}
        <h2 className="text-xl sm:text-base tracking-widest uppercase text-white">
          <RevealWords
            text="Transform Your Mind."
            delay={HERO_START_DELAY}
            start={startAnim}
          />
        </h2>

        {/* Main Heading */}
        <h1 className="mt-4 text-[clamp(3rem,6vw,5.5rem)] font-bold leading-tight">
          <RevealWords
            text="Elevate Your Impact."
            delay={HERO_START_DELAY + 0.3}
            start={startAnim}
          />
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-white/85">
          <RevealWords
            text="At Meta Master, we help you rewire limiting beliefs, strengthen emotional intelligence, and master the inner game of success — so you can lead, communicate, and create with unshakable confidence."
            delay={HERO_START_DELAY + 0.8}
            start={startAnim}
          />
        </p>

        {/* CTA */}
        {startAnim && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: HERO_START_DELAY + 2.7,
              duration: 0.6,
            }}
            className="mt-10 flex flex-wrap items-center justify-center gap-8"
          >
            <button className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#2B0046] transition hover:scale-105">
              Schedule Call <ArrowRight size={16} />
            </button>

           <Link href="/our-work">
  <span
    className="
      text-sm font-semibold text-white/80
      px-8 py-3
      rounded-full
      border border-white/20
      transition-all duration-300
      hover:text-[#2B0046]
      hover:bg-white
      hover:border-white
      hover:backdrop-blur
      cursor-pointer
    "
  >
    View Case Study
  </span>
</Link>

          </motion.div>
        )}
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/70">
        Scroll down <span className="ml-1 animate-bounce">↓</span>
      </div>
    </section>
  );
}

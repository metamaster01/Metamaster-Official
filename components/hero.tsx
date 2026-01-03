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


"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden text-white"
    >
      {/* 🎥 Background Video */}
      {/* <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      /> */}

      {/* Video Dark Overlay (for readability) */}
      {/* <div className="absolute inset-0 bg-black/40" /> */}

      {/* Grain / Noise Overlay */}
      {/* <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-[0.08] mix-blend-overlay" /> */}

      {/* Floating Glow (subtle premium touch) */}
      <motion.div
        className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-purple-500/25 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6"
      >
        <div className="ml-auto max-w-xl">
          {/* Line-by-line Reveal */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-[clamp(2.8rem,5vw,4.5rem)] font-medium leading-tight"
            >
              Transform Your Mind.
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-[clamp(2.8rem,5vw,4.5rem)] font-bold leading-tight"
            >
              Elevate Your Impact.
            </motion.h1>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-6 text-sm sm:text-base leading-relaxed text-white/90"
          >
            At Meta Master, we help you rewrite limiting beliefs, strengthen
            emotional intelligence, and master the inner game of success — so
            you can lead, communicate, and create with unshakable confidence.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-8 flex items-center gap-6"
          >
            <button className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#2B0046] transition hover:scale-105">
              Schedule Call <ArrowRight size={16} />
            </button>

            <button className="text-sm font-medium text-white/80 hover:text-white">
              View Case Study
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-6 text-xs text-white/80">
        Scroll down <span className="ml-1 animate-bounce">↓</span>
      </div>
    </section>
  );
}

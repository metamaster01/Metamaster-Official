






// // upadtes hero

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







// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import gsap from "gsap";


// /* ---------- WORD REVEAL ---------- */
// function RevealWords({
//   text,
//   delay,
//   start,
// }: {
//   text: string;
//   delay: number;
//   start: boolean;
// }) {
//   return (
//     <span className="inline-flex flex-wrap justify-center gap-x-2 overflow-hidden">
//       {text.split(" ").map((word, i) => (
//         <motion.span
//           key={i}
//           initial={{ y: "120%", opacity: 0 }}
//           animate={start ? { y: 0, opacity: 1 } : {}}
//           transition={{
//             delay: delay + i * 0.08,
//             duration: 0.7,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="inline-block"
//         >
//           {word}
//         </motion.span>
//       ))}
//     </span>
//   );
// }

// export default function Hero() {
//   const ref = useRef<HTMLDivElement>(null);

//   const [startAnim, setStartAnim] = useState(false);
//   const [baseDelay, setBaseDelay] = useState(0); // 🔥 KEY FIX

//   /* ---------- FIXED LOGIC ---------- */
//   useEffect(() => {
//     const loaderDone = localStorage.getItem("loaderDone") === "true";
//     const heroPlayed = sessionStorage.getItem("heroPlayed") === "true";

//     if (loaderDone && !heroPlayed) {
//       // 🎬 FIRST TIME ONLY
//       setBaseDelay(3.8);
//       setTimeout(() => {
//         setStartAnim(true);
//         sessionStorage.setItem("heroPlayed", "true");
//       }, 100);
//     } else {
//       // ⚡ RETURN TO HOME / REFRESH
//       setBaseDelay(0);
//       setStartAnim(true);
//     }
//   }, []);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);
//   const fade = useTransform(scrollYProgress, [0, 0.3], [1, 0.6]);


//     const waveRef = useRef<HTMLDivElement>(null);

 

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
//         className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center"
//       >
//         {/* Line 1 */}
//         <h2 className="text-sm sm:text-base tracking-widest uppercase text-white">
//           <RevealWords
//             text="Transform Your Mind."
//             delay={baseDelay}
//             start={startAnim}
//           />
//         </h2>

//         {/* Main Heading */}
//         <h1 className="mt-4 text-[clamp(3rem,6vw,5.5rem)] font-bold leading-tight">
//           <RevealWords
//             text="Elevate Your Impact."
//             delay={baseDelay + 1.5}
//             start={startAnim}
//           />
//         </h1>

//         {/* Description */}
//         <p className="mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-white/85">
//           <RevealWords
//             text="At Meta Master, we help you rewire limiting beliefs, strengthen emotional intelligence, and master the inner game of success — so you can lead, communicate, and create with unshakable confidence."
//             delay={baseDelay + 1.7}
//             start={startAnim}
//           />
//         </p>

//         {/* CTA */}
//         {startAnim && (
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{
//               delay: baseDelay + 1.8,
//               duration: 0.6,
//             }}
//             className="mt-10 flex flex-wrap items-center justify-center gap-8"
//           >
//             <button className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#2B0046] transition hover:scale-105">
//               Get Free Growth Audit <ArrowRight size={16} />
//             </button>

//             <Link href="/our-work">
//               <span className="text-sm font-semibold text-white/80 px-8 py-3 rounded-full border border-white/20 transition-all duration-300 hover:text-[#2B0046] hover:bg-white hover:border-white cursor-pointer">
//                 View Case Study
//               </span>
//             </Link>
//           </motion.div>
//         )}
//       </motion.div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/70">
//         Scroll down <span className="ml-1 animate-bounce">↓</span>
//       </div>
//     </section>
//   );
// }


//new update hero new content  with word reveal and fixed logic for base delay






"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
 import { MessageCircle } from "lucide-react";


/* ---------- WORD REVEAL ---------- */
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
            delay: delay + i * 0.06,
            duration: 0.6,
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
  const [baseDelay, setBaseDelay] = useState(0);
  
  

  /* ---------- LOADER AWARE LOGIC ---------- */
  useEffect(() => {
    const loaderDone = localStorage.getItem("loaderDone") === "true";
    const heroPlayed = sessionStorage.getItem("heroPlayed") === "true";

    if (loaderDone && !heroPlayed) {
      setBaseDelay(3.6);
      setTimeout(() => {
        setStartAnim(true);
        sessionStorage.setItem("heroPlayed", "true");
      }, 100);
    } else {
      setBaseDelay(0);
      setStartAnim(true);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const fade = useTransform(scrollYProgress, [0, 0.3], [1, 0.65]);

  return (
     
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden text-white "
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
      <div className="absolute inset-0 bg-black/55" />

      {/* Grain */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-[0.08] mix-blend-overlay" />

      {/* CONTENT */}
      <motion.div
        style={{ y: textY, opacity: fade }}
        className="relative z-10 flex h-full flex-col items-center justify-center  text-center"
      >
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={startAnim ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: baseDelay, duration: 0.6 }}
          className="mb-5 mt-7 inline-block rounded-full border border-white/20 px-4 py-1 text-xs tracking-wide text-white/80"
        >
           Digital Growth Partner for Startups
        </motion.span>

        {/* H1 */}
        <h1 className="max-w-6xl text-[clamp(2.8rem,6vw,5.2rem)] font-xl leading-[1.05] tracking-tight">
          <RevealWords
            text="Building Scalable Digital Brands for the Next Generation of Businesses"
            delay={baseDelay + 0.2}
            start={startAnim}
          />
        </h1>

        {/* Subtext */}
        <p className="mt-6 max-w-3xl text-sm sm:text-base leading-relaxed text-white/80">
          <RevealWords
            text="Meta Master is a 360° digital marketing and branding agency in India focused on helping startups and emerging brands come online, build a strong digital presence, and grow using cost-effective marketing strategies. We work with businesses across India and help them scale step by step through smart digital marketing."
            delay={baseDelay + 0.9}
            start={startAnim}
          />
        </p>

        {/* CTA */}
        {startAnim && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: baseDelay + 1.4, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6"
          >
           <button
  onClick={() => {
    document
      .getElementById("free-audit")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="inline-flex items-center gap-2 rounded-full bg-purple-500 px-8 py-3 text-sm font-semibold text-[#2B0046] transition hover:scale-105 hover:bg-white" 
>
  Get Free Ads Audit
</button>

           

<a
  href="https://wa.me/9529770498?text=Hi%20Meta%20Master%2C%20I%20want%20to%20grow%20my%20business."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center bg-green-500 gap-2 rounded-full border border-white/25 px-9 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-[#2B0046]"
>
  <MessageCircle size={18} />
  WhatsApp Now
</a>
          </motion.div>
        )}
      </motion.div>

      {/* Scroll */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/60">
        Scroll <span className="ml-1 animate-bounce">↓</span>
      </div>
    </section>
    
  );
}












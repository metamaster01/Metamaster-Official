// "use client";

// import React from "react";
// import {
//   motion,
//   AnimatePresence,
//   useScroll,
//   useTransform,
//   useReducedMotion,
// } from "framer-motion";

// type Item = {
//   title: string;
//   body: string;
// };

// const ITEMS: Item[] = [
//   {
//     title: "360° Solutions",
//     body: "Everything from brand ideation to execution under one roof.",
//   },
//   {
//     title: "Custom Strategy",
//     body: "We tailor a plan around your goals, audience, and growth milestones.",
//   },
//   {
//     title: "Result-Oriented",
//     body: "Clear KPIs, measurable outcomes, and transparent reporting.",
//   },
//   {
//     title: "Creative Edge",
//     body: "High-impact creative that feels premium and performs everywhere.",
//   },
//   {
//     title: "Timely Delivery",
//     body: "Reliable timelines and fast turnarounds without compromise.",
//   },
//   {
//     title: "Client-Centric Approach",
//     body: "Collaboration, clarity, and decisions driven by your needs.",
//   },
// ];

// function AccordionRow({
//   item,
//   open,
//   onToggle,
// }: {
//   item: Item;
//   open: boolean;
//   onToggle: () => void;
// }) {
//   return (
//     <div className="border-b border-white/10">
//       <button
//         onClick={onToggle}
//         className="flex w-full items-center justify-between py-6 text-left"
//       >
//         <span className="text-[15px] font-medium tracking-wide text-white/90">
//           {item.title}
//         </span>
//         <motion.span
//           animate={{ rotate: open ? 180 : 0 }}
//           transition={{ duration: 0.25, ease: "easeOut" }}
//           className="text-white/40"
//         >
//           ⌄
//         </motion.span>
//       </button>

//       <AnimatePresence>
//         {open && (
//           <motion.p
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.35, ease: "easeOut" }}
//             className="pb-6 pr-6 text-sm leading-relaxed text-white/55"
//           >
//             {item.body}
//           </motion.p>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// export default function WhyChooseMetamaster() {
//   const [openIndex, setOpenIndex] = React.useState(0);
//   const reduced = useReducedMotion();
//   const ref = React.useRef<HTMLElement | null>(null);

//   /* Apple-style scroll motion */
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const leftY = useTransform(scrollYProgress, [0, 0.4], [50, 0]);
//   const leftOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

//   const rightY = useTransform(scrollYProgress, [0.15, 0.6], [60, 0]);
//   const rightOpacity = useTransform(scrollYProgress, [0.15, 0.6], [0, 1]);

//   return (
//     <section
//       ref={ref}
//       className="relative overflow-hidden bg-[#020208]"
//     >
//       {/* Apple-style matte background */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute inset-0 bg-gradient-to-b from-[#060012] via-[#020208] to-black" />

//         <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_50%_-10%,rgba(120,80,200,0.08),transparent_65%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_80%_70%,rgba(60,40,140,0.06),transparent_70%)]" />
//       </div>

//       {/* Content */}
//       <div className="relative mx-auto max-w-6xl px-6 py-24">
//         <div className="grid gap-16 lg:grid-cols-12">
//           {/* LEFT */}
//           <motion.div
//             style={{
//               y: reduced ? 0 : leftY,
//               opacity: leftOpacity,
//             }}
//             className="lg:col-span-5"
//           >
//             <h2 className="text-[42px] font-semibold leading-tight tracking-tight text-white">
//               Why choose <br />
//               <span className="text-violet-400">metamaster ?</span>
//             </h2>

//             <p className="mt-6 max-w-md text-sm leading-relaxed text-white/55">
//               Calm, precise, and intentional — everything works quietly in your
//               favor.
//             </p>

//             <a
//               href="#contact"
//               className="mt-10 inline-flex rounded-full bg-white px-7 py-3 text-[13px] font-semibold text-black transition hover:bg-white/90"
//             >
//               Contact us
//             </a>
//           </motion.div>

//           {/* RIGHT */}
//           <motion.div
//             style={{
//               y: reduced ? 0 : rightY,
//               opacity: rightOpacity,
//             }}
//             className="lg:col-span-7 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md"
//           >
//             <div className="px-8">
//               {ITEMS.map((item, idx) => (
//                 <AccordionRow
//                   key={item.title}
//                   item={item}
//                   open={openIndex === idx}
//                   onToggle={() =>
//                     setOpenIndex(openIndex === idx ? -1 : idx)
//                   }
//                 />
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Briefcase,
  Gem,
  Target,
  Clock,
  Palette,
  Handshake,
} from "lucide-react";


const FEATURES = [
  {
    title: "360° Solutions",
    desc: "From brand strategy and creative design to digital execution and performance marketing — everything under one roof.",
    icon: Briefcase,
  },
  {
    title: "Custom Strategy",
    desc: "Every brand is unique. We design data-backed strategies aligned with your business goals and audience behavior.",
    icon: Gem,
  },
  {
    title: "Result-Oriented",
    desc: "Clear KPIs, performance tracking, optimization loops, and transparent reporting focused on real business growth.",
    icon: Target,
  },
  {
    title: "Timely Delivery",
    desc: "Strong execution frameworks ensure fast turnarounds without compromising creativity or quality.",
    icon: Clock,
  },
  {
    title: "Creative Excellence",
    desc: "Premium visuals, storytelling, and branding crafted to stand out and connect emotionally with your audience.",
    icon: Palette,
  },
  {
    title: "Client-Centric Approach",
    desc: "Clear communication, collaborative workflows, and decisions driven by what’s best for your brand.",
    icon: Handshake,
  },
];


export default function WhyChooseUs() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

 
  const scrollByAmount = (amount: number) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    autoSlideRef.current = setInterval(() => {
      slider.scrollBy({ left: 320, behavior: "smooth" });
    }, 3200);

    const handleInfinite = () => {
      const maxScroll = slider.scrollWidth / 2;

      if (slider.scrollLeft >= maxScroll) {
        slider.scrollLeft = slider.scrollLeft - maxScroll;
      }
    };

    slider.addEventListener("scroll", handleInfinite);

    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
      slider.removeEventListener("scroll", handleInfinite);
    };
  }, []);

  /* Pause auto slide on interaction */
  const pauseAutoSlide = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
      autoSlideRef.current = null;
    }
  };

  /* 🔁 Duplicate cards for infinite illusion */
  const LOOP_ITEMS = [...FEATURES, ...FEATURES];

  return (
    <section className="bg-gradient-to-r from-[#12001f] via-[#0e001a] to-[#12001f] py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">

        {/* HEADING */}
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
            Why brands choose <span className="text-purple-600">Meta Master</span>
          </h2>
          <div className="mt-3 h-[2px] w-12 bg-purple-500" />
          <p className="mt-4 text-sm leading-relaxed text-white">
            Trusted by growing brands for strategy, creativity, execution, and measurable impact.
          </p>
        </div>

        {/* SLIDER WRAPPER */}
        <div className="relative">

          {/* LEFT ARROW */}
          <button
            onClick={() => scrollByAmount(-320)}
            className="absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white hover:text-black"
          >
            <ChevronLeft size={18} />
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={() => scrollByAmount(320)}
            className="absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white hover:text-black"
          >
            <ChevronRight size={18} />
          </button>

          {/* DRAGGABLE CARDS */}
          <motion.div
            ref={sliderRef}
            onMouseDown={pauseAutoSlide}
            onTouchStart={pauseAutoSlide}
            className="mt-20 flex gap-16 overflow-x-auto scroll-smooth px-2 pb-14 cursor-grab py-20"
            style={{ scrollbarWidth: "none" }}
            whileTap={{ cursor: "grabbing" }}
          >
            {LOOP_ITEMS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative min-w-[280px] flex justify-center"
              >
                {/* PIN */}
                <div className="absolute -top-10 flex flex-col items-center">
                  <span className="h-3 w-3 rounded-full bg-white" />
                  <span className="h-8 w-[1px] bg-gray-300" />
                </div>

                {/* CARD */}
                <motion.div
                  whileHover={{
                    y: -8,
                    boxShadow: "0 0 0 1px rgba(168,85,247,0.55)",
                  }}
                  transition={{ type: "spring", stiffness: 180, damping: 16 }}
                  className="
                    w-[260px]
                    border border-purple-500/20
                    bg-[#0f0b1d]/80
                    backdrop-blur-md
                    px-7 py-10
                    text-center
                    transition-shadow duration-100
                    
                  "
                >
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-purple-400">
  <item.icon size={28} strokeWidth={1.8} />
</div>


                  <h3 className="text-xs font-semibold tracking-widest text-purple-600 uppercase">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-white">
                    {item.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <p className="mt-4 text-sm text-gray-500 text-center">
          ← Drag or use arrows to explore →
        </p>
      </div>
    </section>
  );
}

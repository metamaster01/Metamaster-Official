// "use client";

// import Image from "next/image";
// import { useEffect, useRef } from "react";

// const brands = [
//   "/brands/1.png",
//   "/brands/2.png",
//   "/brands/3.png",
//   "/brands/4.png",
//   "/brands/5.png",
//   "/brands/6.png",
//   "/brands/7.png",
//   "/brands/8.png",
//   "/brands/9.png",
//   "/brands/chakra.png",
//   "/brands/xplore.png",
// ];

// export default function Advertise() {
//   const trackRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!trackRef.current) return;

//     const track = trackRef.current;
//     let animationFrame: number;
//     let translateX = 0;

//     const speed = 0.3; 

//     const animate = () => {
//       translateX -= speed;

//       if (Math.abs(translateX) >= track.scrollWidth / 2) {
//         translateX = 0;
//       }

//       track.style.transform = `translateX(${translateX}px)`;
//       animationFrame = requestAnimationFrame(animate);
//     };

//     animationFrame = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(animationFrame);
//   }, []);

//   return (
//     <section className="w-full overflow-hidden py-6 sm:py-8 bg-gradient-to-r from-[#12001f] via-[#0e001a] to-[#12001f]">
//       <div className="w-full px-6">
//         {/* Heading */}
//         <p className="mb-4 text-center text-xs sm:text-sm tracking-wide text-gold/70">
//           Trusted by Brands That Grow Fast
//         </p>

//         {/* Carousel */}
//         <div className="relative overflow-hidden">
//           <div
//             ref={trackRef}
//             className="flex items-center gap-14 w-max"
//           >
//             {[...brands, ...brands].map((logo, index) => (
//               <div
//                 key={index}
//                 className="flex items-center justify-center min-w-[110px] sm:min-w-[120px] opacity-90"
//               >
//                 <Image
//                   src={logo}
//                   alt="Brand logo"
//                   width={120}
//                   height={60}
//                   className="object-contain"
//                   priority={index < brands.length}
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Soft fade edges */}
//           <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0e001a] to-transparent" />
//           <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0e001a] to-transparent" />
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const brands = [
  "/brands/1.png",
  "/brands/2.png",
  "/brands/3.png",
  "/brands/4.png",
  "/brands/5.png",
  "/brands/6.png",
  "/brands/7.png",
  "/brands/8.png",
  "/brands/9.png",
  "/brands/chakra.png",
  "/brands/xplore.png",
];

export default function Advertise() {
  return (
    <section className="relative w-full py-28 bg-gradient-to-r from-[#12001f] via-[#0e001a] to-[#12001f] text-white overflow-hidden">
      
      {/* Background ambience */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[400px] w-[400px] rounded-full bg-purple-600/20 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-indigo-600/20 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Our Clients
          </h2>
          <p className="mt-3 text-sm text-white/60">
            Trusted by startups that grow fast with Meta Master
          </p>
          <div className="mx-auto mt-4 h-[2px] w-14 bg-purple-500" />
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {brands.map((logo, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.9 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -10 }}
              className="
                group relative
                rounded-2xl
                bg-white
                p-6
                flex items-center justify-center
                shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)]
                cursor-pointer
                transition
              "
            >
              {/* Glow on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(400px_circle_at_50%_0%,rgba(168,85,247,0.35),transparent_60%)]" />
              </div>

              <Image
                src={logo}
                alt="Client logo"
                width={160}
                height={80}
                className="
                  relative z-10
                  object-contain
                  transition duration-300
                  group-hover:scale-110
                "
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom line */}
        <p className="mt-14 text-center text-xs text-white/50">
          From startups to enterprise brands — we build long-term digital partnerships.
        </p>
      </div>
    </section>
  );
}

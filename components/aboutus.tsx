// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";

// export default function AboutUs() {
//   return (
//     <section className="relative w-full bg-gradient-to-r from-[#12001f] via-[#0e001a] to-[#12001f] py-20 overflow-hidden">
      
//       {/* 🌊 ANIMATED WAVES BACKGROUND */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <motion.svg
//           viewBox="0 0 1440 320"
//           className="absolute bottom-0 w-[200%] opacity-30"
//           initial={{ x: 0 }}
//           animate={{ x: "-50%" }}
//           transition={{
//             duration: 18,
//             ease: "linear",
//             repeat: Infinity,
//           }}
//         >
//           <path
//             fill="#a855f7"
//             fillOpacity="0.35"
//             d="M0,192L80,170.7C160,149,320,107,480,96C640,85,800,107,960,138.7C1120,171,1280,213,1360,234.7L1440,256V320H0Z"
//           />
//         </motion.svg>

//         <motion.svg
//           viewBox="0 0 1440 320"
//           className="absolute bottom-10 w-[200%] opacity-20"
//           initial={{ x: "-30%" }}
//           animate={{ x: "0%" }}
//           transition={{
//             duration: 25,
//             ease: "linear",
//             repeat: Infinity,
//           }}
//         >
//           <path
//             fill="#f838e8"
//             fillOpacity="0.25"
//             d="M0,160L120,154.7C240,149,480,139,720,154.7C960,171,1200,213,1320,234.7L1440,256V320H0Z"
//           />
//         </motion.svg>
//       </div>

//       {/* 🌫 subtle grain */}
//       <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay" />

//       {/* CONTENT */}
//       <div className="relative z-10 mx-auto max-w-7xl px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

//           {/* Left Heading */}
//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl sm:text-5xl font-semibold text-white">
//               About Us!
//             </h2>
//           </motion.div>

//           {/* Right Content */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={{
//               hidden: {},
//               visible: {
//                 transition: { staggerChildren: 0.2 },
//               },
//             }}
//             className="text-white/85 space-y-10"
//           >
//             <motion.p
//               variants={{
//                 hidden: { opacity: 0, y: 30 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//               transition={{ duration: 0.6, ease: "easeOut" }}
//               className="text-sm sm:text-base leading-relaxed"
//             >
//               Meta Master is your one-stop destination for 360° marketing,
//               branding, and event solutions. We blend creativity, technology,
//               and strategy to turn your vision into reality.
//             </motion.p>

//             <motion.div
//               variants={{
//                 hidden: { opacity: 0, y: 30 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//               transition={{ duration: 0.6, ease: "easeOut" }}
//             >
//               <h3 className="text-2xl font-semibold text-white mb-4">
//                 Who we are?
//               </h3>

//               <p className="text-sm sm:text-base leading-relaxed">
//                 Meta Master is a new-age 360° digital marketing agency that
//                 blends creativity, technology, and performance to build
//                 powerful brands and drive real business growth.
//               </p>
//             </motion.div>

//             <motion.div
//               variants={{
//                 hidden: { opacity: 0, scale: 0.9 },
//                 visible: { opacity: 1, scale: 1 },
//               }}
//               transition={{ duration: 0.5, ease: "easeOut" }}
//             >
//               <Link
//                 href="/about"
//                 className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition hover:scale-105"
//               >
//                 More about us
//               </Link>
//             </motion.div>

//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#12001f] via-[#0e001a] to-[#12001f]">

      {/* 🌊 BACKGROUND WAVE (shared for About + Ribbon) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-[200%] opacity-25"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <path
            fill="#ba2bf3"
            fillOpacity="0.54"
            d="M0,192L80,170.7C160,149,320,107,480,96C640,85,800,107,960,138.7C1120,171,1280,213,1360,234.7L1440,256V320H0Z"
          />
        </motion.svg>
      </div>

      {/* 🌫 Grain */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay" />

      {/* ================= ABOUT CONTENT ================= */}
      <div className="relative z-10 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left Heading */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-semibold text-white">
                About Us!
              </h2>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.2 },
                },
              }}
              className="text-white/85 space-y-10"
            >
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-sm sm:text-base leading-relaxed"
              >
                Meta Master is your one-stop destination for 360° marketing,
                branding, and event solutions. We blend creativity, technology,
                and strategy to turn your vision into reality.
              </motion.p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Who we are?
                </h3>
                <p className="text-sm sm:text-base leading-relaxed">
                  Meta Master is a new-age 360° digital marketing agency that
                  blends creativity, technology, and performance to build
                  powerful brands and drive real business growth.
                </p>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition hover:scale-105"
                >
                  More about us
                </Link>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ================= RIBBON (CONNECTED FLOW) ================= */}
      <div className="relative z-10 pb-28">
        <div
          className="
            relative
            w-[140%]
            -rotate-3
            bg-[#D26AFF]
            py-6 sm:py-7
            shadow-xl
            overflow-hidden
          "
        >
          <motion.div
            className="flex w-max"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 14,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[1, 2, 3, 4, 5].map((_, i) => (
              <p
                key={i}
                className="
                  px-16
                  text-xl sm:text-3xl
                  font-semibold
                  text-white
                  whitespace-nowrap
                "
              >
                One Agency. Every Solution. Maximum Impact.
              </p>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}

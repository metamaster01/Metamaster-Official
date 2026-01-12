// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// const glowVariants = {
//   initial: { opacity: 0 },
//   animate: {
//     opacity: [0, 0.6, 0],
//     transition: { duration: 3, repeat: Infinity },
//   },
// };

// const Newsletter = () => {
//   return (
//     <div className="relative w-full flex justify-center px-4 py-20 bg-gradient-to-r from-[#12001f] via-[#0e001a] to-[#12001f] overflow-hidden">
//       {/* Ambient floating glow */}
//       <motion.div
//         variants={glowVariants}
//         initial="initial"
//         animate="animate"
//         className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/30 blur-[160px]"
//       />

//       {/* Scroll container */}
//       <motion.div
//         initial={{ opacity: 0, y: 80 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//         viewport={{ once: true }}
//         className="relative w-full max-w-5xl"
//       >
//         {/* Luxury card */}
//         <motion.div
//           whileHover={{ scale: 1.02 }}
//           transition={{ type: "spring", stiffness: 160, damping: 18 }}
//           className="relative rounded-3xl bg-white/80 backdrop-blur-2xl shadow-[0_40px_120px_rgba(0,0,0,0.45)] flex flex-col md:flex-row items-center justify-between gap-1 px-8 py-12 border border-white/40"
//         >
//           {/* Animated gradient border */}
//           <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-purple-500/30 opacity-0 hover:opacity-100 transition-opacity duration-500" />

//           {/* Left content */}
//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="relative z-10 text-center md:text-left"
//           >
//             <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">
//               Join the newsletter
//             </h2>
//             <p className="mt-3 text-gray-600 text-sm md:text-base max-w-sm">
//               Subscribe for weekly updates. No spams ever!
//             </p>
//           </motion.div>

//           {/* Right content */}
//           <motion.div
//             initial={{ opacity: 0, x: 60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="relative z-10 w-full md:w-auto flex flex-col items-center gap-4"
//           >
//             <div className="relative w-full sm:w-80">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full rounded-full bg-white/90 px-6 py-4 pr-40 text-sm outline-none ring-1 ring-gray-200 transition-all duration-300 focus:ring-2 focus:ring-purple-500"
//               />
//               <motion.button
//                 whileHover={{ scale: 1.08 }}
//                 whileTap={{ scale: 0.92 }}
//                 className="absolute right-1 top-1 bottom-1 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 px-8 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(168,85,247,0.6)]"
//               >
//                 Subscribe
//               </motion.button>
//             </div>

//             <p className="text-xs text-gray-400 text-center">
//               We respect your privacy. Unsubscribe anytime.
//             </p>
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default Newsletter;








"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";

/* ---------------- ANIMATION CONFIG ---------------- */

const glowVariants = {
  animate: {
    opacity: [0.15, 0.35, 0.15],
    transition: {
      duration: 6,
      easing: "easeInOut",
      repeat: Infinity,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

/* ---------------- COMPONENT ---------------- */

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = async () => {
    setError("");

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);

      const { error } = await supabase
        .from("newsletter_subscribers")
        .insert({ email });

      // Ignore duplicate email error (professional behavior)
      if (error && error.code !== "23505") {
        throw error;
      }

      setSuccess(true);
      setEmail("");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="relative w-full flex justify-center px-4 py-24 bg-gradient-to-r from-[#12001f] via-[#0e001a] to-[#12001f] overflow-hidden">
        {/* Ambient glow (calm) */}
        <motion.div
          variants={glowVariants}
          animate="animate"
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-purple-600/25 blur-[180px]"
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative w-full max-w-5xl"
        >
          <div className="relative rounded-3xl bg-white/85 backdrop-blur-2xl shadow-[0_40px_120px_rgba(0,0,0,0.45)] flex flex-col md:flex-row items-center justify-between gap-10 px-8 py-14 border border-white/40">
            {/* Left */}
            <div className="text-center md:text-left max-w-md">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                Join our newsletter
              </h2>
              <p className="mt-3 text-gray-600 text-sm md:text-base">
                Get curated insights, updates, and growth ideas. No spam — ever.
              </p>
            </div>

            {/* Right */}
            <div className="w-full md:w-auto flex flex-col items-center gap-4">
              <div className="relative w-full sm:w-80">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full rounded-full bg-white px-6 py-4 pr-36 text-sm outline-none ring-1 ring-gray-200 focus:ring-2 focus:ring-purple-500 transition"
                />

                <button
                  onClick={handleSubscribe}
                  disabled={loading}
                  className="absolute right-1 top-1 bottom-1 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 px-7 text-sm font-semibold text-white shadow-lg disabled:opacity-60"
                >
                  {loading ? "..." : "Subscribe"}
                </button>
              </div>

              {error && (
                <p className="text-xs text-red-500">{error}</p>
              )}

              <p className="text-xs text-gray-400 text-center">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ---------------- SUCCESS MODAL ---------------- */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 160, damping: 20 }}
              className="bg-white rounded-2xl p-10 max-w-sm w-full text-center shadow-2xl"
            >
              <div className="text-green-500 text-5xl mb-4">✓</div>
              <h3 className="text-xl font-semibold text-gray-900">
                Thank you for subscribing!
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                You’re now part of our community 🚀
              </p>

              <button
                onClick={() => setSuccess(false)}
                className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-full text-sm"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

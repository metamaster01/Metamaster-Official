"use client";

import React from "react";
import { motion } from "framer-motion";

const glowVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: [0, 0.6, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

const Newsletter = () => {
  return (
    <div className="relative w-full flex justify-center px-4 py-20 bg-gradient-to-r from-[#12001f] via-[#0e001a] to-[#12001f] overflow-hidden">
      {/* Ambient floating glow */}
      <motion.div
        variants={glowVariants}
        initial="initial"
        animate="animate"
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/30 blur-[160px]"
      />

      {/* Scroll container */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full max-w-5xl"
      >
        {/* Luxury card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 160, damping: 18 }}
          className="relative rounded-3xl bg-white/80 backdrop-blur-2xl shadow-[0_40px_120px_rgba(0,0,0,0.45)] flex flex-col md:flex-row items-center justify-between gap-1 px-8 py-12 border border-white/40"
        >
          {/* Animated gradient border */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-purple-500/30 opacity-0 hover:opacity-100 transition-opacity duration-500" />

          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">
              Join the newsletter
            </h2>
            <p className="mt-3 text-gray-600 text-sm md:text-base max-w-sm">
              Subscribe for weekly updates. No spams ever!
            </p>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10 w-full md:w-auto flex flex-col items-center gap-4"
          >
            <div className="relative w-full sm:w-80">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-full bg-white/90 px-6 py-4 pr-40 text-sm outline-none ring-1 ring-gray-200 transition-all duration-300 focus:ring-2 focus:ring-purple-500"
              />
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                className="absolute right-1 top-1 bottom-1 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 px-8 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(168,85,247,0.6)]"
              >
                Subscribe
              </motion.button>
            </div>

            <p className="text-xs text-gray-400 text-center">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Newsletter;

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MeetFounder() {
  return (
    <section className="relative w-full px-8 py-24 overflow-hidden">
      
      {/* Dark Violet Heavy Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#12001f] via-[#1a002e] to-black" />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full max-w-sm rounded-2xl overflow-hidden"
        >
          <Image
            src="/founder1.png"
            alt="Founder"
            width={420}
            height={520}
            className="rounded-2xl object-cover"
            priority
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-white"
        >
          {/* Bigger Headline */}
          <p className="text-base tracking-[0.3em] text-purple-300/90 mb-4 uppercase">
            Meet the Founder
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Aman Kumar
          </h2>

          <p className="text-white/70 max-w-xl leading-relaxed mb-8">
            He is a founder & CEO of Meta master. He’s a practitioner who built
            a ₹3L/month digital agency by age 23 — and now he mentors students
            to achieve the same.
          </p>

          <button className="rounded-full bg-white px-7 py-3 text-sm font-medium text-black hover:bg-white/90 transition">
            Contact Aman
          </button>
        </motion.div>

      </div>
    </section>
  );
}

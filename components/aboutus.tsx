"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="w-full bg-gradient-to-r from-[#12001f] via-[#0e001a] to-[#12001f] py-20 overflow-hidden">
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
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="text-white/85 space-y-10"
          >
            {/* Intro */}
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
              and strategy to turn your vision into reality. Whether you’re a
              startup, growing business, or an established brand — we craft
              tailor-made experiences that deliver results.
            </motion.p>

            {/* Who we are */}
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
                powerful brands and drive real business growth. Founded by
                Aman Kumar, a passionate digital marketing expert with 5+
                years of hands-on experience and 100+ successful projects
                across industries.
              </p>
            </motion.div>

            {/* CTA */}
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
    </section>
  );
}

"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutMetaMaster() {
  const { scrollY } = useScroll();

  // Scroll → faster rotation
  const rotate = useTransform(scrollY, [0, 1500], [0, 1080]);

  // Scroll → move down
  const y = useTransform(scrollY, [0, 1500], [0, 220]);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#12001f] via-[#0e001a] to-[#12001f]">
      {/* NAVBAR BLEND */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-28 bg-gradient-to-b from-black/70 via-black/40 to-transparent z-10" />

      {/* AMBIENT GLOWS */}
      <div className="absolute -top-52 -left-52 w-[640px] h-[640px] bg-purple-800/25 blur-[220px] rounded-full" />
      <div className="absolute top-1/3 -right-52 w-[520px] h-[520px] bg-fuchsia-700/20 blur-[200px] rounded-full" />

      {/* DEPTH OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />

      <div className="relative z-20 max-w-7xl mx-auto px-8 md:px-12 py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-28">
          {/* LEFT TEXT */}
          <div>
            <h1 className="text-white text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              About Meta
              <br />
              Master
            </h1>

            <p className="mt-7 max-w-xl text-gray-300/90 text-sm md:text-base leading-relaxed">
              Meta Master is a 360° digital solutions hub built to help businesses
              grow, transform, and thrive in the digital-first era. We blend
              creativity, technology, and performance to craft strategies that
              don’t just deliver results today, but build sustainable success
              for tomorrow.
            </p>
          </div>

          {/* RIGHT — SCROLL REACTIVE SVG */}
          <div className="flex justify-center lg:justify-end pr-6 lg:pr-12">
            <motion.div
              className="relative translate-x-[-24px] will-change-transform"
              style={{ rotate, y }}
              whileHover={{
                rotate: "+=180",
                transition: { duration: 6, ease: "linear" },
              }}
            >
              {/* ===== YOUR SVG — NOT MODIFIED ===== */}
              <svg
                width="549"
                height="555"
                viewBox="0 0 549 555"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.26853 177.028L88.5451 336.914C93.0028 345.166 85.831 354.821 76.8742 353.261L37.7859 346.38C31.6874 345.481 25.8366 349.415 24.9388 355.518L15.8473 406.462C14.9494 412.565 18.8808 418.421 24.9793 419.32L204.54 450.908C213.899 452.447 216.912 464.004 209.978 470.417L180.248 496.573C175.625 500.848 175.171 507.736 179.443 512.364L213.702 550.991C217.974 555.618 224.857 556.073 229.48 551.798L365.722 430.939C372.657 424.527 383.791 429.206 384.286 438.872L386.329 478.746C386.638 484.788 391.736 489.777 398.175 489.447L449.687 486.808C455.724 486.498 460.708 481.397 460.378 474.953L451.051 292.901C450.577 283.638 461.174 277.845 468.707 283.113L500.954 306.094C505.989 309.874 512.79 308.718 516.566 303.679L546.698 261.753C550.475 256.713 549.319 249.907 544.284 246.127L396.403 139.824C388.85 134.154 390.666 122.35 399.819 119.862L437.999 109.022C443.974 107.504 447.287 101.277 445.77 95.2974L431.52 45.5493C430.003 39.5696 423.78 36.2539 417.806 37.7715L242.414 87.5435C233.261 90.0315 225.542 81.1389 229.133 72.4746L244.602 35.7417C247.13 29.9586 244.385 23.638 238.606 21.1073L190.768 0.943826C184.989 -1.58691 178.674 1.15962 176.146 6.94271L105.666 174.911C102.075 183.575 90.0014 184.193 85.5436 175.941L66.4023 140.982C63.2963 135.487 56.7334 133.4 51.2437 136.508L5.71609 161.455C0.247043 164.966 -1.43501 171.513 1.26853 177.028Z"
                  fill="url(#paint0_linear_72_2524)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_72_2524"
                    x1="533.669"
                    y1="193.716"
                    x2="-119.356"
                    y2="314.461"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#D26AFF" />
                    <stop offset="1" stopColor="#D26AFF" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              {/* SVG SOFT GLOW */}
              <div className="pointer-events-none absolute inset-0 blur-[90px] bg-purple-500/20" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent" />
    </section>
  );
}

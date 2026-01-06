"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutMetaMaster() {
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

          {/* RIGHT — ROTATING SVG (SVG UNTOUCHED) */}
          <div className="flex justify-center lg:justify-end pr-6 lg:pr-12">
            <motion.div
              className="flex justify-center lg:justify-end pr-0 lg:pr-0 translate-x-[-24px] will-change-transform"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 45,
                ease: "linear",
              }}
              whileHover={{
                rotate: 360,
                transition: { duration: 10, ease: "linear" },
              }}
            >

              {/* ===== YOUR SVG — NOT MODIFIED ===== */}
              <svg width="549" height="555" viewBox="0 0 549 555" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.26853 177.028L88.5451 336.914C93.0028 345.166 85.831 354.821 76.8742 353.261L37.7859 346.38C31.6874 345.481 25.8366 349.415 24.9388 355.518L15.8473 406.462C14.9494 412.565 18.8808 418.421 24.9793 419.32L204.54 450.908C213.899 452.447 216.912 464.004 209.978 470.417L180.248 496.573C175.625 500.848 175.171 507.736 179.443 512.364L213.702 550.991C217.974 555.618 224.857 556.073 229.48 551.798L365.722 430.939C372.657 424.527 383.791 429.206 384.286 438.872L386.329 478.746C386.638 484.788 391.736 489.777 398.175 489.447L449.687 486.808C455.724 486.498 460.708 481.397 460.378 474.953L451.051 292.901C450.577 283.638 461.174 277.845 468.707 283.113L500.954 306.094C505.989 309.874 512.79 308.718 516.566 303.679L546.698 261.753C550.475 256.713 549.319 249.907 544.284 246.127L396.403 139.824C388.85 134.154 390.666 122.35 399.819 119.862L437.999 109.022C443.974 107.504 447.287 101.277 445.77 95.2974L431.52 45.5493C430.003 39.5696 423.78 36.2539 417.806 37.7715L242.414 87.5435C233.261 90.0315 225.542 81.1389 229.133 72.4746L244.602 35.7417C247.13 29.9586 244.385 23.638 238.606 21.1073L190.768 0.943826C184.989 -1.58691 178.674 1.15962 176.146 6.94271L105.666 174.911C102.075 183.575 90.0014 184.193 85.5436 175.941L66.4023 140.982C63.2963 135.487 56.7334 133.4 51.2437 136.508L5.71609 161.455C0.247043 164.966 -1.43501 171.513 1.26853 177.028ZM169.106 216.081L207.205 124.884C211.137 114.991 225.304 115.88 228.256 126.228L236.583 154.877C238.1 160.857 244.322 164.173 250.297 162.655L345.345 135.575C355.685 132.622 363.548 144.334 357.521 152.72L340.206 177.029C336.429 182.068 337.585 188.874 342.62 192.654L423.046 250.319C431.827 256.33 427.7 270.272 417.236 270.808L387.456 272.334C381.419 272.643 376.435 277.744 376.765 284.189L381.82 382.867C382.357 393.339 369.324 398.852 362.049 390.745L341.958 368.756C337.686 364.129 330.804 363.674 326.181 367.949L252.451 433.108C244.33 439.985 232.288 433.333 234.166 422.737L239.522 393.388C240.419 387.284 236.488 381.428 230.389 380.529L133.071 363.305C122.484 361.424 120.152 347.41 129.584 342.484L155.887 328.214C161.377 325.106 163.461 318.538 160.355 313.044L113.136 226.218C108.214 216.778 117.357 206.214 127.263 210.552L154.887 222.059C160.242 224.208 166.578 221.864 169.106 216.081Z" fill="url(#paint0_linear_72_2524)"/>
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

              {/* SVG SOFT GLOW (UNCHANGED) */}
              <div className="pointer-events-none absolute inset-0 blur-[90px] bg-purple-500/20" />
            </motion.div>
          </div>

        </div>
      </div>

      {/* BOTTOM CONTINUITY FADE */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent" />
    </section>
  );
}

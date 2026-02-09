"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutMetaMaster() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1a0a2e] to-[#0a0a0a] mt-14">
      {/* AMBIENT GLOWS */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-purple-600/15 blur-[200px] rounded-full" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-fuchsia-600/10 blur-[180px] rounded-full" />

      {/* MAIN CONTENT CONTAINER */}
      <div className="relative z-10 w-full min-h-screen flex items-center">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-0">
          
          {/* DESKTOP LAYOUT - Side by side with overlay */}
          <div className="hidden lg:flex items-center justify-between relative">
            
            {/* LEFT SIDE - TEXT CONTENT - 65% width */}
            <div className="w-[65%] pr-12 xl:pr-20 z-20">
              <motion.h1 
                className="text-white text-8xl  font-bold leading-[1.05] tracking-tight"
                style={{ fontFamily: "'Red Hat Display', 'Inter', sans-serif" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                About  Meta Master
                
                – Built for Indian Startups
              </motion.h1>

              <motion.p 
                className="mt-8 max-w-[620px] text-gray-300/90 text-base xl:text-lg leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Meta Master is a startup-focused digital marketing and branding agency built with a mission to help businesses transition from offline to online and grow digitally with confidence.
                <br/><br/>

With years of experience and multiple successful projects, we understand the challenges startups face and design solutions that work within limited budgets.
              </motion.p>
            </div>

            {/* RIGHT SIDE - ROTATING ICON - 35% width */}
            <div className="w-[35%] flex justify-end">
              <motion.div
                className="relative w-[450px] h-[450px] xl:w-[550px] xl:h-[550px] 2xl:w-[600px] 2xl:h-[600px]"
                animate={{ 
                  rotate: 360 
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <img 
                  src="/about-header.png" 
                  alt="Meta Master Icon"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
                <div className="absolute inset-0 blur-[120px] bg-purple-500/40 -z-10 scale-75" />
              </motion.div>
            </div>

          </div>

          {/* MOBILE/TABLET LAYOUT - Top to bottom */}
          <div className="lg:hidden flex flex-col">
            
            {/* TOP - TEXT CONTENT */}
            <div className="w-full pb-12">
              <motion.h1 
                className="text-white text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight"
                style={{ fontFamily: "'Red Hat Display', 'Inter', sans-serif" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                About Meta Master
                <br />
                 - Built for Indian Startups
              </motion.h1>

              <motion.p 
                className="mt-6 text-gray-300/90 text-sm sm:text-base leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Meta Master is a startup-focused digital marketing and branding agency built with a mission to help businesses transition from offline to online and grow digitally with confidence.
                <br/><br/>
With years of experience and multiple successful projects, we understand the challenges startups face and design solutions that work within limited budgets.
              </motion.p>
            </div>

            {/* BOTTOM - FULL ICON */}
            <div className="w-full flex justify-center relative pt-8">
              <motion.div
                className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[450px] md:h-[450px]"
                animate={{ 
                  rotate: 360 
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <img 
                  src="/about-header.png" 
                  alt="Meta Master Icon"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
                <div className="absolute inset-0 blur-[100px] bg-purple-500/40 -z-10 scale-75" />
              </motion.div>
            </div>

          </div>

        </div>
      </div>

      {/* GRADIENT OVERLAYS */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
    </section>
  );
}

// Add fonts to your global.css:
// @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@700;800;900&family=Inter:wght@400;500;600&display=swap');
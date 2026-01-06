"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  { title: "Zaina Collection – Fashion eCommerce", category: " A digital store that feels like luxury.", image: "/projects/1.png" },
  { title: "Xplore events – Event management", category: "a digital experience that celebrates every moment.", image: "/projects/2.png" },
  { title: "Chakra Crystals-Wellness", category: " Real creators, real growth.", image: "/projects/3.png" },

  { title: "Zaina Collection – Fashion eCommerce", category: " A digital store that feels like luxury.", image: "/projects/1.png" },
  { title: "Xplore events – Event management", category: "a digital experience that celebrates every moment.", image: "/projects/2.png" },
  { title: "Chakra Crystals-Wellness", category: " Real creators, real growth.", image: "/projects/3.png" },

  { title: "Zaina Collection – Fashion eCommerce", category: " A digital store that feels like luxury.", image: "/projects/1.png" },
  { title: "Xplore events – Event management", category: "a digital experience that celebrates every moment.", image: "/projects/2.png" },
  { title: "Chakra Crystals-Wellness", category: " Real creators, real growth.", image: "/projects/3.png" },

  { title: "Zaina Collection – Fashion eCommerce", category: " A digital store that feels like luxury.", image: "/projects/1.png" },
  { title: "Xplore events – Event management", category: "a digital experience that celebrates every moment.", image: "/projects/2.png" },
  { title: "Chakra Crystals-Wellness", category: " Real creators, real growth.", image: "/projects/3.png" },
];

export default function OurWorksPage() {
  const rows = [];
  for (let i = 0; i < projects.length; i += 3) {
    rows.push(projects.slice(i, i + 3));
  }

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen bg-[#0e0e0e] text-white overflow-hidden">

        {/* Soft background glow */}
        <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-3xl" />

        {/* Header */}
        <section className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold"
          >
            Our Projects
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 max-w-2xl text-sm text-white/70"
          >
            From branding and digital marketing to full-scale event
            execution, explore how Meta Master transforms ideas into
            impactful experiences.
          </motion.p>
        </section>

        {/* Projects Rows */}
        <section className="relative z-10 mx-auto max-w-7xl px-6 pb-28 space-y-20">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="space-y-14">

              {/* Row Grid */}
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {row.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>

              {/* Divider after each row */}
              {rowIndex !== rows.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="h-px w-full origin-left bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
              )}
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import CountUp from "react-countup";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function AdvancedAbout() {

  /* ================= MAGNETIC CURSOR ================= */
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
      document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--my", `${e.clientY}px`);
    };

    const interactive = document.querySelectorAll("a, button, .magnetic");
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", () => setHovering(true));
      el.addEventListener("mouseleave", () => setHovering(false));
    });

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  /* ================= PARTICLES ================= */
  const particlesInit = async (engine: any) => {
    await loadSlim(engine);
  };

  /* ================= WORD REVEAL ================= */
  const RevealText = ({ text }: { text: string }) => {
    const words = text.split(" ");
    return (
      <p className="flex flex-wrap">
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="mr-2"
          >
            {word}
          </motion.span>
        ))}
      </p>
    );
  };

  /* ================= MAGNETIC BUTTON ================= */
  const MagneticButton = ({ children }: any) => {
    const ref = useRef<HTMLDivElement>(null);

    const handleMove = (e: any) => {
      const rect = ref.current!.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      ref.current!.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    };

    const reset = () => {
      ref.current!.style.transform = "translate(0px,0px)";
    };

    return (
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className="magnetic inline-block rounded-full bg-yellow-400 px-8 py-3 font-semibold text-black transition duration-300"
      >
        {children}
      </div>
    );
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0b0016] text-white cursor-none">

      {/* PARTICLES */}
      <Particles
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 40 },
            size: { value: 2 },
            move: { speed: 0.6 },
            links: { enable: true, opacity: 0.2 },
            opacity: { value: 0.3 },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      {/* MAGNETIC CURSOR */}
      <motion.div
        animate={{
          x: cursor.x - 6,
          y: cursor.y - 6,
          scale: hovering ? 2 : 1,
        }}
        transition={{ type: "spring", stiffness: 600, damping: 35 }}
        className="fixed top-0 left-0 w-3 h-3 bg-yellow-400 rounded-full pointer-events-none z-[9999]"
      />
      <motion.div
        animate={{
          x: cursor.x - 20,
          y: cursor.y - 20,
          scale: hovering ? 1.6 : 1,
        }}
        transition={{ type: "spring", stiffness: 200 }}
        className="fixed top-0 left-0 w-10 h-10 border border-yellow-400 rounded-full pointer-events-none z-[9998]"
      />

      {/* MOUSE GLOW */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx) var(--my), rgba(255,204,0,0.12), transparent 40%)",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 py-28 px-6 max-w-7xl mx-auto">

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-16 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
        >
          About Meta Master
        </motion.h1>

        {/* REVEAL TEXT */}
        <RevealText text="Meta Master is your 360 degree digital growth partner delivering measurable business impact." />

        {/* COUNTERS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-20 text-center">
          {[
            { num: 250, label: "Projects" },
            { num: 120, label: "Clients" },
            { num: 98, label: "ROI Success %" },
            { num: 5, label: "Years Experience" },
          ].map((item, i) => (
            <div key={i}>
              <div className="text-4xl font-bold text-yellow-400">
                <CountUp end={item.num} duration={3} />+
              </div>
              <p className="mt-2 text-white/70">{item.label}</p>
            </div>
          ))}
        </div>

        {/* GLASS 3D CARDS */}
        <div className="grid md:grid-cols-3 gap-12 mt-24">
          {["Vision", "Mission", "Strategy"].map((title, i) => (
            <Tilt
              key={i}
              glareEnable
              glareMaxOpacity={0.2}
              scale={1.05}
              className="rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 p-8 shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-4">{title}</h3>
              <p className="text-white/80">
                We focus on performance-driven growth, strategic branding,
                and measurable digital systems.
              </p>
            </Tilt>
          ))}
        </div>

        {/* INTERACTIVE TEXT */}
        <div className="mt-24 text-lg">
          We specialize in{" "}
          <motion.span
            whileHover={{
              scale: 1.3,
              color: "#facc15",
              textShadow: "0px 0px 20px rgba(250,204,21,0.9)",
            }}
            className="inline-block cursor-none"
          >
            performance marketing
          </motion.span>{" "}
          and{" "}
          <motion.span
            whileHover={{
              scale: 1.3,
              color: "#facc15",
              textShadow: "0px 0px 20px rgba(250,204,21,0.9)",
            }}
            className="inline-block cursor-none"
          >
            SEO growth systems
          </motion.span>.
        </div>

        {/* MAGNETIC BUTTON */}
        <div className="mt-20">
          <MagneticButton>
            <Link href="/contact">Start Growing</Link>
          </MagneticButton>
        </div>

      </div>
    </section>
  );
}

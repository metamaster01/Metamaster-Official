"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  Variants,
} from "framer-motion";
import { useRef, useEffect } from "react";



function PageIntro() {
  return (
    <motion.div
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
      className="fixed inset-0 origin-top bg-black z-[9999]"
    />
  );
}


function MagneticCursor() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 500, damping: 40 });
  const springY = useSpring(y, { stiffness: 500, damping: 40 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 6);
      y.set(e.clientY - 6);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className="
        fixed top-0 left-0 w-3 h-3
        rounded-full bg-white/80
        mix-blend-difference
        pointer-events-none
        z-[10000]
      "
    />
  );
}



function SplitChars({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  const chars = text.split("");

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.025,
        delayChildren: delay,
      },
    },
  };

  const char: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
      rotateX: 90,
      filter: "blur(8px)",
    },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.p
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`leading-relaxed ${className}`}
    >
      {chars.map((c, i) => (
        <motion.span
          key={i}
          variants={char}
          className="inline-block whitespace-pre"
        >
          {c}
        </motion.span>
      ))}
    </motion.p>
  );
}


function MagneticText({
  children,
  strength = 0.25,
  className = "",
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);

    x.set(dx * strength);
    y.set(dy * strength);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  );
}



function InteractiveCard({
  src,
  alt,
  title,
}: {
  src: string;
  alt: string;
  title: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      initial={{ opacity: 0, scale: 0.88 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.05 }}
      className="relative group rounded-3xl overflow-hidden bg-[#050008] border border-white/10"
    >
      <Image
        src={src}
        alt={alt}
        width={800}
        height={500}
        className="w-full h-full object-cover opacity-90"
      />

      <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition">
        <h3 className="text-5xl font-extrabold text-white">{title}</h3>
      </div>
    </motion.div>
  );
}



function GrainOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[999]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
        mixBlendMode: "overlay",
      }}
    />
  );
}

function SplitParagraphs({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const paragraphs = text.split("\n\n");

  return (
    <div className={className}>
      {paragraphs.map((para, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.15 }}
          className="mb-6 leading-relaxed"
        >
          {para}
        </motion.p>
      ))}
    </div>
  );
}



export default function WhoWe() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-[#080010] to-[#020005] text-white px-6 md:px-20 py-32">
      {/* 🔥 NEW LAYERS */}
      <PageIntro />
      <MagneticCursor />
      <GrainOverlay />

      <div className="max-w-7xl mx-auto space-y-48">

       {/* WHO WE ARE */}
        <div className="grid md:grid-cols-2 gap-20 items-center">

          <InteractiveCard
            src="/who-we-are.png"
            alt="Who we are"
            title="Who We Are"
          />

          <div>

            <MagneticText>
              <h2 className="text-5xl md:text-6xl font-extrabold mb-10">
                Who we are?
              </h2>
            </MagneticText>

            <SplitParagraphs
              className="text-gray-300 max-w-xl text-lg"
              text={`Meta Master is more than just a marketing agency — we are strategists, storytellers, creators, and growth drivers.

Founded with the belief that every business deserves a powerful digital presence, we help brands build credibility, connect with their audience, and scale effectively across online platforms.

What sets us apart is our focus on results, not just activity. We don’t just run ads or post content — we design systems that generate:

• real leads  
• measurable growth  
• consistent engagement  
• long-term brand authority  

We blend data-centered performance marketing with creative excellence, enabling brands to compete and grow in today’s digital landscape.`}
            />

          </div>
        </div>

        {/* MISSION */}
<div className="grid md:grid-cols-2 gap-20 items-center">

  <div>
    <MagneticText>
      <h2 className="text-5xl md:text-6xl font-extrabold mb-10">
        Our Mission
      </h2>
    </MagneticText>

    <SplitParagraphs
      className="text-gray-300 max-w-xl text-lg"
      text={`Our mission is to help businesses grow digitally with measurable results through expert strategy, creative execution, and ethical performance marketing.

We do this by:

• Crafting performance-driven marketing strategies that prioritize ROI  
• Creating scroll-stopping social media content and video-first experiences  
• Managing high-impact paid campaigns that generate quality leads  
• Developing SEO-friendly websites and systems that convert  
• Supporting entrepreneurs & founders at every step of their digital journey  

We believe digital marketing shouldn’t be confusing, overwhelming, or expensive. That’s why we design solutions that are:

• Affordable  
• Effective  
• Customized  
• Results-focused  

Whether you’re a startup founder, coach, creator, SME, or enterprise — our mission is the same: partner with you to grow, scale, and win online.`}
    />
  </div>

  <InteractiveCard
    src="/our1mission.png"
    alt="Our mission"
    title="Our Mission"
  />
</div>

      {/* VISION */}
<div className="grid md:grid-cols-2 gap-20 items-center">

  <InteractiveCard
    src="/our1vision.png"
    alt="Our vision"
    title="Our Vision"
  />

  <div>
    <MagneticText>
      <h2 className="text-5xl md:text-6xl font-extrabold mb-10">
        Our Vision
      </h2>
    </MagneticText>

    <SplitParagraphs
      className="text-gray-300 max-w-xl text-lg"
      text={`To empower every startup and business across India with affordable, effective, and performance-driven digital solutions — making digital growth simple, accessible, and impactful for all.

We envision a future where:

• Emerging brands are digitally visible  
• Small businesses thrive online  
• Personal brands become authorities  
• Clients experience measurable ROI  
• Businesses succeed with clarity, strategy, and confidence  

Meta Master aims to bridge the gap between dreams and digital reality — turning online potential into business outcomes.`}
    />
  </div>

</div>

{/* WHAT WE BELIEVE IN */}
<div className="space-y-20">

  <MagneticText>
    <h2 className="text-5xl md:text-6xl font-extrabold text-center">
      What We Believe In
    </h2>
  </MagneticText>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

    {[
      {
        title: "Transparency",
        desc: "Clear reporting, honest communication, and straightforward strategy.",
      },
      {
        title: "Performance Accountability",
        desc: "We focus on results — not vanity metrics.",
      },
      {
        title: "Creativity with Purpose",
        desc: "Beautiful content that drives business outcomes.",
      },
      {
        title: "Client-First Approach",
        desc: "Your goals become our #1 priority.",
      },
      {
        title: "Growth for All Budgets",
        desc: "Scalable solutions for startups and established brands alike.",
      },
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1 }}
        whileHover={{ scale: 1.05 }}
        className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 transition"
      >
        <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
          {item.title}
        </h3>
        <p className="text-gray-300">{item.desc}</p>
      </motion.div>
    ))}

  </div>
</div>


{/* WHO WE SERVE */}
<div className="space-y-20">

  <MagneticText>
    <h2 className="text-5xl md:text-6xl font-extrabold text-center">
      Who We Serve
    </h2>
  </MagneticText>

  <div className="grid md:grid-cols-3 gap-8 text-center">

    {[
      "Startups & Small Businesses",
      "Coaches & Personal Brands",
      "E-commerce Brands",
      "Wellness & Lifestyle",
      "Real Estate & Events",
      "Professional Services",
      "Educational & Training Platforms",
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.08 }}
        className="border border-white/10 rounded-2xl py-6 bg-white/5 hover:bg-white/10 transition"
      >
        {item}
      </motion.div>
    ))}

  </div>

  <p className="text-center text-gray-400 max-w-3xl mx-auto mt-10">
    From early-stage founders to established companies, we help brands attract attention, nurture interest, and convert it into sustainable business growth.
  </p>

</div>

{/* HOW WE WORK */}
<div className="space-y-20">

  <MagneticText>
    <h2 className="text-5xl md:text-6xl font-extrabold text-center">
      How We Work
    </h2>
  </MagneticText>

  <div className="relative max-w-3xl mx-auto">

    <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-yellow-400/30" />

    {[
      "Discover & Audit",
      "Strategy & Roadmap",
      "Creative Execution",
      "Analyze & Optimize",
      "Scale & Grow",
    ].map((step, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1 }}
        className="relative pl-12 mb-10"
      >
        <div className="absolute left-0 top-2 w-4 h-4 bg-yellow-400 rounded-full" />
        <h3 className="text-xl font-semibold">{step}</h3>
      </motion.div>
    ))}

  </div>

  <p className="text-center text-gray-400 max-w-2xl mx-auto">
    This process becomes your digital growth engine — optimized for results, not just impressions.
  </p>

</div>

{/* WHY META MASTER */}
<div className="space-y-20 text-center">

  <MagneticText>
    <h2 className="text-5xl md:text-6xl font-extrabold">
      Why Meta Master?
    </h2>
  </MagneticText>

  <p className="text-gray-400 max-w-3xl mx-auto">
    Because we don’t just do digital marketing — we engineer digital success.
  </p>

  <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">

    {[
      "Performance Marketing Expertise",
      "Creative & Content Power",
      "Strategic Growth Systems",
      "Real, Measurable Results",
      "Affordable Startup-Ready Solutions",
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.08 }}
        className="bg-white/5 border border-white/10 rounded-2xl py-6"
      >
        {item}
      </motion.div>
    ))}

  </div>

  <p className="text-yellow-400 font-semibold mt-10">
    Let us help you turn clicks into customers — and visibility into growth.
  </p>

</div>

{/* FINAL CTA */}
<div className="relative mt-40 py-20 text-center rounded-3xl bg-gradient-to-r from-yellow-400/10 to-purple-500/10 border border-white/10">

  <MagneticText>
    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
      Ready to Grow Your Brand?
    </h2>
  </MagneticText>

  <p className="text-gray-300 max-w-2xl mx-auto mb-10">
    If you&apos;re ready to take your business online and accelerate your growth,
    Meta Master is your strategic partner for digital success.
  </p>

  <motion.a
    whileHover={{ scale: 1.1 }}
    href="/contact"
    className="inline-block bg-yellow-400 text-black px-10 py-4 rounded-full font-semibold"
  >
    Start Your Journey
  </motion.a>

</div>


      </div>
    </section>
  );
}

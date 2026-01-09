"use client";

import React from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

type Item = {
  title: string;
  body: string;
};

const ITEMS: Item[] = [
  {
    title: "360° Solutions",
    body: "Everything from brand ideation to execution under one roof.",
  },
  {
    title: "Custom Strategy",
    body: "We tailor a plan around your goals, audience, and growth milestones.",
  },
  {
    title: "Result-Oriented",
    body: "Clear KPIs, measurable outcomes, and transparent reporting.",
  },
  {
    title: "Creative Edge",
    body: "High-impact creative that feels premium and performs everywhere.",
  },
  {
    title: "Timely Delivery",
    body: "Reliable timelines and fast turnarounds without compromise.",
  },
  {
    title: "Client-Centric Approach",
    body: "Collaboration, clarity, and decisions driven by your needs.",
  },
];

function AccordionRow({
  item,
  open,
  onToggle,
}: {
  item: Item;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-6 text-left"
      >
        <span className="text-[15px] font-medium tracking-wide text-white/90">
          {item.title}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="text-white/40"
        >
          ⌄
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="pb-6 pr-6 text-sm leading-relaxed text-white/55"
          >
            {item.body}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function WhyChooseMetamaster() {
  const [openIndex, setOpenIndex] = React.useState(0);
  const reduced = useReducedMotion();
  const ref = React.useRef<HTMLElement | null>(null);

  /* Apple-style scroll motion */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const leftY = useTransform(scrollYProgress, [0, 0.4], [50, 0]);
  const leftOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const rightY = useTransform(scrollYProgress, [0.15, 0.6], [60, 0]);
  const rightOpacity = useTransform(scrollYProgress, [0.15, 0.6], [0, 1]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#020208]"
    >
      {/* Apple-style matte background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#060012] via-[#020208] to-black" />

        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_50%_-10%,rgba(120,80,200,0.08),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_80%_70%,rgba(60,40,140,0.06),transparent_70%)]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* LEFT */}
          <motion.div
            style={{
              y: reduced ? 0 : leftY,
              opacity: leftOpacity,
            }}
            className="lg:col-span-5"
          >
            <h2 className="text-[42px] font-semibold leading-tight tracking-tight text-white">
              Why choose <br />
              <span className="text-violet-400">metamaster ?</span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/55">
              Calm, precise, and intentional — everything works quietly in your
              favor.
            </p>

            <a
              href="#contact"
              className="mt-10 inline-flex rounded-full bg-white px-7 py-3 text-[13px] font-semibold text-black transition hover:bg-white/90"
            >
              Contact us
            </a>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            style={{
              y: reduced ? 0 : rightY,
              opacity: rightOpacity,
            }}
            className="lg:col-span-7 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md"
          >
            <div className="px-8">
              {ITEMS.map((item, idx) => (
                <AccordionRow
                  key={item.title}
                  item={item}
                  open={openIndex === idx}
                  onToggle={() =>
                    setOpenIndex(openIndex === idx ? -1 : idx)
                  }
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

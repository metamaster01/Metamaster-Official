"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const testimonials = [
  {
    text: "Meta Master took our social media to the next level. Leads started flowing from day 10! Highly recommend.",
    name: "Client",
    role: "CEO & Founder at XYZ Company",
  },
  {
    text: "Meta Master took our social media to the next level. Leads started flowing from day 10! Highly recommend.",
    name: "Client",
    role: "CEO & Founder at XYZ Company",
  },
  {
    text: "Meta Master took our social media to the next level. Leads started flowing from day 10! Highly recommend.",
    name: "Client",
    role: "CEO & Founder at XYZ Company",
  },
];

export default function Testimonial() {
  const [active, setActive] = useState(0);

  
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  const prev = () =>
    setActive((p) => (p === 0 ? testimonials.length - 1 : p - 1));

  const next = () =>
    setActive((p) => (p === testimonials.length - 1 ? 0 : p + 1));

  return (
    <section className="w-full bg-gradient-to-r from-[#12001f] via-[#0e001a] to-[#12001f] py-4 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">

        
        <div className="mb-16 flex flex-col lg:flex-row justify-between gap-10">
          <h2 className="text-4xl sm:text-5xl font-semibold text-white">
            What Our Clients Say
          </h2>

          <div className="max-w-md text-white/70">
            <p className="text-sm leading-relaxed mb-6">
              We measure our success through the impact we create for our
              clients. Here’s what they have to say:
            </p>

            <button className="rounded-full border border-white/40 px-6 py-2 text-sm text-white hover:bg-white hover:text-black transition">
              See more
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="relative flex items-center justify-center h-[360px] sm:h-[420px]">

          {testimonials.map((item, index) => {
            const prevIndex =
              (active - 1 + testimonials.length) % testimonials.length;
            const nextIndex = (active + 1) % testimonials.length;

            let position: "center" | "left" | "right" | "hidden" = "hidden";

            if (index === active) position = "center";
            else if (!isMobile && index === prevIndex) position = "left";
            else if (!isMobile && index === nextIndex) position = "right";

            const xOffset = isMobile ? 0 : isTablet ? 260 : 340;

            const variants = {
              center: {
                x: 0,
                scale: 1,
                opacity: 1,
                filter: "blur(0px)",
                zIndex: 10,
              },
              left: {
                x: -xOffset,
                scale: 0.88,
                opacity: 0.45,
                filter: "blur(4px)",
                zIndex: 5,
              },
              right: {
                x: xOffset,
                scale: 0.88,
                opacity: 0.45,
                filter: "blur(4px)",
                zIndex: 5,
              },
              hidden: {
                opacity: 0,
                scale: 0.7,
                zIndex: 0,
              },
            };

            return (
              <motion.div
                key={index}
                variants={variants}
                animate={position}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                }}
                className="
                  absolute
                  w-[300px] sm:w-[360px]
                  rounded-2xl
                  bg-[#a875e3]
                  p-8
                  text-white
                  shadow-xl
                "
              >
                {/* Quote */}
                <div className="text-5xl opacity-40 mb-4">“</div>

                <p className="text-sm leading-relaxed mb-8">
                  {item.text}
                </p>

                
                <div className="absolute -bottom-4 left-10 h-6 w-6 rotate-45 bg-[#a875e3]" />

                {/* Client */}
                <div className="mt-8 text-sm">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-white/80">{item.role}</p>
                </div>
              </motion.div>
            );
          })}

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 sm:left-2 text-white/60 hover:text-white transition"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={next}
            className="absolute right-0 sm:right-2 text-white/60 hover:text-white transition"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}

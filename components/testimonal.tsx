"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const testimonials = [
{
text: "Meta Master completely transformed our online presence. From website design to performance marketing, everything felt premium and well thought out. Our conversion rate improved significantly within the first month itself.",

role: "Founder, Zaina Collection",
},
{
text: "Working with Meta Master was a game changer for us. Their branding, creatives, and digital campaigns helped us reach a wider audience and generate consistent event inquiries.",

role: "Founder, Xplore Events",
},
{
text: "Meta Master understood our brand vision perfectly. The website, social media strategy, and content helped us build trust with our audience and grow organically.",

role: "Founder, Chakra Crystals",
},
{
text: "We saw real results after partnering with Meta Master. Their SEO and lead generation strategy brought us high-quality leads consistently.",

role: "Business Owner",
},
{
text: "The team at Meta Master feels more like a growth partner than an agency. Their strategic thinking and execution helped us scale faster than expected.",

role: "Co-founder, SaaS Startup",
},
{
text: "Meta Master delivers more than just services — they deliver impact. From branding to performance marketing, their approach is creative, data-driven, and result-focused.",

role: "Marketing Head, FMCG Brand",
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
                  {/* <p className="font-medium">{item.name}</p> */}
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

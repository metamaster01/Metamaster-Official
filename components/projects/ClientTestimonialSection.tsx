"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

interface Props {
  image?: string;
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
}

export default function ClientTestimonialSection({
  image = "/projects/testimonial.jpg",
  testimonial,
}: Props) {
  if (!testimonial) return null;

  return (
    <section className="relative py-14 bg-gradient-to-r from-[#12001f] via-[#0e001a] to-[#12001f] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[350px] md:h-[420px] rounded-2xl overflow-hidden border border-white/10"
          >
            <Image
              src={image}
              alt="Client"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-10"
          >
            <Quote size={32} className="text-purple-400 mb-6" />

            <p className="text-lg md:text-xl leading-relaxed text-white/85">
              {testimonial.text}
            </p>

            <div className="mt-8">
              <p className="font-semibold text-white text-base">
                {testimonial.author}
              </p>
              <p className="text-sm text-white/60 mt-1">
                {testimonial.role}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

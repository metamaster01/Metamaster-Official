"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface Props {
  title?: string;
  intro?: string;
  objectives: string[];
}

export default function ProjectObjectivesSection({
  title = "Project Objectives",
  intro = "Clear strategic goals defined to drive measurable digital growth.",
  objectives,
}: Props) {
  return (
    <section className="relative py-24  text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {title}
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-sm md:text-base">
            {intro}
          </p>
        </motion.div>

        {/* Objectives Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {objectives?.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <CheckCircle
                  size={22}
                  className="text-purple-400 mt-1 group-hover:scale-110 transition"
                />
                <p className="text-sm md:text-base text-white/80 leading-relaxed">
                  {item}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

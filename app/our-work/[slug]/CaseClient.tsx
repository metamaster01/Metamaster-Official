"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CaseClient({ data }: { data: any }) {
  if (!data) return null;

  return (
    <main className="relative overflow-hidden bg-gradient-to-r from-[#12001f] via-[#0e001a] to-[#12001f] text-white">

      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-purple-600/20 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 -left-40 h-[520px] w-[520px] rounded-full bg-indigo-600/10 blur-[140px]" />

      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-6 text-center pt-48 pb-28">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6 rounded-full bg-purple-700/20 px-4 py-1 text-xs tracking-wide text-purple-300"
        >
          Work
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-4xl sm:text-7xl font-semibold tracking-tight"
        >
          {data.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/70"
        >
          {data.subtitle}
        </motion.p>
      </section>

      {/* ABOUT BRAND */}
      <section className="relative max-w-7xl mx-auto px-6 pb-28 grid gap-16 md:grid-cols-2 items-start">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group"
        >
          <h2 className="mb-6 text-xl font-semibold tracking-wide">
            About the Brand
          </h2>

          <div className="overflow-hidden rounded-xl">
            <Image
              src={data.hero_image}
              alt={data.title}
              width={600}
              height={500}
              className="rounded-xl transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <Image
            src={data.brand_logo}
            alt="Brand logo"
            width={320}
            height={100}
            className="mb-10 rounded-xl opacity-90"
          />

          <p className="mb-8 text-sm leading-relaxed text-white/80">
            {data.about}
          </p>

          <div className="flex flex-wrap gap-3">
            {data.tags?.map((tag: string, i: number) => (
              <span
                key={i}
                className="rounded-full border border-purple-500/30 bg-purple-700/10 px-4 py-1 text-xs text-purple-300 backdrop-blur transition hover:bg-purple-700/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CHALLENGE */}
      <TwoColumnSection
        title="The Challenge"
        description={data.challenge_intro}
        items={data.challenge}
      />

      {/* APPROACH */}
      <TwoColumnSection
        title="Our Approach"
        description={data.approach_intro}
        items={data.approach}
        numbered
      />

      {/* RESULTS */}
      <TwoColumnSection
        title="The Results"
        description={data.results_intro}
        items={data.results}
      />

      {/* TESTIMONIAL */}
      {data.testimonial_text && (
        <section className="relative max-w-7xl mx-auto px-6 py-28">
          <div className="grid gap-8 lg:grid-cols-2 items-stretch">

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex items-center justify-center rounded-2xl bg-[#2f52b2] p-10"
            >
              <Image
                src={data.brand_logo}
                alt="Brand"
                width={320}
                height={140}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-2xl bg-gradient-to-br from-purple-700 to-indigo-700 p-10 shadow-xl"
            >
              <p className="text-sm leading-relaxed text-white/95">
                “{data.testimonial_text}”
              </p>

              <div className="mt-8">
                <p className="font-semibold tracking-wide">
                  {data.testimonial_author}
                </p>
                <p className="text-xs text-white/70">
                  {data.testimonial_role}
                </p>
              </div>
            </motion.div>

          </div>
        </section>
      )}
    </main>
  );
}

/* ---------- Reusable Two Column Section ---------- */
function TwoColumnSection({
  title,
  description,
  items,
  numbered = false,
}: {
  title: string;
  description?: string;
  items?: string[];
  numbered?: boolean;
}) {
  if (!items?.length) return null;

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-24 grid gap-14 md:grid-cols-2">
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-4 text-2xl font-semibold tracking-wide">
          {title}
        </h2>
        <p className="max-w-md text-sm leading-relaxed text-white/70">
          {description}
        </p>
      </motion.div>

      <ul className="space-y-6">
        {items.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="border-b border-white/10 pb-4 text-sm text-white/80"
          >
            {numbered && (
              <span className="mr-3 font-semibold text-purple-400">
                {i + 1}.
              </span>
            )}
            {item}
          </motion.li>
        ))}
      </ul>

    </section>
  );
}

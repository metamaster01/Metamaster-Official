"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

type Job = {
  id: string;
  job_title: string;
  slug: string;
  location: string;
};

export default function CareerHero() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const { data, error } = await supabase
        .from("jobs")
        .select("id, job_title, slug, location")
        .eq("is_active", true)
        .order("created_at", { ascending: false });

      if (!error && data) {
        setJobs(data);
      }

      setLoading(false);
    };

    fetchJobs();
  }, []);

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Purple Glow Blob */}
      <div className="absolute top-[-120px] right-[-120px] w-[420px] h-[420px] bg-purple-600/30 rounded-full blur-[120px]" />

      {/* HERO */}
      <div className="container mx-auto px-6 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 py-4  mt-14 md:mt-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl xl:text-6xl font-semibold leading-tight"
        >
          Join Us in Shaping <br /> the Future of Digital Growth
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-gray-300 max-w-xl"
        >
          <p className="mb-4 font-medium text-white">• Careers</p>
          <p className="leading-relaxed text-sm md:text-base">
            Meta Master is a 360° digital solutions hub built to help businesses
            grow, transform, and thrive in the digital-first era. We blend
            creativity, technology, and performance to craft strategies that
            don’t just deliver results today but build sustainable success for
            tomorrow.
          </p>
        </motion.div>
      </div>

      {/* OPEN ROLES */}
      <div className="container mx-auto px-6 pb-24">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-lg font-medium text-gray-400 mb-10"
        >
          Open roles
        </motion.h2>

        {loading ? (
          <p className="text-gray-500">Loading opportunities…</p>
        ) : jobs.length === 0 ? (
          <p className="text-gray-500">No open positions at the moment.</p>
        ) : (
          <ul className="divide-y divide-white/10">
            {jobs.map((job, index) => (
              <motion.li
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/careers/${job.slug}`}
                  className="flex items-center justify-between py-6 group"
                >
                  <div>
                    <p className="text-lg font-medium group-hover:text-purple-400 transition">
                      {job.job_title}
                    </p>
                  </div>

                  <div className="flex items-center gap-6 text-sm text-gray-400">
                    <span>{job.location || "Remote"}</span>
                    <span className="text-xl group-hover:translate-x-1 transition">
                      →
                    </span>
                  </div>
                </Link>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

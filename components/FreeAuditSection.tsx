"use client";

import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { useState } from "react";

export default function FreeAuditSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const { error } = await supabase.from("free_audits").insert({
      name: form.name.value,
      phone: form.phone.value,
      business_type: form.business.value,
      budget: form.budget.value,
      message: form.message.value,
    });

    setLoading(false);

    if (!error) {
      setSuccess(true);
      form.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <section
      id="free-audit"
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#12001f] via-[#0e001a] to-[#12001f] py-36 text-white"
    >
      {/* Animated grid lines */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.15] bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Floating glow */}
      <motion.div
        className="pointer-events-none absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-purple-600/25 blur-[160px]"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full bg-indigo-600/25 blur-[160px]"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-20 lg:grid-cols-2 items-center">

          {/* LEFT CONTENT (unchanged) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="mb-4 inline-block rounded-full border border-white/20 px-4 py-1 text-xs tracking-widest text-white/70">
              FREE BUSINESS AUDIT
            </p>

            <h2 className="text-[clamp(2.5rem,4vw,3.8rem)] font-semibold leading-tight tracking-tight">
              Let’s Unlock Your  
              <span className="block text-purple-400">
                Next Growth Phase
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm sm:text-base text-white/70 leading-relaxed">
              We deep-dive into your ads, website and growth funnel to identify
              hidden opportunities. You get a clear roadmap to scale faster —
              without wasting budget.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 text-sm">
              <div className="rounded-xl bg-white/5 p-4 border border-white/10">
                <p className="text-purple-400 font-semibold">Ad Audit</p>
                <p className="text-white/60 text-xs mt-1">
                  Meta & Google performance
                </p>
              </div>
              <div className="rounded-xl bg-white/5 p-4 border border-white/10">
                <p className="text-purple-400 font-semibold">Website</p>
                <p className="text-white/60 text-xs mt-1">
                  Conversion & UX review
                </p>
              </div>
              <div className="rounded-xl bg-white/5 p-4 border border-white/10">
                <p className="text-purple-400 font-semibold">SEO</p>
                <p className="text-white/60 text-xs mt-1">
                  Growth opportunities
                </p>
              </div>
              <div className="rounded-xl bg-white/5 p-4 border border-white/10">
                <p className="text-purple-400 font-semibold">Strategy</p>
                <p className="text-white/60 text-xs mt-1">
                  Custom action plan
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative rounded-3xl bg-white/[0.06] backdrop-blur-xl border border-white/10 p-10 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]"
          >
            <h3 className="text-2xl font-semibold">
              Get Your Free Audit
            </h3>
            <p className="mt-2 text-sm text-white/60">
              Takes less than 30 seconds.
            </p>

            {success ? (
              <p className="mt-8 text-green-400 font-semibold">
                ✅ Thanks! Our team will contact you shortly.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input name="name" required placeholder="Your Name" className="input" />
                  <input name="phone" required type="tel" placeholder="Phone Number" className="input" />
                </div>

                <input name="business" required placeholder="Business Type" className="input" />

                <select name="budget" required className="input">
                  <option value="" className="text-black">
                    Monthly Marketing Budget
                  </option>
                  <option className="text-black">Under ₹10,000</option>
                  <option className="text-black">₹10,000 – ₹25,000</option>
                  <option className="text-black">₹25,000 – ₹50,000</option>
                  <option className="text-black">₹50,000 – ₹1,00,000</option>
                  <option className="text-black">₹1,00,000+</option>
                </select>

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your goals..."
                  className="input"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 py-3 text-sm font-semibold text-white transition hover:scale-[1.03] hover:shadow-[0_10px_40px_rgba(168,85,247,0.4)]"
                >
                  {loading ? "Submitting..." : "Get Free Audit"}
                </button>
              </form>
            )}

            <p className="mt-4 text-center text-xs text-white/50">
              No spam. No sales pressure. Just pure value.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Input styles */}
      <style jsx>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          color: white;
          outline: none;
        }
        .input:focus {
          border-color: #a855f7;
          box-shadow: 0 0 0 2px rgba(168,85,247,0.3);
        }
      `}</style>
    </section>
  );
}
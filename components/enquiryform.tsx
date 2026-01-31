"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

export default function EnquiryPopup() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const resetOnRefresh = () => {
      sessionStorage.removeItem("enquiryPopupShown");
    };

    window.addEventListener("beforeunload", resetOnRefresh);

    if (sessionStorage.getItem("enquiryPopupShown")) return;

    const timer = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem("enquiryPopupShown", "true");
    }, 9600);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("beforeunload", resetOnRefresh);
    };
  }, []);

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem("enquiryPopupShown", "true");
  };

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const { error } = await supabase.from("enquiries").insert({
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    });

    setLoading(false);

    if (!error) {
      setSuccess(true);
      form.reset();
      setTimeout(() => setOpen(false), 2000);
    } else {
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
        >
          <motion.div
            initial={{ scale: 0.95, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 40 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-gradient-to-br from-[#12001f] via-[#0e001a] to-[#12001f] shadow-2xl"
          >
            <button
              onClick={handleClose}
              className="absolute right-5 top-5 z-20 text-white/60 hover:text-white"
            >
              <X size={20} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* FORM */}
              <div className="p-8 md:p-10 text-white">
                <h2 className="text-2xl font-semibold">
                  Get in touch with us
                </h2>

                <p className="mt-2 text-sm text-white/70">
                  Tell us about your project and we’ll get back shortly.
                </p>

                {success ? (
                  <div className="mt-10 rounded-xl border border-green-400/30 bg-green-400/10 p-6 text-center backdrop-blur shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                    <p className="text-3xl">🎉</p>
                    <h4 className="mt-2 text-lg font-semibold text-green-300">
                      Enquiry Sent Successfully!
                    </h4>
                    <p className="mt-1 text-sm text-green-200/80">
                      Our team will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        name="name"
                        required
                        placeholder="Full Name"
                        className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:ring-2 focus:ring-purple-500"
                      />
                      <input
                        name="email"
                        required
                        type="email"
                        placeholder="Email Address"
                        className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:ring-2 focus:ring-purple-500"
                      />
                    </div>

                    <input
                      name="subject"
                      placeholder="Subject"
                      className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:ring-2 focus:ring-purple-500"
                    />

                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Message"
                      className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:ring-2 focus:ring-purple-500"
                    />

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-md bg-purple-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-purple-700"
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>

              {/* IMAGE */}
              <div className="relative hidden md:block h-full bg-gradient-to-br from-[#12001f] via-[#0e001a] to-[#12001f]">
                <Image
                  src="/enquiry.svg"
                  alt="Enquiry"
                  fill
                  className="object-cover object-contain"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

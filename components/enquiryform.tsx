"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

export default function EnquiryPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
   
    const resetOnRefresh = () => {
      sessionStorage.removeItem("enquiryPopupShown");
    };

    window.addEventListener("beforeunload", resetOnRefresh);

    
    if (sessionStorage.getItem("enquiryPopupShown")) return;

    const timer = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem("enquiryPopupShown", "true");
    }, 4800); // loader ke baad

    return () => {
      clearTimeout(timer);
      window.removeEventListener("beforeunload", resetOnRefresh);
    };
  }, []);

  
  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem("enquiryPopupShown", "true");
  };

 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Enquiry submitted");
    

    setOpen(false);
    sessionStorage.setItem("enquiryPopupShown", "true");
  };

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
            {/*  CLOSE */}
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

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      required
                      placeholder="Full Name"
                      className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                      required
                      type="email"
                      placeholder="Email Address"
                      className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <input
                    placeholder="Subject"
                    className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:ring-2 focus:ring-purple-500"
                  />

                  <textarea
                    rows={4}
                    placeholder="Message"
                    className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:ring-2 focus:ring-purple-500"
                  />

                  <button
                    type="submit"
                    className="w-full rounded-md bg-purple-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-purple-700"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* IMAGE */}
              <div className="relative hidden md:block h-full bg-gradient-to-br from-[#12001f] via-[#0e001a] to-[#12001f]">
                <Image
                  src="/enquiry.svg"
                  alt="Enquiry"
                  fill
                  className="object-cover object-contain"
                />
                <div className="absolute inset-0 " />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

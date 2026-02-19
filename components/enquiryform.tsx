// "use client";

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X } from "lucide-react";
// import Image from "next/image";
// import { supabase } from "@/lib/supabase";

// export default function EnquiryPopup() {
//   const [open, setOpen] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   useEffect(() => {
//     const resetOnRefresh = () => {
//       sessionStorage.removeItem("enquiryPopupShown");
//     };

//     window.addEventListener("beforeunload", resetOnRefresh);

//     if (sessionStorage.getItem("enquiryPopupShown")) return;

//     const timer = setTimeout(() => {
//       setOpen(true);
//       sessionStorage.setItem("enquiryPopupShown", "true");
//     }, 9600);

//     return () => {
//       clearTimeout(timer);
//       window.removeEventListener("beforeunload", resetOnRefresh);
//     };
//   }, []);

//   const handleClose = () => {
//     setOpen(false);
//     sessionStorage.setItem("enquiryPopupShown", "true");
//   };

//   async function handleSubmit(e: any) {
//     e.preventDefault();
//     setLoading(true);

//     const form = e.target;

//     const { error } = await supabase.from("enquiries").insert({
//       name: form.name.value,
//       email: form.email.value,
//       subject: form.subject.value,
//       message: form.message.value,
//     });

//     setLoading(false);

//     if (!error) {
//       setSuccess(true);
//       form.reset();
//       setTimeout(() => setOpen(false), 1000);
//     } else {
//       alert("Something went wrong. Please try again.");
//     }
//   }

//   return (
//     <AnimatePresence>
//       {open && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
//         >
//           <motion.div
//             initial={{ scale: 0.95, y: 40 }}
//             animate={{ scale: 1, y: 0 }}
//             exit={{ scale: 0.95, y: 40 }}
//             transition={{ duration: 0.45, ease: "easeOut" }}
//             className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-gradient-to-br from-[#12001f] via-[#0e001a] to-[#12001f] shadow-2xl"
//           >
//             <button
//               onClick={handleClose}
//               className="absolute right-5 top-5 z-20 text-white/60 hover:text-white"
//             >
//               <X size={20} />
//             </button>

//             <div className="grid grid-cols-1 md:grid-cols-2">
//               {/* FORM */}
//               <div className="p-8 md:p-10 text-white">
//                 <h2 className="text-2xl font-semibold">
//                   Get in touch with us
//                 </h2>

//                 <p className="mt-2 text-sm text-white/70">
//                   Tell us about your project and we’ll get back shortly.
//                 </p>

//                 {success ? (
//                   <div className="mt-10 rounded-xl border border-green-400/30 bg-green-400/10 p-6 text-center backdrop-blur shadow-[0_0_30px_rgba(34,197,94,0.3)]">
//                     <p className="text-3xl">🎉</p>
//                     <h4 className="mt-2 text-lg font-semibold text-green-300">
//                       Enquiry Sent Successfully!
//                     </h4>
//                     <p className="mt-1 text-sm text-green-200/80">
//                       Our team will contact you shortly.
//                     </p>
//                   </div>
//                 ) : (
//                   <form onSubmit={handleSubmit} className="mt-8 space-y-5">
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                       <input
//                         name="name"
//                         required
//                         placeholder="Full Name"
//                         className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:ring-2 focus:ring-purple-500"
//                       />
//                       <input
//                         name="email"
//                         required
//                         type="email"
//                         placeholder="Email Address"
//                         className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:ring-2 focus:ring-purple-500"
//                       />
//                     </div>

//                     <input
//                       name="subject"
//                       placeholder="Subject"
//                       className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:ring-2 focus:ring-purple-500"
//                     />

//                     <textarea
//                       name="message"
//                       rows={4}
//                       placeholder="Message"
//                       className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:ring-2 focus:ring-purple-500"
//                     />

//                     <button
//                       type="submit"
//                       disabled={loading}
//                       className="w-full rounded-md bg-purple-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-purple-700"
//                     >
//                       {loading ? "Sending..." : "Send Message"}
//                     </button>
//                   </form>
//                 )}
//               </div>

//               {/* IMAGE */}
//               <div className="relative hidden md:block h-full bg-gradient-to-br from-[#12001f] via-[#0e001a] to-[#12001f]">
//                 <Image
//                   src="/enquiry.svg"
//                   alt="Enquiry"
//                   fill
//                   className="object-cover object-contain"
//                 />
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

export default function EnquiryPopup() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("enquiryPopupShown")) return;

    const timer = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem("enquiryPopupShown", "true");
    }, 50000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setOpen(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const { error } = await supabase.from("enquiries").insert({
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      business_name: form.business_name.value,
      website: form.website.value,
      service: form.service.value,
      budget: form.budget.value,
      message: form.message.value,
    });

    setLoading(false);

    if (!error) {
      setSuccess(true);
      form.reset();
      setTimeout(() => setOpen(false), 1500);
    } else {
      alert("Something went wrong");
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md px-4"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl rounded-2xl bg-[#0f001b] border border-white/10 shadow-2xl"
          >
            {/* Close */}
            <button
              onClick={handleClose}
              className="absolute right-6 top-6 text-white/50 hover:text-white transition"
            >
              <X size={20} />
            </button>

            <div className="grid md:grid-cols-2">
              {/* LEFT FORM */}
              <div className="p-8 md:p-10 text-white">

                <h2 className="text-xl font-semibold tracking-tight">
                  Let’s Discuss Your Growth Strategy
                </h2>

                <p className="mt-1 text-xs text-white/60">
                  Fill the form and our team will contact you shortly.
                </p>

                {success ? (
  <div className="mt-8 rounded-xl border border-green-400/20 bg-green-500/10 p-8 text-center backdrop-blur">
    
    <div className="flex justify-center">
      <div className="h-14 w-14 rounded-full bg-green-500/20 flex items-center justify-center border border-green-400/30">
        <svg
          className="h-7 w-7 text-green-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
    </div>

    <h4 className="mt-5 text-lg font-semibold text-green-300">
      Thank You for Your Enquiry
    </h4>

    <p className="mt-2 text-sm text-green-200/80 max-w-sm mx-auto">
      Our strategy team will review your details and get in touch within 24 hours.
    </p>

    <div className="mt-6 h-[1px] w-16 bg-green-400/30 mx-auto" />
  </div>
) : (

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">

                    <div className="grid sm:grid-cols-2 gap-3">
                      <input name="name" required placeholder="Full Name" className="input" />
                      <input name="phone" required placeholder="Phone Number" className="input" />
                    </div>

                    <input name="email" type="email" required placeholder="Email Address" className="input" />

                    <div className="grid sm:grid-cols-2 gap-3">
                      <input name="business_name" placeholder="Business Name" className="input" />
                      <input name="website" placeholder="Website / Instagram (Optional)" className="input" />
                    </div>

                    <select name="service" required className="select-input">
  <option value="">What service do you need?</option>
  <option value="Meta Ads">Meta Ads</option>
  <option value="Social Media Management">Social Media Management</option>
  <option value="Website Development">Website Development</option>
  <option value="Branding">Branding</option>
  <option value="Full 360° Marketing">Full 360° Marketing</option>
</select>

<select name="budget" required className="select-input">
  <option value="">Monthly Marketing Budget</option>
  <option value="Under ₹20,000">Under ₹20,000</option>
  <option value="₹20,000 – ₹50,000">₹20,000 – ₹50,000</option>
  <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000</option>
  <option value="₹1,00,000+">₹1,00,000+</option>
</select>

                    <textarea
                      name="message"
                      rows={2}
                      placeholder="Tell us about your goals..."
                      className="input"
                    />

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 py-2.5 text-sm font-medium transition hover:opacity-90"
                    >
                      {loading ? "Sending..." : "Send Enquiry"}
                    </button>

                    <p className="text-xs text-center text-white/50">
                      🔒 No spam. Your information is secure.
                    </p>

                    <a
                      href="https://wa.me/9529770498"
                      target="_blank"
                      className="flex items-center justify-center gap-2 w-full rounded-md border border-white/15 py-2 text-sm text-white/80 hover:bg-white hover:text-[#2B0046] transition"
                    >
                      <MessageCircle size={16} />
                      Chat on WhatsApp
                    </a>

                  </form>
                )}
              </div>

              {/* RIGHT IMAGE */}
              <div className="hidden md:flex items-center justify-center p-8 border-l border-white/10">
                <Image
                  src="/enquiry.svg"
                  alt="Enquiry"
                  width={360}
                  height={360}
                  className="object-contain opacity-90"
                />
              </div>
            </div>

            <style jsx>{`
  .input {
    width: 100%;
    border-radius: 6px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    padding: 10px 12px;
    font-size: 13px;
    color: white;
    outline: none;
    transition: 0.2s ease;
  }

  .input:focus {
    border-color: #8b5cf6;
    box-shadow: 0 0 0 2px rgba(139,92,246,0.25);
  }

  .select-input {
    width: 100%;
    border-radius: 6px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    padding: 10px 12px;
    font-size: 13px;
    color: white;
    outline: none;
  }

  .select-input option {
    color: black;
    background: white;
  }

  .select-input:focus {
    border-color: #8b5cf6;
    box-shadow: 0 0 0 2px rgba(139,92,246,0.25);
  }
`}</style>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

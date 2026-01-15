"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-r from-[#12001f] via-[#0e001a] to-[#12001f]">

      
      <div className="absolute inset-0  animate-footerGradient" />

      
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-purple-600/25 blur-3xl animate-floatSlow" />
      <div className="pointer-events-none absolute top-20 right-[-120px] h-[360px] w-[360px] rounded-full bg-indigo-500/20 blur-3xl animate-floatReverse" />

      
      <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-[0.06] mix-blend-overlay" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">

      
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">

          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Meta Master"
                width={150}
                height={120}
                className="cursor-pointer"
              />
            </Link>

            <h3 className="text-sm text-white/80 leading-relaxed">
              Your 360° Partner in Branding <br /> & Digital Excellence.
            </h3>

            {/* Socials */}
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-white hover:text-black hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-6 text-sm font-semibold text-white">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              {[
                { name: "About", href: "/about-us" },
                { name: "Service", href: "/services" },
                { name: "Case Study", href: "/case-study" },
                { name: "Testimonials", href: "/testimonials" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="relative inline-block hover:text-white transition
                    after:absolute after:left-0 after:-bottom-1 after:h-[1px]
                    after:w-0 after:bg-white after:transition-all after:duration-300
                    hover:after:w-full"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Licence */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-6 text-sm font-semibold text-white">
              Licence
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              {[
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Copyright", href: "/copyright" },
                { name: "Email Address", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="relative inline-block hover:text-white transition
                    after:absolute after:left-0 after:-bottom-1 after:h-[1px]
                    after:w-0 after:bg-white after:transition-all after:duration-300
                    hover:after:w-full"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h4 className="text-sm font-semibold text-white">
              Contact
            </h4>

            <a
              href="tel:+919529770498"
              className="relative inline-flex items-center gap-3 text-sm text-white/70 hover:text-white transition
              after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              <Phone size={16} />
              <span>+91 9529770498</span>
            </a>

            <a
              href="mailto:aman@metamaster.com"
              className="relative inline-flex items-center gap-3 text-sm text-white/70 hover:text-white transition
              after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              <Mail size={16} />
              <span>aman@metamaster.com</span>
            </a>

           <a
  href="https://www.google.com/maps?q=Nagpur,+Maharashtra,+India"
  target="_blank"
  rel="noopener noreferrer"
  className="
    relative inline-flex items-center gap-3
    text-sm text-white/70
    hover:text-white transition
    after:absolute after:left-0 after:-bottom-1
    after:h-[1px] after:w-0 after:bg-white
    after:transition-all after:duration-300
    hover:after:w-full
  "
>
  <MapPin size={16} />
  <span>Nagpur, Maharashtra, India</span>
</a>

          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="my-14 h-px origin-left bg-white/10"
        />

        {/* Bottom Bar */}
        <div className="grid grid-cols-1 gap-4 text-xs text-white/60 md:grid-cols-3 items-center">
          <Link
            href="/terms"
            className="relative inline-block text-center md:text-left hover:text-white transition
            after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Terms and Conditions
          </Link>

          <span className="text-center">
            All Rights Reserved © Metamaster 2025
          </span>

          <Link
            href="/privacy-policy"
            className="relative inline-block text-center md:text-right hover:text-white transition
            after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ChevronDown, Menu, X } from "lucide-react";

// const navLinks = [
//   { name: "Home", href: "/" },
//   { name: "About us", href: "/about" },
//   { name: "Services", href: "/services", dropdown: true },
//   { name: "Our works", href: "/our-work" },
//   { name: "Testimonials", href: "/testimonials" },
//   { name: "Careers", href: "/careers" },
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="w-full bg-gradient-to-r from-[#8a0fd7] to-[#2B0046]  px-4 sm:px-6 lg:px-2 py-4 lg:py-[2]">
//       <div className="mx-auto flex max-w-7xl items-center justify-between">
        
//         {/* Logo */}
//         <Link href="/" className="flex items-center">
//           <Image
//             src="/logo.png"
//             alt="Meta Master Logo"
//             width={120}
//             height={100}
//             className="object-contain sm:w-[60px] md:w-[120px]"
//             priority
//           />
//         </Link>

//         {/* Desktop Navigation */}
//         <ul className="hidden lg:flex items-center gap-8 text-sm text-white">
//           {navLinks.map((item) => (
//             <li key={item.name} className="group relative">
//               <Link
//                 href={item.href}
//                 className="flex items-center gap-1 pb-1"
//               >
//                 {item.name}
//                 {item.dropdown && (
//                   <ChevronDown
//                     size={14}
//                     className="transition-transform duration-300 group-hover:rotate-180"
//                   />
//                 )}
//               </Link>

//               <span className="absolute left-0 -bottom-[2px] h-[2px] w-0 bg-white rounded-full transition-all duration-300 group-hover:w-full" />
//             </li>
//           ))}
//         </ul>

//         {/* Desktop Button */}
//         <Link
//           href="/contact"
//           className="hidden lg:inline-flex rounded-xl bg-white px-6 py-2 text-sm font-medium text-[#2b004f] shadow-md transition hover:scale-105"
//         >
//           Contact us
//         </Link>

//         {/* Mobile Toggle */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="lg:hidden text-white"
//         >
//           {open ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* ✅ Premium Mobile Menu */}
// <div
//   className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
//     open ? "max-h-[520px] mt-4" : "max-h-0"
//   }`}
// >
//   <ul className="flex flex-col gap-4 px-1 text-white text-base">
//     {navLinks.map((item) => (
//       <li key={item.name} className="relative">
//         <Link
//           href={item.href}
//           onClick={() => setOpen(false)}
//           className="
//             group flex items-center justify-between py-3
//             transition-all duration-200
//             active:scale-[0.97]
//           "
//         >
//           {/* Text */}
//           <span className="relative inline-block">
//             {item.name}

//             {/* underline */}
//             <span
//               className="
//                 absolute left-0 -bottom-1 h-[2px] w-full
//                 scale-x-0 origin-left
//                 bg-white rounded-full
//                 transition-transform duration-300
//                 group-active:scale-x-100
//               "
//             />
//           </span>

//           {/* Dropdown icon */}
//           {item.dropdown && (
//             <ChevronDown
//               size={16}
//               className="transition-transform duration-200 group-active:rotate-180"
//             />
//           )}
//         </Link>
//       </li>
//     ))}
//   </ul>

//   {/* 🔥 Mobile Contact CTA */}
//   <Link
//     href="/contact"
//     onClick={() => setOpen(false)}
//     className="
//       mt-6 inline-flex w-full justify-center
//       rounded-xl bg-white px-6 py-3
//       text-sm font-semibold text-[#2b004f]
//       shadow-md transition
//       active:scale-95
//     "
//   >
//     Contact us
//   </Link>
// </div>

//     </nav>
//   );
// }











// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ChevronDown, Menu, X } from "lucide-react";

// const navLinks = [
//   { name: "Home", href: "/" },
//   { name: "About us", href: "/about" },
//   { name: "Services", href: "/services", dropdown: true },
//   { name: "Our works", href: "/our-work" },
//   { name: "Testimonials", href: "/testimonials" },
//   { name: "Careers", href: "/careers" },
// ];

// const serviceDropdown = [
//   {
//     title: "Paid Ads & Lead Generation",
//     slug: "/services/paid-ads-lead-generation",
//     subtitle: "Meta, Google & funnels",
//   },
//   {
//     title: "Social Media Marketing",
//     slug: "/services/social-media-marketing",
//     subtitle: "Content & growth campaigns",
//   },
//   {
//     title: "Website, SEO & Funnels",
//     slug: "/services/website-seo-funnel-building",
//     subtitle: "Web, SEO & automation",
//   },
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

//   return (
//     <nav className="w-full bg-gradient-to-r from-[#8a0fd7] to-[#2B0046] px-4 py-4">
//       <div className="mx-auto flex max-w-7xl items-center justify-between">

//         {/* Logo */}
//         <Link href="/">
//           <Image
//             src="/logo.png"
//             alt="Meta Master Logo"
//             width={120}
//             height={60}
//             priority
//           />
//         </Link>

//         {/* ================= Desktop Nav ================= */}
//         <ul className="hidden lg:flex items-center gap-8 text-sm text-white">
//           {navLinks.map((item) => (
//             <li key={item.name} className="relative">
//               {!item.dropdown && (
//                 <Link href={item.href} className="hover:opacity-80">
//                   {item.name}
//                 </Link>
//               )}

//               {/* 🔥 Services Dropdown */}
//               {item.dropdown && (
//                 <div
//                   onMouseEnter={() => setServicesOpen(true)}
//                   onMouseLeave={() => setServicesOpen(false)}
//                   className="relative z-50"
//                 >
//                   <button className="flex items-center gap-1">
//                     Services
//                     <ChevronDown
//                       size={14}
//                       className={`transition-transform ${
//                         servicesOpen ? "rotate-180" : ""
//                       }`}
//                     />
//                   </button>

//                   {/* Dropdown Panel */}
//                   <div
//                     className={`
//                       absolute left-0 top-10 w-[320px] rounded-xl
//                       bg-[#14001f] shadow-2xl border border-white/10
//                       transition-all duration-300 origin-top
//                       ${servicesOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none z-"}
//                     `}
//                   >
//                     <ul className="p-3 space-y-2">
//                       {serviceDropdown.map((service) => (
//                         <li key={service.slug}>
//                           <Link
//                             href={service.slug}
//                             className="block rounded-lg p-3 hover:bg-white/10 transition"
//                           >
//                             <p className="font-medium text-white">
//                               {service.title}
//                             </p>
//                             <p className="text-xs text-gray-400">
//                               {service.subtitle}
//                             </p>
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Desktop CTA */}
//         <Link
//           href="/contact"
//           className="hidden lg:inline-flex rounded-xl bg-white px-6 py-2 text-sm font-medium text-[#2b004f]"
//         >
//           Contact us
//         </Link>

//         {/* Mobile Toggle */}
//         <button onClick={() => setOpen(!open)} className="lg:hidden text-white">
//           {open ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* ================= Mobile Menu ================= */}
//       <div
//         className={`lg:hidden overflow-hidden transition-all duration-300 ${
//           open ? "max-h-[600px] mt-4" : "max-h-0"
//         }`}
//       >
//         <ul className="flex flex-col gap-4 text-white">

//           {navLinks.map((item) => (
//             <li key={item.name}>
//               {!item.dropdown && (
//                 <Link
//                   href={item.href}
//                   onClick={() => setOpen(false)}
//                   className="block py-2"
//                 >
//                   {item.name}
//                 </Link>
//               )}

//               {/* 🔥 Mobile Services Accordion */}
//               {item.dropdown && (
//                 <>
//                   <button
//                     onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
//                     className="flex w-full items-center justify-between py-2"
//                   >
//                     Services
//                     <ChevronDown
//                       size={16}
//                       className={`transition-transform ${
//                         mobileServicesOpen ? "rotate-180" : ""
//                       }`}
//                     />
//                   </button>

//                   <div
//                     className={`pl-3 overflow-hidden transition-all duration-300 ${
//                       mobileServicesOpen ? "max-h-60" : "max-h-0"
//                     }`}
//                   >
//                     {serviceDropdown.map((service) => (
//                       <Link
//                         key={service.slug}
//                         href={service.slug}
//                         onClick={() => setOpen(false)}
//                         className="block py-2 text-sm text-gray-300"
//                       >
//                         {service.title}
//                       </Link>
//                     ))}
//                   </div>
//                 </>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Mobile CTA */}
//         <Link
//           href="/contact"
//           onClick={() => setOpen(false)}
//           className="mt-6 block rounded-xl bg-white py-3 text-center font-semibold text-[#2b004f]"
//         >
//           Contact us
//         </Link>
//       </div>
//     </nav>
//   );
// }









// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ChevronDown, Menu, X } from "lucide-react";

// /* ---------------- NAV LINKS ---------------- */
// const navLinks = [
//   { name: "Home", href: "/" },
//   { name: "About us", href: "/about" },
//   { name: "Services", href: "/services", dropdown: true },
//   { name: "Our works", href: "/our-work" },
//   { name: "Testimonials", href: "/testimonials" },
//   { name: "Careers", href: "/careers" },
// ];

// /* ---------------- SERVICES DROPDOWN DATA ---------------- */
// const serviceDropdown = [
//   {
//     title: "Paid Ads & Lead Generation",
//     slug: "/services/paid-ads-lead-generation",
//     subtitle: "Meta, Google & funnels",
//   },
//   {
//     title: "Social Media Marketing",
//     slug: "/services/social-media-marketing",
//     subtitle: "Content & growth campaigns",
//   },
//   {
//     title: "Website, SEO & Funnels",
//     slug: "/services/website-seo-funnel-building",
//     subtitle: "Web, SEO & automation",
//   },
//   {
//     title: "Branding & Creative Design",
//     slug: "/services/branding-design",
//     subtitle: "Visual identity & graphics",
//   },
//   {
//     title: "Content & Video Production",
//     slug: "/services/content-video-production",
//     subtitle: "Video content & ads",
//   },
//   {
//     title: "Influencer Marketing & UGC",
//     slug: "/services/influencer-marketing-ugc",
//     subtitle: "Campaigns & workflows",
//   }
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

//   return (
//     <nav className="w-full bg-gradient-to-r from-[#8a0fd7] to-[#2B0046] px-4 py-4">
//       <div className="mx-auto flex max-w-7xl items-center justify-between">

//         {/* ---------------- LOGO ---------------- */}
//         <Link href="/" className="shrink-0">
//           <Image
//             src="/logo.png"
//             alt="Meta Master Logo"
//             width={120}
//             height={60}
//             priority
//           />
//         </Link>

//         {/* ================= DESKTOP NAV ================= */}
//         <ul className="hidden lg:flex items-center gap-8 text-sm text-white">

//           {navLinks.map((item) => {
//             if (!item.dropdown) {
//               return (
//                 <li key={item.name}>
//                   <Link
//                     href={item.href}
//                     className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
//                   >
//                     {item.name}
//                   </Link>
//                 </li>
//               );
//             }

//             /* -------- SERVICES DROPDOWN (DESKTOP) -------- */
//             return (
//               <li key={item.name} className="relative group">
//                 <div className="flex items-center gap-1 cursor-pointer">
//                   <span>Services</span>
//                   <ChevronDown
//                     size={14}
//                     className="transition-transform duration-300 group-hover:rotate-180"
//                   />
//                 </div>

//                 {/* Dropdown */}
//                 <div
//                   className="
//                     absolute left-0 top-full mt-3 w-[320px]
//                     rounded-xl bg-[#14001f]
//                     border border-white/10 shadow-2xl
//                     opacity-0 scale-95 translate-y-2
//                     pointer-events-none
//                     transition-all duration-300 ease-out
//                     group-hover:opacity-100
//                     group-hover:scale-100
//                     group-hover:translate-y-0
//                     group-hover:pointer-events-auto
//                     z-50
//                   "
//                 >
//                   <ul className="p-3 space-y-2">
//                     {serviceDropdown.map((service) => (
//                       <li key={service.slug}>
//                         <Link
//                           href={service.slug}
//                           className="block rounded-lg p-3 hover:bg-white/10 transition"
//                         >
//                           <p className="font-medium text-white">
//                             {service.title}
//                           </p>
//                           <p className="text-xs text-gray-400">
//                             {service.subtitle}
//                           </p>
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </li>
//             );
//           })}
//         </ul>

//         {/* ---------------- DESKTOP CTA ---------------- */}
//         <Link
//           href="/contact"
//           className="hidden lg:inline-flex rounded-xl bg-white px-6 py-2 text-sm font-medium text-[#2b004f] transition hover:scale-105"
//         >
//           Contact us
//         </Link>

//         {/* ---------------- MOBILE TOGGLE ---------------- */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="lg:hidden text-white"
//         >
//           {open ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* ================= MOBILE MENU ================= */}
//       <div
//         className={`lg:hidden overflow-hidden transition-all duration-300 ${
//           open ? "max-h-[700px] mt-4" : "max-h-0"
//         }`}
//       >
//         <ul className="flex flex-col gap-4 text-white">

//           {navLinks.map((item) => {
//             if (!item.dropdown) {
//               return (
//                 <li key={item.name}>
//                   <Link
//                     href={item.href}
//                     onClick={() => setOpen(false)}
//                     className="block py-2"
//                   >
//                     {item.name}
//                   </Link>
//                 </li>
//               );
//             }

//             /* -------- SERVICES DROPDOWN (MOBILE) -------- */
//             return (
//               <li key={item.name}>
//                 <button
//                   onClick={() =>
//                     setMobileServicesOpen(!mobileServicesOpen)
//                   }
//                   className="flex w-full items-center justify-between py-2"
//                 >
//                   <span>Services</span>
//                   <ChevronDown
//                     size={16}
//                     className={`transition-transform ${
//                       mobileServicesOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 <div
//                   className={`pl-3 overflow-hidden transition-all duration-300 ${
//                     mobileServicesOpen ? "max-h-60" : "max-h-0"
//                   }`}
//                 >
//                   {serviceDropdown.map((service) => (
//                     <Link
//                       key={service.slug}
//                       href={service.slug}
//                       onClick={() => setOpen(false)}
//                       className="block py-2 text-sm text-gray-300"
//                     >
//                       {service.title}
//                     </Link>
//                   ))}
//                 </div>
//               </li>
//             );
//           })}
//         </ul>

//         {/* ---------------- MOBILE CTA ---------------- */}
//         <Link
//           href="/contact"
//           onClick={() => setOpen(false)}
//           className="mt-6 block rounded-xl bg-white py-3 text-center font-semibold text-[#2b004f]"
//         >
//           Contact us
//         </Link>
//       </div>
//     </nav>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

/* ---------------- NAV LINKS ---------------- */
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about-us" },
  { name: "Services", href: "/services", dropdown: true },
  { name: "Our works", href: "/our-work" },
  { name: "Blogs", href: "/blogs" },
  { name: "Careers", href: "/careers" },
];

/* ---------------- SERVICES DROPDOWN DATA ---------------- */
const serviceDropdown = [
  {
    title: "Paid Ads & Lead Generation",
    slug: "/services/paid-ads-lead-generation",
    subtitle: "Meta, Google & funnels",
  },
  {
    title: "Social Media Marketing",
    slug: "/services/social-media-marketing",
    subtitle: "Content & growth campaigns",
  },
  {
    title: "Website, SEO & Funnels",
    slug: "/services/website-seo-funnel-building",
    subtitle: "Web, SEO & automation",
  },
  {
    title: "Branding & Creative Design",
    slug: "/services/branding-design",
    subtitle: "Visual identity & graphics",
  },
  {
    title: "Content & Video Production",
    slug: "/services/content-video-production",
    subtitle: "Video content & ads",
  },
  {
    title: "Influencer Marketing & UGC",
    slug: "/services/influencer-marketing-ugc",
    subtitle: "Campaigns & workflows",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* -------- SCROLL EFFECT -------- */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 z-50 w-full transition-all duration-300
        ${
          scrolled
            ? "bg-gradient-to-r from-[#8a0fd7]/50 to-[#2B0046]/60 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }
      `}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 md:py-1">

        {/* ---------------- LOGO ---------------- */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="Meta Master Logo"
            width={120}
            height={80}
            priority
          />
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <ul className="hidden lg:flex items-center gap-8 text-md text-white">

          {navLinks.map((item) => {
            if (!item.dropdown) {
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="relative font-medium opacity-90 hover:opacity-100
                      after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                      after:w-0 after:bg-white after:transition-all hover:after:w-full"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            }

            /* -------- SERVICES DROPDOWN -------- */
            return (
              <li key={item.name} className="relative group">
                <div className="flex items-center gap-1 cursor-pointer">
                  <span className="font-medium">Services</span>
                  <ChevronDown
                    size={14}
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                </div>

                <div
                  className="
                    absolute left-0 top-full w-[320px]
                    rounded-xl bg-[#14001f]/95 backdrop-blur-xl
                    border border-white/10 shadow-2xl
                    opacity-0 scale-95 translate-y-2 pointer-events-none
                    transition-all duration-300 ease-out
                    group-hover:opacity-100
                    group-hover:scale-100
                    group-hover:translate-y-0
                    group-hover:pointer-events-auto
                  "
                >
                  <ul className="p-3 space-y-2">
                    {serviceDropdown.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={service.slug}
                          className="block rounded-lg p-3 hover:bg-white/10 transition"
                        >
                          <p className="font-medium text-white">
                            {service.title}
                          </p>
                          <p className="text-xs text-gray-400">
                            {service.subtitle}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>

        {/* ---------------- DESKTOP CTA ---------------- */}
        <Link
          href="/contact"
          className="hidden lg:inline-flex rounded-xl bg-white/95
            px-6 py-2 text-sm font-medium text-[#2b004f]
            transition hover:scale-105 hover:bg-white"
        >
          Contact us
        </Link>

        {/* ---------------- MOBILE TOGGLE ---------------- */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[700px]" : "max-h-0"
        } bg-[#14001f]/95 backdrop-blur-xl`}
      >
        <ul className="flex flex-col gap-4 px-4 py-6 text-white">

          {navLinks.map((item) => {
            if (!item.dropdown) {
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-2"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            }

            return (
              <li key={item.name}>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex w-full items-center justify-between py-2"
                >
                  <span>Services</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`pl-3 overflow-hidden transition-all duration-300 ${
                    mobileServicesOpen ? "max-h-60" : "max-h-0"
                  }`}
                >
                  {serviceDropdown.map((service) => (
                    <Link
                      key={service.slug}
                      href={service.slug}
                      onClick={() => setOpen(false)}
                      className="block py-2 text-sm text-gray-300"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}


"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Services", href: "/services", dropdown: true },
  { name: "Our works", href: "/works" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Careers", href: "/careers" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-[#A327F0] to-[#2B0046] px-4 sm:px-6 lg:px-10 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Meta Master Logo"
            width={56}
            height={56}
            className="object-contain sm:w-[60px]"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8 text-sm text-white">
          {navLinks.map((item) => (
            <li key={item.name} className="group relative">
              <Link
                href={item.href}
                className="flex items-center gap-1 pb-1"
              >
                {item.name}
                {item.dropdown && (
                  <ChevronDown
                    size={14}
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                )}
              </Link>

              <span className="absolute left-0 -bottom-[2px] h-[2px] w-0 bg-white rounded-full transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <Link
          href="/contact"
          className="hidden lg:inline-flex rounded-xl bg-white px-6 py-2 text-sm font-medium text-[#2b004f] shadow-md transition hover:scale-105"
        >
          Contact us
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ✅ Premium Mobile Menu */}
<div
  className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
    open ? "max-h-[520px] mt-4" : "max-h-0"
  }`}
>
  <ul className="flex flex-col gap-4 px-1 text-white text-base">
    {navLinks.map((item) => (
      <li key={item.name} className="relative">
        <Link
          href={item.href}
          onClick={() => setOpen(false)}
          className="
            group flex items-center justify-between py-3
            transition-all duration-200
            active:scale-[0.97]
          "
        >
          {/* Text */}
          <span className="relative inline-block">
            {item.name}

            {/* underline */}
            <span
              className="
                absolute left-0 -bottom-1 h-[2px] w-full
                scale-x-0 origin-left
                bg-white rounded-full
                transition-transform duration-300
                group-active:scale-x-100
              "
            />
          </span>

          {/* Dropdown icon */}
          {item.dropdown && (
            <ChevronDown
              size={16}
              className="transition-transform duration-200 group-active:rotate-180"
            />
          )}
        </Link>
      </li>
    ))}
  </ul>

  {/* 🔥 Mobile Contact CTA */}
  <Link
    href="/contact"
    onClick={() => setOpen(false)}
    className="
      mt-6 inline-flex w-full justify-center
      rounded-xl bg-white px-6 py-3
      text-sm font-semibold text-[#2b004f]
      shadow-md transition
      active:scale-95
    "
  >
    Contact us
  </Link>
</div>

    </nav>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const brands = [
  "/brands/mogul.png",
  "/brands/efs.png",
  "/brands/yellow.png",
  "/brands/zana.png",
  "/brands/sweetplace.png",
  "/brands/food.png",
  "/brands/inferno.png",
];

export default function Advertise() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    let animationFrame: number;
    let translateX = 0;

    const speed = 0.35; // 👉 adjust speed here

    const animate = () => {
      translateX -= speed;

      if (Math.abs(translateX) >= track.scrollWidth / 2) {
        translateX = 0;
      }

      track.style.transform = `translateX(${translateX}px)`;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="w-full bg-[#0b0b10] py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <p className="text-center text-sm text-white/60 mb-6">
          Trusted by the biggest brands
        </p>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            ref={trackRef}
            className="flex items-center gap-16 w-max"
          >
            {/* Duplicate list for infinite loop */}
            {[...brands, ...brands].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[120px] opacity-80 hover:opacity-100 transition"
              >
                <Image
                  src={logo}
                  alt="Brand logo"
                  width={120}
                  height={60}
                  className="object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </div>

          {/* Gradient fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0b0b10] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0b0b10] to-transparent" />
        </div>
      </div>
    </section>
  );
}

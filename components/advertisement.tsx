"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const brands = [
  "/brands/1.png",
  "/brands/2.png",
  "/brands/3.png",
  "/brands/4.png",
  "/brands/5.png",
  "/brands/6.png",
  "/brands/7.png",
  "/brands/8.png",
  "/brands/9.png",
];

export default function Advertise() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    let animationFrame: number;
    let translateX = 0;

    const speed = 0.3; 

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
    <section className="w-full overflow-hidden py-6 sm:py-8 bg-gradient-to-r from-[#12001f] via-[#0e001a] to-[#12001f]">
      <div className="w-full px-6">
        {/* Heading */}
        <p className="mb-4 text-center text-xs sm:text-sm tracking-wide text-white/70">
          Trusted by the biggest brands
        </p>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            ref={trackRef}
            className="flex items-center gap-14 w-max"
          >
            {[...brands, ...brands].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[110px] sm:min-w-[120px] opacity-90"
              >
                <Image
                  src={logo}
                  alt="Brand logo"
                  width={120}
                  height={60}
                  className="object-contain"
                  priority={index < brands.length}
                />
              </div>
            ))}
          </div>

          {/* Soft fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0e001a] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0e001a] to-transparent" />
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroMobile() {
  const heroRef = useRef<HTMLDivElement>(null);
  const blob1 = useRef<HTMLDivElement>(null);
  const blob2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating blobs
      gsap.to(blob1.current, {
        x: 60,
        y: -80,
        duration: 14,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(blob2.current, {
        x: -50,
        y: 70,
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Text reveal
      gsap.from(".m-line", {
        y: 80,
        opacity: 0,
        filter: "blur(6px)",
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.15,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100svh] w-full overflow-hidden text-white"
    >
      {/* 🔥 Animated Gradient Background */}
      <div className="absolute inset-0 bg-[length:300%_300%] animate-gradient bg-gradient-to-r from-[#A327F0] via-[#6a1bbd] to-[#2B0046]" />

      {/* 🔮 Floating Blobs */}
      <div
        ref={blob1}
        className="absolute -top-24 -left-24 w-[320px] h-[320px] rounded-full bg-pink-400/40 blur-[90px]"
      />
      <div
        ref={blob2}
        className="absolute bottom-[-120px] right-[-120px] w-[360px] h-[360px] rounded-full bg-purple-500/40 blur-[100px]"
      />

      {/* 🌫 Overlay for contrast */}
      <div className="absolute inset-0 bg-black/25" />

      {/* 🔥 CONTENT */}
      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
        <h1 className="text-[clamp(2.4rem,9vw,3.4rem)] font-semibold leading-tight">
          <span className="m-line block">Transform Your Mind.</span>
          <span className="m-line block font-bold">
            Elevate Your Impact.
          </span>
        </h1>

        <p className="m-line mt-6 max-w-[28rem] text-sm leading-relaxed text-white/85">
          At Meta Master, we help you rewrite limiting beliefs, strengthen
          emotional intelligence, and master the inner game of success.
        </p>

        <div className="m-line mt-10 flex flex-col gap-4 w-full max-w-xs">
          <button className="rounded-full bg-white py-4 text-sm font-semibold text-[#2B0046] active:scale-95 transition">
            Schedule Call
          </button>
          <button className="text-sm font-medium text-white/80">
            View Case Study
          </button>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/60 animate-bounce">
        ↓ Scroll
      </div>

      {/* Gradient animation */}
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 14s ease infinite;
        }
      `}</style>
    </section>
  );
}

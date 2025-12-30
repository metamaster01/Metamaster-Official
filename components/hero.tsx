// "use client";

// import dynamic from "next/dynamic";
// import { useEffect, useState } from "react";
// import HeroFallback from "./HeroFallback";

// const HeroWebGL = dynamic(() => import("./HeroWebGL"), {
//   ssr: false,
// });


// export default function Hero() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     setIsMobile(window.innerWidth < 768);
//   }, []);

//   return (
//     <section className="relative h-screen w-full overflow-hidden text-white">
//       {/* 🌊 WebGL or Fallback */}
//       <div className="absolute inset-0">
//         {isMobile ? <HeroFallback /> : <HeroWebGL />}
//       </div>

//       {/* 🎨 Overlay */}
//       <div className="absolute inset-0 bg-black/20" />

//       {/* 🔥 HERO CONTENT (YOUR ORIGINAL CONTENT) */}
//       <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
//         <h1 className="text-[clamp(3rem,6vw,7rem)] font-semibold leading-tight tracking-tight">
//           <span className="block">Transform Your Mind.</span>
//           <span className="block font-bold">Elevate Your Impact.</span>
//         </h1>

//         <p className="mt-10 max-w-3xl text-base sm:text-lg md:text-xl text-white/90">
//           At Meta Master, we help you rewrite limiting beliefs, strengthen
//           emotional intelligence, and master the inner game of success — so you
//           can lead, communicate, and create with unshakable confidence.
//         </p>

//         <div className="mt-14 flex flex-wrap justify-center gap-8">
//           <button className="rounded-full bg-white px-10 py-4 text-sm font-semibold text-[#2B0046] transition hover:scale-110">
//             Schedule Call
//           </button>
//           <button className="text-sm font-medium text-white/80 hover:text-white">
//             View Case Study
//           </button>
//         </div>
//       </div>

//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-white/70 animate-bounce">
//         ↓ Scroll
//       </div>
//     </section>
//   );
// }

"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import HeroFallback from "./HeroFallback";

const HeroWebGL = dynamic(() => import("./HeroWebGL"), {
  ssr: false,
});

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [webglKey, setWebglKey] = useState(0);
  const pathname = usePathname();

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // 🔥 Force WebGL remount on route change
  useEffect(() => {
    setWebglKey((k) => k + 1);
  }, [pathname]);

  return (
    <section className="relative h-screen w-full overflow-hidden text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        {isMobile ? (
          <HeroFallback />
        ) : (
          <HeroWebGL key={webglKey} />
        )}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-[clamp(3rem,6vw,7rem)] font-semibold leading-tight">
          <span className="block">Transform Your Mind.</span>
          <span className="block font-bold">Elevate Your Impact.</span>
        </h1>

        <p className="mt-8 max-w-3xl text-sm sm:text-lg md:text-xl text-white/90">
          At Meta Master, we help you rewrite limiting beliefs, strengthen
          emotional intelligence, and master the inner game of success.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <button className="rounded-full bg-white px-10 py-4 text-sm font-semibold text-[#2B0046] active:scale-95 transition">
            Schedule Call
          </button>
          <button className="text-sm font-medium text-white/80 hover:text-white">
            View Case Study
          </button>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/70 animate-bounce z-10">
        ↓ Scroll
      </div>
    </section>
  );
}

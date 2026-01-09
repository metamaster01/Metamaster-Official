"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Accent = "purple" | "cyan" | "pink" | "amber" | "lime" | "blue";
type Variant = "rings" | "grid" | "waves";

type Service = {
  title: string;
  description: string;
  href?: string;
  accent: Accent;
  variant: Variant;
  art: "social" | "seo" | "ads" | "brand" | "ugc" | "video";
};

const ACCENT_RGB: Record<Accent, string> = {
  purple: "168 85 247",
  cyan: "34 211 238",
  pink: "236 72 153",
  amber: "251 191 36",
  lime: "163 230 53",
  blue: "59 130 246",
};

function usePrefersReducedMotion() {
  const [reduce, setReduce] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduce(!!mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  return reduce;
}

function useIsCoarsePointer() {
  const [coarse, setCoarse] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(pointer: coarse)");
    const update = () => setCoarse(!!mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  return coarse;
}

/** Scroll reveal hook (IntersectionObserver) */
function useReveal(opts?: { rootMargin?: string; threshold?: number; once?: boolean }) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = React.useState(false);
  const reduce = usePrefersReducedMotion();

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reduce) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShown(true);
        else if (!opts?.once) setShown(false);
      },
      {
        root: null,
        rootMargin: opts?.rootMargin ?? "0px 0px -12% 0px",
        threshold: opts?.threshold ?? 0.18,
      }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [opts?.rootMargin, opts?.threshold, opts?.once, reduce]);

  return { ref, shown };
}

/** Tilt + pointer spotlight (desktop only, safe on mobile) */
function useTilt() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const reduce = usePrefersReducedMotion();
  const coarse = useIsCoarsePointer();

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduce || coarse) return;

    const handleMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;

      const rotY = (px - 0.5) * 16;
      const rotX = (0.5 - py) * 12;

      el.style.setProperty("--rx", `${rotX}deg`);
      el.style.setProperty("--ry", `${rotY}deg`);
      el.style.setProperty("--mx", `${px * 100}%`);
      el.style.setProperty("--my", `${py * 100}%`);
    };

    const handleLeave = () => {
      el.style.setProperty("--rx", `0deg`);
      el.style.setProperty("--ry", `0deg`);
      el.style.setProperty("--mx", `50%`);
      el.style.setProperty("--my", `50%`);
    };

    el.addEventListener("pointermove", handleMove);
    el.addEventListener("pointerleave", handleLeave);
    handleLeave();

    return () => {
      el.removeEventListener("pointermove", handleMove);
      el.removeEventListener("pointerleave", handleLeave);
    };
  }, [reduce, coarse]);

  return ref;
}

/** deterministic dots */
function useSeeded(n = 1) {
  const ref = React.useRef<number[]>([]);
  if (ref.current.length === 0) {
    const out: number[] = [];
    let x = 1234567;
    for (let i = 0; i < n; i++) {
      x = (x * 16807) % 2147483647;
      out.push(x / 2147483647);
    }
    ref.current = out;
  }
  return ref.current;
}

/** Section in-view hook */
function useInViewport<T extends HTMLElement>(opts?: { rootMargin?: string; threshold?: number }) {
  const ref = React.useRef<T | null>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => setInView(!!entry.isIntersecting),
      {
        root: null,
        rootMargin: opts?.rootMargin ?? "0px 0px -10% 0px",
        threshold: opts?.threshold ?? 0.12,
      }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [opts?.rootMargin, opts?.threshold]);

  return { ref, inView };
}

/** Quantum blink controller (only runs when enabled + section is in viewport) */
function useQuantumBlink(total: number, enabled: boolean) {
  const reduce = usePrefersReducedMotion();
  const coarse = useIsCoarsePointer();
  const [active, setActive] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (!enabled || reduce || coarse) {
      setActive(null);
      return;
    }
    if (!total || total < 2) return;

    let alive = true;
    let t1: number | null = null;
    let t2: number | null = null;

    const pick = () => {
      const idx = Math.floor(Math.random() * total);
      setActive(idx);

      t1 = window.setTimeout(() => {
        if (!alive) return;
        setActive(null);
      }, 360);

      t2 = window.setTimeout(() => {
        if (!alive) return;
        pick();
      }, 7800 + Math.random() * 5200);
    };

    pick();

    return () => {
      alive = false;
      if (t1) window.clearTimeout(t1);
      if (t2) window.clearTimeout(t2);
    };
  }, [enabled, reduce, coarse, total]);

  return active;
}

const IconFrame = ({
  children,
  accent,
  variant,
}: {
  children: React.ReactNode;
  accent: Accent;
  variant: Variant;
}) => {
  const accentWash: Record<Accent, string> = {
    purple: "from-purple-500/35 via-fuchsia-400/12 to-transparent",
    cyan: "from-cyan-400/35 via-sky-400/12 to-transparent",
    pink: "from-pink-500/35 via-rose-400/12 to-transparent",
    amber: "from-amber-400/35 via-orange-400/12 to-transparent",
    lime: "from-lime-400/30 via-emerald-400/10 to-transparent",
    blue: "from-blue-500/35 via-indigo-400/12 to-transparent",
  };

  const rnd = useSeeded(14);

  return (
    <div
      className="relative h-28 w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] sm:h-32"
      style={{ ["--acc" as any]: ACCENT_RGB[accent] }}
    >
      {/* base wash */}
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accentWash[accent]}`} />

      {/* holo vignette */}
      <div className="pointer-events-none absolute inset-0 opacity-90 [mask-image:radial-gradient(circle_at_50%_35%,black_55%,transparent_80%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.10),transparent_55%,rgba(0,0,0,0.25))]" />
      </div>

      {/* cursor spotlight */}
      <div
        className="pointer-events-none absolute -inset-10 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,0.22), transparent 42%)",
        }}
      />

      {/* refraction glass */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-white/[0.03] [backdrop-filter:blur(10px)]" />

      {/* microgrid + dots */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.40)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.40)_1px,transparent_1px)] [background-size:20px_20px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:18px_18px]" />

      {/* neon edge trace */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-70">
        <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-[rgb(var(--acc)/0.42)] blur-[0.5px]" />
      </div>

      {/* animated conic border scanner */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl">
          <div className="absolute inset-[-40%] animate-[borderScan_1.6s_linear_infinite] bg-[conic-gradient(from_180deg,transparent,rgba(255,255,255,0.22),transparent,rgba(var(--acc),0.32),transparent)]" />
        </div>
      </div>

      {/* circuit lines (hover) */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 [background-image:linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)] bg-[length:260px_100%] animate-[circuit_1.4s_linear_infinite]" />
        <div className="absolute inset-0 [background-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.06),transparent)] bg-[length:100%_220px] animate-[circuitY_1.9s_linear_infinite]" />
      </div>

      {/* CRT scanlines */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:repeating-linear-gradient(to_bottom,rgba(255,255,255,0.18)_0px,rgba(255,255,255,0.18)_1px,transparent_1px,transparent_4px)]" />

      {/* variant */}
      {variant === "waves" && (
        <svg className="pointer-events-none absolute inset-0 opacity-[0.28]" viewBox="0 0 320 120" fill="none">
          <path
            d="M0 70 C 40 50, 70 90, 110 70 C 150 52, 180 80, 220 62 C 260 45, 290 70, 320 52"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M0 88 C 46 68, 74 104, 118 86 C 150 74, 188 94, 232 76 C 268 62, 296 88, 320 72"
            stroke="rgba(255,255,255,0.14)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )}

      {/* orb */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl opacity-90 bg-[rgb(var(--acc)/0.22)] sm:h-44 sm:w-44" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl opacity-70 bg-white/10 sm:h-28 sm:w-28" />

      {/* rings */}
      {variant === "rings" && (
        <>
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/12 opacity-60 sm:h-28 sm:w-28" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8 opacity-55 [mask-image:radial-gradient(circle,black_60%,transparent_76%)] sm:h-44 sm:w-44" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/6 opacity-45 [mask-image:radial-gradient(circle,black_55%,transparent_78%)] sm:h-60 sm:w-60" />
        </>
      )}

      {/* orbit dots */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 sm:h-48 sm:w-48">
        <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
          <div className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white/60 shadow-[0_0_18px_rgba(255,255,255,0.25)]" />
        </div>
        <div className="absolute inset-0 animate-[spin_14s_linear_infinite]">
          <div className="absolute right-0 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-[rgb(var(--acc)/0.9)] shadow-[0_0_18px_rgb(var(--acc)/0.25)]" />
        </div>
      </div>

      {/* particles */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/35 shadow-[0_0_14px_rgba(255,255,255,0.20)]"
            style={{
              left: `${8 + rnd[i] * 84}%`,
              top: `${10 + rnd[i + 1] * 78}%`,
              animation: `floaty ${4.2 + (rnd[i + 2] || 0) * 3}s ease-in-out infinite`,
              animationDelay: `${(rnd[i + 3] || 0) * 1.2}s`,
              opacity: 0.22 + (rnd[i + 4] || 0) * 0.4,
              transform: "translateZ(0)",
            }}
          />
        ))}
      </div>

      {/* scan sweep */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute -top-1/2 left-0 h-1/2 w-full bg-gradient-to-b from-transparent via-white/10 to-transparent animate-[scan_1.2s_ease-in-out_infinite]" />
      </div>

      {/* glitch shimmer */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 mix-blend-screen">
        <div className="absolute inset-0 translate-x-[-30%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)] group-hover:animate-[glitch_0.7s_steps(2)_infinite]" />
      </div>

      {/* burst */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
        <span className="absolute left-1/2 top-1/2 h-1 w-1 rounded-full bg-white/70 animate-[burst_0.7s_ease-out_infinite]" />
      </div>

      {/* sheen */}
      <div className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition duration-700 group-hover:left-[120%] group-hover:opacity-100" />

      {/* content */}
      <div className="relative flex h-full items-center justify-center px-2">
        <div className="relative">
          <div className="absolute inset-0 blur-md opacity-70 mix-blend-screen animate-[flicker_3.5s_infinite]">
            {children}
          </div>
          <div className="relative animate-[floaty_7s_ease-in-out_infinite] transition duration-300 group-hover:scale-[1.03]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const Chip = ({ x, y, S3, A }: { x: number; y: number; S3: string; A: string }) => (
  <g opacity="0.9">
    <rect x={x} y={y} width="18" height="12" rx="3" fill="rgba(255,255,255,0.06)" stroke={S3} strokeWidth="1.2" />
    <path d={`M${x + 4} ${y + 6}h10`} stroke={A} strokeWidth="1.6" strokeLinecap="round" />
  </g>
);

const Corner = ({ x, y, S2 }: { x: number; y: number; S2: string }) => (
  <path d={`M${x} ${y + 10}V${y}H${x + 10}`} stroke={S2} strokeWidth="1.6" strokeLinecap="round" />
);

function TechArt({ type }: { type: Service["art"] }) {
  const S = "rgba(255,255,255,0.72)";
  const S2 = "rgba(255,255,255,0.32)";
  const S3 = "rgba(255,255,255,0.18)";
  const A = "rgb(var(--acc) / 0.75)";
  const AF = "rgb(var(--acc) / 0.18)";
  const AF2 = "rgb(var(--acc) / 0.10)";

  switch (type) {
    case "social":
      return (
        <svg width="176" height="96" viewBox="0 0 176 96" fill="none">
          <rect x="18" y="18" width="98" height="58" rx="10" fill={AF2} stroke={S} strokeWidth="1.7" />
          <Corner x={18} y={18} S2={S2} />
          <Corner x={106} y={18} S2={S2} />
          <Corner x={18} y={66} S2={S2} />
          <Corner x={106} y={66} S2={S2} />
          <path d="M32 34h46" stroke={S2} strokeWidth="1.7" strokeLinecap="round" />
          <path d="M32 44h62" stroke={S2} strokeWidth="1.7" strokeLinecap="round" />
          <path d="M32 54h40" stroke={S2} strokeWidth="1.7" strokeLinecap="round" />
          <circle cx="134" cy="32" r="9" fill={AF} stroke={A} strokeWidth="1.7" />
          <circle cx="154" cy="52" r="7" fill={AF2} stroke={S2} strokeWidth="1.7" />
          <circle cx="126" cy="62" r="6" fill={AF2} stroke={S2} strokeWidth="1.7" />
          <path d="M140 38l10 10" stroke={A} strokeWidth="1.7" strokeLinecap="round" />
          <path d="M132 40l-4 16" stroke={S2} strokeWidth="1.7" strokeLinecap="round" />
          <path d="M150 50l-18 10" stroke={S2} strokeWidth="1.7" strokeLinecap="round" />
          <Chip x={124} y={16} S3={S3} A={A} />
          <Chip x={146} y={70} S3={S3} A={A} />
        </svg>
      );
    case "seo":
      return (
        <svg width="176" height="96" viewBox="0 0 176 96" fill="none">
          <circle cx="72" cy="46" r="22" stroke={S} strokeWidth="1.7" fill={AF2} />
          <circle cx="72" cy="46" r="10" stroke={S2} strokeWidth="1.7" />
          <path d="M72 24v44" stroke={S3} strokeWidth="1.4" />
          <path d="M50 46h44" stroke={S3} strokeWidth="1.4" />
          <path d="M72 46L90 34" stroke={A} strokeWidth="1.9" strokeLinecap="round" />
          <path d="M72 24a22 22 0 0 1 22 22" stroke={A} strokeWidth="1.9" strokeLinecap="round" />
          <rect x="108" y="24" width="48" height="16" rx="6" fill="rgba(255,255,255,0.06)" stroke={S3} strokeWidth="1.2" />
          <rect x="108" y="44" width="54" height="16" rx="6" fill="rgba(255,255,255,0.06)" stroke={S3} strokeWidth="1.2" />
          <path d="M116 32h24" stroke={S2} strokeWidth="1.7" strokeLinecap="round" />
          <path d="M116 52h34" stroke={S2} strokeWidth="1.7" strokeLinecap="round" />
          <path d="M116 58h22" stroke={S3} strokeWidth="1.6" strokeLinecap="round" />
          <path d="M22 72h36" stroke={S3} strokeWidth="1.6" strokeLinecap="round" />
          <path d="M28 72l8-10 8 10" stroke={A} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "ads":
      return (
        <svg width="176" height="96" viewBox="0 0 176 96" fill="none">
          <circle cx="130" cy="48" r="22" stroke={S2} strokeWidth="1.7" />
          <circle cx="130" cy="48" r="12" stroke={A} strokeWidth="1.7" />
          <circle cx="130" cy="48" r="3" fill={A} />
          <path d="M130 22v10M130 64v10M104 48h10M146 48h10" stroke={S3} strokeWidth="1.6" strokeLinecap="round" />
          <rect x="22" y="28" width="72" height="40" rx="10" fill={AF2} stroke={S} strokeWidth="1.7" />
          <path d="M34 40h32" stroke={S2} strokeWidth="1.7" strokeLinecap="round" />
          <path d="M34 50h48" stroke={S3} strokeWidth="1.7" strokeLinecap="round" />
          <rect x="34" y="56" width="22" height="8" rx="4" fill={AF} stroke={A} strokeWidth="1.2" />
          <Chip x={22} y={18} S3={S3} A={A} />
          <Chip x={44} y={74} S3={S3} A={A} />
        </svg>
      );
    case "brand":
      return (
        <svg width="176" height="96" viewBox="0 0 176 96" fill="none">
          <path
            d="M48 18h52c8 0 14 6 14 14v14c0 18-14 30-40 36-26-6-40-18-40-36V32c0-8 6-14 14-14Z"
            fill={AF2}
            stroke={S}
            strokeWidth="1.7"
          />
          <path d="M56 34h34" stroke={S2} strokeWidth="1.7" strokeLinecap="round" />
          <path d="M56 44h46" stroke={S3} strokeWidth="1.7" strokeLinecap="round" />
          <path d="M40 60h92" stroke={A} strokeWidth="1.6" strokeLinecap="round" opacity="0.55" />
          <path d="M44 66h84" stroke={S3} strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
          <circle cx="74" cy="56" r="10" fill={AF} stroke={A} strokeWidth="1.7" />
          <Chip x={124} y={22} S3={S3} A={A} />
          <Chip x={18} y={66} S3={S3} A={A} />
        </svg>
      );
    case "ugc":
      return (
        <svg width="176" height="96" viewBox="0 0 176 96" fill="none">
          <circle cx="60" cy="40" r="10" fill={AF2} stroke={S} strokeWidth="1.7" />
          <circle cx="92" cy="36" r="8" fill={AF2} stroke={S} strokeWidth="1.7" />
          <path d="M42 74c2-14 14-22 28-22s26 8 28 22" stroke={S2} strokeWidth="1.7" strokeLinecap="round" />
          <path d="M78 74c2-10 10-16 20-16s18 6 20 16" stroke={S3} strokeWidth="1.7" strokeLinecap="round" />
          <path
            d="M140 24l4 10 10 1-8 6 3 10-9-6-9 6 3-10-8-6 10-1 4-10Z"
            fill={AF}
            stroke={A}
            strokeWidth="1.7"
          />
          <Chip x={22} y={22} S3={S3} A={A} />
          <Chip x={118} y={70} S3={S3} A={A} />
        </svg>
      );
    case "video":
      return (
        <svg width="176" height="96" viewBox="0 0 176 96" fill="none">
          <path d="M24 70h96" stroke={S3} strokeWidth="1.6" strokeLinecap="round" />
          <rect x="24" y="22" width="86" height="44" rx="12" fill={AF2} stroke={S} strokeWidth="1.7" />
          <path d="M110 34l18-10v44l-18-10V34Z" fill={AF} stroke={A} strokeWidth="1.7" strokeLinejoin="round" />
          <circle cx="70" cy="44" r="12" fill={AF} stroke={A} strokeWidth="1.7" />
          <path d="M66 38l10 6-10 6v-12Z" fill="rgba(255,255,255,0.78)" />
        </svg>
      );
    default:
      return null;
  }
}

const services: Service[] = [
  {
    title: "Social Media Marketing",
    description:
      "Engaging content calendars, reels, influencer campaigns, and ads that build your online community and boost conversions.",
    href: "/services/social-media",
    accent: "pink",
    variant: "waves",
    art: "social",
  },
  {
    title: "Website, SEO & Funnel Building",
    description:
      "Responsive websites, SEO strategies, and high-converting funnels designed to rank higher and sell smarter.",
    href: "/services/seo-funnels",
    accent: "cyan",
    variant: "rings",
    art: "seo",
  },
  {
    title: "Paid Ads & Lead Generation",
    description:
      "ROI-driven Google & Meta Ads, retargeting, and funnel campaigns that turn clicks into loyal customers.",
    href: "/services/paid-ads",
    accent: "purple",
    variant: "rings",
    art: "ads",
  },
  {
    title: "Branding & Design",
    description:
      "Impactful logos, visual identity systems, brochures, and templates crafted to impress and strengthen your brand presence.",
    href: "/services/branding",
    accent: "amber",
    variant: "grid",
    art: "brand",
  },
  {
    title: "Influencer Marketing & UGC",
    description:
      "Strategic collabs, trending content, and influencer campaigns that amplify your reach and build trust.",
    href: "/services/influencer-ugc",
    accent: "lime",
    variant: "waves",
    art: "ugc",
  },
  {
    title: "Content & Video Production",
    description:
      "High-retention reels, storytelling videos, testimonials, and product shoots that engage and convert.",
    href: "/services/video",
    accent: "blue",
    variant: "grid",
    art: "video",
  },
];

function ServiceCard({
  item,
  index,
  blink,
}: {
  item: Service;
  index: number;
  blink: boolean;
}) {
  const CardTag: any = item.href ? Link : "div";
  const cardProps = item.href ? { href: item.href, "aria-label": item.title } : {};
  const tiltRef = useTilt();
  const { ref: revealRef, shown } = useReveal({
    rootMargin: "0px 0px -14% 0px",
    threshold: 0.16,
    once: false,
  });

  const reduce = usePrefersReducedMotion();
  const entryKind = index % 3;

  const setRefs = React.useCallback(
    (node: HTMLDivElement | null) => {
      (tiltRef as any).current = node;
      (revealRef as any).current = node;
    },
    [tiltRef, revealRef]
  );

  return (
    <CardTag
      {...cardProps}
      className={[
        "group relative block overflow-hidden rounded-2xl border border-white/10",
        "bg-white/[0.04] p-5 backdrop-blur",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.03)]",
        "transition duration-300",
        "hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.06]",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/50 focus-visible:ring-offset-0",
        blink ? "quantum-blink" : "",
      ].join(" ")}
    >
      {/* quantum overlay */}
      {!reduce && blink && (
        <div className="pointer-events-none absolute inset-0 z-[1]">
          <div className="absolute inset-[-20%] animate-[quantumFlash_0.55s_ease-out_infinite] bg-[conic-gradient(from_90deg,rgba(255,255,255,0.0),rgba(255,255,255,0.18),rgba(255,255,255,0.0),rgba(168,85,247,0.22),rgba(255,255,255,0.0))]" />
          <div className="absolute inset-0 animate-[quantumNoise_0.3s_steps(2)_infinite] opacity-[0.12] [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.4)_0px,rgba(255,255,255,0.4)_1px,transparent_1px,transparent_3px)]" />
        </div>
      )}

      {/* rare animated gradient edge */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-60">
        <div className="absolute inset-[-2px] rounded-2xl bg-[conic-gradient(from_180deg,rgba(255,255,255,0.0),rgba(255,255,255,0.10),rgba(255,255,255,0.0),rgba(168,85,247,0.22),rgba(255,255,255,0.0))] blur-[1px] animate-[borderScan_6s_linear_infinite]" />
      </div>

      {/* entry fx */}
      {!reduce && (
        <>
          {entryKind === 0 && (
            <div
              className={[
                "pointer-events-none absolute inset-0",
                shown ? "opacity-0" : "opacity-100",
                "transition-opacity duration-200",
              ].join(" ")}
            >
              <span className={`shard shard-a ${shown ? "shard-out" : "shard-in"}`} />
              <span className={`shard shard-b ${shown ? "shard-out" : "shard-in"}`} />
              <span className={`shard shard-c ${shown ? "shard-out" : "shard-in"}`} />
            </div>
          )}

          {entryKind === 1 && (
            <div
              className={[
                "pointer-events-none absolute inset-0 mix-blend-screen",
                shown ? "opacity-0" : "opacity-100",
                "transition-opacity duration-200",
              ].join(" ")}
            >
              <div className={`glitchScan ${shown ? "glitch-out" : "glitch-in"}`} />
              <div className={`rgbSplit ${shown ? "rgb-out" : "rgb-in"}`} />
            </div>
          )}

          {entryKind === 2 && (
            <div
              className={[
                "pointer-events-none absolute inset-0",
                shown ? "opacity-0" : "opacity-100",
                "transition-opacity duration-200",
              ].join(" ")}
            >
              <div className={`popMist ${shown ? "pop-out" : "pop-in"}`} />
            </div>
          )}
        </>
      )}

      {/* reveal wrapper + tilt */}
      <div
        ref={setRefs}
        className={[
          "relative z-[2] flex h-full flex-col",
          "transition-[transform,opacity,filter] duration-700 ease-[cubic-bezier(.2,.8,.2,1)] will-change-transform",
          shown ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-10 blur-[10px]",
        ].join(" ")}
        style={{
          transitionDelay: `${Math.min(index * 60, 220)}ms`,
          transform: shown ? "perspective(900px) rotateX(var(--rx)) rotateY(var(--ry))" : undefined,
        }}
      >
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-purple-500/15 via-purple-500/0 to-transparent" />

        <div className="[transform-style:preserve-3d]">
          <div className="[transform:translateZ(22px)]">
            <IconFrame accent={item.accent} variant={item.variant}>
              <TechArt type={item.art} />
            </IconFrame>
          </div>
        </div>

        <h3 className="mt-4 text-base font-semibold tracking-tight text-white sm:text-lg">
          {item.title}
        </h3>

        <p className="mt-2 text-xs leading-relaxed text-white/65 sm:mt-3 sm:text-sm">
          {item.description}
        </p>

        <div className="mt-auto pt-6 sm:pt-8">
          <span
            className={[
              "ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full",
              "bg-white/90 text-black shadow-sm",
              "transition-transform duration-200",
              "group-hover:scale-[1.06] active:scale-[0.98]",
            ].join(" ")}
            aria-hidden="true"
          >
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
      </div>
    </CardTag>
  );
}

export default function Services() {
  // ✅ blink only when section is in viewport
  const { ref: sectionRef, inView } = useInViewport<HTMLElement>({
    rootMargin: "0px 0px -15% 0px",
    threshold: 0.12,
  });

  // ✅ smaller cards: tighter spacing + smaller padding + smaller icon frame already
  const activeBlink = useQuantumBlink(services.length, inView);

  return (
    <>
      <section ref={sectionRef} className="relative overflow-hidden bg-[#0b0b0d] px-6 py-14">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.10),transparent_45%),radial-gradient(circle_at_85%_25%,rgba(168,85,247,0.14),transparent_45%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06),transparent_35%,rgba(0,0,0,0.55))]" />
          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:56px_56px]" />
          <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay [background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22180%22 height=%22180%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.35%22/></svg>')]" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl">
          {/* Top row */}
          <div className="grid gap-7 md:grid-cols-[1fr_auto] md:items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
                What we do
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Our services
              </h2>
            </div>

            <div className="md:max-w-md">
              <p className="text-sm leading-relaxed text-white/65">
                At Meta Master, we offer end-to-end digital solutions that cover every touchpoint of your
                business — helping you build visibility, generate leads, and scale sustainably.
              </p>

              <Link
                href="/services"
                className="mt-5 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-7 py-3 text-sm font-medium text-white shadow-sm backdrop-blur transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/50 active:scale-[0.99]"
              >
                See more
                <ArrowUpRight className="ml-2 h-4 w-4 opacity-80" />
              </Link>
            </div>
          </div>

          {/* Cards (tighter + fits better in one screen) */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {services.map((s, idx) => (
              <ServiceCard key={s.title} item={s} index={idx} blink={activeBlink === idx} />
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        /* =========================
           ORIGINAL KEYFRAMES
        ========================== */
        @keyframes floaty {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
            opacity: 0.55;
          }
          50% {
            transform: translate3d(0, -10px, 0);
            opacity: 1;
          }
        }
        @keyframes scan {
          0% {
            transform: translateY(-120%);
          }
          100% {
            transform: translateY(220%);
          }
        }
        @keyframes glitch {
          0% {
            transform: translateX(-30%);
            opacity: 0;
          }
          20% {
            opacity: 0.9;
          }
          50% {
            transform: translateX(30%);
            opacity: 0.35;
          }
          100% {
            transform: translateX(60%);
            opacity: 0;
          }
        }
        @keyframes circuit {
          0% {
            background-position: -260px 0;
          }
          100% {
            background-position: 260px 0;
          }
        }
        @keyframes circuitY {
          0% {
            background-position: 0 -220px;
          }
          100% {
            background-position: 0 220px;
          }
        }
        @keyframes burst {
          0% {
            transform: translate(-50%, -50%) scale(1);
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.25);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            box-shadow: 40px -12px 0 0 rgba(255, 255, 255, 0.12),
              -36px 18px 0 0 rgba(255, 255, 255, 0.1),
              18px 36px 0 0 rgba(255, 255, 255, 0.1),
              -18px -34px 0 0 rgba(255, 255, 255, 0.08),
              0 0 0 34px rgba(255, 255, 255, 0);
            opacity: 0;
          }
        }
        @keyframes flicker {
          0%,
          100% {
            opacity: 0.65;
          }
          8% {
            opacity: 0.35;
          }
          12% {
            opacity: 0.8;
          }
          20% {
            opacity: 0.45;
          }
          28% {
            opacity: 0.9;
          }
          60% {
            opacity: 0.55;
          }
        }
        @keyframes borderScan {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* =========================
           ENTRY FX
        ========================== */
        .shard {
          position: absolute;
          inset: -10%;
          border-radius: 24px;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0.1),
            rgba(255, 255, 255, 0),
            rgba(168, 85, 247, 0.18)
          );
          filter: blur(2px);
          opacity: 0.85;
        }
        .shard-a {
          clip-path: polygon(0 0, 60% 0, 40% 55%, 0 60%);
        }
        .shard-b {
          clip-path: polygon(40% 0, 100% 0, 100% 70%, 55% 50%);
        }
        .shard-c {
          clip-path: polygon(0 60%, 45% 50%, 100% 70%, 100% 100%, 0 100%);
        }
        .shard-in {
          animation: shardIn 0.55s cubic-bezier(0.2, 0.9, 0.2, 1) both;
        }
        .shard-out {
          animation: shardOut 0.38s cubic-bezier(0.2, 0.9, 0.2, 1) both;
        }
        @keyframes shardIn {
          0% {
            transform: translate3d(0, 18px, 0) scale(1.05) rotate(-1deg);
            opacity: 1;
          }
          60% {
            transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
            opacity: 0.95;
          }
          100% {
            opacity: 0;
          }
        }
        @keyframes shardOut {
          0% {
            opacity: 0.6;
          }
          100% {
            opacity: 0;
          }
        }

        .glitchScan {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.1), transparent);
          transform: translateY(-120%);
          opacity: 0.9;
        }
        .glitch-in {
          animation: glitchScanIn 0.65s ease both;
        }
        .glitch-out {
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        @keyframes glitchScanIn {
          0% {
            transform: translateY(-140%);
            opacity: 0;
          }
          20% {
            opacity: 0.9;
          }
          100% {
            transform: translateY(200%);
            opacity: 0;
          }
        }

        .rgbSplit {
          position: absolute;
          inset: 0;
          opacity: 0.55;
          mix-blend-mode: screen;
          background: radial-gradient(circle at 30% 40%, rgba(255, 0, 120, 0.16), transparent 55%),
            radial-gradient(circle at 70% 60%, rgba(0, 220, 255, 0.16), transparent 55%);
          filter: blur(1px);
        }
        .rgb-in {
          animation: rgbIn 0.55s steps(2) both;
        }
        .rgb-out {
          opacity: 0;
          transition: opacity 0.18s ease;
        }
        @keyframes rgbIn {
          0% {
            transform: translateX(-10px);
            opacity: 0;
          }
          20% {
            opacity: 0.8;
          }
          60% {
            transform: translateX(10px);
            opacity: 0.25;
          }
          100% {
            transform: translateX(20px);
            opacity: 0;
          }
        }

        .popMist {
          position: absolute;
          inset: -20%;
          border-radius: 30px;
          background: radial-gradient(circle at 50% 45%, rgba(255, 255, 255, 0.14), transparent 60%);
          opacity: 0.9;
          filter: blur(6px);
        }
        .pop-in {
          animation: popIn 0.55s cubic-bezier(0.15, 1.05, 0.25, 1) both;
        }
        .pop-out {
          opacity: 0;
          transition: opacity 0.18s ease;
        }
        @keyframes popIn {
          0% {
            transform: scale(0.92);
            opacity: 0;
          }
          55% {
            transform: scale(1.03);
            opacity: 0.9;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }

        /* =========================
           QUANTUM BLINK (EXTRA)
        ========================== */
        .quantum-blink {
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.06),
            0 0 32px rgba(168, 85, 247, 0.22),
            0 0 64px rgba(255, 255, 255, 0.05);
        }
        @keyframes quantumFlash {
          0% {
            transform: rotate(0deg) scale(1);
            opacity: 0.25;
          }
          35% {
            opacity: 0.95;
          }
          100% {
            transform: rotate(140deg) scale(1.12);
            opacity: 0;
          }
        }
        @keyframes quantumNoise {
          0% {
            transform: translateX(0);
            filter: blur(0px);
          }
          50% {
            transform: translateX(-2px);
            filter: blur(0.5px);
          }
          100% {
            transform: translateX(2px);
            filter: blur(0px);
          }
        }
      `}</style>
    </>
  );
}

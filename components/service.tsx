// "use client";

// import React from "react";
// import Link from "next/link";
// import { ArrowUpRight } from "lucide-react";

// type Service = {
//   title: string;
//   description: string;
//   href?: string;
//   gif: string;
// };

// /* ---------------- SCROLL REVEAL HOOK ---------------- */

// function useReveal() {
//   const ref = React.useRef<HTMLDivElement | null>(null);
//   const [visible, setVisible] = React.useState(false);

//   React.useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//         }
//       },
//       { threshold: 0.15 }
//     );

//     observer.observe(el);
//     return () => observer.disconnect();
//   }, []);

//   return { ref, visible };
// }

// /* ---------------- SERVICES ---------------- */

// const services: Service[] = [
//   {
//     title: "Social Media Marketing",
//     description:
//       "Engaging content calendars, reels, influencer campaigns, and ads that build your online community and boost conversions.",
//     href: "/services/social-media-marketing",
//     gif: "/Social-media-marketing1.gif",
//   },
//   {
//     title: "Website, SEO & Funnel Building",
//     description:
//       "Responsive websites, SEO strategies, and high-converting funnels designed to rank higher and sell smarter.",
//     href: "/services/website-seo-funnel-building",
//     gif: "/Website,-SEO-and-Funnel-Building.gif",
//   },
//   {
//     title: "Paid Ads & Lead Generation",
//     description:
//       "ROI-driven Google & Meta Ads, retargeting, and funnel campaigns that turn clicks into loyal customers.",
//     href: "/services/paid-ads-lead-generation",
//     gif: "/Paid-ads-and-lead-generation.gif",
//   },
//   {
//     title: "Branding & Design",
//     description:
//       "Impactful logos and visual identity systems crafted to strengthen your brand presence.",
//     href: "/services/branding-design",
//     gif: "/Branding-and-design.gif",
//   },
//   {
//     title: "Influencer Marketing & UGC",
//     description:
//       "Strategic collaborations and influencer campaigns that amplify your reach and build trust.",
//     href: "/services/influencer-marketing-ugc",
//     gif: "/Influencer-marketing-and-UCG.gif",
//   },
//   {
//     title: "Content & Video Production",
//     description:
//       "High-retention reels and storytelling videos that engage and convert.",
//     href: "/services/content-video-production",
//     gif: "/Content-and-video-production.gif",
//   },
// ];

// /* ---------------- CARD ---------------- */

// function ServiceCard({ item, index }: { item: Service; index: number }) {
//   const { ref, visible } = useReveal();
//   const CardTag: any = item.href ? Link : "div";
//   const cardProps = item.href ? { href: item.href } : {};

//   return (
//     <CardTag
//       {...cardProps}
//       ref={ref}
//       className={`
//         group relative block rounded-2xl border border-white/10 
//         bg-white/[0.04] p-5 backdrop-blur
//         transition-all duration-500 ease-out
//         hover:scale-[1.07] hover:z-20 hover:border-white/30
//         hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]
//         ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
//       `}
//       style={{
//         transitionDelay: `${index * 100}ms`,
//       }}
//     >
//       {/* GIF */}
//       <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-black/40 flex items-center justify-center">
//         <div className="absolute inset-0 bg-purple-500/10 blur-2xl scale-110" />
//         <img
//           src={item.gif}
//           alt={item.title}
//           className="relative z-10 h-full w-full object-contain transition duration-500 group-hover:scale-110"
//           loading="lazy"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
//       </div>

//       <h3 className="mt-4 text-lg font-semibold text-white">
//         {item.title}
//       </h3>

//       <p className="mt-2 text-sm text-white/65 leading-relaxed">
//         {item.description}
//       </p>

//       <div className="mt-6">
//         <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:scale-110">
//           <ArrowUpRight className="h-5 w-5" />
//         </span>
//       </div>
//     </CardTag>
//   );
// }

// /* ---------------- SECTION ---------------- */

// export default function Services() {
//   return (
//     <section className="relative overflow-hidden bg-[#050008] px-6 py-20">
//       <div className="relative mx-auto max-w-6xl">
//         <div className="mb-14">
//           <p className="text-xs uppercase tracking-widest text-white/50">
//             What we do
//           </p>
//           <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">
//             Our Services
//           </h2>
//           <p className="mt-4 max-w-xl text-sm text-white/65">
//             We provide end-to-end digital solutions that help businesses
//             build visibility, generate leads, and scale sustainably.
//           </p>
//         </div>

//         <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
//           {services.map((service, i) => (
//             <ServiceCard key={service.title} item={service} index={i} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type Service = {
  title: string;
  description: string;
  href?: string;
  gif: string;
};

const services: Service[] = [
  {
    title: "Social Media Marketing",
    description:
      "Engaging content calendars, reels, influencer campaigns, and ads that build your online community and boost conversions.",
    href: "/services/social-media-marketing",
    gif: "/Social-media-marketing1.gif",
  },
  {
    title: "Website, SEO & Funnel Building",
    description:
      "Responsive websites, SEO strategies, and high-converting funnels designed to rank higher and sell smarter.",
    href: "/services/website-seo-funnel-building",
    gif: "/Website,-SEO-and-Funnel-Building.gif",
  },
  {
    title: "Paid Ads & Lead Generation",
    description:
      "ROI-driven Google & Meta Ads, retargeting, and funnel campaigns that turn clicks into loyal customers.",
    href: "/services/paid-ads-lead-generation",
    gif: "/Paid-ads-and-lead-generation.gif",
  },
  {
    title: "Branding & Design",
    description:
      "Impactful logos and visual identity systems crafted to strengthen your brand presence.",
    href: "/services/branding-design",
    gif: "/Branding-and-design.gif",
  },
  {
    title: "Influencer Marketing & UGC",
    description:
      "Strategic collaborations and influencer campaigns that amplify your reach and build trust.",
    href: "/services/influencer-marketing-ugc",
    gif: "/Influencer-marketing-and-UCG.gif",
  },
  {
    title: "Content & Video Production",
    description:
      "High-retention reels and storytelling videos that engage and convert.",
    href: "/services/content-video-production",
    gif: "/Content-and-video-production.gif",
  },
];

function ServiceCard({ item, index }: { item: Service; index: number }) {
  const CardTag: any = item.href ? motion(Link) : motion.div;
  const cardProps = item.href ? { href: item.href } : {};

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 120, damping: 15 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 15 });

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <CardTag
      {...cardProps}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="relative group rounded-2xl"
    >
      <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 shadow-xl transition duration-500 group-hover:shadow-2xl">

        {/* Natural light reflection */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
          style={{
            background: useTransform(
              [smoothX, smoothY],
              ([x, y]) =>
                `radial-gradient(circle at ${50 + x * 100}% ${
                  50 + y * 100
                }%, rgba(255,255,255,0.12), transparent 60%)`
            ),
          }}
        />

        {/* Image */}
        <motion.div
          className="relative aspect-square rounded-xl overflow-hidden"
          style={{ translateZ: 30 }}
        >
          <motion.img
            src={item.gif}
            alt={item.title}
            className="h-full w-full object-contain"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>

        <motion.h3
          className="mt-5 text-lg font-semibold text-white"
          style={{ translateZ: 40 }}
        >
          {item.title}
        </motion.h3>

        <motion.p
          className="mt-2 text-sm text-white/60 leading-relaxed"
          style={{ translateZ: 35 }}
        >
          {item.description}
        </motion.p>

        <motion.div
          className="mt-6"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-md">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </motion.div>
      </div>
    </CardTag>
  );
}

export default function Services() {
  return (
    <section className="relative bg-[#050008] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-widest text-white/40">
            What we do
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-xl text-sm text-white/60">
            We provide end-to-end digital solutions designed for sustainable growth and measurable impact.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 perspective-[1000px]">
          {services.map((service, i) => (
            <ServiceCard key={service.title} item={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}




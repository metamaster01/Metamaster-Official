

// import Link from "next/link";
// import Image from "next/image";

// export default function ProjectCard({
//   title,
//   category,
//   image,
//   slug,
// }: any) {
//   return (
//     <Link href={`/our-work/${slug}`}>
//       <div className="group cursor-pointer">
//         <Image
//           src={image}
//           alt={title}
//           width={600}
//           height={400}
//           className="rounded-xl"
//         />
//         <h3 className="mt-4 font-semibold group-hover:text-purple-400">
//           {title}
//         </h3>
//         <p className="text-sm text-white/60">{category}</p>
//       </div>
//     </Link>
//   );
// }



"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({
  title,
  category,
  image,
  slug,
}: {
  title: string;
  category: string;
  image: string;
  slug: string;
}) {
  /* Cursor glow position */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <Link href={`/our-work/${slug}`}>
      <motion.article
        onMouseMove={handleMouseMove}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -6 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="
          group relative overflow-hidden rounded-2xl
          border border-white/10
          bg-white/[0.04]
          backdrop-blur-md
        "
      >
        {/* Cursor glow */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                260px circle at ${mouseX}px ${mouseY}px,
                rgba(168,85,247,0.16),
                transparent 60%
              )
            `,
          }}
        />

        {/* IMAGE */}
        <div className="relative h-[260px] w-full overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.06 }} // ✅ ZOOM IN
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="h-full w-full"
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 p-6">
          <h3 className="text-sm font-semibold text-white">
            {title}
          </h3>

          <p className="mt-2 text-xs text-white/60">
            {category}
          </p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-purple-400"
          >
            View Case Study
            <motion.span
              whileHover={{ x: 4 }}
              transition={{ duration: 0.25 }}
            >
              <ArrowUpRight size={14} />
            </motion.span>
          </motion.div>
        </div>

        {/* Border glow */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-purple-500/30 opacity-0 group-hover:opacity-100 transition"
        />
      </motion.article>
    </Link>
  );
}

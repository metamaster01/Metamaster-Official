// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// interface ProjectCardProps {
//   title: string;
//   category: string;
//   image: string;
// }

// export default function ProjectCard({
//   title,
//   category,
//   image,
// }: ProjectCardProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       viewport={{ once: true }}
//       whileHover={{ scale: 1.03 }}
//       className="group relative overflow-hidden rounded-xl bg-[#141414]"
//     >
//       {/* Image */}
//       <div className="relative h-56 w-full overflow-hidden">
//         <Image
//           src={image}
//           alt={title}
//           fill
//           className="object-cover transition-transform duration-700 group-hover:scale-110"
//         />
//       </div>

//       {/* Content */}
//       <div className="p-5">
//         <h3 className="text-sm font-semibold text-white">
//           {title}
//         </h3>
//         <p className="mt-1 text-xs text-white/60">
//           {category}
//         </p>
//       </div>

//       {/* Hover overlay */}
//       <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-gradient-to-t from-black/40 to-transparent" />
//     </motion.div>
//   );
// }
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({
  title,
  category,
  image,
  slug,
}: any) {
  return (
    <Link href={`/our-work/${slug}`}>
      <div className="group cursor-pointer">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="rounded-xl"
        />
        <h3 className="mt-4 font-semibold group-hover:text-purple-400">
          {title}
        </h3>
        <p className="text-sm text-white/60">{category}</p>
      </div>
    </Link>
  );
}

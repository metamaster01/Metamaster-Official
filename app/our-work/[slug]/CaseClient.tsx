// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function CaseClient({ data }: { data: any }) {
//   if (!data) return null;

//   function TwoColumnSection({
//   title,
//   description,
//   items,
//   numbered = false,
// }: {
//   title: string;
//   description?: string;
//   items?: string[];
//   numbered?: boolean;
// }) {
//   if (!items?.length) return null;

//   return (
//     <section className="relative max-w-7xl mx-auto px-6 py-24">
//       <div className="grid gap-16 md:grid-cols-2 items-start">

//         {/* LEFT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
//             {title}
//           </h2>

//           {description && (
//             <p className="max-w-sm text-sm leading-relaxed text-white/60">
//               {description}
//             </p>
//           )}
//         </motion.div>

//         {/* RIGHT LIST */}
//         <motion.ul
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           variants={{
//             hidden: {},
//             show: {
//               transition: {
//                 staggerChildren: 0.12, 
//               },
//             },
//           }}
//           className="space-y-6"
//         >
//           {items.map((item, i) => (
//             <motion.li
//               key={i}
//               variants={{
//                 hidden: { opacity: 0, y: 20 },
//                 show: { opacity: 1, y: 0 },
//               }}
//               transition={{ duration: 0.5, ease: "easeOut" }}
//               className="
//                 group relative pl-6 pb-6
//                 text-sm sm:text-base text-white/90
//               "
//             >
              
//               <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-white" />

//               Number (Approach section)
//               {numbered && (
//                 <span className="mr-2 font-semibold text-purple-400">
//                   {i + 1}.
//                 </span>
//               )}

              
//               <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
//                 {item}
//               </span>

//               {/* Animated Divider */}
//               <motion.div
//                 initial={{ scaleX: 0 }}
//                 whileInView={{ scaleX: 1 }}
//                 transition={{ duration: 0.6, ease: "easeOut" }}
//                 viewport={{ once: true }}
//                 className="
//                   absolute left-0 bottom-0
//                   h-px w-full origin-left
//                   bg-gradient-to-r from-transparent via-white/30 to-transparent
//                 "
//               />

//               {/* Hover Glow */}
//               <span
//                 className="
//                   pointer-events-none absolute inset-0
//                   opacity-0 group-hover:opacity-100
//                   transition duration-500
//                   bg-gradient-to-r from-purple-500/10 via-transparent to-purple-500/10
//                   blur-xl
//                 "
//               />
//             </motion.li>
//           ))}
//         </motion.ul>

//       </div>
//     </section>
//   );
// }

//   return (
//     <main className="relative overflow-hidden bg-gradient-to-r from-[#12001f] via-[#0e001a] to-[#12001f] text-white">

//       {/* BACKGROUND GLOWS */}
//       <div className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-purple-600/20 blur-[140px]" />
//       <div className="pointer-events-none absolute bottom-0 -left-40 h-[520px] w-[520px] rounded-full bg-indigo-600/10 blur-[140px]" />

//       {/* HERO */}
//       <section className="relative max-w-7xl mx-auto px-6 text-center pt-48 pb-28">
//         <motion.span
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="inline-block mb-6 rounded-full bg-purple-700/20 px-4 py-1 text-xs tracking-wide text-purple-300"
//         >
//           Work
//         </motion.span>

//         <motion.h1
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, ease: "easeOut" }}
//           className="text-4xl sm:text-7xl font-semibold tracking-tight"
//         >
//           {data.title}
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/70"
//         >
//           {data.subtitle}
//         </motion.p>
//       </section>

//       {/* ABOUT BRAND */}
// <section className="relative max-w-7xl mx-auto px-6 pb-32 grid gap-20 lg:grid-cols-2 items-start">

//   {/* LEFT IMAGE */}
//   <motion.div
//     initial={{ opacity: 0, y: 40 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.7 }}
//   >
//     <h2 className="mb-8 text-xl font-semibold tracking-wide">
//       About the Brand
//     </h2>

//     <div className="overflow-hidden rounded-2xl">
//       <Image
//         src={data.hero_image}
//         alt={data.title}
//         width={520}
//         height={680}
//         className="h-[420px] w-full object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
//       />
//     </div>
//   </motion.div>

//   {/* RIGHT CONTENT */}
//   <motion.div
//     initial={{ opacity: 0, y: 40 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.7, delay: 0.1 }}
//     className="flex flex-col"
//   >
//     {/* Brand Logo Card */}
//     <div className="mb-10 rounded-2xl  p-10 flex items-center justify-center">
//       <Image
//         src={data.brand_logo}
//         alt="Brand logo"
//         width={300}
//         height={120}
//         className="object-contain"
//       />
//     </div>

//     {/* About Text */}
//     <p className="mb-10 max-w-xl text-sm leading-relaxed text-white/80">
//       {data.about}
//     </p>

//     {/* Tags */}
//     <div className="flex flex-wrap gap-3">
//       {data.tags?.map((tag: string, i: number) => (
//         <span
//           key={i}
//           className="
//             rounded-full
//             bg-purple-700/20
//             px-4 py-1
//             text-xs
//             text-purple-300
//             backdrop-blur
//             transition
//             hover:bg-purple-700/30
//           "
//         >
//           {tag}
//         </span>
//       ))}
//     </div>
//   </motion.div>

// </section>


     
//       <TwoColumnSection
//         title="The Challenge"
//         description={data.challenge_intro}
//         items={data.challenge}
//       />

//      {/* OUR APPROACH */}
// {data.approach?.length > 0 && (
//   <section className="relative max-w-7xl mx-auto px-6 py-28">
//     <div className="grid gap-16 md:grid-cols-2 items-start">

//       {/* LEFT */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//       >
//         <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
//           Our Approach
//         </h2>

//         <p className="max-w-sm text-sm leading-relaxed text-white/60">
//           {data.approach_intro}
//         </p>
//       </motion.div>

//       {/* RIGHT */}
//       <div className="space-y-14">
//         {data.approach.map(
//           (
//             section: {
//               title: string;
//               points: string[];
//             },
//             index: number
//           ) => (
//             <motion.div
//               key={section.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="pb-10 border-b border-white/10"
//             >
//               {/* Heading */}
//               <h3 className="mb-4 text-lg font-semibold flex items-center gap-3">
//                 <span className="text-purple-400">
//                   {index + 1}.
//                 </span>
//                 {section.title}
//               </h3>

//               {/* Points */}
//               <ul className="space-y-2">
//                 {section.points.map((point, i) => (
//                   <li
//                     key={i}
//                     className="text-sm text-white/70 leading-relaxed"
//                   >
//                     • {point}
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           )
//         )}
//       </div>

//     </div>
//   </section>
// )}


//       {/* RESULTS */}
//       <TwoColumnSection
//         title="The Results"
//         description={data.results_intro}
//         items={data.results}
//       />

//      {/* TESTIMONIAL */}
// {data.testimonial_text && (
//   <section className="relative max-w-7xl mx-auto px-6 py-32">
    
//     {/* Heading */}
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//       className="mb-12 text-center"
//     >
//       <h2 className="text-2xl sm:text-3xl font-semibold tracking-wide">
//         What Our Client Says
//       </h2>
//       <p className="mt-2 text-sm text-white/60">
//         We measure success by the impact we create for our clients.
//       </p>
//     </motion.div>

//     {/* Card */}
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       whileHover={{ y: -6 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className="
//         group relative overflow-hidden rounded-3xl 
//         bg-gradient-to-br from-[#2f52b2] via-[#4a2aa6] to-[#5b1fa6]
//         p-10 sm:p-14
//       "
//     >
//       {/* Glow animation */}
//       <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
//         <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_30%_20%,rgba(255,255,255,0.2),transparent_60%)]" />
//       </div>

//       <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_1.3fr] items-center">
        
//         {/* BRAND */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="flex items-center justify-center"
//         >
//           <Image
//             src={data.brand_logo}
//             alt="Brand logo"
//             width={360}
//             height={140}
//             className="object-contain opacity-90 transition-transform duration-700 group-hover:scale-105"
//           />
//         </motion.div>

        // {/* TESTIMONIAL TEXT */}
        // <motion.div
        //   initial={{ opacity: 0, x: 30 }}
        //   whileInView={{ opacity: 1, x: 0 }}
        //   viewport={{ once: true }}
        //   transition={{ duration: 0.7, delay: 0.1 }}
        //   className="space-y-6"
        // >
        //   <p className="text-sm sm:text-base leading-relaxed text-white/95">
        //     “{data.testimonial_text}”
        //   </p>

        //   <div>
        //     <p className="font-semibold tracking-wide">
        //       {data.testimonial_author}
        //     </p>
        //     <p className="text-xs text-white/70">
        //       {data.testimonial_role}
        //     </p>
        //   </div>
        // </motion.div>

//       </div>
//     </motion.div>
//   </section>
// )}

//     </main>
//   );
// }

// /* ---------- Reusable Two Column Section ---------- */
// function TwoColumnSection({
//   title,
//   description,
//   items,
//   numbered = false,
// }: {
//   title: string;
//   description?: string;
//   items?: string[];
//   numbered?: boolean;
// }) {
//   if (!items?.length) return null;

//   return (
//     <section className="relative max-w-7xl mx-auto px-6 py-24 grid gap-14 md:grid-cols-2">
      
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//       >
//         <h2 className="mb-4 text-2xl font-semibold tracking-wide">
//           {title}
//         </h2>
//         <p className="max-w-md text-sm leading-relaxed text-white/70">
//           {description}
//         </p>
//       </motion.div>

//       <ul className="space-y-6">
//         {items.map((item, i) => (
//           <motion.li
//             key={i}
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.4, delay: i * 0.05 }}
//             className="border-b border-white/10 pb-4 text-sm text-white/80"
//           >
//             {numbered && (
//               <span className="mr-3 font-semibold text-purple-400">
//                 {i + 1}.
//               </span>
//             )}
//             {item}
//           </motion.li>
//         ))}
//       </ul>

//     </section>
//   );
// }




"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import KeyOutcomes from "@/components/KeyOutcomesSection";
import ClientTestimonialSection from "@/components/projects/ClientTestimonialSection";
import ProjectObjectivesSection from "@/components/projects/ProjectObjectivesSection";

export default function CaseClient({ data }: { data: any }) {
  if (!data) return null;

  return (
    <main className="relative overflow-hidden bg-gradient-to-r from-[#12001f] via-[#0e001a] to-[#12001f] text-white">

      {/* ================= BACKGROUND DESIGN ================= */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* SVG FLOW */}
        <div
          className="
            absolute inset-0
            bg-[url('/casebg.svg')]
            bg-cover
            bg-no-repeat
            opacity-[2]
          "
        />

        {/* GRID OVERLAY */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* GLOBAL GLOWS */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-purple-600/20 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-0 -left-40 h-[520px] w-[520px] rounded-full bg-indigo-600/10 blur-[160px]" />

      {/* ================= HERO ================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-48 pb-32 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6 rounded-full bg-purple-700/20 px-4 py-1 text-xs tracking-widest text-purple-300 uppercase"
        >
          Case Study
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-[clamp(2.6rem,5vw,4.8rem)] font-semibold tracking-tight"
        >
          {data.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/65"
        >
          {data.subtitle}
        </motion.p>

        <div className="mx-auto mt-10 h-[2px] w-16 bg-purple-500/70" />
      </section>

      {/* ================= ABOUT BRAND ================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-36 grid gap-24 lg:grid-cols-2 items-start">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="mb-8 text-sm font-semibold tracking-widest text-white/70 uppercase">
            About the Brand
          </h2>

          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src={data.hero_image}
              alt={data.title}
              width={520}
              height={680}
              className="h-[440px] w-full object-cover rounded-3xl transition-transform duration-700 hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="mb-12 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-10 flex justify-center">
            <Image
              src={data.brand_logo}
              alt="Brand logo"
              width={280}
              height={120}
              className="object-contain opacity-90"
            />
          </div>

          <p className="max-w-xl text-sm leading-relaxed text-white/80">
            {data.about}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {data.tags?.map((tag: string, i: number) => (
              <span
                key={i}
                className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1 text-xs text-purple-300 transition hover:bg-purple-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        
      </section>


      <ProjectObjectivesSection
  objectives={data.project_objectives}
/>


      {/* ================= KEY OUTCOMES ================= */}
{data.key_outcomes && (
  <section className="relative max-w-7xl mx-auto px-6 pb-36">
    
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-14 text-center"
    >
      <h2 className="text-3xl sm:text-4xl font-semibold">
        Key Outcomes
      </h2>
      <p className="mt-3 text-sm text-white/60">
        Measurable results achieved through strategy, creativity, and performance.
      </p>
      <div className="mx-auto mt-4 h-[2px] w-16 bg-purple-500" />
    </motion.div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      
      {[
        { label: "Traffic Growth", value: data.key_outcomes.traffic },
        { label: "Leads Generated", value: data.key_outcomes.leads },
        { label: "Conversion Rate", value: data.key_outcomes.conversion },
        { label: "Ad Spend ROI", value: data.key_outcomes.roi },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          whileHover={{ y: -8 }}
          className="
            group relative
            rounded-2xl
            bg-white/[0.04]
            border border-white/10
            p-8
            text-center
            backdrop-blur-md
            shadow-[0_20px_60px_-20px_rgba(168,85,247,0.25)]
          "
        >
          {/* Glow */}
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
            <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(400px_circle_at_50%_0%,rgba(168,85,247,0.25),transparent_60%)]" />
          </div>

          <p className="text-3xl sm:text-4xl font-bold text-purple-400">
            {item.value}
          </p>
          <p className="mt-2 text-sm text-white/70">
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
)}




      {/* ================= CHALLENGE ================= */}
      <TwoColumnSection
        title="The Challenge"
        description={data.challenge_intro}
        items={data.challenge}
      />



      <KeyOutcomes data={data} />

      {/* ================= RESULTS ================= */}
      <TwoColumnSection
        title="The Results"
        description={data.results_intro}
        items={data.results}
      />

{data.client_testimonial && (
  <ClientTestimonialSection
    image={data.hero_image}
    testimonial={data.client_testimonial}
  />
)}

      
    </main>
  );
}

/* ================= REUSABLE SECTION ================= */
function TwoColumnSection({
  title,
  description,
  items,
}: {
  title: string;
  description?: string;
  items?: string[];
}) {
  if (!items?.length) return null;

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid gap-16 md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-4 text-3xl font-semibold">{title}</h2>
        <p className="max-w-md text-sm leading-relaxed text-white/65">
          {description}
        </p>
      </motion.div>

      <ul className="space-y-6">
        {items.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="border-b border-white/10 pb-4 text-sm text-white/80"
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

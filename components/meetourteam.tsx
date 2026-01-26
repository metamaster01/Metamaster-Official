// "use client";

// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import Tilt from "react-parallax-tilt";
// import { useState } from "react";

// const teamMembers = [
//   {
//     name: "Avinash",
//     role: "SDE",
//     image: "/T1.png",
//   },
//   {
//     name: "Sujal Pal",
//     role: "SDE-Web",
//     image: "/T2.png",
//   },
//   {
//     name: "Akash Kumar",
//     role: "SDE-Web",
//     image: "/mem3.png",
//   },
//   {
//     name: "Aman Kumar",
//     role: "Founder & CEO",
//     image: "/mem1.png",
//     founder: true,
//     bio: "Visionary leader driving product innovation and scalable systems.",
//   },
//   {
//     name: "Aman Kumar",
//     role: "SEO Specialist",
//     image: "/mem4.png",
//   },
//   {
//     name: "Aman Kumar",
//     role: "Web Developer",
//     image: "/mem5.png",
//   },
//   {
//     name: "Aman Kumar",
//     role: "Branding & Graphic Designer",
//     image: "/mem2.png",
//   },
// ];

// export default function MeetOurTeam() {
//   const [activeMember, setActiveMember] = useState<any>(null);

//   return (
//     <section className="relative py-24 bg-gradient-to-r from-[#12001f] via-[#0e001a] to-[#12001f] text-white overflow-hidden">
      
//       {/* Heading */}
//       <div className="text-center mb-20 px-6">
//         <h2 className="text-4xl md:text-5xl font-bold">
//           Meet Our Team
//         </h2>
//         <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
//           Engineers, designers, and growth experts building powerful digital experiences.
//         </p>
//       </div>

//       {/* Auto-scroll Marquee */}
//       <motion.div
//         className="flex gap-10 px-10"
//         animate={{ x: ["0%", "-100%"] }}
//         transition={{
//           repeat: Infinity,
//           duration: 30,
//           ease: "linear",
//         }}
//       >
//         {[...teamMembers, ...teamMembers].map((member, index) => (
//           <Tilt
//             key={index}
//             tiltMaxAngleX={15}
//             tiltMaxAngleY={15}
//             scale={1.05}
//             transitionSpeed={1500}
//             className="min-w-[280px]"
//           >
//             <motion.div
//               whileHover={{ y: -10 }}
//               onClick={() => setActiveMember(member)}
//               className={`relative cursor-pointer rounded-3xl p-6 backdrop-blur-xl border
//                 ${member.founder
//                   ? "bg-[#c77dff]/20 border-[#c77dff] shadow-[0_0_40px_#c77dff]"
//                   : "bg-white/5 border-white/10"
//                 }`}
//             >
//               {/* Founder Badge */}
//               {member.founder && (
//                 <span className="absolute -top-3 right-6 px-4 py-1 text-xs rounded-full bg-[#c77dff] text-black font-semibold">
//                   Founder
//                 </span>
//               )}

//               {/* Image */}
//               <div className="relative w-full h-64 rounded-2xl overflow-hidden">
//                 <Image
//                   src={member.image}
//                   alt={member.name}
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               {/* Info */}
//               <div className="mt-5 text-center">
//                 <h3 className="text-xl font-semibold">{member.name}</h3>
//                 <p className="text-sm text-gray-400 mt-1">{member.role}</p>
//               </div>
//             </motion.div>
//           </Tilt>
//         ))}
//       </motion.div>

//       {/* Modal Popup */}
//       <AnimatePresence>
//         {activeMember && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
//             onClick={() => setActiveMember(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               onClick={(e) => e.stopPropagation()}
//               className="bg-[#12001f] rounded-3xl p-8 max-w-md w-full text-center border border-white/10"
//             >
//               <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden">
//                 <Image
//                   src={activeMember.image}
//                   alt={activeMember.name}
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               <h3 className="mt-6 text-2xl font-bold">
//                 {activeMember.name}
//               </h3>
//               <p className="text-[#c77dff] mt-2">
//                 {activeMember.role}
//               </p>

//               <p className="mt-4 text-gray-400 text-sm">
//                 {activeMember.bio || "Dedicated professional contributing to Meta Master’s success."}
//               </p>

//               <button
//                 onClick={() => setActiveMember(null)}
//                 className="mt-6 px-6 py-2 rounded-full bg-[#c77dff] text-black font-medium"
//               >
//                 Close
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }


// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// const teamMembers = [
//   { name: "Avinash", role: "SDE", image: "/T1.png" },
//   { name: "Sujal Pal", role: "SDE-Web", image: "/T2.png" },
//   { name: "Akash Kumar", role: "SDE-Web", image: "/mem3.png" },
//   { name: "Aman Kumar", role: "SEO Specialist", image: "/mem4.png" },
//   { name: "Aman Kumar", role: "Web Developer", image: "/mem5.png" },
//   { name: "Rohit kumar", role: "Team Manager", image: "/T6.png" },
//   { name: "Aman Kumar", role: "Branding & Graphic Designer", image: "/mem2.png" },
//   { name: "Aman Kumar", role: "Content Creator", image: "/mem3.png" },
//   { name: "Aman Kumar", role: "Video Editor & Motion Graphics Designer", image: "/mem4.png" },
// ];

// export default function MeetOurTeam() {
//   return (
//     <section className="relative w-full py-24 bg-gradient-to-r from-[#12001f] via-[#0e001a] to-[#12001f] text-white overflow-hidden">
      
//       {/* Glow background */}
//       <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(199,125,255,0.15),transparent_60%)]" />

//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* Heading */}
//         <div className="text-center mb-20">
//           <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
//             Meet Our Team
//           </h2>
//           <p className="mt-5 text-gray-400 max-w-3xl mx-auto text-lg">
//             A powerhouse of engineers, designers, and growth experts working
//             together to build world-class digital products.
//           </p>
//         </div>

//         {/* Team Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
//           {teamMembers.map((member, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ y: -8 }}
//               transition={{ type: "spring", stiffness: 200 }}
//               className="group relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 shadow-xl"
//             >
//               {/* Image */}
//               <div className="relative w-full h-72 rounded-2xl overflow-hidden">
//                 <Image
//                   src={member.image}
//                   alt={member.name}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//               </div>

//               {/* Info */}
//               <div className="mt-6 text-center">
//                 <h3 className="text-xl font-semibold">
//                   {member.name}
//                 </h3>

//                 <span className="inline-block mt-3 px-4 py-1 text-sm rounded-full bg-[#c77dff]/20 text-[#c77dff]">
//                   {member.role}
//                 </span>
//               </div>

//               {/* Hover Glow */}
//               <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(199,125,255,0.25),transparent_60%)]" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import Image from "next/image";
// import { motion, useMotionValue, useTransform } from "framer-motion";

// const teamMembers = [
//   { name: "Avinash", role: "SDE", experience: "3+ years • Backend & System Design", image: "/T1.png" },
//   { name: "Sujal Pal", role: "SDE-Web", experience: "2+ years • React, Next.js", image: "/T2.png" },
//   { name: "Akash Kumar", role: "SDE-Web", experience: "2+ years • Frontend Architecture", image: "/mem3.png" },
//   { name: "Rohit Kumar", role: "Team Manager", experience: "5+ years • Team Leadership", image: "/T6.png" },
//   { name: "Aman Kumar", role: "UI/UX Designer", experience: "3+ years • Product Design", image: "/mem2.png" },
//   { name: "Aman Kumar", role: "SEO Specialist", experience: "4+ years • Growth & Analytics", image: "/mem4.png" },
//   { name: "Aman Kumar", role: "Web Developer", experience: "2+ years • Full-Stack", image: "/mem5.png" },
//   { name: "Aman Kumar", role: "Content Creator", experience: "3+ years • Storytelling", image: "/mem3.png" },
//   { name: "Aman Kumar", role: "Motion Designer", experience: "4+ years • Motion & Reels", image: "/mem4.png" },
// ];

// export default function MeetOurTeam() {
//   return (
//     <section className="relative w-full py-32 text-white overflow-hidden
//       bg-gradient-to-b from-[#07040e] via-[#0c0718] to-[#06030d]">

//       {/* Soft ambient depth */}
//       <div className="absolute inset-0 -z-10
//         bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.06),transparent_65%)]" />

//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-24">
//           <h2 className="text-5xl font-semibold tracking-tight">
//             Meet Our Team
//           </h2>
//           <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
//             A carefully crafted team of engineers, designers, and leaders.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
//           {teamMembers.map((member, index) => (
//             <PremiumCard key={index} member={member} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// function PremiumCard({ member }) {
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const rotateX = useTransform(y, [-120, 120], [8, -8]);
//   const rotateY = useTransform(x, [-120, 120], [-8, 8]);

//   const onMove = (e) => {
//     const r = e.currentTarget.getBoundingClientRect();
//     x.set(e.clientX - r.left - r.width / 2);
//     y.set(e.clientY - r.top - r.height / 2);
//   };

//   return (
//     <motion.div
//       className="relative group rounded-[28px]"
//       onMouseMove={onMove}
//       onMouseLeave={() => { x.set(0); y.set(0); }}
//       whileHover={{ y: -10 }}
//       whileTap={{ y: -10 }}
//       transition={{ type: "spring", stiffness: 140, damping: 18 }}
//     >
//       {/* Soft outer glow */}
//       <div className="absolute -inset-1 rounded-[30px]
//         bg-gradient-to-br from-violet-700/20 via-transparent to-violet-900/30
//         opacity-0 group-hover:opacity-100 transition duration-500" />

//       {/* Card */}
//       <motion.div
//         style={{ rotateX, rotateY }}
//         className="relative rounded-[28px] overflow-hidden
//           bg-gradient-to-b from-[#1b1033] via-[#120a24] to-[#0a0516]
//           border border-violet-500/10
//           shadow-[0_30px_80px_rgba(0,0,0,0.75)]"
//       >
//         {/* Elegant light reflection */}
//         <div className="pointer-events-none absolute inset-0
//           bg-gradient-to-br from-white/10 via-transparent to-transparent
//           opacity-20" />

//         {/* Image */}
//         <motion.div
//           className="relative h-72"
//           whileHover={{ scale: 1.1, x: -24 }}
//           transition={{ duration: 0.45, ease: "easeOut" }}
//         >
//           <Image src={member.image} alt={member.name} fill className="object-cover" />
//         </motion.div>

//         {/* Experience panel */}
//         <motion.div
//           initial={{ opacity: 0, x: 70, filter: "blur(10px)" }}
//           whileHover={{ opacity: 1, x: 0, filter: "blur(0px)" }}
//           transition={{ duration: 0.45, ease: "easeOut" }}
//           className="absolute top-0 right-0 h-full w-[58%]
//             bg-gradient-to-b from-violet-800/30 via-violet-900/55 to-violet-950/80
//             backdrop-blur-xl border-l border-violet-500/20 p-6"
//         >
//           <div className="h-full flex flex-col justify-center">
//             <h3 className="text-xl font-semibold">{member.name}</h3>
//             <p className="mt-1 text-violet-300 text-sm">{member.role}</p>

//             <p className="mt-6 text-gray-300 text-sm leading-relaxed">
//               {member.experience}
//             </p>
//           </div>
//         </motion.div>

//         {/* Footer */}
//         <div className="p-7 text-center">
//           <h3 className="text-lg font-medium">{member.name}</h3>
//           <span className="inline-block mt-3 px-4 py-1 text-sm rounded-full
//             bg-violet-600/15 text-violet-200">
//             {member.role}
//           </span>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }


"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";

/* ===================== TEAM DATA ===================== */

const teamMembers = [
  {
    name: "Avinash",
    role: "SDE",
    experience: "3+ years • Backend & System Design",
    image: "/T1.png",
    accent: "from-violet-500 to-fuchsia-600",
    tilt: 9,
  },
  {
    name: "Sujal Pal",
    role: "SDE-Web",
    experience: "2+ years • React, Next.js",
    image: "/T2.png",
    accent: "from-indigo-500 to-violet-600",
    tilt: 7,
  },
  {
    name: "Akash Kumar",
    role: "SDE-Web",
    experience: "2+ years • Frontend & Backend ",
    image: "/akash.png",
    accent: "from-purple-500 to-pink-600",
    tilt: 10,
  },
  {
    name: "Rohit Kumar",
    role: "Team Manager",
    experience: "5+ years • Team Leadership",
    image: "/T6.png",
    accent: "from-violet-600 to-purple-800",
    tilt: 6,
  },
  {
    name: "Aman Kumar",
    role: "UI/UX Designer",
    experience: "3+ years • Product Design",
    image: "/mem2.png",
    accent: "from-fuchsia-500 to-purple-700",
    tilt: 8,
  },
  {
    name: "Aman Kumar",
    role: "SEO Specialist",
    experience: "4+ years • Growth & Analytics",
    image: "/mem4.png",
    accent: "from-indigo-600 to-fuchsia-600",
    tilt: 7,
  },
  {
    name: "Aman Kumar",
    role: "Web Developer",
    experience: "2+ years • Full-Stack",
    image: "/mem5.png",
    accent: "from-purple-600 to-indigo-700",
    tilt: 9,
  },
  {
    name: "Aman Kumar",
    role: "Content Creator",
    experience: "3+ years • Storytelling",
    image: "/mem3.png",
    accent: "from-pink-500 to-violet-700",
    tilt: 8,
  },
  {
    name: "Aman Kumar",
    role: "Motion Designer",
    experience: "4+ years • Motion & Reels",
    image: "/mem4.png",
    accent: "from-violet-500 to-indigo-600",
    tilt: 10,
  },
];

/* ===================== SECTION ===================== */

export default function MeetOurTeam() {
  return (
    <section className="relative w-full py-32 text-white overflow-hidden
      bg-gradient-to-b from-[#07040e] via-[#0c0718] to-[#06030d]">

      {/* Ambient background */}
      <div className="absolute inset-0 -z-10
        bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.08),transparent_65%)]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-semibold tracking-tight">
            Meet Our Team
          </h2>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Engineers, designers & leaders crafting premium digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
          {teamMembers.map((member, index) => (
            <PremiumCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== CARD ===================== */

function PremiumCard({ member } : { member: any }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(y, [-120, 120], [member.tilt, -member.tilt]);
  const rotateY = useTransform(x, [-120, 120], [-member.tilt, member.tilt]);

  const spotlight = useTransform(
    [mouseX, mouseY],
    ([mx, my]) =>
      `radial-gradient(600px at ${mx}px ${my}px, rgba(139,92,246,0.22), transparent 65%)`
  );

  const onMove = (e : any) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - r.left;
    const py = e.clientY - r.top;

    x.set(px - r.width / 2);
    y.set(py - r.height / 2);

    mouseX.set(px);
    mouseY.set(py);
  };

  return (
    <motion.div
      className="relative group rounded-[28px]"
      onMouseMove={onMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileHover={{ y: -14, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 120, damping: 16 }}
    >
      {/* Outer glow */}
      <div className="absolute -inset-1 rounded-[30px]
        bg-gradient-to-br from-violet-700/20 via-transparent to-violet-900/30
        opacity-0 group-hover:opacity-100 transition duration-500" />

      {/* Card */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative rounded-[28px] overflow-hidden
          bg-gradient-to-b from-[#1b1033] via-[#120a24] to-[#0a0516]
          border border-violet-500/10
          shadow-[0_35px_90px_rgba(0,0,0,0.8)]"
      >
        {/* Cursor spotlight */}
        <motion.div
          style={{ background: spotlight }}
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
        />

        {/* Accent rim */}
        <div
          className={`absolute inset-0 rounded-[28px] opacity-25
          bg-gradient-to-br ${member.accent}`}
        />

        {/* Initial hologram */}
        <div className="absolute top-6 left-6 text-6xl font-bold
          text-white/5 pointer-events-none">
          {member.name[0]}
        </div>

        {/* Image */}
        <motion.div
          className="relative h-72"
          whileHover={{ scale: 1.12, x: -28 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Slide experience panel */}
        <motion.div
          initial={{ opacity: 0, x: 80, filter: "blur(12px)" }}
          whileHover={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="absolute top-0 right-0 h-full w-[58%]
            bg-gradient-to-b from-violet-800/30 via-violet-900/60 to-violet-950/85
            backdrop-blur-xl border-l border-violet-500/20 p-6"
        >
          <div className="h-full flex flex-col justify-center">
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="mt-1 text-violet-300 text-sm">{member.role}</p>
            <p className="mt-6 text-gray-300 text-sm leading-relaxed">
              {member.experience}
            </p>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="p-7 text-center relative z-10">
          <h3 className="text-lg font-medium">{member.name}</h3>
          <span className="inline-block mt-3 px-4 py-1 text-sm rounded-full
            bg-violet-600/15 text-violet-200">
            {member.role}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

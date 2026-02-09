// "use client";

// import { motion } from "framer-motion";
// import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";
// import ProjectCard from "@/components/ProjectCard";
// import CallToAction from "@/components/calltoaction";
// import Newsletter from "@/components/newsletter";

// const projects = [
//   { title: "Zaina Collection – Fashion eCommerce", category: " A digital store that feels like luxury.", image: "/projects/1.png" ,slug: "zaina-collection", },
//   { title: "Xplore events – Event management", category: "a digital experience that celebrates every moment.", image: "/projects/2.png" ,slug: "xplore-events", },
//   { title: "Chakra Crystals-Wellness", category: " Real creators, real growth.", image: "/projects/3.png" , slug: "chakra-crystals", },

// ];

// export default function OurWorksPage() {
//   const rows = [];
//   for (let i = 0; i < projects.length; i += 3) {
//     rows.push(projects.slice(i, i + 3));
//   }

//   return (
//     <>
//       <Navbar />

//       <main className="relative min-h-screen bg-gradient-to-r from-[#12001f] via-[#0e001a] to-[#12001f] text-white overflow-hidden">

//         {/* Soft background glow */}
//         <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-3xl" />

//         {/* Header */}
//         <section className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20">
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl sm:text-5xl font-bold"
//           >
//             Our Projects
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//             className="mt-4 max-w-2xl text-sm text-white/70"
//           >
//             From branding and digital marketing to full-scale event
//             execution, explore how Meta Master transforms ideas into
//             impactful experiences.
//           </motion.p>
//         </section>

//         {/* Projects Rows */}
//         <section className="relative z-10 mx-auto max-w-7xl px-6 pb-28 space-y-20">
//           {rows.map((row, rowIndex) => (
//             <div key={rowIndex} className="space-y-14">

//               {/* Row Grid */}
//               <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
//                 {row.map((project, index) => (
//                   <ProjectCard key={index} {...project} />
//                 ))}
//               </div>

//               {/* Divider after each row */}
//               {rowIndex !== rows.length - 1 && (
//                 <motion.div
//                   initial={{ scaleX: 0 }}
//                   whileInView={{ scaleX: 1 }}
//                   transition={{ duration: 0.8, ease: "easeOut" }}
//                   viewport={{ once: true }}
//                   className="h-px w-full origin-left bg-gradient-to-r from-transparent via-white/20 to-transparent"
//                 />
//               )}
//             </div>
//           ))}
//         </section>
//       </main>
//           <CallToAction/>
//           <Newsletter/>
//       <Footer />
//     </>
//   );
// }




"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProjectCard from "@/components/ProjectCard";
import CallToAction from "@/components/calltoaction";
import Newsletter from "@/components/newsletter";
import Testimonial from "@/components/testimonal";
import Advertise from "@/components/advertisement";

const projects = [
  {
    title: "Zaina Collection – Fashion eCommerce",
    category: " A digital store that feels like luxury.",
    image: "/projects/1.png",
    slug: "zaina-collection",
  },
  {
    title: "Xplore events – Event management",
    category: "a digital experience that celebrates every moment.",
    image: "/projects/2.png",
    slug: "xplore-events",
  },
  {
    title: "Chakra Crystals-Wellness",
    category: " Real creators, real growth.",
    image: "/projects/3.png",
    slug: "chakra-crystals",
  },
];

export const metadata = {
  title: "Our Work | Meta Master - Digital Marketing Agency for Startups in India",
  description: "Explore our portfolio of successful projects at Meta Master, a leading digital marketing agency in India. See how we help startups grow online with innovative strategies.",
  keywords: ["Meta Master Portfolio", "Our Work", "Digital Marketing Projects", "Startup Success Stories", "Branding Case Studies", "Online Growth Examples", "India Digital Marketing"],
};

export default function OurWorksPage() {
  const rows = [];
  for (let i = 0; i < projects.length; i += 3) {
    rows.push(projects.slice(i, i + 3));
  }

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen bg-gradient-to-r from-[#12001f] via-[#0e001a] to-[#12001f] text-white overflow-hidden">

        {/* Ambient background motion */}
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-purple-600/20 blur-3xl"
        />

        {/* Header */}
        <section className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-4xl sm:text-5xl font-bold"
          >
            Our Projects
          </motion.h1>

          {/* Animated underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4 h-[2px] w-16 origin-left bg-purple-500"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 max-w-2xl text-sm text-white/70"
          >
            From branding and digital marketing to full-scale event
            execution, explore how Meta Master transforms ideas into
            impactful experiences.
          </motion.p>
        </section>

        {/* Projects */}
        <section className="relative z-10 mx-auto max-w-7xl px-6 pb-28 space-y-24">
          {rows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {row.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>

              {rowIndex !== rows.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="h-px w-full origin-left bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
              )}
            </motion.div>
          ))}
        </section>
      </main>
       
       <Advertise/>
      <CallToAction />
      <Testimonial/>
      <Newsletter />
      
      <Footer />
    </>
  );
}

// "use client";

// import { motion } from "framer-motion";

// export default function Loader() {
//   return (
//     <motion.div
//       initial={{ opacity: 1 }}
//       animate={{ opacity: 0 }}
//       transition={{ delay: 2.8, duration: 0.6 }}
//       className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0e001a]"
//     >
//       {/* Gradient Company Name */}
//       <motion.h1
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="
//           text-4xl sm:text-6xl font-bold tracking-wider
//           bg-gradient-to-r
//           from-[#9B4DFF]
//           via-[#7A5CFF]
//           to-[#3BC9FF]
//           bg-clip-text text-transparent
//           drop-shadow-[0_0_20px_rgba(123,97,255,0.35)]
//         "
//       >
//         META MASTER
//       </motion.h1>

//       {/* Premium Loading Dots */}
//       <div className="mt-6 flex gap-2">
//         {[0, 1, 2].map((i) => (
//           <motion.span
//             key={i}
//             className="h-2.5 w-2.5 rounded-full bg-white/80"
//             initial={{ opacity: 0.3, y: 0 }}
//             animate={{ opacity: [0.3, 1, 0.3], y: [-4, 4, -4] }}
//             transition={{
//               duration: 1,
//               repeat: Infinity,
//               delay: i * 0.2,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>
//     </motion.div>
//   );
// }
// // "use client";



import { motion } from "framer-motion";
import Image from "next/image";

export default function Loader() {


  
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3.2, duration: 0.6 }}


      
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-r from-[#9A62C7] via-[#B771F1] to-[#12001f]"
    >
      {/* Logo */}
   
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  className="flex flex-col items-center gap-1 mb-2"
>
  {/* Logo */}
  <Image
    src="/logo.png"
    alt="Meta Master Logo"
    width={550}          
    height={450}
    priority
     className="w-[260px] sm:w-[320px] md:w-[420px] lg:w-[520px] h-auto"
  />
  

  {/* Brand Name
  <h1
    className="
      text-4xl sm:text-5xl font-bold tracking-widest
      bg-gradient-to-r from-[#9B4DFF] via-[#7A5CFF] to-[#3BC9FF]
      bg-clip-text text-transparent
      leading-none        
    "
  >
    META MASTER
  </h1> */}

  {/* Sub Heading */}

  {/* <p className="text-sm sm:text-base tracking-wide text-white/70">
    Your Vision, Our Expertise
  </p> */}
</motion.div>


      {/* Loading Line */}
     <div className="relative h-[2px] w-64 overflow-hidden rounded-full bg-white/20">
        <motion.div
          className="absolute left-0 top-0 h-full bg-white"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 2.6,   // ⏳ fill time
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
}



// "use client"

// import { motion } from "framer-motion"
// import Image from "next/image"
// import { ServiceItem } from "@/data/service"

// interface Props {
//   service: ServiceItem
// }

// export default function ServiceHero({ service }: Props) {
//   return (
//     <section className="relative py-20 lg:py-28 bg-black text-white overflow-hidden">
//       <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

//         {/* LEFT IMAGE */}
//         <motion.div
//           initial={{ opacity: 0, y: 40, scale: 0.95 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="rounded-2xl overflow-hidden shadow-2xl"
//         >
//           <Image
//             src={service.image}
//             alt={service.title}
//             width={700}
//             height={500}
//             priority
//             className="w-full h-full object-cover"
//           />
//         </motion.div>

//         {/* RIGHT CONTENT */}
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: {},
//             visible: {
//               transition: {
//                 staggerChildren: 0.12
//               }
//             }
//           }}
//         >
//           <motion.span
//             variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
//             className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-purple-600/20 text-purple-400"
//           >
//             {service.badge}
//           </motion.span>

//           <motion.h1
//             variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
//             className="text-4xl lg:text-5xl font-bold mb-5"
//           >
//             {service.title}
//           </motion.h1>

//           <motion.p
//             variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
//             className="text-gray-400 mb-10 max-w-xl"
//           >
//             {service.description}
//           </motion.p>

//           <div className="space-y-6">
//             {service.features.map((item, index) => (
//               <motion.div
//                 key={index}
//                 variants={{
//                   hidden: { opacity: 0, x: 20 },
//                   visible: { opacity: 1, x: 0 }
//                 }}
//                 className="border-b border-white/10 pb-4"
//               >
//                 <h3 className="font-semibold text-lg">{item.title}</h3>
//                 <p className="text-gray-400 text-sm mt-1">
//                   {item.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }











"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface ServiceItem {
  id: number
  slug: string
  badge: string
  title: string
  description: string
  image: string
  ribbonText: string
  features: {
    title: string
    description: string
  }[]
  seo: {
    title: string
    description: string
  }
}

interface Props {
  service: ServiceItem
}

export default function ServiceHero({ service }: Props) {
  const heroRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const ribbonTrackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
      
      tl.from(".hero-badge", {
        opacity: 0,
        y: -20,
        duration: 0.6
      })
      .from(".hero-title", {
        opacity: 0,
        y: 30,
        duration: 0.8
      }, "-=0.4")
      .from(".hero-description", {
        opacity: 0,
        y: 20,
        duration: 0.7
      }, "-=0.5")
      
      // Image animation
      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.95,
        y: 40,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      })

      // Features animation - make sure they're visible
      if (featuresRef.current) {
        const featureItems = featuresRef.current.querySelectorAll(".feature-item")
        
        gsap.set(featureItems, { opacity: 1, x: 0 }) // Set initial state to visible
        
        gsap.from(featureItems, {
          opacity: 0,
          x: -30,
          stagger: 0.15,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        })
      }

      // Ribbon continuous animation
      if (ribbonTrackRef.current) {
        const ribbonWidth = ribbonTrackRef.current.scrollWidth / 2
        gsap.to(ribbonTrackRef.current, {
          x: -ribbonWidth,
          duration: 20,
          ease: "none",
          repeat: -1
        })
      }

      // Parallax effect on scroll
      gsap.to(imageRef.current, {
        y: 50,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      })

    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden mb-12">
      <section ref={heroRef} className="relative pt-16 pb-20 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden ">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Top Content */}
          <div className="max-w-3xl mb-16">
            <span className="hero-badge inline-block mb-5 px-5 py-2 text-sm font-medium rounded-full bg-purple-600/20 text-purple-400 border border-purple-500/30">
              {service.badge}
            </span>

            <h1 className="hero-title text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300">
              {service.title}
            </h1>

            <p className="hero-description text-xl text-gray-400 leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Grid Layout: Image + Features */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left: Image */}
            <div ref={imageRef} className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={700}
                  height={500}
                  priority
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Right: What's Included */}
            <div ref={featuresRef} className="features-grid">
              <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-white">
                What's included in the services?
              </h2>

              <div className="space-y-6">
                {service.features.map((item, index) => (
                  <div
                    key={index}
                    className="feature-item group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <h3 className="font-semibold text-xl mb-2 text-white group-hover:text-purple-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Ribbon - Tilted and Bigger */}
      <div className="relative w-full overflow-visible mt-6 md:mt-12">
        <div 
          className="relative py-8 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 shadow-2xl"
          style={{
            transform: 'rotate(-2deg) translateY(-20px)',
            transformOrigin: 'left top',
            width: '105%',
            marginLeft: '-2.5%'
          }}
        >
          <div 
            ref={ribbonTrackRef}
            className="flex whitespace-nowrap"
          >
            {[1, 2, 3, 4].map((_, i) => (
              <div key={i} className="flex items-center px-12">
                <span className="text-white font-bold text-2xl lg:text-3xl tracking-wide drop-shadow-lg">
                  ✨ {service.ribbonText}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
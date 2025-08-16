"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ellipse } from "framer-motion/client"
import { Autour_One } from "next/font/google"

export default function HeaderSection() {
  return (
    <section className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-20">
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-2/12"
        >
          <Image src="/icon2.png" alt="Floating Icon 1" width={200} height={200} className="opacity-70" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/3 right-1/6"
        >
          <Image src="/icon1.png" alt="Floating Icon 2" width={200} height={200} className="opacity-60" />
        </motion.div>

        {/* 3D Geometric Shapes */}
        <motion.div
          animate={{
            rotateY: [0, 360],
            rotateX: [0, 180, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-32 right-10 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg opacity-30"
          style={{ transform: "perspective(1000px)" }}
        />

        <motion.div
          animate={{
            rotateZ: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-40 left-20 w-16 h-16 bg-gradient-to-tr from-blue-400 to-purple-400 rounded-full opacity-40"
        />
      </div>

      {/* Main Content */}
      <div className="text-center max-w-4xl mx-auto relative z-10">
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-purple-300 text-lg md:text-xl mb-6 font-medium"
        >
          Welcome to
        </motion.p>

        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-white text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          META MASTER
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-300 text-xl md:text-2xl mb-8 font-light"
        >
          Your vision, our expertise
        </motion.p>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-gray-400 text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Our mission is to offer comprehensive solutions across a diverse range of domains, including technology,
          design, branding, marketing, content creation, sales, event planning, and more.
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
          >
            Contact us
            <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500 rounded-full blur-3xl"
        />
      </div>

      
        <Image alt="ellipse" src="/ellipse.png" width={0} height={20} className="w-full h-auto opacity-10 absolute bottom-0 left-0 overflow-hidden" />
      
    </section>
  )
}

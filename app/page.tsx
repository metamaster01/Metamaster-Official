"use client"

import Image from "next/image"
import Link from "next/link"
import {
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaGoogle,
  FaSearch,
  FaChartLine,
  FaBullhorn
} from "react-icons/fa"
import { motion } from "framer-motion"

const FloatingIcon = ({
  children,
  className,
  animationType,
}: {
  children: React.ReactNode;
  className?: string;
  animationType?: "float" | "rotate" | "bounce" | "wiggle";
}) => {
  const variants: Record<string, any> = {
    float: {
      y: [0, -15, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
    rotate: {
      rotate: [0, 10, -10, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
    bounce: {
      y: [0, -25, 0],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    },
    wiggle: {
      rotate: [0, 3, -3, 3, -3, 0],
      transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
    },
  }

  return (
    <motion.div animate={animationType ? variants[animationType] : undefined} className={className}>
      {children}
    </motion.div>
  )
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden pt-safe-top pb-safe-bottom">
      {/* Background Images */}
      <div className="absolute inset-0">
        <Image src="/liner.png" alt="" fill className="object-cover opacity-90" priority />
        <Image src="/ellipse.png" alt="" fill className="object-cover opacity-70 scale-110" priority />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Header */}
      <header className="relative z-10 p-4 sm:p-6 md:p-8 animate-fade-in-down">
        <div className="max-w-xs sm:max-w-sm md:max-w-md mx-auto">
            <div className="flex items-center justify-center">
  <Image
  src="/logo.png"
  alt="Meta Master Logo"
  width={420}
  height={140}
  className="w-[420px] h-auto sm:w-[480px] md:w-[520px]"
/>


      </div>  
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="text-center max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto">
          <p className="text-purple-300 text-base sm:text-lg md:text-xl mb-6 font-medium animate-fade-in-up animation-delay-300">
            Stay tuned We are
          </p>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-scale-in animation-delay-500">
            Coming soon
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-10 sm:mb-12 max-w-xl mx-auto leading-relaxed animate-fade-in-up animation-delay-700">
            Meta Master is launching shortly. Get ready for something big.
          </p>
          <div className="animate-fade-in-up animation-delay-900">
            <Link
              href="https://www.instagram.com/metamaster.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white/95 hover:bg-white text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              Follow us on Instagram
              <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Floating Icons - Hidden on mobile */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden sm:block">
        {/* Social icons */}
        <div className="absolute top-[30%] left-[5%]">
          <FloatingIcon animationType="float">
            <Link href="https://instagram.com/metamaster.ai" target="_blank">
              <div className="text-pink-500 text-3xl opacity-70 hover:opacity-100 transition-opacity duration-300">
                <i className="fab fa-instagram"></i>
              </div>
            </Link>
          </FloatingIcon>
        </div>
        <div className="absolute bottom-[20%] left-[10%]">
          <FloatingIcon animationType="bounce">
            <Link href="https://linkedin.com" target="_blank">
              <div className="text-blue-500 text-3xl opacity-70 hover:opacity-100 transition-opacity duration-300">
                <i className="fab fa-linkedin-in"></i>
              </div>
            </Link>
          </FloatingIcon>
        </div>
        <div className="absolute top-[40%] right-[10%]">
          <FloatingIcon animationType="rotate">
            <Link href="https://x.com" target="_blank">
              <div className="text-white text-3xl opacity-70 hover:opacity-100 transition-opacity duration-300">
                <i className="fab fa-x-twitter"></i>
              </div>
            </Link>
          </FloatingIcon>
        </div>
        <div className="absolute top-[15%] right-[15%]">
          <FloatingIcon animationType="float">
            <FaFacebookF className="text-blue-600 text-3xl opacity-70 hover:opacity-100 transition-opacity duration-300" />
          </FloatingIcon>
        </div>
        <div className="absolute top-[60%] right-[5%]">
          <FloatingIcon animationType="bounce">
            <FaYoutube className="text-red-600 text-4xl opacity-70 hover:opacity-100 transition-opacity duration-300" />
          </FloatingIcon>
        </div>
        <div className="absolute bottom-[15%] left-[15%]">
          <FloatingIcon animationType="rotate">
            <FaWhatsapp className="text-green-500 text-4xl opacity-70 hover:opacity-100 transition-opacity duration-300" />
          </FloatingIcon>
        </div>
        <div className="absolute top-[35%] left-[25%]">
          <FloatingIcon animationType="wiggle">
            <FaGoogle className="text-red-500 text-3xl opacity-70 hover:opacity-100 transition-opacity duration-300" />
          </FloatingIcon>
        </div>
        <div className="absolute bottom-[30%] right-[30%]">
          <FloatingIcon animationType="float">
            <FaSearch className="text-yellow-400 text-3xl opacity-70 hover:opacity-100 transition-opacity duration-300" />
          </FloatingIcon>
        </div>
        <div className="absolute bottom-[20%] right-[20%]">
          <FloatingIcon animationType="wiggle">
            <FaChartLine className="text-cyan-400 text-4xl opacity-70 hover:opacity-100 transition-opacity duration-300" />
          </FloatingIcon>
        </div>
        <div className="absolute top-[20%] left-[10%]">
          <FloatingIcon animationType="bounce">
            <FaBullhorn className="text-purple-500 text-3xl opacity-70 hover:opacity-100 transition-opacity duration-300" />
          </FloatingIcon>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 px-4 sm:px-6 py-8 sm:py-12 animate-fade-in-up animation-delay-1100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center items-center text-center">
            <div className="flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-300">
              <div className="text-gray-400 mb-2">
                <span className="text-sm font-medium">Mobile number</span>
              </div>
              <Link href="tel:+919529770498" className="text-white hover:text-purple-300 transition-colors duration-300">
                +919529770498
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-300">
              <div className="text-gray-400 mb-2">
                <span className="text-sm font-medium">Mail</span>
              </div>
              <Link href="mailto:aman@metamaster.com" className="text-white hover:text-purple-300 transition-colors duration-300">
                aman@metamaster.com
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-300">
              <div className="text-gray-400 mb-2">
                <span className="text-sm font-medium">Address</span>
              </div>
              <span className="text-white">Nagpur, Maharashtra, India</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Animated Background Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-60 sm:w-80 md:w-96 h-60 sm:h-80 md:h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-52 sm:w-72 md:w-80 h-52 sm:h-72 md:h-80 bg-purple-400/5 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
      </div>
    </div>
  )
}
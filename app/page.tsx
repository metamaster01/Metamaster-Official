"use client"

import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {/* Linear gradient background - increased opacity to show purple */}
        <div className="absolute inset-0">
          <Image src="/liner.png" alt="" fill className="object-cover opacity-90" priority />
        </div>

        {/* Ellipse vignette overlay - adjusted for better blending */}
        <div className="absolute inset-0">
          <Image src="/ellipse.png" alt="" fill className="object-cover opacity-70 scale-110" priority />
        </div>

        {/* Additional ellipse layer for enhanced depth */}
        <div className="absolute top-0 left-0 w-full h-full">
          <Image src="/ellipse.png" alt="" fill className="object-cover opacity-30 scale-125" priority />
        </div>

        {/* Reduced black overlay to preserve purple gradient */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Header */}
      <header className="relative z-10 p-4 md:p-8 animate-fade-in-down">
        <div className="max-w-96 mx-auto">
          {/* <div className="bg-gradient-to-r from-white/95 to-purple-50/95 backdrop-blur-sm rounded-full px-2 py-2 shadow-2xl"> */}
            <div className="flex items-center justify-center">
              <div className="hover:scale-105 transition-transform duration-300">
                <Image
                  src="/logo.png"
                  alt="Meta Master Logo"
                  width={200}
                  height={90}
                />
              </div>
            </div>
          {/* </div> */}
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-12 md:py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Stay tuned text */}
          <p className="text-purple-300 text-lg md:text-xl mb-8 font-medium animate-fade-in-up animation-delay-300">
            Stay tuned We are
          </p>

          {/* Coming soon heading */}
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight animate-scale-in animation-delay-500">
            Coming soon
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-700">
            Meta Master is launching shortly. Get ready for something big.
          </p>

          {/* Instagram Button */}
          <div className="animate-fade-in-up animation-delay-900">
            <Link
              href="https://www.instagram.com/metamaster.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white/95 hover:bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              Follow us on Instagram
              <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-4 py-8 md:py-12 animate-fade-in-up animation-delay-1100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center items-center">
            {/* Mobile number */}
            <div className="flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-300">
              <div className="text-gray-400 mb-2 text-center">
                <span className="text-sm font-medium">Mobile number</span>
              </div>
              <Link
                href="tel:+919529770498"
                className="text-white hover:text-purple-300 transition-colors duration-300 text-center"
              >
                +919529770498
              </Link>
            </div>

            {/* Mail */}
            <div className="flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-300">
              <div className="text-gray-400 mb-2 text-center">
                <span className="text-sm font-medium">Mail</span>
              </div>
              <Link
                href="mailto:aman@metamaster.com"
                className="text-white hover:text-purple-300 transition-colors duration-300 text-center"
              >
                aman@metamaster.com
              </Link>
            </div>

            {/* Address */}
            <div className="flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-300">
              <div className="text-gray-400 mb-2 text-center">
                <span className="text-sm font-medium">Address</span>
              </div>
              <span className="text-white text-center">Nagpur, Maharashtra, India</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
      </div>
    </div>
  )
}

"use client"

import Image from "next/image"
import Navbar from "@/components/navbar"
import HeaderSection from "@/components/header-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        <Image src="/liner.png" alt="" fill className="object-cover opacity-90" priority />
        <Image src="/ellipse.png" alt="" fill className="object-cover opacity-70 scale-110" priority />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <HeaderSection />
    </div>
  )
}

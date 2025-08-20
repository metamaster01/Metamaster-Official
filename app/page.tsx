
"use client"
import Image from "next/image"
import Navbar from "@/components/navbar"
import HeaderSection from "@/components/header-section"
import AboutSection from '@/components/AboutSection'
import ServicesPage from "@/components/ServiceSection"
import OurWork from "@/components/OurWork"
import { ClientTestimonials } from "@/components/OurClients"
import Footer from "@/components/footer"

export default function Home() {
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

      {/* Other Sections */}
      <AboutSection />
      <ServicesPage />
      <OurWork />
      <ClientTestimonials />
      <Footer />
    </div>
  )
}

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
      {/* Navbar */}
      <Navbar />

      {/* Header Section with Background */}
      <section className="relative min-h-screen">
        {/* Background Images only for header */}
        <div className="absolute inset-0 -z-10">
          <Image src="/liner.png" alt="" fill className="object-cover opacity-90" priority />
          <Image src="/ellipse.png" alt="" fill className="object-cover opacity-70 scale-110" priority />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <HeaderSection />
      </section>

      {/* Other Sections (plain black background) */}
      <section className="bg-black">
        <AboutSection />
        <ServicesPage />
        <OurWork />
        <ClientTestimonials />
        <Footer />
      </section>
    </div>
  )
}

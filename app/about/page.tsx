"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/Ui/button";
import { Card } from "@/components/Ui/card";
import Image from "next/image";

// Why Choose Section Data
const whyChoose = [
  {
    title: "360° Marketing Solutions",
    description:
      "Comprehensive marketing strategies that cover every aspect of your brand's digital presence and growth.",
  },
  {
    title: "Creative Excellence",
    description:
      "Award-winning creative team that brings innovative ideas and stunning visuals to life for your brand.",
  },
  {
    title: "Strategic Approach",
    description:
      "Data-driven strategies tailored to your specific business goals and target audience for maximum impact.",
  },
  {
    title: "Technology Integration",
    description:
      "Cutting-edge technology solutions that streamline processes and enhance your marketing effectiveness.",
  },
  {
    title: "Proven Results",
    description:
      "Track record of delivering measurable results and ROI for startups, growing businesses, and established brands.",
  },
  {
    title: "End-to-End Service",
    description:
      "From concept to execution, we handle every aspect of your marketing, branding, and event needs.",
  },
];

// Team Members Data with individual images, names, roles
const teamMembers = [
  { name: "Aman", role: "Founder & CEO", image: "/about4.png" },
  { name: "Aman", role: "Founder & CEO", image: "/about4.png" },
  { name: "Aman", role: "Founder & CEO", image: "/about4.png" },
  { name: "Aman", role: "Founder & CEO", image: "/about4.png" },
  { name: "Aman", role: "Founder & CEO", image: "/about4.png" },
  { name: "Aman", role: "Founder & CEO", image: "/about4.png" },
  { name: "Aman", role: "Founder & CEO", image: "/about4.png" },
  { name: "Aman", role: "Founder & CEO", image: "/about4.png" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden text-white">
      {/* Navbar */}
      <Navbar />

      {/* About Us Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="mb-24 ml-8 md:ml-16">
          <h1 className="text-5xl font-bold mb-8">
            About <span className="text-purple-400">Us</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mb-8">
            We Meta Master is your one-stop destination for 360° marketing,
            branding, and event solutions. We blend creativity, technology,
            and strategy to turn your vision into reality. Whether you're a
            startup, growing business, or an established brand — we craft
            tailor-made experiences that deliver results.
          </p>
          <Button className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-md font-medium">
            Get in touch
          </Button>
        </div>

        {/* Meet Our Team Section */}
        <div className="mb-24 ml-8 md:ml-16">
          <h2 className="text-5xl font-bold mb-12">
            Meet <span className="text-purple-400">Our Team</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
              >
                {/* Full Image at Top */}
                <div className="relative w-full h-64">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Name & Role Below */}
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Metamaster Section */}
        <div className="mt-24 ml-8 md:ml-16">
          <h2 className="text-4xl font-bold mb-12">
            Why choose <span className="text-purple-400">Metamaster</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, index) => (
              <Card
                key={index}
                className="bg-gradient-to-b from-[#000000] via-[#200D42] via-[#4F21A1] to-[#D26AFF] border border-gray-700 p-6 hover:opacity-90 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

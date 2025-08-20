"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/Ui/button";
import { Card } from "@/components/Ui/card";   
import { ClientTestimonials } from "@/components/OurClients"

// Work items data
const works = [
  {
    id: 1,
    title: "Zaina Collection",
    category: "Fashion",
    type: "Web Design/Visual Design",
    year: "2025",
    image: "/work1.png",
  },
  {
    id: 2,
    title: "Streetspheree Group",
    category: "Real Estate",
    type: "Website Design/Visual Design",
    year: "2024",
    image: "/work2.png",
  },
  {
    id: 3,
    title: "Shah Tzu Dog Brand",
    category: "Pets & Animals",
    type: "Web Design/Visual Design",
    year: "2025",
    image: "/work3.png",
  },
  {
    id: 4,
    title: "Xplore Events",
    category: "Event Planning",
    type: "Website Design/Visual Design",
    year: "2025",
    image: "/work4.png",
  },
  {
    id: 5,
    title: "Shah Tzu Dog Brand",
    category: "Pets & Animals",
    type: "Web Design/Visual Design",
    year: "2025",
    image: "/work3.png",
  },
  {
    id: 6,
    title: "Xplore Events",
    category: "Event Planning",
    type: "Website Design/Visual Design",
    year: "2025",
    image: "/work4.png",
  },
];


// 🔹 Client Logos
const clientLogos = [
  { name: "Company 1", src: "/logo1.png" },
  { name: "Company 2", src: "/logo2.png" },
  { name: "Company 3", src: "/logo3.png" },
  { name: "Company 4", src: "/logo4.png" },
  { name: "Company 5", src: "/logo5.png" },
  { name: "Company 6", src: "/logo6.png" },
  { name: "Company 7", src: "/logo8.png" },
  { name: "Company 8", src: "/logo7.png" },
  { name: "Company 9", src: "/logo9.png" },
];

const categories = [
  "All",
  "Real Estate",
  "Fashion",
  "Pets & Animals",
  "Education",
  "Event Planning",
];

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredWorks =
    selectedCategory === "All"
      ? works
      : works.filter((work) => work.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Content Wrapper */}
      <div className="w-full max-w-7xl px-6 py-16 mx-auto">
        {/* Header + Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-2">
              Recent <span className="text-purple-400">Works</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              A showcase of our latest projects across design, development, and
              branding.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <Button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-purple-500 text-white shadow-lg"
                    : "bg-transparent border border-gray-600 text-gray-300 hover:bg-gray-800"
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 mb-8">
          {filteredWorks.map((work) => (
            <div key={work.id} className="group cursor-pointer">
              <div className="aspect-[2/-5] rounded-2xl overflow-hidden bg-gray-800">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 grid grid-cols-3 items-start">
                <h3 className="text-white font-semibold text-lg text-left">
                  {work.title}
                </h3>
                <p className="text-gray-300 text-sm text-center">{work.type}</p>
                <p className="text-gray-400 text-sm text-right">{work.year}</p>
              </div>
            </div>
          ))}
        </div>
        

        {/* See More Work Button */}
        <Button
          variant="outline"
          className="bg-transparent border-white text-white hover:bg-white hover:text-black hover:border-gray-500 rounded-full px-8 py-3"
        >
          See more work
        </Button>

        {/* Client Logos */}
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-8">Trusted by the Clients</p>
            <div className="bg-white rounded-lg p-6">
              <div className="flex flex-wrap justify-center items-center gap-8">
                {clientLogos.map((logo, index) => (
                  <img
                    key={index}
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.name}
                    className="h-8 md:h-10 opacity-60 hover:opacity-100 transition-opacity"
                  />
                ))}
              </div>
            </div>
          </div>
      </div>

      <ClientTestimonials/>

      {/* Footer */}
      <Footer />
    </div>
  );
}

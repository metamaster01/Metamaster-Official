"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/Ui/button";
import { Card, CardContent, } from "@/components/Ui/card";
import { Check, ArrowUpRight } from "lucide-react";
import { ClientTestimonials } from "@/components/OurClients";

// 🔹 Services Data
const services = [
  {
    title: "Social Media Management",
    subheader: "We Create. We Connect. We Convert.",
    items: [
      "No Clients, We Generate Upto Content",
      "Consistent content calendar",
      "Brand, Comments, Hashtag/growth",
      "Engagement & Community Building",
      "Analytics & Performance Tracking",
      "Paid Advertising & Promotion Campaigns",
    ],
  },
  {
    title: "Website, SEO & Funnel Building",
    subheader: "Build Fast, Rank High, Convert Smart",
    items: [
      "Business-Ready High-Conversion Funnel",
      "Responsive Website Design & Development",
      "Dynamic SEO/SEM",
      "E-commerce Solutions, CRM Integration",
      "Lead Generation & Conversion Optimization",
      "Analytics & Performance Tracking",
      "Blog Earnings + Writing",
    ],
  },
  {
    title: "Paid Ads & Lead Generation",
    subheader: "We Turn Clicks Into Conversions.",
    items: [
      "We Run Clickfunnels Campaigns",
      "Data-Driven Ad Strategy & Audience Engagement",
      "Google",
      "Facebook",
      "Instagram",
      "LinkedIn",
      "ROI-Focused Funnel Campaigns",
    ],
  },
  {
    title: "Branding & Design",
    subheader: "Your Brand, Designed to Impress.",
    items: [
      "Logo Design, Document templates",
      "Brand & Visual Identity Development",
      "Marketing Materials (Brochures, Flyers, etc.)",
      "Product Packaging, Stationery Box",
      "Brand Guidelines & Style Guides",
      "Website & App UI/UX Design",
    ],
  },
  {
    title: "Influencer Marketing & Content",
    subheader: "Where Influence Meets Strategy.",
    items: [
      "Influencer Outreach, Micro-Influencer",
      "Bulk and Micro Outreach Campaigns",
      "Content Creation & Curation",
      "Storytelling, video editing, and branding",
      "Campaign Management & ROI Tracking",
    ],
  },
  {
    title: "WhatsApp & Email Marketing",
    subheader: "Direct Marketing That Converts & Builds Loyalty",
    items: [
      "Direct Marketing, High-Conversion & Builds",
      "Targeted",
      "Automated Email Sequences",
      "WhatsApp Business API Integration",
      "Email campaign design (Up to 4/month)",
      "Lead nurturing",
      "A/B testing & optimization",
    ],
  },
  {
    title: "Content Production & Reels",
    subheader: "Content That Trends, Tells & Sells",
    items: [
      "Creative Reel Trends, Tips & Tricks",
      "TV-Ads, new reels trends (production, script, shooting, editing)",
      "Creative copywriting & hook writing",
      "Brand storytelling & content strategies",
    ],
  },
  {
    title: "Offline Event Branding",
    subheader: "Bring Your Brand to Life — Offline!",
    items: [
      "Bring Your Brand to Life - Offline!",
      "Event branding, graphic design",
      "Booth design & setup",
      "Promotional materials & giveaways",
      "Offline promotional (handouts, print)",
    ],
  },
];


// 🔹 Pricing Plans
const pricingPlans = [
  {
    title: "Startups & Solo Entrepreneurs",
    price: "₹20,000",
    period: "/Mo",
    description: "Startups & Solo Entrepreneurs",
    subtitle: "Build Your Basic Presence And Test Digital Waters.",
    features: ["3 Basic Posts", "Boosting Strategy", "Basic Analytics", "45-min Brand Consult"],
    buttonText: "TRY FOR ₹20K",
    buttonVariant: "outline" as const,
    popular: false,
  },
  {
    title: "Growth",
    price: "₹35,000",
    period: "/Mo",
    description: "Growing Businesses & Influencers",
    subtitle: "Create, Promote, And Grow Your Digital Brand With Consistency",
    features: [
      "Up to 15 Posts",
      "2 Paid Ad Campaigns (FB/Google)",
      "Landing Page + Lead Form",
      "CRM Optimization",
      "Strategy Call + Content Calendar",
      "Ad Performance Report",
    ],
    buttonText: "UPGRADE NOW",
    buttonVariant: "default" as const,
    popular: true,
  },
  {
    title: "Pro Custom",
    price: "₹0",
    period: "/Mo",
    description: "Real Estate, Schools, FMCG & Events",
    subtitle: "Full Digital Dominance With Complete Strategy, Execution, And Automation",
    features: [
      "Website Design + SEO",
      "Full Brand Kit + Logo",
      "25 Creative/Videos",
      "WhatsApp + Email Campaigns",
      "CRM & Funnel Setup",
      "Influencer + Blog + Hashtag Strategy",
    ],
    buttonText: "CUSTOM QUOTE",
    buttonVariant: "outline" as const,
    popular: false,
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

// 🔹 Final Merged Page
export default function ServicesAndPricingPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Navbar */}
      <Navbar />

      <div className="w-full max-w-7xl px-6 py-16 mx-auto">
        {/* Hero Section */}
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold mb-6">
            Our <span className="text-purple-400">Services</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            We offer end-to-end solutions that cover every digital touchpoint of your business:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-[#1A1A1A] border border-gray-700 p-6 hover:bg-[#222222] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <ArrowUpRight className="w-5 h-5 text-purple-400 flex-shrink-0" />
              </div>
              <p className="text-purple-400 text-sm font-medium mb-4">{service.subheader}</p>
              <ul className="space-y-2">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-300 text-sm leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-left mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Growth Plan
              </span>
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl">
              Flexible packages designed for every stage of your brand journey — from startup to scale-up.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative bg-gray-900/80 border border-gray-700 backdrop-blur-sm p-8 ${
                  plan.popular ? "ring-2 ring-purple-500/50 transform scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wide">
                      (MOST POPULAR)
                    </span>
                  </div>
                )}

                <CardContent className="p-0">
                  {/* Plan Header */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{plan.title}</h3>
                    <div className="flex items-baseline mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-1">{plan.description}</p>
                    <p className="text-gray-300 text-sm">{plan.subtitle}</p>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-white font-medium mb-4">Includes:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center mt-0.5 flex-shrink-0">
                            <Check className="w-3 h-3 text-black" />
                          </div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button */}
                  <Button
                    className={`w-full font-semibold py-3 rounded-lg transition-all duration-300 ${
                      plan.buttonVariant === "default"
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
                        : "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 hover:from-purple-600 hover:to-pink-600"
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>


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
      </div>

      <ClientTestimonials/>

      {/* Footer */}
      <Footer />
    </div>
  );
}

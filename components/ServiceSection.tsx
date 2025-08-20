import { Button } from "@/components/Ui/button"
import { Card } from "@/components/Ui/card"
import { ArrowUpRight } from "lucide-react"

export default function ServicesPage() {
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
  ]

  const whyChoose = [
    {
      title: "360° Solutions",
      description: "Everything from brand creation to execution under one roof",
    },
    {
      title: "Custom Strategy",
      description: "Tailored, data-driven action plans for your unique business goals",
    },
    {
      title: "Result-Oriented",
      description: "Data-driven campaigns that generate leads & boost ROI",
    },
    {
      title: "Creative Edge",
      description: "Award-winning creative and attention-grabbing content",
    },
    {
      title: "Timely Delivery",
      description: "Fast project delivery, quality output",
    },
    {
      title: "Client-Centric Approach",
      description: "Transparent communication & dedicated support",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl px-6 py-16">
        {/* Hero Section */}
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold mb-6">
            Our 360° <span className="text-purple-400">Services</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            We're specializing in transformational business solutions. We empower organizations to harness the full
            potential of D365, helping them achieve significant operational improvements and drive sustainable growth.
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
              {/* Subheader */}
              <p className="text-purple-400 text-sm font-medium mb-4">
                {service.subheader}
              </p>
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
        {/* Explore Packages Button */}
        <div className="flex justify-left mt-12">
          <Button className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-lg font-medium">
            Explore Packages
          </Button>
        </div>

        {/* Why Choose Section */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold mb-12">
            Why choose <span className="text-purple-400">Metamaster</span>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
            {whyChoose.map((item, index) => (
              <Card
  key={index}
  className="bg-gradient-to-b from-[#000000] via-[#200D42] via-[#4F21A1] to-[#D26AFF] border border-gray-700 p-6 hover:opacity-90 transition-all duration-300"
>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

import { Metadata } from "next";
import CallToAction from "@/components/calltoaction";
import ContactDetails from "@/components/contact/ContactDetail";
import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Newsletter from "@/components/newsletter";

// SEO Metadata
export const metadata: Metadata = {
  title: "Contact Meta Master | Digital Marketing Agency in India",
  description: "Contact Meta Master to start your digital marketing journey. We help startups across India grow online with affordable solutions.",
  keywords: [
    "contact digital marketing agency",
    "digital marketing consultation",
    "social media marketing services",
    "SEO services",
    "paid advertising agency",
    "branding services",
    "content production",
    "influencer marketing",
    "lead generation services",
    "contact metamaster",
    "digital marketing Mumbai",
    "marketing agency contact"
  ],
  authors: [{ name: "MetaMaster" }],
  creator: "MetaMaster",
  publisher: "MetaMaster",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com/contact",
    siteName: "MetaMaster",
    title: "Contact Us - Expert Digital Marketing Services | MetaMaster",
    description: "Get in touch with MetaMaster for comprehensive digital marketing solutions. We specialize in Social Media Marketing, SEO, Paid Ads, Branding, and more. Let's build something impactful together!",
    images: [
      {
        url: "/og-contact-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact MetaMaster - Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Expert Digital Marketing Services | MetaMaster",
    description: "Reach out to MetaMaster for top-tier digital marketing services. We're here to help grow your brand!",
    images: ["/twitter-contact-image.jpg"],
    creator: "@metamaster",
  },
  alternates: {
    canonical: "https://www.metamaster.in/contact",
  },
  verification: {
    google: "DmtWAEJuWBjoxsIchNljFJ8pKozfKvAVlaTnvBvpJU",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  other: {
    "contact:phone_number": "+919529770498",
    "contact:email": "aman@metamaster.in",
    "business:contact_data:street_address": "Office No. 302, Hingna Rd, near Pandurang Mate Sabha Gruh, IC Chowk, Lokmanya Nagar, Nagpur, Nildoh ct, Maharashtra 440016",
    "business:contact_data:locality": "Nagpur",
    "business:contact_data:region": "Maharashtra",
    "business:contact_data:postal_code": "440016",
    "business:contact_data:country_name": "India",
  },
};

// JSON-LD Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://metamaster.in/contact#contactpage",
      url: "https://metamaster.in/contact",
      name: "Contact MetaMaster - Digital Marketing Agency",
      description: "Get in touch with MetaMaster for expert digital marketing services including Social Media Marketing,Website Building, SEO, Paid Ads, Branding, and Content Production.",
      isPartOf: {
        "@id": "https://metamaster.in/#website",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://metamaster.in/#organization",
      name: "MetaMaster",
      url: "https://metamaster.in",
      logo: {
        "@type": "ImageObject",
        url: "https://metamaster.in/logo.png",
        width: 250,
        height: 60,
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-9529770498",
          contactType: "customer service",
          email: "aman@metamaster.in",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "10:00",
            closes: "19:00",
          },
        },
      ],
      sameAs: [
        "https://www.instagram.com/metamaster",
        "https://www.youtube.com/@metamaster",
        "https://www.linkedin.com/company/metamaster",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Office No. 302, Hingna Rd, near Pandurang Mate Sabha Gruh, IC Chowk, Lokmanya Nagar, Nagpur, Nildoh ct, Maharashtra 440016",
        addressLocality: "Nagpur",
        addressRegion: "Maharashtra",
        postalCode: "400001",
        addressCountry: "IN",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://metamaster.in/#website",
      url: "https://metamaster.in",
      name: "MetaMaster",
      description: "Leading Digital Marketing Agency specializing in Social Media Marketing, SEO, Paid Ads, and Branding",
      publisher: {
        "@id": "https://metamaster.in/#organization",
      },
    },
    {
      "@type": "ProfessionalService",
      name: "MetaMaster Digital Marketing Services",
      image: "https://metamaster.in/services-image.jpg",
      "@id": "https://metamaster.in/contact#service",
      url: "https://metamaster.in/contact",
      telephone: "+91-9529770498",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Office No. 302, Hingna Rd, near Pandurang Mate Sabha Gruh, IC Chowk, Lokmanya Nagar, Nagpur, Nildoh ct, Maharashtra 440016",
        addressLocality: "Nagpur",
        addressRegion: "Maharashtra",
        postalCode: "400001",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 19.0760,
        longitude: 72.8777,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "19:00",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital Marketing Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Social Media Marketing",
              description: "Comprehensive social media marketing strategies to grow your brand presence",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SEO - Websites and Funnel Building",
              description: "Search engine optimization and conversion-focused website development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Paid Ads and Lead Generation",
              description: "Targeted paid advertising campaigns for maximum ROI and lead generation",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Branding and Design",
              description: "Professional branding and creative design services",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Influencer Marketing and UGC",
              description: "Influencer partnerships and user-generated content campaigns",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Content and Video Production",
              description: "High-quality content creation and video production services",
            },
          },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://yourwebsite.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Contact",
          item: "https://yourwebsite.com/contact",
        },
      ],
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen overflow-x-hidden">
        {/* Semantic HTML for better SEO */}
        <header>
          <Navbar />
        </header>

        <main>
          {/* H1 is already in ContactForm component */}
          <article>
            <ContactForm />
          </article>

          <section aria-label="Contact Information">
            <ContactDetails />
          </section>

          <section aria-label="Call to Action">
            <CallToAction />
          </section>

          <section aria-label="Newsletter Subscription">
            <Newsletter />
          </section>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
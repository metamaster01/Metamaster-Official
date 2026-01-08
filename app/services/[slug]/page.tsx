import { notFound } from "next/navigation"
import type { Metadata } from "next"

import { services } from "@/data/service"
import ServiceHero from "@/components/services/ServiceHero"
import Ribbon from "@/components/ribbion"
import WhyChooseMetamaster from "@/components/whychoose"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Newsletter from "@/components/newsletter"
import OurWorksSection from "@/components/ourwork"
import MetaMasterCTA from "@/components/services/ServiceCTAsection"

/* -----------------------------
   METADATA (ASYNC PARAMS SAFE)
-------------------------------- */
export async function generateMetadata(
  props: {
    params: Promise<{ slug: string }>
  }
): Promise<Metadata> {
  const { slug } = await props.params

  const service = services.find((s) => s.slug === slug)
  if (!service) return {}

  return {
    title: service.seo.title,
    description: service.seo.description,
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      images: [service.image],
    },
  }
}

/* -----------------------------
   PAGE (ASYNC PARAMS SAFE)
-------------------------------- */
export default async function ServicePage(
  props: {
    params: Promise<{ slug: string }>
  }
) {
  const { slug } = await props.params

  const service = services.find((s) => s.slug === slug)
  if (!service) return notFound()

  return (
    <>
    <Navbar/>
      <ServiceHero service={service} />
      {/* <Ribbon /> */}
      <WhyChooseMetamaster />
      <MetaMasterCTA />
      <OurWorksSection />
      <Newsletter />
      <Footer />
    </>
  )
}

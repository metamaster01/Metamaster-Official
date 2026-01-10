import CallToAction from "@/components/calltoaction"
import CareerHero from "@/components/careers/CareerHero"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import Newsletter from "@/components/newsletter"


export default function CareersPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <CareerHero/>
      <CallToAction />
      <Newsletter />
      <Footer />
      
    </div>
  )
}
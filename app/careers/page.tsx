import CallToAction from "@/components/calltoaction"
import CareerHero from "@/components/careers/CareerHero"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import Newsletter from "@/components/newsletter"
import WhoWe from "@/components/whowe"


export const metadata = {
  title: "Careers at Meta Master | Join Our Digital Marketing Team in India",
  description: "Explore career opportunities at Meta Master, a leading digital marketing agency in India. Join our team to help startups grow online with innovative marketing solutions.",
  keywords: ["Meta Master Careers", "Digital Marketing Jobs", "Marketing Careers India", "Join Meta Master", "Work at Meta Master", "Digital Marketing Team", "Career Opportunities", "Marketing Agency Jobs"],
};

export default function CareersPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <CareerHero/>
      <WhoWe />
      <CallToAction />
      <Newsletter />
      <Footer />
      
    </div>
  )
}
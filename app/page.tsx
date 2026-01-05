
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Advertisement from "@/components/advertisement";
import Services from "@/components/service";
import WhyChooseUs from "@/components/whychoose";
import OurWorksSection from "@/components/ourwork";
import Image from "next/image";
import AboutUs from "@/components/aboutus";
import Ribbon from "@/components/ribbion";
import Testimonial from "../components/testimonal";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
       <Navbar/>
       <Hero/>
       <Advertisement/>
       <AboutUs/>
       <Ribbon/>
       <Services/>
       <WhyChooseUs/>
       <OurWorksSection/>
       <Testimonial/>
       <Footer/>
      </>
  );
}

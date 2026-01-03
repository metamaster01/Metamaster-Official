
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Advertisement from "@/components/advertisement";
import Services from "@/components/service";
import WhyChooseUs from "@/components/whychoose";
import OurWorksSection from "@/components/ourwork";
import Image from "next/image";
import AboutUs from "@/components/aboutus";
import Ribbon from "@/components/ribbion";

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
      </>
  );
}

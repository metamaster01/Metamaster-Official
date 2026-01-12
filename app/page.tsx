
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Advertisement from "@/components/advertisement";
import Services from "@/components/service";
import WhyChooseUs from "@/components/whychoose";
import OurWorksSection from "@/components/ourwork";
import Image from "next/image";
import CallToAction from "@/components/calltoaction";
import AboutUs from "@/components/aboutus";
// import Ribbon from "@/components/ribbion";
import Testimonial from "../components/testimonal";
import  Blogs from "@/components/blogs";
import  Newsletter from "@/components/newsletter";
import Footer from "@/components/footer";
import Slider from "@/components/slider"

export default function Home() {
  
  return (
    <>
       {/* <Slider/> */}
       <Navbar/>
       <Hero/>
       <Advertisement/>
       <AboutUs/>
       {/* <Ribbon/> */}
       <Services/>
       <WhyChooseUs/>
       <OurWorksSection/>
      <CallToAction/>
       <Testimonial/>
        <Blogs/>
        <Newsletter/>
       <Footer/>
      </>
  );
}

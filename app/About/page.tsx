
import Navbar from "@/components/navbar";
import AboutMetaMaster from "@/components/aboutmetamaster";
import CallToAction from "@/components/calltoaction";
import Testimonial from "@/components/testimonal";
import Newsletter from "@/components/newsletter";
import Footer from "@/components/footer";   


export default function Home() {
  return (
    <>
       
       <Navbar/>
         <AboutMetaMaster/>
      <CallToAction/>
       <Testimonial/>
        <Newsletter/>
       <Footer/> 
      </>
  );
}

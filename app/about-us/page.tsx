
import Navbar from "@/components/navbar";
import AboutMetaMaster from "@/components/aboutmetamaster";
import Advertise from "@/components/advertisement";
import WhoWe from "@/components/whowe";
import WhyChooseMetamaster from "@/components/whychoose";
import MeetFounder from "@/components/meetfounder";
import MeetOurTeam from "@/components/meetourteam";
import CallToAction from "@/components/calltoaction";
import Testimonial from "@/components/testimonal";
import Newsletter from "@/components/newsletter";
import Footer from "@/components/footer";   


export default function Home() {
  return (
    <>
       
       <Navbar/>
         <AboutMetaMaster/>
        <Advertise/>
        <WhoWe/>
        <WhyChooseMetamaster/>
        <MeetFounder/>
        <MeetOurTeam/>
      <CallToAction/>
       <Testimonial/>
        <Newsletter/>
       <Footer/> 
      </>
  );
}

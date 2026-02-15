
import Navbar from "@/components/navbar";
import AboutMetaMaster from "@/components/aboutmetamaster";
import Advertise from "@/components/advertisement";
import WhoWe from "@/components/whowe";
import WhyChooseMetamaster from "@/components/whychoose";
import MeetFounder from "@/components/meetfounder";
import MeetOurTeam from "@/components/meetourteam";
// import CallToAction from "@/components/calltoaction";
import Testimonial from "@/components/testimonal";
import Newsletter from "@/components/newsletter";
import Footer from "@/components/footer";   

export const metadata = {
  title: "About Meta Master | Startup-Focused Digital Marketing Agency India",
  description: "Learn about Meta Master, a digital marketing agency in India helping startups build brands, grow online, and generate leads with affordable strategies.",
  keywords: ["Meta Master", "About Us", "Digital Marketing Agency", "India", "Startups", "Mission", "Values", "Team"],
};

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
      {/* <CallToAction/> */}
       <Testimonial/>
        <Newsletter/>
       <Footer/> 
      </>
  );
}

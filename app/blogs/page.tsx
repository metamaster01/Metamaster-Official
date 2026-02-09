
import Navbar from "@/components/navbar";
import BlogsPage from "./blogpage";

import CallToAction from "@/components/calltoaction";

import Footer from "@/components/footer";   

export const metadata = {
  title: "Digital Marketing Blog for Startups in India | Meta Master",
  description: "Read expert blogs on digital marketing, Meta ads, SEO, and startup growth strategies by Meta Master.",
  keywords: ["Meta Master Blog", "Digital Marketing Insights", "Startup Growth", "Branding Strategies", "Online Presence", "Marketing Tips", "India Startups","Instargam Growth and Stratergies","SEO tips for startups","Meta Ads best practices"],
};

export default function Home() {
  return (
    <>
       
       <Navbar/>
      <BlogsPage/>
         <CallToAction/>
       <Footer/> 
      </>
  );
}

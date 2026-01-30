
import Navbar from "@/components/navbar";
import BlogsPage from "./blogpage";

import CallToAction from "@/components/calltoaction";

import Footer from "@/components/footer";   


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

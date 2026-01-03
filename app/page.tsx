
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Services from "@/components/service";
import Image from "next/image";

export default function Home() {
  return (
    <>
       <Navbar/>
       <Hero/>
       <Services/>
      </>
  );
}

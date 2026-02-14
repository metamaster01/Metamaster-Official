import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SeoVsSemPage from "./seosem"; // adjust if filename is different

export const metadata = {
  title: "SEO vs SEM Guide | Meta Master",
  description:
    "Learn the key differences between SEO and SEM and discover which strategy is right for your business growth.",
  keywords: [
    "SEO vs SEM",
    "Search Engine Optimization",
    "Search Engine Marketing",
    "Digital Marketing Strategy",
    "Meta Master",
  ],
};

export default function Page() {
  return (
    <>
      <Navbar />
      <SeoVsSemPage />
      <Footer />
    </>
  );
}

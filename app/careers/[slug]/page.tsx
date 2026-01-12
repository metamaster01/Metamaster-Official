import CareerDetail from "@/components/careers/CareerDetailPage";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Newsletter from "@/components/newsletter";
import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: { slug: string };
};

/* ---------- SEO METADATA ---------- */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { data } = await supabase
    .from("jobs")
    .select("job_title, job_description, location")
    .eq("slug", slug)
    .eq("is_active", true)
    .single();

  if (!data) return notFound();

  return {
    title: `${data.job_title} | Careers at MetaMaster`,
    description: data.job_description.slice(0, 160),
    openGraph: {
      title: `${data.job_title} | MetaMaster`,
      description: data.job_description.slice(0, 160),
      type: "website",
    },
  };
}

/* ---------- PAGE ---------- */
export default function CareerDetailPage() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <CareerDetail />
      <Newsletter />
      <Footer />
    </div>
  );
}

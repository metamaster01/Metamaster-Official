import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CaseClient from "./CaseClient";
import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";
import Newsletter from "@/components/newsletter";
import OurWorksSection from "@/components/ourwork";

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!data) notFound();

  return (
    <>
      <Navbar />
      <CaseClient data={data} />
      <OurWorksSection/>
      <Newsletter/>
      <Footer />
    </>
  );
}

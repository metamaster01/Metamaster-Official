// import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";
// import CaseClient from "./CaseClient";
// import { supabase } from "@/lib/supabase";
// import { notFound } from "next/navigation";
// import Newsletter from "@/components/newsletter";
// import OurWorksSection from "@/components/ourwork";

// export default async function CasePage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;

//   const { data } = await supabase
//     .from("projects")
//     .select("*")
//     .eq("slug", slug)
//     .single();

//   if (!data) notFound();

//   return (
//     <>
//       <Navbar />
//       <CaseClient data={data} />
//       <OurWorksSection/>
//       <Newsletter/>
//       <Footer />
//     </>
//   );
// }




// app/our-works/[slug]/page.tsx
// Server component — fetches case study, generates metadata, handles 404

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getWorkBySlug, getAllWorkSlugs } from '@/lib/works'
import CaseStudyClient from './CaseStudyClient'
// import Navbar from '@/components/navbar'
// import Footer from '@/components/footer'

type Props = { params: Promise<{ slug: string }> }

export const revalidate = 60

export async function generateStaticParams() {
  const slugs = await getAllWorkSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const work = await getWorkBySlug(slug)
  if (!work) return { title: 'Project Not Found | MetaMaster' }

  return {
    title: `${work.title} | MetaMaster Case Study`,
    description: work.subtitle ?? work.tagline ?? undefined,
    openGraph: {
      title: `${work.title} | MetaMaster`,
      description: work.subtitle ?? work.tagline ?? undefined,
      images: work.cover_image_url ? [{ url: work.cover_image_url }] : [],
      type: 'article',
    },
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const work = await getWorkBySlug(slug)
  if (!work) notFound()

  return (
    <div>
{/* <Navbar /> */}
      <CaseStudyClient data={work} />
      {/* <Footer /> */}
    </div>
  )
  
  
  
}
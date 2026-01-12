// "use client";

// import { useEffect, useState } from "react";
// import { useParams, notFound } from "next/navigation";
// import { motion } from "framer-motion";
// import { supabase } from "@/lib/supabase";

// type Job = {
//   id: string;
//   job_title: string;
//   slug: string;
//   role: string;
//   department: string;
//   employment_type: string;
//   experience_min: number;
//   experience_max: number;
//   location: string;
//   is_remote: boolean;
//   job_description: string;
//   key_responsibilities: string;
//   requirements: string;
//   nice_to_have: string;
//   about_company: string;
// };

// type OtherJob = {
//   job_title: string;
//   slug: string;
// };

// export default function CareerDetail() {
//   const { slug } = useParams();
//   const [job, setJob] = useState<Job | null>(null);
//   const [otherJobs, setOtherJobs] = useState<OtherJob[]>([]);
//   const [loading, setLoading] = useState(true);

//   const [submitting, setSubmitting] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const [formData, setFormData] = useState({
//     full_name: "",
//     email: "",
//     phone: "",
//     linkedin_url: "",
//     portfolio_url: "",
//     total_experience: "",
//     preferred_location: "",
//     current_ctc: "",
//     expected_ctc: "",
//     resume: null as File | null,
//     terms: false,
//   });

//   useEffect(() => {
//     const fetchJob = async () => {
//       const { data } = await supabase
//         .from("jobs")
//         .select("*")
//         .eq("slug", slug)
//         .eq("is_active", true)
//         .single();

//       if (!data) {
//         notFound();
//       }

//       setJob(data);

//       const { data: others } = await supabase
//         .from("jobs")
//         .select("job_title, slug")
//         .eq("is_active", true)
//         .neq("slug", slug)
//         .limit(2);

//       setOtherJobs(others || []);
//       setLoading(false);
//     };

//     fetchJob();
//   }, [slug]);

//   if (loading || !job) return null;

//   const handleChange = (e: any) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     if (!job || !formData.resume) return;

//     try {
//       setSubmitting(true);

//       const resumePath = `resumes/${job.id}/${Date.now()}-${
//         formData.resume.name
//       }`;

//       const { error: uploadError } = await supabase.storage
//         .from("resumes")
//         .upload(resumePath, formData.resume);

//       if (uploadError) throw uploadError;

//       const { data: resumeUrl } = supabase.storage
//         .from("resumes")
//         .getPublicUrl(resumePath);

//       const { error } = await supabase.from("job_applications").insert({
//         job_id: job.id,
//         full_name: formData.full_name,
//         email: formData.email,
//         phone: formData.phone,
//         linkedin_url: formData.linkedin_url,
//         portfolio_url: formData.portfolio_url,
//         // total_experience: formData.total_experience,
//         // current_ctc: formData.current_ctc,
//         // expected_ctc: formData.expected_ctc,
//         total_experience: formData.total_experience
//           ? Number(formData.total_experience)
//           : null,

//         current_ctc: formData.current_ctc ? Number(formData.current_ctc) : null,

//         expected_ctc: formData.expected_ctc
//           ? Number(formData.expected_ctc)
//           : null,

//         preferred_location: formData.preferred_location,
//         resume_url: resumeUrl.publicUrl,
//         terms_accepted: formData.terms,
//       });

//       if (error) throw error;

//       setSuccess(true);
//       setFormData({
//         full_name: "",
//         email: "",
//         phone: "",
//         linkedin_url: "",
//         portfolio_url: "",
//         total_experience: "",
//         preferred_location: "",
//         current_ctc: "",
//         expected_ctc: "",
//         resume: null,
//         terms: false,
//       });
//     } catch (err) {
//       console.error(err);
//       alert("Something went wrong. Please try again.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   const renderList = (text: string) =>
//     text?.split("\n").map((item, i) => (
//       <li key={i} className="mb-2 text-gray-300">
//         {item.replace("- ", "")}
//       </li>
//     ));

//   return (
//     <article className="bg-black text-white relative overflow-hidden">
//       {/* Purple glossy background */}
//       <div className="absolute top-[-150px] right-[-150px] w-[500px] h-[500px] bg-purple-600/30 blur-[140px] rounded-full" />

    //   <div className="mt-14">
    //     {/* HEADER */}
    //     <header className="container mx-auto px-6 pt-24 pb-16 relative">
    //       <motion.h1
    //         initial={{ opacity: 0, y: 30 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         className="text-4xl md:text-5xl font-semibold mb-6"
    //       >
    //         {job.job_title}
    //       </motion.h1>

    //       <div className="flex flex-wrap gap-4 text-sm text-gray-300">
    //         <span>{job.location}</span>
    //         <span>•</span>
    //         <span>{job.employment_type}</span>
    //         <span>•</span>
    //         <span>
    //           {job.experience_min}–{job.experience_max} yrs
    //         </span>
    //       </div>
    //     </header>

    //     {/* CONTENT */}
    //     <section className="container mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-[70%_30%] gap-12">
    //       {/* LEFT */}
    //       <div>
    //         <Section title="Job Overview">{job.job_description}</Section>
    //         <Section title="About MetaMaster">{job.about_company}</Section>

    //         <Section title="Key Responsibilities">
    //           <ul>{renderList(job.key_responsibilities)}</ul>
    //         </Section>

    //         <Section title="Requirements">
    //           <ul>{renderList(job.requirements)}</ul>
    //         </Section>

    //         {job.nice_to_have && (
    //           <Section title="Nice to Have">
    //             <ul>{renderList(job.nice_to_have)}</ul>
    //           </Section>
    //         )}
    //       </div>

    //       {/* RIGHT */}
    //       <aside className="space-y-6">
    //         <div className="sticky top-28 bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur">
    //           <h3 className="text-lg font-medium mb-2">Apply Now</h3>
    //           <p className="text-sm text-gray-400 mb-4">
    //             Be part of MetaMaster’s growth journey.
    //           </p>
    //           <a
    //             href="#apply"
    //             className="block text-center bg-purple-600 hover:bg-purple-700 transition rounded-lg py-3 font-medium"
    //           >
    //             Apply for this role
    //           </a>
    //         </div>

    //         {otherJobs.length > 0 && (
    //           <div className="border border-white/10 rounded-xl p-6">
    //             <h4 className="text-sm text-gray-400 mb-4">Other Open Roles</h4>
    //             {otherJobs.map((j) => (
    //               <a
    //                 key={j.slug}
    //                 href={`/careers/${j.slug}`}
    //                 className="block py-2 border-b border-white/10 last:border-0 hover:text-purple-400 transition"
    //               >
    //                 {j.job_title}
    //               </a>
    //             ))}
    //           </div>
    //         )}
    //       </aside>
    //     </section>

//         {/* APPLICATION FORM */}
//         <section id="apply" className="container mx-auto px-6 pb-32 max-w-3xl">
//           <h2 className="text-3xl font-semibold mb-8">
//             Apply for this position
//           </h2>

//           <form className="space-y-6" onSubmit={handleSubmit}>
//             {/* Required */}
//             <Input
//               label="Full Name"
//               type="text"
//               required
//               value={formData.full_name}
//               onChange={handleChange}
//               name="full_name"
//             />

//             <Input label="Email" type="email" required />
//             <Input label="Phone" required />

//             {/* Optional */}
//             <Input label="LinkedIn URL" />
//             <Input label="Portfolio URL (optional)" />

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {/* <Input label="Total Experience (years)" /> */}
//               <Input
//                 label="Total Experience (years)"
//                 name="total_experience"
//                 type="number"
//                 step="0.5"
//                 onChange={handleChange}
//               />

//               <Input label="Preferred Location" />
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {/* <Input label="Current CTC" />
//               <Input label="Expected CTC" /> */}

//               <Input
//                 label="Current CTC"
//                 name="current_ctc"
//                 type="number"
//                 onChange={handleChange}
//               />

//               <Input
//                 label="Expected CTC"
//                 name="expected_ctc"
//                 type="number"
//                 onChange={handleChange}
//               />
//             </div>

//             <input
//               type="file"
//               required
//               accept=".pdf,.doc,.docx"
//               onChange={(e) =>
//                 setFormData((prev) => ({
//                   ...prev,
//                   resume: e.target.files?.[0] || null,
//                 }))
//               }
//             />

//             <label className="flex items-start gap-2 text-sm text-gray-400">
//               <input
//                 type="checkbox"
//                 checked={formData.terms}
//                 onChange={handleChange}
//                 name="terms"
//                 required
//               />
//               I agree to the Terms & Privacy Policy
//             </label>

//             <button
//               disabled={submitting}
//               className="w-full bg-purple-600 hover:bg-purple-700 transition py-4 rounded-lg font-medium disabled:opacity-50"
//             >
//               {submitting ? "Submitting..." : "Submit Application"}
//             </button>
//           </form>

//           {success && (
//             <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
//               <motion.div
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 className="bg-white text-black rounded-xl p-10 text-center max-w-sm"
//               >
//                 <div className="text-green-500 text-5xl mb-4">✓</div>
//                 <h3 className="text-xl font-semibold mb-2">
//                   Application Submitted
//                 </h3>
//                 <p className="text-sm text-gray-600">
//                   Thank you for applying. Our team will get back to you soon.
//                 </p>
//                 <button
//                   onClick={() => setSuccess(false)}
//                   className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-lg"
//                 >
//                   Close
//                 </button>
//               </motion.div>
//             </div>
//           )}
//         </section>
//       </div>
//     </article>
//   );
// }

// /* ---------------- HELPERS ---------------- */

// function Section({ title, children }: any) {
//   return (
//     <section className="mb-10">
//       <h2 className="text-xl font-medium mb-4">{title}</h2>
//       <div className="text-gray-300 leading-relaxed">{children}</div>
//     </section>
//   );
// }

// function Input({ label, type = "text", required = false }: any) {
//   return (
//     <div>
//       <label className="block text-sm mb-2">
//         {label} {required && <span className="text-purple-400">*</span>}
//       </label>
//       <input
//         type={type}
//         required={required}
//         className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
//       />
//     </div>
//   );
// }










"use client";

import { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";

/* ---------------- TYPES ---------------- */

type Job = {
  id: string;
  job_title: string;
  slug: string;
  role: string;
  department: string;
  employment_type: string;
  experience_min: number;
  experience_max: number;
  location: string;
  is_remote: boolean;
  job_description: string;
  key_responsibilities: string;
  requirements: string;
  nice_to_have: string;
  about_company: string;
};

type OtherJob = {
  job_title: string;
  slug: string;
};

/* ---------------- COMPONENT ---------------- */

export default function CareerDetail() {
  const { slug } = useParams();
  const [job, setJob] = useState<Job | null>(null);
  const [otherJobs, setOtherJobs] = useState<OtherJob[]>([]);
  const [loading, setLoading] = useState(true);

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    linkedin_url: "",
    portfolio_url: "",
    total_experience: "",
    preferred_location: "",
    current_ctc: "",
    expected_ctc: "",
    resume: null as File | null,
    terms: false,
  });

  /* ---------------- FETCH JOB ---------------- */

  useEffect(() => {
    const fetchJob = async () => {
      const { data } = await supabase
        .from("jobs")
        .select("*")
        .eq("slug", slug)
        .eq("is_active", true)
        .single();

      if (!data) notFound();

      setJob(data);

      const { data: others } = await supabase
        .from("jobs")
        .select("job_title, slug")
        .eq("is_active", true)
        .neq("slug", slug)
        .limit(2);

      setOtherJobs(others || []);
      setLoading(false);
    };

    fetchJob();
  }, [slug]);

  if (loading || !job) return null;

  /* ---------------- HANDLERS ---------------- */

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!job || !formData.resume) return;

    try {
      setSubmitting(true);

      const resumePath = `resumes/${job.id}/${Date.now()}-${formData.resume.name}`;

      const { error: uploadError } = await supabase.storage
        .from("resumes")
        .upload(resumePath, formData.resume);

      if (uploadError) throw uploadError;

      const { data: resumeUrl } = supabase.storage
        .from("resumes")
        .getPublicUrl(resumePath);

      const { error } = await supabase.from("job_applications").insert({
        job_id: job.id,
        full_name: formData.full_name,
        email: formData.email,
        phone: formData.phone,
        linkedin_url: formData.linkedin_url || null,
        portfolio_url: formData.portfolio_url || null,
        total_experience: formData.total_experience
          ? Number(formData.total_experience)
          : null,
        preferred_location: formData.preferred_location || null,
        current_ctc: formData.current_ctc
          ? Number(formData.current_ctc)
          : null,
        expected_ctc: formData.expected_ctc
          ? Number(formData.expected_ctc)
          : null,
        resume_url: resumeUrl.publicUrl,
        terms_accepted: formData.terms,
      });

      if (error) throw error;

      setSuccess(true);
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        linkedin_url: "",
        portfolio_url: "",
        total_experience: "",
        preferred_location: "",
        current_ctc: "",
        expected_ctc: "",
        resume: null,
        terms: false,
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const renderList = (text: string) =>
    text.split("\n").map((item, i) => (
      <li key={i} className="mb-2 text-gray-300">
        {item.replace("- ", "")}
      </li>
    ));

  /* ---------------- UI ---------------- */

  return (
    <article className="bg-black text-white relative overflow-hidden">
      <div className="absolute top-[-150px] right-[-150px] w-[500px] h-[500px] bg-purple-600/30 blur-[140px] rounded-full" />

            <div className="mt-14">
        {/* HEADER */}
        <header className="container mx-auto px-6 pt-24 pb-16 relative">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-semibold mb-6"
          >
            {job.job_title}
          </motion.h1>

          <div className="flex flex-wrap gap-4 text-sm text-gray-300">
            <span>{job.location}</span>
            <span>•</span>
            <span>{job.employment_type}</span>
            <span>•</span>
            <span>
              {job.experience_min}–{job.experience_max} yrs
            </span>
          </div>
        </header>

        {/* CONTENT */}
        <section className="container mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-[70%_30%] gap-12">
          {/* LEFT */}
          <div>
            <Section title="Job Overview">{job.job_description}</Section>
            <Section title="About MetaMaster">{job.about_company}</Section>

            <Section title="Key Responsibilities">
              <ul>{renderList(job.key_responsibilities)}</ul>
            </Section>

            <Section title="Requirements">
              <ul>{renderList(job.requirements)}</ul>
            </Section>

            {job.nice_to_have && (
              <Section title="Nice to Have">
                <ul>{renderList(job.nice_to_have)}</ul>
              </Section>
            )}
          </div>

          {/* RIGHT */}
          <aside className="space-y-6">
            <div className="sticky top-28 bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur">
              <h3 className="text-lg font-medium mb-2">Apply Now</h3>
              <p className="text-sm text-gray-400 mb-4">
                Be part of MetaMaster’s growth journey.
              </p>
              <a
                href="#apply"
                className="block text-center bg-purple-600 hover:bg-purple-700 transition rounded-lg py-3 font-medium"
              >
                Apply for this role
              </a>
            </div>

            {otherJobs.length > 0 && (
              <div className="border border-white/10 rounded-xl p-6">
                <h4 className="text-sm text-gray-400 mb-4">Other Open Roles</h4>
                {otherJobs.map((j) => (
                  <a
                    key={j.slug}
                    href={`/careers/${j.slug}`}
                    className="block py-2 border-b border-white/10 last:border-0 hover:text-purple-400 transition"
                  >
                    {j.job_title}
                  </a>
                ))}
              </div>
            )}
          </aside>
        </section>
        </div>

      <section id="apply" className="container mx-auto px-6 pb-32 max-w-3xl">
        <h2 className="text-3xl font-semibold mb-8">
          Apply for this position
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <Input label="Full Name" name="full_name" value={formData.full_name} onChange={handleChange} required />
          <Input label="Email" type="email" name="email" value={formData.email} onChange={handleChange} required />
          <Input label="Phone" name="phone" value={formData.phone} onChange={handleChange} required />

          <Input label="LinkedIn URL" name="linkedin_url" value={formData.linkedin_url} onChange={handleChange} />
          <Input label="Portfolio URL" name="portfolio_url" value={formData.portfolio_url} onChange={handleChange} />

          <Input label="Total Experience (years)" name="total_experience" type="number" value={formData.total_experience} onChange={handleChange} />
          <Input label="Preferred Location" name="preferred_location" value={formData.preferred_location} onChange={handleChange} />

          <Input label="Current CTC" name="current_ctc" type="number" value={formData.current_ctc} onChange={handleChange} />
          <Input label="Expected CTC" name="expected_ctc" type="number" value={formData.expected_ctc} onChange={handleChange} />

          <input
            type="file"
            required
            accept=".pdf,.doc,.docx"
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                resume: e.target.files?.[0] || null,
              }))
            }
          />

          <label className="flex gap-2 text-sm text-gray-400">
            <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} required />
            I agree to the Terms & Privacy Policy
          </label>

          <button disabled={submitting} className="w-full bg-purple-600 py-4 rounded-lg">
            {submitting ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </section>

      {success && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white text-black p-6 rounded-xl text-center">
            <div className="text-green-500 text-5xl mb-4">✓</div>
            <h3 className="text-xl font-semibold">Application Submitted</h3>
            <p className="text-gray-600 mt-2">Thank you for applying. Our team will get back to you soon.</p>
            <button onClick={() => setSuccess(false)} className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-lg">
              Close
            </button>
          </motion.div>
        </div>
      )}
    </article>
  );
}

/* ---------------- REUSABLE INPUT ---------------- */

function Input({ label, ...props }: any) {
  return (
    <div>
      <label className="block text-sm mb-2">{label}</label>
      <input
        {...props}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-600 outline-none"
      />
    </div>
  );
}

function Section({ title, children }: any) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-medium mb-4">{title}</h2>
      <div className="text-gray-300 leading-relaxed">{children}</div>
    </section>
  );
}

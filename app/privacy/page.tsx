"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";

const Section = ({ title, children }: any) => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="space-y-4"
  >
    <h2 className="text-xl sm:text-2xl font-semibold text-white">
      {title}
    </h2>
    <div className="text-sm leading-relaxed text-white/75 space-y-3">
      {children}
    </div>
  </motion.section>
);

export default function PrivacyPolicyPage() {
  return (
    <>
    <Navbar/>
    <main className="min-h-screen bg-gradient-to-r from-[#12001f] via-[#0e001a] to-[#12001f] text-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-36 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl font-semibold"
        >
          Privacy Policy
        </motion.h1>

        <p className="mt-4 max-w-2xl text-sm text-white/70">
          Your privacy matters to us. This policy explains how MetaMaster
          collects, uses, and protects your personal information.
        </p>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 pb-32 space-y-12">

        <Section title="1. Information We Collect">
          <p>
            We may collect personal information including name, email address,
            phone number, company details, and project-related information when
            you submit forms or contact us.
          </p>
        </Section>

        <Section title="2. How We Use Your Information">
          <p>
            Your information is used to:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Respond to enquiries and requests</li>
            <li>Provide and improve our services</li>
            <li>Communicate project updates</li>
            <li>Send important service-related notifications</li>
          </ul>
        </Section>

        <Section title="3. Data Protection">
          <p>
            We implement industry-standard security measures to protect your
            data from unauthorized access, disclosure, or misuse.
          </p>
        </Section>

        <Section title="4. Cookies">
          <p>
            MetaMaster may use cookies and analytics tools to enhance user
            experience, understand website usage, and improve performance.
          </p>
        </Section>

        <Section title="5. Third-Party Services">
          <p>
            We may use third-party tools such as analytics, email, or CRM
            platforms. These providers are bound by their own privacy policies.
          </p>
        </Section>

        <Section title="6. Data Sharing">
          <p>
            We do not sell, trade, or rent your personal data to third parties.
            Data is shared only when legally required or necessary to provide
            services.
          </p>
        </Section>

        <Section title="7. Your Rights">
          <p>
            You have the right to request access, correction, or deletion of
            your personal information by contacting us.
          </p>
        </Section>

        <Section title="8. Policy Updates">
          <p>
            MetaMaster reserves the right to update this Privacy Policy at any
            time. Changes will be reflected on this page.
          </p>
        </Section>

        <Section title="9. Contact Us">
          <p>
            For privacy-related concerns, contact:
            <br />
            <strong>Email:</strong> aman@metamaster.in
          </p>
        </Section>

      </section>
    </main>
    <Footer/>
    </>
  );
}

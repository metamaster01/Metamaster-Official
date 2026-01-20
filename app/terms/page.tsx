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

export default function TermsPage() {
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
          Terms & Conditions
        </motion.h1>

        <p className="mt-4 max-w-2xl text-sm text-white/70">
          These terms govern your access to and use of MetaMaster’s website,
          services, and digital platforms.
        </p>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 pb-32 space-y-12">

        <Section title="1. Acceptance of Terms">
          <p>
            By accessing or using the MetaMaster website (metamaster.in),
            you agree to be bound by these Terms & Conditions, all applicable
            laws, and regulations. If you do not agree, you must discontinue
            use of the website immediately.
          </p>
        </Section>

        <Section title="2. Services">
          <p>
            MetaMaster provides digital marketing, branding, creative strategy,
            consulting, and related services. All services are subject to
            project-specific agreements, timelines, and deliverables.
          </p>
        </Section>

        <Section title="3. Intellectual Property">
          <p>
            All content, designs, visuals, logos, text, graphics, videos,
            animations, and code on this website are the intellectual property
            of MetaMaster unless otherwise stated.
          </p>
          <p>
            Unauthorized reproduction, distribution, or commercial use is
            strictly prohibited.
          </p>
        </Section>

        <Section title="4. User Responsibilities">
          <p>
            You agree not to misuse the website, submit false information,
            attempt unauthorized access, or engage in activities that may harm
            MetaMaster or its users.
          </p>
        </Section>

        <Section title="5. Payments & Refunds">
          <p>
            Payments for services are governed by individual project contracts.
            Refunds, if applicable, will be evaluated on a case-by-case basis
            and are not guaranteed.
          </p>
        </Section>

        <Section title="6. Limitation of Liability">
          <p>
            MetaMaster shall not be liable for any indirect, incidental,
            consequential, or special damages arising from the use of our
            website or services.
          </p>
        </Section>

        <Section title="7. Third-Party Links">
          <p>
            Our website may contain links to third-party websites. MetaMaster
            is not responsible for the content, policies, or practices of
            external sites.
          </p>
        </Section>

        <Section title="8. Termination">
          <p>
            We reserve the right to suspend or terminate access to our website
            or services without prior notice if these terms are violated.
          </p>
        </Section>

        <Section title="9. Governing Law">
          <p>
            These Terms & Conditions shall be governed by and interpreted in
            accordance with the laws of India.
          </p>
        </Section>

        <Section title="10. Contact Information">
          <p>
            For any questions regarding these terms, contact us at:
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

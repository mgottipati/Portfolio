"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/case-studies";

export function About() {
  return (
    <section id="about" className="border-t border-border px-6 py-24 md:px-8">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl font-normal tracking-tight text-white md:text-5xl"
        >
          About
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 space-y-6 text-lg leading-relaxed text-accent-muted"
        >
          <p>{siteConfig.about}</p>
          <p className="text-base text-accent-dim">
            Education: B.S. Computer Science, University of Wisconsin–Madison (2024–2028).
            Certifications: AWS Certified Cloud Practitioner, iOS & Android App Developer, AI Scholars.
            Awards: National Merit Semifinalist, NCWIT National Award Finalist & Regional Winner, FTC State Robotics Think & Inspire.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

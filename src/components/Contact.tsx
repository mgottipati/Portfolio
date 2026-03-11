"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/case-studies";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border px-6 py-24 md:px-8">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl font-normal tracking-tight text-white md:text-5xl"
        >
          Contact
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 flex flex-wrap gap-8"
        >
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-mono text-accent-muted underline-offset-4 transition hover:text-accent hover:underline"
          >
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-accent-muted underline-offset-4 transition hover:text-accent hover:underline"
          >
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-accent-muted underline-offset-4 transition hover:text-accent hover:underline"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}

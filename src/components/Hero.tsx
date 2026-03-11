"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/case-studies";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col justify-end px-6 pb-24 pt-32 md:min-h-[85vh] md:justify-center md:px-8 md:pb-32">
      <div className="mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 font-mono text-xs uppercase tracking-widest text-accent-dim md:mb-6"
        >
          Portfolio
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl font-normal tracking-tight text-white md:text-7xl lg:text-8xl"
        >
          {siteConfig.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-2xl text-lg text-accent-muted md:mt-6 md:text-xl"
        >
          {siteConfig.tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 flex flex-wrap gap-6"
        >
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-accent-dim underline-offset-4 transition hover:text-accent hover:underline"
          >
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-accent-dim underline-offset-4 transition hover:text-accent hover:underline"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}

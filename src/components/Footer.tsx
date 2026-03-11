"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 md:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-accent-dim"
        >
          © {new Date().getFullYear()}
        </motion.p>
      </div>
    </footer>
  );
}

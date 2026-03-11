"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import type { CaseStudy } from "@/types/case-study";

type CaseStudyModalProps = {
  project: CaseStudy | null;
  onClose: () => void;
};

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleEscape = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  const modalContent = (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />
          <motion.dialog
            open={!!project}
            initial={{ opacity: 0, scale: 0.96, x: "-50%", y: "-50%" }}
            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
            exit={{ opacity: 0, scale: 0.96, x: "-50%", y: "-50%" }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
            className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl rounded-xl border border-border bg-surface-elevated p-6 shadow-xl outline-none md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="absolute left-0 top-0 h-px w-full opacity-60"
              style={project.accent ? { backgroundColor: project.accent } : undefined}
            />
            <div className="max-h-[80vh] overflow-y-auto">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-mono text-xs text-accent-dim">
                    {project.role}
                    {project.period && ` · ${project.period}`}
                  </span>
                  <h2 id="case-study-title" className="mt-1 font-display text-2xl font-normal tracking-tight text-white md:text-3xl">
                    {project.title}
                  </h2>
                  <p className="mt-1 text-sm text-accent-muted">{project.tagline}</p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="shrink-0 rounded p-1 text-accent-muted transition hover:bg-white/10 hover:text-accent focus:outline-none focus:ring-2 focus:ring-white/20"
                  aria-label="Close"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-accent-muted/90">
                {project.description}
              </p>
              {project.outcomes && project.outcomes.length > 0 && (
                <div className="mt-6">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-accent-dim">
                    Outcomes
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {project.outcomes.map((outcome, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm leading-relaxed text-accent-muted"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-dim" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded bg-white/5 px-2 py-0.5 font-mono text-xs text-accent-dim"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-4">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent-muted underline-offset-4 transition hover:text-accent"
                  >
                    Repo
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent-muted underline-offset-4 transition hover:text-accent"
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
          </motion.dialog>
        </>
      )}
    </AnimatePresence>
  );

  if (typeof document === "undefined") return null;
  return createPortal(modalContent, document.body);
}

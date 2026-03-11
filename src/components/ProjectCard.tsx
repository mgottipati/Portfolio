"use client";

import { motion } from "framer-motion";
import type { CaseStudy } from "@/types/case-study";

const gridCols: Record<CaseStudy["gridSize"], string> = {
  small: "md:col-span-1",
  medium: "md:col-span-2",
  large: "md:col-span-2 md:row-span-2",
  wide: "md:col-span-3",
};

type ProjectCardProps = {
  project: CaseStudy;
  index: number;
  onSelect: () => void;
};

export function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  const accentStyle = project.accent ? { borderColor: project.accent } : undefined;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), onSelect())}
      className={`group relative cursor-pointer overflow-hidden rounded-xl border border-border bg-surface-elevated p-6 transition-colors hover:border-border-hover hover:bg-surface-muted focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-surface ${gridCols[project.gridSize]}`}
    >
      <div
        className="absolute left-0 top-0 h-px w-full opacity-60 transition-opacity group-hover:opacity-100"
        style={accentStyle}
      />
      <div className="flex h-full flex-col">
        <span className="font-mono text-xs text-accent-dim">
          {project.role}
          {project.period && ` · ${project.period}`}
        </span>
        <h3 className="mt-2 font-display text-2xl font-normal tracking-tight text-white md:text-3xl">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-accent-muted">{project.tagline}</p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-accent-muted/90">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded bg-white/5 px-2 py-0.5 font-mono text-xs text-accent-dim"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex gap-4" onClick={(e) => e.stopPropagation()}>
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
    </motion.article>
  );
}

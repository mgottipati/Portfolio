"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { caseStudies } from "@/data/case-studies";
import type { CaseStudy } from "@/types/case-study";
import { ProjectCard } from "./ProjectCard";
import { CaseStudyModal } from "./CaseStudyModal";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);

  return (
    <section id="work" className="border-t border-border px-6 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl font-normal tracking-tight text-white md:text-5xl"
        >
          Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 max-w-xl text-accent-muted"
        >
          Selected projects and case studies — full-stack, AI research, and robotics.
        </motion.p>

        <div className="mt-16 grid grid-flow-dense grid-cols-1 gap-6 md:grid-cols-3 md:gap-6 md:auto-rows-[minmax(200px,auto)]">
          {caseStudies.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>
      <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

/**
 * Case study / project data model.
 * Used for resume-driven projects and GitHub highlights.
 */

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  role: string;
  period?: string;
  description: string;
  outcomes?: string[];
  tech: string[];
  link?: string;
  repo?: string;
  /** Bento grid: "small" | "medium" | "large" | "wide" */
  gridSize: "small" | "medium" | "large" | "wide";
  /** Optional visual accent (CSS color or Tailwind class) */
  accent?: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  about: string;
  email: string;
  github: string;
  linkedin: string;
  resumePdf?: string;
}

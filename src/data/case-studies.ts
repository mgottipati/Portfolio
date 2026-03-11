import type { CaseStudy, SiteConfig } from "@/types/case-study";

export const siteConfig: SiteConfig = {
  name: "Manasvi Gottipati",
  title: "Computer Science Student",
  tagline: "Full-stack development & AI research — building intelligent systems that scale.",
  about: `Computer Science student with expertise in full-stack development and AI research. I've engineered a full-stack employee onboarding portal that streamlined data management for 500+ corporate clients at a local consultancy, and contributed to research on AI-driven medical image analysis for brain MRIs at the University of Washington. As an AWS Certified Cloud Practitioner, I focus on cloud architecture and machine learning to build end-to-end applications that automate workflows, generate predictive insights, and optimize performance.`,
  email: "minnugot@gmail.com",
  github: "https://github.com/mgottipati",
  linkedin: "https://linkedin.com/in/manasvi-gottipati",
};

export const caseStudies: CaseStudy[] = [
  {
    id: "facial-expression",
    slug: "facial-expression-detection",
    title: "Facial Expression Detection",
    tagline: "Real-time emotion recognition via webcam",
    role: "Personal Project",
    description:
    "Engineered a high-performance computer vision application that performs real-time emotional state classification from live webcam feeds. The system utilizes a Convolutional Neural Network (CNN) architecture to analyze facial geometry and 68 distinct landmarks, mapping visual data to seven primary emotional states with low-latency inference. Optimized the preprocessing pipeline to handle varying lighting conditions and facial orientations, ensuring robust performance in real-world environments.",
  outcomes: [
    "Implemented a real-time facial landmark detection system using Dlib and OpenCV.",
    "Trained and deployed a Convolutional Neural Network (CNN) for multi-class emotional classification.",
    "Developed a multi-threaded video processing pipeline to maintain high FPS during live model inference.",
    "Integrated a localized feedback UI to visualize confidence scores for each detected emotional state."
  ],
  tech: ["Python", "TensorFlow/Keras", "OpenCV", "Dlib", "NumPy"],
    gridSize: "large",
    accent: "#6366f1",
  },
  {
    id: "autonomous-robotics",
    slug: "autonomous-robotics-navigation",
    title: "Autonomous Robotics Navigation",
    tagline: "AprilTag-based localization & game-piece targeting",
    role: "FTC Robotics",
    description:
      "Implemented camera and color sensor system in Java for autonomous robot localization using AprilTag technology. Built vision-based targeting for precise game-piece manipulation and optimized power distribution and code for efficient autonomous runs.",
    outcomes: [
      "Vision-based localization",
      "Precise autonomous game-piece manipulation",
    ],
    tech: ["Java", "AprilTag", "Computer Vision", "Robotics"],
    gridSize: "medium",
    accent: "#22c55e",
  },
  {
    id: "onboarding-portal",
    slug: "employee-onboarding-portal",
    title: "Employee Onboarding Portal",
    tagline: "Full-stack portal for 500+ corporate clients",
    role: "Full Stack Developer Intern · SyllogisTeks",
    period: "May 2024 – Aug 2024",
    description:
      "Developed and launched a C# and ASP.NET Core MVC employee onboarding portal to streamline operations and data management. Designed and implemented SQL databases for client data and user authentication; collaborated on website redesign and agile delivery.",
    outcomes: [
      "Streamlined data management for 500+ clients",
      "SQL-backed auth and client data",
      "Agile collaboration with cross-functional teams",
    ],
    tech: ["C#", "ASP.NET Core", "SQL", "MVC", "Git"],
    gridSize: "wide",
    accent: "#f59e0b",
  },
  {
    id: "ai-medical-research",
    slug: "ai-medical-image-analysis",
    title: "AI Medical Image Analysis",
    tagline: "Brain MRI analysis with AI",
    role: "AI Research Assistant · University of Washington",
    period: "May 2023 – Aug 2023",
    description:
      "Collaborated with university professors on a research project for medical image analysis. Contributed to a web-based tool that uses AI to analyze brain MRI scans, including data processing and testing to ensure analytical accuracy and reduced error rates.",
    outcomes: [
      "Web-based AI tool for brain MRI analysis",
      "Data processing and model testing",
      "Improved analytical precision",
    ],
    tech: ["Python", "Machine Learning", "Medical Imaging", "Web"],
    gridSize: "large",
    accent: "#ec4899",
  },
  {
    id: "thrift-stylist",
    slug: "thrift-stylist",
    title: "ThriftStylist",
    tagline: "Styling & thrift discovery",
    role: "Side Project",
    description:
      "Web app for discovering and styling with thrift finds. Built with modern front-end tooling.",
    tech: ["CSS", "Web"],
    gridSize: "small",
    repo: "https://github.com/mgottipati/ThriftStylist",
  },
  {
    id: "canopy",
    slug: "canopy",
    title: "Canopy",
    tagline: "Interactive experience",
    role: "Side Project",
    description:
    "Real-time social platform using Firebase WebSockets and Geolocation API to connect students for local study sessions. Features a gamified focus timer and instant P2P messaging.",
  tech: ["Firebase", "JavaScript", "Geolocation API"],
    gridSize: "small",
    link: "https://canopy-lake-eight.vercel.app",
    repo: "https://github.com/mgottipati/Canopy",
  },
  {
    id: "star-fairy",
    slug: "star-fairy",
    title: "StarFairy",
    tagline: "Browser game",
    role: "Side Project",
    description: "A JavaScript browser game.",
    tech: ["JavaScript"],
    gridSize: "small",
    repo: "https://github.com/mgottipati/StarFairy",
  },
  {
    id: "balloon-buster",
    slug: "balloon-buster",
    title: "Balloon Buster",
    tagline: "Game project",
    role: "Side Project",
    description: "JavaScript game project.",
    tech: ["JavaScript"],
    gridSize: "small",
    repo: "https://github.com/mgottipati/Balloon-Buster",
  },
];

import { FiTarget, FiTrendingUp, FiShield, FiUsers } from "react-icons/fi";
import type { IconType } from "react-icons";

export interface Highlight {
  icon: IconType;
  title: string;
  description: string;
}

export interface Education {
  degree: string;
  school: string;
  year: string;
}

export interface AboutData {
  professionalSummary: {
    title: string;
    paragraphs: string[];
    coreValues: string[];
  };
  education: Education;
  highlights: Highlight[];
  passions: string[];
}

export const aboutData: AboutData = {
  professionalSummary: {
    title: "Professional Summary",
    paragraphs: [
      "I'm a Tech Lead specializing in React Native & ReactJS with a proven track record of leading digital transformation projects for Fortune 500 clients. My expertise spans the complete mobile app lifecycle - from solution design and architecture to deployment and team leadership.",
      "I believe in building applications that are not just functional, but accessible, secure, and delightful to use. My approach combines technical excellence with strong leadership values - fostering collaboration, mentoring teams, and delivering business value through innovation. Having served global clients in telecom, real estate, productivity, and e-Commerce domains, I bring a wealth of cross-industry experience.",
    ],
    coreValues: [
      "Commitment",
      "Reliability",
      "Integrity",
      "Kindness",
      "Continuous Learning",
    ],
  },
  education: {
    degree: "B.Tech, Information Technology",
    school: "Bharat Institute of Technology (UPTU)",
    year: "2004 - 2008",
  },
  highlights: [
    {
      icon: FiTarget,
      title: "Solution Design",
      description:
        "Expertise in cross-platform mobile app solution design with focus on scalability and modularity.",
    },
    {
      icon: FiTrendingUp,
      title: "Digital Transformation",
      description:
        "Strong track record of leading digital transformation projects for global clients in telecom, real estate, and enterprise domains.",
    },
    {
      icon: FiShield,
      title: "Security First",
      description:
        "Proficient in developing and implementing scalable, modular, and secure enterprise applications with OWASP compliance.",
    },
    {
      icon: FiUsers,
      title: "Team Leadership",
      description:
        "Led teams effectively, providing mentorship and training to enhance technical and interpersonal skills.",
    },
  ],
  passions: [
    "Problem Solving",
    "Decision Making",
    "AI Driven Development",
    "Component Driven Development",
    "Accessibility",
    "Code Quality",
    "Modularity",
    "Scalability",
    "Reliability",
    "Security-First Mindset",
    "Leadership & Learning",
  ],
};

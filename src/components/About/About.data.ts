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
      "I architect and deliver enterprise mobile applications that drive real business impact. With 15+ years in IT and 9+ years at Tech Mahindra, I've led end-to-end delivery for Fortune 500 clients including Verizon, Wolters Kluwer, and Sunrise Communications — specializing in transforming complex business requirements into scalable, secure, and accessible mobile solutions.",
      "My track record speaks through results: 99% security vulnerability remediation at Verizon (8960+ risk points eliminated), award-winning digital onboarding solution for Sunrise (36 processes digitized), and a viral utility app with 2M+ downloads in two weeks. I lead teams up to 12 members with full project ownership, having earned 15+ awards including POB, Bravo, Star Award, Standing Ovation, Digital Warrior EMEA Excellence and more.",
      "I believe in building applications that are not just functional, but accessible, secure, and delightful to use. My approach combines technical excellence with strong leadership — fostering collaboration, mentoring 50+ developers, and delivering measurable business value through innovation across telecom, enterprise, real estate, and e-Commerce domains.",
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

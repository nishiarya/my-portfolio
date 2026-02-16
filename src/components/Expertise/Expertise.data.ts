import {
  FiCpu,
  FiZap,
  FiLayers,
  FiShield,
  FiStar,
} from "react-icons/fi";
import type { IconType } from "react-icons";

// Import banner images
import bannerB1 from "../../assets/banners/banner_b1_linkedin-enterprise-tallent.png";
import bannerB2 from "../../assets/banners/banner_b2_linkedin-ai-driven.png";
import bannerB3 from "../../assets/banners/banner_b3_linkedin-cross-platform.png";
import bannerB4 from "../../assets/banners/banner_b4_linkedin-performance.png";
import bannerB5 from "../../assets/banners/banner_b5_linkedin-enterprise.png";

export interface ExpertiseBanner {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: IconType;
  highlights: string[];
  color: string;
}

export const expertiseBanners: ExpertiseBanner[] = [
  {
    id: "enterprise-talent",
    title: "Enterprise Mobile Architect",
    subtitle: "All Skills Combined",
    description:
      "15+ years of experience building enterprise-grade mobile applications with React Native, delivering secure, scalable, and high-performance solutions for Fortune 500 clients.",
    image: bannerB1,
    icon: FiStar,
    highlights: [
      "15.6+ Years Experience",
      "17+ Industry Awards",
      "Fortune 500 Clients",
      "2M+ App Downloads",
    ],
    color: "#8b5cf6",
  },
  {
    id: "ai-driven",
    title: "AI-Driven Development",
    subtitle: "Building Smarter Apps",
    description:
      "Leveraging cutting-edge AI tools to accelerate development cycles, improve code quality, and build intelligent applications that adapt to user needs.",
    image: bannerB2,
    icon: FiCpu,
    highlights: [
      "AI-Powered Coding",
      "Smart Automation",
      "Intelligent Features",
      "Rapid Development",
    ],
    color: "#a855f7",
  },
  {
    id: "cross-platform",
    title: "Cross-Platform Architecture",
    subtitle: "Build Once, Deploy Everywhere",
    description:
      "Expert in React Native architecture delivering 90% code reuse across iOS, Android, and Web platforms while maintaining native performance and user experience.",
    image: bannerB3,
    icon: FiLayers,
    highlights: [
      "90% Code Reuse",
      "iOS & Android",
      "Web Support",
      "Native Performance",
    ],
    color: "#06b6d4",
  },
  {
    id: "performance",
    title: "Performance & Scalability",
    subtitle: "Building Apps Users Love",
    description:
      "Obsessed with performance optimization - achieving 60 FPS animations, sub-second load times, and efficient memory management for smooth user experiences.",
    image: bannerB4,
    icon: FiZap,
    highlights: [
      "60 FPS Animations",
      "< 1s Load Times",
      "Memory Optimized",
      "Scalable Architecture",
    ],
    color: "#f59e0b",
  },
  {
    id: "enterprise-security",
    title: "Enterprise-Ready & Secure",
    subtitle: "Secure • Compliant • Accessible",
    description:
      "Building enterprise applications with security-first mindset, ensuring compliance with SOC2, GDPR, and WCAG 2.1 accessibility standards.",
    image: bannerB5,
    icon: FiShield,
    highlights: [
      "99% Vulnerability Fix",
      "SOC2 Compliant",
      "WCAG 2.1 Accessible",
      "Offline-First Ready",
    ],
    color: "#10b981",
  },
];

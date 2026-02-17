import type { IconType } from "react-icons";
import { FiShield, FiSmartphone, FiGlobe, FiUsers } from "react-icons/fi";

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  icon: IconType;
  challenge: string;
  solution: string;
  impact: string[];
  technologies: string[];
  metrics: {
    label: string;
    value: string;
    icon?: string;
  }[];
  image?: string;
  color: string;
}

// Placeholder case studies - User will provide detailed content
export const caseStudies: CaseStudy[] = [
  {
    id: "verizon-security",
    title: "Enterprise Security Remediation",
    client: "Verizon - US",
    icon: FiShield,
    challenge:
      "Multiple web applications had critical security vulnerabilities identified through Fortify, Black Duck, ZAP, and Pen Testing, putting enterprise data at risk.",
    solution:
      "Led comprehensive security remediation effort across multiple web app brands, implementing OWASP best practices, fixing code vulnerabilities, and establishing security governance.",
    impact: [
      "Achieved 99% vulnerability remediation rate",
      "Zero critical security incidents post-remediation",
      "Established security review process for future releases",
      "Trained team on secure coding practices",
    ],
    technologies: [
      "AEM-ReactJS",
      "Security Tools",
      "SAST/DAST",
      "Fortify",
      "SCA-Black Duck",
      "ZAP",
    ],
    metrics: [
      { label: "Vulnerabilities Fixed", value: "99%" },
      { label: "Apps Secured", value: "4+" },
      { label: "Time to Remediate", value: "6m" },
      { label: "Critical Issues", value: "0" },
    ],
    color: "#6366f1",
  },
  {
    id: "sunrise-id-checker",
    title: "Digital Onboarding Revolution",
    client: "Sunrise - Switzerland",
    icon: FiSmartphone,
    challenge:
      "Traditional customer onboarding was paper-heavy, time-consuming, and error-prone. Needed to digitize identification processes while maintaining regulatory compliance.",
    solution:
      "Built first-of-its-kind digital onboarding solution combining ID scanning, facial recognition, digital signatures, and document scanning in a seamless mobile experience.",
    impact: [
      "Digitized 36 business processes (20 new + 16 existing)",
      "Significantly reduced onboarding time",
      "Achieved exceptional customer satisfaction",
      "Won multiple industry awards",
      "Huge product improvement support for TP PXL Vision",
    ],
    technologies: [
      "iOS",
      "Objective-C",
      "ID Scanning",
      "Document Scanning",
      "Face Recognition",
      "Document Signature",
      "OCR Technology",
      "Adobe Analytics",
      "Logging & Monitoring",
    ],
    metrics: [
      { label: "Processes Digitized", value: "36" },
      { label: "Cost Reduction", value: "60%" },
      { label: "Customer Satisfaction", value: "95%" },
      { label: "Awards Won", value: "3" },
    ],
    color: "#8b5cf6",
  },
  {
    id: "telecom-selfcare",
    title: "Telecom Self-Care Platform",
    client: "MySunrise & MyLebara",
    icon: FiGlobe,
    challenge:
      "Customers needed a unified platform to manage their telecom accounts, view usage, make payments, and access support without calling customer service.",
    solution:
      "Architected comprehensive self-care mobile apps with real-time account management, integrated analytics, and seamless payment processing.",
    impact: [
      "Reduced customer support calls by 40%",
      "Increased digital engagement by 65%",
      "Improved billing accuracy and transparency",
      "Enhanced customer retention rates",
    ],
    technologies: [
      "React Native",
      "Redux",
      "TypeScript",
      "Storybook",
      "Adobe Analytics",
      "GraphQL",
      "REST APIs",
      "Logging & Monitoring",
    ],
    metrics: [
      { label: "Support Calls Reduced", value: "40%" },
      { label: "User Engagement", value: "+65%" },
      { label: "App Rating", value: "4.5★" },
      { label: "Active Users", value: "500K+" },
    ],
    color: "#a855f7",
  },
  {
    id: "accessibility-framework",
    title: "Enterprise Accessibility Framework",
    client: "Tech Mahindra - Internal Initiative",
    icon: FiUsers,
    challenge:
      "Building accessible applications at enterprise scale is challenging. Every organization needs consistent branding while meeting legal compliance (ADA, WCAG 2.1/2.2, Section 508). How do we create a reusable, accessibility-compliant component ecosystem that works across ALL client applications?",
    solution:
      "Designed and implemented a comprehensive Accessibility Framework using Component-Driven Development (CDD) with Storybook and Atomic Design pattern. Built reusable UI components with native accessibility APIs (VoiceOver for iOS, TalkBack for Android) baked in from Day One.",
    impact: [
      "Created reusable component library with 10+ accessible components",
      "Achieved WCAG 2.1/2.2, ADA, Section 508 compliance",
      "Enabled 15%+ additional user reach (1B+ people with disabilities globally)",
      "Established accessibility standards as part of Definition of Done",
      "Built living documentation with interactive Storybook catalog",
      "Presented framework to IBU Head - ASCEND Leadership Program",
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "Storybook",
      "Atomic Design",
      "VoiceOver (iOS)",
      "TalkBack (Android)",
      "ARIA",
      "WCAG 2.1",
    ],
    metrics: [
      { label: "Components Built", value: "10+" },
      { label: "Platform Support", value: "3" },
      { label: "User Reach Increase", value: "15%" },
      { label: "Compliance Standards", value: "3" },
    ],
    color: "#10b981",
  },
];

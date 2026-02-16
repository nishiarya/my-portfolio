import type { IconType } from "react-icons";
import { FiShield, FiSmartphone, FiGlobe } from "react-icons/fi";

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
    technologies: ["React", "Security Tools", "SAST/DAST", "Fortify", "Black Duck", "ZAP"],
    metrics: [
      { label: "Vulnerabilities Fixed", value: "99%" },
      { label: "Apps Secured", value: "15+" },
      { label: "Time to Remediate", value: "3 months" },
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
    ],
    technologies: ["React Native", "ID Scanning", "Face Recognition", "Digital Signature", "OCR"],
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
    technologies: ["React Native", "Redux", "Adobe Analytics", "Bugsnag", "REST APIs"],
    metrics: [
      { label: "Support Calls Reduced", value: "40%" },
      { label: "User Engagement", value: "+65%" },
      { label: "App Rating", value: "4.5★" },
      { label: "Active Users", value: "500K+" },
    ],
    color: "#a855f7",
  },
];

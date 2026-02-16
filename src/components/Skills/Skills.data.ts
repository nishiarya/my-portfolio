import { FiSmartphone, FiCode, FiLayers, FiShield } from "react-icons/fi";
import type { IconType } from "react-icons";

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  icon: IconType;
  color: string;
  skills: Skill[];
}

export interface TechnicalTools {
  [category: string]: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Primary Skills",
    icon: FiSmartphone,
    color: "#6366f1",
    skills: [
      { name: "React Native", level: 95 },
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 75 },
      { name: "React.js", level: 70 },
    ],
  },
  {
    title: "Mobile Development",
    icon: FiLayers,
    color: "#8b5cf6",
    skills: [
      { name: "iOS (Swift/Obj-C)", level: 85 },
      { name: "Apple Developer Account Management", level: 95 },
      { name: "Redux & RTK", level: 90 },
      { name: "State Management", level: 92 },
    ],
  },
  {
    title: "Frontend Technologies",
    icon: FiCode,
    color: "#a855f7",
    skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "GraphQL", level: 80 },
      { name: "REST APIs", level: 95 },
      { name: "Hooks & HOC", level: 92 },
    ],
  },
  {
    title: "Accessibility, Security & Compliance",
    icon: FiShield,
    color: "#10b981",
    skills: [
      { name: "Accessibility", level: 85 },
      { name: "GDPR", level: 85 },
      { name: "OWASP MASVS", level: 80 },
      { name: "SCA, SAST, DAST & PenTesting Security Fixes", level: 80 },
    ],
  },
];

export const technicalTools: TechnicalTools = {
  "DevOps & Tools": [
    "Git",
    "Bitbucket",
    "Azure",
    "Jenkins",
    "Jira",
    "Confluence",
  ],
  "Security Tools": ["Fortify", "Black Duck", "ZAP", "OWASP"],
  Monitoring: [
    "Bugsnag",
    "Instabug",
    "Firebase Crashlytics",
    "Adobe Analytics",
  ],
  "IDE/Environment": ["Cursor AI", "VS Code", "Xcode", "Android Studio"],
  Authentication: ["OAuth", "MFA", "Azure AD", "MSAL", "Biometrics"],
  Payments: ["Adyen", "PayPal", "Stripe", "Authorize.net"],
};

export const coreCompetencies: string[] = [
  "Mobile Solution Design",
  "Frontend Architecture",
  "Design Patterns",
  "Agile Project Delivery",
  "Microservices Integration",
  "Performance Optimization",
  "Cross-Functional Collaboration",
  "Scalable Application Delivery",
  "Code Quality & Best Practices",
  "Team Leadership & Mentoring",
  "Client & Stakeholder Management",
];

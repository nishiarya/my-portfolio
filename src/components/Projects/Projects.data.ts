import {
  FiShield,
  FiSmartphone,
  FiUsers,
  FiGlobe,
  FiBluetooth,
  FiHome,
  FiTool,
} from "react-icons/fi";
import type { IconType } from "react-icons";

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  icon: IconType;
  title: string;
  client: string;
  description: string;
  achievements: string[];
  technologies: string[];
  color: string;
  metrics?: ProjectMetric[];
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    icon: FiShield,
    title: "AEM Security Remediation",
    client: "Verizon Communications Inc. - US",
    description:
      "Project Tech Lead for AEM Digital Asset Management security remediation critical project. Based on Verizon Cyber Security Dashboard (Fortify, Black Duck, ZAP, Pen Test) remediated 99% of app vulnerabilities. Led remediation across Tracfone, Straight Talk, Total Wireless, Simple Mobile brands & Agent Support/Field Activation brands.",
    achievements: [
      "99% overall vulnerabilities remediated",
      "Fortify (SAST): 100% source code issues fixed",
      "ZAP (DAST): 100% vulnerabilities remediated",
      "Black Duck (SCA): 99% remediated",
      "Pen-Test: 99% successfully addressed",
      "7 successful production releases",
      "Trained & led AEM remediation team",
    ],
    technologies: [
      "AEM-React",
      "Fortify",
      "Black Duck",
      "ZAP/DAST",
      "Pen Testing",
      "Jenkins",
      "Bitbucket",
      "JIRA",
      "Confluence",
    ],
    color: "#6366f1",
    metrics: [
      { value: "99%", label: "Vulnerabilities Fixed" },
      { value: "5+", label: "Brands Secured" },
      { value: "8", label: "Prod Releases" },
    ],
  },
  {
    icon: FiSmartphone,
    title: "Sunrise ID Checker",
    client: "Sunrise Communications AG - Switzerland",
    description:
      "First-of-its-kind digital onboarding solution for Switzerland's largest private telecom. Full ownership of design & development. Digitizes customer identification through ID scan, facial recognition, digital signature & document scanning.",
    achievements: [
      "Lead Developer: Full lifecycle app development",
      "36 processes digitized (20 new + 16 existing)",
      "Full ownership: UI Design & Development",
      "Complex scanning library integration",
      "Multi-lingual (German, English, French, Italian)",
      "Adobe Analytics tracking integration",
      "HockeyApp distribution & crash reporting",
      "Large cost efficiency & customer acceptance",
      "Multiple industry awards received",
    ],
    technologies: [
      "iOS",
      "Swift",
      "ID Scanning SDK",
      "Face Recognition",
      "Digital Signature",
      "Document OCR",
      "Adobe Analytics",
      "HockeyApp",
      "Universal App",
    ],
    color: "#8b5cf6",
    metrics: [
      { value: "36", label: "Processes Digitized" },
      { value: "4", label: "Languages" },
      { value: "3", label: "Awards Won" },
    ],
  },
  {
    icon: FiGlobe,
    title: "MySunrise & MyLebara",
    client: "Sunrise (Switzerland) & Lebara (UK)",
    description:
      "Lead Developer for telecom self-care apps serving Switzerland's & UK's largest providers. Full lifecycle development from architecture to App Store distribution. Admin privilege for Apple Developer accounts. Built telecom self-care apps for account management providing great customer experience with comprehensive tracking logging and monitoring systems.",
    achievements: [
      "Lead Developer: Full lifecycle app development",
      "Account Management (View, Buy, TopUp, Billing features etc.)",
      "Storybook integration for component library",
      "Redux + Saga middleware architecture",
      "GraphQL & Bootstrap API integrations",
      "Adyen payments integration",
      "Multi-lingual (EN, DE, FR) localization",
      "Adobe Analytics event tracking architecture",
      "Bugsnag crash reporting & monitoring",
      "Dependency-Check for vulnerability-free libraries",
      "Deep linking implementation",
    ],
    technologies: [
      "React Native",
      "Redux-Saga",
      "GraphQL",
      "Storybook",
      "Adobe Analytics",
      "Bugsnag",
      "Adyen",
      "ESLint/Prettier",
      "App Center",
      "Deep Linking",
    ],
    color: "#a855f7",
    metrics: [
      { value: "2", label: "Major Telecom Apps" },
      { value: "3", label: "Languages" },
      { value: "4.5★", label: "App Rating" },
    ],
  },
  {
    icon: FiUsers,
    title: "Workplace Companion",
    client: "Wolters Kluwer - US (Global)",
    description:
      "Project Lead Architect for enterprise employee app. End-to-end solution architecture, team leadership, and full lifecycle delivery. Unified fragmented WK resources into single mobile solution, reducing Service Desk tickets. Single point easy access to several WK resources and services improving efficiency, productivity and reachability of employees and partners.",
    achievements: [
      "Project Lead Architect: E2E solution design",
      "Azure AD MSAL authentication with JWT",
      "Azure Notification Hub + Firebase integration",
      "Intune MDM policy & biometric integration",
      "Self-Service Password Reset feature",
      "AI Chatbot integration",
      "Multi-lingual (EN, DE, FR, etc.)",
      "Azure DevOps CI/CD pipeline setup",
      "BlackDuck security scans & GDPR compliance",
      "15+ comprehensive technical documents delivered",
    ],
    technologies: [
      "React Native",
      "Azure AD/MSAL",
      "Redux-Saga",
      "Azure Notification Hub",
      "Firebase",
      "App Center",
      "Intune MDM",
      "CodePush",
      "Azure DevOps",
      "BlackDuck",
    ],
    color: "#10b981",
    metrics: [
      { value: "1", label: "Unified App" },
      { value: "15+", label: "Docs Delivered" },
      { value: "5+", label: "Languages" },
    ],
  },
  {
    icon: FiHome,
    title: "iField App & Buniyad Realtors",
    client: "In-House Projects",
    description:
      "Built Salesforce SOQL communication over restful web services becoming the app backbone to interact with Salesforce seamlessly. iField App Inventory Management and Buniyad Realtors Field Agent Tracking app.",
    achievements: [
      "Salesforce Force Integration",
      "Real-time field agent tracking",
      "Seamless CRM connectivity",
      "REST APIs implementation",
    ],
    technologies: ["iOS-Swift", "Salesforce", "SOQL", "REST APIs", "Swift"],
    color: "#f59e0b",
    metrics: [
      { value: "Real-time", label: "Agent Tracking" },
      { value: "100+", label: "Field Agents" },
      { value: "50%", label: "Efficiency Gain" },
    ],
  },
  {
    icon: FiBluetooth,
    title: "BlueMe (v1.0 – v5.0)",
    client: "Personal Project - App Store",
    description:
      "Conceptualized & built viral utility app for Bluetooth file sharing. Text/voice chat, documents, photos, videos, audio notes sharing without internet. 'Shake' to auto-connect with nearby iOS devices.",
    achievements: [
      "2M+ downloads worldwide",
      "#1 on App Store for 2+ weeks",
      "File Management System (Create, Edit, Move, Folder Lock)",
      "Dropbox & OneDrive auto-sync integration",
      "iTunes file import/export",
      "Email client integration for direct file save",
      "Multi-lingual (English/Chinese)",
      "In-App Purchases & Push Notifications",
    ],
    technologies: [
      "iOS",
      "Objective-C",
      "CoreBluetooth",
      "GameKit",
      "StoreKit",
      "Dropbox API",
      "OneDrive API",
      "AdMob",
      "Flurry",
      "Google Analytics",
    ],
    color: "#3b82f6",
    metrics: [
      { value: "2M+", label: "Downloads" },
      { value: "#1", label: "App Store Rank" },
      { value: "5", label: "Major Versions" },
    ],
  },
  {
    icon: FiTool,
    title: "Commusoft Field Service",
    client: "Commusoft Ltd. - UK",
    description:
      "Enterprise field service management app for Plumbing, Heating, Gas & Electrical engineers. Delivers critical information to on-site engineers with robust offline support using Couchbase (150+ tables).",
    achievements: [
      "Online/Offline sync with Couchbase NoSQL",
      "150+ database tables managed",
      "Multi-lingual support (English/French)",
      "Real-time job & diary management",
      "Gas Safety Certificates handling",
    ],
    technologies: [
      "iOS",
      "Objective-C",
      "Couchbase",
      "Bugsnag",
      "APNS",
      "Universal App",
    ],
    color: "#059669",
    metrics: [
      { value: "150+", label: "DB Tables" },
      { value: "2", label: "Languages" },
      { value: "100%", label: "Offline Support" },
    ],
  },
];

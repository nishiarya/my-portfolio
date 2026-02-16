import {
  FiShield,
  FiSmartphone,
  FiUsers,
  FiGlobe,
  FiBluetooth,
  FiHome,
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
    title: "Verizon Security Remediation",
    client: "Verizon - US",
    description:
      "Based on Verizon Cyber Security Dashboard (Fortify, Black Duck, ZAP, Pen Test) remediated 99% of app vulnerabilities across multiple web app brands.",
    achievements: [
      "99% vulnerability remediation achieved",
      "Multiple security tools integration",
      "Enterprise-wide security compliance",
    ],
    technologies: [
      "React",
      "Security Tools",
      "SAST/DAST",
      "Fortify",
      "Black Duck",
      "ZAP",
    ],
    color: "#6366f1",
    metrics: [
      { value: "99%", label: "Vulnerabilities Fixed" },
      { value: "15+", label: "Apps Secured" },
      { value: "0", label: "Critical Issues" },
    ],
  },
  {
    icon: FiSmartphone,
    title: "Sunrise ID Checker",
    client: "Sunrise - Switzerland",
    description:
      "Built most awarded first-of-its-kind solution for digital onboarding experience through ID scans, digital signature, facial recognition, and document scanning.",
    achievements: [
      "20 new processes digitized",
      "16 existing processes transformed",
      "High cost efficiency achieved",
      "Multiple awards received",
    ],
    technologies: [
      "React Native",
      "ID Scanning",
      "Face Recognition",
      "Digital Signature",
    ],
    color: "#8b5cf6",
    metrics: [
      { value: "36", label: "Processes Digitized" },
      { value: "60%", label: "Cost Reduction" },
      { value: "3", label: "Awards Won" },
    ],
  },
  {
    icon: FiGlobe,
    title: "MySunrise & MyLebara",
    client: "Switzerland & UK",
    description:
      "Built telecom self-care apps for account management providing great customer experience with comprehensive tracking and logging systems.",
    achievements: [
      "Complete account management",
      "Adobe Analytics integration",
      "Bugsnag crash reporting",
      "View, Buy, TopUp, Billing features",
    ],
    technologies: [
      "React Native",
      "Redux",
      "Adobe Analytics",
      "Bugsnag",
      "REST APIs",
    ],
    color: "#a855f7",
    metrics: [
      { value: "40%", label: "Support Calls Reduced" },
      { value: "500K+", label: "Active Users" },
      { value: "4.5★", label: "App Rating" },
    ],
  },
  {
    icon: FiUsers,
    title: "Workplace Companion",
    client: "Wolters Kluwer - US",
    description:
      "Single point easy access to several WK resources and services improving efficiency, productivity and reachability of employees and partners.",
    achievements: [
      "Azure AD Authentication",
      "Azure Notification HUB integration",
      "APNS Push Notifications",
      "Improved employee productivity",
    ],
    technologies: ["React Native", "Azure AD", "MSAL", "Push Notifications"],
    color: "#10b981",
    metrics: [
      { value: "30%", label: "Productivity Increase" },
      { value: "5K+", label: "Daily Active Users" },
      { value: "< 2s", label: "Load Time" },
    ],
  },
  {
    icon: FiHome,
    title: "iField App & Buniyad Realtors",
    client: "In-House Projects",
    description:
      "Built Salesforce SOQL communication over restful web services becoming the app backbone to interact with Salesforce seamlessly.",
    achievements: [
      "Salesforce Force Integration",
      "Real-time field agent tracking",
      "Seamless CRM connectivity",
      "REST APIs implementation",
    ],
    technologies: ["iOS", "Salesforce", "SOQL", "REST APIs", "Swift"],
    color: "#f59e0b",
    metrics: [
      { value: "Real-time", label: "Agent Tracking" },
      { value: "100+", label: "Field Agents" },
      { value: "50%", label: "Efficiency Gain" },
    ],
  },
  {
    icon: FiBluetooth,
    title: "BlueMe",
    client: "Bluetooth Utility App",
    description:
      "Popular utility app for data transfer over Bluetooth, achieving 2M+ downloads and ranking top on App Store for 2 weeks.",
    achievements: [
      "2M+ downloads worldwide",
      "Top on App Store for 2 weeks",
      "Feature-rich utility app",
      "Beautiful UI/UX design",
    ],
    technologies: ["iOS", "Objective-C", "Bluetooth", "CoreBluetooth"],
    color: "#3b82f6",
    metrics: [
      { value: "2M+", label: "Downloads" },
      { value: "#1", label: "App Store Rank" },
      { value: "2 Weeks", label: "Top Ranking" },
    ],
  },
];

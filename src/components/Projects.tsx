import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FiShield,
  FiSmartphone,
  FiUsers,
  FiGlobe,
  FiBluetooth,
  FiHome,
} from "react-icons/fi";
import "./Projects.css";

const projects = [
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
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="projects section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Highlighted projects delivered for global enterprise clients
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-header">
                <div
                  className="project-icon"
                  style={{ background: project.color }}
                >
                  <project.icon />
                </div>
                <div className="project-meta">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-client">{project.client}</span>
                </div>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-achievements">
                <h4>Key Achievements</h4>
                <ul>
                  {project.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div className="project-technologies">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="tech-tag"
                    style={{ borderColor: project.color, color: project.color }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

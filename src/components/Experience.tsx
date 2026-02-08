import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiBriefcase, FiCalendar, FiMapPin, FiUsers } from "react-icons/fi";
import "./Experience.css";

const experiences = [
  {
    title: "Tech Lead",
    company: "Tech Mahindra Ltd.",
    location: "Noida, India",
    period: "Dec 2016 - Present",
    duration: "9+ years",
    description:
      "Leading React Native and mobile development projects for global enterprise clients.",
    highlights: [
      "Led end-to-end system and solution design, defined mobile app architecture, deployment strategy and CI/CD",
      "Built multiple award-winning projects including Verizon Security Remediation, Sunrise ID Checker, MySunrise, MyLebara",
      "Defined coding standards and best practices, performed regular code reviews and systems testing",
      "Mentor and coach team members through pair programming and knowledge-sharing sessions",
      "Managed teams of up to 12 members with direct project dev team of 6",
      "Achieved 99% vulnerability remediation in web app brands across security tools for Verizon",
    ],
    teamSize: "6-12 members",
  },
  {
    title: "Team Lead iOS",
    company: "Wildnet Technologies Pvt. Ltd.",
    location: "Noida, India",
    period: "Nov 2013 - Nov 2016",
    duration: "3 years",
    description:
      "Led iOS development team delivering multiple client projects across various domains.",
    highlights: [
      "Built Commusoft - Field job management app for UK companies (Plumbing, Heating, Electrical)",
      "Developed Buniyad Realtors - Field agent tracking app with Salesforce Force Integration",
      "Created MapIt Realtour - Map and navigation app for Real Estate Agents",
      "Delivered Dropwash (AUS) - Dry cleaning & laundry order management app",
      "Resource management and team mentoring on day-to-day basis",
      "Client communication and technical documentation creation",
    ],
    teamSize: "4-6 members",
  },
  {
    title: "Software Engineer",
    company: "HyTech Professionals India Pvt. Ltd.",
    location: "Noida, India",
    period: "Apr 2010 - Nov 2013",
    duration: "3.5 years",
    description:
      "Started career as mobile developer, building iOS applications from scratch.",
    highlights: [
      "Built BlueMe - Bluetooth utility app with 2M+ downloads, top on App Store for 2 weeks",
      "Developed Front Stream Payment (Fast Transact App) connecting hardware to iOS devices",
      "Full mobile app development using Objective-C",
      "Project release activity and Apple Developer account management",
      "Transformed from trainee to a senior developer, recognized with iApp Innovation Award",
    ],
    teamSize: "3-5 members",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="experience section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            15.6+ years of building exceptional mobile applications
          </p>
        </motion.div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="experience-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-dot">
                <FiBriefcase />
              </div>
              <div className="experience-card card">
                <div className="exp-header">
                  <div className="exp-title-section">
                    <h3 className="exp-title">{exp.title}</h3>
                    <h4 className="exp-company">{exp.company}</h4>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-duration-badge">{exp.duration}</span>
                  </div>
                </div>

                <div className="exp-info">
                  <span className="exp-info-item">
                    <FiCalendar />
                    {exp.period}
                  </span>
                  <span className="exp-info-item">
                    <FiMapPin />
                    {exp.location}
                  </span>
                  <span className="exp-info-item">
                    <FiUsers />
                    Team: {exp.teamSize}
                  </span>
                </div>

                <p className="exp-description">{exp.description}</p>

                <ul className="exp-highlights">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total Experience Summary */}
        <motion.div
          className="experience-summary"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="summary-card">
            <div className="summary-stat">
              <span className="stat-number">15.6+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="summary-stat">
              <span className="stat-number">3</span>
              <span className="stat-label">Companies</span>
            </div>
            <div className="summary-stat">
              <span className="stat-number">20+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="summary-stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Team Members Mentored</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

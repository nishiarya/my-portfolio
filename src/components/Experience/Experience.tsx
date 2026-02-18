import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiBriefcase, FiCalendar, FiMapPin, FiUsers, FiExternalLink } from "react-icons/fi";
import { experiences, experienceSummary } from "./Experience.data";
import "./Experience.css";

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
            {experienceSummary.yearsExperience} years of building exceptional
            mobile applications
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
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="exp-company"
                    >
                      {exp.company}
                      <FiExternalLink className="company-link-icon" />
                    </a>
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
              <span className="stat-number">
                {experienceSummary.yearsExperience}
              </span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="summary-stat">
              <span className="stat-number">{experienceSummary.companies}</span>
              <span className="stat-label">Companies</span>
            </div>
            <div className="summary-stat">
              <span className="stat-number">
                {experienceSummary.projectsDelivered}
              </span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="summary-stat">
              <span className="stat-number">
                {experienceSummary.teamMembersMentored}
              </span>
              <span className="stat-label">Team Members Mentored</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiArrowRight, FiTarget, FiTool, FiTrendingUp, FiX } from "react-icons/fi";
import { caseStudies } from "./CaseStudies.data";
import "./CaseStudies.css";

const CaseStudies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedStudy, setSelectedStudy] = useState<string | null>(null);

  const selectedCase = caseStudies.find((c) => c.id === selectedStudy);

  return (
    <section id="case-studies" className="case-studies section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Case Studies</h2>
          <p className="section-subtitle">
            Deep dive into complex problems I've solved
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="case-studies-grid">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              className="case-study-card card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedStudy(study.id)}
            >
              <div className="case-study-header">
                <div
                  className="case-study-icon"
                  style={{ background: study.color }}
                >
                  <study.icon />
                </div>
                <div className="case-study-meta">
                  <span className="case-study-client">{study.client}</span>
                  <h3 className="case-study-title">{study.title}</h3>
                </div>
              </div>

              <p className="case-study-challenge">{study.challenge}</p>

              {/* Quick Metrics */}
              <div className="case-study-metrics">
                {study.metrics.slice(0, 2).map((metric) => (
                  <div key={metric.label} className="metric-item">
                    <span className="metric-value" style={{ color: study.color }}>
                      {metric.value}
                    </span>
                    <span className="metric-label">{metric.label}</span>
                  </div>
                ))}
              </div>

              <div className="case-study-footer">
                <div className="tech-tags">
                  {study.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                  {study.technologies.length > 3 && (
                    <span className="tech-tag">+{study.technologies.length - 3}</span>
                  )}
                </div>
                <button className="view-details" style={{ color: study.color }}>
                  View Details <FiArrowRight />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for Case Study Details */}
        {selectedCase && (
          <motion.div
            className="case-study-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStudy(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedStudy(null)}
              >
                <FiX />
              </button>

              <div className="modal-header">
                <div
                  className="modal-icon"
                  style={{ background: selectedCase.color }}
                >
                  <selectedCase.icon />
                </div>
                <div>
                  <span className="modal-client">{selectedCase.client}</span>
                  <h3 className="modal-title">{selectedCase.title}</h3>
                </div>
              </div>

              {/* Metrics */}
              <div className="modal-metrics">
                {selectedCase.metrics.map((metric) => (
                  <div key={metric.label} className="modal-metric">
                    <span
                      className="modal-metric-value"
                      style={{ color: selectedCase.color }}
                    >
                      {metric.value}
                    </span>
                    <span className="modal-metric-label">{metric.label}</span>
                  </div>
                ))}
              </div>

              {/* Challenge */}
              <div className="modal-section">
                <h4>
                  <FiTarget /> The Challenge
                </h4>
                <p>{selectedCase.challenge}</p>
              </div>

              {/* Solution */}
              <div className="modal-section">
                <h4>
                  <FiTool /> The Solution
                </h4>
                <p>{selectedCase.solution}</p>
              </div>

              {/* Impact */}
              <div className="modal-section">
                <h4>
                  <FiTrendingUp /> The Impact
                </h4>
                <ul className="impact-list">
                  {selectedCase.impact.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="modal-technologies">
                {selectedCase.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="modal-tech-tag"
                    style={{ borderColor: selectedCase.color }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CaseStudies;

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiDownload, FiEye, FiFileText, FiCheck } from "react-icons/fi";
import { resumeVersions } from "./Resume.data";
import "./Resume.css";

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedVersion, setSelectedVersion] = useState("v1");

  return (
    <section id="resume" className="resume section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">See My Resume</h2>
          <p className="section-subtitle">
            Choose from two professionally crafted resume versions
          </p>
        </motion.div>

        <div className="resume-content">
          <div className="resume-cards">
            {resumeVersions.map((version, index) => (
              <motion.div
                key={version.id}
                className={`resume-card card ${
                  selectedVersion === version.id ? "selected" : ""
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedVersion(version.id)}
              >
                <div className="resume-card-header">
                  <div
                    className="resume-icon"
                    style={{ background: version.color }}
                  >
                    <FiFileText />
                  </div>
                  <div className="resume-info">
                    <h3>{version.title}</h3>
                    <span className="resume-subtitle">{version.subtitle}</span>
                  </div>
                  {selectedVersion === version.id && (
                    <div className="selected-badge">
                      <FiCheck />
                    </div>
                  )}
                </div>

                <p className="resume-description">{version.description}</p>

                <ul className="resume-features">
                  {version.features.map((feature) => (
                    <li key={feature}>
                      <FiCheck
                        className="feature-icon"
                        style={{ color: version.color }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="resume-actions">
                  <a
                    href={`/resumes/${version.filename}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiEye /> Preview
                  </a>
                  <a
                    href={`/resumes/${version.filename}`}
                    download
                    className="btn btn-primary btn-sm"
                    style={{ background: version.color }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiDownload /> Download
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="resume-preview"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="preview-header">
              <span className="preview-title">
                <FiFileText />
                {resumeVersions.find((v) => v.id === selectedVersion)?.title}
              </span>
              <div className="preview-actions">
                <a
                  href={`/resumes/${
                    resumeVersions.find((v) => v.id === selectedVersion)
                      ?.filename
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="preview-btn"
                >
                  <FiEye /> Open in New Tab
                </a>
              </div>
            </div>
            <div className="preview-frame">
              <iframe
                src={`/resumes/${
                  resumeVersions.find((v) => v.id === selectedVersion)?.filename
                }`}
                title="Resume Preview"
                className="resume-iframe"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="resume-note"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p>
            Both resumes contain the same core information but in different
            formats. Choose the version that best suits your needs or download
            both for your reference.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;

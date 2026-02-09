import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { aboutData } from "./About.data";
import "./About.css";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate about building exceptional mobile experiences
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about-card">
              <h3>{aboutData.professionalSummary.title}</h3>
              {aboutData.professionalSummary.paragraphs.map(
                (_paragraph, index) => (
                  <p key={index}>
                    {index === 0 ? (
                      <>
                        I'm a <span className="highlight">Tech Lead</span>{" "}
                        specializing in{" "}
                        <span className="highlight">
                          React Native & ReactJS
                        </span>{" "}
                        with a proven track record of leading digital
                        transformation projects for Fortune 500 clients. My
                        expertise spans the complete mobile app lifecycle - from
                        solution design and architecture to deployment and team
                        leadership.
                      </>
                    ) : (
                      <>
                        I believe in building applications that are not just
                        functional, but{" "}
                        <span className="highlight">
                          accessible, secure, and delightful
                        </span>{" "}
                        to use. My approach combines technical excellence with
                        strong leadership values - fostering collaboration,
                        mentoring teams, and delivering business value through
                        innovation. Having served global clients in telecom,
                        real estate, productivity, and e-Commerce domains, I
                        bring a wealth of cross-industry experience.
                      </>
                    )}
                  </p>
                )
              )}
              <p className="core-values">
                <strong>Core Values:</strong>{" "}
                {aboutData.professionalSummary.coreValues.join(" | ")}
              </p>

              <h4>Education</h4>
              <div className="education-item">
                <span className="edu-degree">{aboutData.education.degree}</span>
                <span className="edu-school">{aboutData.education.school}</span>
                <span className="edu-year">{aboutData.education.year}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-highlights"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="highlights-grid">
              {aboutData.highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="highlight-card card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className="highlight-icon">
                    <item.icon />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="passions-section"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3>Passionate About</h3>
          <div className="passions-list">
            {aboutData.passions.map((passion, index) => (
              <motion.span
                key={passion}
                className="passion-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
              >
                {passion}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

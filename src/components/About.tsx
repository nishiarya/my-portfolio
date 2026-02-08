import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiTarget, FiTrendingUp, FiShield, FiUsers } from "react-icons/fi";
import "./About.css";

const highlights = [
  {
    icon: FiTarget,
    title: "Solution Design",
    description:
      "Expertise in cross-platform mobile app solution design with focus on scalability and modularity.",
  },
  {
    icon: FiTrendingUp,
    title: "Digital Transformation",
    description:
      "Strong track record of leading digital transformation projects for global clients in telecom, real estate, and enterprise domains.",
  },
  {
    icon: FiShield,
    title: "Security First",
    description:
      "Proficient in developing and implementing scalable, modular, and secure enterprise applications with OWASP compliance.",
  },
  {
    icon: FiUsers,
    title: "Team Leadership",
    description:
      "Led teams effectively, providing mentorship and training to enhance technical and interpersonal skills.",
  },
];

const passions = [
  "Problem Solving",
  "Decision Making",
  "AI Driven Development",
  "Component Driven Development",
  "Accessibility",
  "Code Quality",
  "Modularity",
  "Scalability",
  "Reliability",
  "Security-First Mindset",
  "Leadership & Learning",
];

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
              <h3>Professional Summary</h3>
              <p>
                I'm a <span className="highlight">Tech Lead</span> specializing
                in <span className="highlight">React Native & ReactJS</span>{" "}
                with a proven track record of leading digital transformation
                projects for Fortune 500 clients. My expertise spans the
                complete mobile app lifecycle - from solution design and
                architecture to deployment and team leadership.
              </p>
              <p>
                I believe in building applications that are not just functional,
                but{" "}
                <span className="highlight">
                  accessible, secure, and delightful
                </span>{" "}
                to use. My approach combines technical excellence with strong
                leadership values - fostering collaboration, mentoring teams,
                and delivering business value through innovation. Having served
                global clients in telecom, real estate, productivity, and
                e-Commerce domains, I bring a wealth of cross-industry
                experience.
              </p>
              <p className="core-values">
                <strong>Core Values:</strong> Commitment | Reliability |
                Integrity | Kindness | Continuous Learning
              </p>

              <h4>Education</h4>
              <div className="education-item">
                <span className="edu-degree">
                  B.Tech, Information Technology
                </span>
                <span className="edu-school">
                  Bharat Institute of Technology (UPTU)
                </span>
                <span className="edu-year">2004 - 2008</span>
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
              {highlights.map((item, index) => (
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
            {passions.map((passion, index) => (
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

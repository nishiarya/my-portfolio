import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { aboutData } from "./About.data";
import "./About.css";

// Keywords to highlight in professional summary
const highlightKeywords = [
  "15+ years",
  "9+ years",
  "Tech Mahindra",
  "Fortune 500",
  "Verizon",
  "Wolters Kluwer",
  "Sunrise Communications",
  "99% security vulnerability remediation",
  "8960+ risk points",
  "36 processes digitized",
  "2M+ downloads",
  "two weeks",
  "12 members",
  "15+ awards",
  "50+ developers",
  "accessible, secure, and delightful",
  "scalable, secure, and accessible",
  "POB, Bravo, Star Award, Standing Ovation, Digital Warrior EMEA Excellence",
];

// Function to highlight keywords in text
const highlightText = (text: string): React.ReactNode => {
  let result: React.ReactNode[] = [];
  let remainingText = text;
  let keyIndex = 0;

  while (remainingText.length > 0) {
    let earliestMatch: { keyword: string; index: number } | null = null;

    for (const keyword of highlightKeywords) {
      const index = remainingText.toLowerCase().indexOf(keyword.toLowerCase());
      if (index !== -1 && (earliestMatch === null || index < earliestMatch.index)) {
        earliestMatch = { keyword, index };
      }
    }

    if (earliestMatch) {
      // Add text before the match
      if (earliestMatch.index > 0) {
        result.push(remainingText.substring(0, earliestMatch.index));
      }
      // Add the highlighted keyword
      const actualKeyword = remainingText.substring(
        earliestMatch.index,
        earliestMatch.index + earliestMatch.keyword.length
      );
      result.push(
        <span key={keyIndex++} className="highlight">
          {actualKeyword}
        </span>
      );
      // Continue with remaining text
      remainingText = remainingText.substring(
        earliestMatch.index + earliestMatch.keyword.length
      );
    } else {
      // No more matches, add remaining text
      result.push(remainingText);
      break;
    }
  }

  return result;
};

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
              {aboutData.professionalSummary.paragraphs.map((paragraph, index) => (
                <p key={index}>{highlightText(paragraph)}</p>
              ))}
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

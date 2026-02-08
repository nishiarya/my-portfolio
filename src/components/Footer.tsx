import { motion } from "framer-motion";
import {
  FiLinkedin,
  FiMail,
  FiPhone,
  FiHeart,
  FiCode,
  FiSmartphone,
} from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="footer-logo">
              <div className="logo-icon">
                <FiSmartphone className="icon-phone" />
                <FiCode className="icon-code" />
              </div>
              <span className="logo-text">
                <span className="logo-name">Nishant Kumar Singh</span>
                <span className="logo-title">Mobile Architect</span>
              </span>
            </div>
            <p className="footer-description">
              Tech Lead with 15.6+ years of experience in React Native & mobile
              app development. Driven by commitment, reliability, and integrity
              to deliver exceptional digital experiences.
            </p>
          </motion.div>

          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4>Quick Links</h4>
            <nav>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#resume">Resume</a>
              <a href="#contact">Contact</a>
            </nav>
          </motion.div>

          <motion.div
            className="footer-contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Contact Info</h4>
            <div className="contact-list">
              <a href="mailto:nishant.bitindia@gmail.com">
                <FiMail />
                nishant.bitindia@gmail.com
              </a>
              <a href="tel:+919958101777">
                <FiPhone />
                +91-9958101777
              </a>
              <a
                href="https://www.linkedin.com/in/nishant-singh-ba161a22"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin />
                LinkedIn Profile
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="footer-social">
            <a
              href="https://www.linkedin.com/in/nishant-singh-ba161a22"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href="mailto:nishant.bitindia@gmail.com"
              className="social-btn"
              aria-label="Email"
            >
              <FiMail />
            </a>
          </div>

          <p className="copyright">
            © {currentYear} Nishant Kumar Singh. Made with{" "}
            <FiHeart className="heart-icon" /> using React
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

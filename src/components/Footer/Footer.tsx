import { motion } from "framer-motion";
import {
  FiLinkedin,
  FiMail,
  FiPhone,
  FiHeart,
  FiCode,
  FiSmartphone,
} from "react-icons/fi";
import { footerData } from "./Footer.data";
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
                <span className="logo-name">{footerData.brand.name}</span>
                <span className="logo-title">{footerData.brand.title}</span>
              </span>
            </div>
            <p className="footer-description">{footerData.brand.description}</p>
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
              {footerData.quickLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
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
              <a href={`mailto:${footerData.contact.email}`}>
                <FiMail />
                {footerData.contact.email}
              </a>
              <a href={`tel:${footerData.contact.phone.replace(/-/g, "")}`}>
                <FiPhone />
                {footerData.contact.phone}
              </a>
              <a
                href={footerData.contact.linkedIn}
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
              href={footerData.contact.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href={`mailto:${footerData.contact.email}`}
              className="social-btn"
              aria-label="Email"
            >
              <FiMail />
            </a>
          </div>

          <p className="copyright">
            © {currentYear} {footerData.brand.name}. Made with{" "}
            <FiHeart className="heart-icon" /> using React
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

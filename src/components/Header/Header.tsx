import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiSmartphone, FiCode } from "react-icons/fi";
import { navLinks, brandInfo } from "./Header.data";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);

    // Find the currently visible section
    const sections = navLinks.map((link) => link.href.replace("#", ""));
    const scrollPosition = window.scrollY + 150; // Offset for header height

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section && section.offsetTop <= scrollPosition) {
        setActiveSection(sections[i]);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <motion.header
      className={`header ${isScrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-container">
        <a href="#hero" className="logo">
          <div className="logo-icon">
            <FiSmartphone className="icon-phone" />
            <FiCode className="icon-code" />
          </div>
          <span className="logo-text">
            <span className="logo-name">{brandInfo.name}</span>
            <span className="logo-title">{brandInfo.title}</span>
          </span>
        </a>

        <nav className="nav-desktop">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              className={`nav-link ${activeSection === link.href.replace("#", "") ? "active" : ""}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            className="nav-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className={`nav-link-mobile ${activeSection === link.href.replace("#", "") ? "active" : ""}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

import { motion } from "framer-motion";
import {
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
  FiDownload,
  FiArrowRight,
} from "react-icons/fi";
import { heroData, codePreview } from "./Hero.data";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      {/* Animated Background */}
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-grid"></div>
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                y: [-20, -100],
                x: Math.random() * 20 - 10,
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${50 + Math.random() * 50}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Banner */}
      <motion.div
        className="hero-top-banner"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="top-banner-content">
          <div className="top-banner-left">
            <span className="top-banner-icon">📱</span>
            <span className="top-banner-text">{heroData.bannerText}</span>
          </div>
          <div className="top-banner-right">
            <span className="top-banner-tech">React Native Expert</span>
            <span className="top-banner-badge">
              <span className="top-banner-dot"></span>
              {heroData.bannerHighlight}
            </span>
          </div>
        </div>
      </motion.div>

      <div className="hero-container">
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm <span className="gradient-text">{heroData.name}</span>
          </motion.h1>

          <motion.h2
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {heroData.title}
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            An engineer driven by{" "}
            <span className="highlight">{heroData.highlights[0]}</span>. With{" "}
            <span className="highlight">{heroData.highlights[1]}</span> of
            experience, I architect and deliver scalable, secure, and
            performance-optimized mobile applications for global enterprise
            clients across telecom, real estate, and digital transformation
            domains.
          </motion.p>

          <motion.div
            className="hero-info"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="info-item">
              <FiMapPin className="info-icon" />
              <span>{heroData.location}</span>
            </div>
            <div className="info-item">
              <FiPhone className="info-icon" />
              <span>{heroData.phone}</span>
            </div>
            <div className="info-item">
              <FiMail className="info-icon" />
              <span>{heroData.email}</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a href="#contact" className="btn btn-primary">
              Let's Connect <FiArrowRight />
            </a>
            <a href="#resume" className="btn btn-secondary">
              <FiDownload /> View Resume
            </a>
          </motion.div>

          <motion.div
            className="hero-social"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <a
              href={heroData.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FiLinkedin />
            </a>
            <a href={`mailto:${heroData.email}`} className="social-link">
              <FiMail />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="visual-wrapper">
            <div className="visual-circle outer"></div>
            <div className="visual-circle middle"></div>
            <div className="visual-circle inner"></div>
            <div className="visual-content">
              <div className="code-window">
                <div className="code-header">
                  <span className="code-dot red"></span>
                  <span className="code-dot yellow"></span>
                  <span className="code-dot green"></span>
                  <span className="code-title">MobileArchitect.tsx</span>
                </div>
                <div className="code-body">
                  <pre>{codePreview}</pre>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span>Scroll to explore</span>
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

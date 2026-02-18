import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiMessageSquare, FiLinkedin, FiUsers, FiAward, FiCode, FiBriefcase } from "react-icons/fi";
import { testimonials, testimonialStats } from "./Testimonials.data";
import "./Testimonials.css";

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="testimonial-card card">
    <div className="testimonial-header">
      <div className="testimonial-avatar">
        {testimonial.image ? (
          <img src={testimonial.image} alt={testimonial.name} />
        ) : (
          <div className="avatar-placeholder">
            {testimonial.name.charAt(0)}
          </div>
        )}
      </div>
      <div className="testimonial-author">
        <h4 className="author-name">{testimonial.name}</h4>
        <p className="author-role">{testimonial.role}</p>
        <p className="author-company">{testimonial.company}</p>
      </div>
      {testimonial.linkedinUrl && (
        <a
          href={testimonial.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
          aria-label={`View ${testimonial.name}'s LinkedIn`}
        >
          <FiLinkedin />
        </a>
      )}
    </div>

    <div className="testimonial-content">
      <FiMessageSquare className="quote-icon" />
      <p>{testimonial.content}</p>
    </div>

    <div className="testimonial-relationship">
      {testimonial.relationship}
    </div>
  </div>
);

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPaused, setIsPaused] = useState(false);

  const stats = [
    { icon: FiBriefcase, value: testimonialStats.yearsExperience, label: "Years Experience" },
    { icon: FiCode, value: testimonialStats.projectsDelivered, label: "Projects Delivered" },
    { icon: FiUsers, value: testimonialStats.teamMembersLed, label: "Team Members Led" },
    { icon: FiAward, value: testimonialStats.developersMonitored, label: "Developers Mentored" },
  ];

  return (
    <section id="testimonials" className="testimonials section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Testimonials & Impact</h2>
          <p className="section-subtitle">
            What colleagues and clients say about working with me
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="testimonial-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            >
              <div className="stat-icon">
                <stat.icon />
              </div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Auto-scrolling Testimonials Marquee */}
        <motion.div
          className="testimonials-marquee-wrapper"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={`testimonials-marquee ${isPaused ? "paused" : ""}`}>
            <div className="marquee-content">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={`original-${index}`} testimonial={testimonial} />
              ))}
            </div>
            <div className="marquee-content" aria-hidden="true">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={`duplicate-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call for More Testimonials */}
        <motion.div
          className="testimonial-cta-section"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="testimonial-cta card">
            <div className="cta-content">
              <FiMessageSquare className="cta-icon" />
              <h4>Worked Together?</h4>
              <p>
                I'd be honored to hear about your experience working with me.
                Your feedback helps me grow and serve future teams better.
              </p>
              <a
                href="https://www.linkedin.com/in/nishant-singh-ba161a22/"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
              >
                <FiLinkedin />
                Leave a Recommendation
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiSend,
  FiUser,
  FiMessageSquare,
} from "react-icons/fi";
import "./Contact.css";

const contactInfo = [
  {
    icon: FiMail,
    label: "Email",
    value: "nishant.bitindia@gmail.com",
    href: "mailto:nishant.bitindia@gmail.com",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+91-9958101777",
    href: "tel:+919958101777",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Noida, India",
    href: null,
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/nishant-singh-ba161a22",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const mailtoLink = `mailto:nishant.bitindia@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="contact section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            Let's connect and discuss opportunities
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info-section"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="contact-intro">
              <h3>Get In Touch</h3>
              <p>
                Whether you're looking for a <strong>Tech Lead</strong> to drive
                your mobile initiatives, need consultation on{" "}
                <strong>React Native architecture</strong>, or want to discuss
                exciting opportunities - I'm always happy to connect. I believe
                in building lasting professional relationships based on trust
                and mutual respect.
              </p>
              <p className="contact-quote">
                "Great things in business are never done by one person. They're
                done by a team of people."
              </p>
            </div>

            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="contact-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      target={
                        info.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel="noopener noreferrer"
                    >
                      <div className="contact-card-icon">
                        <info.icon />
                      </div>
                      <div className="contact-card-content">
                        <span className="contact-label">{info.label}</span>
                        <span className="contact-value">{info.value}</span>
                      </div>
                    </a>
                  ) : (
                    <>
                      <div className="contact-card-icon">
                        <info.icon />
                      </div>
                      <div className="contact-card-content">
                        <span className="contact-label">{info.label}</span>
                        <span className="contact-value">{info.value}</span>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="availability-status">
              <span className="status-dot"></span>
              <span>Currently available for new opportunities</span>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-section"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send a Message</h3>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    <FiUser />
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <FiMail />
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">
                  <FiMessageSquare />
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  <FiMessageSquare />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={5}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Opening Email..." : "Send Message"}
                <FiSend />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiAward, FiStar, FiZap, FiTrendingUp, FiImage } from "react-icons/fi";
import "./Awards.css";

const awards = [
  {
    year: "2025",
    items: [
      {
        title: "AI White Belt",
        issuer: "Tech Mahindra",
        date: "Sep 2025",
        description:
          "Demonstrated AI technology proficiency and commitment to Tech Mahindra's AI vision and Strategy.",
        type: "certification",
        image: "/awards/ai-white-belt-2025.png",
      },
      {
        title: "Team Star Award 2025",
        issuer: "Tech Mahindra",
        date: "Jul 2025",
        description:
          'First runner-up in "Technology Solution" category in Star Awards (OSCARS of Tech Mahindra) for security remediation project.',
        type: "award",
        image: "/awards/team-star-award-2025.png",
      },
      {
        title: "Standing Ovation Award 2025",
        issuer: "Tech Mahindra",
        date: "Mar 2025",
        description:
          "Awarded for remarkable technical skills, project leadership, team management and delivery skills.",
        type: "award",
        image: "/awards/standing-ovation-2025.png",
      },
      {
        title: "Leadership Learning Program 2025",
        issuer: "Tech Mahindra",
        date: "2025",
        description:
          "Completed Leadership Learning Program demonstrating leadership capabilities.",
        type: "program",
        image: "/awards/leadership-learning-program-2025.png",
      },
      {
        title: "Information Security and Data Privacy",
        issuer: "Tech Mahindra",
        date: "2025",
        description:
          "Certified in understanding the importance of Information Security and Data Privacy for IT professionals.",
        type: "certification",
        image: "/awards/info-security-data-privacy-2025.png",
      },
    ],
  },
  {
    year: "2020-2022",
    items: [
      {
        title: "AQT Ninja Award 2022",
        issuer: "Tech Mahindra",
        date: "Dec 2022",
        description:
          "Recognition for exceptional quality and technical excellence.",
        type: "award",
        image: "/awards/aqt-ninja-award-2022.png",
      },
      {
        title: "Express Delivery Leadership Program - First Winner",
        issuer: "Tech Mahindra",
        date: "Jan 2021",
        description:
          "First place winner in the Express Delivery Leadership Learning Program.",
        type: "award",
        image: "/awards/express-delivery-first-winner-2021.png",
      },
      {
        title: "Pat on Back Award 2020",
        issuer: "Tech Mahindra",
        date: "Sep 2020",
        description:
          "Awarded for excellent work in MySunrise application - designed event tracking ecosystem and architecture.",
        type: "award",
        image: "/awards/pat-on-back-2020.png",
      },
    ],
  },
  {
    year: "2017-2018",
    items: [
      {
        title: "Digital Warrior Team EMEA Location Excellence Awards",
        issuer: "Tech Mahindra",
        date: "2018",
        description:
          "As Lead Project Development - Built first of its kind digital onboarding solution for Sunrise customers.",
        type: "award",
        image: "/awards/digital-warrior-emea-2018.png",
      },
      {
        title: "Pat on Back Award 2018",
        issuer: "Tech Mahindra",
        date: "May 2018",
        description:
          "Excellent work, architecture, solution design and Salesforce integration.",
        type: "award",
        image: "/awards/pat-on-back-2018.png",
      },
      {
        title: "TechM Excellence Awards 2017 - Noida",
        issuer: "Tech Mahindra",
        date: "Dec 2017",
        description: "Digital Warriors Location Excellence Awards recognition.",
        type: "award",
        image: "/awards/techm-excellence-2017.png",
      },
      {
        title: "Client Recognition Certificate",
        issuer: "Sunrise Communications AG",
        date: "Nov 2017",
        description:
          "Awarded for long-term excellence work, dedication, and valuable contributions to the project.",
        type: "award",
        image: "/awards/client-recognition-sunrise-2017.png",
      },
      {
        title: "Bravo Award 2017",
        issuer: "Tech Mahindra",
        date: "Aug 2017",
        description:
          "Awarded for outstanding work, documentation, on-time deliveries, and leadership.",
        type: "award",
        image: "/awards/bravo-award-2017.png",
      },
    ],
  },
  {
    year: "2011-2015",
    items: [
      {
        title: "Meritorious Mentor Award 2015",
        issuer: "Wildnet Technologies",
        date: "Dec 2015",
        description:
          "Awarded for excellent work on multiple assignments & team building and training.",
        type: "award",
        image: "/awards/meritorious-mentor-2015.png",
      },
      {
        title: "Star of the Month 2014",
        issuer: "Wildnet Technologies",
        date: "Jul 2014",
        description:
          "Developed complex UI/UX with Couchbase framework integration for Commusoft app.",
        type: "award",
        image: "/awards/star-of-month-2014.png",
      },
      {
        title: "Face Off 2012",
        issuer: "HyTech Professionals",
        date: "Dec 2012",
        description:
          "Story of excellence - transformed from trainee to vibrant developer with BlueMe reaching 2M+ downloads.",
        type: "award",
        image: "/awards/face-off-2012.png",
      },
      {
        title: "iApp Innovation Award 2011",
        issuer: "HyTech Professionals",
        date: "2011",
        description:
          "Best iOS Application Award - BlueMe was top on Apple Store for 2 weeks with 2M+ downloads.",
        type: "award",
        image: "/awards/iapp-innovation-2011.png",
      },
    ],
  },
];

const getIconByType = (type: string) => {
  switch (type) {
    case "certification":
      return FiStar;
    case "program":
      return FiTrendingUp;
    default:
      return FiAward;
  }
};

const Awards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="awards" className="awards section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Awards & Recognition</h2>
          <p className="section-subtitle">
            Celebrating achievements and excellence throughout my career
          </p>
        </motion.div>

        <div className="awards-timeline">
          {awards.map((yearGroup, groupIndex) => (
            <motion.div
              key={yearGroup.year}
              className="awards-year-group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            >
              <div className="year-label">
                <span>{yearGroup.year}</span>
              </div>
              <div className="awards-list">
                {yearGroup.items.map((award, index) => {
                  const IconComponent = getIconByType(award.type);
                  return (
                    <motion.div
                      key={award.title}
                      className={`award-card card ${award.type}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: groupIndex * 0.1 + index * 0.05,
                      }}
                    >
                      <div className="award-icon">
                        <IconComponent />
                      </div>
                      <div className="award-content">
                        <div className="award-header">
                          <h4 className="award-title">{award.title}</h4>
                          <span className="award-date">{award.date}</span>
                        </div>
                        <span className="award-issuer">{award.issuer}</span>
                        <p className="award-description">{award.description}</p>
                        {award.image && (
                          <a
                            href={award.image}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="award-certificate-link"
                          >
                            <FiImage /> View Certificate
                          </a>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="awards-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="https://www.linkedin.com/in/nishant-singh-ba161a22/details/honors/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <FiZap /> View All Awards on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;

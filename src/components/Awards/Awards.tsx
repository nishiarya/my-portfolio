import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FiAward, FiStar, FiZap, FiTrendingUp, FiImage } from "react-icons/fi";
import { awardsData } from "./Awards.data";
import type { AwardItem } from "./Awards.data";
import "./Awards.css";

// Cache for certificate existence checks
const certificateCache: Record<string, boolean> = {};

// Function to check if certificate exists
const checkCertificateExists = async (path: string): Promise<boolean> => {
  if (certificateCache[path] !== undefined) {
    return certificateCache[path];
  }

  try {
    const response = await fetch(path, { method: "HEAD" });
    const exists = response.ok;
    certificateCache[path] = exists;
    return exists;
  } catch {
    certificateCache[path] = false;
    return false;
  }
};

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

// Award Card Component with certificate check
const AwardCard = ({
  award,
  groupIndex,
  index,
  isInView,
}: {
  award: AwardItem;
  groupIndex: number;
  index: number;
  isInView: boolean;
}) => {
  const [certificateExists, setCertificateExists] = useState(false);
  const [thumbnailExists, setThumbnailExists] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const IconComponent = getIconByType(award.type);

  useEffect(() => {
    const checkFiles = async () => {
      setIsLoading(true);

      if (award.certificate) {
        const certExists = await checkCertificateExists(award.certificate);
        setCertificateExists(certExists);
      }

      if (award.thumbnail) {
        const thumbExists = await checkCertificateExists(award.thumbnail);
        setThumbnailExists(thumbExists);
      }

      setIsLoading(false);
    };

    checkFiles();
  }, [award.certificate, award.thumbnail]);

  return (
    <motion.div
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

        {/* Thumbnail and Certificate Link */}
        {!isLoading && certificateExists && (
          <div className="award-certificate-section">
            {thumbnailExists && award.thumbnail && (
              <a
                href={award.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="award-thumbnail-link"
              >
                <img
                  src={award.thumbnail}
                  alt={`${award.title} certificate thumbnail`}
                  className="award-thumbnail"
                />
              </a>
            )}
            <a
              href={award.certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="award-certificate-link"
            >
              <FiImage /> View Certificate
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
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
          {awardsData.map((yearGroup, groupIndex) => (
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
                {yearGroup.items.map((award, index) => (
                  <AwardCard
                    key={award.title}
                    award={award}
                    groupIndex={groupIndex}
                    index={index}
                    isInView={isInView}
                  />
                ))}
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

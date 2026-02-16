import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { FiChevronLeft, FiChevronRight, FiPause, FiPlay } from "react-icons/fi";
import { expertiseBanners } from "./Expertise.data";
import "./Expertise.css";

const AUTO_SCROLL_INTERVAL = 15000; // 15 seconds

const Expertise = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) =>
      prev === expertiseBanners.length - 1 ? 0 : prev + 1
    );
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) =>
      prev === 0 ? expertiseBanners.length - 1 : prev - 1
    );
  }, []);

  // Auto-scroll effect with cleanup
  useEffect(() => {
    // Clear any existing intervals
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (progressRef.current) {
      clearInterval(progressRef.current);
      progressRef.current = null;
    }

    if (isPaused) {
      return;
    }

    // Reset progress
    setProgress(0);

    // Progress update (every 150ms for smooth animation)
    const progressStep = 100 / (AUTO_SCROLL_INTERVAL / 150);
    progressRef.current = setInterval(() => {
      setProgress((prev) => Math.min(prev + progressStep, 100));
    }, 150);

    // Auto-scroll interval
    intervalRef.current = setInterval(() => {
      handleNext();
      setProgress(0);
    }, AUTO_SCROLL_INTERVAL);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (progressRef.current) {
        clearInterval(progressRef.current);
        progressRef.current = null;
      }
    };
  }, [isPaused, handleNext, activeIndex]);

  // Reset interval when manually navigating
  const resetInterval = useCallback(() => {
    setProgress(0);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (progressRef.current) {
      clearInterval(progressRef.current);
    }
    if (!isPaused) {
      const progressStep = 100 / (AUTO_SCROLL_INTERVAL / 150);
      progressRef.current = setInterval(() => {
        setProgress((prev) => Math.min(prev + progressStep, 100));
      }, 150);
      intervalRef.current = setInterval(() => {
        handleNext();
        setProgress(0);
      }, AUTO_SCROLL_INTERVAL);
    }
  }, [isPaused, handleNext]);

  const onPrev = () => {
    handlePrev();
    resetInterval();
  };

  const onNext = () => {
    handleNext();
    resetInterval();
  };

  const onDotClick = (index: number) => {
    setActiveIndex(index);
    resetInterval();
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  const activeBanner = expertiseBanners[activeIndex];

  return (
    <section id="expertise" className="expertise section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Areas of Expertise</h2>
          <p className="section-subtitle">
            Specialized capabilities that drive results
          </p>
        </motion.div>

        {/* Banner Showcase */}
        <motion.div
          className="expertise-showcase"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Main Banner Display */}
          <div className="banner-display">
            <button
              className="banner-nav banner-nav-prev"
              onClick={onPrev}
              aria-label="Previous expertise"
            >
              <FiChevronLeft />
            </button>

            <motion.div
              key={activeBanner.id}
              className="banner-main"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="banner-image-wrapper">
                <img
                  src={activeBanner.image}
                  alt={activeBanner.title}
                  className="banner-image"
                />
                <div
                  className="banner-overlay"
                  style={{
                    background: `linear-gradient(135deg, ${activeBanner.color}20, transparent)`,
                  }}
                />
              </div>

              <div className="banner-content">
                <div
                  className="banner-icon"
                  style={{ background: activeBanner.color }}
                >
                  <activeBanner.icon />
                </div>
                <div className="banner-text">
                  <span className="banner-subtitle">{activeBanner.subtitle}</span>
                  <h3 className="banner-title">{activeBanner.title}</h3>
                  <p className="banner-description">{activeBanner.description}</p>
                  <div className="banner-highlights">
                    {activeBanner.highlights.map((highlight, index) => (
                      <motion.span
                        key={highlight}
                        className="highlight-tag"
                        style={{ borderColor: activeBanner.color }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {highlight}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <button
              className="banner-nav banner-nav-next"
              onClick={onNext}
              aria-label="Next expertise"
            >
              <FiChevronRight />
            </button>
          </div>

          {/* Banner Thumbnails */}
          <div className="banner-thumbnails">
            {expertiseBanners.map((banner, index) => (
              <button
                key={banner.id}
                className={`thumbnail-item ${index === activeIndex ? "active" : ""}`}
                onClick={() => onDotClick(index)}
                style={{
                  borderColor: index === activeIndex ? banner.color : undefined,
                }}
              >
                <img src={banner.image} alt={banner.title} />
                <div className="thumbnail-overlay">
                  <banner.icon />
                </div>
              </button>
            ))}
          </div>

          {/* Progress Bar */}
          {!isPaused && (
            <div className="banner-progress-container">
              <div
                className="banner-progress-bar"
                style={{
                  width: `${progress}%`,
                  background: activeBanner.color,
                }}
              />
            </div>
          )}

          {/* Pagination Dots with Play/Pause */}
          <div className="banner-pagination">
            <button
              className={`pause-play-btn ${isPaused ? "paused" : ""}`}
              onClick={togglePause}
              aria-label={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
            >
              {isPaused ? <FiPlay /> : <FiPause />}
            </button>
            {expertiseBanners.map((banner, index) => (
              <button
                key={banner.id}
                className={`pagination-dot ${index === activeIndex ? "active" : ""}`}
                onClick={() => onDotClick(index)}
                style={{
                  background: index === activeIndex ? banner.color : undefined,
                }}
                aria-label={`Go to ${banner.title}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;

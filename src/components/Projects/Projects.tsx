import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "./Projects.data";
import "./Projects.css";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="projects section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Highlighted projects delivered for global enterprise clients
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-header">
                <div
                  className="project-icon"
                  style={{ background: project.color }}
                >
                  <project.icon />
                </div>
                <div className="project-meta">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-client">{project.client}</span>
                </div>
              </div>

              <p className="project-description">{project.description}</p>

              {/* Project Metrics */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="project-metrics">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="project-metric">
                      <span className="metric-value" style={{ color: project.color }}>
                        {metric.value}
                      </span>
                      <span className="metric-label">{metric.label}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="project-achievements">
                <h4>Key Achievements</h4>
                <ul>
                  {project.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div className="project-technologies">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="tech-tag"
                    style={{ borderColor: project.color, color: project.color }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

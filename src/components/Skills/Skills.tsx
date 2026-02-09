import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiActivity, FiBox, FiSettings } from "react-icons/fi";
import {
  skillCategories,
  technicalTools,
  coreCompetencies,
} from "./Skills.data";
import "./Skills.css";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="skills section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </motion.div>

        {/* Skill Categories with Progress Bars */}
        <div className="skills-categories">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className="skill-category card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <div className="category-header">
                <div
                  className="category-icon"
                  style={{ background: category.color }}
                >
                  <category.icon />
                </div>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.5 + catIndex * 0.1 + skillIndex * 0.1,
                        }}
                        style={{ background: category.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Tools */}
        <motion.div
          className="tools-section"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="tools-title">
            <FiSettings className="title-icon" />
            Tools & Technologies
          </h3>
          <div className="tools-grid">
            {Object.entries(technicalTools).map(([category, tools], index) => (
              <motion.div
                key={category}
                className="tool-category"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <h4>{category}</h4>
                <div className="tools-tags">
                  {tools.map((tool) => (
                    <span key={tool} className="tool-tag">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Competencies */}
        <motion.div
          className="competencies-section"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="competencies-title">
            <FiActivity className="title-icon" />
            Core Competencies
          </h3>
          <div className="competencies-grid">
            {coreCompetencies.map((competency, index) => (
              <motion.div
                key={competency}
                className="competency-item"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
              >
                <FiBox className="competency-icon" />
                <span>{competency}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

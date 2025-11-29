import { motion } from "framer-motion";
import MemeImage from "./MemeImage";
import "../styles/CVPreview.css";

const CVPreview = ({ generalInfo, education, experience }) => {
  return (
    <motion.div
      className="cv-preview"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="cv-header">
        <MemeImage />
        <div className="personal-info">
          <h1>{generalInfo.name || "NAME STILL EMPTY BOSS! 🤡"}</h1>
          <div className="contact-info">
            <p>📧 {generalInfo.email || "email@example.com"}</p>
            <p>📱 {generalInfo.phone || "+62 812-3456-7890"}</p>
          </div>
        </div>
      </div>

      <div className="cv-section">
        <h2>🎓 EDUCATION</h2>
        {education.length === 0 ? (
          <p className="empty-message">NO EDUCATION YET! 😅</p>
        ) : (
          education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="education-item"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3>{edu.school}</h3>
              <p>{edu.degree}</p>
              <span>
                {edu.startDate} - {edu.endDate}
              </span>
            </motion.div>
          ))
        )}
      </div>

      <div className="cv-section">
        <h2>💼 WORK EXPERIENCE</h2>
        {experience.length === 0 ? (
          <p className="empty-message">NO WORK EXPERIENCE YET! 😴</p>
        ) : (
          experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="experience-item"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3>{exp.company}</h3>
              <p className="position">{exp.position}</p>
              <p className="responsibilities">{exp.responsibilities}</p>
              <span>
                {exp.startDate} - {exp.endDate}
              </span>
            </motion.div>
          ))
        )}
      </div>

      <div className="cv-footer">
        <p>THIS CV WAS MADE WITH RANDOM CV BUILDER! 🚀</p>
        <p>THANKS FOR USING! 😎😹😥</p>
        <p>THANKS TO DEEPSEEK 🧢🧢😘🧢</p>
      </div>
    </motion.div>
  );
};

export default CVPreview;

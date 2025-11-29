import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Education.css";

const Education = ({ items, onAdd, onUpdate, onDelete }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      onUpdate(editingId, { ...formData, id: editingId });
      setEditingId(null);
    } else {
      onAdd(formData);
    }
    setFormData({ school: "", degree: "", startDate: "", endDate: "" });
    setIsAdding(false);
  };

  const handleEdit = (item) => {
    setFormData(item);
    setEditingId(item.id);
    setIsAdding(true);
  };

  const handleCancel = () => {
    setFormData({ school: "", degree: "", startDate: "", endDate: "" });
    setIsAdding(false);
    setEditingId(null);
  };

  return (
    <motion.div
      className="education"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <h2>🎓 MY EDUCATION! 🎓</h2>

      {!isAdding && (
        <button className="add-btn" onClick={() => setIsAdding(true)}>
          ➕ ADD NEW EDUCATION!
        </button>
      )}

      <AnimatePresence>
        {isAdding && (
          <motion.form
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            onSubmit={handleSubmit}
            className="education-form"
          >
            <div className="form-group">
              <label>SCHOOL/UNIVERSITY NAME 🏫</label>
              <input
                type="text"
                value={formData.school}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, school: e.target.value }))
                }
                placeholder="e.g., Harvard University (just be confident!)"
                required
              />
            </div>

            <div className="form-group">
              <label>DEGREE AND MAJOR 📚</label>
              <input
                type="text"
                value={formData.degree}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, degree: e.target.value }))
                }
                placeholder="e.g., Bachelor of Memeology & Shitposting"
                required
              />
            </div>

            <div className="date-group">
              <div className="form-group">
                <label>START DATE 📅</label>
                <input
                  type="month"
                  value={formData.startDate}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      startDate: e.target.value,
                    }))
                  }
                  required
                />
              </div>

              <div className="form-group">
                <label>END DATE 📅</label>
                <input
                  type="month"
                  value={formData.endDate}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      endDate: e.target.value,
                    }))
                  }
                  required
                />
              </div>
            </div>

            <div className="form-buttons">
              <button type="submit" className="save-btn">
                💾 SAVE!
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="cancel-btn"
              >
                ❌ CANCEL!
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>

      <div className="education-list">
        <AnimatePresence>
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ delay: index * 0.1 }}
              className="education-item"
            >
              <div className="education-content">
                <h3>{item.school}</h3>
                <p>{item.degree}</p>
                <span>
                  {item.startDate} - {item.endDate}
                </span>
              </div>
              <div className="education-actions">
                <button onClick={() => handleEdit(item)} className="edit-btn">
                  ✏️ EDIT
                </button>
                <button
                  onClick={() => onDelete(item.id)}
                  className="delete-btn"
                >
                  🗑️ DELETE
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Education;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Experience.css";

const Experience = ({ items, onAdd, onUpdate, onDelete }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    responsibilities: "",
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
    setFormData({
      company: "",
      position: "",
      responsibilities: "",
      startDate: "",
      endDate: "",
    });
    setIsAdding(false);
  };

  const handleEdit = (item) => {
    setFormData(item);
    setEditingId(item.id);
    setIsAdding(true);
  };

  const handleCancel = () => {
    setFormData({
      company: "",
      position: "",
      responsibilities: "",
      startDate: "",
      endDate: "",
    });
    setIsAdding(false);
    setEditingId(null);
  };

  return (
    <motion.div
      className="experience"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2>💼 MY WORK EXPERIENCE! 💼</h2>

      {!isAdding && (
        <button className="add-btn" onClick={() => setIsAdding(true)}>
          ➕ ADD NEW EXPERIENCE!
        </button>
      )}

      <AnimatePresence>
        {isAdding && (
          <motion.form
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            onSubmit={handleSubmit}
            className="experience-form"
          >
            <div className="form-group">
              <label>COMPANY NAME 🏢</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, company: e.target.value }))
                }
                placeholder="e.g., Google, Facebook, or Uncle Budi's Store"
                required
              />
            </div>

            <div className="form-group">
              <label>YOUR POSITION 👨‍💼</label>
              <input
                type="text"
                value={formData.position}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, position: e.target.value }))
                }
                placeholder="e.g., CEO, Manager, or Professional Typer"
                required
              />
            </div>

            <div className="form-group">
              <label>JOB DESCRIPTION 📝</label>
              <textarea
                value={formData.responsibilities}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    responsibilities: e.target.value,
                  }))
                }
                placeholder="Describe your responsibilities in cool words!"
                rows="4"
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

      <div className="experience-list">
        <AnimatePresence>
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ delay: index * 0.1 }}
              className="experience-item"
            >
              <div className="experience-content">
                <h3>{item.company}</h3>
                <p className="position">{item.position}</p>
                <p className="responsibilities">{item.responsibilities}</p>
                <span>
                  {item.startDate} - {item.endDate}
                </span>
              </div>
              <div className="experience-actions">
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

export default Experience;

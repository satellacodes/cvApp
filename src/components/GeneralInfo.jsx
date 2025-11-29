import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/GeneralInfo.css";

const GeneralInfo = ({ data, onChange }) => {
  const [formData, setFormData] = useState(data);

  useEffect(() => {
    onChange(formData);
  }, [formData, onChange]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <motion.div
      className="general-info"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>🆔 MY BASIC INFO! 🆔</h2>

      <div className="form-group">
        <label>WHAT'S YOUR NAME? 🤔</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g., John 'The Legend' Doe"
        />
      </div>

      <div className="form-group">
        <label>EMAIL FOR CONTACT 📧</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="e.g., john.awesome@email.com"
        />
      </div>

      <div className="form-group">
        <label>PHONE NUMBER 📱</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="e.g., +62 812-3456-7890"
        />
      </div>
    </motion.div>
  );
};

export default GeneralInfo;

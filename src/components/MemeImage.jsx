import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/MemeImage.css";

const MemeImage = () => {
  const [memeUrl, setMemeUrl] = useState("");

  useEffect(() => {
    // Fetch random meme dari API
    fetch("https://meme-api.com/gimme")
      .then((response) => response.json())
      .then((data) => setMemeUrl(data.url))
      .catch(() => {
        // Fallback meme local jika API error
        setMemeUrl("https://i.imgflip.com/30b1gx.jpg");
      });
  }, []);

  return (
    <motion.div
      className="meme-container"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      {memeUrl && (
        <img
          src={memeUrl}
          alt="Random Meme"
          className="meme-image"
          onError={(e) => {
            e.target.src = "https://i.imgflip.com/30b1gx.jpg";
          }}
        />
      )}
      <div className="meme-overlay">
        <span>🔥 CV GUE NIH! 🔥</span>
      </div>
    </motion.div>
  );
};

export default MemeImage;

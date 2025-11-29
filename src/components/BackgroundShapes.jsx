import { useEffect, useState } from "react";
import "../styles/BackgroundShapes.css";

const BackgroundShapes = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const shapes = [];
  for (let i = 0; i < 15; i++) {
    const type = i % 3;
    const size = 40 + Math.random() * 80;
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const animationDelay = Math.random() * 5;
    const duration = 3 + Math.random() * 4;

    shapes.push(
      <div
        key={i}
        className={`shape ${type === 0 ? "circle" : type === 1 ? "triangle" : "square"}`}
        style={{
          left: `${left}%`,
          top: `${top}%`,
          width: type !== 1 ? `${size}px` : "0",
          height: type !== 1 ? `${size}px` : "0",
          animationDelay: `${animationDelay}s`,
          animationDuration: `${duration}s`,
          transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
        }}
      />,
    );
  }

  return <div className="background-shapes">{shapes}</div>;
};

export default BackgroundShapes;

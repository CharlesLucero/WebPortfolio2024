import { useState } from "react";

const GrowButton = () => {
  // State to track the size of the button
  const [size, setSize] = useState(100); // Initial size in pixels
  // State to track the color of the button
  const [color, setColor] = useState("#3498db"); // Initial color

  // Function to handle button click
  const handleClick = () => {
    // Double the size
    setSize((prevSize) => prevSize * 2);

    // Generate a random color
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColor(randomColor);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* Button with dynamic size and color */}
      <button
       className="font-spacemono"
        onClick={handleClick}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: color,
          color: "white",
          fontSize: "24px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "all 0.3s ease", // Smooth transition for size and color change
        }}
      >
       Button Grow
      </button>
    </div>
  );
};

export default GrowButton;

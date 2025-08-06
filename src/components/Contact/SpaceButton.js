// SpaceButton.js
import React from "react";
import "./SpaceButton.css";

const SpaceButton = ({ children, ...props }) => {
  return (
    <div className="btn-container">
      <button id="space-btn" {...props}>
        <span>{children}</span>

        {[...Array(42)].map((_, index) => (
          <div
            key={index}
            className="star"
            style={{
              position: "absolute",
              left: `${Math.random() * 250}px`,
              top: `${Math.random() * 60}px`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `scale(${Math.random() * 2})`,
            }}
          ></div>
        ))}

        <div className="shooting-star shooting-star-1" style={{ animationDelay: "1.2s" }}></div>
        <div className="shooting-star shooting-star-2" style={{ animationDelay: "0.8s" }}></div>
        <div className="shooting-star shooting-star-3" style={{ animationDelay: "4.9s" }}></div>
        <div className="shooting-star shooting-star-4" style={{ animationDelay: "3.6s" }}></div>
      </button>
    </div>
  );
};

export default SpaceButton;

import React from "react";

const Disabled = () => {
  // Assuming the progress is 50% for the circle (you can adjust this value)
  const progress = 50;
  const radius = 40;
  const stroke = 5;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="progress-container3">
      <div className="label3">Disabled</div>
      <div className="progress-circle-wrapper3">
        <svg height={radius * 2} width={radius * 2}>
          <circle
            stroke="#e6e6e6"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            className="progress-ring3"
            stroke="#ff4d4d"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={`${circumference} ${circumference}`}
            style={{ strokeDashoffset }}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>
        <div className="x-icon">✖️</div>
      </div>
      <div className="number3">1,425</div>
    </div>
  );
};

export default Disabled;

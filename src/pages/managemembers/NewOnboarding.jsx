import React from "react";

const NewOnboarding = () => {
  // Assuming the progress is 50% for the circle (you can adjust this value)
  const progress = 50;
  const radius = 40;
  const stroke = 5;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="progress-container5">
      <div className="label5">New Onboarding</div>
      <div className="progress-circle-wrapper5">
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
            className="progress-ring1"
            stroke="#4a90e2"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={`${circumference} ${circumference}`}
            style={{ strokeDashoffset }}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>
        <div className="arrow-icon5">➡️</div>
      </div>
      <div className="number5">221</div>
    </div>
  );
};

export default NewOnboarding;

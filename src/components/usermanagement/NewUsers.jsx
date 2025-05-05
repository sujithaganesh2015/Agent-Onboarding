import React from "react";

const NewUsers = () => {
  // Assuming the progress is 50% for the circle (you can adjust this value)
  const progress = 50;
  const radius = 40;
  const stroke = 5;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="progress-container1">
      <div className="label1">New Users</div>
      <div className="progress-circle-wrapper1">
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
        <div className="arrow-icon2">➡️</div>
      </div>
      <div className="number1">221</div>
    </div>
  );
};

export default NewUsers;

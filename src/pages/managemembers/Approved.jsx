import React from "react";

const Approved = () => {
  // Assuming the progress is 75% for the circle (you can adjust this value)
  const progress = 75;
  const radius = 40;
  const stroke = 5;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="progress-container4">
      <div className="label4">Approved</div>
      <div className="progress-circle-wrapper4">
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
            className="progress-ring4"
            stroke="#00cc00"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={`${circumference} ${circumference}`}
            style={{ strokeDashoffset }}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>
        <div className="thumbs-up4">👍</div>
      </div>
      <div className="number4">2,456</div>
    </div>
  );
};

export default Approved;

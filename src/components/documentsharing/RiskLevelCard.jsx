import React from "react";
import { FaStar } from "react-icons/fa"; // Import star icon

const RiskLevelCard = () => {
  return (
    <div className="risk-level-card">
      <div className="star-rating">
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} className="star filled" />
        ))}
      </div>
      <h3 className="risk-level-title">Risk Level</h3>
      <div className="review-body">
        <span className="review-label">Review body</span>
        <span className="review-value">Directors</span>
      </div>
      <div className="reviewer-info">
        <div className="avatar-placeholder"></div>
        <span className="reviewer-name">Aizen, Kubo</span>
      </div>
    </div>
  );
};

export default RiskLevelCard;

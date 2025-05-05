import React from "react";

const CompanyCard = () => {
  return (
    <div className="company-card">
      <div className="company-image-placeholder"></div>
      <div className="company-details">
        <h3 className="company-name">Federal Reserve</h3>
        <span className="company-status active">Active</span>
      </div>
    </div>
  );
};

export default CompanyCard;

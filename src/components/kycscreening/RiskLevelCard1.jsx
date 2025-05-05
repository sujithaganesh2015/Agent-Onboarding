import React from "react";

const RiskLevelCard1 = () => {
  return (
    <div className="card1">
      <div className="rating1">
        {[...Array(5)].map((_, index) => (
          <span key={index} className="star1">
            ★
          </span>
        ))}
      </div>
      <h3>RISK LEVEL</h3>
      <p>Review body</p>
      <div className="person1">
        <img
          src="https://via.placeholder.com/40" // Placeholder image; replace with actual image URL
          alt="Profile"
          className="profile-pic1"
        />
        <span>Aizen, Kubo</span>
      </div>
      <div className="kyc-status1">
        <span>KYC STATUS</span>
        <div className="progress-bar1">
          <div className="progress1" style={{ width: "62%" }}></div>
        </div>
        <span>62%</span>
      </div>
    </div>
  );
};

export default RiskLevelCard1;

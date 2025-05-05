import React from "react";
import { FaArrowLeft } from "react-icons/fa"; // Import left arrow icon

const NewRequestsCard = () => {
  return (
    <div className="new-requests-card">
      <span className="new-requests-label">New Requests</span>
      <div className="number-container">
        <span className="new-requests-number">56</span>
        <div className="arrow-circle">
          <FaArrowLeft className="arrow-icon1" />
        </div>
      </div>
    </div>
  );
};

export default NewRequestsCard;

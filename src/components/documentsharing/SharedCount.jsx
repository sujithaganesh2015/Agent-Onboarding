import React from "react";
import { FiArrowUpRight } from "react-icons/fi"; // Importing an upward arrow icon from react-icons

const SharedCount = () => {
  return (
    <div className="shared-count-container">
      <span className="shared-label">Shared</span>
      <div className="icon-circle">
        <FiArrowUpRight className="arrow-icon" />
      </div>
      <span className="count">2,456</span>
    </div>
  );
};

export default SharedCount;

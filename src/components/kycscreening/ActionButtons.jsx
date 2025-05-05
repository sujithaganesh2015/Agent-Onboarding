import React from "react";

const ActionButtons = () => {
  return (
    <div className="action-buttons-container">
      <div className="action-button">
        <div className="icon-circle request">
          <span className="icon">←</span>
        </div>
        <span className="label">Request Company Documents</span>
      </div>
      <div className="action-button">
        <div className="icon-circle upload">
          <span className="icon">↑</span>
        </div>
        <span className="label">Upload Company Documents</span>
      </div>
    </div>
  );
};

export default ActionButtons;

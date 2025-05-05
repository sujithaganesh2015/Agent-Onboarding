import React from "react";

const QuickAction = () => {
  return (
    <div className="dashboard-section">
      <button className="tab">Quick Actions</button>
      <div className="quick-actions-section">
        <div className="flex items-center justify-between mb-4">
          <button className="tab active">Approval</button>
          <span className="notification-badge">14</span>
        </div>
        <div className="quick-actions-content">
          <div className="quick-action-item">
            <div className="document-icon">
              <span>A</span>
            </div>
            <div className="document-content">
              <p className="company-name">Company A</p>
              <p className="status">Approved to Onboard</p>
            </div>
            <p className="document-date">23 Dec, 2022</p>
          </div>
          <div className="quick-action-item">
            <div className="document-icon">
              <span>B</span>
            </div>
            <div className="document-content">
              <p className="company-name">Company B</p>
              <p className="status">Waiting for approval</p>
            </div>
            <p className="document-date">23 Dec, 2022</p>
          </div>
          <div className="quick-action-item">
            <div className="document-icon">
              <span>C</span>
            </div>
            <div className="document-content">
              <p className="company-name">Company C</p>
              <p className="status">Waiting for approval</p>
            </div>
            <p className="document-date">23 Dec, 2022</p>
          </div>
          <div className="quick-action-item">
            <div className="document-icon">
              <span>D</span>
            </div>
            <div className="document-content">
              <p className="company-name">Company D</p>
              <p className="status">Waiting for approval</p>
            </div>
            <p className="document-date">23 Dec, 2022</p>
          </div>
        </div>
      </div>

      <div>
        <button className="see-more-btn">See More</button>
      </div>
    </div>
  );
};

export default QuickAction;

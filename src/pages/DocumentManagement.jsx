import React from "react";

const DocumentManagement = () => {
  return (
    <div className="dashboard-section">
      <div className="flex items-center justify-between">
        <button className="tab">Document Management</button>
        <span className="notification-badge">3</span>
      </div>
      <div className="document-section">
        {/* Document Item 1 */}
        <div className="document-item">
          <div className="document-icon">
            <span>A</span>
          </div>
          <div className="document-content">
            <p className="company-name">Company A</p>
            <p className="status">Waiting for approval</p>
          </div>
          <p className="document-date">23 Dec, 2022</p>
        </div>
        {/* Document Item 2 */}
        <div className="document-item">
          <div className="document-icon">
            <span>A</span>
          </div>
          <div className="document-content">
            <p className="company-name">Company A</p>
            <p className="status">Waiting for approval</p>
          </div>
          <p className="document-date">23 Dec, 2022</p>
        </div>
        {/* Document Item 3 */}
        <div className="document-item">
          <div className="document-icon">
            <span>A</span>
          </div>
          <div className="document-content">
            <p className="company-name">Company A</p>
            <p className="status">Waiting for approval</p>
          </div>
          <p className="document-date">23 Dec, 2022</p>
        </div>
      </div>
      <div>
        <button className="see-more-btn">See More</button>
      </div>
    </div>
  );
};

export default DocumentManagement;

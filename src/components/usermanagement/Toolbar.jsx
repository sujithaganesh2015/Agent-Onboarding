import React from "react";

const Toolbar = () => {
  return (
    <div className="toolbar-container">
      <button className="toolbar-btn">
        Filter <span className="icon">▼</span>
      </button>
      <button className="toolbar-btn">
        Sort <span className="icon">▼</span>
      </button>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter company code"
          className="search-input"
        />
        <span className="search-icon">🔍</span>
      </div>
      <button className="add-user-btn">
        Add User <span className="plus-icon">+</span>
      </button>
      <button className="toolbar-btn">
        Refresh <span className="refresh-icon">🔄</span>
      </button>
      <button className="toolbar-btn">
        Customise <span className="customise-icon">⚙️</span>
      </button>
      <button className="toolbar-btn">
        <span className="menu-icon">⋮</span>
      </button>
    </div>
  );
};

export default Toolbar;

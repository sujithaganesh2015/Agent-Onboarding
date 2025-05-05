import React from "react";

const ToolBar = () => {
  return (
    <div className="toolbar-container1">
      <button className="toolbar-btn1">
        Filter <span className="icon1">▼</span>
      </button>
      <button className="toolbar-btn1">
        Sort <span className="icon1">▼</span>
      </button>
      <div className="search-container1">
        <input
          type="text"
          placeholder="Enter company code"
          className="search-input1"
        />
        <span className="search-icon1">🔍</span>
      </div>
      <button className="add-user-btn1">
        Add User <span className="plus-icon1">+</span>
      </button>
      <button className="toolbar-btn1">
        Refresh <span className="refresh-icon1">🔄</span>
      </button>
      <button className="toolbar-btn1">
        Customise <span className="customise-icon1">⚙️</span>
      </button>
      <button className="toolbar-btn1">
        <span className="menu-icon1">⋮</span>
      </button>
    </div>
  );
};

export default ToolBar;

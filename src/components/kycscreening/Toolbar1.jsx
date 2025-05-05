import React from "react";

const Toolbar1 = () => {
  return (
    <div className="toolbar-container3">
      <div className="search-container3">
        <input type="text" value="C0001" readOnly className="search-input3" />
        <span className="search-icon3">🔍</span>
      </div>
      <button className="toolbar-btn3">
        Refresh <span className="refresh-icon3">🔄</span>
      </button>
      <button className="toolbar-btn3">
        Customise <span className="customise-icon3">⚙️</span>
      </button>
      <button className="toolbar-btn3">
        <span className="menu-icon3">⋮</span>
      </button>
    </div>
  );
};

export default Toolbar1;

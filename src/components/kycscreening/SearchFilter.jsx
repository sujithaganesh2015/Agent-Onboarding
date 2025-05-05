import React from "react";

const SearchFilter = () => {
  return (
    <div className="search-filter-container">
      <button className="dropdown-button">
        Filter <span className="arrow">▼</span>
      </button>
      <button className="dropdown-button">
        Sort <span className="arrow">▼</span>
      </button>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Try 'Miami beachhouse'"
          className="search-input"
        />
        <span className="search-icon">🔍</span>
      </div>
    </div>
  );
};

export default SearchFilter;

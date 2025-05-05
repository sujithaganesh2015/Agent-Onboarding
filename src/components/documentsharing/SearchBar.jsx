import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Import the magnifying glass icon

const SearchBar = () => {
  const [companyCode, setCompanyCode] = useState("");

  const handleInputChange = (e) => {
    setCompanyCode(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter company code"
        value={companyCode}
        onChange={handleInputChange}
        className="search-input"
      />
      <FaSearch className="search-icon" />{" "}
      {/* Replace emoji with FaSearch icon */}
    </div>
  );
};

export default SearchBar;

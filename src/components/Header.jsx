import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = ({ title = "Docit" }) => {
  return (
    <header className="header">
      <div className="header-title">{title}</div>
      <div className="header-icons">
        <FaBell className="icon" />
        <Link to="/profile">
          <FaUserCircle className="icon" />
        </Link>
      </div>
    </header>
  );
};

export default Header;

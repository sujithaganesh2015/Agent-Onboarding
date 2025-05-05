import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdDashboard, MdOutlineVerifiedUser } from "react-icons/md";
import { IoDocuments, IoSettingsOutline } from "react-icons/io5";
import { FaRegBuilding, FaRegUser } from "react-icons/fa";
import { IoMdHelpCircleOutline } from "react-icons/io";

const Sidebar = () => {
  const [isManageOpen, setIsManageOpen] = useState(false);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Docit</h2>
      </div>
      <nav className="menu-top">
        <Link to="/dashboard" className="menu-item">
          <MdDashboard className="menu-icon" />
          Dashboard
        </Link>
        <Link to="/documentsharing" className="menu-item">
          <IoDocuments className="menu-icon" />
          Document Sharing
        </Link>
        <div
          className="menu-item"
          onClick={() => setIsManageOpen(!isManageOpen)}
        >
          <FaRegBuilding className="menu-icon" />
          Manage Companies
        </div>
        {isManageOpen && (
          <div className="submenu">
            <Link to="/managemembers" className="menu-item submenu-item">
              <FaRegUser className="menu-icon" />
              Manage Members
            </Link>
            <Link to="/kycscreening" className="menu-item submenu-item">
              <MdOutlineVerifiedUser className="menu-icon" />
              KYC Screening
            </Link>
          </div>
        )}

        <Link to="/usermanagement" className="menu-item">
          <FaRegUser className="menu-icon" />
          User Management
        </Link>
      </nav>
      <nav className="menu-bottom">
        <Link to="/settings" className="menu-item">
          <IoSettingsOutline className="menu-icon" />
          Settings
        </Link>
        <Link to="/helpcenter" className="menu-item">
          <IoMdHelpCircleOutline className="menu-icon" />
          Help Center
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;

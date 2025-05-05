import React from "react";

const ButtonGroup = () => {
  return (
    <div className="button-group">
      <button className="role-button">
        <span className="icon">👤 </span> Employee
      </button>
      <button className="role-button">
        <span className="icon">👤</span> Stakeholder
      </button>
      <button className="role-button">
        <span className="icon">👤</span> Director
      </button>
      <button className="add-button">
        <span className="symbol">+</span>Add
      </button>
    </div>
  );
};

export default ButtonGroup;

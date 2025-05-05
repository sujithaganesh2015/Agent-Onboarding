import React from "react";
import ProgressCircle from "../components/usermanagement/ProgressCircle";
import NewUsers from "../components/usermanagement/NewUsers";
import Disabled from "../components/usermanagement/Disabled";
import Toolbar from "../components/usermanagement/Toolbar";
import Table from "../components/usermanagement/Table";

const UserManagement = () => {
  return (
    <div>
      <div className="flex">
        <ProgressCircle />
        <NewUsers />
        <Disabled />
      </div>
      <Toolbar />
      <Table />
    </div>
  );
};

export default UserManagement;

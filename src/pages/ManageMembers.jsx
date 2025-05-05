import React from "react";
import Approved from "./managemembers/Approved";
import NewOnboarding from "./managemembers/NewOnboarding";
import Cancelled from "./managemembers/Cancelled";
import ToolBar from "./managemembers/ToolBar";
import CompanyTable from "./managemembers/CompanyTable";

const ManageMembers = () => {
  return (
    <div>
      <div className="flex">
        <Approved />
        <NewOnboarding />
        <Cancelled />
      </div>
      <ToolBar />
      <CompanyTable />
    </div>
  );
};

export default ManageMembers;

import React from "react";
import SearchBar from "../components/documentsharing/SearchBar";
import CompanyCard from "../components/documentsharing/CompanyCard";
import RiskLevelCard from "../components/documentsharing/RiskLevelCard";
import NewRequestsCard from "../components/documentsharing/NewRequestsCard";
import SharedCount from "../components/documentsharing/SharedCount";
import ShareButton from "../components/documentsharing/ShareButton";
import DocumentTable from "../components/documentsharing/DocumentTable";

const DocumentSharing = () => {
  return (
    <div>
      <SearchBar />
      <div className="flex">
        <CompanyCard />
        <RiskLevelCard />
        <SharedCount />
        <NewRequestsCard />
      </div>

      <DocumentTable />
    </div>
  );
};

export default DocumentSharing;

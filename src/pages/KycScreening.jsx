import React from "react";
import Card from "../components/kycscreening/Card";
import Toolbar1 from "../components/kycscreening/Toolbar1";
import RiskLevelCard1 from "../components/kycscreening/RiskLevelCard1";
import ButtonGroup from "../components/kycscreening/ButtonGroup";
import SearchFilter from "../components/kycscreening/SearchFilter";
import DataTable from "../components/kycscreening/DataTable";
import ActionButtons from "../components/kycscreening/ActionButtons";

const KycScreening = () => {
  return (
    <div>
      <Toolbar1 />
      <div className="flex">
        <Card />
        <RiskLevelCard1 />
        <ActionButtons />
      </div>
      <ButtonGroup />
      <SearchFilter />
      <DataTable />
    </div>
  );
};

export default KycScreening;

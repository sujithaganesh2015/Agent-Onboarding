import React, { use } from "react";
import Navbar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import ManageCompanies from "./pages/ManageCompanies";
import DocumentSharing from "./pages/DocumentSharing";
import UserManagement from "./pages/UserManagement";
import { Routes, Route, useLocation } from "react-router-dom";
import Settings from "./pages/Settings";
import HelpCenter from "./pages/HelpCenter";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ManageMembers from "./pages/ManageMembers";
import KycScreening from "./pages/KycScreening";

// const dashboard = () => <div className="p-4">Dashboard</div>;
// const manageCompanies = () => <div className="p-4">Manage Companies</div>;
// const managemembers = () => <div className="p-4">Manage Members</div>;
// const kycscreening = () => <div className="p-4">KYC Screening</div>;
// const documentSharing = () => <div className="p-4">Document Sharing</div>;
// const userManagement = () => <div className="p-4">User Management</div>;
// const settings = () => <div className="p-4">Settings</div>;
// const helpCenter = () => <div className="p-4">Help Center</div>;

const App = () => {
  const location = useLocation();
  let headerTitle = " ";

  switch (location.pathname) {
    case "/dashboard":
      headerTitle = "Dashboard";
      break;
    case "/managecompanies":
      headerTitle = "Manage Companies";
      break;
    case "/documentsharing":
      headerTitle = "Document Sharing";
      break;
    case "/usermanagement":
      headerTitle = "User Management";
      break;
    case "/settings":
      headerTitle = "Settings";
      break;
    case "/helpcenter":
      headerTitle = "Help Center";
      break;
    case "/managemembers":
      headerTitle = "Manage Members";
      break;
    case "/kycscreening":
      headerTitle = "KYC Screening";
      break;
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-250">
        <Header title={headerTitle} />
        {/*pass in the title prop*/}

        <main className="flex-1 p-6">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/managecompanies" element={<ManageCompanies />} />
            <Route path="/documentsharing" element={<DocumentSharing />} />
            <Route path="/usermanagement" element={<UserManagement />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/helpcenter" element={<HelpCenter />} />
            <Route path="/managemembers" element={<ManageMembers />} />
            <Route path="/kycscreening" element={<KycScreening />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;

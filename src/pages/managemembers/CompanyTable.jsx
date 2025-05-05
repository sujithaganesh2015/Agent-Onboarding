import React from "react";

const CompanyTable = () => {
  const companies = [
    {
      code: "C001",
      name: "Miami development",
      status: "Cancelled",
      contributors: ["W", "SF"],
      type: "New build",
      kyc: "Cancelled",
      expiry: "Thu 12 Dec",
    },
    {
      code: "C002",
      name: "Prague apartment",
      status: "In review",
      contributors: ["W", "SF"],
      type: "Reconstruction",
      kyc: "In review",
      expiry: "Thu 12 Dec",
    },
    {
      code: "C003",
      name: "Czech redevelopment",
      status: "In progress",
      contributors: ["W"],
      type: "Commercial",
      kyc: "In progress",
      expiry: "Wed 04 Dec",
    },
    {
      code: "C004",
      name: "Paris apartment blocks",
      status: "In progress",
      contributors: ["W", "SF"],
      type: "Residential",
      kyc: "In progress",
      expiry: "Tue 03 Dec",
    },
    {
      code: "C005",
      name: "India corporate property",
      status: "In review",
      contributors: ["W", "SF"],
      type: "Commercial",
      kyc: "In review",
      expiry: "Mon 15 Jan",
    },
    {
      code: "C006",
      name: "New Delhi commercial",
      status: "In review",
      contributors: ["W", "SF"],
      type: "Commercial",
      kyc: "In review",
      expiry: "Thu 21 Oct",
    },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "Cancelled":
        return "status-cancelled";
      case "In review":
        return "status-in-review";
      case "In progress":
        return "status-in-progress";
      default:
        return "";
    }
  };

  const getKycClass = (kyc) => {
    switch (kyc) {
      case "Cancelled":
        return "kyc-cancelled";
      case "In review":
        return "kyc-in-review";
      case "In progress":
        return "kyc-in-progress";
      default:
        return "";
    }
  };

  const getTypeClass = (type) => {
    switch (type) {
      case "New build":
        return "type-new-build";
      case "Reconstruction":
        return "type-reconstruction";
      case "Commercial":
        return "type-commercial";
      case "Residential":
        return "type-residential";
      default:
        return "";
    }
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>
              Code <span className="sort-icon">↑</span>
            </th>
            <th>
              Company name <span className="sort-icon">↑</span>
            </th>
            <th>Status</th>
            <th>Contributors</th>
            <th>Company Type</th>
            <th>KYC status</th>
            <th>Document expiry</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.code}>
              <td>{company.code}</td>
              <td>
                <span className="folder-icon">📁</span> {company.name}
              </td>
              <td>
                <span
                  className={`status-badge ${getStatusClass(company.status)}`}
                >
                  {company.status}
                </span>
              </td>
              <td>
                <div className="contributors">
                  {company.contributors.map((contributor, index) => (
                    <span key={index} className="contributor">
                      {contributor}
                    </span>
                  ))}
                </div>
              </td>
              <td>
                <span className={`type-badge ${getTypeClass(company.type)}`}>
                  {company.type}
                </span>
              </td>
              <td>
                <span className={`kyc-badge ${getKycClass(company.kyc)}`}>
                  {company.kyc}
                </span>
              </td>
              <td>
                <span className="calendar-icon">📅</span> {company.expiry}
              </td>
              <td>
                <span className="menu-icon">⋮</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyTable;

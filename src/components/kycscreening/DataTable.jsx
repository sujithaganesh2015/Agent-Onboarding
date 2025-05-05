import React from "react";

const DataTable = () => {
  const tableData = [
    {
      name: "Miami development",
      docStatus: "CANCELLED",
      empType: "Employee",
      contributor: "👤",
      amlCheck: "NO ISSUES",
      uploadDocs: true,
      updatedDate: "Thu 12 Dec",
    },
    {
      name: "Prague apartment",
      docStatus: "IN REVIEW",
      empType: "Stake Holder",
      contributor: "VW",
      amlCheck: "CRITICAL ISSUE",
      uploadDocs: false,
      updatedDate: "Thu 12 Dec",
    },
    {
      name: "Czech redevelopment",
      docStatus: "IN PROGRESS",
      empType: "Director",
      contributor: "👤",
      amlCheck: "NEGLIGIBLE",
      uploadDocs: true,
      updatedDate: "Wed 04 Dec",
    },
  ];

  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>Name ↑</th>
          <th>Document Status</th>
          <th>Employee Type</th>
          <th>Contributor</th>
          <th>AML Check</th>
          <th>Upload Docs</th>
          <th>Updated date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index}>
            <td>
              <input type="checkbox" />
            </td>
            <td>{row.name}</td>
            <td>
              <span
                className={`status-badge ${
                  row.docStatus === "CANCELLED"
                    ? "cancelled"
                    : row.docStatus === "IN REVIEW"
                    ? "in-review"
                    : "in-progress"
                }`}
              >
                {row.docStatus}
              </span>
            </td>
            <td>{row.empType}</td>
            <td>
              <span
                className={`contributor ${
                  row.contributor === "VW" ? "vw" : ""
                }`}
              >
                {row.contributor}
              </span>
            </td>
            <td>
              <span
                className={`aml-check ${
                  row.amlCheck === "NO ISSUES"
                    ? "no-issues"
                    : row.amlCheck === "CRITICAL ISSUE"
                    ? "critical"
                    : "negligible"
                }`}
              >
                {row.amlCheck}
              </span>
            </td>
            <td>
              {row.uploadDocs ? (
                <span className="upload-icon">📤</span>
              ) : (
                <span className="upload-icon disabled">📤</span>
              )}
            </td>
            <td>{row.updatedDate}</td>
            <td>
              <span className="actions">⋯</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;

import React from "react";

const DocumentTable = () => {
  const documents = [
    {
      code: "C001",
      company: "Miami development",
      docType: "Company Info",
      sharedOn: "Thu 12 Dec",
    },
    {
      code: "C002",
      company: "Prague apartment",
      docType: "Only Employee Info",
      sharedOn: "Thu 12 Dec",
    },
    {
      code: "C003",
      company: "Czech redevelopment",
      docType: "All Info",
      sharedOn: "Wed 04 Dec",
    },
    {
      code: "C004",
      company: "Paris apartment blocks",
      docType: "Employee & Directors Info",
      sharedOn: "Tue 03 Dec",
    },
    {
      code: "C005",
      company: "India corporate property",
      docType: "All Info",
      sharedOn: "Mon 15 Jan",
    },
    {
      code: "C006",
      company: "New Delhi commercial",
      docType: "All Info",
      sharedOn: "Thu 21 Oct",
    },
  ];

  return (
    <div className="document-table-container">
      <h3>Shared Document Info</h3>
      <table className="document-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>
              Code <span>↑</span>
            </th>
            <th>
              Company Shared with <span>↑</span>
            </th>
            <th>
              Document Type <span>↑</span>
            </th>
            <th>
              Shared On <span>↑</span>
            </th>
            <th>
              Actions <span>↑</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{doc.code}</td>
              <td>{doc.company}</td>
              <td>{doc.docType}</td>
              <td>{doc.sharedOn}</td>
              <td>
                <span className="actions">⋯</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DocumentTable;

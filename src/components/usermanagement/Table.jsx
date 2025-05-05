import React from "react";

const Table = () => {
  const users = [
    {
      id: "U001",
      code: "C001",
      name: "Miami development",
      type: "System User",
      status: "Disabled",
      verification: "Cancelled",
      joined: "Thu 12 Dec",
    },
    {
      id: "U002",
      code: "C002",
      name: "Prague",
      type: "System User",
      status: "Inactive",
      verification: "In Review",
      joined: "Thu 12 Dec",
    },
    {
      id: "U003",
      code: "C003",
      name: "Czech redevelopment",
      type: "System User",
      status: "Active",
      verification: "Success",
      joined: "Wed 04 Dec",
    },
    {
      id: "U004",
      code: "C004",
      name: "Paris apartment blocks",
      type: "System User",
      status: "Active",
      verification: "In Progress",
      joined: "Tue 03 Dec",
    },
    {
      id: "U005",
      code: "C005",
      name: "India corporate property",
      type: "Agent User",
      status: "Inactive",
      verification: "In Review",
      joined: "Mon 15 Jan",
    },
    {
      id: "U006",
      code: "C006",
      name: "New Delhi commercial",
      type: "System User",
      status: "Inactive",
      verification: "In Review",
      joined: "Thu 21 Oct",
    },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "Disabled":
        return "status-disabled";
      case "Inactive":
        return "status-inactive";
      case "Active":
        return "status-active";
      default:
        return "";
    }
  };

  const getVerificationClass = (verification) => {
    switch (verification) {
      case "Cancelled":
        return "verification-cancelled";
      case "In Review":
        return "verification-in-review";
      case "Success":
        return "verification-success";
      case "In Progress":
        return "verification-in-progress";
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
              <input type="checkbox" />
            </th>
            <th>
              User Id <span className="sort-icon">↑</span>
            </th>
            <th>
              Code <span className="sort-icon">↑</span>
            </th>
            <th>
              User name <span className="sort-icon">↑</span>
            </th>
            <th>
              User Type <span className="sort-icon">↑</span>
            </th>
            <th>Status</th>
            <th>Verification status</th>
            <th>Joined On</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{user.id}</td>
              <td>{user.code}</td>
              <td>
                <span className="folder-icon">📁</span> {user.name}
              </td>
              <td>{user.type}</td>
              <td>
                <span className={`status-badge ${getStatusClass(user.status)}`}>
                  {user.status}
                </span>
              </td>
              <td>
                <span
                  className={`verification-badge ${getVerificationClass(
                    user.verification
                  )}`}
                >
                  {user.verification}
                </span>
              </td>
              <td>
                <span className="calendar-icon">📅</span> {user.joined}
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

export default Table;

import React from "react";

const Users = () => {
  const users = [
    {
      name: "Balaji Nant",
      role: "Admin",
      status: "A",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "Nithya Menon",
      role: "Agent",
      status: "R",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "Meera Gonzalez",
      role: "In",
      status: "In",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "Karthik Subramani",
      role: "Agent",
      status: "R",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "Mithra B",
      role: "Agent",
      status: "A",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "Jagathes Naraya",
      role: "Agent",
      status: "D",
      avatar: "https://via.placeholder.com/40",
    },
    // {
    //   name: "Steve Rogers",
    //   role: "Agent",
    //   status: "A",
    //   avatar: "https://via.placeholder.com/40",
    // },
    // {
    //   name: "Richard Hendricks",
    //   role: "Admin",
    //   status: "In",
    //   avatar: "https://via.placeholder.com/40",
    // },
  ];

  return (
    <div className="dashboard-section">
      {/* <div className="flex items-center justify-between"> */}
      {/* <button className="tab3">Users</button>
        <button className="tab3">Status</button>
      </div> */}
      <div className="users-list-section">
        <div className="flex items-center justify-between">
          <button className="tab3">Users</button>
          <button className="tab3">Status</button>
        </div>
        {users.map((user, index) => (
          <div key={index} className="user-item">
            <img src={user.avatar} alt="Profile" className="user-avatar" />
            <div className="user-content">
              <p className="user-name">
                {user.name.length > 15
                  ? `${user.name.substring(0, 12)}...`
                  : user.name}
              </p>
              <p className="user-role">{user.role}</p>
            </div>
            <span className={`status-badge ${user.status.toLowerCase()}`}>
              {user.status}
            </span>
          </div>
        ))}
        <button className="see-more-btn">Manage</button>
      </div>
      <div></div>
    </div>
  );
};

export default Users;

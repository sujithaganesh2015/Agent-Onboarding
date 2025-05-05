import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Action from "./Action";
import DocumentManagement from "./DocumentManagement";
import QuickAction from "./QuickAction";
import Users from "./Users";

const Dashboard = () => {
  return (
    <div>
      <div className="dashboard-container flex ">
        {/* Header Tabs */}
        {/* <div className="header-tabs flex justify-between items-center"></div> */}

        {/* Company Onboarding Section */}
        <div className="dashboard-section">
          <button className="tab active">Company Onboarding</button>
          <div className="chart-section">
            <div className="circular-chart">
              <CircularProgressbar
                value={70} // In Review: 30%
                styles={buildStyles({
                  pathColor: "#3B82F6", // Blue for In Review
                  trailColor: "#E5E7EB",
                })}
              />
              <div className="inner-circle">
                <CircularProgressbar
                  value={35} // Cancelled: 25%
                  styles={buildStyles({
                    pathColor: "#FF6D38", // Orange for Cancelled
                    trailColor: "#E5E7EB",
                  })}
                />
                <div className="inner-most-circle">
                  <CircularProgressbar
                    value={20} // Verified: 13%
                    styles={buildStyles({
                      pathColor: "#34D399", // Green for Verified
                      trailColor: "#E5E7EB",
                    })}
                  />
                </div>
              </div>
            </div>

            {/* Chart Legend */}
            <div className="chart-legend">
              <div className="legend-item">
                <span className="dot verified"></span>
                <span>Verified</span>
                <span>8,085 13%</span>
              </div>
              <div className="legend-item">
                <span className="dot in-review"></span>
                <span>In Review</span>
                <span>8,085 30%</span>
              </div>
              <div className="legend-item">
                <span className="dot cancelled"></span>
                <span>Cancelled</span>
                <span>8,085 25%</span>
              </div>
            </div>
          </div>
        </div>

        {/* System Overview Section */}
        <div className="dashboard-section  ">
          <button className="tab ">System Overview</button>
          <div className="stats-section  ">
            <div className="stats-card ">
              <div className="card-content ">
                <h3>5,461</h3>
                <p>Today</p>
              </div>
              <div className="card-icon">
                <CircularProgressbar
                  value={(5461 / 8085) * 100} // Percentage of Today/Total for KYC
                  styles={buildStyles({
                    pathColor: "#3B82F6",
                    trailColor: "#E5E7EB",
                  })}
                />
                <span>KYC</span>
              </div>
              <div className="total">
                <p>8,085</p>
                <p>Total</p>
              </div>
            </div>

            <div className="stats-card">
              <div className="card-content">
                <h3>140</h3>
                <p>Today</p>
              </div>
              <div className="card-icon">
                <CircularProgressbar
                  value={(140 / 120) * 100} // Percentage of Today/Total for Docs
                  styles={buildStyles({
                    pathColor: "#FF6D38",
                    trailColor: "#E5E7EB",
                  })}
                />
                <span>Docs</span>
              </div>
              <div className="total">
                <p>120</p>
                <p>Total</p>
              </div>
            </div>
          </div>
        </div>

        {/* Users Overview Section */}

        <div className="dashboard-section">
          <button className="tab1">Users Overview</button>
          <div className="users-section ">
            <div className="users-card">
              <div className="users-icon">
                <span className="user-symbol">👥</span>
              </div>
              <div className="users-content ">
                <p>Users</p>
                <h3>72</h3>
                <p className="change positive">+2</p>
              </div>
            </div>

            <div className="users-card">
              <div className="users-content">
                <p>Sessions</p>
                <h3>87</h3>
                <p className="change positive">+47%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div>
          <QuickAction />
        </div>

        <div>
          <DocumentManagement />
        </div>

        <div>
          <Users />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

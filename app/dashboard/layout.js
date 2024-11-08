import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <div className="dashboard">
        <h1 xlassname="dashboard-heading">Dashboard</h1>
        <div className="main-dashboard">
          <div className="dashboard-options">
            <div className="dashboard-options-heading">Options: </div>
            <div className="dashboard-options-content">
              <div className="dashboard-option">Option 1</div>
              <div className="dashboard-option">Option 2</div>
              <div className="dashboard-option">Option 3</div>
            </div>
          </div>
          <div className="dashboard-data">{children}</div>
        </div>
      </div>
    </div>
  );
}

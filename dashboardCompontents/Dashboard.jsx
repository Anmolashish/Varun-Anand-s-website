import React from "react";

export default function dashboard() {
  return (
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
        <div className="dashboard-data"></div>
      </div>
    </div>
  );
}

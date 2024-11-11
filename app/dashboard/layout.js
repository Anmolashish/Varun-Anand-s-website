import React from "react";
import Link from "next/link";

export default function layout({ children }) {
  return (
    <div>
      <div className="dashboard">
        <h1 xlassname="dashboard-heading">Dashboard</h1>
        <div className="main-dashboard">
          <div className="dashboard-options">
            <div className="dashboard-options-heading">Options: </div>
            <div className="dashboard-options-content">
              <Link className="nav-tabs" href={"/dashboard/contact"}>
                <div className="dashboard-option">Contact</div>
              </Link>
              <Link className="nav-tabs" href={"/dashboard/shayari"}>
                <div className="dashboard-option">Shayari</div>
              </Link>
              <Link className="nav-tabs" href={"/dashboard/events"}>
                <div className="dashboard-option">Events</div>
              </Link>
              <Link className="nav-tabs" href={"/dashboard/booking"}>
                <div className="dashboard-option">Booking</div>
              </Link>
            </div>
          </div>
          <div className="dashboard-data">{children}</div>
        </div>
      </div>
    </div>
  );
}

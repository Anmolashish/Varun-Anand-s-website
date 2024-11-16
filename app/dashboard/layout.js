"use client";
import React from "react";
import Link from "next/link";

export default function layout({ children }) {
  function options() {
    const sideOptions = document.querySelector(".dashboard-options");
    sideOptions.classList.toggle("hide-sidebar");
  }

  return (
    <div>
      <div className="dashboard">
        <div className="dashboard-header">
          {" "}
          <div className="dashboard-heading">Dashboard</div>
          <div className="hamburger-2" onClick={options}>
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-filled/50/menu--v1.png"
              alt="menu--v1"
            />
          </div>
        </div>

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

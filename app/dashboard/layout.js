"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Layout({ children }) {
  const router = useRouter();

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated"); // Remove authentication flag
    localStorage.removeItem("loginTimestamp"); // Remove login timestamp
    router.push("/"); // Redirect to home page
  };

  // Function to handle session timeout
  const checkSessionTimeout = () => {
    const loginTimestamp = localStorage.getItem("loginTimestamp");
    const sessionDuration = 15 * 60 * 1000; // 15 minutes in milliseconds

    if (loginTimestamp) {
      const currentTime = new Date().getTime();
      if (currentTime - parseInt(loginTimestamp) > sessionDuration) {
        handleLogout(); // Logout user if session is expired
      }
    }
  };

  useEffect(() => {
    // Check authentication on load
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      router.push("/login"); // Redirect to login if not authenticated
    }

    // Set an interval to check for session timeout
    const sessionCheckInterval = setInterval(checkSessionTimeout, 1000);

    return () => clearInterval(sessionCheckInterval); // Clear interval on unmount
  }, []);

  // Function to toggle sidebar options
  function options() {
    const sideOptions = document.querySelector(".dashboard-options");
    sideOptions.classList.toggle("hide-sidebar");
  }

  return (
    <div>
      <div className="dashboard">
        {/* Dashboard Header */}
        <div className="dashboard-header">
          <div className="dashboard-heading">Dashboard</div>
          <div className="hamburger-2" onClick={options}>
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-filled/50/menu--v1.png"
              alt="menu--v1"
            />
          </div>
          {/* Logout Button */}
        </div>

        {/* Dashboard Main Section */}
        <div className="main-dashboard">
          {/* Sidebar Options */}
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
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </div>

          {/* Main Content */}
          <div className="dashboard-data">{children}</div>
        </div>
      </div>
    </div>
  );
}

import React, { useContext } from "react";
import Dashboard from "dashboardCompontents/Dashboard";

export default function page({ params }) {
  return <Dashboard id={params.id} />;
}

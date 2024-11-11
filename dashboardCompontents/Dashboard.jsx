"use client";
import React, { useContext } from "react";
import { ShayariData } from "context/ShayariContext";
import DashboardTable from "./DashboardTable";
import Link from "next/link";

export default function Dashboard(props) {
  const { formData } = useContext(ShayariData);
  const heading = formData[props.id].heading;
  const columns = [...formData[props.id].headers];
  const link = formData[props.id].links;
  return (
    <div className="dashboard-container">
      <div className="dashboard-content-header">
        <div className="dashboard-options-heading dashboard-container-heading">
          {heading}
        </div>
        <Link className="nav-tabs" href={link}>
          <div className="form-button">
            <div className="form-button">{props.id} form</div>
          </div>
        </Link>
      </div>
      <div className="dashboard-table-container">
        <table className="dashboard-data-table">
          <thead className="dashboard-table-header">
            <tr>
              <th className="table-header-cell">S.no</th>
              {columns.map((col) => (
                <th key={col.key} className="table-header-cell">
                  {col.label}
                </th>
              ))}
              <th className="table-header-cell">Delete</th>
            </tr>
          </thead>
          <DashboardTable data={formData[props.id].data} />
        </table>
      </div>
    </div>
  );
}

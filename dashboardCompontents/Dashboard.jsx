"use client";
import React, { useContext, useEffect, useState } from "react";
import { ShayariData } from "context/ShayariContext";
import DashboardTable from "./DashboardTable";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getAllShayri } from "@/server";
import { getShayriMutation } from "@/context/http/GetShayari";

export default function Dashboard(props) {
  const { formData } = useContext(ShayariData);
  const heading = formData[props.id].heading;
  const columns = [...formData[props.id].headers];
  const link = formData[props.id].links;
  const data = formData[props.id].data;

  const { data: shayriData, isLoading, isError, error } = getShayriMutation();

  if (isLoading) {
    return (
      <div className="loader-container">
        <svg viewBox="25 25 50 50" className="loading">
          <circle className="loader" r="20" cy="50" cx="50"></circle>
        </svg>
      </div>
    );
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-content-header">
        <div className="dashboard-options-heading dashboard-container-heading">
          {heading}
        </div>
        <Link className="nav-tabs" href={link}>
          <div className="form-button">{props.id} form</div>
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
          <DashboardTable tableName={props.id} />
        </table>
      </div>
    </div>
  );
}

import React from "react";

const DashboardTable = ({ data = [] }) => {
  // Check if data is empty or undefined, show "No data available" message
  if (data.length === 0) {
    return (
      <tbody className="dashboard-table-body">
        <tr>
          <td colSpan="100%" className="table-cell no-data">
            No data available
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody className="dashboard-table-body">
      {data.map((item, index) => (
        <tr key={item.id || index} className="table-row">
          {/* <td className="table-cell">{index + 1}</td> */}
          {Object.keys(item).map((col) => (
            <td key={col} className="table-cell">
              {Array.isArray(item[col])
                ? item[col].join(", ")
                : item[col] || "—"}
            </td>
          ))}
          <td className="table-cell"> X </td>
        </tr>
      ))}
    </tbody>
  );
};

export default DashboardTable;

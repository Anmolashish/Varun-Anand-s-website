import React from "react";
import PropTypes from "prop-types";
import ShayariTable from "./ShayariTable";
import ContactTable from "./ContactTable";
import BookingTable from "./BookingTable";

const DashboardTable = (props) => {
  if (props.tableName == "shayari") {
    console.log(props.tableName);
    return <ShayariTable />;
  } else if (props.tableName == "contact") {
    return <ContactTable />;
  } else if (props.tableName == "booking") {
    return <BookingTable />;
  } else {
    return "Invalid Table name";
  }

  // // Check if data is empty or undefined, show "No data available" message
  // if (data.length === 0) {
  //   return (
  //     <tbody className="dashboard-table-body">
  //       <tr>
  //         <td colSpan="100%" className="table-cell no-data">
  //           No data available
  //         </td>
  //       </tr>
  //     </tbody>
  //   );
  // }
  // return (
  //   <tbody className="dashboard-table-body">
  //     {data.map((item, index) => (
  //       <tr key={item._id || index} className="table-row">
  //         {/* Render each column dynamically, excluding date fields */}
  //         {Object.keys(item)
  //           .filter((col) => !(item[col] instanceof Date)) // Exclude date fields
  //           .map((col) => (
  //             <td key={col} className="table-cell">
  //               {Array.isArray(item[col])
  //                 ? item[col].join(", ") // Join array elements into a string
  //                 : item[col] || "—"}
  //             </td>
  //           ))}
  //         {/* Add an extra cell for actions */}
  //         <td className="table-cell">
  //           {/* Delete button */}
  //           <button
  //             className="action-button"
  //             onClick={() => handleDelete(item._id)} // Pass item ID to delete
  //           >
  //             X
  //           </button>
  //         </td>
  //       </tr>
  //     ))}
  //   </tbody>
  // );
};

// DashboardTable.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.objectOf(
//       PropTypes.oneOfType([
//         PropTypes.string,
//         PropTypes.number,
//         PropTypes.array,
//         PropTypes.object,
//       ])
//     )
//   ),
//   handleDelete: PropTypes.func.isRequired, // Add prop validation
// };

export default DashboardTable;

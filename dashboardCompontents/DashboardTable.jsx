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
};

export default DashboardTable;

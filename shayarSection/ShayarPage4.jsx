"use client";
import { useContext, useState } from "react";
import { ShayariData } from "context/ShayariContext";

export default function ShayariDetailPage(props) {
  const slug = props.heading;
  const { shayaris } = useContext(ShayariData); // Access shayaris from context

  const selectedShayari = shayaris.find((shayari) => {
    const generatedSlug = shayari.shayariname
      .toLowerCase()
      .replace(/[,\s]+/g, "-") // Replace spaces and commas with dashes
      .replace(/[^\w\-]+/g, "");
    return generatedSlug === slug;
  });

  if (!selectedShayari) return <p>Shayari not found</p>;
  // const [shayari, setShayari] = useState(selectedShayari.shayari);
  return (
    <div className="shayari-data">
      <h1>{selectedShayari.shayariname}</h1>
      <p>{selectedShayari.shayari}</p>
    </div>
  );
}

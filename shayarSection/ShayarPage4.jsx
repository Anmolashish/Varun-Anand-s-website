"use client";
import { useContext } from "react";
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

  return (
    <div className="shayari-data">
      <div className="shayari-container">
        <div className="shayari-structure">
          <div className="back-button"></div>
          <div className="left-line"></div>
          <div
            style={{
              height: "200px",
              width: "400px",
              alignItems: "center",
            }}
          >
            <h1 style={{ marginBottom: "30px" }}>
              {selectedShayari.shayariname}
            </h1>
            <h3>{selectedShayari.shayari}</h3>
          </div>
          <div className="right-line"></div>
          <div className="front-button"></div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
          }}
        ></div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "7px",
        }}
      >
        <div className="button-container">
          <button type="button" className="share-button">
            <span className="button__text">Share</span>
            <span className="button__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 134 134"
                className="svg"
              >
                <circle
                  strokeWidth="13"
                  stroke="white"
                  r="20.5"
                  cy="27"
                  cx="107"
                ></circle>
                <circle
                  strokeWidth="13"
                  stroke="white"
                  r="20.5"
                  cy="107"
                  cx="107"
                ></circle>
                <circle
                  strokeWidth="13"
                  stroke="white"
                  r="20.5"
                  cy="67"
                  cx="27"
                ></circle>
                <line
                  strokeWidth="13"
                  stroke="white"
                  y2="36.1862"
                  x2="88.0931"
                  y1="56.1862"
                  x1="48.0931"
                ></line>
                <line
                  strokeWidth="13"
                  stroke="white"
                  y2="97.6221"
                  x2="89.0893"
                  y1="78.1486"
                  x1="48.8304"
                ></line>
              </svg>
            </span>
          </button>
        </div>
        <button className="button2">Copy</button>
        <button className="button2">Urdu</button>
      </div>
    </div>
  );
}

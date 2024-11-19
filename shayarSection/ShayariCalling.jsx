import React from "react";
import Link from "next/link";

export default function ShayariCalling(props) {
  const copyText = () => {
    navigator.clipboard.writeText(props.shayari);
    alert("Shayari copied!");
  };
  return (
    <div className="per-shayari-container">
      <div className="shayari-container">
        <div style={{ alignItems: "center" }}>
          <span className="shayari-number">{props.id}</span>
          <span className="shayari-text">
            {props.shayariname.charAt(0).toUpperCase() +
              props.shayariname.slice(1)}
          </span>
          <p className="shayari-author">- Varun Anand</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
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

          <button className="button2" onClick={copyText}>
            Copy
          </button>
          <Link
            href={`${props.slug}/${props.shayariname
              .toLowerCase()
              .replace(/[,\s]+/g, "-")
              .replace(/[^\w\-]+/g, "")}`}
          >
            <button className="button2">More...</button>
          </Link>
        </div>
        <img
          src="/Images/border-top-image1.png"
          alt="DESIGN"
          className="design-style1"
        />
      </div>
    </div>
  );
}

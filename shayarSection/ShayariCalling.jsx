import React from "react";
import Link from "next/link";

export default function ShayariCalling(props) {
  return (
    <>
      <div className="shayari-container">
        <div style={{ display: "flex", alignItems: "center" }}>
          <span className="shayari-number">{props.id}</span>
          <div>
            <span className="shayari-text">
              <img src="/Images/lquote.png" className="quote" />
              {props.shayariname}
              <img src="/Images/rquote.png" className="quote" />
            </span>
            <p className="shayari-author">- Varun Anand</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a href={props.sharelink} target="_blank" rel="noopener noreferrer">
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
          </a>
          <button className="button2">Copy</button>
          <Link href={`mohabbat/shayar1`}>
            <button className="button2">More...</button>
          </Link>
        </div>
        <img
          src="/Images/shayariLayout.png"
          alt="DESIGN"
          className="design-style1"
        />
      </div>
    </>
  );
}

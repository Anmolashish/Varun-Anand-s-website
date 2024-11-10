"use client";
import { useContext, useEffect, useState } from "react";
import { ShayariData } from "context/ShayariContext";
import ShayariCalling from "./ShayariCalling";

export default function ShayariPage3(props) {
  const { basicData, getNextChunkByKeyword, loadMoreForKeyword, visibleData } =
    useContext(ShayariData);
  const [shayari, setShayari] = useState([]);

  useEffect(() => {
    // Check if there's already visible data for this section
    const existingShayari =
      visibleData[props.heading] || getNextChunkByKeyword(props.heading);

    // Set the shayari based on whether there's existing data or loading the initial chunk
    setShayari(existingShayari);
  }, [props.heading, getNextChunkByKeyword, visibleData]);

  if (!basicData[props.heading]) return null;

  return (
    <div className="layout-shayari">
      <img
        src={basicData[props.heading].imageSrc}
        alt="Varun Anand"
        className="about-shayar-image"
        loading="lazy"
        style={{ alignItems: "center", marginLeft: "80px", marginTop: "70px" }}
      />
      <div style={{ marginTop: "200px" }}>
        <h1 style={{ textAlign: "center", color: "#b71c1c" }}>
          {basicData[props.heading].heading}
        </h1>

        {shayari.map((element, index) => (
          <ShayariCalling
            key={element.id}
            id={index + 1}
            shayariname={element.shayariname}
            // sharelink={element.sharelink}
            shayari={element.shayari}
            slug={props.heading}
          />
        ))}
      </div>
      <div
        className="see-more"
        onClick={() => loadMoreForKeyword(props.heading)}
      >
        <button className="btn">
          See more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            height="15px"
            width="15px"
            className="icon"
          >
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="1.5"
              stroke="#292D32"
              d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

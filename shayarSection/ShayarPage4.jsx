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

  const [showUrdu, setShowUrdu] = useState(false); // initial state it false for urdu so default in hindi

  if (!selectedShayari)
    return (
      <p>
        Yahin pe khatam hoti hai shayari ki baat, Fir aayenge hum naye alfaaz ke
        saath.
      </p>
    );

  const copyText = () => {
    navigator.clipboard.writeText(
      showUrdu ? selectedShayari.urdushayari : selectedShayari.shayari
    );
    alert("Shayari copied!");
  };

  const urduChange = () => {
    setShowUrdu(!showUrdu); // it change the value each current time
  };

  return (
    <div style={{ background: "#f7e7bb", height: "auto" }}>
      <div className="shayari-containers">
        <div className="shayari-data">
          <h1 className="shayari-heading">
            {selectedShayari.shayariname.charAt(0).toUpperCase() +
              selectedShayari.shayariname.slice(1)}
          </h1>
          <p className="shayari-texts">
            {showUrdu ? selectedShayari.urdushayari : selectedShayari.shayari}
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "15px",
              marginTop: "40px",
            }}
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
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
            <button className="button2" onClick={copyText}>
              Copy
            </button>
            <button className="button2" onClick={urduChange}>
              {showUrdu ? "Hindi" : "Urdu"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

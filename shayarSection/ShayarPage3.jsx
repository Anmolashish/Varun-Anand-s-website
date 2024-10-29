"use client";
import Image from "next/image";
import Link from "next/link";

export default function ShayarPage3(props) {
  const data = [
    {
      id: 1,
      heading: "Mohabat shayaris",
      shayari: [
        {
          id: 1,
          shayariname: "Tum haar ke dil apana meri jeet amar kar do...",
          shayari: "",
          sharelink: "",
        },
        {
          id: 2,
          shayariname: "Tum haar ke dil apana meri jeet amar kar do...",
          shayari: "",
          sharelink: "",
        },
        {
          id: 3,
          shayariname: "Tum haar ke dil apana meri jeet amar kar do...",
          shayari: "",
          sharelink: "",
        },
        {
          id: 4,
          shayariname: "Tum haar ke dil apana meri jeet amar kar do...",
          shayari: "",
          sharelink: "",
        },
        {
          id: 5,
          shayariname: "Tum haar ke dil apana meri jeet amar kar do...",
          shayari: "",
          sharelink: "",
        },
        {
          id: 6,
          shayariname: "Tum haar ke dil apana meri jeet amar kar do...",
          shayari: "",
          sharelink: "",
        },
      ],
      keywords: [],
    },
    {},
  ];
  const copyText = () => {
    const text = document.querySelector(".shayari-text").innerText;
    navigator.clipboard.writeText(text);
    alert("Shayari copied!");
  };

  return (
    <div className="layout-shayari">
      <img
        src="/Images/mohabbat.jpeg"
        alt="Varun Anand"
        className="about-shayar-image"
        loading="lazy"
        style={{ alignItems: "center", marginLeft: "80px", marginTop: "70px" }}
      />
      <div style={{ marginTop: "200px" }}>
        <h1 style={{ textAlign: "center", color: "#b71c1c" }}>
          {data[0].heading}
        </h1>

        {data[0].shayari.map((element) => {
          return (
            <div className="shayari-container" key={element.id}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span className="shayari-number">{element.id}</span>
                <div>
                  <span className="shayari-text">
                    <img src="/Images/lquote.png" className="quote" />
                    {element.shayariname}
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
                <a
                  href={element.sharelink}
                  target="_blank"
                  rel="noopener noreferrer"
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
                </a>
                <button className="button2" onClick={copyText}>
                  Copy
                </button>
                <Link href="shayarsec/hello">
                  <button className="button2">More...</button>
                </Link>
              </div>
              <img
                src="/Images/shayariLayout.png"
                alt="DESIGN"
                className="design-style1"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

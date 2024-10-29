"use client";
import Link from "next/link";
import React from "react";

export default function Layout() {
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
          Mohabat shayaris
        </h1>
        <div className="shayari-container">
          <div style={{ display: "flex", alignItems: "center" }}>
            <span className="shayari-number">1.</span>
            <div>
              <span className="shayari-text">
                <img src="/Images/lquote.png" className="quote" />
                Tum haar ke dil apana meri jeet amar kar do...
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
              href="https://web.whatsapp.com/"
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
        <div className="shayari-container">
          <div style={{ display: "flex", alignItems: "center" }}>
            <span className="shayari-number">2.</span>
            <div>
              <span className="shayari-text">
                <img src="/Images/lquote.png" className="quote" />
                Tum haar ke dil apana meri jeet amar kar do...
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
              href="https://web.whatsapp.com/"
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
        <div className="shayari-container">
          <div style={{ display: "flex", alignItems: "center" }}>
            <span className="shayari-number">3.</span>
            <div>
              <span className="shayari-text">
                <img src="/Images/lquote.png" className="quote" />
                Tum haar ke dil apana meri jeet amar kar do...
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
              href="https://web.whatsapp.com/"
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
        <div className="shayari-container">
          <div style={{ display: "flex", alignItems: "center" }}>
            <span className="shayari-number">4.</span>
            <div>
              <span className="shayari-text">
                <img src="/Images/lquote.png" className="quote" />
                Tum haar ke dil apana meri jeet amar kar do...
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
              href="https://web.whatsapp.com/"
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
        <div className="shayari-container">
          <div style={{ display: "flex", alignItems: "center" }}>
            <span className="shayari-number">5.</span>
            <div>
              <span className="shayari-text">
                <img src="/Images/lquote.png" className="quote" />
                Tum haar ke dil apana meri jeet amar kar do...
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
              href="https://web.whatsapp.com/"
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
        <div className="shayari-container">
          <div style={{ display: "flex", alignItems: "center" }}>
            <span className="shayari-number">6.</span>
            <div>
              <span className="shayari-text">
                <img src="/Images/lquote.png" className="quote" />
                Tum haar ke dil apana meri jeet amar kar do...
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
              href="https://web.whatsapp.com/"
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
      </div>
    </div>
  );
}
